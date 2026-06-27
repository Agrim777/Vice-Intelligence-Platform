import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight, Clock } from "lucide-react";
import { setPageMeta } from "@/lib/seo";

const LAST_UPDATED = "2025-06-26";

export function GTA6GameplayPage() {
  useEffect(() => {
    setPageMeta({
      title: "GTA 6 Gameplay Features — Every Confirmed Mechanic & System",
      description: "All confirmed GTA 6 gameplay features: dual protagonists, hurricane weather, wildlife, prone cover, weapon customization, property ownership, and GTA Online 6 details.",
      path: "/gta6/gameplay",
    });
  }, []);

  const features = [
    { category: "Protagonists", items: ["Dual playable protagonists — Lucia and Jason", "Switch between characters at any point in free roam", "Each protagonist has unique skill trees and story perspectives", "First female lead (Lucia) in mainline GTA history"] },
    { category: "Combat System", items: ["Prone position added — lie flat for cover and stealth", "Modular weapon customization in the field (grips, scopes, suppressors)", "New realistic reload animations — magazine state reflected visually", "Improved soft-cover system with contextual takedowns"] },
    { category: "Open World", items: ["Dynamic hurricane weather system — storms reshape the open world", "Living wildlife ecosystem (alligators, birds, fish confirmed)", "NPC daily routines and social dynamics", "Real-time economy — stores open/close, nightlife activates", "Destructible environments in storm sequences"] },
    { category: "Economy & Progression", items: ["Property purchasing and real estate investment", "Legitimate and criminal business ownership overlap", "Stock market returning (expanded from GTA V)", "In-game Lifeinvader social media feed showing NPC activity", "Dynamic supply/demand economy for criminal goods"] },
    { category: "GTA Online 6", items: ["Built from the ground up — not a port of GTA V Online", "Launches day one with the base game", "Custom protagonist separate from Lucia and Jason", "Dynamic heists that respond to how previous heists were completed", "GTA+ cosmetic subscription (no pay-to-win confirmed)"] },
    { category: "Exploration", items: ["Swimming and underwater exploration expanded", "Airboat navigation through Everglades canal system", "Helicopter and aircraft with more realistic handling", "Boat physics overhauled for coastal exploration"] },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
      <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
        <Link href="/"><span className="hover:text-primary cursor-pointer">Home</span></Link>
        <ChevronRight className="w-3 h-3" />
        <span>GTA 6 Gameplay Features</span>
      </div>

      <div>
        <div className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest border border-primary/30 bg-primary/5 px-3 py-1.5 rounded-full mb-4">
          ✓ CONFIRMED FEATURES
        </div>
        <h1 className="font-headline text-5xl md:text-6xl mb-3">GTA 6 GAMEPLAY FEATURES</h1>
        <div className="text-xs text-muted-foreground font-mono mb-4 flex items-center gap-2">
          <Clock className="w-3 h-3" /> Last updated: {LAST_UPDATED}
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Every confirmed GTA 6 gameplay mechanic — from the prone combat system to the dynamic hurricane weather, wildlife ecosystem, and GTA Online 6 details. Sourced exclusively from official trailers and Rockstar statements.
        </p>
      </div>

      <div className="space-y-5">
        {features.map(({ category, items }) => (
          <div key={category} className="border border-border bg-card rounded-xl p-5">
            <h2 className="font-headline text-xl text-foreground mb-3">{category}</h2>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary shrink-0 mt-0.5">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="space-y-5 text-sm text-muted-foreground leading-relaxed">
        <div>
          <h2 className="font-headline text-2xl text-foreground mb-3">GTA 6 vs GTA 5 — What's New?</h2>
          <p>GTA 6 represents the biggest generational leap in the franchise since GTA III moved the series to 3D in 2001. The dual-protagonist system, dynamic weather events, and AI-driven NPC social systems are all firsts for GTA. The prone combat system brings GTA closer to military shooters, while modular field weapon customization adds tactical depth previously absent from the franchise.</p>
          <p className="mt-3">The most significant departure from GTA V is the economy simulation — businesses in GTA 6 appear to have legitimate and criminal revenue streams that interact, suggesting a more complex money management meta-game than GTA V's property system.</p>
        </div>

        <div>
          <h2 className="font-headline text-2xl text-foreground mb-3">GTA 6 Hurricane System Explained</h2>
          <p>Trailer 2 confirmed a full hurricane weather event system. In the footage, store shutters are boarded up, residents evacuate coastal areas, palm trees bend to extreme angles, and the sky shifts from blue to a sickly green-yellow. Roads flood, visibility drops to near-zero, and flying debris becomes a hazard. This appears to be both a story event and a recurring dynamic weather system that changes the open world in real-time.</p>
        </div>
      </div>

      <div className="border border-border bg-card rounded-xl p-5">
        <h3 className="font-display font-semibold text-sm mb-3">Related Pages</h3>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            { href: "/gta6/trailer", label: "GTA 6 Trailer 2 Breakdown" },
            { href: "/gta6/characters", label: "GTA 6 Characters" },
            { href: "/gta6/map", label: "GTA 6 Map — Leonida & Vice City" },
            { href: "/guides", label: "GTA Mission Guides" },
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
        <h2 className="font-headline text-3xl mb-4">GTA 6 Gameplay FAQ</h2>
        <div className="space-y-2">
          {[
            { q: "What are the new features in GTA 6?", a: "GTA 6 adds: dual playable protagonists (Lucia and Jason), prone cover system, modular in-field weapon customization, dynamic hurricane weather, a living wildlife ecosystem (alligators, fish, birds), NPC daily routines, real estate investment, a revamped stock market, and GTA Online 6 built from scratch." },
            { q: "Does GTA 6 have GTA Online?", a: "Yes — GTA Online 6 launches day one with the base game. It's built from the ground up (not a port of GTA V Online) and features a custom protagonist separate from Lucia and Jason. GTA+ will return as a cosmetic subscription with no pay-to-win mechanics." },
            { q: "Is GTA 6 first-person?", a: "GTA 6 hasn't confirmed a first-person mode. GTA V introduced optional first-person mode on PS4/Xbox One in 2014 — whether GTA 6 will include this at launch is unconfirmed. The trailers show exclusively third-person gameplay." },
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
