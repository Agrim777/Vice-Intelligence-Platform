---
name: Vice Intelligence Platform architecture
description: Key decisions for the GTA gaming CMS portal built on this monorepo
---

# Vice Intelligence Platform

## Default admin credentials
Seeded on first boot: username=`admin` password=`admin123`. Stored in `admins` table with bcrypt hash.

## Admin URL
Hidden at `/secure-admin-portal` — never in public nav, sitemap, or footer. The design subagent honoured this.

## Port conflict fix
`artifacts/content-studio-backup/package.json` was renamed from `@workspace/content-studio` to `@workspace/content-studio-backup` to prevent pnpm --filter from matching both packages and causing port 19046 conflicts.

## Session auth
express-session with SESSION_SECRET env var. Cookie: httpOnly, sameSite strict in prod, lax in dev. No JWT.

## Scheduled publishing
`src/lib/scheduler.ts` polls every 60s and auto-publishes articles where status=scheduled AND scheduledAt <= now.

## DB schema
Tables: articles, categories, tags, article_tags (join), admins, media, site_settings, homepage_config, article_revisions. All in lib/db/src/schema/.

## Media upload
NOT in OpenAPI spec (avoids Blob/File TS errors). Custom Express route at POST /api/admin/media/upload (multer). Files stored in artifacts/api-server/uploads/.

## Rich editor
Article editor uses @uiw/react-md-editor for markdown editing.

**Why:** Orval codegen cannot handle multipart/form-data with binary type cleanly — removed from spec, custom route instead.
