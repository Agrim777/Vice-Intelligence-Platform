import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight, DollarSign } from "lucide-react";
import { setPageMeta } from "@/lib/seo";

const METHODS = [
  { name: "Cayo Perico Heist (Solo)", hourly: "$1.0M–1.5M/hr", setup: "~$25,000", difficulty: "Intermediate", time: "45–60 min/run", type: "Solo", description: "The best solo money method in GTA Online. Target the Panther Statue or Pink Diamond for max payout. Run in invite-only session, prep efficiently with Kosatka submarine, and aim for sub-15 minute finale times once experienced.", tips: ["Buy the Kosatka submarine ($2.2M from Warstock) to start", "Target Panther Statue when available — highest payout (~$1.5M solo)", "Scope out El Rubio's compound before every run", "Use the drainage pipe entry point for silent approach"] },
  { name: "Diamond Casino Heist (4-player)", hourly: "$1.5M–2.5M/hr", setup: "$25,000–$100,000", difficulty: "Advanced", time: "2–4 hours", type: "Crew (4)", description: "Best crew money method when diamonds are available. Silent & Sneaky approach pays full cut with no deaths. Use Avi Schwartzman as hacker (10% cut) for maximum vault time.", tips: ["Scope target: Diamonds > Artwork > Gold > Cash", "Approach: Silent & Sneaky for max payout", "Use Avi Schwartzman (unlock via Avi's Peyote heist) for best hacker", "Prep in invite-only session, run finale in public if needed"] },
  { name: "Auto Shop Contracts", hourly: "$400k–600k/hr", setup: "$1,670,000 (Auto Shop)", difficulty: "Intermediate", time: "30–45 min each", type: "Solo/Small crew", description: "Great for smaller crews. Contracts pay $200k–400k each with low risk. Payphone Assassination hits can be stacked in between for bonus cash.", tips: ["Agency contract: The Bank Contract pays most (~$650k)", "Run payphone hits ($15k + $85k bonus) between contracts", "Auto shop is a solid passive business on the side"] },
  { name: "VIP Work: Sightseer", hourly: "$100k–150k/30min", setup: "Need $50k for CEO/VIP status", difficulty: "Beginner", time: "10–15 min each", type: "Solo", description: "Best pure-solo passive income. Sightseer delivers 3 packages across the map for ~$22k + $5k RP. Low risk, no enemy AI combat required.", tips: ["Start as VIP (costs $50k in interaction menu)", "Stack Coke Lockup or MC businesses running passively while doing VIP work", "Change session between Sightseer attempts to reset timer"] },
  { name: "MC Businesses (Passive)", hourly: "$300k–500k/hr (passive)", setup: "$975,000 for Coke", difficulty: "Beginner", time: "Check-in every few hours", type: "Passive", description: "MC businesses generate income passively while you play. Cocaine lockup pays best (~$420k per sale). Run in invite-only to avoid rival players.", tips: ["Coke Lockup: best payout at ~$420k per sale (full stock)", "Resupply in invite-only sessions to avoid griefing", "Sell in low-pop public session for reduced competition", "Stack with CEO business for double passive income"] },
  { name: "Acid Lab", hourly: "$340k/hr", setup: "$750,000 (Fooligan jobs unlock)", difficulty: "Beginner", time: "2 hours to fill stock", type: "Solo/Passive", description: "Low maintenance passive business. Upgrade the Acid Lab for higher production rates. Good for AFK grinding while you do other activities.", tips: ["Complete Fooligan jobs to unlock Acid Lab", "Upgrade Chemical Mixture and Equipment for 2× production", "Sell when stock is full — don't partial sell for efficiency"] },
];

