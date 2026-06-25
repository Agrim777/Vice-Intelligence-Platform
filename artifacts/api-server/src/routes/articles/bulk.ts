import { Router, type IRouter } from "express";
import { eq } from "drizzle-orm";
import { db, articlesTable } from "@workspace/db";
import { logger } from "../../lib/logger";
import { Octokit } from "@octokit/rest";
import OpenAI from "openai";

const router: IRouter = Router();

// Lazy-initialize OpenAI client (see articles/index.ts for rationale).
let _openai: OpenAI | null = null;
function getOpenAI(): OpenAI {
  if (_openai) return _openai;
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error(
      "OPENAI_API_KEY environment variable is not set. Add it in Railway → Variables to enable article generation.",
    );
  }
  _openai = new OpenAI({ apiKey });
  return _openai;
}

const GITHUB_OWNER = "Agrim777";
const GITHUB_REPO = "Vice-Intelligence-Platform";

const SYSTEM_PROMPT = `You are the Chief Content Editor for a GTA 6-focused gaming publication.

My website is already live and deployed.

Do NOT suggest website improvements, redesigns, SEO audits, UI changes, or technical changes.

Your only task is to generate new high-quality articles that can be published immediately.

For every request:

1. First identify the highest traffic GTA 6 topic that has not yet been fully covered.
2. Generate a complete article between 2,500 and 5,000 words.
3. Write like an experienced gaming journalist.
4. Make the article feel human-written.
5. Avoid AI-sounding phrases.
6. Optimize for Google SEO and AI search engines.
7. Optimize for featured snippets.
8. Optimize for long-tail keywords.
9. Focus on pre-launch GTA 6 traffic opportunities.

Every article must include:

* SEO Title (on a line starting with "SEO Title:")
* Meta Title (on a line starting with "Meta Title:")
* Meta Description (on a line starting with "Meta Description:")
* URL Slug (on a line starting with "URL Slug:")
* Open Graph Title
* Open Graph Description
* H1 Title
* Table of Contents
* Introduction
* Multiple H2 and H3 sections
* Comparison tables where useful
* FAQ Section (minimum 15 FAQs)
* FAQ Schema JSON
* Article Schema JSON
* Internal Linking Opportunities
* Featured Image Prompt
* Social Media Post
* Pinterest Description
* YouTube Description
* Call To Action

Content Strategy — generate articles around:
GTA 6 News, GTA 6 Release Date, GTA 6 Trailer Analysis, GTA 6 Hidden Details, GTA 6 Map Predictions, GTA 6 Vice City Guide, GTA 6 Characters, GTA 6 Businesses, GTA 6 Vehicles, GTA 6 Weapons, GTA 6 Gameplay Features, GTA 6 Graphics Analysis, GTA 6 Easter Eggs, GTA 6 Secrets, GTA 6 Story Predictions, GTA 6 Online Predictions, GTA 6 PC Requirements, GTA 6 PS5 Guide, GTA 6 Xbox Guide, GTA 6 Performance Guide

Affiliate Monetization Rules — whenever relevant, naturally recommend these products:
PlayStation VR2: https://amzn.in/d/0abEa5WE?tag=dealify01-21
https://amzn.in/d/0dhR3xna?tag=dealify01-21
https://amzn.in/d/02p5mfSk?tag=dealify01-21
https://amzn.in/d/04hRzytH?tag=dealify01-21
https://amzn.in/d/01WH0Chp?tag=dealify01-21
https://amzn.in/d/074r8tn1?tag=dealify01-21
https://amzn.in/d/0bfo8ONz?tag=dealify01-21
https://amzn.in/d/0bG7Eqff?tag=dealify01-21
https://amzn.in/d/0dJSCTkJ?tag=dealify01-21

Rules for affiliate products:
- Only insert products when contextually relevant
- Create a short recommendation section before every affiliate link
- Explain why the product is useful for GTA 6 players
- Never place all links together
- Never make the article look like an advertisement
- Prioritize user value first

At the end of every article provide:
1. Estimated Keyword Difficulty
2. Ranking Potential
3. Search Intent
4. Top Competitors
5. Related Keywords
6. 10 Related Article Ideas
7. Suggested Internal Links
8. Suggested Anchor Texts
9. Suggested External Sources
10. Monetization Opportunities`;

