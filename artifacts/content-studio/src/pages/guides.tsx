import { useState } from "react";
import { Search, Clock, ChevronRight } from "lucide-react";
import { GUIDES, GUIDE_CATEGORIES, GUIDE_GAMES } from "@/data/guides";

export function Guides() {
  const [category, setCategory] = useState("All");
  const [game, setGame] = useState("All Games");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = GUIDES.filter((g) => {
    const matchCat = category === "All" || g.category === category;
    const matchGame = game === "All Games" || g.game.includes(game.replace("GTA V / GTA Online", "GTA"));
    const matchSearch = !search || g.title.toLowerCase().includes(search.toLowerCase()) || g.summary.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchGame && matchSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-8">
      <div>
        <h1 className="font-headline text-5xl md:text-6xl">GUIDE LIBRARY</h1>
        <p className="text-muted-foreground mt-2">In-depth guides for every GTA game — money methods, missions, secrets, completion, and more.</p>
      </div>

      {/* Filters */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search guides…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-card border border-border rounded-md pl-9 pr-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider self-center">Game:</span>
          {GUIDE_GAMES.map((g) => (
            <button
              key={g}
              onClick={() => setGame(g)}
              className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors border ${
                game === g ? "bg-primary/15 text-primary border-primary/40" : "bg-secondary text-muted-foreground border-border hover:text-foreground"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
        <div className="flex gap-2 flex-wrap">
          <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider self-center">Category:</span>
          {GUIDE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors border ${
                category === cat ? "bg-primary/15 text-primary border-primary/40" : "bg-secondary text-muted-foreground border-border hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="text-sm text-muted-foreground font-mono">
        <span className="text-foreground font-semibold">{filtered.length}</span> guides found
      </div>

      {/* Guides */}
      <div className="grid grid-cols-1 gap-3">
        {filtered.map((guide) => {
          const isOpen = expanded === guide.id;
          return (
            <div key={guide.id} className={`border rounded-md bg-card transition-all ${isOpen ? "border-primary/30" : "border-border hover:border-primary/20"}`}>
              <button
                onClick={() => setExpanded(isOpen ? null : guide.id)}
                className="w-full text-left p-5 flex items-start gap-4"
              >
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-secondary rounded text-muted-foreground border border-border">{guide.game}</span>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-secondary rounded text-muted-foreground border border-border">{guide.category}</span>
                    <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border ${
                      guide.difficulty === "Beginner" ? "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" :
                      guide.difficulty === "Advanced" ? "text-red-400 border-red-500/30 bg-red-500/10" :
                      "text-amber-400 border-amber-500/30 bg-amber-500/10"
                    }`}>{guide.difficulty}</span>
                  </div>
                  <h3 className="font-display font-semibold text-sm leading-snug">{guide.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{guide.summary}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {guide.timeRequired}</span>
                    <span className="text-emerald-400 font-mono font-semibold">{guide.reward}</span>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 text-muted-foreground shrink-0 mt-1 transition-transform ${isOpen ? "rotate-90" : ""}`} />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 border-t border-border">
                  <div className="pt-4 space-y-2">
                    <div className="text-xs font-mono uppercase tracking-widest text-primary mb-3">Pro Tips</div>
                    <ul className="space-y-2">
                      {guide.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary text-[10px] font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {filtered.length === 0 && (
          <div className="py-16 text-center text-muted-foreground border border-dashed border-border rounded-md">
            <Search className="w-8 h-8 mx-auto mb-3 opacity-30" />
            <p className="text-sm">No guides found. Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