export function GTA5OnlineMoneyPage() {
  useEffect(() => {
    setPageMeta({
      title: "GTA Online Money Making Guide 2025 — Best Methods & Fastest Strategies",
      description: "The definitive GTA Online money guide for 2025. Best money methods ranked by hourly rate: Cayo Perico Heist, Casino Heist, Auto Shop, VIP Work, and passive businesses. Solo and crew options.",
      path: "/gta5/online-money",
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
      <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
        <Link href="/"><span className="hover:text-primary cursor-pointer">Home</span></Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/guides"><span className="hover:text-primary cursor-pointer">Guides</span></Link>
        <ChevronRight className="w-3 h-3" />
        <span>GTA Online Money Guide</span>
      </div>

      <div>
        <h1 className="font-headline text-5xl md:text-6xl mb-3">GTA ONLINE MONEY GUIDE</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          The best GTA Online money-making methods in 2025 — ranked by hourly income. Whether you're solo or playing with a crew, these are the fastest ways to make millions in GTA Online.
        </p>
      </div>

      {/* Quick earnings table */}
      <div className="border border-border bg-card rounded-xl overflow-hidden">
        <div className="px-5 py-3 border-b border-border bg-secondary/30">
          <div className="grid grid-cols-4 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
            <div>Method</div>
            <div>Hourly</div>
            <div>Type</div>
            <div>Difficulty</div>
          </div>
        </div>
        {METHODS.map(({ name, hourly, type, difficulty }) => (
          <div key={name} className="px-5 py-3 border-b border-border last:border-0 hover:bg-secondary/20 transition-colors">
            <div className="grid grid-cols-4 text-xs">
              <div className="font-semibold text-foreground">{name}</div>
              <div className="text-emerald-400 font-mono">{hourly}</div>
              <div className="text-muted-foreground">{type}</div>
              <div className={`font-mono ${difficulty === "Beginner" ? "text-emerald-400" : difficulty === "Advanced" ? "text-red-400" : "text-amber-400"}`}>{difficulty}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed methods */}
      <div className="space-y-5">
        {METHODS.map(({ name, hourly, setup, difficulty, time, type, description, tips }) => (
          <div key={name} className="border border-border bg-card rounded-xl p-5">
            <div className="flex items-start justify-between gap-3 mb-3">
              <h2 className="font-headline text-xl text-foreground">{name}</h2>
              <div className="font-headline text-lg text-emerald-400 shrink-0">{hourly}</div>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-3 text-xs">
              <div className="bg-secondary/50 rounded px-2 py-1.5"><div className="text-muted-foreground text-[9px] uppercase tracking-widest">Setup Cost</div><div className="font-semibold text-foreground">{setup}</div></div>
              <div className="bg-secondary/50 rounded px-2 py-1.5"><div className="text-muted-foreground text-[9px] uppercase tracking-widest">Session Time</div><div className="font-semibold text-foreground">{time}</div></div>
              <div className="bg-secondary/50 rounded px-2 py-1.5"><div className="text-muted-foreground text-[9px] uppercase tracking-widest">Players</div><div className="font-semibold text-foreground">{type}</div></div>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{description}</p>
            <ul className="space-y-1">
              {tips.map((tip) => (
                <li key={tip} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="text-primary shrink-0">→</span> {tip}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border border-border bg-card rounded-xl p-5">
        <h3 className="font-display font-semibold text-sm mb-3">Related Pages</h3>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            { href: "/gta5/money-cheat", label: "GTA 5 Money Cheat (Does It Exist?)" },
            { href: "/gta5/best-cars", label: "Best GTA 5 Cars" },
            { href: "/guides", label: "All GTA Guides" },
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
        <h2 className="font-headline text-3xl mb-4">GTA Online Money FAQ</h2>
        <div className="space-y-2">
          {[
            { q: "What is the best way to make money in GTA Online in 2025?", a: "The best solo money method in GTA Online in 2025 is the Cayo Perico Heist, earning $1.0M–1.5M per hour. For crew play, the Diamond Casino Heist (targeting Diamonds) is top-tier at $1.5M–2.5M/hour with a good 4-player team. For passive income, stacking MC businesses (especially Coke Lockup) with CEO work generates $500k+/hour with minimal active play." },
            { q: "How do you make money fast in GTA Online for beginners?", a: "For new GTA Online players: start with Contact Missions (Simeon's repo jobs are fastest early), save for VIP status ($50k), run Sightseer for consistent cash, then work toward the Cayo Perico Heist (requires $2.2M Kosatka submarine). The grind gets significantly easier once you have the Kosatka." },
            { q: "Is there a GTA Online money glitch in 2025?", a: "Rockstar regularly patches money glitches. Current community-reported exploits in mid-2025 include car duplication glitches for specific vehicles and certain time-save exploits in heist setups. Check GTAForums or Reddit's r/gtaonline for the most current working methods as Rockstar patches these periodically." },
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
