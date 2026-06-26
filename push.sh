#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"
git config user.email "agent@gta6guide.in"
git config user.name "GTA6Guide Agent"
git add -A
git commit -m "SEO overhaul + content expansion: domain fix to gta6guide.in, sitemap.xml, per-page meta for all 9 routes, 22 news articles, 11 new guides (vehicle deep-dives + mission walkthroughs), Trending Now section, GTA 6 FAQ, cheat entry guide with platform instructions"
git push
