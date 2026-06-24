import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const articlesTable = pgTable("articles", {
  id: serial("id").primaryKey(),
  topic: text("topic").notNull(),
  category: text("category").notNull(),
  status: text("status").notNull().default("pending"),
  seoTitle: text("seo_title"),
  metaDescription: text("meta_description"),
  slug: text("slug"),
  content: text("content"),
  wordCount: integer("word_count"),
  githubUrl: text("github_url"),
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertArticleSchema = createInsertSchema(articlesTable).omit({ id: true, createdAt: true });
export type InsertArticle = z.infer<typeof insertArticleSchema>;
export type Article = typeof articlesTable.$inferSelect;
