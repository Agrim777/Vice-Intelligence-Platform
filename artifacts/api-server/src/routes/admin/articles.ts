import { Router } from "express";
import { db } from "@workspace/db";
import {
  articlesTable,
  categoriesTable,
  tagsTable,
  articleTagsTable,
  articleRevisionsTable,
} from "@workspace/db";
import { eq, desc, and, ilike, sql, inArray } from "drizzle-orm";
import { requireAdmin } from "../../middlewares/auth";
import { toSlug, readingTime } from "../../lib/slugify";

const router = Router();
router.use(requireAdmin);

async function enrichArticle(article: any) {
  const [cat, atRows] = await Promise.all([
    article.categoryId
      ? db.select().from(categoriesTable).where(eq(categoriesTable.id, article.categoryId)).limit(1)
      : Promise.resolve([]),
    db.select({ tagId: articleTagsTable.tagId }).from(articleTagsTable).where(eq(articleTagsTable.articleId, article.id)),
  ]);

  const tagIds = atRows.map((r) => r.tagId);
  const tags = tagIds.length
    ? await db.select().from(tagsTable).where(inArray(tagsTable.id, tagIds))
    : [];

  return { ...article, category: cat[0] ?? null, tags };
}

// ── list ─────────────────────────────────────────────────────────────────────

