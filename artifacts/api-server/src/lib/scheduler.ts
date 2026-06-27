import { db } from "@workspace/db";
import { articlesTable } from "@workspace/db";
import { eq, lte, and } from "drizzle-orm";
import { logger } from "./logger";

export function startScheduler() {
  setInterval(async () => {
    try {
      const now = new Date();
      const result = await db
        .update(articlesTable)
        .set({ status: "published", publishedAt: now, updatedAt: now })
        .where(
          and(
            eq(articlesTable.status, "scheduled"),
            lte(articlesTable.scheduledAt, now),
          ),
        )
        .returning({ id: articlesTable.id });

      if (result.length > 0) {
        logger.info({ published: result.map((r) => r.id) }, "Scheduled articles published");
      }
    } catch (err) {
      logger.error({ err }, "Scheduler error");
    }
  }, 60_000); // check every minute

  logger.info("Scheduled article publisher started");
}
