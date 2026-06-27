import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { setPageMeta } from "@/lib/seo";

const CARS = [
  { rank: 1, name: "Grotti Itali RSX", class: "Super", price: "$3,465,000", lapTime: "0:56.938", topSpeed: "135 mph", basedOn: "Ferrari SF90 Stradale", notes: "Best overall lap time. Outstanding cornering grip. The clear #1 for circuit racing." },
  { rank: 2, name: "Annis S80RR", class: "Super", price: "$2,575,000", lapTime: "0:57.261", topSpeed: "134 mph", basedOn: "Nissan R90C Le Mans Racer", notes: "Le Mans prototype. Exceptional high-speed stability. Competitive alternative to RSX." },
  { rank: 3, name: "Ocelot Pariah", class: "Sports", price: "$1,420,000", lapTime: "1:00.090", topSpeed: "136 mph", basedOn: "Ferrari 812 Superfast", notes: "Fastest top speed in GTA Online (136 mph). Best for long straights and highway races." },
  { rank: 4, name: "Pfister 811", class: "Super", price: "$1,135,000", lapTime: "0:58.054", topSpeed: "132 mph", basedOn: "Porsche 918 Spyder", notes: "Electric hypercar with fastest 0-60. Great for short tracks where acceleration matters." },
  { rank: 5, name: "Truffade Thrax", class: "Super", price: "$2,325,000", lapTime: "0:57.692", topSpeed: "130 mph", basedOn: "Bugatti Divo", notes: "All-round performer. Beautiful design. Strong at most track types." },
  { rank: 6, name: "Ocelot XA-21", class: "Super", price: "$2,375,000", lapTime: "0:58.261", topSpeed: "128 mph", basedOn: "McLaren P1 / Lykan Hypersport", notes: "Excellent in corners. One of the most reliable racing cars in the game." },
  { rank: 7, name: "Dewbauchee Vagner", class: "Super", price: "$1,535,000", lapTime: "0:58.615", topSpeed: "127 mph", basedOn: "Aston Martin AM-RB 001", notes: "Underrated. Great grip and handling. Cheaper than most top-tier Supers." },
  { rank: 8, name: "Pegassi Zentorno", class: "Super", price: "$725,000", lapTime: "0:59.003", topSpeed: "124 mph", basedOn: "Lamborghini Sesto Elemento", notes: "Best budget Super. Excellent all-rounder at a fraction of the cost of top cars." },
  { rank: 9, name: "BF Weevil Custom", class: "Sports", price: "~$870,000 (Benny's)", lapTime: "0:58.800", topSpeed: "120 mph", basedOn: "VW Beetle", notes: "Best Sports class car. Beats many Supers on tight circuits due to its handling model." },
  { rank: 10, name: "Declasse Scramjet", class: "Super", price: "$3,480,000", lapTime: "0:59.105", topSpeed: "115 mph", basedOn: "Rocket-boosted concept car", notes: "Rocket boost for drag races. Unique in races that allow special vehicles." },
];

