import { Link } from "wouter";
import { ArrowRight, BookOpen, Gamepad2, Star, ChevronRight, Flame, Clock, Newspaper } from "lucide-react";
import { GTA_GAMES } from "@/data/games";
import { NEWS, TICKER_ITEMS } from "@/data/news";
import { GUIDES } from "@/data/guides";

const tagStyles: Record<string, string> = {
  confirmed: "badge-confirmed",
  official: "badge-confirmed",
  leaked: "badge-leaked",
  rumor: "badge-rumor",
};
const tagLabels: Record<string, string> = {
  confirmed: "CONFIRMED",
  official: "OFFICIAL",
  leaked: "LEAKED",
  rumor: "RUMOR",
};

export function Home() {
  const hotNews = NEWS.filter((n) => n.hot).slice(0, 3);
  const latestNews = NEWS.slice(0, 6);
  const featuredGuides = GUIDES.slice(0, 6);

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
              GTA 6 — Fall 2025
            </div>
            <h1 className="font-headline text-6xl md:text-8xl leading-none text-foreground">
              VICE<span className="gradient-text-vice"> INTELLIGENCE</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              The definitive destination for every Grand Theft Auto game — from GTA 1 to GTA 6. Guides, cheat codes, databases, news, and community.
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
              <Link href="/games">
                <div className="inline-flex items-center gap-2 border border-border bg-card/60 backdrop-blur px-5 py-2.5 rounded-md text-sm font-semibold hover:border-primary/40 transition-colors cursor-pointer">
                  All GTA Games
                </div>
              </Link>
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
        {/* Quick Nav */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { href: "/news", icon: Newspaper, label: "GTA 6 News", sub: "Trailers, leaks & updates", color: "text-pink-400" },
            { href: "/guides", icon: BookOpen, label: "Guides", sub: "Money, missions & secrets", color: "text-cyan-400" },
            { href: "/cheats", icon: Gamepad2, label: "Cheat Codes", sub: "All games, all platforms", color: "text-violet-400" },
            { href: "/games", icon: Star, label: "All GTA Games", sub: "Complete franchise hub", color: "text-amber-400" },
          ].map((item) => (
            <Link key={item.href} href={item.href}>
              <div className="group border border-border bg-card rounded-md p-5 hover:border-primary/30 hover-lift transition-all cursor-pointer h-full">
                <item.icon className={`w-6 h-6 mb-3 ${item.color}`} />
                <div className="font-display font-semibold text-sm group-hover:text-primary transition-colors">{item.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{item.sub}</div>
              </div>
            </Link>
          ))}
        </section>

        {/* GTA 6 News */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-headline text-3xl md:text-4xl">GTA 6 NEWS HUB</h2>
            <Link href="/news">
              <div className="text-sm text-primary hover:text-primary/80 flex items-center gap-1 cursor-pointer">All news <ChevronRight className="w-4 h-4" /></div>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {hotNews.map((item) => (
              <Link key={item.id} href="/news">
                <div className="group border border-border bg-card rounded-md overflow-hidden hover:border-primary/30 hover-lift transition-all cursor-pointer h-full flex flex-col">
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border ${tagStyles[item.tag]}`}>{tagLabels[item.tag]}</span>
                      {item.hot && <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border badge-hot flex items-center gap-1"><Flame className="w-2.5 h-2.5" /> HOT</span>}
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

        {/* Featured Guides */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-headline text-3xl md:text-4xl">TOP GUIDES</h2>
            <Link href="/guides">
              <div className="text-sm text-primary hover:text-primary/80 flex items-center gap-1 cursor-pointer">All guides <ChevronRight className="w-4 h-4" /></div>
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
                    <div className="shrink-0 text-xs text-muted-foreground hidden sm:block">{item.date}</div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
