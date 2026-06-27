import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight, Clock, DollarSign } from "lucide-react";
import { setPageMeta } from "@/lib/seo";

const LAST_UPDATED = "2025-06-26";

export function GTA6PricePage() {
  useEffect(() => {
    setPageMeta({
      title: "GTA 6 Price — Standard Edition $79.99 vs Premium $99.99",
      description: "GTA 6 confirmed price: $79.99 Standard Edition and $99.99 Premium Edition. What's included in each, pre-order bonuses, and whether the Premium Edition is worth it.",
      path: "/gta6/price",
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
      <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
        <Link href="/"><span className="hover:text-primary cursor-pointer">Home</span></Link>
        <ChevronRight className="w-3 h-3" />
        <span>GTA 6 Price</span>
      </div>

      <div>
        <div className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest border border-primary/30 bg-primary/5 px-3 py-1.5 rounded-full mb-4">
          <DollarSign className="w-3 h-3" /> ✓ CONFIRMED PRICING
        </div>
        <h1 className="font-headline text-5xl md:text-6xl mb-3">GTA 6 PRICE</h1>
        <div className="text-xs text-muted-foreground font-mono mb-4 flex items-center gap-2">
          <Clock className="w-3 h-3" /> Last updated: {LAST_UPDATED}
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          GTA 6 is priced at <strong className="text-foreground">$79.99 for the Standard Edition</strong> and <strong className="text-foreground">$99.99 for the Premium Edition</strong>. Both editions include the full GTA 6 story mode and GTA Online 6 access.
        </p>
      </div>

      {/* Edition Cards */}
      <div className="grid md:grid-cols-2 gap-5">
        <div className="border border-border bg-card rounded-xl p-6">
          <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-2">Standard Edition</div>
          <div className="font-headline text-5xl text-foreground mb-1">$79.99</div>
          <div className="text-xs text-muted-foreground mb-5">PS5 · Xbox Series X|S · Digital & Physical</div>
          <ul className="space-y-2">
            {[
              "Full GTA 6 story campaign",
              "GTA Online 6 access (day one)",
              "Digital or physical disc version",
              "Standard pre-order bonus (where available)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-emerald-400 shrink-0">✓</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-primary/40 bg-primary/5 rounded-xl p-6 relative">
          <div className="absolute top-3 right-3 text-[9px] font-mono text-primary uppercase tracking-widest border border-primary/30 px-2 py-0.5 rounded-full">Recommended</div>
          <div className="text-[10px] font-mono text-primary uppercase tracking-widest mb-2">Premium Edition</div>
          <div className="font-headline text-5xl text-primary mb-1">$99.99</div>
          <div className="text-xs text-muted-foreground mb-5">PS5 · Xbox Series X|S · Digital & Physical</div>
          <ul className="space-y-2">
            {[
              "Everything in Standard Edition",
              "3 days early access",
              "Exclusive Lucia & Jason character skins (GTA Online 6)",
              "$1,000,000 GTA Online starting cash",
              "Exclusive in-game weapon pack",
              "Leonida-themed character cosmetic bundle",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary shrink-0">★</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <div>
          <h2 className="font-headline text-2xl text-foreground mb-3">Is GTA 6 the Most Expensive Game Ever?</h2>
          <p>At $79.99, GTA 6's Standard Edition is part of a growing trend of next-gen game pricing. Most major PS5 and Xbox Series X titles released from 2023 onwards are priced at $69.99–$79.99. GTA 6 sits at the upper end of this range, reflecting both its massive scope and Rockstar's premium brand positioning.</p>
          <p className="mt-3">For context: GTA V launched at $59.99 in 2013 (PS3/Xbox 360), and later at $69.99 for the PS5/Xbox Series version in 2022. The $79.99 pricing for GTA 6 represents a $10 increase over the previous-gen standard.</p>
        </div>

        <div>
          <h2 className="font-headline text-2xl text-foreground mb-3">Is the GTA 6 Premium Edition Worth It?</h2>
          <p>The main draw of the $99.99 Premium Edition is the <strong className="text-foreground">3 days early access</strong>. If you're planning to play GTA 6 at launch regardless, those 3 days are worth more than the $20 price difference for most dedicated fans — you avoid day-one server congestion and get a head-start in GTA Online 6.</p>
          <p className="mt-3">The $1M GTA Online starting cash and exclusive skins are nice bonuses but aren't game-changers. The weapon pack provides early combat options in Online. <strong className="text-foreground">Verdict: Premium Edition is worth it for day-one players; Standard Edition is fine if you're waiting for reviews or patches.</strong></p>
        </div>

        <div>
          <h2 className="font-headline text-2xl text-foreground mb-3">GTA 6 PC Price</h2>
          <p>Rockstar hasn't announced GTA 6 PC pricing yet. Based on historical patterns (GTA V PC launched at $59.99 when console was also $59.99), the PC version is expected to be priced equivalently to the console Standard Edition — likely $79.99 — when it launches in 2026.</p>
        </div>
      </div>

      {/* Related */}
      <div className="border border-border bg-card rounded-xl p-5">
        <h3 className="font-display font-semibold text-sm mb-3">Related Pages</h3>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            { href: "/gta6/pre-order", label: "GTA 6 Pre-Order Guide & Bonuses" },
            { href: "/gta6/platforms", label: "GTA 6 Platforms — PS5, Xbox & PC" },
            { href: "/gta6/release-date", label: "GTA 6 Release Date" },
            { href: "/gta6/system-requirements", label: "GTA 6 System Requirements (PC)" },
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
        <h2 className="font-headline text-3xl mb-4">GTA 6 Price FAQ</h2>
        <div className="space-y-2">
          {[
            { q: "How much does GTA 6 cost?", a: "GTA 6 costs $79.99 for the Standard Edition and $99.99 for the Premium Edition. The Premium Edition adds 3 days early access, $1M GTA Online cash, exclusive character skins, and a weapon pack. Both editions include the full story mode and GTA Online 6 access." },
            { q: "Will GTA 6 be free on PS Plus?", a: "Rockstar games are typically not available on PS Plus at launch. GTA V was eventually added to PS Plus Extra in 2022 — 9 years after release. Don't expect GTA 6 on PS Plus for many years after launch." },
            { q: "Is GTA 6 cheaper on PC?", a: "No pricing has been confirmed for the GTA 6 PC version, which launches after the console version. Historically, Rockstar prices PC versions the same as console versions at launch." },
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
