import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Flame, Clock, Eye, TrendingUp, Search, ChevronRight, ArrowRight } from "lucide-react";
import { NEWS, NewsItem } from "@/data/news";
import { setPageMeta } from "@/lib/seo";

const TAG_STYLES: Record<string, string> = {
  confirmed: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  official: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  leaked: "text-amber-400 border-amber-500/30 bg-amber-500/10",
  rumor: "text-muted-foreground border-border bg-card",
  guide: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
  history: "text-violet-400 border-violet-500/30 bg-violet-500/10",
};
const TAG_LABELS: Record<string, string> = {
  confirmed: "✓ CONFIRMED",
  official: "✓ OFFICIAL",
  leaked: "⚠ LEAKED",
  rumor: "? RUMOR",
  guide: "GUIDE",
  history: "HISTORY",
};

const CARD_GRADIENTS = [
  "from-pink-900/80 via-rose-950/90 to-black",
  "from-violet-900/80 via-purple-950/90 to-black",
  "from-cyan-900/80 via-sky-950/90 to-black",
  "from-amber-900/80 via-orange-950/90 to-black",
  "from-emerald-900/80 via-green-950/90 to-black",
  "from-indigo-900/80 via-blue-950/90 to-black",
  "from-red-900/80 via-rose-950/90 to-black",
  "from-teal-900/80 via-cyan-950/90 to-black",
];

const FILTERS = [
  { id: "All", label: "All" },
  { id: "official", label: "✓ Official" },
  { id: "confirmed", label: "✓ Confirmed" },
  { id: "leaked", label: "⚠ Leaked" },
  { id: "guide", label: "Guides" },
  { id: "history", label: "History" },
];

