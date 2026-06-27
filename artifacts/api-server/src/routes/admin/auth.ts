import { Router } from "express";
import bcrypt from "bcryptjs";
import { db } from "@workspace/db";
import { adminsTable } from "@workspace/db";
import { eq, sql } from "drizzle-orm";
import { requireAdmin } from "../../middlewares/auth";

const router = Router();

const loginAttempts = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = loginAttempts.get(ip);
  if (!entry || entry.resetAt < now) {
    loginAttempts.set(ip, { count: 1, resetAt: now + 15 * 60 * 1000 });
    return true;
  }
  if (entry.count >= 10) return false;
  entry.count++;
  return true;
}

router.post("/admin/login", async (req, res) => {
  try {
    const ip = req.ip || "unknown";
    if (!checkRateLimit(ip)) {
      res.status(429).json({ error: "Too many login attempts. Try again in 15 minutes." });
      return;
    }

    const { username, password } = req.body ?? {};
    if (!username || !password) {
      res.status(400).json({ error: "Username and password required" });
      return;
    }

    const [admin] = await db
      .select()
      .from(adminsTable)
      .where(eq(adminsTable.username, String(username)))
      .limit(1);

    if (!admin) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }

    // Check lockout
    if (admin.lockedUntil && admin.lockedUntil > new Date()) {
      const mins = Math.ceil((admin.lockedUntil.getTime() - Date.now()) / 60000);
      res.status(401).json({ error: `Account locked. Try again in ${mins} minutes.` });
      return;
    }

    const valid = await bcrypt.compare(String(password), admin.passwordHash);
    if (!valid) {
      const newAttempts = (admin.failedAttempts ?? 0) + 1;
      const lockedUntil = newAttempts >= 5 ? new Date(Date.now() + 30 * 60 * 1000) : null;
      await db
        .update(adminsTable)
        .set({ failedAttempts: newAttempts, lockedUntil })
        .where(eq(adminsTable.id, admin.id));
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }

    // Reset failures
    await db
      .update(adminsTable)
      .set({ failedAttempts: 0, lockedUntil: null, lastLoginAt: new Date() })
      .where(eq(adminsTable.id, admin.id));

    (req as any).session.adminId = admin.id;
    (req as any).session.adminUsername = admin.username;

    res.json({ id: admin.id, username: admin.username });
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/admin/logout", requireAdmin, (req, res) => {
  (req as any).session.destroy(() => {
    res.json({ ok: true });
  });
});

router.get("/admin/me", (req, res) => {
  const session = (req as any).session;
  if (!session?.adminId) {
    res.status(401).json({ error: "Not authenticated" });
    return;
  }
  res.json({ id: session.adminId, username: session.adminUsername });
});

export default router;
