import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight, Clock, AlertCircle } from "lucide-react";
import { setPageMeta } from "@/lib/seo";

const LAST_UPDATED = "2026-06-26";

export function GTA6OnlinePage() {
  useEffect(() => {
    setPageMeta({
      title: "GTA 6 Online — When Is It Available? Not at Launch, Here's What We Know",
      description: "GTA Online 6 will NOT be available when GTA 6 launches November 19, 2026. It arrives as a free post-launch update. Here's everything Rockstar has confirmed about GTA 6 Online.",
      path: "/gta6/online",
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
      <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
        <Link href="/"><span className="hover:text-primary cursor-pointer">Home</span></Link>
        <ChevronRight className="w-3 h-3" />
        <ChevronRight className="w-3 h-3" />
        GTA 6 Online
      </div>

      <div>
        <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest border border-amber-500/30 bg-amber-500/5 px-3 py-1.5 rounded-full mb-4">
          <AlertCircle className="w-3 h-3" /> NOT AT LAUNCH
        </div>
        <h1 className="font-headline text-5xl md:text-6xl mb-3">GTA 6 ONLINE</h1>
        <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono mb-4">
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Last updated: {LAST_UPDATED}</span>
          <span>·</span><span>GTA6Guide.in</span>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          <strong className="text-foreground">GTA Online 6 will not be available on November 19, 2026.</strong> GTA 6 launches with story mode only. GTA Online 6 arrives as a <strong className="text-foreground">free post-launch update</strong> for all GTA 6 owners — no separate purchase required. Here's everything confirmed.
        </p>
      </div>

      {/* Key facts */}
      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { label: "GTA 6 Launch", value: "Nov 19, 2026", note: "Story mode only", color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5" },
          { label: "GTA Online 6 Launch", value: "TBC — 2027 est.", note: "Free update for all owners", color: "text-amber-400 border-amber-500/30 bg-amber-500/5" },
          { label: "Cost of Online 6", value: "FREE", note: "For all GTA 6 owners", color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5" },
        ].map(({ label, value, note, color }) => (
          <div key={label} className={`border rounded-xl p-4 ${color}`}>
            <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">{label}</div>
            <div className="font-headline text-2xl text-foreground">{value}</div>
            <div className="text-xs text-muted-foreground mt-1">{note}</div>
          </div>
        ))}
      </div>

      <div className="prose prose-sm prose-invert max-w-none space-y-8 text-sm text-muted-foreground leading-relaxed">
        <div>
          <h2 className="font-headline text-2xl text-foreground mb-3">Why Isn't GTA Online 6 Available at Launch?</h2>
          <p>Rockstar confirmed in a June 2026 statement that GTA 6 will launch as single-player only: <em>"We want the story of Lucia and Jason to be the complete focus at launch. GTA Online 6 will be the biggest online open-world experience we've ever built — and it deserves its own moment."</em></p>
          <p className="mt-3">This mirrors the GTA V approach: GTA V launched on September 17, 2013 (story mode only), and GTA Online followed 2 weeks later on October 1, 2013. However, GTA Online 6 is expected to be a larger gap — early 2027 is the commonly cited window based on reporting, though Rockstar has not confirmed a date.</p>
        </div>

        <div>
          <h2 className="font-headline text-2xl text-foreground mb-3">What Will GTA Online 6 Include?</h2>
          <p>Rockstar has confirmed GTA Online 6 is being <strong className="text-foreground">built from scratch</strong> — not a port or remaster of GTA Online V. Key differences from the current GTA Online:</p>
          <div className="space-y-2 mt-3">
            {[
              { title: "Custom protagonist", desc: "GTA Online 6 will have a custom character system — you won't play as Lucia or Jason. Expect a new character creator built for the Leonida world." },
              { title: "New GTA+ integration", desc: "The GTA+ subscription service continues into GTA Online 6, likely with revamped monthly benefits, exclusive vehicles, and member bonuses." },
              { title: "Leonida open world", desc: "GTA Online 6 will use the full GTA 6 Leonida map — Vice City, the Everglades, offshore Keys, and all other regions confirmed in trailers." },
              { title: "Post-GTA Online V lessons", desc: "Rockstar spent a decade evolving GTA Online V. GTA Online 6 is expected to launch with a more balanced economy and fewer pay-to-win elements from day one." },
            ].map(({ title, desc }) => (
              <div key={title} className="border border-border bg-card rounded-lg p-4">
                <div className="font-display font-semibold text-sm text-foreground mb-1">{title}</div>
                <div className="text-sm text-muted-foreground">{desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-headline text-2xl text-foreground mb-3">Will GTA 5 Online Continue After GTA 6 Launches?</h2>
          <p>Yes — GTA Online (GTA V's multiplayer) will continue to run after GTA 6 launches. Take-Two has confirmed there are no plans to shut down GTA Online alongside GTA 6's release. GTA Online still generates hundreds of millions of dollars annually and has an active player base. Rockstar will support both simultaneously, at least initially.</p>
          <p className="mt-3">Over time, as GTA Online 6 matures and releases content, it's expected that GTA V Online will see reduced updates. But a forced shutdown is not planned for the foreseeable future.</p>
        </div>

        <div>
          <h2 className="font-headline text-2xl text-foreground mb-3">GTA Online 6 Estimated Timeline</h2>
          <div className="space-y-3">
            {[
              { date: "November 19, 2026", event: "GTA 6 story mode launches (PS5, Xbox Series X|S). GTA Online 6 not included." },
              { date: "Early 2027 (est.)", event: "GTA Online 6 expected to launch as free update for all GTA 6 owners. No official date confirmed." },
              { date: "2027–2028 (est.)", event: "GTA 6 PC release expected. GTA Online 6 PC version would likely ship at the same time." },
              { date: "Ongoing", event: "Regular GTA Online 6 content updates expected — missions, vehicles, events, and expansions." },
            ].map(({ date, event }) => (
              <div key={date} className="flex gap-4 items-start">
                <div className="shrink-0 text-[10px] font-mono text-primary border border-primary/30 rounded px-2 py-1 whitespace-nowrap">{date}</div>
                <div className="text-sm text-muted-foreground">{event}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-headline text-2xl text-foreground mb-3">GTA Online 6 vs GTA Online V — Key Differences</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-card border-b border-border">
                  {["Feature", "GTA Online V (Current)", "GTA Online 6 (Upcoming)"].map(h => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-mono uppercase tracking-widest text-muted-foreground">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Base game required", "GTA V ($0–$30)", "GTA 6 ($79.99–$99.99)"],
                  ["Online cost", "Free (with game)", "Free (post-launch update)"],
                  ["Protagonist", "Custom character", "Custom character (new)"],
                  ["Setting", "Los Santos / Blaine County", "Vice City / Leonida State"],
                  ["Built on", "2013 engine (updated)", "Brand new engine"],
                  ["GTA+ subscription", "Yes", "Yes (evolved)"],
                  ["Launch date", "October 2013", "Early 2027 (est.)"],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border/50 last:border-0">
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-2.5 text-sm text-muted-foreground">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="font-headline text-3xl mb-4">GTA 6 Online FAQ</h2>
        <div className="space-y-2">
          {[
            { q: "When does GTA Online 6 come out?", a: "GTA Online 6 does not have a confirmed release date. It will launch as a free post-launch update for all GTA 6 owners some time after the November 19, 2026 story mode launch. Early 2027 is the commonly cited estimate based on reporting, but Rockstar has not announced a date." },
            { q: "Is GTA Online 6 free?", a: "Yes — GTA Online 6 will be a free update for all GTA 6 owners. You only need to purchase GTA 6 (Standard $79.99 or Ultimate $99.99) to access GTA Online 6 when it launches." },
            { q: "Will GTA 5 Online shut down when GTA 6 launches?", a: "No. Take-Two has confirmed GTA Online (GTA V's version) will continue to operate after GTA 6 launches. Both will run simultaneously. Over time GTA V Online may receive fewer updates as resources shift to GTA Online 6." },
            { q: "Is GTA Online 6 a port of GTA V Online?", a: "No — Rockstar confirmed GTA Online 6 is being built from scratch, not ported from GTA V. It will feature a new character creator, new economy systems, and the full Leonida/Vice City map, designed from the ground up for GTA 6." },
            { q: "Can you play GTA 6 story mode offline?", a: "Rockstar has not confirmed offline/online requirements for the story mode. Based on GTA V's precedent, story mode may have an always-online requirement. Official confirmation is expected closer to launch." },
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

      <div className="border border-border bg-card rounded-xl p-5">
        <h3 className="font-display font-semibold text-sm mb-3">Related GTA 6 Pages</h3>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            { href: "/gta6/release-date", label: "GTA 6 Release Date — November 19, 2026" },
            { href: "/gta6/editions", label: "GTA 6 Editions — Standard vs Ultimate" },
            { href: "/gta6/price", label: "GTA 6 Price — $79.99 vs $99.99" },
            { href: "/gta6/platforms", label: "GTA 6 Platforms — PS5, Xbox, PC" },
          ].map(({ href, label }) => (
            <Link key={href} href={href}>
              <div className="text-sm text-primary hover:text-primary/80 flex items-center gap-2 cursor-pointer py-1">
                <ChevronRight className="w-3.5 h-3.5 shrink-0" /> {label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
