import { useState, useEffect } from "react";
import { Search, Gamepad2, Monitor, Smartphone, ChevronDown, ChevronUp } from "lucide-react";
import { CHEAT_GAMES, CATEGORIES, type Cheat } from "@/data/cheats";
import { setPageMeta } from "@/lib/seo";

const HOW_TO_ENTER: Record<string, { ps: string; xbox: string; pc: string; phone?: string; notes?: string[] }> = {
  "gta5": {
    ps: "Pause the game is NOT required. Enter the button sequence quickly on the controller — you'll see a small confirmation message appear top-left of screen.",
    xbox: "Same as PlayStation — enter the button sequence during gameplay. No pause menu required.",
    pc: "During gameplay, press the tilde key (~) to open the console, then type the cheat word and press Enter. Or type directly without opening the console on some versions.",
    phone: "Open your in-game phone → Contacts → dial the number. The cheat activates immediately.",
    notes: [
      "Cheats marked ⚠ 'Disables Achievements' will block trophies/achievements for that session — reloading a save restores them.",
      "GTA Online cheats: most cheat codes do NOT work in GTA Online multiplayer sessions — story mode only.",
      "Cheat codes do not save — you must re-enter them each session.",
      "Some cheats stack: use Slow Motion 3× for maximum effect.",
    ],
  },
  "san-andreas": {
    ps: "Enter the button sequence during gameplay — no pause required. A text message confirms activation.",
    xbox: "Same as PlayStation. Enter button sequence during gameplay.",
    pc: "Type the cheat word directly during gameplay (no console needed). A small message confirms it worked.",
    notes: [
      "San Andreas cheats do NOT disable achievements on PS2/Xbox original. PC and remastered versions vary.",
      "Some cheats permanently affect your save if used at wrong times — 'RECRUIT ANYONE' can break gang AI.",
      "Best cheat combos: Jetpack + Infinite Health = explore the map freely. Rhino Tank + Max Wanted Level = ultimate chaos sandbox.",
      "Cheat effects persist until you load a save or enter the opposite cheat (e.g., sunny weather vs foggy weather).",
    ],
  },
  "vice-city": {
    ps: "Enter during gameplay — no pause. Confirmation text appears briefly on screen.",
    xbox: "Enter during gameplay. Confirmation message appears.",
    pc: "Type the cheat word during gameplay. No console prefix needed.",
    notes: [
      "Vice City cheats don't disable achievements (original versions had no achievement system).",
      "Skin cheats (like 'CERTAINDEATH' for bikini girl) change Tommy's appearance permanently until you load or enter another skin cheat.",
      "Best cheat combos: PANZER (Rhino) + PRECIOUSPROTECTION (armor) + LEAVEMEALONE (wanted level) = indestructible Tommy.",
      "The 'BIGBANG' cheat explodes every vehicle nearby — use with caution near your own car.",
    ],
  },
  "gta4": {
    ps: "Open your in-game phone → dial the number shown.",
    xbox: "Open your in-game phone → dial the number shown.",
    pc: "Open your in-game phone (F1) → dial the number.",
    notes: [
      "GTA IV ONLY uses phone number cheats — there are no button sequence cheats.",
      "Cheats disable achievements permanently for that save file in GTA IV — use a separate save slot.",
      "Weapon sets replace your current loadout — use only when you need a full restock.",
      "Best combo: Max Health + Max Armor + Wanted Level Remover = near-invincible Niko for exploration.",
    ],
  },
  "gta3": {
    ps: "Enter the button sequence during gameplay. No pause needed. Confirmation appears briefly.",
    xbox: "Enter during gameplay.",
    pc: "Type the cheat word directly during gameplay.",
    notes: [
      "GTA III cheats don't disable achievements (the game predates modern achievement systems).",
      "The 'ILIKEDRESSINGUP' cheat cycles through random pedestrian skins for Claude.",
      "Best combo: Tank cheat + Flying Cars cheat = the most chaotic experience in GTA history.",
      "Weapons cheats in GTA III give ALL weapons at once — ideal for story progression if stuck.",
    ],
  },
};

