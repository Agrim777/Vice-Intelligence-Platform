import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight, Clock, Play } from "lucide-react";
import { setPageMeta } from "@/lib/seo";

const LAST_UPDATED = "2025-06-26";

const TRAILER1_DETAILS = [
  { time: "0:00–0:20", detail: "Lucia's prison interview — confirmed she's serving time at Leonida State Penitentiary. The opening mirrors a documentary-style tone never seen in GTA before." },
  { time: "0:21–0:45", detail: "Vice City Everglades montage — first look at the swamp biome, airboats, and rural Leonida. Wildlife including birds and alligators visible." },
  { time: "0:46–1:10", detail: "Ocean Beach strip — Art Deco pastel hotels, neon signs, beachfront. Confirmed direct inspiration from Miami's South Beach." },
  { time: "1:11–1:40", detail: "Jason introduced — the male protagonist. Both characters shown committing crimes together, establishing the Bonnie & Clyde dynamic." },
  { time: "1:41–2:00", detail: "Vice City Downtown skyline — modern skyscrapers, financial district. Civilians with in-game social media (Lifeinvader) phones visible." },
  { time: "2:01–2:24", detail: "Fast montage of Vice City life — diverse NPC activities, bars, pools, car chases, police pursuits, explosions." },
  { time: "2:25–2:44", detail: "Lucia and Jason close-up — confirms the player switches between both characters. 'GRAND THEFT AUTO VI' title reveal." },
];

const TRAILER2_DETAILS = [
  { time: "0:00–0:30", detail: "Port Leonida — massive shipping containers, working cranes. Industrial setting not seen in Trailer 1. Confirms a functioning port economy." },
  { time: "0:31–1:00", detail: "Hurricane sequence begins — shutters go up on storefronts, residents evacuate. Sky turns green-yellow. Palm trees at extreme angles." },
  { time: "1:01–1:30", detail: "New vehicle types revealed — coast guard helicopter, prototype stealth boat, military vehicles. Suggests military faction involvement in story." },
  { time: "1:31–1:50", detail: "High-limit casino interior — slot machines, card tables, VIP gambling area. Confirms casino mechanic in the game." },
  { time: "1:51–2:20", detail: "Long car chase sequence with female federal agent antagonist. Multiple police vehicle types, helicopters, roadblocks." },
  { time: "2:21–2:45", detail: "Offshore keys aerial shot — tropical island chain, luxury marinas. Confirms map extends south beyond Vice City proper." },
  { time: "2:46–end", detail: "Release window 'Fall 2025' confirmed with gameplay montage. PS5 / Xbox Series X|S logos." },
];

