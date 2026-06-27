import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";

export const siteSettingsTable = pgTable("site_settings", {
  id: serial("id").primaryKey(),
  siteName: text("site_name").notNull().default("Vice Intelligence Platform"),
  siteDescription: text("site_description"),
  siteUrl: text("site_url"),
  logoUrl: text("logo_url"),
  faviconUrl: text("favicon_url"),
  twitterHandle: text("twitter_handle"),
  facebookUrl: text("facebook_url"),
  youtubeUrl: text("youtube_url"),
  discordUrl: text("discord_url"),
  contactEmail: text("contact_email"),
  googleAnalyticsId: text("google_analytics_id"),
  adsenseId: text("adsense_id"),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type SiteSettings = typeof siteSettingsTable.$inferSelect;
