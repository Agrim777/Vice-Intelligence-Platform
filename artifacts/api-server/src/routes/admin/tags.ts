import { Router } from "express";
import { db } from "@workspace/db";
import { tagsTable, articleTagsTable } from "@workspace/db";
import { eq, asc, sql } from "drizzle-orm";
import { requireAdmin } from "../../middlewares/auth";
import { toSlug } from "../../lib/slugify";

const router = Router();
router.use(requireAdmin);

router.get("/admin/tags", async (req, res) => {
  try {
    const tags = await db.select().from(tagsTable).orderBy(asc(tagsTable.name));
    const counts = await db
      .select({ tagId: articleTagsTable.tagId, count: sql<number>`count(*)` })
      .from(articleTagsTable)
      .groupBy(articleTagsTable.tagId);
    const countMap = Object.fromEntries(counts.map((c) => [c.tagId, Number(c.count)]));
    res.json(tags.map((t) => ({ ...t, articleCount: countMap[t.id] ?? 0 })));
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/admin/tags", async (req, res) => {
  try {
    const body = req.body ?? {};
    const slug = body.slug || toSlug(body.name || "tag");
    const [tag] = await db.insert(tagsTable).values({ ...body, slug }).returning();
    res.status(201).json({ ...tag, articleCount: 0 });
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.patch("/admin/tags/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const [tag] = await db.update(tagsTable).set(req.body).where(eq(tagsTable.id, id)).returning();
    if (!tag) { res.status(404).json({ error: "Not found" }); return; }
    res.json({ ...tag, articleCount: 0 });
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/admin/tags/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    await db.delete(articleTagsTable).where(eq(articleTagsTable.tagId, id));
    await db.delete(tagsTable).where(eq(tagsTable.id, id));
    res.status(204).end();
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
