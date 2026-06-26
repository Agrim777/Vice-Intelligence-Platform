import { useState } from "react";
import { Search } from "lucide-react";
import { WEAPONS, WEAPON_CLASSES, WEAPON_GAMES } from "@/data/weapons";

function StatBar({ value, color = "bg-primary" }: { value: number; color?: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${(value / 10) * 100}%` }} />
      </div>
      <span className="text-[11px] font-mono text-muted-foreground w-4 text-right">{value}</span>
    </div>
  );
}

export function Weapons() {
  const [weaponClass, setWeaponClass] = useState("All");
  const [game, setGame] = useState("All Games");
  const [search, setSearch] = useState("");

  const filtered = WEAPONS.filter((w) => {
    const matchClass = weaponClass === "All" || w.class === weaponClass;
    const matchGame = game === "All Games" || w.game === game;
    const matchSearch = !search || w.name.toLowerCase().includes(search.toLowerCase()) || w.class.toLowerCase().includes(search.toLowerCase());
    return matchClass && matchGame && matchSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-8">
      <div>
        <h1 className="font-headline text-5xl md:text-6xl">WEAPONS DATABASE</h1>
        <p className="text-muted-foreground mt-2">Full weapon stats, locations, prices, and best-use cases across all GTA titles.</p>
      </div>

      {/* Controls */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search weapons…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-card border border-border rounded-md pl-9 pr-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider self-center">Game:</span>
          {WEAPON_GAMES.map((g) => (
            <button key={g} onClick={() => setGame(g)} className={`px-3 py-1 rounded-md text-xs font-semibold border transition-colors ${game === g ? "bg-primary/15 text-primary border-primary/40" : "bg-secondary text-muted-foreground border-border hover:text-foreground"}`}>{g}</button>
          ))}
        </div>
        <div className="flex gap-2 flex-wrap">
          <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider self-center">Class:</span>
          {WEAPON_CLASSES.map((c) => (
            <button key={c} onClick={() => setWeaponClass(c)} className={`px-3 py-1 rounded-md text-xs font-semibold border transition-colors ${weaponClass === c ? "bg-primary/15 text-primary border-primary/40" : "bg-secondary text-muted-foreground border-border hover:text-foreground"}`}>{c}</button>
          ))}
        </div>
      </div>

      <div className="text-sm text-muted-foreground font-mono"><span className="text-foreground font-semibold">{filtered.length}</span> weapons</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((weapon, i) => (
          <div key={i} className="border border-border bg-card rounded-md p-5 hover:border-primary/25 hover-lift transition-all">
            <div className="flex items-start justify-between gap-3 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-display font-bold text-base">{weapon.name}</h3>
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 bg-red-500/10 text-red-400 border border-red-500/25 rounded">{weapon.class}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{weapon.game}</span>
                  <span>·</span>
                  <span className="text-emerald-400 font-semibold">{weapon.price}</span>
                </div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="grid grid-cols-[70px_1fr] items-center gap-2 text-xs text-muted-foreground"><span>Damage</span><StatBar value={weapon.damage} color="bg-red-400" /></div>
              <div className="grid grid-cols-[70px_1fr] items-center gap-2 text-xs text-muted-foreground"><span>Fire Rate</span><StatBar value={weapon.fireRate} color="bg-amber-400" /></div>
              <div className="grid grid-cols-[70px_1fr] items-center gap-2 text-xs text-muted-foreground"><span>Accuracy</span><StatBar value={weapon.accuracy} color="bg-cyan-400" /></div>
              <div className="grid grid-cols-[70px_1fr] items-center gap-2 text-xs text-muted-foreground"><span>Range</span><StatBar value={weapon.range} color="bg-violet-400" /></div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{weapon.description}</p>
            <div className="mt-3 pt-3 border-t border-border text-xs">
              <span className="text-muted-foreground">Location:</span> <span className="text-foreground">{weapon.location}</span>
            </div>
            <div className="mt-1 text-xs">
              <span className="text-muted-foreground">Best for:</span> <span className="text-cyan-400 font-medium">{weapon.bestFor}</span>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="md:col-span-2 py-16 text-center text-muted-foreground border border-dashed border-border rounded-md">
            <Search className="w-8 h-8 mx-auto mb-3 opacity-30" />
            <p className="text-sm">No weapons found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