export function News() {
  const [filter, setFilter] = useState<string>("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setPageMeta({
      title: "GTA 6 News Hub — Latest Updates, Official Reveals & Confirmed Details (2026)",
      description: "All GTA 6 news in one place — official Rockstar announcements, pre-order details, trailer breakdowns, and verified facts. November 19, 2026 release confirmed. Updated daily.",
      path: "/news",
    });
  }, []);

  const filtered = NEWS.filter((n) => {
    const matchTag = filter === "All" || n.tag === filter;
    const matchSearch = !search || n.title.toLowerCase().includes(search.toLowerCase()) || n.summary.toLowerCase().includes(search.toLowerCase());
    return matchTag && matchSearch;
  });

  const hot = NEWS.filter(n => n.hot).slice(0, 3);
  const trending = [...NEWS].sort((a, b) => (b.views ?? 0) - (a.views ?? 0)).slice(0, 5);

  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <div className="relative border-b border-border overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block" />
            Live Coverage · Updated Daily
          </div>
          <h1 className="font-headline text-5xl md:text-6xl mb-3">GTA 6 NEWS HUB</h1>
          <p className="text-muted-foreground max-w-2xl">Every official reveal, trailer breakdown, and confirmed detail about GTA 6 — launching November 19, 2026. Tagged by reliability.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 space-y-12">

        {/* Featured articles — visual hero cards */}
        <section>
          <div className="flex items-center gap-2 mb-5">
            <Flame className="w-5 h-5 text-primary" />
            <h2 className="font-headline text-2xl">FEATURED ARTICLES</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {/* Big hero card */}
            <Link href={`/news/${hot[0]?.id}`} className="md:col-span-2">
              <div className={`group relative h-72 rounded-xl overflow-hidden border border-primary/20 cursor-pointer bg-gradient-to-br ${CARD_GRADIENTS[0]}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-emerald-500/40 bg-emerald-500/20 text-emerald-400 uppercase tracking-widest">
                      {TAG_LABELS[hot[0]?.tag ?? "official"]}
                    </span>
                    {hot[0]?.hot && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-red-500/40 bg-red-500/20 text-red-400 uppercase tracking-widest flex items-center gap-1">
                        <Flame className="w-2.5 h-2.5" /> HOT
                      </span>
                    )}
                    {hot[0]?.readTime && <span className="text-[10px] text-white/50 ml-auto">{hot[0].readTime} read</span>}
                  </div>
                  <h3 className="font-headline text-2xl text-white leading-tight group-hover:text-primary transition-colors mb-2">
                    {hot[0]?.title}
                  </h3>
                  <p className="text-sm text-white/70 line-clamp-2 hidden md:block">{hot[0]?.summary}</p>
                  <div className="flex items-center gap-3 mt-3 text-xs text-white/50">
                    <Clock className="w-3 h-3" /> {hot[0]?.date}
                    {hot[0]?.views && <><Eye className="w-3 h-3 ml-2" /> {(hot[0].views / 1000).toFixed(0)}K views</>}
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-1 text-xs text-primary bg-black/60 px-2 py-1 rounded-full">Read <ArrowRight className="w-3 h-3" /></div>
                </div>
              </div>
            </Link>

            {/* Two stacked side cards */}
            <div className="flex flex-col gap-4">
              {hot.slice(1, 3).map((item, i) => (
                <Link key={item.id} href={`/news/${item.id}`}>
                  <div className={`group relative h-[calc(50%-8px)] min-h-32 rounded-xl overflow-hidden border border-border/50 cursor-pointer bg-gradient-to-br ${CARD_GRADIENTS[i + 1]}`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4">
                      <span className="text-[10px] text-white/50 uppercase tracking-widest mb-1">{item.date}</span>
                      <h3 className="font-display font-semibold text-sm text-white leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      {item.readTime && <span className="text-[10px] text-white/40 mt-1">{item.readTime} read</span>}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Search + Filters */}
            <div className="space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search GTA 6 news…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-card border border-border rounded-xl pl-9 pr-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {FILTERS.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFilter(f.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-colors border ${
                      filter === f.id
                        ? "bg-primary/15 text-primary border-primary/40"
                        : "bg-secondary text-muted-foreground border-border hover:text-foreground"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count */}
            {search && (
              <p className="text-xs text-muted-foreground">
                {filtered.length} result{filtered.length !== 1 ? "s" : ""} for "{search}"
              </p>
            )}

            {/* Article Grid */}
            <div className="space-y-4">
              {filtered.map((item, i) => (
                <ArticleCard key={item.id} item={item} gradient={CARD_GRADIENTS[i % CARD_GRADIENTS.length]} />
              ))}
              {filtered.length === 0 && (
                <div className="py-16 text-center text-muted-foreground border border-dashed border-border rounded-xl">
                  <Search className="w-8 h-8 mx-auto mb-3 opacity-30" />
                  <p className="text-sm">No articles found. Try a different search or filter.</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending */}
            <div className="border border-primary/20 bg-primary/5 rounded-xl p-5">
              <div className="flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-4">
                <TrendingUp className="w-3.5 h-3.5" /> Most Read
              </div>
              <div className="space-y-3">
                {trending.map((item, i) => (
                  <Link key={item.id} href={`/news/${item.id}`}>
                    <div className="group flex items-start gap-3 cursor-pointer">
                      <span className="shrink-0 font-headline text-2xl text-primary/30 leading-none w-5">{i + 1}</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium leading-snug group-hover:text-primary transition-colors line-clamp-2">{item.title}</div>
                        <div className="text-[10px] text-muted-foreground flex items-center gap-1.5 mt-1">
                          <Eye className="w-2.5 h-2.5" />
                          {(item.views ?? 0).toLocaleString()} views · {item.date}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="border border-border bg-card rounded-xl p-5">
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">GTA 6 Pages</div>
              <div className="space-y-1">
                {[
                  { href: "/gta6/release-date", label: "Release Date — Nov 19, 2026" },
                  { href: "/gta6/editions", label: "Editions Guide — $79.99 vs $99.99" },
                  { href: "/gta6/pre-order", label: "Pre-Order Guide + Bonuses" },
                  { href: "/gta6/online", label: "GTA Online 6 — Not at Launch" },
                  { href: "/gta6/map-size", label: "Map Size vs GTA 5" },
                  { href: "/gta6/story", label: "Story — Lucia & Jason" },
                  { href: "/gta6/easter-eggs", label: "Easter Eggs" },
                  { href: "/gta6/download-size", label: "Download Size (~130–150 GB)" },
                ].map(({ href, label }) => (
                  <Link key={href} href={href}>
                    <div className="group flex items-center justify-between py-2 px-2 rounded hover:bg-secondary/50 transition-colors cursor-pointer">
                      <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{label}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-primary transition-colors shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tag Legend */}
            <div className="border border-border bg-card rounded-xl p-5">
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">Tag Guide</div>
              <div className="space-y-2">
                {[
                  { tag: "official" as const, desc: "From Rockstar / Take-Two directly" },
                  { tag: "confirmed" as const, desc: "Verified via multiple sources" },
                  { tag: "leaked" as const, desc: "Unconfirmed but credible" },
                  { tag: "guide" as const, desc: "Analysis & explainer content" },
                  { tag: "history" as const, desc: "GTA franchise records & history" },
                ].map(({ tag, desc }) => (
                  <div key={tag} className="flex items-start gap-2">
                    <span className={`shrink-0 text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded border ${TAG_STYLES[tag]}`}>{TAG_LABELS[tag]}</span>
                    <span className="text-xs text-muted-foreground">{desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArticleCard({ item, gradient }: { item: NewsItem; gradient: string }) {
  return (
    <Link href={`/news/${item.id}`}>
      <div className="group border border-border bg-card rounded-xl overflow-hidden hover:border-primary/30 transition-all cursor-pointer">
        <div className="flex flex-col sm:flex-row">
          {/* Colored thumbnail */}
          <div className={`sm:w-36 h-24 sm:h-auto shrink-0 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
            <div className="text-white/10 font-headline text-4xl font-bold">GTA</div>
          </div>
          {/* Content */}
          <div className="flex-1 p-5 space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border ${TAG_STYLES[item.tag]}`}>
                {TAG_LABELS[item.tag]}
              </span>
              {item.hot && (
                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border badge-hot flex items-center gap-1">
                  <Flame className="w-2.5 h-2.5" /> HOT
                </span>
              )}
              {item.views && (
                <span className="text-[10px] text-muted-foreground flex items-center gap-1 ml-auto">
                  <Eye className="w-2.5 h-2.5" /> {(item.views / 1000).toFixed(0)}K views
                </span>
              )}
            </div>
            <h3 className="font-display font-semibold text-sm leading-snug group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{item.summary}</p>
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="w-2.5 h-2.5" /> {item.date}</span>
                {item.readTime && <span>{item.readTime} read</span>}
                <span>{item.source}</span>
              </div>
              <span className="text-[10px] text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                Read article <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
