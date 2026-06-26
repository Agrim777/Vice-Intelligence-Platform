import { useState } from "react";
import { Search, Zap, Gauge, RotateCcw } from "lucide-react";
import { VEHICLES, VEHICLE_CLASSES, VEHICLE_GAMES } from "@/data/vehicles";

function StatBar({ value, max = 10, color = "bg-primary" }: { value: number; max?: number; color?: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color} transition-all`} style={{ width: `${(value / max) * 100}%` }} />
      </div>
      <span className="text-[11px] font-mono text-muted-foreground w-5 text-right">{value}</span>
    </div>
  );
}

export function Vehicles() {
  const [vehicleClass, setVehicleClass] = useState("All");
  const [vehicleGame, setVehicleGame] = useState("All Games");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"topSpeed" | "acceleration" | "handling">("topSpeed");

  const filtered = VEHICLES
    .filter((v) => {
      const matchClass = vehicleClass === "All" || v.class === vehicleClass;
      const matchGame = vehicleGame === "All Games" || v.game === vehicleGame;
      const matchSearch = !search || v.name.toLowerCase().includes(search.toLowerCase()) || v.class.toLowerCase().includes(search.toLowerCase()) || v.game.toLowerCase().includes(search.toLowerCase());
      return matchClass && matchGame && matchSearch;
    })
    .sort((a, b) => b[sortBy] - a[sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-8">
      <div>
        <h1 className="font-headline text-5xl md:text-6xl">VEHICLE DATABASE</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          Stats, prices, locations, and performance data for top vehicles across all GTA games — GTA V Online, San Andreas, Vice City, GTA IV, and GTA III.
        </p>
      </div>

      {/* Controls */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search vehicles…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-card border border-border rounded-md pl-9 pr-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex gap-1.5">
            {[
              { key: "topSpeed", icon: Gauge, label: "Top Speed" },
              { key: "acceleration", icon: Zap, label: "Accel" },
              { key: "handling", icon: RotateCcw, label: "Handling" },
            ].map((s) => (
              <button
                key={s.key}
                onClick={() => setSortBy(s.key as typeof sortBy)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-semibold border transition-colors ${
                  sortBy === s.key ? "bg-primary/15 text-primary border-primary/40" : "bg-secondary text-muted-foreground border-border hover:text-foreground"
                }`}
              >
                <s.icon className="w-3 h-3" />{s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Game Filter */}
        <div className="flex gap-2 flex-wrap">
          {VEHICLE_GAMES.map((g) => (
            <button
              key={g}
              onClick={() => setVehicleGame(g)}
              className={`px-3 py-1 rounded-md text-xs font-semibold border transition-colors ${
                vehicleGame === g ? "bg-primary/15 text-primary border-primary/40" : "bg-secondary text-muted-foreground border-border hover:text-foreground"
              }`}
            >
              {g}
            </button>
          ))}
        </div>

        {/* Class Filter */}
        <div className="flex gap-2 flex-wrap">
          {VEHICLE_CLASSES.map((c) => (
            <button
              key={c}
              onClick={() => setVehicleClass(c)}
              className={`px-3 py-1 rounded-md text-xs font-semibold border transition-colors ${
                vehicleClass === c ? "bg-accent/15 text-accent border-accent/40" : "bg-secondary text-muted-foreground border-border hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="text-sm text-muted-foreground font-mono">
        <span className="text-foreground font-semibold">{filtered.length}</span> vehicles · sorted by{" "}
        <span className="text-primary">{sortBy === "topSpeed" ? "top speed" : sortBy === "acceleration" ? "acceleration" : "handling"}</span>
      </div>

      {/* Vehicle Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((vehicle, i) => (
          <div key={i} className="border border-border bg-card rounded-md p-5 hover:border-primary/25 hover-lift transition-all">
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h3 className="font-display font-bold text-base">{vehicle.name}</h3>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 bg-primary/10 text-primary border border-primary/25 rounded">{vehicle.class}</span>
                </div>
                <div className="flex items-center flex-wrap gap-2 text-xs text-muted-foreground">
                  <span className="font-mono">{vehicle.game}</span>
                  <span>·</span>
                  <span className="font-mono">{vehicle.drivetrain}</span>
                  <span>·</span>
                  <span className="text-emerald-400 font-semibold">{vehicle.price}</span>
                </div>
                {vehicle.realWorldInspiration && (
                  <div className="text-xs text-accent mt-1 font-mono">Based on: {vehicle.realWorldInspiration}</div>
                )}
              </div>
              <div className="text-right shrink-0">
                <div className="font-headline text-3xl text-foreground">{vehicle.topSpeed}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">mph</div>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="grid grid-cols-[80px_1fr] items-center gap-2 text-xs text-muted-foreground">
                <span>Top Speed</span>
                <StatBar value={vehicle.topSpeed} max={160} color="bg-primary" />
              </div>
              <div className="grid grid-cols-[80px_1fr] items-center gap-2 text-xs text-muted-foreground">
                <span>Acceleration</span>
                <StatBar value={vehicle.acceleration} max={10} color="bg-cyan-400" />
              </div>
              <div className="grid grid-cols-[80px_1fr] items-center gap-2 text-xs text-muted-foreground">
                <span>Handling</span>
                <StatBar value={vehicle.handling} max={10} color="bg-violet-400" />
              </div>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">{vehicle.description}</p>
            <div className="mt-3 pt-3 border-t border-border flex items-center gap-2 text-xs text-muted-foreground">
              <span className="text-foreground font-medium">Location:</span> {vehicle.location}
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          No vehicles match your filters. <button onClick={() => { setVehicleClass("All"); setVehicleGame("All Games"); setSearch(""); }} className="text-primary hover:underline">Clear filters</button>
        </div>
      )}
    </div>
  );
}
