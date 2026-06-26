import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Gamepad2, Star, ChevronRight, Flame, Clock, Newspaper, Map, ShoppingBag, Car, ExternalLink, TrendingUp, Eye, HelpCircle } from "lucide-react";
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
  confirmed: "CONFIRMED",
  official: "OFFICIAL",
  leaked: "LEAKED",
  rumor: "RUMOR",
  guide: "GUIDE",
  history: "HISTORY",
};

const GTA6_FAQ = [
  {
    q: "When is GTA 6 coming out?",
    a: "GTA 6 releases Fall 2025 for PlayStation 5 and Xbox Series X|S. Rockstar Games officially confirmed this date in April 2025. A PC version is expected 6–12 months after the console launch.",
  },
  {
    q: "What platforms will GTA 6 be on?",
    a: "GTA 6 launches on PS5 and Xbox Series X|S. There is no current-gen (PS4/Xbox One) version. The PC version will follow at a later date — Rockstar confirmed it will support full ray tracing and DLSS 4.",
  },
  {
    q: "How much does GTA 6 cost?",
    a: "GTA 6 is priced at $79.99 for the Standard Edition and $99.99 for the Premium Edition. The Premium Edition includes 3 days early access, exclusive in-game content, and $1M GTA Online starting cash.",
  },
  {
    q: "Who are the characters in GTA 6?",
    a: "GTA 6 features two playable protagonists: Lucia (a female criminal and the first female lead in mainline GTA history) and Jason (her male co-protagonist). You can switch between them freely throughout the open world.",
  },
  {
    q: "Where is GTA 6 set?",
    a: "GTA 6 is set in a reimagined Vice City (inspired by Miami, Florida) and the surrounding Leonida state — which includes Everglades swampland, rural farmland, offshore keys, and the sprawling Vice City urban area.",
  },
  {
    q: "Will GTA 6 have GTA Online?",
    a: "Yes — GTA Online 6 launches on day one with the base game. Rockstar says it's been built from the ground up, not ported from GTA V. It will be free for all GTA 6 owners.",
  },
  {
    q: "Is GTA 6 coming to PC?",
    a: "Yes, but not at launch. Rockstar confirmed the PC version will follow consoles by at least 6 months. It will support ray tracing, DLSS 4, and high-resolution textures optimized for modern PC hardware.",
  },
  {
    q: "What are the new GTA 6 gameplay features?",
    a: "Confirmed features include: dual protagonists, dynamic hurricane weather, wildlife ecosystem (alligators, fish, birds), prone cover system, modular weapon customization, property purchasing, stock market, and an in-game social media system.",
  },
];

