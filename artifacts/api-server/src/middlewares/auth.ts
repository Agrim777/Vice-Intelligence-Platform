import type { Request, Response, NextFunction } from "express";

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const session = (req as any).session;
  if (!session?.adminId) {
    res.status(401).json({ error: "Not authenticated" });
    return;
  }
  next();
}
