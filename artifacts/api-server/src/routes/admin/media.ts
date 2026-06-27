import { Router } from "express";
import { db } from "@workspace/db";
import { mediaTable } from "@workspace/db";
import { eq, desc, ilike, sql } from "drizzle-orm";
import { requireAdmin } from "../../middlewares/auth";
import multer from "multer";
import path from "path";
import fs from "fs";

const router = Router();
router.use(requireAdmin);

const uploadsDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadsDir),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${Math.random().toString(36).slice(2)}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (file.mimetype.startsWith("image/")) cb(null, true);
    else cb(new Error("Only image files are allowed"));
  },
});

router.get("/admin/media", async (req, res) => {
  try {
    const page = Math.max(1, Number(req.query.page) || 1);
    const limit = Math.min(100, Number(req.query.limit) || 40);
    const offset = (page - 1) * limit;
    const search = req.query.search as string;

    const where = search ? ilike(mediaTable.filename, `%${search}%`) : undefined;

    const [rows, countRows] = await Promise.all([
      db.select().from(mediaTable).where(where).orderBy(desc(mediaTable.createdAt)).limit(limit).offset(offset),
      db.select({ count: sql<number>`count(*)` }).from(mediaTable).where(where),
    ]);

    res.json({ items: rows, total: Number(countRows[0]?.count ?? 0), page, limit });
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// File upload endpoint (outside OpenAPI spec)
router.post("/admin/media/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) { res.status(400).json({ error: "No file provided" }); return; }

    const baseUrl = process.env.SITE_URL || "";
    const url = `${baseUrl}/api/admin/media/files/${req.file.filename}`;

    const [media] = await db
      .insert(mediaTable)
      .values({
        url,
        filename: req.file.originalname,
        mimeType: req.file.mimetype,
        size: req.file.size,
        alt: req.body.alt || "",
        caption: req.body.caption || "",
      })
      .returning();

    res.status(201).json(media);
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Serve uploaded files
router.get("/admin/media/files/:filename", (req, res) => {
  const filePath = path.join(uploadsDir, req.params.filename);
  if (!fs.existsSync(filePath)) { res.status(404).json({ error: "Not found" }); return; }
  res.sendFile(filePath);
});

router.patch("/admin/media/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const [media] = await db.update(mediaTable).set(req.body).where(eq(mediaTable.id, id)).returning();
    if (!media) { res.status(404).json({ error: "Not found" }); return; }
    res.json(media);
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/admin/media/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const [media] = await db.select().from(mediaTable).where(eq(mediaTable.id, id)).limit(1);
    if (!media) { res.status(404).json({ error: "Not found" }); return; }

    // try to delete file
    try {
      const filename = media.url.split("/").pop()!;
      fs.unlinkSync(path.join(uploadsDir, filename));
    } catch {}

    await db.delete(mediaTable).where(eq(mediaTable.id, id));
    res.status(204).end();
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