router.get("/admin/articles", async (req, res) => {
  try {
    const page = Math.max(1, Number(req.query.page) || 1);
    const limit = Math.min(100, Number(req.query.limit) || 20);
    const offset = (page - 1) * limit;
    const { status, search, category } = req.query as Record<string, string>;

    const conditions: any[] = [];
    if (status) conditions.push(eq(articlesTable.status, status));
    if (search) conditions.push(ilike(articlesTable.title, `%${search}%`));
    if (category) {
      const cat = await db.select().from(categoriesTable).where(eq(categoriesTable.slug, category)).limit(1);
      if (cat[0]) conditions.push(eq(articlesTable.categoryId, cat[0].id));
    }

    const where = conditions.length ? and(...conditions) : undefined;

    const [rows, countRows] = await Promise.all([
      db.select().from(articlesTable).where(where).orderBy(desc(articlesTable.updatedAt)).limit(limit).offset(offset),
      db.select({ count: sql<number>`count(*)` }).from(articlesTable).where(where),
    ]);

    const total = Number(countRows[0]?.count ?? 0);
    const articles = await Promise.all(rows.map(enrichArticle));
    res.json({ articles, total, page, limit });
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ── create ───────────────────────────────────────────────────────────────────

router.post("/admin/articles", async (req, res) => {
  try {
    const body = req.body ?? {};
    const { tagIds, ...rest } = body;

    const slug = rest.slug || toSlug(rest.title || "article");
    const rt = rest.content ? readingTime(rest.content) : null;

    const [article] = await db
      .insert(articlesTable)
      .values({ ...rest, slug, readingTime: rt, updatedAt: new Date() })
      .returning();

    if (tagIds?.length) {
      await db.insert(articleTagsTable).values(tagIds.map((tid: number) => ({ articleId: article.id, tagId: tid })));
    }

    const enriched = await enrichArticle(article);
    res.status(201).json(enriched);
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ── get ──────────────────────────────────────────────────────────────────────

router.get("/admin/articles/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const [article] = await db.select().from(articlesTable).where(eq(articlesTable.id, id)).limit(1);
    if (!article) { res.status(404).json({ error: "Not found" }); return; }
    res.json(await enrichArticle(article));
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ── update ───────────────────────────────────────────────────────────────────

router.patch("/admin/articles/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { tagIds, ...rest } = req.body ?? {};

    const [existing] = await db.select().from(articlesTable).where(eq(articlesTable.id, id)).limit(1);
    if (!existing) { res.status(404).json({ error: "Not found" }); return; }

    // Save revision
    await db.insert(articleRevisionsTable).values({ articleId: id, title: existing.title, content: existing.content });

    const rt = rest.content ? readingTime(rest.content) : existing.readingTime;
    const [article] = await db
      .update(articlesTable)
      .set({ ...rest, readingTime: rt, updatedAt: new Date() })
      .where(eq(articlesTable.id, id))
      .returning();

    if (tagIds !== undefined) {
      await db.delete(articleTagsTable).where(eq(articleTagsTable.articleId, id));
      if (tagIds.length) {
        await db.insert(articleTagsTable).values(tagIds.map((tid: number) => ({ articleId: id, tagId: tid })));
      }
    }

    res.json(await enrichArticle(article));
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ── delete ───────────────────────────────────────────────────────────────────

router.delete("/admin/articles/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    await db.delete(articleTagsTable).where(eq(articleTagsTable.articleId, id));
    await db.delete(articleRevisionsTable).where(eq(articleRevisionsTable.articleId, id));
    await db.delete(articlesTable).where(eq(articlesTable.id, id));
    res.status(204).end();
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ── status transitions ────────────────────────────────────────────────────────

router.post("/admin/articles/:id/publish", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const [article] = await db
      .update(articlesTable)
      .set({ status: "published", publishedAt: new Date(), updatedAt: new Date() })
      .where(eq(articlesTable.id, id))
      .returning();
    if (!article) { res.status(404).json({ error: "Not found" }); return; }
    res.json(await enrichArticle(article));
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/admin/articles/:id/draft", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const [article] = await db
      .update(articlesTable)
      .set({ status: "draft", updatedAt: new Date() })
      .where(eq(articlesTable.id, id))
      .returning();
    if (!article) { res.status(404).json({ error: "Not found" }); return; }
    res.json(await enrichArticle(article));
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/admin/articles/:id/schedule", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { scheduledAt } = req.body ?? {};
    const [article] = await db
      .update(articlesTable)
      .set({ status: "scheduled", scheduledAt: new Date(scheduledAt), updatedAt: new Date() })
      .where(eq(articlesTable.id, id))
      .returning();
    if (!article) { res.status(404).json({ error: "Not found" }); return; }
    res.json(await enrichArticle(article));
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/admin/articles/:id/archive", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const [article] = await db
      .update(articlesTable)
      .set({ status: "archived", updatedAt: new Date() })
      .where(eq(articlesTable.id, id))
      .returning();
    if (!article) { res.status(404).json({ error: "Not found" }); return; }
    res.json(await enrichArticle(article));
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/admin/articles/:id/restore", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const [article] = await db
      .update(articlesTable)
      .set({ status: "draft", updatedAt: new Date() })
      .where(eq(articlesTable.id, id))
      .returning();
    if (!article) { res.status(404).json({ error: "Not found" }); return; }
    res.json(await enrichArticle(article));
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/admin/articles/:id/duplicate", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const [existing] = await db.select().from(articlesTable).where(eq(articlesTable.id, id)).limit(1);
    if (!existing) { res.status(404).json({ error: "Not found" }); return; }

    const { id: _id, createdAt, updatedAt, publishedAt, scheduledAt, slug, ...rest } = existing;
    const newSlug = `${slug}-copy-${Date.now()}`;

    const [article] = await db
      .insert(articlesTable)
      .values({ ...rest, slug: newSlug, status: "draft", updatedAt: new Date() })
      .returning();

    // copy tags
    const atRows = await db.select({ tagId: articleTagsTable.tagId }).from(articleTagsTable).where(eq(articleTagsTable.articleId, id));
    if (atRows.length) {
      await db.insert(articleTagsTable).values(atRows.map((r) => ({ articleId: article.id, tagId: r.tagId })));
    }

    res.status(201).json(await enrichArticle(article));
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ── revisions ────────────────────────────────────────────────────────────────

router.get("/admin/articles/:id/revisions", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const revisions = await db
      .select()
      .from(articleRevisionsTable)
      .where(eq(articleRevisionsTable.articleId, id))
      .orderBy(desc(articleRevisionsTable.createdAt))
      .limit(20);
    res.json(revisions);
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ── dashboard stats ───────────────────────────────────────────────────────────

router.get("/admin/dashboard-stats", async (req, res) => {
  try {
    const [total, pub, draft, scheduled, catCount, tagCount, mediaCount, viewSum, recent] = await Promise.all([
      db.select({ count: sql<number>`count(*)` }).from(articlesTable),
      db.select({ count: sql<number>`count(*)` }).from(articlesTable).where(eq(articlesTable.status, "published")),
      db.select({ count: sql<number>`count(*)` }).from(articlesTable).where(eq(articlesTable.status, "draft")),
      db.select({ count: sql<number>`count(*)` }).from(articlesTable).where(eq(articlesTable.status, "scheduled")),
      db.select({ count: sql<number>`count(*)` }).from(categoriesTable),
      db.select({ count: sql<number>`count(*)` }).from(tagsTable),
      db.select({ count: sql<number>`count(*)` }).from((await import("@workspace/db")).mediaTable),
      db.select({ sum: sql<number>`coalesce(sum(view_count), 0)` }).from(articlesTable),
      db.select().from(articlesTable).orderBy(desc(articlesTable.updatedAt)).limit(5),
    ]);

    const recentEnriched = await Promise.all(recent.map(enrichArticle));

    res.json({
      totalArticles: Number(total[0]?.count ?? 0),
      publishedArticles: Number(pub[0]?.count ?? 0),
      draftArticles: Number(draft[0]?.count ?? 0),
      scheduledArticles: Number(scheduled[0]?.count ?? 0),
      totalCategories: Number(catCount[0]?.count ?? 0),
      totalTags: Number(tagCount[0]?.count ?? 0),
      totalMedia: Number(mediaCount[0]?.count ?? 0),
      totalViews: Number(viewSum[0]?.sum ?? 0),
      recentArticles: recentEnriched,
    });
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
