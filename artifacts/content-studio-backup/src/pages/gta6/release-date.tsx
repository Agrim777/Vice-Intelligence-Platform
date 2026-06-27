import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight, Clock, AlertCircle } from "lucide-react";
import { setPageMeta } from "@/lib/seo";
import { Countdown } from "@/components/countdown";

const LAST_UPDATED = "2026-06-26";

export function GTA6ReleaseDatePage() {
  useEffect(() => {
    setPageMeta({
      title: "GTA 6 Release Date — November 19, 2026 Confirmed | All Platform Dates",
      description: "GTA 6 release date confirmed: November 19, 2026 for PS5 and Xbox Series X|S. Pre-orders open June 25, 2026. No PC date yet. Full timeline of delays, pre-order bonuses, and what's included.",
      path: "/gta6/release-date",
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
      <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
        <Link href="/"><span className="hover:text-primary cursor-pointer">Home</span></Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/news"><span className="hover:text-primary cursor-pointer">GTA 6 News</span></Link>
        <ChevronRight className="w-3 h-3" />
        GTA 6 Release Date
      </div>

      <div>
        <div className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest border border-primary/30 bg-primary/5 px-3 py-1.5 rounded-full mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block" />
          ✓ CONFIRMED — NOVEMBER 19, 2026
        </div>
        <h1 className="font-headline text-5xl md:text-6xl mb-3">GTA 6 RELEASE DATE</h1>
        <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono mb-4">
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Last updated: {LAST_UPDATED}</span>
          <span>·</span>
          <span>GTA6Guide.in</span>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          <strong className="text-foreground">GTA 6 releases November 19, 2026</strong> for PlayStation 5 and Xbox Series X|S.
          Pre-orders are live now. The game was delayed twice from the original Fall 2025 window. GTA Online 6 follows as a free post-launch update — story mode only on day one.
        </p>
      </div>

      {/* Countdown */}
      <Countdown />

      {/* Summary Cards */}
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { platform: "PlayStation 5", date: "November 19, 2026", status: "✓ CONFIRMED", color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5" },
          { platform: "Xbox Series X|S", date: "November 19, 2026", status: "✓ CONFIRMED", color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5" },
          { platform: "PC (Windows)", date: "2027+ (est.)", status: "CONFIRMED — DATE TBC", color: "text-amber-400 border-amber-500/30 bg-amber-500/5" },
          { platform: "PS4 / Xbox One", date: "Never", status: "NOT COMING", color: "text-red-400 border-red-500/30 bg-red-500/5" },
        ].map(({ platform, date, status, color }) => (
          <div key={platform} className={`border rounded-xl p-4 ${color}`}>
            <div className="text-[10px] font-mono uppercase tracking-widest mb-1">{status}</div>
            <div className="font-display font-bold text-lg text-foreground">{platform}</div>
            <div className="font-headline text-2xl mt-1">{date}</div>
          </div>
        ))}
      </div>

      {/* Delay history */}
      <div className="border border-amber-500/20 bg-amber-500/5 rounded-xl p-5">
        <div className="flex items-center gap-2 text-amber-400 mb-3">
          <AlertCircle className="w-4 h-4" />
          <span className="text-xs font-mono uppercase tracking-widest">Delay History</span>
        </div>
        <p className="text-sm text-muted-foreground">GTA 6 was delayed twice before reaching its confirmed November 19, 2026 date. Original window was Fall 2025.</p>
      </div>

      <div className="prose prose-sm prose-invert max-w-none space-y-6 text-sm text-muted-foreground leading-relaxed">
        <div>
          <h2 className="font-headline text-2xl text-foreground mb-3">GTA 6 Full Release Date Timeline</h2>
          <div className="space-y-3">
            {[
              { date: "December 2023", event: "GTA 6 Trailer 1 released — confirmed Vice City setting, dual protagonists Lucia and Jason. Original release window: 'Coming 2025'" },
              { date: "April 2025", event: "Rockstar narrows window to 'Fall 2025' — Trailer 2 released. Pre-orders not yet open." },
              { date: "September 2025", event: "FIRST DELAY — Rockstar announces Fall 2025 window missed, new target: May 2026." },
              { date: "March 2026", event: "SECOND DELAY — May 2026 missed. Rockstar confirms November 19, 2026 as the final launch date." },
              { date: "June 18, 2026", event: "November 19, 2026 officially confirmed as the launch date on all platforms." },
              { date: "June 25, 2026", event: "Pre-orders open. Vintage Vice City Pack revealed. Standard $79.99, Ultimate $99.99. 39M copies pre-ordered in 24 hours." },
              { date: "November 19, 2026", event: "GTA 6 launches worldwide on PS5 and Xbox Series X|S. Story mode only — GTA Online 6 follows as free update." },
              { date: "2027+ (est.)", event: "GTA 6 PC version expected (no date confirmed)." },
              { date: "Early 2027 (est.)", event: "GTA Online 6 expected as free post-launch update to all GTA 6 owners." },
            ].map(({ date, event }) => (
              <div key={date} className="flex gap-4 items-start">
                <div className="shrink-0 text-[10px] font-mono text-primary border border-primary/30 rounded px-2 py-1 whitespace-nowrap">{date}</div>
                <div className="text-sm">{event}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-headline text-2xl text-foreground mb-3">Why Was GTA 6 Delayed Twice?</h2>
          <p>Rockstar's GTA 6 has the longest development timeline in franchise history. Development began around 2018–2019, and the scope — a 2×+ map, dual protagonist system, hurricane weather, wildlife AI, and GTA Online 6 built from scratch — expanded significantly during development. Both delays were attributed to polishing the game to Rockstar's standard, rather than any specific technical issue.</p>
          <p className="mt-3">Take-Two CEO Strauss Zelnick stated in a 2026 investor call: "GTA 6 will be the most commercially successful entertainment product in history. The additional development time ensures we deliver a product that lives up to that potential."</p>
        </div>

        <div>
          <h2 className="font-headline text-2xl text-foreground mb-3">GTA 6 Pre-Order Details</h2>
          <p>Pre-orders opened June 25, 2026 — the same day Rockstar confirmed the final November 19, 2026 date. Within 24 hours, 39 million copies had been pre-ordered, generating over $3 billion in revenue — breaking every pre-order record in gaming history.</p>
          <p className="mt-3">All pre-orders (Standard and Ultimate) receive the <strong className="text-foreground">Vintage Vice City Pack</strong>: 5 throwback vehicles including the Infernus Classic, 1980s outfit sets for both Lucia and Jason, and a retro weapon skin pack.</p>
        </div>

        <div>
          <h2 className="font-headline text-2xl text-foreground mb-3">GTA 6 PC Release Date</h2>
          <p>Rockstar has confirmed the PC version of GTA 6 but without a release date. Based on Rockstar's history — GTA V PC came 19 months after console (2013→2015), RDR2 PC came 13 months after console (2018→2019) — expect GTA 6 on PC in 2027 or 2028. The PC version will feature full ray tracing, DLSS 4, AMD FSR 4, and ultra-wide monitor support.</p>
        </div>
      </div>

      <div className="border border-border bg-card rounded-xl p-5">
        <h3 className="font-display font-semibold text-sm mb-3">Related GTA 6 Pages</h3>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            { href: "/gta6/pre-order", label: "GTA 6 Pre-Order Guide — Vintage Vice City Pack & Where to Buy" },
            { href: "/gta6/editions", label: "GTA 6 Editions — Standard vs Ultimate Explained" },
            { href: "/gta6/price", label: "GTA 6 Price — $79.99 vs $99.99 Ultimate" },
            { href: "/gta6/platforms", label: "GTA 6 Platforms — PS5, Xbox & PC Info" },
            { href: "/gta6/characters", label: "GTA 6 Characters — Lucia & Jason" },
            { href: "/gta6/trailer", label: "GTA 6 Trailer 2 Full Breakdown" },
          ].map(({ href, label }) => (
            <Link key={href} href={href}>
              <div className="text-sm text-primary hover:text-primary/80 flex items-center gap-2 cursor-pointer py-1">
                <ChevronRight className="w-3.5 h-3.5 shrink-0" /> {label}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-headline text-3xl mb-4">GTA 6 Release Date FAQ</h2>
        <div className="space-y-2">
          {[
            { q: "When does GTA 6 come out?", a: "GTA 6 releases November 19, 2026 for PlayStation 5 and Xbox Series X|S. Pre-orders are live now. The game was delayed twice — first from Fall 2025, then from May 2026 — before the November 19, 2026 date was confirmed as final." },
            { q: "Is GTA 6 coming to PC?", a: "Yes — Rockstar confirmed the PC version of GTA 6, but without a release date. Based on Rockstar's track record (GTA V took 19 months after consoles, RDR2 took 13 months), expect GTA 6 on PC in 2027 or later. The PC version will have ray tracing, DLSS 4, and ultra-wide support." },
            { q: "Can you pre-order GTA 6?", a: "Yes — GTA 6 pre-orders are live now on PlayStation Store, Xbox Store, Amazon, GameStop, and major retailers. All pre-orders receive the Vintage Vice City Pack (5 throwback vehicles, 1980s outfits for Lucia and Jason, retro weapon skins). Standard Edition is $79.99, Ultimate Edition is $99.99." },
            { q: "Will GTA Online 6 be available on November 19?", a: "No — GTA Online 6 will NOT be available on November 19, 2026. Story mode is the only content at launch. GTA Online 6 will arrive as a free update for all GTA 6 owners at a later date — early 2027 has been reported but not confirmed by Rockstar." },
          ].map(({ q, a }, i) => (
            <details key={i} className="group border border-border bg-card rounded-md overflow-hidden">
              <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none hover:bg-secondary/30 transition-colors">
                <h3 className="font-display font-semibold text-sm">{q}</h3>
                <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-4 pb-4 pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
