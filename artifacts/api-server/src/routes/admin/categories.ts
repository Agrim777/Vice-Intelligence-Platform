import { Router } from "express";
import { db } from "@workspace/db";
import { categoriesTable, articlesTable } from "@workspace/db";
import { eq, asc, sql } from "drizzle-orm";
import { requireAdmin } from "../../middlewares/auth";
import { toSlug } from "../../lib/slugify";

const router = Router();
router.use(requireAdmin);

router.get("/admin/categories", async (req, res) => {
  try {
    const cats = await db.select().from(categoriesTable).orderBy(asc(categoriesTable.name));
    const counts = await db
      .select({ categoryId: articlesTable.categoryId, count: sql<number>`count(*)` })
      .from(articlesTable)
      .groupBy(articlesTable.categoryId);
    const countMap = Object.fromEntries(counts.map((c) => [c.categoryId, Number(c.count)]));
    res.json(cats.map((c) => ({ ...c, articleCount: countMap[c.id] ?? 0 })));
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/admin/categories", async (req, res) => {
  try {
    const body = req.body ?? {};
    const slug = body.slug || toSlug(body.name || "category");
    const [cat] = await db.insert(categoriesTable).values({ ...body, slug, updatedAt: new Date() }).returning();
    res.status(201).json({ ...cat, articleCount: 0 });
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.patch("/admin/categories/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const [cat] = await db
      .update(categoriesTable)
      .set({ ...req.body, updatedAt: new Date() })
      .where(eq(categoriesTable.id, id))
      .returning();
    if (!cat) { res.status(404).json({ error: "Not found" }); return; }
    res.json({ ...cat, articleCount: 0 });
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/admin/categories/:id", async (req, res) => {
  try {
    await db.delete(categoriesTable).where(eq(categoriesTable.id, Number(req.params.id)));
    res.status(204).end();
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
