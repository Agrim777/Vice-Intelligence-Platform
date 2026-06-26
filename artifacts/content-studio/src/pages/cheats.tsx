import { useState } from "react";
import { Search, Gamepad2, Monitor, Smartphone } from "lucide-react";
import { CHEAT_GAMES, CATEGORIES, type Cheat } from "@/data/cheats";

export function Cheats() {
  const [selectedGame, setSelectedGame] = useState(CHEAT_GAMES[0].slug);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const game = CHEAT_GAMES.find((g) => g.slug === selectedGame) ?? CHEAT_GAMES[0];
  const filtered = game.cheats.filter((c) => {
    const matchCat = category === "All" || c.category === category;
    const matchSearch = !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.effect.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-headline text-5xl md:text-6xl">CHEAT CODES</h1>
        <p className="text-muted-foreground mt-2">Every cheat code for every GTA game — PS, Xbox, PC, and phone numbers.</p>
      </div>

      {/* Game Selector */}
      <div className="flex flex-wrap gap-2">
        {CHEAT_GAMES.map((g) => (
          <button
            key={g.slug}
            onClick={() => { setSelectedGame(g.slug); setCategory("All"); setSearch(""); }}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors border ${
              selectedGame === g.slug
                ? "bg-primary text-primary-foreground border-primary glow-pink-sm"
                : "bg-card text-muted-foreground border-border hover:text-foreground hover:border-primary/30"
            }`}
          >
            {g.game}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search cheats…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-card border border-border rounded-md pl-9 pr-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-wider transition-colors border ${
                category === cat ? "bg-primary/15 text-primary border-primary/40" : "bg-secondary text-muted-foreground border-border hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <div className="text-sm text-muted-foreground font-mono">
        Showing <span className="text-foreground font-semibold">{filtered.length}</span> cheats for <span className="text-primary">{game.game}</span>
      </div>

      {/* Cheats Grid */}
      <div className="grid grid-cols-1 gap-3">
        {filtered.map((cheat, i) => <CheatCard key={i} cheat={cheat} />)}
        {filtered.length === 0 && (
          <div className="py-16 text-center text-muted-foreground border border-dashed border-border rounded-md">
            <Search className="w-8 h-8 mx-auto mb-3 opacity-30" />
            <p className="text-sm">No cheats found. Try a different search or category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function CheatCard({ cheat }: { cheat: Cheat }) {
  const [copied, setCopied] = useState<string | null>(null);

  function copy(val: string, key: string) {
    navigator.clipboard.writeText(val).catch(() => {});
    setCopied(key);
    setTimeout(() => setCopied(null), 1500);
  }

  return (
    <div className="border border-border bg-card rounded-md overflow-hidden hover:border-primary/20 transition-all">
      <div className="p-4 flex flex-col md:flex-row md:items-start gap-4">
        {/* Info */}
        <div className="flex-1 space-y-1.5">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-display font-semibold text-sm">{cheat.name}</h3>
            <span className="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 bg-secondary rounded text-muted-foreground border border-border">
              {cheat.category}
            </span>
            {cheat.disablesAchievements && (
              <span className="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded border text-amber-400 border-amber-500/30 bg-amber-500/10">
                ⚠ Disables Achievements
              </span>
            )}
          </div>
          <p className="text-xs text-muted-foreground">{cheat.effect}</p>
        </div>

        {/* Code blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:w-auto md:min-w-[520px]">
          {cheat.ps && (
            <CodeBlock
              icon={<Gamepad2 className="w-3 h-3" />}
              label="PlayStation"
              value={cheat.ps}
              copied={copied === "ps"}
              onCopy={() => copy(cheat.ps, "ps")}
            />
          )}
          {cheat.xbox && (
            <CodeBlock
              icon={<Gamepad2 className="w-3 h-3" />}
              label="Xbox"
              value={cheat.xbox}
              copied={copied === "xbox"}
              onCopy={() => copy(cheat.xbox, "xbox")}
            />
          )}
          {cheat.pc && (
            <CodeBlock
              icon={<Monitor className="w-3 h-3" />}
              label="PC"
              value={cheat.pc}
              copied={copied === "pc"}
              onCopy={() => copy(cheat.pc, "pc")}
            />
          )}
          {cheat.phone && (
            <CodeBlock
              icon={<Smartphone className="w-3 h-3" />}
              label="Phone"
              value={cheat.phone}
              copied={copied === "phone"}
              onCopy={() => copy(cheat.phone!, "phone")}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function CodeBlock({ icon, label, value, copied, onCopy }: {
  icon: React.ReactNode;
  label: string;
  value: string;
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <button
      onClick={onCopy}
      className="text-left p-2.5 rounded-md bg-secondary border border-border hover:border-primary/30 transition-colors group w-full"
    >
      <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground mb-1.5 uppercase tracking-wider">
        {icon}{label}
        <span className={`ml-auto transition-opacity text-emerald-400 ${copied ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`}>
          {copied ? "✓ Copied" : "Copy"}
        </span>
      </div>
      <div className="font-mono text-[11px] text-foreground leading-relaxed break-all">{value}</div>
    </button>
  );
}
