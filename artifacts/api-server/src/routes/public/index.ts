import { Router } from "express";
import { db } from "@workspace/db";
import {
  articlesTable,
  categoriesTable,
  tagsTable,
  articleTagsTable,
  homepageConfigTable,
} from "@workspace/db";
import { eq, desc, asc, and, or, ilike, sql, inArray } from "drizzle-orm";

const router = Router();

// ── helpers ─────────────────────────────────────────────────────────────────

async function enrichArticles(articles: any[]) {
  if (!articles.length) return articles;
  const ids = articles.map((a) => a.id);

  const cats = await db
    .select()
    .from(categoriesTable)
    .where(inArray(categoriesTable.id, articles.map((a) => a.categoryId).filter(Boolean)));

  const catMap = Object.fromEntries(cats.map((c) => [c.id, c]));

  const atRows = await db
    .select({ articleId: articleTagsTable.articleId, tagId: articleTagsTable.tagId })
    .from(articleTagsTable)
    .where(inArray(articleTagsTable.articleId, ids));

  const tagIds = [...new Set(atRows.map((r) => r.tagId))];
  const tags = tagIds.length
    ? await db.select().from(tagsTable).where(inArray(tagsTable.id, tagIds))
    : [];
  const tagMap = Object.fromEntries(tags.map((t) => [t.id, t]));

  return articles.map((a) => ({
    ...a,
    category: a.categoryId ? (catMap[a.categoryId] ?? null) : null,
    tags: atRows.filter((r) => r.articleId === a.id).map((r) => tagMap[r.tagId]).filter(Boolean),
  }));
}

// ── public articles ──────────────────────────────────────────────────────────