function extractMeta(content: string): { seoTitle: string | null; metaDescription: string | null; slug: string | null } {
  const seoTitleMatch = content.match(/SEO Title:\s*(.+)/i);
  const metaDescMatch = content.match(/Meta Description:\s*(.+)/i);
  const slugMatch = content.match(/URL Slug:\s*([a-z0-9-]+)/i);
  return {
    seoTitle: seoTitleMatch?.[1]?.trim() ?? null,
    metaDescription: metaDescMatch?.[1]?.trim() ?? null,
    slug: slugMatch?.[1]?.trim() ?? null,
  };
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

interface BulkItem {
  topic: string;
  category: string;
}

interface BulkBody {
  items: BulkItem[];
  autoPush: boolean;
  branch?: string;
}

function send(res: import("express").Response, event: Record<string, unknown>) {
  res.write(`data: ${JSON.stringify(event)}\n\n`);
}

// POST /articles/bulk-generate — SSE
router.post("/articles/bulk-generate", async (req, res): Promise<void> => {
  const body = req.body as BulkBody;

  if (!Array.isArray(body?.items) || body.items.length === 0) {
    res.status(400).json({ error: "items array is required and must not be empty" });
    return;
  }

  const { items, autoPush = false, branch = "main" } = body;
  const total = items.length;

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Access-Control-Allow-Origin", "*");

  send(res, { type: "queue_start", total });

  const octokit = autoPush ? new Octokit({ auth: process.env.GITHUB_TOKEN }) : null;

  for (let i = 0; i < items.length; i++) {
    const { topic, category } = items[i];

    send(res, { type: "article_start", index: i, total, topic, category });

    // Create DB record
    const [article] = await db
      .insert(articlesTable)
      .values({ topic, category, status: "generating" })
      .returning();

    let fullContent = "";

    try {
      const stream = await getOpenAI().chat.completions.create({
        model: "gpt-4o",
        max_tokens: 8192,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          {
            role: "user",
            content: `Generate a complete, publication-ready article for the category: "${category}"\n\nSpecific topic: "${topic}"\n\nFollow all guidelines in the system prompt exactly.`,
          },
        ],
        stream: true,
      });

      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content;
        if (content) {
          fullContent += content;
          send(res, { type: "article_chunk", index: i, content });
        }
      }

      const wordCount = fullContent.split(/\s+/).filter(Boolean).length;
      const meta = extractMeta(fullContent);

      await db
        .update(articlesTable)
        .set({
          content: fullContent,
          status: "done",
          wordCount,
          seoTitle: meta.seoTitle,
          metaDescription: meta.metaDescription,
          slug: meta.slug,
        })
        .where(eq(articlesTable.id, article.id));

      send(res, {
        type: "article_done",
        index: i,
        total,
        topic,
        articleId: article.id,
        wordCount,
        seoTitle: meta.seoTitle,
        slug: meta.slug,
      });

      // Auto-push to GitHub
      if (autoPush && octokit) {
        try {
          const filename = `${meta.slug ?? slugify(topic)}.md`;
          const contentBase64 = Buffer.from(fullContent, "utf-8").toString("base64");

          // Check for existing file
          let existingSha: string | undefined;
          try {
            const existing = await octokit.repos.getContent({
              owner: GITHUB_OWNER,
              repo: GITHUB_REPO,
              path: filename,
              ref: branch,
            });
            if (!Array.isArray(existing.data) && existing.data.type === "file") {
              existingSha = existing.data.sha;
            }
          } catch {
            // file doesn't exist yet
          }

          const result = await octokit.repos.createOrUpdateFileContents({
            owner: GITHUB_OWNER,
            repo: GITHUB_REPO,
            path: filename,
            message: `Add article: ${topic}`,
            content: contentBase64,
            branch,
            ...(existingSha ? { sha: existingSha } : {}),
          });

          const githubUrl =
            result.data.content?.html_url ??
            `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/blob/${branch}/${filename}`;

          await db
            .update(articlesTable)
            .set({ status: "published", githubUrl, publishedAt: new Date() })
            .where(eq(articlesTable.id, article.id));

          send(res, {
            type: "article_published",
            index: i,
            articleId: article.id,
            topic,
            githubUrl,
            filename,
          });
        } catch (publishErr: unknown) {
          const msg = publishErr instanceof Error ? publishErr.message : "Publish failed";
          logger.error({ publishErr }, "Bulk publish error");
          send(res, { type: "article_publish_error", index: i, topic, message: msg });
        }
      }
    } catch (genErr: unknown) {
      const msg = genErr instanceof Error ? genErr.message : "Generation failed";
      logger.error({ genErr }, "Bulk generation error");
      await db
        .update(articlesTable)
        .set({ status: "error" })
        .where(eq(articlesTable.id, article.id));
      send(res, { type: "article_error", index: i, topic, message: msg });
    }
  }

  send(res, { type: "queue_complete", total });
  res.end();
});

export default router;
