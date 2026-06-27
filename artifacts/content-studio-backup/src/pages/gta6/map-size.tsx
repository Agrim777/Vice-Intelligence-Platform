import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight, Clock, Map } from "lucide-react";
import { setPageMeta } from "@/lib/seo";

export function GTA6MapSizePage() {
  useEffect(() => {
    setPageMeta({
      title: "GTA 6 Map Size vs GTA 5 — How Much Bigger Is Leonida? (2026)",
      description: "GTA 6's Leonida map is estimated to be 2.5–3x larger than GTA 5's San Andreas. Here's the full comparison: size, regions, and what's confirmed in trailers.",
      path: "/gta6/map-size",
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
      <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
        <Link href="/"><span className="hover:text-primary cursor-pointer">Home</span></Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/gta6/map"><span className="hover:text-primary cursor-pointer">GTA 6 Map</span></Link>
        <ChevronRight className="w-3 h-3" />
        Map Size Comparison
      </div>

      <div>
        <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest border border-emerald-500/30 bg-emerald-500/5 px-3 py-1.5 rounded-full mb-4">
          <Map className="w-3 h-3" /> COMMUNITY-CONFIRMED
        </div>
        <h1 className="font-headline text-5xl md:text-6xl mb-3">GTA 6 MAP SIZE</h1>
        <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono mb-4">
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Updated June 27, 2026</span>
          <span>·</span><span>GTA6Guide.in</span>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          GTA 6 is set in the <strong className="text-foreground">State of Leonida</strong> — Rockstar's fictional version of Florida — and is estimated to be <strong className="text-foreground">2.5 to 3 times larger than GTA 5's San Andreas</strong>. Here's what we know from trailers, official materials, and community analysis.
        </p>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Estimated Scale", value: "2.5–3×", note: "vs GTA 5 San Andreas" },
          { label: "GTA 5 Map", value: "~81 km²", note: "land area" },
          { label: "GTA 6 Est.", value: "~200 km²", note: "land area (community est.)" },
          { label: "Install Size Est.", value: "~150GB", note: "vs GTA 5's ~100GB" },
        ].map(({ label, value, note }) => (
          <div key={label} className="border border-border bg-card rounded-xl p-4 text-center">
            <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">{label}</div>
            <div className="font-headline text-2xl text-foreground">{value}</div>
            <div className="text-xs text-muted-foreground mt-1">{note}</div>
          </div>
        ))}
      </div>

      {/* Comparison table */}
      <div className="space-y-4">
        <h2 className="font-headline text-3xl">GTA 6 vs GTA 5 Map Size Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-card border-b border-border">
                {["Feature", "GTA 5 — San Andreas", "GTA 6 — Leonida"].map(h => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-mono uppercase tracking-widest text-muted-foreground">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Setting", "Los Santos + Blaine County", "Vice City + full Leonida State"],
                ["Type", "1 city + rural outskirts", "Full state — multiple cities & regions"],
                ["Estimated land area", "~81 km² (50 sq mi)", "~175–200 km² (community est.)"],
                ["Scale vs predecessor", "Baseline", "2.5× – 3× bigger"],
                ["Water areas", "Ocean + river", "Ocean, Everglades, Keys, swamps"],
                ["Cities", "Los Santos (1)", "Vice City + Leonida towns (multiple)"],
                ["Install size", "~100GB", "~150GB (estimated)"],
                ["Revealed?", "Fully mapped", "Still community-estimated"],
                ["Year released", "2013", "November 19, 2026"],
              ].map((row, i) => (
                <tr key={i} className="border-b border-border/50 last:border-0 hover:bg-secondary/20">
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground uppercase tracking-widest">{row[0]}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row[1]}</td>
                  <td className="px-4 py-3 text-foreground font-medium">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Regions */}
      <div className="space-y-4">
        <h2 className="font-headline text-3xl">Confirmed GTA 6 Regions in Leonida</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">Based on official trailers and Rockstar materials, the following regions have been confirmed or strongly implied to exist in GTA 6's map:</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { region: "Vice City", desc: "The main urban hub — a neon-soaked Miami-inspired metropolis. Confirmed in both trailers with extensive footage of downtown, beach, and nightlife districts.", confirmed: true },
            { region: "Port Leonida", desc: "A large working port visible in trailers — industrial docks with cranes, cargo ships, and warehouses. Confirmed via trailer footage.", confirmed: true },
            { region: "Leonida Everglades", desc: "Massive swampland interior region — confirmed via trailer shots of Lucia and Jason in boats through marshland, alligator territory.", confirmed: true },
            { region: "Leonida Keys / Islands", desc: "Southern island chain visible in trailer aerial shots. Multiple small barrier islands with marinas and beach communities.", confirmed: true },
            { region: "Uptown Vice City", desc: "Wealthy hillside neighborhoods with mansions, visible in Trailer 1 scenes of residential areas with pools.", confirmed: true },
            { region: "Leonida Panhandle (North)", desc: "Rural northern region with highways, motels, and small towns visible in trailer chase sequences.", confirmed: true },
            { region: "Trailer Park District", desc: "A desolate rural inland area — confirmed via Trailer 1 which opens in a trailer park.", confirmed: true },
            { region: "Coastal Highway", desc: "A highway running along the coast connecting Vice City to rural Leonida — confirmed in multiple car chase sequences.", confirmed: true },
          ].map(({ region, desc, confirmed }) => (
            <div key={region} className={`border rounded-xl p-4 ${confirmed ? "border-emerald-500/20 bg-emerald-500/5" : "border-border bg-card"}`}>
              <div className="flex items-start gap-2 mb-1">
                <span className={`text-[10px] font-mono uppercase tracking-widest ${confirmed ? "text-emerald-400" : "text-amber-400"}`}>{confirmed ? "✓ CONFIRMED" : "? RUMORED"}</span>
              </div>
              <div className="font-display font-semibold text-sm text-foreground mb-1">{region}</div>
              <div className="text-xs text-muted-foreground leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Why so big */}
      <div className="space-y-4">
        <h2 className="font-headline text-3xl">Why Is GTA 6's Map So Much Bigger?</h2>
        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          <p><strong className="text-foreground">Florida as inspiration:</strong> Rockstar chose to model Leonida after the entire state of Florida — not just Miami. Unlike GTA V which modeled a single metro area (LA), GTA 6 has to accommodate an entire state with coastlines, swamps, Keys, rural backwater towns, and a major urban center. That alone makes a much larger world necessary.</p>
          <p><strong className="text-foreground">13-year development time:</strong> GTA 6 has been in full development for approximately 7 years (and in planning since GTA V launched in 2013). The extra time has allowed Rockstar to populate the world at a density impossible in shorter dev cycles. Every interior, NPC routine, and environmental detail benefits from the extended production.</p>
          <p><strong className="text-foreground">Dynamic world systems:</strong> The map is also "bigger" in a non-literal sense. The hurricane system (confirmed in trailers) reshapes the world in real time — flooding streets, closing highways, blocking access to certain regions. The wildlife ecosystem (350+ species confirmed) makes the world feel genuinely alive in a way GTA V couldn't achieve.</p>
          <p><strong className="text-foreground">PS5 storage capacity:</strong> GTA V shipped on a single Blu-ray disc at roughly 50GB. GTA 6 on PS5 can use the console's full SSD bandwidth, allowing the game to stream far more detailed world geometry. The estimated 150GB install is a direct result of the larger, denser world.</p>
        </div>
      </div>

      {/* How does GTA 6 map compare to others */}
      <div className="space-y-4">
        <h2 className="font-headline text-3xl">GTA 6 Map vs Other Open World Games</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-card border-b border-border">
                {["Game", "Map Size (est.)", "Compared to GTA 6"].map(h => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-mono uppercase tracking-widest text-muted-foreground">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["GTA 6 (Leonida)", "~200 km² (est.)", "Baseline"],
                ["Red Dead Redemption 2", "~75 km²", "~3× smaller"],
                ["GTA 5 (San Andreas)", "~81 km²", "~2.5× smaller"],
                ["Cyberpunk 2077", "~85 km²", "~2.3× smaller"],
                ["The Witcher 3 (total)", "~136 km²", "~1.5× smaller"],
                ["Elden Ring", "~79 km²", "~2.5× smaller"],
                ["Just Cause 4", "~1024 km²", "~5× larger (mostly empty)"],
              ].map((row, i) => (
                <tr key={i} className={`border-b border-border/50 last:border-0 ${i === 0 ? "bg-primary/5 font-medium" : "hover:bg-secondary/20"}`}>
                  <td className="px-4 py-3 text-foreground">{row[0]}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row[1]}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground">Note: GTA 6 map size is community-estimated. Official confirmation from Rockstar is expected at launch or via pre-release materials. Just Cause 4 is included for scale reference — its map is mostly terrain with less content density than GTA 6.</p>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="font-headline text-3xl mb-4">GTA 6 Map Size FAQ</h2>
        <div className="space-y-2">
          {[
            { q: "How big is the GTA 6 map compared to GTA 5?", a: "Based on community analysis of official trailers and screenshots, GTA 6's Leonida map is estimated to be 2.5 to 3 times larger than GTA 5's San Andreas. GTA 5's San Andreas is approximately 81 km² of land area; GTA 6's Leonida is estimated at 175–200 km². These figures are community estimates — Rockstar has not published official map dimensions." },
            { q: "Will GTA 6 have the biggest map in any GTA game?", a: "Yes, by a significant margin. The next largest GTA map is GTA 5 (San Andreas). GTA 6's Leonida is 2.5–3× bigger, incorporating multiple distinct biomes: coastal Vice City, interior Everglades swampland, the Leonida Keys, rural northern Panhandle, and smaller towns throughout." },
            { q: "Is the GTA 6 map the biggest in gaming?", a: "No. Several open-world games have larger raw landmass numbers — notably Just Cause 4 (~1,000 km²) and The Elder Scrolls II: Daggerfall (~63,000 km²). However, GTA 6 is focused on content density over raw size. A 200 km² GTA map with Rockstar-level detail density is arguably a more impressive technical achievement than a sparse 1,000 km² terrain map." },
            { q: "Can you explore the whole GTA 6 map from the start?", a: "This has not been confirmed. GTA V allowed partial open-world exploration from early in the story, with some areas unlocked as the game progressed. GTA 6 is likely to follow a similar approach — the core open world is accessible, but some missions may gate access to specific areas. Rockstar has not detailed progression specifics." },
            { q: "What is the state of Leonida in GTA 6?", a: "Leonida is GTA 6's fictional version of the state of Florida. It includes Vice City (a fictionalized Miami), the Leonida Everglades (fictionalized Everglades), the Leonida Keys (fictionalized Florida Keys), a coastal highway system, and rural inland towns inspired by real Florida geography." },
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
            { href: "/gta6/map", label: "GTA 6 Map — Leonida Regions & Confirmed Locations" },
            { href: "/gta6/release-date", label: "GTA 6 Release Date — November 19, 2026" },
            { href: "/gta6/vehicles", label: "GTA 6 Vehicles — 200+ Confirmed" },
            { href: "/gta6/gameplay", label: "GTA 6 Gameplay — New Mechanics" },
            { href: "/gta6/download-size", label: "GTA 6 Download Size — How Big Is the Install?" },
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
