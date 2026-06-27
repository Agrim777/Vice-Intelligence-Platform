import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ChevronRight, Copy, Check } from "lucide-react";
import { setPageMeta } from "@/lib/seo";

export function GTA5MoneyCheatPage() {
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    setPageMeta({
      title: "GTA 5 Money Cheat — Does It Exist? (+ Best Money Methods)",
      description: "Is there a GTA 5 money cheat code? No — but there are fast money methods. Get the truth about GTA 5 money cheats and the best legitimate ways to make millions in GTA 5 and GTA Online.",
      path: "/gta5/money-cheat",
    });
  }, []);

  function copy(val: string, key: string) {
    navigator.clipboard.writeText(val).catch(() => {});
    setCopied(key);
    setTimeout(() => setCopied(null), 1500);
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
      <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
        <Link href="/"><span className="hover:text-primary cursor-pointer">Home</span></Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/cheats"><span className="hover:text-primary cursor-pointer">Cheats</span></Link>
        <ChevronRight className="w-3 h-3" />
        <span>GTA 5 Money Cheat</span>
      </div>

      <div>
        <h1 className="font-headline text-5xl md:text-6xl mb-3">GTA 5 MONEY CHEAT</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          <strong className="text-foreground">There is no GTA 5 money cheat code.</strong> Rockstar deliberately excluded a money cheat from GTA V (unlike GTA San Andreas which had "$250,000" cheat codes). However, there are fast ways to make millions — and GTA V has an in-game stock market exploit that's far better than any cheat.
        </p>
      </div>

      {/* Big truth box */}
      <div className="border border-red-500/30 bg-red-500/5 rounded-xl p-6">
        <div className="text-xs font-mono text-red-400 uppercase tracking-widest mb-2">⚠ No Money Cheat Exists</div>
        <h2 className="font-headline text-2xl text-foreground mb-2">GTA 5 Has No Money Cheat Code</h2>
        <p className="text-sm text-muted-foreground">Any website claiming "GTA 5 money cheat codes" is incorrect. Rockstar confirmed there is no money cheat in GTA V story mode or GTA Online. The cheats that do exist cover weapons, health, vehicles, and world effects — not money.</p>
        <div className="mt-3">
          <Link href="/cheats"><div className="text-sm text-primary hover:text-primary/80 cursor-pointer">→ See all real GTA 5 cheat codes</div></Link>
        </div>
      </div>

      {/* Lester Assassination method */}
      <div>
        <h2 className="font-headline text-2xl text-foreground mb-4">Best GTA 5 Story Mode Money Method — Lester's Assassinations</h2>
        <p className="text-sm text-muted-foreground mb-4">The Lester assassination missions paired with the in-game stock market is the most profitable method in GTA 5 story mode. Done correctly, you can earn $2 billion+ across all three characters.</p>
        <div className="space-y-3">
          {[
            { mission: "Hotel Assassination (required to proceed)", stock: "Betta Pharmaceuticals (BAWSAQ) — invest BEFORE mission. Sell after for ~80% return", timing: "Available early game — this one cannot be skipped" },
            { mission: "Multi-Target Assassination", stock: "Invest in Debonaire Cigarettes (LCN) BEFORE mission. After: switch to Redwood Cigarettes", timing: "Complete hotel first, then delay all others until end of game" },
            { mission: "Vice Assassination", stock: "Invest in Fruit Computers (BAWSAQ) BEFORE. Sell after. Then buy Facade (BAWSAQ)", timing: "Wait until you have $30M+ across all characters" },
            { mission: "Bus Assassination", stock: "Buy Vapid (BAWSAQ) after the mission. Sell after rise (~100% return)", timing: "Post-end of main story recommended" },
            { mission: "Construction Assassination", stock: "Buy Gold Coast Development (LCN) BEFORE mission. Sell after (~80% return)", timing: "Final assassination — finish the main story first for max cash" },
          ].map(({ mission, stock, timing }) => (
            <div key={mission} className="border border-border bg-card rounded-lg p-4">
              <div className="font-semibold text-foreground text-sm mb-1">{mission}</div>
              <div className="text-xs text-emerald-400 mb-1">📈 {stock}</div>
              <div className="text-xs text-muted-foreground">{timing}</div>
            </div>
          ))}
        </div>
      </div>

      {/* GTA Online Money Methods */}
      <div>
        <h2 className="font-headline text-2xl text-foreground mb-4">GTA Online Best Money Methods (2025)</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { method: "Cayo Perico Heist (Solo)", earn: "$1.0M–1.5M/hour", note: "Best solo money method. ~45 min per run. Panther statue is rarest/highest payout." },
            { method: "Diamond Casino Heist", earn: "$1.5M–2.5M/hour (crew)", note: "Diamonds give max payout. Silent & Sneaky approach with good crew." },
            { method: "Auto Shop Contract", earn: "$400k–600k/hour", note: "Great for small crews. Payphone hits can run in between." },
            { method: "VIP Work: Sightseer", earn: "$100k–150k/30 min", note: "Best fully solo passive income. Low risk, no setup cost." },
            { method: "MC Businesses (passive)", earn: "$300k–500k/hour passive", note: "Coke lockup pays best. Resupply in invite-only session." },
            { method: "Acid Lab", earn: "$340k/hour", note: "Low maintenance, decent return. Good for AFK money generation." },
          ].map(({ method, earn, note }) => (
            <div key={method} className="border border-border bg-card rounded-lg p-4">
              <div className="font-semibold text-foreground text-sm">{method}</div>
              <div className="font-headline text-lg text-emerald-400">{earn}</div>
              <div className="text-xs text-muted-foreground mt-1">{note}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-border bg-card rounded-xl p-5">
        <h3 className="font-display font-semibold text-sm mb-3">Related Pages</h3>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            { href: "/cheats", label: "GTA 5 Cheat Codes (All Platforms)" },
            { href: "/gta5/online-money", label: "GTA Online Money Making Guide" },
            { href: "/gta5/best-cars", label: "Best GTA 5 Cars" },
            { href: "/guides", label: "All GTA Guides" },
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
        <h2 className="font-headline text-3xl mb-4">GTA 5 Money FAQ</h2>
        <div className="space-y-2">
          {[
            { q: "Is there a GTA 5 money cheat code?", a: "No — Rockstar deliberately excluded a money cheat from GTA 5. Unlike GTA San Andreas (which had '$250,000 money' cheats) or GTA Vice City, GTA 5 has no money cheat for story mode or GTA Online. The best money method in story mode is the Lester assassination missions combined with strategic stock market investing." },
            { q: "What is the GTA 5 money glitch in 2025?", a: "Current GTA Online money glitches in 2025 include the Cayo Perico Heist exploit (running it back-to-back with minimal cooldown), certain duplication glitches for high-value cars, and passive business stacking in invite-only sessions. Rockstar patches these periodically. Check GTAForums for the most current working glitches." },
            { q: "How do you make money fast in GTA 5 story mode?", a: "The fastest method in GTA 5 story mode is the Lester assassination missions + stock market. Save all assassination missions until you've completed the main story (except Hotel Assassination which is mandatory). Then invest your full bankroll ($30M+ per character) in the correct stocks before each assassination. Done correctly, you can earn $2 billion across Michael, Trevor, and Franklin." },
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
