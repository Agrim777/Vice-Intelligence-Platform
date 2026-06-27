import { pgTable, text, serial, boolean, timestamp } from "drizzle-orm/pg-core";

export const homepageConfigTable = pgTable("homepage_config", {
  id: serial("id").primaryKey(),
  heroTitle: text("hero_title"),
  heroSubtitle: text("hero_subtitle"),
  heroImage: text("hero_image"),
  featuredIds: text("featured_ids").default("[]"),
  editorPickIds: text("editor_pick_ids").default("[]"),
  showTrending: boolean("show_trending").notNull().default(true),
  showLatest: boolean("show_latest").notNull().default(true),
  showPopular: boolean("show_popular").notNull().default(true),
  showByGame: boolean("show_by_game").notNull().default(true),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type HomepageConfig = typeof homepageConfigTable.$inferSelect;
