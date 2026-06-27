import { Router } from "express";
import { db } from "@workspace/db";
import { siteSettingsTable, homepageConfigTable } from "@workspace/db";
import { eq } from "drizzle-orm";
import { requireAdmin } from "../../middlewares/auth";

const router = Router();
router.use(requireAdmin);

async function getOrCreateSettings() {
  const rows = await db.select().from(siteSettingsTable).limit(1);
  if (rows[0]) return rows[0];
  const [s] = await db.insert(siteSettingsTable).values({}).returning();
  return s;
}

async function getOrCreateHomepage() {
  const rows = await db.select().from(homepageConfigTable).limit(1);
  if (rows[0]) return rows[0];
  const [h] = await db.insert(homepageConfigTable).values({}).returning();
  return h;
}

router.get("/admin/settings", async (req, res) => {
  try {
    res.json(await getOrCreateSettings());
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.patch("/admin/settings", async (req, res) => {
  try {
    const current = await getOrCreateSettings();
    const [updated] = await db
      .update(siteSettingsTable)
      .set({ ...req.body, updatedAt: new Date() })
      .where(eq(siteSettingsTable.id, current.id))
      .returning();
    res.json(updated ?? current);
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/admin/homepage-config", async (req, res) => {
  try {
    const config = await getOrCreateHomepage();
    res.json({
      ...config,
      featuredIds: JSON.parse(config.featuredIds ?? "[]"),
      editorPickIds: JSON.parse(config.editorPickIds ?? "[]"),
    });
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.patch("/admin/homepage-config", async (req, res) => {
  try {
    const current = await getOrCreateHomepage();
    const { featuredIds, editorPickIds, ...rest } = req.body ?? {};
    const patch: any = { ...rest, updatedAt: new Date() };
    if (featuredIds !== undefined) patch.featuredIds = JSON.stringify(featuredIds);
    if (editorPickIds !== undefined) patch.editorPickIds = JSON.stringify(editorPickIds);

    const [updated] = await db
      .update(homepageConfigTable)
      .set(patch)
      .where(eq(homepageConfigTable.id, current.id))
      .returning();

    res.json({
      ...(updated ?? current),
      featuredIds: JSON.parse((updated ?? current).featuredIds ?? "[]"),
      editorPickIds: JSON.parse((updated ?? current).editorPickIds ?? "[]"),
    });
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
