import bcrypt from "bcryptjs";
import { db } from "@workspace/db";
import { adminsTable, categoriesTable, tagsTable, siteSettingsTable, homepageConfigTable } from "@workspace/db";
import { logger } from "./lib/logger";

export async function seed() {
  try {
    // Admin user
    const existing = await db.select().from(adminsTable).limit(1);
    if (!existing.length) {
      const hash = await bcrypt.hash("admin123", 12);
      await db.insert(adminsTable).values({ username: "admin", passwordHash: hash });
      logger.info("Created default admin: username=admin password=admin123 — CHANGE THIS IMMEDIATELY");
    }

    // Default categories
    const catCount = await db.select().from(categoriesTable).limit(1);
    if (!catCount.length) {
      await db.insert(categoriesTable).values([
        { name: "News", slug: "news", description: "Latest GTA news and updates", color: "#ff1a8c" },
        { name: "Guides", slug: "guides", description: "In-depth guides and walkthroughs", color: "#00faf4" },
        { name: "Cheats", slug: "cheats", description: "Cheat codes and unlockables", color: "#a855f7" },
        { name: "GTA 6", slug: "gta-6", description: "Everything about GTA 6", color: "#f97316" },
        { name: "GTA 5", slug: "gta-5", description: "GTA V guides and tips", color: "#22c55e" },
        { name: "Maps", slug: "maps", description: "Interactive maps and locations", color: "#3b82f6" },
        { name: "Vehicles", slug: "vehicles", description: "Cars, bikes, planes and boats", color: "#eab308" },
        { name: "Weapons", slug: "weapons", description: "Weapons and combat guides", color: "#ef4444" },
      ]);
      logger.info("Seeded default categories");
    }

    // Default tags
    const tagCount = await db.select().from(tagsTable).limit(1);
    if (!tagCount.length) {
      await db.insert(tagsTable).values([
        { name: "GTA 6", slug: "gta-6" },
        { name: "GTA 5", slug: "gta-5" },
        { name: "Online", slug: "online" },
        { name: "Story Mode", slug: "story-mode" },
        { name: "Money", slug: "money" },
        { name: "Missions", slug: "missions" },
        { name: "Easter Eggs", slug: "easter-eggs" },
        { name: "Mods", slug: "mods" },
        { name: "PC", slug: "pc" },
        { name: "PlayStation", slug: "playstation" },
        { name: "Xbox", slug: "xbox" },
        { name: "Rockstar", slug: "rockstar" },
      ]);
      logger.info("Seeded default tags");
    }

    // Site settings
    const settingsCount = await db.select().from(siteSettingsTable).limit(1);
    if (!settingsCount.length) {
      await db.insert(siteSettingsTable).values({
        siteName: "Vice Intelligence Platform",
        siteDescription: "Your ultimate source for GTA guides, cheats, news and everything Grand Theft Auto.",
        twitterHandle: "@ViceIntelligence",
      });
    }

    // Homepage config
    const hpCount = await db.select().from(homepageConfigTable).limit(1);
    if (!hpCount.length) {
      await db.insert(homepageConfigTable).values({
        heroTitle: "The Definitive GTA Intelligence Hub",
        heroSubtitle: "Every cheat code, guide, map, and secret — for every GTA game. Updated daily.",
      });
    }

    logger.info("Seed complete");
  } catch (err) {
    logger.error({ err }, "Seed error");
  }
}