export function GTA5BestCarsPage() {
  useEffect(() => {
    setPageMeta({
      title: "Best GTA 5 Cars — Top 10 Fastest Cars in GTA Online (2025)",
      description: "The 10 fastest cars in GTA 5 and GTA Online ranked by lap time. Itali RSX, Pariah, S80RR, Pfister 811 — real race performance data, not just top speed. Updated 2025.",
      path: "/gta5/best-cars",
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
      <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
        <Link href="/"><span className="hover:text-primary cursor-pointer">Home</span></Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/vehicles"><span className="hover:text-primary cursor-pointer">Vehicles</span></Link>
        <ChevronRight className="w-3 h-3" />
        <span>Best GTA 5 Cars</span>
      </div>

      <div>
        <h1 className="font-headline text-5xl md:text-6xl mb-3">BEST GTA 5 CARS</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          The 10 best cars in GTA 5 and GTA Online ranked by real lap times — not just top speed. Lap time is what actually matters in races. Data from community-verified testing at the Rockford Hills circuit.
        </p>
      </div>

      <div className="border border-amber-500/20 bg-amber-500/5 rounded-xl p-4 text-sm text-muted-foreground">
        <strong className="text-amber-400">⚠ Top Speed vs Lap Time:</strong> A car's top speed stat is misleading. What matters in races is lap time — a combination of cornering grip, acceleration, and top speed. The Ocelot Pariah has the highest top speed (136 mph) but ranks #3 because it loses time in corners. Always check lap times before buying a racing car.
      </div>

      <div className="space-y-3">
        {CARS.map(({ rank, name, class: cls, price, lapTime, topSpeed, basedOn, notes }) => (
          <div key={name} className={`border rounded-xl p-5 ${rank <= 3 ? "border-primary/30 bg-primary/5" : "border-border bg-card"}`}>
            <div className="flex items-start gap-4">
              <div className="shrink-0 font-headline text-3xl text-primary/40 leading-none w-8 text-center">{rank}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap mb-2">
                  <span className="font-headline text-xl text-foreground">{name}</span>
                  <span className="text-[9px] font-mono uppercase tracking-widest px-1.5 py-0.5 bg-secondary rounded text-muted-foreground border border-border">{cls}</span>
                  {rank === 1 && <span className="text-[9px] font-mono uppercase tracking-widest px-1.5 py-0.5 rounded border text-primary border-primary/30 bg-primary/10">Best Overall</span>}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs mb-2">
                  <div><span className="text-muted-foreground">Price:</span> <span className="text-foreground font-semibold">{price}</span></div>
                  <div><span className="text-muted-foreground">Lap Time:</span> <span className="text-emerald-400 font-mono font-semibold">{lapTime}</span></div>
                  <div><span className="text-muted-foreground">Top Speed:</span> <span className="text-foreground">{topSpeed}</span></div>
                  <div><span className="text-muted-foreground">Based on:</span> <span className="text-foreground">{basedOn}</span></div>
                </div>
                <p className="text-xs text-muted-foreground">{notes}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
        <div>
          <h2 className="font-headline text-2xl text-foreground mb-3">Tips for Buying the Right Car</h2>
          <ul className="space-y-2">
            {[
              "Always upgrade fully before judging a car's performance — engine, transmission, turbo, and race brakes make a massive difference",
              "Check the race type: circuit races favor lap time; drag races favor top speed and acceleration",
              "Cheaper cars like the Zentorno and BF Weevil offer great performance at a fraction of the cost",
              "For GTA Online racing, join Rockford Hills races specifically to compare car handling on a consistent track",
              "Don't buy cars from Southern San Andreas Auto (story mode) for racing — Legendary Motorsport has the best selection",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs">
                <span className="text-primary shrink-0">→</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border border-border bg-card rounded-xl p-5">
        <h3 className="font-display font-semibold text-sm mb-3">Related Pages</h3>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            { href: "/vehicles", label: "GTA Vehicle Database" },
            { href: "/gta5/online-money", label: "GTA Online Money Guide" },
            { href: "/guides", label: "GTA 5 Guides" },
            { href: "/cheats", label: "GTA 5 Cheat Codes" },
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
        <h2 className="font-headline text-3xl mb-4">Best GTA 5 Cars FAQ</h2>
        <div className="space-y-2">
          {[
            { q: "What is the best car in GTA 5 Online?", a: "The best overall car in GTA Online for circuit racing is the Grotti Itali RSX ($3,465,000). It has the best lap time among all Super class cars. For a budget option, the Ocelot Pariah ($1,420,000) is excellent, and the BF Weevil Custom (~$870k via Benny's) is the best Sports class car." },
            { q: "What is the fastest car in GTA 5?", a: "The fastest top speed in GTA Online is the Ocelot Pariah at 136 mph. However, the Grotti Itali RSX posts the best lap times overall due to superior cornering grip. For drag races and straight-line speed, use the Pariah. For circuit races, the RSX is the better choice." },
            { q: "What is the best car to buy in GTA 5 Online for beginners?", a: "For new GTA Online players, the Pegassi Zentorno ($725,000) is the best value racing car. It competes with cars costing 4× more, is reliable in most race types, and the $725k price is achievable early-game through Cayo Perico heist or contact missions." },
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
