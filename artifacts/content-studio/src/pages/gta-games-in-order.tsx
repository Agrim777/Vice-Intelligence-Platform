import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { setPageMeta } from "@/lib/seo";

const GTA_IN_ORDER = [
  { num: 1, title: "Grand Theft Auto", year: 1997, platform: "PC, PS1, GBA", setting: "Liberty City, San Andreas & Vice City (2D top-down)", note: "The original. Top-down crime game that started it all. Three separate cities across six chapters." },
  { num: 2, title: "Grand Theft Auto 2", year: 1999, platform: "PC, PS1, Dreamcast, GBA", setting: "Anywhere City (futuristic, 2D top-down)", note: "Set in a near-future city with three rival gangs. First game with a reputation system." },
  { num: 3, title: "Grand Theft Auto III", year: 2001, platform: "PS2, Xbox, PC", setting: "Liberty City (3D — New York inspired)", note: "The revolutionary 3D open-world entry. Claude is a silent protagonist. Changed gaming forever." },
  { num: 4, title: "Grand Theft Auto: Vice City", year: 2002, platform: "PS2, Xbox, PC", setting: "Vice City (1986 Miami)", note: "1980s Miami. Tommy Vercetti. Iconic neon aesthetic and radio soundtrack. First character with a voice." },
  { num: 5, title: "Grand Theft Auto: San Andreas", year: 2004, platform: "PS2, Xbox, PC", setting: "San Andreas State (LA, SF, Vegas — 1992)", note: "Biggest GTA before GTA 5. Three cities, CJ's gang story, RPG elements. Most beloved entry in the series." },
  { num: 6, title: "Grand Theft Auto: Liberty City Stories", year: 2005, platform: "PSP, PS2", setting: "Liberty City (1998)", note: "PSP exclusive later ported to PS2. Prequel to GTA III featuring Toni Cipriani." },
  { num: 7, title: "Grand Theft Auto: Vice City Stories", year: 2006, platform: "PSP, PS2", setting: "Vice City (1984)", note: "PSP exclusive prequel to Vice City. Victor Vance building the drug empire Lance Vance inherited." },
  { num: 8, title: "Grand Theft Auto IV", year: 2008, platform: "PS3, Xbox 360, PC", setting: "Liberty City (modern New York)", note: "Most realistic GTA. Niko Bellic's American Dream story. Celebrated for narrative depth and physics." },
  { num: 9, title: "GTA IV: The Lost and Damned", year: 2009, platform: "PS3, Xbox 360, PC", setting: "Liberty City", note: "DLC expansion. Johnny Klebitz and The Lost motorcycle club. Intersects with GTA IV's main story." },
  { num: 10, title: "GTA IV: The Ballad of Gay Tony", year: 2009, platform: "PS3, Xbox 360, PC", setting: "Liberty City", note: "DLC expansion. Luis Lopez and nightclub owner Gay Tony. Lighter tone than GTA IV main story." },
  { num: 11, title: "Grand Theft Auto: Chinatown Wars", year: 2009, platform: "DS, PSP, iOS, Android", setting: "Liberty City (top-down)", note: "Handheld exclusive with top-down perspective. Huang Lee's drug dealing story. Critically acclaimed." },
  { num: 12, title: "Grand Theft Auto V", year: 2013, platform: "PS3/4/5, Xbox 360/One/X|S, PC", setting: "Los Santos (modern Los Angeles)", note: "Best-selling entertainment product in history. Three protagonists, GTA Online. Still one of the top-played games in 2025." },
  { num: 13, title: "Grand Theft Auto VI", year: 2025, platform: "PS5, Xbox Series X|S (PC TBA)", setting: "Vice City & Leonida State (modern Florida)", note: "Dual protagonists Lucia and Jason. First female lead. GTA Online 6 launches day one. Fall 2025 release." },
];

