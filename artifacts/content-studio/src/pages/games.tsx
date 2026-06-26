import { Link } from "wouter";
import { Star, Gamepad2, ChevronRight } from "lucide-react";
import { GTA_GAMES, TIMELINE_EVENTS } from "@/data/games";

export function Games() {
  const released = GTA_GAMES.filter((g) => g.status === "released");
  const upcoming = GTA_GAMES.filter((g) => g.status === "pre-release");

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-16">
      {/* Header */}
      <div>
        <h1 className="font-headline text-5xl md:text-6xl">ALL GTA GAMES</h1>
        <p className="text-muted-foreground mt-2">Every mainline Grand Theft Auto release from 1997 to 2025 — history, stats, and content for each.</p>
      </div>

      {/* Timeline */}
      <section>
        <h2 className="font-headline text-3xl md:text-4xl mb-6">FRANCHISE TIMELINE</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-3 pl-12">
            {TIMELINE_EVENTS.map((ev, i) => (
              <div key={i} className="relative flex items-start gap-4">
                <div className="absolute -left-[30px] w-3.5 h-3.5 rounded-full border-2 border-primary bg-background mt-0.5" />
                <div className="flex-1 border border-border bg-card rounded-md px-4 py-3 hover:border-primary/25 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="font-headline text-2xl text-primary">{ev.year}</span>
                    <span className="text-sm text-muted-foreground">{ev.event}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GTA 6 Spotlight */}
      {upcoming.map((game) => (
        <section key={game.id}>
          <h2 className="font-headline text-3xl md:text-4xl mb-4">COMING SOON</h2>
          <div className="relative border border-primary/30 bg-card rounded-md overflow-hidden p-6 md:p-8" style={{ boxShadow: `0 0 40px ${game.color}18` }}>
            <div className="absolute inset-0 grid-bg opacity-50" />
            <div className="absolute inset-0 hero-gradient" />
            <div className="relative z-10 flex flex-col md:flex-row gap-6">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border badge-hot">⚡ PRE-RELEASE</span>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">{game.year}</span>
                </div>
                <h3 className="font-headline text-4xl md:text-6xl" style={{ color: game.color }}>{game.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{game.description}</p>
                <div className="flex flex-wrap gap-2">
                  {game.platforms.map((p) => (
                    <span key={p} className="text-xs px-2 py-1 bg-secondary border border-border rounded text-muted-foreground">{p}</span>
                  ))}
                </div>
              </div>
              <div className="md:w-64 shrink-0 space-y-3">
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">What We Know</div>
                {game.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {h}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* All Released Games */}
      <section>
        <h2 className="font-headline text-3xl md:text-4xl mb-6">ALL RELEASES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {released.map((game) => (
            <div
              key={game.id}
              className="group border border-border bg-card rounded-md p-5 hover:border-white/15 hover-lift transition-all"
              style={{ "--game-color": game.color } as React.CSSProperties}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-md flex items-center justify-center shrink-0 font-headline text-lg font-bold"
                  style={{ backgroundColor: game.color + "18", color: game.color, border: `1px solid ${game.color}35` }}
                >
                  {game.shortTitle.replace("GTA ", "").replace("Vice City", "VC").replace("San Andreas", "SA").replace("Liberty City Stories", "LCS").replace("Vice City Stories", "VCS").replace("Lost & Damned", "TLAD").replace("Ballad of Gay Tony", "TBOGT").slice(0, 4)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-display font-bold text-base group-hover:text-primary transition-colors">{game.shortTitle}</h3>
                    <span className="text-[10px] font-mono text-muted-foreground">{game.year}</span>
                    {game.metacritic && (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                        MC {game.metacritic}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    <span className="text-foreground font-medium">{game.protagonist}</span>
                    {" · "}{game.setting}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{game.description}</p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-border flex flex-wrap gap-1.5">
                {game.platforms.map((p) => (
                  <span key={p} className="text-[10px] px-1.5 py-0.5 bg-secondary border border-border rounded text-muted-foreground">{p}</span>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2">
                {game.highlights.slice(0, 2).map((h, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                    <Star className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{h}</span>
                  </div>
                ))}
              </div>

              {game.hasCheats && game.cheatSlug && (
                <Link href={`/cheats`}>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 cursor-pointer">
                    <Gamepad2 className="w-3.5 h-3.5" /> View cheat codes
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