router.get("/public/articles", async (req, res) => {
  try {
    const page = Math.max(1, Number(req.query.page) || 1);
    const limit = Math.min(50, Number(req.query.limit) || 20);
    const offset = (page - 1) * limit;
    const { category, tag, game, featured, sortBy } = req.query as Record<string, string>;

    const conditions: any[] = [eq(articlesTable.status, "published")];

    if (game) conditions.push(eq(articlesTable.game, game));

    if (category) {
      const cat = await db.select().from(categoriesTable).where(eq(categoriesTable.slug, category)).limit(1);
      if (cat[0]) conditions.push(eq(articlesTable.categoryId, cat[0].id));
    }

    let order = desc(articlesTable.publishedAt);
    if (sortBy === "popular") order = desc(articlesTable.viewCount);
    else if (sortBy === "updated") order = desc(articlesTable.updatedAt);
    else if (sortBy === "trending") order = desc(sql`${articlesTable.viewCount} + ${articlesTable.id}`);

    if (tag) {
      const tagRow = await db.select().from(tagsTable).where(eq(tagsTable.slug, tag)).limit(1);
      if (tagRow[0]) {
        const tagId = tagRow[0].id;
        const atRows = await db
          .select({ articleId: articleTagsTable.articleId })
          .from(articleTagsTable)
          .where(eq(articleTagsTable.tagId, tagId));
        const taggedIds = atRows.map((r) => r.articleId);
        if (!taggedIds.length) {
          res.json({ articles: [], total: 0, page, limit });
          return;
        }
        conditions.push(inArray(articlesTable.id, taggedIds));
      }
    }

    const where = conditions.length === 1 ? conditions[0] : and(...conditions);

    const [rows, countRows] = await Promise.all([
      db.select().from(articlesTable).where(where).orderBy(order).limit(limit).offset(offset),
      db.select({ count: sql<number>`count(*)` }).from(articlesTable).where(where),
    ]);

    const total = Number(countRows[0]?.count ?? 0);
    const enriched = await enrichArticles(rows);

    res.json({ articles: enriched, total, page, limit });
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ── get article by slug ──────────────────────────────────────────────────────

router.get("/public/articles/:slug", async (req, res) => {
  try {
    const rows = await db
      .select()
      .from(articlesTable)
      .where(and(eq(articlesTable.slug, req.params.slug), eq(articlesTable.status, "published")))
      .limit(1);

    if (!rows[0]) {
      res.status(404).json({ error: "Not found" });
      return;
    }

    // increment view count
    await db
      .update(articlesTable)
      .set({ viewCount: sql`${articlesTable.viewCount} + 1` })
      .where(eq(articlesTable.id, rows[0].id));

    const [article] = await enrichArticles(rows);

    // related: same category or game, last 6
    const relatedConditions: any[] = [
      eq(articlesTable.status, "published"),
      sql`${articlesTable.id} != ${article.id}`,
    ];
    if (article.categoryId) relatedConditions.push(eq(articlesTable.categoryId, article.categoryId));
    else if (article.game) relatedConditions.push(eq(articlesTable.game, article.game));

    const relatedRows = await db
      .select()
      .from(articlesTable)
      .where(and(...relatedConditions))
      .orderBy(desc(articlesTable.publishedAt))
      .limit(6);

    const related = await enrichArticles(relatedRows);

    const breadcrumbs = [
      { label: "Home", href: "/" },
      ...(article.category ? [{ label: article.category.name, href: `/category/${article.category.slug}` }] : []),
      { label: article.title, href: `/${article.slug}` },
    ];

    res.json({ article, related, breadcrumbs });
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ── categories ───────────────────────────────────────────────────────────────

router.get("/public/categories", async (req, res) => {
  try {
    const cats = await db.select().from(categoriesTable).orderBy(asc(categoriesTable.name));
    // add articleCount
    const counts = await db
      .select({ categoryId: articlesTable.categoryId, count: sql<number>`count(*)` })
      .from(articlesTable)
      .where(eq(articlesTable.status, "published"))
      .groupBy(articlesTable.categoryId);

    const countMap = Object.fromEntries(counts.map((c) => [c.categoryId, Number(c.count)]));
    const result = cats.map((c) => ({ ...c, articleCount: countMap[c.id] ?? 0 }));
    res.json(result);
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ── tags ─────────────────────────────────────────────────────────────────────

router.get("/public/tags", async (req, res) => {
  try {
    const tags = await db.select().from(tagsTable).orderBy(asc(tagsTable.name));
    const counts = await db
      .select({ tagId: articleTagsTable.tagId, count: sql<number>`count(*)` })
      .from(articleTagsTable)
      .groupBy(articleTagsTable.tagId);

    const countMap = Object.fromEntries(counts.map((c) => [c.tagId, Number(c.count)]));
    const result = tags.map((t) => ({ ...t, articleCount: countMap[t.id] ?? 0 }));
    res.json(result);
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ── search ───────────────────────────────────────────────────────────────────

router.get("/public/search", async (req, res) => {
  try {
    const q = String(req.query.q || "").trim();
    const page = Math.max(1, Number(req.query.page) || 1);
    const limit = Math.min(50, Number(req.query.limit) || 20);
    const offset = (page - 1) * limit;

    if (!q) {
      res.json({ articles: [], total: 0, page, limit });
      return;
    }

    const where = and(
      eq(articlesTable.status, "published"),
      or(
        ilike(articlesTable.title, `%${q}%`),
        ilike(articlesTable.excerpt, `%${q}%`),
        ilike(articlesTable.content, `%${q}%`),
        ilike(articlesTable.focusKeyword, `%${q}%`),
      ),
    );

    const [rows, countRows] = await Promise.all([
      db.select().from(articlesTable).where(where).orderBy(desc(articlesTable.publishedAt)).limit(limit).offset(offset),
      db.select({ count: sql<number>`count(*)` }).from(articlesTable).where(where),
    ]);

    const total = Number(countRows[0]?.count ?? 0);
    const enriched = await enrichArticles(rows);
    res.json({ articles: enriched, total, page, limit });
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ── homepage data ────────────────────────────────────────────────────────────

router.get("/public/homepage", async (req, res) => {
  try {
    const [configRow] = await db.select().from(homepageConfigTable).limit(1);
    const config = configRow ?? {
      heroTitle: "Your Ultimate GTA Guide",
      heroSubtitle: "Every cheat, guide, map, and secret — for every GTA game.",
      heroImage: null,
      featuredIds: "[]",
      editorPickIds: "[]",
      showTrending: true,
      showLatest: true,
      showPopular: true,
      showByGame: true,
    };

    const featuredIds: number[] = JSON.parse((config as any).featuredIds ?? "[]");
    const editorPickIds: number[] = JSON.parse((config as any).editorPickIds ?? "[]");

    const [featured, trending, latest, popular, editorPicks, categories] = await Promise.all([
      featuredIds.length
        ? db.select().from(articlesTable).where(and(eq(articlesTable.status, "published"), inArray(articlesTable.id, featuredIds))).limit(6)
        : db.select().from(articlesTable).where(eq(articlesTable.status, "published")).orderBy(desc(articlesTable.publishedAt)).limit(6),
      db.select().from(articlesTable).where(eq(articlesTable.status, "published")).orderBy(desc(articlesTable.viewCount)).limit(8),
      db.select().from(articlesTable).where(eq(articlesTable.status, "published")).orderBy(desc(articlesTable.publishedAt)).limit(8),
      db.select().from(articlesTable).where(eq(articlesTable.status, "published")).orderBy(desc(articlesTable.viewCount)).limit(8),
      editorPickIds.length
        ? db.select().from(articlesTable).where(and(eq(articlesTable.status, "published"), inArray(articlesTable.id, editorPickIds))).limit(6)
        : [],
      db.select().from(categoriesTable).orderBy(asc(categoriesTable.name)).limit(10),
    ]);

    const [featuredEnriched, trendingEnriched, latestEnriched, popularEnriched, editorPicksEnriched] = await Promise.all([
      enrichArticles(featured),
      enrichArticles(trending),
      enrichArticles(latest),
      enrichArticles(popular),
      enrichArticles(editorPicks),
    ]);

    res.json({
      config,
      featured: featuredEnriched,
      trending: trendingEnriched,
      latest: latestEnriched,
      popular: popularEnriched,
      editorPicks: editorPicksEnriched,
      categories,
    });
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ── public stats ─────────────────────────────────────────────────────────────

router.get("/public/stats", async (req, res) => {
  try {
    const [artCount, catCount, viewSum] = await Promise.all([
      db.select({ count: sql<number>`count(*)` }).from(articlesTable).where(eq(articlesTable.status, "published")),
      db.select({ count: sql<number>`count(*)` }).from(categoriesTable),
      db.select({ sum: sql<number>`coalesce(sum(view_count), 0)` }).from(articlesTable),
    ]);

    const gamesCount = await db
      .selectDistinct({ game: articlesTable.game })
      .from(articlesTable)
      .where(and(eq(articlesTable.status, "published"), sql`${articlesTable.game} is not null`));

    res.json({
      totalArticles: Number(artCount[0]?.count ?? 0),
      totalCategories: Number(catCount[0]?.count ?? 0),
      totalGames: gamesCount.length,
      totalViews: Number(viewSum[0]?.sum ?? 0),
    });
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