export function GTA6TrailerPage() {
  useEffect(() => {
    setPageMeta({
      title: "GTA 6 Trailer Breakdown — Every Detail from Trailer 1 & 2",
      description: "Frame-by-frame breakdown of GTA 6 Trailer 1 and Trailer 2. Every confirmed detail, easter egg, location, vehicle, and character revealed in the official Rockstar trailers.",
      path: "/gta6/trailer",
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
      <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
        <Link href="/"><span className="hover:text-primary cursor-pointer">Home</span></Link>
        <ChevronRight className="w-3 h-3" />
        <span>GTA 6 Trailer Breakdown</span>
      </div>

      <div>
        <div className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest border border-primary/30 bg-primary/5 px-3 py-1.5 rounded-full mb-4">
          <Play className="w-3 h-3" /> Official Trailers Analysis
        </div>
        <h1 className="font-headline text-5xl md:text-6xl mb-3">GTA 6 TRAILER BREAKDOWN</h1>
        <div className="text-xs text-muted-foreground font-mono mb-4 flex items-center gap-2">
          <Clock className="w-3 h-3" /> Last updated: {LAST_UPDATED}
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Frame-by-frame analysis of both GTA 6 official trailers. Every confirmed location, character, vehicle, mechanic, and hidden detail revealed in Trailer 1 (December 2023) and Trailer 2 (May 2025).
        </p>
      </div>

      {/* Trailer links */}
      <div className="grid sm:grid-cols-2 gap-4">
        <a href="https://www.youtube.com/watch?v=QdBZExpgErs" target="_blank" rel="noopener noreferrer" className="group border border-border bg-card rounded-xl p-5 hover:border-primary/30 transition-all">
          <div className="flex items-center gap-2 mb-2">
            <Play className="w-4 h-4 text-primary" />
            <span className="font-headline text-lg">GTA 6 Trailer 1</span>
          </div>
          <div className="text-xs text-muted-foreground">December 5, 2023 · 2:44 · 200M+ views</div>
          <div className="text-xs text-primary mt-2 group-hover:underline">Watch on YouTube →</div>
        </a>
        <a href="https://www.youtube.com/watch?v=_4VSuAoBuL4" target="_blank" rel="noopener noreferrer" className="group border border-primary/30 bg-primary/5 rounded-xl p-5 hover:border-primary/50 transition-all">
          <div className="flex items-center gap-2 mb-2">
            <Play className="w-4 h-4 text-primary" />
            <span className="font-headline text-lg">GTA 6 Trailer 2</span>
          </div>
          <div className="text-xs text-muted-foreground">May 6, 2025 · 3:00 · 150M+ views</div>
          <div className="text-xs text-primary mt-2 group-hover:underline">Watch on YouTube →</div>
        </a>
      </div>

      {/* Trailer 1 */}
      <div>
        <h2 className="font-headline text-3xl mb-4">GTA 6 Trailer 1 — Full Breakdown</h2>
        <p className="text-sm text-muted-foreground mb-5">Released December 5, 2023. Rockstar's first official reveal of GTA 6 — introduced Lucia, Vice City, Jason, and the dual-protagonist system.</p>
        <div className="space-y-3">
          {TRAILER1_DETAILS.map(({ time, detail }) => (
            <div key={time} className="flex gap-4 border border-border bg-card rounded-lg p-3">
              <div className="shrink-0 font-mono text-[10px] text-primary border border-primary/30 rounded px-2 py-1 self-start">{time}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trailer 2 */}
      <div>
        <h2 className="font-headline text-3xl mb-4">GTA 6 Trailer 2 — Full Breakdown</h2>
        <p className="text-sm text-muted-foreground mb-5">Released May 6, 2025. Confirmed Fall 2025 release window and revealed new locations, mechanics, and the hurricane system.</p>
        <div className="space-y-3">
          {TRAILER2_DETAILS.map(({ time, detail }) => (
            <div key={time} className="flex gap-4 border border-border bg-card rounded-lg p-3">
              <div className="shrink-0 font-mono text-[10px] text-primary border border-primary/30 rounded px-2 py-1 self-start">{time}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trailer Music */}
      <div className="border border-border bg-card rounded-xl p-5">
        <h2 className="font-headline text-2xl mb-3">GTA 6 Trailer Songs</h2>
        <div className="space-y-3">
          <div className="flex gap-3 text-sm">
            <div className="shrink-0 font-mono text-[10px] text-primary border border-primary/30 rounded px-2 py-1 self-start">Trailer 1</div>
            <div>
              <div className="font-semibold text-foreground">Tom Petty — "Love Is a Long Road"</div>
              <div className="text-xs text-muted-foreground mt-0.5">1989 classic chosen by Rockstar to evoke the Americana road-trip feel of the Vice City setting.</div>
            </div>
          </div>
          <div className="flex gap-3 text-sm">
            <div className="shrink-0 font-mono text-[10px] text-primary border border-primary/30 rounded px-2 py-1 self-start">Trailer 2</div>
            <div>
              <div className="font-semibold text-foreground">Fever Ray — "What They Call Us"</div>
              <div className="text-xs text-muted-foreground mt-0.5">A more intense, modern track fitting the higher-stakes tone of the second trailer. Features during the chase and storm sequences.</div>
            </div>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-border">
          <Link href="/gta6/trailer-music"><div className="text-sm text-primary hover:text-primary/80 cursor-pointer">→ Full GTA 6 Trailer Music Guide</div></Link>
        </div>
      </div>

      <div className="border border-border bg-card rounded-xl p-5">
        <h3 className="font-display font-semibold text-sm mb-3">Related Pages</h3>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            { href: "/gta6/characters", label: "GTA 6 Characters — Lucia & Jason" },
            { href: "/gta6/map", label: "GTA 6 Map — All Confirmed Locations" },
            { href: "/gta6/gameplay", label: "GTA 6 Gameplay Features" },
            { href: "/gta6/trailer-music", label: "GTA 6 Trailer Music" },
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
        <h2 className="font-headline text-3xl mb-4">GTA 6 Trailer FAQ</h2>
        <div className="space-y-2">
          {[
            { q: "How many GTA 6 trailers are there?", a: "As of June 2025, Rockstar has released two official GTA 6 trailers. Trailer 1 dropped December 5, 2023 (over 200 million YouTube views) and introduced Lucia, Jason, and the Vice City setting. Trailer 2 released May 6, 2025 and confirmed the Fall 2025 release window, revealed new locations including Port Leonida and the hurricane weather system." },
            { q: "What song is in the GTA 6 Trailer?", a: "GTA 6 Trailer 1 uses 'Love Is a Long Road' by Tom Petty (1989). GTA 6 Trailer 2 features 'What They Call Us' by Fever Ray. Both songs were specifically cleared by Rockstar for the trailers." },
            { q: "What GTA 6 Trailer 2 easter eggs were found?", a: "Major finds from the GTA 6 Trailer 2 analysis include: the casino interior with slot machines and card tables, a prototype stealth boat on the ocean, a female federal agent antagonist in the car chase, offshore tropical islands visible from the air, and a hurricane system that appears to reshape the open world in real time." },
          ].map(({ q, a }, i) => (
            <details key={i} className="group border border-border bg-card rounded-md overflow-hidden">
              <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none hover:bg-secondary/30">
                <h3 className="font-display font-semibold text-sm">{q}</h3>
                <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-4 pb-4"><p className="text-sm text-muted-foreground leading-relaxed">{a}</p></div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