export function Cheats() {
  const [selectedGame, setSelectedGame] = useState(CHEAT_GAMES[0].slug);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [showHowTo, setShowHowTo] = useState(false);

  useEffect(() => {
    setPageMeta({
      title: "GTA Cheat Codes — All Games, All Platforms (PS, Xbox, PC, Phone)",
      description: "Complete GTA cheat code database for every game: GTA 5, GTA San Andreas, Vice City, GTA 4, and GTA 3. PS, Xbox, PC keyboard codes and phone numbers. Updated 2025.",
      path: "/cheats",
    });
  }, []);

  const game = CHEAT_GAMES.find((g) => g.slug === selectedGame) ?? CHEAT_GAMES[0];
  const howTo = HOW_TO_ENTER[selectedGame];
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
        <p className="text-muted-foreground mt-2">Every cheat code for every GTA game — PS, Xbox, PC, and phone numbers. Click any code to copy it.</p>
      </div>

      {/* Game Selector */}
      <div className="flex flex-wrap gap-2">
        {CHEAT_GAMES.map((g) => (
          <button
            key={g.slug}
            onClick={() => { setSelectedGame(g.slug); setCategory("All"); setSearch(""); setShowHowTo(false); }}
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

      {/* How to Enter Cheats — collapsible */}
      {howTo && (
        <div className="border border-primary/20 bg-primary/5 rounded-xl overflow-hidden">
          <button
            onClick={() => setShowHowTo(!showHowTo)}
            className="w-full flex items-center justify-between px-5 py-4 text-left"
          >
            <div>
              <span className="text-xs font-mono text-primary uppercase tracking-widest">How to Enter Cheats</span>
              <p className="text-sm font-semibold mt-0.5">Platform instructions & important notes for {game.game}</p>
            </div>
            {showHowTo ? <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" /> : <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />}
          </button>

          {showHowTo && (
            <div className="px-5 pb-5 border-t border-primary/10 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                {[
                  { label: "PlayStation", icon: <Gamepad2 className="w-3.5 h-3.5" />, text: howTo.ps },
                  { label: "Xbox", icon: <Gamepad2 className="w-3.5 h-3.5" />, text: howTo.xbox },
                  { label: "PC", icon: <Monitor className="w-3.5 h-3.5" />, text: howTo.pc },
                  ...(howTo.phone ? [{ label: "Phone (GTA V)", icon: <Smartphone className="w-3.5 h-3.5" />, text: howTo.phone }] : []),
                ].map(({ label, icon, text }) => (
                  <div key={label} className="bg-background/50 rounded-lg p-3">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">{icon} {label}</div>
                    <p className="text-xs text-foreground leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
              {howTo.notes && (
                <div className="space-y-1.5">
                  <div className="text-xs font-mono text-primary uppercase tracking-widest">Important Notes & Best Combos</div>
                  <ul className="space-y-1.5">
                    {howTo.notes.map((note, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="text-primary shrink-0 mt-0.5">→</span> {note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}

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

      {/* SEO Content */}
      <div className="bg-card border border-border rounded-xl p-6 space-y-4">
        <h2 className="font-headline text-2xl">About GTA Cheat Codes</h2>
        <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground leading-relaxed">
          <div>
            <h3 className="font-semibold text-foreground mb-1">GTA 5 Cheats</h3>
            <p>GTA V has 26 cheat codes usable in story mode. They cover player boosts, vehicles, weapons, and world effects. Cheats are entered via button sequences, PC console commands, or phone numbers. They do NOT work in GTA Online.</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">GTA San Andreas Cheats</h3>
            <p>San Andreas has 90+ cheats covering CJ's stats, vehicles, weapons, gang behavior, and weather. They're the most varied of any GTA title. Most don't disable achievements on the original console versions.</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">GTA Vice City Cheats</h3>
            <p>Vice City has 88 cheats split across player, vehicle, combat, and world effects. Tommy Vercetti can be made nearly invincible with the right combination of health, armor, and wanted-level cheats.</p>
          </div>
        </div>
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
