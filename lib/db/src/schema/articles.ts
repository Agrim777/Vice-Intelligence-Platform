import { pgTable, text, serial, integer, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const articlesTable = pgTable("articles", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt"),
  content: text("content"),
  featuredImage: text("featured_image"),
  game: text("game"),
  categoryId: integer("category_id"),
  status: text("status").notNull().default("draft"),
  viewCount: integer("view_count").notNull().default(0),
  readingTime: integer("reading_time"),
  publishedAt: timestamp("published_at"),
  scheduledAt: timestamp("scheduled_at"),
  seoTitle: text("seo_title"),
  metaDescription: text("meta_description"),
  focusKeyword: text("focus_keyword"),
  canonicalUrl: text("canonical_url"),
  ogImage: text("og_image"),
  noIndex: boolean("no_index").notNull().default(false),
  noFollow: boolean("no_follow").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const insertArticleSchema = createInsertSchema(articlesTable).omit({ id: true, createdAt: true, updatedAt: true });
export type InsertArticle = z.infer<typeof insertArticleSchema>;
export type Article = typeof articlesTable.$inferSelect;
