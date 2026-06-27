import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const articleRevisionsTable = pgTable("article_revisions", {
  id: serial("id").primaryKey(),
  articleId: integer("article_id").notNull(),
  title: text("title"),
  content: text("content"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertArticleRevisionSchema = createInsertSchema(articleRevisionsTable).omit({ id: true, createdAt: true });
export type InsertArticleRevision = z.infer<typeof insertArticleRevisionSchema>;
export type ArticleRevision = typeof articleRevisionsTable.$inferSelect;