export function GTAGamesInOrderPage() {
  useEffect(() => {
    setPageMeta({
      title: "GTA Games in Order — Every Grand Theft Auto Game from 1997 to 2025",
      description: "All GTA games in release order — GTA 1 (1997) through GTA 6 (2025). Every mainline game, expansion, and handheld title with release dates, platforms, and settings.",
      path: "/gta-games-in-order",
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
      <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
        <Link href="/"><span className="hover:text-primary cursor-pointer">Home</span></Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/games"><span className="hover:text-primary cursor-pointer">GTA Games</span></Link>
        <ChevronRight className="w-3 h-3" />
        <span>GTA Games in Order</span>
      </div>

      <div>
        <h1 className="font-headline text-5xl md:text-6xl mb-3">GTA GAMES IN ORDER</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Every Grand Theft Auto game in release order — all 13 titles from GTA 1 (1997) to GTA 6 (2025). Includes mainline games, DLC expansions, and handheld titles.
        </p>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { value: "13", label: "Total Games" },
          { value: "28", label: "Years of GTA" },
          { value: "415M+", label: "Copies Sold" },
          { value: "7", label: "Mainline Titles" },
        ].map(({ value, label }) => (
          <div key={label} className="border border-border bg-card rounded-xl p-4 text-center">
            <div className="font-headline text-3xl text-primary">{value}</div>
            <div className="text-xs text-muted-foreground mt-1">{label}</div>
          </div>
        ))}
      </div>

      {/* Full list */}
      <div className="space-y-3">
        {GTA_IN_ORDER.map(({ num, title, year, platform, setting, note }) => (
          <div key={num} className={`border rounded-xl p-4 ${num === 13 ? "border-primary/30 bg-primary/5" : "border-border bg-card"}`}>
            <div className="flex gap-4 items-start">
              <div className="shrink-0 font-headline text-2xl text-primary/30 w-7 text-center leading-none mt-1">#{num}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap mb-1">
                  <span className="font-headline text-lg text-foreground">{title}</span>
                  <span className="text-[10px] font-mono text-primary border border-primary/30 bg-primary/10 rounded px-1.5 py-0.5">{year}</span>
                  {num === 13 && <span className="text-[9px] font-mono text-primary uppercase tracking-widest border border-primary/30 bg-primary/10 rounded px-1.5 py-0.5">Coming Fall 2025</span>}
                </div>
                <div className="text-xs text-muted-foreground mb-1"><span className="text-foreground/60">Platform:</span> {platform}</div>
                <div className="text-xs text-muted-foreground mb-2"><span className="text-foreground/60">Setting:</span> {setting}</div>
                <p className="text-xs text-muted-foreground leading-relaxed">{note}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-5 text-sm text-muted-foreground leading-relaxed">
        <div>
          <h2 className="font-headline text-2xl text-foreground mb-3">GTA Games in Chronological Story Order</h2>
          <p>The GTA universe has multiple separate continuities. The 3D universe (GTA III, Vice City, San Andreas) shares one continuity. The HD universe (GTA IV, GTA V, GTA VI) shares another. They're not connected to each other.</p>
          <div className="mt-3 space-y-2">
            {[
              { label: "3D Universe Order", games: "Vice City Stories (1984) → Vice City (1986) → San Andreas (1992) → Liberty City Stories (1998) → GTA III (2001)" },
              { label: "HD Universe Order", games: "GTA IV & episodes (2008) → GTA V (2013) → GTA VI (2025)" },
            ].map(({ label, games }) => (
              <div key={label} className="bg-card border border-border rounded-lg p-3">
                <div className="font-semibold text-foreground text-xs mb-1">{label}</div>
                <div className="text-xs text-muted-foreground">{games}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-headline text-2xl text-foreground mb-3">Is GTA 6 the Last GTA Game?</h2>
          <p>GTA 6 is very unlikely to be the last GTA game. Take-Two Interactive (Rockstar's parent company) has explicitly said GTA Online 6 and continued updates will sustain the franchise for years. Given GTA V's 12-year active lifecycle, GTA 6 could support the company through the 2030s. A GTA 7 would likely not appear until the mid-2030s at earliest.</p>
        </div>
      </div>

      <div className="border border-border bg-card rounded-xl p-5">
        <h3 className="font-display font-semibold text-sm mb-3">Related Pages</h3>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            { href: "/games", label: "Full GTA Franchise History" },
            { href: "/gta6/release-date", label: "GTA 6 Release Date" },
            { href: "/cheats", label: "Cheat Codes for All GTA Games" },
            { href: "/maps", label: "Every GTA Map Explained" },
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
        <h2 className="font-headline text-3xl mb-4">GTA Games FAQ</h2>
        <div className="space-y-2">
          {[
            { q: "How many GTA games are there?", a: "There are 13 Grand Theft Auto games in total: GTA 1 (1997), GTA 2 (1999), GTA III (2001), Vice City (2002), San Andreas (2004), Liberty City Stories (2005), Vice City Stories (2006), GTA IV (2008), The Lost and Damned (2009), The Ballad of Gay Tony (2009), Chinatown Wars (2009), GTA V (2013), and GTA 6 (2025). This includes expansions — there are 7 mainline titles." },
            { q: "What GTA game should I start with?", a: "For new players: start with GTA V. It's the most polished, has the most content, and is available on current hardware at a low price. After GTA V, try GTA San Andreas (the fan favorite) or GTA IV (for the best story). GTA III is worth playing for historical context, but its age shows." },
            { q: "Is GTA 6 the last GTA game?", a: "No — GTA 6 is almost certainly not the last GTA game. Take-Two Interactive has stated GTA Online 6 will be supported for many years, mirroring GTA Online V's 12+ year run. A future GTA 7 would likely not appear until the mid-2030s at the earliest." },
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
