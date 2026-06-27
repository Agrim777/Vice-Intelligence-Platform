import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight, Clock, MapPin } from "lucide-react";
import { setPageMeta } from "@/lib/seo";

const LAST_UPDATED = "2025-06-26";

export function GTA6MapPage() {
  useEffect(() => {
    setPageMeta({
      title: "GTA 6 Map — Vice City, Leonida & Map Size Explained",
      description: "Everything confirmed about the GTA 6 map — Vice City districts, the Leonida state Everglades, offshore keys, and how the map size compares to GTA 5. Updated June 2025.",
      path: "/gta6/map",
    });
  }, []);

  const areas = [
    { name: "Vice City", biome: "Urban/Coastal", description: "A massively expanded reimagining of the 1986 Vice City map. Multiple islands connected by bridges. Based on Miami's Art Deco South Beach, Brickell financial district, and the Port of Miami.", confirmed: true },
    { name: "Vice City Downtown", biome: "Urban", description: "Modern skyscrapers, high-rise apartments, financial institutions. Similar in concept to GTA V's Pillbox Hill but far more vertical.", confirmed: true },
    { name: "Ocean Beach / Art Deco Strip", biome: "Coastal", description: "Pastel hotels, neon signs, bars, and the iconic beachfront. Directly inspired by Miami's South Beach Ocean Drive.", confirmed: true },
    { name: "Port Leonida", biome: "Industrial", description: "Massive working shipping port with container cranes. Visible in Trailer 2 with animated loading equipment.", confirmed: true },
    { name: "Leonida Everglades", biome: "Swamp/Wilderness", description: "Vast wilderness region inspired by Everglades National Park. Airboat accessible canals, alligators, wildlife, and swamp towns.", confirmed: true },
    { name: "Rural Leonida", biome: "Rural", description: "Farmland, orange groves, trailer parks, and rural townships stretching inland from the coast.", confirmed: true },
    { name: "Offshore Keys", biome: "Tropical Islands", description: "Chain of small tropical islands to the south — luxury estates, marinas, smuggling routes. Inspired by the Florida Keys.", confirmed: false },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
      <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
        <Link href="/"><span className="hover:text-primary cursor-pointer">Home</span></Link>
        <ChevronRight className="w-3 h-3" />
        <span>GTA 6 Map</span>
      </div>

      <div>
        <div className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest border border-primary/30 bg-primary/5 px-3 py-1.5 rounded-full mb-4">
          <MapPin className="w-3 h-3" /> Confirmed + Analyzed
        </div>
        <h1 className="font-headline text-5xl md:text-6xl mb-3">GTA 6 MAP</h1>
        <div className="text-xs text-muted-foreground font-mono mb-4 flex items-center gap-2">
          <Clock className="w-3 h-3" /> Last updated: {LAST_UPDATED}
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          The GTA 6 map is set in the fictional state of <strong className="text-foreground">Leonida</strong> — a reimagined version of Florida spanning the neon-lit Vice City coastline, the rural Everglades wilderness, and offshore tropical keys.
        </p>
      </div>

      {/* Map Size */}
      <div className="border border-primary/30 bg-primary/5 rounded-xl p-6">
        <h2 className="font-headline text-2xl mb-4">GTA 6 Map Size vs GTA 5</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { game: "GTA 5", size: "81 km²", note: "Los Santos + Blaine County" },
            { game: "GTA 6 (est.)", size: "~160–200 km²", note: "Community analysis of trailer footage" },
            { game: "GTA 6 vs GTA 5", size: "2–2.5×", note: "Estimated size ratio" },
          ].map(({ game, size, note }) => (
            <div key={game} className="bg-background/60 rounded-lg p-4 text-center border border-primary/20">
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">{game}</div>
              <div className="font-headline text-2xl text-primary">{size}</div>
              <div className="text-xs text-muted-foreground mt-1">{note}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-4">Note: Exact size is unconfirmed. Community estimates are based on road scale analysis from official trailers and developer build leaks.</p>
      </div>

      {/* Map Areas */}
      <div>
        <h2 className="font-headline text-2xl text-foreground mb-4">GTA 6 Map Areas & Districts</h2>
        <div className="space-y-3">
          {areas.map(({ name, biome, description, confirmed }) => (
            <div key={name} className="border border-border bg-card rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-display font-bold text-sm text-foreground">{name}</span>
                <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 bg-secondary rounded text-muted-foreground border border-border">{biome}</span>
                <span className={`text-[9px] font-mono uppercase tracking-widest px-1.5 py-0.5 rounded border ${confirmed ? "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" : "text-amber-400 border-amber-500/30 bg-amber-500/10"}`}>
                  {confirmed ? "✓ Confirmed" : "Likely"}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-5 text-sm text-muted-foreground leading-relaxed">
        <div>
          <h2 className="font-headline text-2xl text-foreground mb-3">GTA 6 Leonida — Florida Reimagined</h2>
          <p>The state of Leonida in GTA 6 is Rockstar's fictional version of Florida. The name "Leonida" doesn't appear in GTA lore prior to GTA 6 — it's a new addition, much like how Rockstar renamed New York to "Liberty City," Los Angeles to "Los Santos," and Miami to "Vice City" in previous games.</p>
          <p className="mt-3">Rockstar's Leonida is much larger than the original Vice City from 2002. That game featured a compact two-island city. GTA 6's Leonida spans the entire state concept — from urban Vice City coastline to rural Everglades wilderness, making it a fundamentally different and far more varied open world.</p>
        </div>

        <div>
          <h2 className="font-headline text-2xl text-foreground mb-3">What We See on the GTA 6 Map From Trailers</h2>
          <ul className="space-y-2">
            {[
              "Ocean Drive-style beachfront strip with pastel Art Deco hotels and neon signage",
              "A large port facility with working container cranes (Trailer 2)",
              "Swamp canal system accessible by airboat — alligators visible in Everglades sections",
              "A Florida Keys-style bridge connecting two landmasses",
              "Rural farm roads and orange grove countryside",
              "Hurricane weather moving across the map in Trailer 2 — buildings boarding up, palm trees bending",
              "Offshore marina/boating area with luxury yachts",
              "Small rural towns with roadside businesses and trailer parks",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs">
                <span className="text-primary shrink-0">→</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Related */}
      <div className="border border-border bg-card rounded-xl p-5">
        <h3 className="font-display font-semibold text-sm mb-3">Explore More GTA 6</h3>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            { href: "/gta6/release-date", label: "GTA 6 Release Date" },
            { href: "/gta6/gameplay", label: "GTA 6 Gameplay Features" },
            { href: "/gta6/characters", label: "GTA 6 Characters — Lucia & Jason" },
            { href: "/maps", label: "All GTA Maps — GTA 1 to GTA 5" },
          ].map(({ href, label }) => (
            <Link key={href} href={href}>
              <div className="text-sm text-primary hover:text-primary/80 flex items-center gap-2 cursor-pointer py-1">
                <ChevronRight className="w-3.5 h-3.5 shrink-0" /> {label}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="font-headline text-3xl mb-4">GTA 6 Map FAQ</h2>
        <div className="space-y-2">
          {[
            { q: "What is the GTA 6 map called?", a: "The GTA 6 map is set in the fictional state of Leonida — Rockstar's reimagining of Florida. The main city is Vice City, a fictional version of Miami. Leonida also includes the Leonida Everglades, rural farmland, and a chain of offshore tropical keys." },
            { q: "How big is the GTA 6 map?", a: "The exact size hasn't been confirmed by Rockstar, but community analysis of official trailer footage suggests the GTA 6 map is approximately 2–2.5× the size of GTA 5's Los Santos and Blaine County combined. If accurate, this would make it one of the largest open worlds in gaming history." },
            { q: "Is Vice City in GTA 6?", a: "Yes — Vice City returns as the main urban area in GTA 6, massively expanded from the 2002 Vice City game. The GTA 6 version of Vice City includes multiple distinct districts: Ocean Beach (Art Deco strip), Downtown Vice City (skyscrapers), Port Leonida (industrial docks), and surrounding suburban areas." },
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