export function Home() {
  useEffect(() => {
    setPageMeta({
      title: "GTA Cheat Codes, Guides & GTA 6 News — The #1 GTA Resource",
      description: "GTA6Guide.in — all GTA cheat codes (GTA 6, GTA 5, San Andreas, Vice City, GTA 4, GTA 3), mission guides, vehicle database, maps, and GTA 6 news. Updated 2025.",
      path: "/",
    });
  }, []);

  const hotNews = NEWS.filter((n) => n.hot).slice(0, 3);
  const latestNews = NEWS.slice(0, 8);
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
              GTA 6 — Fall 2025 · The Wait Is Almost Over
            </div>
            <h1 className="font-headline text-6xl md:text-8xl leading-none text-foreground">
              GTA6<span className="gradient-text-vice"> GUIDE</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              The #1 GTA resource — cheat codes, mission guides, vehicle database, maps, and GTA 6 news
              for every Grand Theft Auto game from GTA 1 (1997) to GTA 6 (2025).
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/guides">
                <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-primary/90 transition-all hover:shadow-[0_0_24px_rgba(255,20,147,0.4)] cursor-pointer">
                  Browse Guides <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
              <Link href="/cheats">
                <div className="inline-flex items-center gap-2 border border-border bg-card/60 backdrop-blur px-5 py-2.5 rounded-md text-sm font-semibold hover:border-primary/40 transition-colors cursor-pointer">
                  Cheat Codes
                </div>
              </Link>
              <Link href="/maps">
                <div className="inline-flex items-center gap-2 border border-border bg-card/60 backdrop-blur px-5 py-2.5 rounded-md text-sm font-semibold hover:border-primary/40 transition-colors cursor-pointer">
                  GTA Maps
                </div>
              </Link>
              <Link href="/games">
                <div className="inline-flex items-center gap-2 border border-border bg-card/60 backdrop-blur px-5 py-2.5 rounded-md text-sm font-semibold hover:border-primary/40 transition-colors cursor-pointer">
                  All GTA Games
                </div>
              </Link>
            </div>

            {/* SEO Stats */}
            <div className="flex flex-wrap gap-5 mt-2">
              {[
                { value: "12", label: "GTA Games Covered" },
                { value: "89+", label: "Cheat Codes" },
                { value: "41", label: "Mission Guides" },
                { value: "30+", label: "Vehicles Ranked" },
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

        {/* Quick Nav — 6 sections */}
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {[
            { href: "/news", icon: Newspaper, label: "GTA 6 News", sub: "Trailers & leaks", color: "text-pink-400" },
            { href: "/guides", icon: BookOpen, label: "Guides", sub: "Money & missions", color: "text-cyan-400" },
            { href: "/cheats", icon: Gamepad2, label: "Cheats", sub: "All games & platforms", color: "text-violet-400" },
            { href: "/maps", icon: Map, label: "Maps", sub: "GTA 1 to GTA 5", color: "text-amber-400" },
            { href: "/vehicles", icon: Car, label: "Vehicles", sub: "Stats & locations", color: "text-emerald-400" },
            { href: "/gear", icon: ShoppingBag, label: "GTA Gear", sub: "Gaming accessories", color: "text-primary" },
          ].map((item) => (
            <Link key={item.href} href={item.href}>
              <div className={`group border ${item.href === "/gear" ? "border-primary/30 bg-primary/5" : "border-border bg-card"} rounded-md p-4 hover:border-primary/30 hover-lift transition-all cursor-pointer h-full`}>
                <item.icon className={`w-5 h-5 mb-2 ${item.color}`} />
                <div className="font-display font-semibold text-xs group-hover:text-primary transition-colors">{item.label}</div>
                <div className="text-[10px] text-muted-foreground mt-0.5">{item.sub}</div>
              </div>
            </Link>
          ))}
        </section>

        {/* GTA 6 Spotlight */}
        <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/5 border border-primary/30 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start justify-between gap-6">
            <div className="max-w-xl">
              <div className="text-xs font-mono text-primary uppercase tracking-widest mb-2">🔥 Most Anticipated Release of 2025</div>
              <h2 className="font-headline text-4xl md:text-5xl mb-3">GTA 6 — FALL 2025</h2>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                Rockstar's most ambitious open-world game returns to Vice City (Miami). Play as both Lucia and Jason
                across a reimagined 1980s-inspired Miami and the Leonida Everglades. GTA Online 6 launches day one.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Setting", value: "Vice City (Miami)" },
                  { label: "Platform", value: "PS5 / Xbox Series X|S" },
                  { label: "Protagonists", value: "Lucia & Jason" },
                  { label: "Price", value: "$79.99 / $99.99 Premium" },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-background/50 rounded-lg p-3">
                    <div className="text-xs text-muted-foreground">{label}</div>
                    <div className="text-sm font-semibold text-foreground">{value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-auto shrink-0">
              <Link href="/news">
                <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-primary/90 transition-all cursor-pointer w-full justify-center">
                  All GTA 6 News <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
              <Link href="/games">
                <div className="inline-flex items-center gap-2 border border-border bg-card/60 px-5 py-2.5 rounded-md text-sm font-semibold hover:border-primary/40 transition-colors cursor-pointer w-full justify-center">
                  Full Franchise History
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* GTA 6 Hot News */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-headline text-3xl md:text-4xl">LATEST GTA NEWS</h2>
            <Link href="/news">
              <div className="text-sm text-primary hover:text-primary/80 flex items-center gap-1 cursor-pointer">All news <ChevronRight className="w-4 h-4" /></div>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {hotNews.map((item) => (
              <Link key={item.id} href="/news">
                <div className="group border border-border bg-card rounded-md overflow-hidden hover:border-primary/30 hover-lift transition-all cursor-pointer h-full flex flex-col">
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border ${tagStyles[item.tag]}`}>{tagLabels[item.tag]}</span>
                      {item.hot && <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border badge-hot flex items-center gap-1"><Flame className="w-2.5 h-2.5" /> HOT</span>}
                      {item.readTime && <span className="text-[10px] text-muted-foreground ml-auto">{item.readTime} read</span>}
                    </div>
                    <h3 className="font-display font-semibold text-sm leading-snug group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed flex-1">{item.summary}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground"><Clock className="w-3 h-3" />{item.date} · {item.source}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Trending Now — Most Read */}
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
              <Link key={item.id} href="/news">
                <div className="group flex items-start gap-4 p-4 border border-border bg-card rounded-md hover:border-primary/30 hover-lift transition-all cursor-pointer">
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
                </div>
              </Link>
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
                <div className="group border border-border bg-card rounded-md p-5 hover:border-primary/30 hover-lift transition-all cursor-pointer h-full flex flex-col gap-3">
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

        {/* Cheat Codes Promo */}
        <section className="grid md:grid-cols-2 gap-4">
          <Link href="/cheats">
            <div className="group border border-border bg-card rounded-xl p-6 hover:border-primary/30 hover-lift transition-all cursor-pointer h-full">
              <Gamepad2 className="w-8 h-8 text-violet-400 mb-3" />
              <h2 className="font-headline text-3xl mb-2">CHEAT CODES</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Every cheat code for GTA V, San Andreas, Vice City, GTA IV, and GTA III — for PlayStation, Xbox, PC, and phone numbers.
              </p>
              <div className="flex flex-wrap gap-2">
                {["GTA V (26 cheats)", "San Andreas (21 cheats)", "Vice City (18 cheats)", "GTA IV (12 cheats)", "GTA III (12 cheats)"].map((t) => (
                  <span key={t} className="text-[10px] font-mono bg-secondary text-muted-foreground rounded px-2 py-1">{t}</span>
                ))}
              </div>
              <div className="flex items-center gap-1 text-sm text-primary mt-4 group-hover:gap-2 transition-all">View all cheat codes <ArrowRight className="w-4 h-4" /></div>
            </div>
          </Link>
          <Link href="/maps">
            <div className="group border border-border bg-card rounded-xl p-6 hover:border-primary/30 hover-lift transition-all cursor-pointer h-full">
              <Map className="w-8 h-8 text-amber-400 mb-3" />
              <h2 className="font-headline text-3xl mb-2">GTA MAPS</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Complete map breakdowns for every GTA game — key districts, hidden secrets, easter eggs, best spots, and real-world inspirations.
              </p>
              <div className="flex flex-wrap gap-2">
                {["GTA 1", "GTA 2", "GTA III", "Vice City", "San Andreas", "GTA IV", "GTA V"].map((t) => (
                  <span key={t} className="text-[10px] font-mono bg-secondary text-muted-foreground rounded px-2 py-1">{t}</span>
                ))}
              </div>
              <div className="flex items-center gap-1 text-sm text-primary mt-4 group-hover:gap-2 transition-all">Explore all maps <ArrowRight className="w-4 h-4" /></div>
            </div>
          </Link>
        </section>

        {/* Franchise Grid */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-headline text-3xl md:text-4xl">THE FRANCHISE</h2>
            <Link href="/games"><div className="text-sm text-primary hover:text-primary/80 flex items-center gap-1 cursor-pointer">All games <ChevronRight className="w-4 h-4" /></div></Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {GTA_GAMES.map((game) => (
              <Link key={game.id} href={`/games`}>
                <div className="group border border-border bg-card rounded-md p-4 hover-lift transition-all cursor-pointer text-center hover:border-white/20">
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

        {/* Latest News List */}
        <section>
          <h2 className="font-headline text-3xl md:text-4xl mb-6">LATEST UPDATES</h2>
          <div className="border border-border rounded-md bg-card overflow-hidden">
            <div className="divide-y divide-border">
              {latestNews.map((item) => (
                <Link key={item.id} href="/news">
                  <div className="group flex items-start gap-4 p-4 hover:bg-secondary/40 transition-colors cursor-pointer">
                    <span className={`mt-0.5 shrink-0 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border ${tagStyles[item.tag]}`}>{tagLabels[item.tag]}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm group-hover:text-primary transition-colors">{item.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{item.summary}</div>
                    </div>
                    <div className="shrink-0 text-xs text-muted-foreground hidden sm:block whitespace-nowrap">{item.date}</div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* GTA 6 FAQ */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-6 h-6 text-primary" />
            <h2 className="font-headline text-3xl md:text-4xl">GTA 6 FAQ</h2>
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
              <strong className="text-foreground">Have more questions about GTA 6?</strong> Browse our{" "}
              <Link href="/news"><span className="text-primary hover:underline cursor-pointer">GTA 6 News Hub</span></Link>{" "}
              for the latest confirmed details, or check our{" "}
              <Link href="/guides"><span className="text-primary hover:underline cursor-pointer">Guide Library</span></Link>{" "}
              for everything we know about gameplay.
            </p>
          </div>
        </section>

        {/* SEO Content Block */}
        <section className="bg-card border border-border rounded-xl p-8">
          <h2 className="font-headline text-3xl mb-4">About GTA6Guide.in — Your GTA Resource</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Complete Cheat Code Database</h3>
              <p>Every GTA cheat code across all platforms — PlayStation button combos, Xbox controller codes, PC keyboard cheats, and GTA IV/V phone numbers. Covering GTA V, San Andreas, Vice City, GTA IV, and GTA III. Platform-specific entry instructions included.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Mission Guides & Walkthroughs</h3>
              <p>Step-by-step mission guides, money-making strategies, vehicle deep-dives, and 100% completion checklists. From GTA III's taxi sub-missions to GTA Online's Cayo Perico Heist — every game covered in depth with 41+ guides.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">GTA 6 News Hub</h3>
              <p>Up-to-date GTA 6 coverage — confirmed details from Rockstar, official trailer breakdowns, verified leaks, and community analysis. Fall 2025 release for PS5 and Xbox Series X|S. Pricing, characters, map details, and gameplay features all covered.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
