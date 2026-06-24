import { Router, type IRouter } from "express";
import { eq, desc, count, sum, sql } from "drizzle-orm";
import { db, articlesTable } from "@workspace/db";
import { logger } from "../../lib/logger";
import {
  GenerateArticleBody,
  GetArticleParams,
  DeleteArticleParams,
  PublishArticleParams,
  PublishArticleBody,
} from "@workspace/api-zod";
import OpenAI from "openai";
import { Octokit } from "@octokit/rest";

const router: IRouter = Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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

// GET /articles
router.get("/articles", async (req, res): Promise<void> => {
  const articles = await db
    .select()
    .from(articlesTable)
    .orderBy(desc(articlesTable.createdAt));
  res.json(articles);
});

// GET /articles/stats
router.get("/articles/stats", async (req, res): Promise<void> => {
  const [totals] = await db
    .select({
      total: count(),
      totalWords: sum(articlesTable.wordCount),
    })
    .from(articlesTable);

  const [publishedRow] = await db
    .select({ published: count() })
    .from(articlesTable)
    .where(eq(articlesTable.status, "published"));

  const [generatingRow] = await db
    .select({ generating: count() })
    .from(articlesTable)
    .where(eq(articlesTable.status, "generating"));

  res.json({
    total: Number(totals?.total ?? 0),
    published: Number(publishedRow?.published ?? 0),
    generating: Number(generatingRow?.generating ?? 0),
    totalWords: Number(totals?.totalWords ?? 0),
  });
});

// POST /articles/generate — SSE streaming
router.post("/articles/generate", async (req, res): Promise<void> => {
  const parsed = GenerateArticleBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { topic, category } = parsed.data;

  // Create article record
  const [article] = await db
    .insert(articlesTable)
    .values({ topic, category, status: "generating" })
    .returning();

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Access-Control-Allow-Origin", "*");

  let fullContent = "";

  try {
    const stream = await openai.chat.completions.create({
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
        res.write(`data: ${JSON.stringify({ content })}\n\n`);
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

    res.write(`data: ${JSON.stringify({ done: true, articleId: article.id })}\n\n`);
  } catch (err) {
    logger.error({ err }, "Error generating article");
    await db
      .update(articlesTable)
      .set({ status: "error" })
      .where(eq(articlesTable.id, article.id));
    res.write(`data: ${JSON.stringify({ error: "Generation failed" })}\n\n`);
  }

  res.end();
});

// GET /articles/:id
router.get("/articles/:id", async (req, res): Promise<void> => {
  const params = GetArticleParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const [article] = await db
    .select()
    .from(articlesTable)
    .where(eq(articlesTable.id, params.data.id));

  if (!article) {
    res.status(404).json({ error: "Article not found" });
    return;
  }

  res.json(article);
});

// DELETE /articles/:id
router.delete("/articles/:id", async (req, res): Promise<void> => {
  const params = DeleteArticleParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const [deleted] = await db
    .delete(articlesTable)
    .where(eq(articlesTable.id, params.data.id))
    .returning();

  if (!deleted) {
    res.status(404).json({ error: "Article not found" });
    return;
  }

  res.sendStatus(204);
});

// POST /articles/:id/publish
router.post("/articles/:id/publish", async (req, res): Promise<void> => {
  const params = PublishArticleParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const body = PublishArticleBody.safeParse(req.body);
  if (!body.success) {
    res.status(400).json({ error: body.error.message });
    return;
  }

  const [article] = await db
    .select()
    .from(articlesTable)
    .where(eq(articlesTable.id, params.data.id));

  if (!article) {
    res.status(404).json({ error: "Article not found" });
    return;
  }

  if (!article.content) {
    res.status(400).json({ error: "Article has no content to publish" });
    return;
  }

  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
  const owner = "Agrim777";
  const repo = "Vice-Intelligence-Platform";

  const { branch, filename, commitMessage } = body.data;
  const filePath = filename.endsWith(".md") ? filename : `${filename}.md`;
  const message = commitMessage ?? `Add article: ${article.topic}`;

  try {
    // Check if file already exists (to get sha for update)
    let existingSha: string | undefined;
    try {
      const existing = await octokit.repos.getContent({ owner, repo, path: filePath, ref: branch });
      if (!Array.isArray(existing.data) && existing.data.type === "file") {
        existingSha = existing.data.sha;
      }
    } catch {
      // File doesn't exist yet — that's fine
    }

    const contentBase64 = Buffer.from(article.content, "utf-8").toString("base64");

    const result = await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: filePath,
      message,
      content: contentBase64,
      branch,
      ...(existingSha ? { sha: existingSha } : {}),
    });

    const githubUrl = result.data.content?.html_url ?? `https://github.com/${owner}/${repo}/blob/${branch}/${filePath}`;

    await db
      .update(articlesTable)
      .set({
        status: "published",
        githubUrl,
        publishedAt: new Date(),
      })
      .where(eq(articlesTable.id, params.data.id));

    res.json({ success: true, url: githubUrl, message: "Published successfully" });
  } catch (err: unknown) {
    req.log.error({ err }, "GitHub publish error");
    const msg = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: msg });
  }
});

export default router;
