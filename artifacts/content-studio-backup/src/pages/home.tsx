import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Gamepad2, Star, ChevronRight, Flame, Clock, Newspaper, Map, ShoppingBag, Car, ExternalLink, TrendingUp, Eye, HelpCircle, Crosshair, Shield, Zap, Search } from "lucide-react";
import { Countdown } from "@/components/countdown";
import { GTA_GAMES } from "@/data/games";
import { NEWS, TICKER_ITEMS } from "@/data/news";
import { GUIDES } from "@/data/guides";
import { AFFILIATE_PRODUCTS } from "@/data/affiliate";
import { setPageMeta } from "@/lib/seo";

const tagStyles: Record<string, string> = {
  confirmed: "badge-confirmed",
  official: "badge-confirmed",
  leaked: "badge-leaked",
  rumor: "badge-rumor",
  guide: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
  history: "text-violet-400 border-violet-500/30 bg-violet-500/10",
};
const tagLabels: Record<string, string> = {
  confirmed: "✓ CONFIRMED",
  official: "✓ OFFICIAL",
  leaked: "⚠ LEAKED",
  rumor: "? RUMOR",
  guide: "GUIDE",
  history: "HISTORY",
};

// Article visual color themes
const articleColors = [
  "from-pink-900/60 to-rose-950/80",
  "from-violet-900/60 to-purple-950/80",
  "from-cyan-900/60 to-sky-950/80",
  "from-amber-900/60 to-orange-950/80",
  "from-emerald-900/60 to-green-950/80",
  "from-indigo-900/60 to-blue-950/80",
];

const GTA6_FAQ = [
  {
    q: "When is GTA 6 coming out?",
    a: "GTA 6 releases on November 19, 2026 for PlayStation 5 and Xbox Series X|S. Rockstar confirmed this date after two delays — originally planned for Fall 2025, then May 2026. A PC version is confirmed but without a release date.",
  },
  {
    q: "What platforms will GTA 6 be on?",
    a: "GTA 6 launches on PS5 and Xbox Series X|S on November 19, 2026. There is no last-gen (PS4/Xbox One) version. A PC version is confirmed — Rockstar confirmed DLSS 4, AMD FSR 4, ray tracing, and ultra-wide support — but without a date (likely 2027+).",
  },
  {
    q: "How much does GTA 6 cost?",
    a: "GTA 6 costs $79.99 for the Standard Edition and $99.99 for the Ultimate Edition. All pre-orders include the Vintage Vice City Pack — 5 throwback vehicles, retro outfits for Lucia and Jason, and a classic weapon skin pack. Pre-orders opened June 25, 2026.",
  },
  {
    q: "Who are the main characters in GTA 6?",
    a: "GTA 6 has two playable protagonists: Lucia (the series' first female lead in a mainline game) and Jason Duvall (confirmed via Trailer 2 news ticker). They are a criminal couple navigating the underworld of Leonida — a Bonnie & Clyde dynamic across Vice City and the surrounding state.",
  },
  {
    q: "Where is GTA 6 set?",
    a: "GTA 6 is set in Leonida — Rockstar's fictional version of modern Florida — with Vice City (fictional Miami) as the main urban hub. The map includes Vice City, the Leonida Everglades (swampland), the Leonida Keys (island chain), a working port, and rural inland towns. Estimated to be 2.5–3× larger than GTA 5.",
  },
  {
    q: "Will GTA 6 have GTA Online?",
    a: "GTA Online 6 will NOT be available when GTA 6 launches on November 19, 2026. The game launches as story mode only. GTA Online 6 will follow as a free post-launch update for all GTA 6 owners — Rockstar said it 'deserves its own moment.' Early 2027 is the estimated window, but no date is confirmed.",
  },
  {
    q: "Is GTA 6 coming to PC?",
    a: "Yes — Rockstar confirmed a PC version of GTA 6 is coming, but it will not launch alongside consoles. PC confirmation includes DLSS 4, AMD FSR 4, full ray tracing, and ultra-wide monitor support. Based on GTA V's pattern (18 months after console), expect GTA 6 PC in late 2027 or 2028.",
  },
  {
    q: "What is the Vintage Vice City Pack?",
    a: "The Vintage Vice City Pack is the pre-order bonus for GTA 6 — included in both Standard and Ultimate editions if you pre-order before launch. It includes 5 throwback vehicles (including the Infernus Classic and Stinger GT), 1980s-themed outfits for Lucia and Jason, and a retro gold-and-chrome weapon skin pack.",
  },
];

