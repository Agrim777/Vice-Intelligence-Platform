import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight, Clock, Check, Star } from "lucide-react";
import { setPageMeta } from "@/lib/seo";

const LAST_UPDATED = "2026-06-26";

export function GTA6EditionsPage() {
  useEffect(() => {
    setPageMeta({
      title: "GTA 6 Editions Guide — Standard vs Ultimate, Vintage Vice City Pack Explained",
      description: "GTA 6 comes in two editions: Standard ($79.99) and Ultimate ($99.99). All pre-orders get the Vintage Vice City Pack. Here's exactly what each edition includes and which is worth it.",
      path: "/gta6/editions",
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
      {/* Breadcrumb */}
      <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
        <Link href="/"><span className="hover:text-primary cursor-pointer">Home</span></Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/gta6/release-date"><span className="hover:text-primary cursor-pointer">GTA 6</span></Link>
        <ChevronRight className="w-3 h-3" />
        GTA 6 Editions
      </div>

      {/* Hero */}
      <div>
        <div className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest border border-primary/30 bg-primary/5 px-3 py-1.5 rounded-full mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block" />
          ✓ OFFICIAL — JUNE 25, 2026
        </div>
        <h1 className="font-headline text-5xl md:text-6xl mb-3">GTA 6 EDITIONS GUIDE</h1>
        <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono mb-4">
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Last updated: {LAST_UPDATED}</span>
          <span>·</span><span>GTA6Guide.in</span>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          GTA 6 launches <strong className="text-foreground">November 19, 2026</strong> in two editions: the <strong className="text-foreground">Standard Edition ($79.99)</strong> and the <strong className="text-foreground">Ultimate Edition ($99.99)</strong>. All pre-orders — in either edition — receive the <strong className="text-foreground">Vintage Vice City Pack</strong> as a bonus. Here's what you actually get in each.
        </p>
      </div>

      {/* Quick comparison */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Standard */}
        <div className="border border-border bg-card rounded-xl p-6">
          <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Standard Edition</div>
          <div className="font-headline text-4xl text-foreground mb-1">$79.99</div>
          <div className="text-xs text-muted-foreground mb-4">PS5 · Xbox Series X|S</div>
          <ul className="space-y-2">
            {[
              "Full GTA 6 story mode (Jason & Lucia)",
              "GTA Online 6 access (free update post-launch)",
              "Vintage Vice City Pack (pre-order bonus)",
              "Physical or digital (code-in-box for physical)",
            ].map(item => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> {item}
              </li>
            ))}
          </ul>
          <div className="mt-5 pt-4 border-t border-border">
            <div className="text-xs text-muted-foreground">Best for: Players who just want the game</div>
          </div>
        </div>

        {/* Ultimate */}
        <div className="border border-primary/40 bg-primary/5 rounded-xl p-6 relative">
          <div className="absolute top-4 right-4">
            <div className="flex items-center gap-1 text-[10px] font-mono text-primary border border-primary/30 bg-primary/10 px-2 py-1 rounded-full">
              <Star className="w-3 h-3" /> MOST CONTENT
            </div>
          </div>
          <div className="text-xs font-mono text-primary uppercase tracking-widest mb-2">Ultimate Edition</div>
          <div className="font-headline text-4xl text-foreground mb-1">$99.99</div>
          <div className="text-xs text-muted-foreground mb-4">PS5 · Xbox Series X|S</div>
          <ul className="space-y-2">
            {[
              "Everything in Standard Edition",
              "Exclusive premium vehicles (both story modes)",
              "Exclusive weapons for Lucia & Jason",
              "Exclusive apparel/outfits for Lucia & Jason",
              "Additional GTA Online 6 starting benefits",
              "Vintage Vice City Pack (pre-order bonus)",
            ].map(item => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {item}
              </li>
            ))}
          </ul>
          <div className="mt-5 pt-4 border-t border-primary/20">
            <div className="text-xs text-muted-foreground">Best for: Players who want every cosmetic and vehicle</div>
          </div>
        </div>
      </div>

      {/* Vintage Vice City Pack */}
      <div className="border border-amber-500/20 bg-amber-500/5 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="text-xs font-mono text-amber-400 uppercase tracking-widest border border-amber-500/30 px-2 py-1 rounded">PRE-ORDER BONUS</div>
          <div className="text-xs font-mono text-muted-foreground">All editions · While pre-orders last</div>
        </div>
        <h2 className="font-headline text-3xl text-foreground mb-2">Vintage Vice City Pack</h2>
        <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
          Pre-order any edition of GTA 6 before launch and receive the Vintage Vice City Pack — a nostalgia bundle that flashes back to when Vice City's neon burned brightest. Inspired by the original GTA Vice City (2002) era.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { category: "Vehicles (5 total)", items: ["Infernus Classic — iconic Vice City supercar", "Stinger GT — retro convertible", "3 additional throwback 1980s vehicles"] },
            { category: "Outfits & Weapons", items: ["1980s Vice City outfit set for Lucia", "1980s Vice City outfit set for Jason", "Gold-and-chrome retro weapon skin pack"] },
          ].map(({ category, items }) => (
            <div key={category} className="bg-background/60 rounded-lg p-4 border border-amber-500/10">
              <div className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">{category}</div>
              <ul className="space-y-1.5">
                {items.map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-4">All Vintage Vice City Pack items are usable in both story mode and GTA Online 6.</p>
      </div>

      {/* Physical vs Digital */}
      <div className="border border-border bg-card rounded-xl p-6 space-y-4">
        <h2 className="font-headline text-2xl">Physical vs Digital — Important Note</h2>
        <div className="border border-amber-500/20 bg-amber-500/5 rounded-lg p-4">
          <div className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">⚠ CODE IN A BOX</div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The physical edition of GTA 6 does <strong className="text-foreground">not include a disc</strong>. Both the physical Standard and Ultimate editions are "code in a box" — you get a retail box with a download code inside, but no Blu-ray disc. This mirrors the trend set by several recent AAA titles. The game is too large for a single disc at PS5/Xbox quality.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          {[
            { label: "Digital Edition", pros: ["Instant download", "No disc needed", "Pre-load before Nov 19"], cons: ["Tied to your account", "Large download (~150GB est.)"] },
            { label: "Physical Edition (Code in Box)", pros: ["Physical collectible box", "Can gift-wrap", "Same price as digital"], cons: ["Still requires internet to download", "No disc — just a code"] },
          ].map(({ label, pros, cons }) => (
            <div key={label} className="bg-background/60 border border-border rounded-lg p-4">
              <div className="font-mono text-xs uppercase tracking-widest text-foreground mb-3">{label}</div>
              <div className="text-xs text-emerald-400 uppercase tracking-widest mb-1">Pros</div>
              <ul className="space-y-1 mb-3">
                {pros.map(p => <li key={p} className="text-muted-foreground flex items-start gap-1.5"><Check className="w-3 h-3 text-emerald-400 mt-0.5 shrink-0" />{p}</li>)}
              </ul>
              <div className="text-xs text-red-400 uppercase tracking-widest mb-1">Cons</div>
              <ul className="space-y-1">
                {cons.map(c => <li key={c} className="text-muted-foreground flex items-start gap-1.5"><span className="text-red-400 shrink-0 text-xs mt-0.5">✕</span>{c}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Where to buy */}
      <div className="border border-border bg-card rounded-xl p-6 space-y-4">
        <h2 className="font-headline text-2xl">Where to Pre-Order GTA 6</h2>
        <p className="text-sm text-muted-foreground">Pre-orders are live now. You can pre-order from any major digital or physical retailer. Remember: you must pre-order before launch to guarantee the Vintage Vice City Pack.</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { store: "PlayStation Store (Digital)", note: "Best for PS5 players. Pre-load guaranteed." },
            { store: "Xbox Store (Digital)", note: "Best for Xbox Series X|S players." },
            { store: "Amazon", note: "Physical box. Ships day one. Free Prime shipping." },
            { store: "GameStop / GAME", note: "Physical box. In-store pickup option." },
            { store: "Best Buy / Target", note: "Physical box. Price match guarantee." },
            { store: "Walmart", note: "Physical box. Reserve online, pick up in store." },
          ].map(({ store, note }) => (
            <div key={store} className="border border-border rounded-lg px-4 py-3">
              <div className="font-display font-semibold text-sm text-foreground">{store}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{note}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Ultimate Edition: is it worth it? */}
      <div className="space-y-4">
        <h2 className="font-headline text-3xl">Is the GTA 6 Ultimate Edition Worth It?</h2>
        <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
          <p>The Ultimate Edition costs <strong className="text-foreground">$20 more</strong> than Standard ($99.99 vs $79.99). For that extra $20 you get exclusive vehicles, weapons, and outfits woven into the story — and presumably additional GTA Online 6 starting bonuses when Online launches.</p>
          <p><strong className="text-foreground">If you're a GTA Online player:</strong> The Ultimate Edition is likely worth it. Based on GTA V Online's pattern, Ultimate Edition players typically receive extra GTA$ to spend in Online, bonus vehicles, and a head start on in-game progress.</p>
          <p><strong className="text-foreground">If you're story-mode only:</strong> Standard Edition is perfectly fine. The Vintage Vice City pre-order pack (included in both) gives you enough cosmetic variety for launch, and the story content is identical between editions.</p>
          <p><strong className="text-foreground">Collector's note:</strong> Neither edition includes a disc. If you're buying physical for the box/collectible value, the Ultimate Edition box is expected to be larger with additional packaging, though Rockstar hasn't confirmed packaging details yet.</p>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="font-headline text-3xl mb-4">GTA 6 Editions FAQ</h2>
        <div className="space-y-2">
          {[
            { q: "What editions of GTA 6 are available?", a: "GTA 6 comes in two editions: Standard Edition ($79.99) and Ultimate Edition ($99.99). Both are available for PS5 and Xbox Series X|S in digital and physical formats. The physical format is a code-in-a-box (no disc included)." },
            { q: "What is the Vintage Vice City Pack?", a: "The Vintage Vice City Pack is the pre-order bonus for GTA 6. It includes 5 throwback vehicles (including the Infernus Classic and Stinger GT), 1980s-themed outfits for both Lucia and Jason, and a retro gold-and-chrome weapon skin pack. All items are usable in both story mode and GTA Online 6." },
            { q: "Do I need to pre-order to get the Vintage Vice City Pack?", a: "Yes — the Vintage Vice City Pack is a pre-order bonus only. You must pre-order GTA 6 before the November 19, 2026 launch to receive it. Pre-orders opened June 25, 2026." },
            { q: "What does the GTA 6 Ultimate Edition include that Standard doesn't?", a: "The Ultimate Edition adds exclusive premium vehicles, weapons, and apparel for both Lucia and Jason, woven into the game's narrative. It also includes additional GTA Online 6 starting benefits (details TBC). Standard Edition players get the same story content — the extras are cosmetic/bonus items." },
            { q: "Is GTA 6 available on PC?", a: "GTA 6 launches on PS5 and Xbox Series X|S only on November 19, 2026. A PC version is confirmed but without a date — historically Rockstar releases PC versions 12-18 months after console. Expect a PC version in 2027 or 2028." },
            { q: "Will GTA Online 6 be available at launch?", a: "No — GTA Online 6 is not included at the November 19, 2026 launch. GTA 6 launches as story mode only. GTA Online 6 will arrive as a free post-launch update for all GTA 6 owners, with early 2027 reported as the likely window." },
          ].map(({ q, a }, i) => (
            <details key={i} className="group border border-border bg-card rounded-md overflow-hidden">
              <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none hover:bg-secondary/30 transition-colors">
                <h3 className="font-display font-semibold text-sm">{q}</h3>
                <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-4 pb-4 pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Related */}
      <div className="border border-border bg-card rounded-xl p-5">
        <h3 className="font-display font-semibold text-sm mb-3">More GTA 6 Guides</h3>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            { href: "/gta6/pre-order", label: "GTA 6 Pre-Order Guide — Where to Buy & Bonuses" },
            { href: "/gta6/price", label: "GTA 6 Price — Standard vs Ultimate Breakdown" },
            { href: "/gta6/release-date", label: "GTA 6 Release Date — November 19, 2026" },
            { href: "/gta6/platforms", label: "GTA 6 Platforms — PS5, Xbox & PC" },
            { href: "/gta6/online", label: "GTA 6 Online — When Is It Available?" },
            { href: "/gta6/characters", label: "GTA 6 Characters — Lucia & Jason" },
          ].map(({ href, label }) => (
            <Link key={href} href={href}>
              <div className="text-sm text-primary hover:text-primary/80 flex items-center gap-2 cursor-pointer py-1">
                <ChevronRight className="w-3.5 h-3.5 shrink-0" /> {label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
