import { useState, useEffect } from "react";
import { Flame, Clock, ExternalLink, Search, Eye, TrendingUp } from "lucide-react";
import { NEWS, NewsItem } from "@/data/news";
import { setPageMeta } from "@/lib/seo";

const TAG_STYLES: Record<string, string> = {
  confirmed: "badge-confirmed",
  official: "badge-confirmed",
  leaked: "badge-leaked",
  rumor: "badge-rumor",
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

const FILTERS = ["All", "confirmed", "official", "leaked", "rumor"] as const;

export function News() {
  const [filter, setFilter] = useState<string>("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setPageMeta({
      title: "GTA 6 News Hub — Latest Updates, Trailers & Confirmed Details",
      description: "All GTA 6 news in one place — official Rockstar announcements, trailer breakdowns, verified leaks, and rumors tagged by reliability. Updated daily.",
      path: "/news",
    });
  }, []);

  const filtered = NEWS.filter((n) => {
    const matchTag = filter === "All" || n.tag === filter;
    const matchSearch = !search || n.title.toLowerCase().includes(search.toLowerCase()) || n.summary.toLowerCase().includes(search.toLowerCase());
    return matchTag && matchSearch;
  });

  const trendingNews = [...NEWS].sort((a, b) => (b.views ?? 0) - (a.views ?? 0)).slice(0, 5);

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block" />
          Live Coverage
        </div>
        <h1 className="font-headline text-5xl md:text-6xl">GTA 6 NEWS HUB</h1>
        <p className="text-muted-foreground">Every official reveal, trailer breakdown, and verified leak — tagged by reliability. Updated daily.</p>
      </div>

      {/* Trending sidebar row */}
      <div className="border border-primary/20 bg-primary/5 rounded-xl p-4">
        <div className="flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-3">
          <TrendingUp className="w-3.5 h-3.5" /> Trending Now
        </div>
        <div className="space-y-2">
          {trendingNews.map((item, i) => (
            <div key={item.id} className="flex items-start gap-3">
              <span className="shrink-0 font-headline text-xl text-primary/40 leading-none w-5">{i + 1}</span>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium leading-snug line-clamp-1">{item.title}</div>
                <div className="text-[10px] text-muted-foreground flex items-center gap-2 mt-0.5">
                  <Eye className="w-2.5 h-2.5" />
                  {(item.views ?? 0).toLocaleString()} views
                  <span className={`px-1.5 py-0.5 rounded border font-bold uppercase tracking-widest text-[9px] ${TAG_STYLES[item.tag]}`}>{TAG_LABELS[item.tag]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 p-4 rounded-md border border-border bg-card text-xs">
        <span className="text-muted-foreground font-mono uppercase tracking-wider self-center">Tag key:</span>
        {(["confirmed", "leaked", "rumor"] as const).map((tag) => (
          <span key={tag} className={`px-2 py-1 rounded border font-bold uppercase tracking-widest ${TAG_STYLES[tag]}`}>
            {TAG_LABELS[tag]}
          </span>
        ))}
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search news…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-card border border-border rounded-md pl-9 pr-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-wider transition-colors border ${
                filter === f ? "bg-primary/15 text-primary border-primary/40" : "bg-secondary text-muted-foreground border-border hover:text-foreground"
              }`}
            >
              {f === "All" ? "All" : TAG_LABELS[f]}
            </button>
          ))}
        </div>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 gap-4">
        {filtered.map((item) => <NewsCard key={item.id} item={item} />)}
        {filtered.length === 0 && (
          <div className="py-16 text-center text-muted-foreground">
            <Search className="w-8 h-8 mx-auto mb-3 opacity-30" />
            <p className="text-sm">No results found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function NewsCard({ item }: { item: NewsItem }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group border border-border bg-card rounded-md overflow-hidden hover:border-primary/25 transition-all hover-lift">
      <div className="p-5">
        <div className="flex items-start gap-4">
          <div className="flex-1 space-y-2.5">
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
                  <Eye className="w-2.5 h-2.5" /> {item.views.toLocaleString()}
                </span>
              )}
            </div>
            <h3 className="font-display font-semibold text-base leading-snug group-hover:text-primary transition-colors">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.summary}</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
              <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{item.date}</span>
              <span className="flex items-center gap-1.5"><ExternalLink className="w-3 h-3" />{item.source}</span>
              {item.readTime && <span>{item.readTime} read</span>}
            </div>
          </div>
        </div>

        {/* Expanded body */}
        {item.body && (
          <>
            {expanded && (
              <div className="mt-4 pt-4 border-t border-border">
                <div className="prose prose-sm prose-invert max-w-none text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                  {item.body}
                </div>
              </div>
            )}
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-3 text-xs text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              {expanded ? "Show less ↑" : "Read full article ↓"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
