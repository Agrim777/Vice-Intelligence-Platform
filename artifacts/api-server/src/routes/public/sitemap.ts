import { Router } from "express";
import { db } from "@workspace/db";
import { articlesTable, categoriesTable } from "@workspace/db";
import { eq, desc } from "drizzle-orm";

const router = Router();

const SITE_URL = process.env.SITE_URL || "https://vice-intelligence-platform.replit.app";

const staticPaths = [
  { path: "/", priority: "1.0", changefreq: "daily" },
  { path: "/news", priority: "0.9", changefreq: "daily" },
  { path: "/guides", priority: "0.9", changefreq: "weekly" },
  { path: "/cheats", priority: "0.9", changefreq: "weekly" },
  { path: "/games", priority: "0.8", changefreq: "weekly" },
  { path: "/vehicles", priority: "0.7", changefreq: "monthly" },
  { path: "/weapons", priority: "0.7", changefreq: "monthly" },
  { path: "/maps", priority: "0.7", changefreq: "monthly" },
  { path: "/gear", priority: "0.6", changefreq: "monthly" },
  { path: "/gta6/release-date", priority: "0.8", changefreq: "weekly" },
  { path: "/gta6/characters", priority: "0.8", changefreq: "weekly" },
  { path: "/gta6/map", priority: "0.8", changefreq: "weekly" },
  { path: "/gta6/price", priority: "0.7", changefreq: "weekly" },
  { path: "/gta5/money-cheat", priority: "0.7", changefreq: "monthly" },
  { path: "/gta5/best-cars", priority: "0.7", changefreq: "monthly" },
  { path: "/gta-games-in-order", priority: "0.7", changefreq: "monthly" },
  { path: "/about", priority: "0.5", changefreq: "yearly" },
  { path: "/contact", priority: "0.5", changefreq: "yearly" },
  { path: "/privacy", priority: "0.3", changefreq: "yearly" },
  { path: "/terms", priority: "0.3", changefreq: "yearly" },
];

router.get("/sitemap.xml", async (req, res) => {
  try {
    const articles = await db
      .select({ slug: articlesTable.slug, updatedAt: articlesTable.updatedAt, publishedAt: articlesTable.publishedAt })
      .from(articlesTable)
      .where(eq(articlesTable.status, "published"))
      .orderBy(desc(articlesTable.publishedAt));

    const categories = await db.select({ slug: categoriesTable.slug, updatedAt: categoriesTable.updatedAt }).from(categoriesTable);

    const now = new Date().toISOString();

    const urls: string[] = [];

    // Static pages
    for (const page of staticPaths) {
      urls.push(`  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`);
    }

    // Article pages
    for (const article of articles) {
      const lastmod = (article.updatedAt || article.publishedAt || new Date()).toISOString();
      urls.push(`  <url>
    <loc>${SITE_URL}/news/${article.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`);
    }

    // Category pages
    for (const cat of categories) {
      urls.push(`  <url>
    <loc>${SITE_URL}/category/${cat.slug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`);
    }

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

    res.set("Content-Type", "application/xml; charset=utf-8");
    res.set("Cache-Control", "public, max-age=3600");
    res.send(xml);
  } catch (err) {
    req.log.error(err);
    res.status(500).send("Error generating sitemap");
  }
});

router.get("/rss.xml", async (req, res) => {
  try {
    const articles = await db
      .select()
      .from(articlesTable)
      .where(eq(articlesTable.status, "published"))
      .orderBy(desc(articlesTable.publishedAt))
      .limit(50);

    const buildDate = new Date().toUTCString();

    const items = articles.map((a) => {
      const pubDate = (a.publishedAt || a.createdAt).toUTCString();
      const link = `${SITE_URL}/news/${a.slug}`;
      const description = a.excerpt
        ? `<![CDATA[${a.excerpt}]]>`
        : `<![CDATA[Read more at ${link}]]>`;
      return `    <item>
      <title><![CDATA[${a.title}]]></title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${description}</description>
      ${a.featuredImage ? `<enclosure url="${a.featuredImage}" type="image/jpeg" length="0"/>` : ""}
    </item>`;
    }).join("\n");

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Vice Intelligence Platform</title>
    <link>${SITE_URL}</link>
    <description>Your ultimate source for GTA guides, cheats, news and everything Grand Theft Auto.</description>
    <language>en-us</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/api/rss.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

    res.set("Content-Type", "application/rss+xml; charset=utf-8");
    res.set("Cache-Control", "public, max-age=3600");
    res.send(rss);
  } catch (err) {
    req.log.error(err);
    res.status(500).send("Error generating RSS feed");
  }
});

export default router;