export function Home() {
  useEffect(() => {
    setPageMeta({
      title: "GTA 6 Guide — Release Date, Editions, Cheats & GTA 6 News (2026)",
      description: "GTA6Guide.in — the #1 GTA resource. GTA 6 release date (Nov 19, 2026), editions guide, pre-order info, cheat codes for every GTA game, mission guides, and breaking news. Updated daily.",
      path: "/",
    });
  }, []);

  const hotNews = NEWS.filter((n) => n.hot).slice(0, 6);
  const latestNews = NEWS.slice(0, 10);
  const featuredGuides = GUIDES.slice(0, 6);
  const featuredGear = AFFILIATE_PRODUCTS.slice(0, 3);
  const trendingNews = [...NEWS].sort((a, b) => (b.views ?? 0) - (a.views ?? 0)).slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-bg" />
        <div className="hero-gradient absolute inset-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="flex flex-col items-start gap-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/8 text-xs font-mono text-primary uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block" />
              GTA 6 — November 19, 2026 — Pre-Orders Live Now
            </div>
            <h1 className="font-headline text-6xl md:text-8xl leading-none text-foreground">
              GTA6<span className="gradient-text-vice"> GUIDE</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              The #1 GTA resource — GTA 6 release date, editions, pre-order guide, cheat codes, mission guides, and news for every GTA game from GTA III to GTA 6.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/gta6/release-date">
                <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-primary/90 transition-all hover:shadow-[0_0_24px_rgba(255,20,147,0.4)] cursor-pointer">
                  GTA 6 Release Date <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
              <Link href="/gta6/editions">
                <div className="inline-flex items-center gap-2 border border-primary/40 bg-primary/10 backdrop-blur px-5 py-2.5 rounded-md text-sm font-semibold text-primary hover:bg-primary/20 transition-colors cursor-pointer">
                  Editions Guide
                </div>
              </Link>
              <Link href="/cheats">
                <div className="inline-flex items-center gap-2 border border-border bg-card/60 backdrop-blur px-5 py-2.5 rounded-md text-sm font-semibold hover:border-primary/40 transition-colors cursor-pointer">
                  Cheat Codes
                </div>
              </Link>
              <Link href="/news">
                <div className="inline-flex items-center gap-2 border border-border bg-card/60 backdrop-blur px-5 py-2.5 rounded-md text-sm font-semibold hover:border-primary/40 transition-colors cursor-pointer">
                  Latest News
                </div>
              </Link>
            </div>

            {/* Live Stats */}
            <div className="flex flex-wrap gap-5 mt-2">
              {[
                { value: "39M+", label: "GTA 6 Pre-Orders" },
                { value: "$3B", label: "Pre-Launch Revenue" },
                { value: "20+", label: "GTA 6 Articles" },
                { value: "89+", label: "Cheat Codes" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="font-headline text-2xl text-primary leading-none">{value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="border-b border-border bg-card/40 overflow-hidden">
        <div className="flex">
          <div className="shrink-0 flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest">
            <Flame className="w-3.5 h-3.5" /> LIVE
          </div>
          <div className="flex-1 overflow-hidden py-2.5">
            <div className="ticker-inner flex gap-16 whitespace-nowrap text-sm text-muted-foreground">
              {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-3">
                  {item}<span className="opacity-30">|</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">

        {/* GTA 6 Countdown Spotlight */}
        <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/5 border border-primary/30 rounded-xl overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start justify-between gap-6">
              <div className="max-w-xl">
                <div className="text-xs font-mono text-primary uppercase tracking-widest mb-2">🔥 Most Anticipated Game of 2026</div>
                <h2 className="font-headline text-4xl md:text-5xl mb-3">GTA 6 — NOV 19, 2026</h2>
                <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                  Rockstar's most ambitious open-world game returns to Vice City. Play as both Lucia and Jason across modern Leonida — Vice City, the Everglades, and the Keys. Standard edition $79.99 · Ultimate edition $99.99. Pre-orders live now with Vintage Vice City Pack bonus.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: "Release Date", value: "November 19, 2026" },
                    { label: "Platforms", value: "PS5 / Xbox Series X|S" },
                    { label: "Protagonists", value: "Lucia & Jason Duvall" },
                    { label: "Editions", value: "$79.99 Standard · $99.99 Ultimate" },
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-background/50 rounded-lg p-3">
                      <div className="text-xs text-muted-foreground">{label}</div>
                      <div className="text-sm font-semibold text-foreground">{value}</div>
                    </div>
                  ))}
                </div>
                <Countdown />
              </div>
              <div className="flex flex-col gap-2 w-full md:w-52 shrink-0">
                <Link href="/gta6/pre-order">
                  <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-primary/90 transition-all cursor-pointer w-full justify-center">
                    Pre-Order Guide <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
                <Link href="/gta6/editions">
                  <div className="inline-flex items-center gap-2 border border-border bg-card/60 px-5 py-2.5 rounded-md text-sm font-semibold hover:border-primary/40 transition-colors cursor-pointer w-full justify-center">
                    Editions Compared
                  </div>
                </Link>
                <Link href="/gta6/release-date">
                  <div className="inline-flex items-center gap-2 border border-border bg-card/60 px-5 py-2.5 rounded-md text-sm font-semibold hover:border-primary/40 transition-colors cursor-pointer w-full justify-center">
                    Release Date Details
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* GTA 6 Pages Hub */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-headline text-3xl md:text-4xl">GTA 6 COMPLETE GUIDE</h2>
            <Link href="/gta6/release-date">
              <div className="text-sm text-primary hover:text-primary/80 flex items-center gap-1 cursor-pointer">All GTA 6 pages <ChevronRight className="w-4 h-4" /></div>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              { href: "/gta6/release-date", label: "Release Date", sub: "Nov 19, 2026 confirmed", color: "text-primary", bg: "border-primary/30 bg-primary/5" },
              { href: "/gta6/editions", label: "Editions Guide", sub: "Standard vs Ultimate", color: "text-amber-400", bg: "border-amber-500/20 bg-amber-500/5" },
              { href: "/gta6/pre-order", label: "Pre-Order Guide", sub: "Where to buy + bonuses", color: "text-emerald-400", bg: "border-emerald-500/20 bg-emerald-500/5" },
              { href: "/gta6/price", label: "GTA 6 Price", sub: "$79.99 vs $99.99", color: "text-cyan-400", bg: "border-cyan-500/20 bg-cyan-500/5" },
              { href: "/gta6/online", label: "GTA 6 Online", sub: "Not at launch — post-update", color: "text-violet-400", bg: "border-violet-500/20 bg-violet-500/5" },
              { href: "/gta6/map", label: "GTA 6 Map", sub: "Vice City + Leonida", color: "text-amber-400", bg: "border-border bg-card" },
              { href: "/gta6/map-size", label: "Map Size vs GTA 5", sub: "2.5–3× bigger confirmed", color: "text-pink-400", bg: "border-border bg-card" },
              { href: "/gta6/story", label: "Story Guide", sub: "Lucia & Jason explained", color: "text-rose-400", bg: "border-border bg-card" },
              { href: "/gta6/characters", label: "Characters", sub: "Full roster breakdown", color: "text-indigo-400", bg: "border-border bg-card" },
              { href: "/gta6/trailer", label: "Trailers", sub: "Breakdown of every detail", color: "text-sky-400", bg: "border-border bg-card" },
              { href: "/gta6/easter-eggs", label: "Easter Eggs", sub: "Tommy Vercetti lizard +5", color: "text-purple-400", bg: "border-border bg-card" },
              { href: "/gta6/download-size", label: "Download Size", sub: "~130–150 GB estimated", color: "text-slate-400", bg: "border-border bg-card" },
            ].map(({ href, label, sub, color, bg }) => (
              <Link key={href} href={href}>
                <div className={`group border ${bg} rounded-xl p-4 hover:border-primary/30 transition-all cursor-pointer h-full`}>
                  <div className={`font-display font-semibold text-sm mb-1 group-hover:text-primary transition-colors ${color}`}>{label}</div>
                  <div className="text-[11px] text-muted-foreground leading-tight">{sub}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Articles — Visual Cards */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-primary" />
              <h2 className="font-headline text-3xl md:text-4xl">BREAKING NEWS</h2>
            </div>
            <Link href="/news">
              <div className="text-sm text-primary hover:text-primary/80 flex items-center gap-1 cursor-pointer">All articles <ChevronRight className="w-4 h-4" /></div>
            </Link>
          </div>

          {/* Hero article + 2 side articles */}
          <div className="grid md:grid-cols-3 gap-4">
            {/* Main feature */}
            <Link href={`/news/${hotNews[0]?.id}`} className="md:col-span-2">
              <div className={`group relative h-64 md:h-72 rounded-xl overflow-hidden border border-primary/20 cursor-pointer bg-gradient-to-br ${articleColors[0]}`}>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono text-emerald-400 border border-emerald-500/30 bg-emerald-500/20 px-2 py-0.5 rounded-full uppercase tracking-widest">
                      {hotNews[0]?.tag === "official" ? "✓ OFFICIAL" : "✓ CONFIRMED"}
                    </span>
                    <span className="text-[10px] font-mono text-red-400 border border-red-500/30 bg-red-500/20 px-2 py-0.5 rounded-full uppercase tracking-widest flex items-center gap-1">
                      <Flame className="w-2.5 h-2.5" /> HOT
                    </span>
                    {hotNews[0]?.readTime && <span className="text-[10px] text-white/60 ml-auto">{hotNews[0].readTime} read</span>}
                  </div>
                  <h3 className="font-headline text-xl md:text-2xl text-white leading-tight group-hover:text-primary transition-colors mb-2">
                    {hotNews[0]?.title}
                  </h3>
                  <p className="text-xs text-white/70 line-clamp-2 hidden md:block">{hotNews[0]?.summary}</p>
                  <div className="text-xs text-white/50 mt-2 flex items-center gap-2">
                    <Clock className="w-3 h-3" /> {hotNews[0]?.date} · {hotNews[0]?.source}
                  </div>
                </div>
              </div>
            </Link>

            {/* Side articles */}
            <div className="flex flex-col gap-4">
              {hotNews.slice(1, 3).map((item, i) => (
                <Link key={item.id} href={`/news/${item.id}`}>
                  <div className={`group relative h-[calc(50%-8px)] min-h-32 rounded-xl overflow-hidden border border-border/50 cursor-pointer bg-gradient-to-br ${articleColors[i + 1]}`}>
                    <div className="absolute inset-0 flex flex-col justify-end p-4">
                      <span className="text-[10px] font-mono text-white/60 uppercase tracking-widest mb-1">{item.date}</span>
                      <h3 className="font-display font-semibold text-sm text-white leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Secondary feature row */}
          <div className="grid sm:grid-cols-3 gap-4 mt-4">
            {hotNews.slice(3, 6).map((item, i) => (
              <Link key={item.id} href={`/news/${item.id}`}>
                <div className={`group relative h-40 rounded-xl overflow-hidden border border-border/50 cursor-pointer bg-gradient-to-br ${articleColors[i + 3]}`}>
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <span className={`text-[10px] font-mono uppercase tracking-widest mb-1 ${tagStyles[item.tag].split(" ")[0]}`}>{tagLabels[item.tag]}</span>
                    <h3 className="font-display font-semibold text-sm text-white leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <span className="text-[10px] text-white/50 mt-1">{item.readTime && `${item.readTime} · `}{item.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Nav */}
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {[
            { href: "/news", icon: Newspaper, label: "GTA 6 News", sub: "Daily updates", color: "text-pink-400" },
            { href: "/guides", icon: BookOpen, label: "Guides", sub: "Money & missions", color: "text-cyan-400" },
            { href: "/cheats", icon: Gamepad2, label: "Cheats", sub: "All games & platforms", color: "text-violet-400" },
            { href: "/maps", icon: Map, label: "Maps", sub: "GTA I to GTA 5", color: "text-amber-400" },
            { href: "/vehicles", icon: Car, label: "Vehicles", sub: "Stats & locations", color: "text-emerald-400" },
            { href: "/weapons", icon: Crosshair, label: "Weapons", sub: "Damage & ammo", color: "text-red-400" },
          ].map((item) => (
            <Link key={item.href} href={item.href}>
              <div className="group border border-border bg-card rounded-xl p-4 hover:border-primary/30 transition-all cursor-pointer h-full">
                <item.icon className={`w-5 h-5 mb-2 ${item.color}`} />
                <div className="font-display font-semibold text-xs group-hover:text-primary transition-colors">{item.label}</div>
                <div className="text-[10px] text-muted-foreground mt-0.5">{item.sub}</div>
              </div>
            </Link>
          ))}
        </section>

        {/* Trending Now */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h2 className="font-headline text-3xl md:text-4xl">TRENDING NOW</h2>
            </div>
            <Link href="/news">
              <div className="text-sm text-primary hover:text-primary/80 flex items-center gap-1 cursor-pointer">All articles <ChevronRight className="w-4 h-4" /></div>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {trendingNews.map((item, i) => (
              <Link key={item.id} href={`/news/${item.id}`}>
                <div className="group flex items-start gap-4 p-4 border border-border bg-card rounded-xl hover:border-primary/30 transition-all cursor-pointer">
                  <span className="font-headline text-3xl text-primary/25 leading-none shrink-0 w-8 text-center">{i + 1}</span>
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded border ${tagStyles[item.tag]}`}>{tagLabels[item.tag]}</span>
                    </div>
                    <h3 className="font-display font-semibold text-sm leading-snug group-hover:text-primary transition-colors">{item.title}</h3>
                    <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                      <span className="flex items-center gap-1"><Eye className="w-2.5 h-2.5" /> {(item.views ?? 0).toLocaleString()} views</span>
                      <span className="flex items-center gap-1"><Clock className="w-2.5 h-2.5" /> {item.date}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Latest News — full list linking to individual articles */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-headline text-3xl md:text-4xl">LATEST GTA 6 UPDATES</h2>
            <Link href="/news">
              <div className="text-sm text-primary hover:text-primary/80 flex items-center gap-1 cursor-pointer">All {NEWS.length} articles <ChevronRight className="w-4 h-4" /></div>
            </Link>
          </div>
          <div className="border border-border rounded-xl bg-card overflow-hidden divide-y divide-border">
            {latestNews.map((item) => (
              <Link key={item.id} href={`/news/${item.id}`}>
                <div className="group flex items-start gap-4 p-4 hover:bg-secondary/40 transition-colors cursor-pointer">
                  <span className={`mt-0.5 shrink-0 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border ${tagStyles[item.tag]}`}>{tagLabels[item.tag]}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm group-hover:text-primary transition-colors">{item.title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{item.summary}</div>
                  </div>
                  <div className="shrink-0 text-xs text-muted-foreground hidden sm:flex items-center gap-2 whitespace-nowrap">
                    {item.readTime && <span>{item.readTime}</span>}
                    <span>{item.date}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Why Trust Us */}
        <section className="bg-card border border-border rounded-xl p-6 md:p-8">
          <h2 className="font-headline text-2xl mb-6 text-center">VERIFIED, SOURCED & ALWAYS CURRENT</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Shield, color: "text-emerald-400", title: "Verified & Verifiable", desc: "Every claim traces back to official Rockstar materials, press releases, or verifiable reporting. Confirmed facts are always separated from leaks and rumors — everything is labeled." },
              { icon: Search, color: "text-cyan-400", title: "Researched, Not Rumor-Milled", desc: "Both official trailers, the Rockstar Newswire, and credible industry reporting cross-checked. You get signal, not noise. No made-up stats or fabricated quotes." },
              { icon: Zap, color: "text-primary", title: "Updated Through Launch", desc: "Every page is kept current as Rockstar reveals more. The release date, prices, editions, and pre-order bonuses are all confirmed official details as of June 2026." },
            ].map(({ icon: Icon, color, title, desc }) => (
              <div key={title} className="text-center">
                <Icon className={`w-8 h-8 ${color} mx-auto mb-3`} />
                <h3 className="font-display font-semibold text-sm mb-2">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Affiliate Gear Strip */}
        <section className="border border-primary/25 bg-gradient-to-r from-primary/5 to-transparent rounded-xl overflow-hidden">
          <div className="px-6 py-5 border-b border-primary/15 flex items-center justify-between">
            <div>
              <div className="text-xs font-mono text-primary uppercase tracking-widest mb-1">Amazon Picks</div>
              <h2 className="font-headline text-2xl">LEVEL UP YOUR GTA SETUP</h2>
            </div>
            <Link href="/gear">
              <div className="text-sm text-primary hover:text-primary/80 flex items-center gap-1 cursor-pointer whitespace-nowrap">All gear <ChevronRight className="w-4 h-4" /></div>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary/10">
            {featuredGear.map((product) => (
              <a
                key={product.id}
                href={product.link}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="group flex items-start gap-4 p-5 hover:bg-primary/5 transition-colors"
              >
                <ShoppingBag className="w-8 h-8 text-primary shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">{product.category}</div>
                  <div className="font-semibold text-sm group-hover:text-primary transition-colors leading-tight">{product.name}</div>
                  <div className="text-xs text-muted-foreground mt-1 line-clamp-2">{product.description}</div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="font-headline text-base text-primary">{product.price}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">Amazon <ExternalLink className="w-2.5 h-2.5" /></span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Cheat + Maps promo */}
        <section className="grid md:grid-cols-2 gap-4">
          <Link href="/cheats">
            <div className="group border border-border bg-card rounded-xl p-6 hover:border-primary/30 transition-all cursor-pointer h-full">
              <Gamepad2 className="w-8 h-8 text-violet-400 mb-3" />
              <h2 className="font-headline text-3xl mb-2">CHEAT CODES</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Every cheat code for GTA V, San Andreas, Vice City, GTA IV, and GTA III — for PlayStation, Xbox, PC, and phone numbers.
              </p>
              <div className="flex flex-wrap gap-2">
                {["GTA V", "San Andreas", "Vice City", "GTA IV", "GTA III"].map((t) => (
                  <span key={t} className="text-[10px] font-mono bg-secondary text-muted-foreground rounded px-2 py-1">{t}</span>
                ))}
              </div>
              <div className="flex items-center gap-1 text-sm text-primary mt-4 group-hover:gap-2 transition-all">View all cheat codes <ArrowRight className="w-4 h-4" /></div>
            </div>
          </Link>
          <Link href="/gta6/map-size">
            <div className="group border border-border bg-card rounded-xl p-6 hover:border-primary/30 transition-all cursor-pointer h-full">
              <Map className="w-8 h-8 text-amber-400 mb-3" />
              <h2 className="font-headline text-3xl mb-2">GTA 6 MAP SIZE</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                GTA 6's Leonida is estimated to be 2.5–3× larger than GTA 5. Full comparison of regions, biomes, cities, and storage requirements.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                {[["GTA 5", "~81 km²"], ["GTA 6 (est.)", "~200 km²"], ["Scale", "2.5–3× bigger"], ["Regions", "8 confirmed"]].map(([k, v]) => (
                  <div key={k} className="flex justify-between bg-secondary rounded px-2 py-1">
                    <span className="text-muted-foreground">{k}</span>
                    <span className="font-mono text-foreground">{v}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1 text-sm text-primary mt-4 group-hover:gap-2 transition-all">Full map comparison <ArrowRight className="w-4 h-4" /></div>
            </div>
          </Link>
        </section>

        {/* Featured Guides */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-headline text-3xl md:text-4xl">TOP GUIDES</h2>
            <Link href="/guides">
              <div className="text-sm text-primary hover:text-primary/80 flex items-center gap-1 cursor-pointer">All {GUIDES.length} guides <ChevronRight className="w-4 h-4" /></div>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredGuides.map((guide) => (
              <Link key={guide.id} href="/guides">
                <div className="group border border-border bg-card rounded-xl p-5 hover:border-primary/30 transition-all cursor-pointer h-full flex flex-col gap-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-secondary rounded text-muted-foreground border border-border">{guide.game}</span>
                    <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border ${guide.difficulty === "Beginner" ? "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" : guide.difficulty === "Advanced" ? "text-red-400 border-red-500/30 bg-red-500/10" : "text-amber-400 border-amber-500/30 bg-amber-500/10"}`}>{guide.difficulty}</span>
                  </div>
                  <h3 className="font-display font-semibold text-sm leading-snug group-hover:text-primary transition-colors flex-1">{guide.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2 border-t border-border">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {guide.timeRequired}</span>
                    <span className="text-emerald-400 font-mono">{guide.reward}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Franchise Grid */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-headline text-3xl md:text-4xl">THE FRANCHISE</h2>
            <Link href="/games"><div className="text-sm text-primary hover:text-primary/80 flex items-center gap-1 cursor-pointer">All games <ChevronRight className="w-4 h-4" /></div></Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {GTA_GAMES.map((game) => (
              <Link key={game.id} href="/games">
                <div className="group border border-border bg-card rounded-xl p-4 transition-all cursor-pointer text-center hover:border-white/20">
                  <div className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center text-xs font-bold font-headline" style={{ backgroundColor: game.color + "22", color: game.color, border: `1px solid ${game.color}44` }}>
                    {game.year.toString().slice(2)}
                  </div>
                  <div className="font-display font-semibold text-xs group-hover:text-primary transition-colors leading-tight">{game.shortTitle}</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">{game.year}</div>
                  {game.status === "pre-release" && <div className="mt-1.5 text-[9px] font-bold uppercase tracking-widest text-primary">Coming Soon</div>}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* GTA 6 FAQ */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-6 h-6 text-primary" />
            <h2 className="font-headline text-3xl md:text-4xl">GTA 6 FAQ — 2026</h2>
          </div>
          <div className="space-y-2">
            {GTA6_FAQ.map((faq, i) => (
              <details key={i} className="group border border-border bg-card rounded-md overflow-hidden hover:border-primary/25 transition-colors">
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none hover:bg-secondary/30 transition-colors">
                  <h3 className="font-display font-semibold text-sm">{faq.q}</h3>
                  <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-5 pb-5 pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
          <div className="mt-4 p-4 bg-card border border-border rounded-md">
            <p className="text-xs text-muted-foreground">
              <strong className="text-foreground">More GTA 6 questions?</strong> See our{" "}
              <Link href="/gta6/release-date"><span className="text-primary hover:underline cursor-pointer">full release date guide</span></Link>,{" "}
              <Link href="/gta6/editions"><span className="text-primary hover:underline cursor-pointer">editions comparison</span></Link>, or browse{" "}
              <Link href="/news"><span className="text-primary hover:underline cursor-pointer">all GTA 6 news articles</span></Link>.
            </p>
          </div>
        </section>

        {/* SEO Content Block */}
        <section className="bg-card border border-border rounded-xl p-8">
          <h2 className="font-headline text-3xl mb-4">About GTA6Guide.in</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground mb-2">GTA 6 Information Hub</h3>
              <p>Everything confirmed about GTA 6 — release date (November 19, 2026), Standard ($79.99) and Ultimate ($99.99) editions, Vintage Vice City pre-order pack, Lucia and Jason as co-protagonists, GTA Online 6 post-launch details, and the 2.5–3× larger Leonida map. Updated through launch.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Cheat Codes for Every GTA</h3>
              <p>Every GTA cheat code across all platforms — PlayStation button combos, Xbox controller codes, PC keyboard cheats, and GTA IV/V phone numbers. Covering GTA V, San Andreas, Vice City, GTA IV, and GTA III with platform-specific entry instructions.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Guides, Vehicles & Maps</h3>
              <p>Mission guides, money-making strategies, vehicle stats, weapon databases, and map breakdowns for every GTA game. From GTA III's taxi sub-missions to GTA V's Cayo Perico Heist — every game covered in depth. Updated with GTA 6 content as it's confirmed.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
