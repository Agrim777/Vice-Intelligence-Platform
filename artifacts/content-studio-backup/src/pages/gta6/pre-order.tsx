import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight, Clock, ShoppingCart } from "lucide-react";
import { setPageMeta } from "@/lib/seo";

const LAST_UPDATED = "2025-06-26";

export function GTA6PreOrderPage() {
  useEffect(() => {
    setPageMeta({
      title: "GTA 6 Pre-Order — Where to Buy, Bonuses & Which Edition to Get",
      description: "GTA 6 pre-order guide: where to buy (PlayStation Store, Xbox, Amazon, GameStop), pre-order bonuses, Standard vs Premium Edition comparison, and digital vs physical.",
      path: "/gta6/pre-order",
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
      <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
        <Link href="/"><span className="hover:text-primary cursor-pointer">Home</span></Link>
        <ChevronRight className="w-3 h-3" />
        <span>GTA 6 Pre-Order</span>
      </div>

      <div>
        <div className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest border border-primary/30 bg-primary/5 px-3 py-1.5 rounded-full mb-4">
          <ShoppingCart className="w-3 h-3" /> Pre-Orders Now Live
        </div>
        <h1 className="font-headline text-5xl md:text-6xl mb-3">GTA 6 PRE-ORDER</h1>
        <div className="text-xs text-muted-foreground font-mono mb-4 flex items-center gap-2">
          <Clock className="w-3 h-3" /> Last updated: {LAST_UPDATED}
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          GTA 6 pre-orders are now open across all major retailers. Standard Edition is $79.99 and Premium Edition is $99.99. Pre-ordering includes an exclusive vehicle and cosmetic bundle.
        </p>
      </div>

      {/* Where to Buy */}
      <div>
        <h2 className="font-headline text-2xl text-foreground mb-4">Where to Pre-Order GTA 6</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { store: "PlayStation Store", platform: "PS5 Digital", note: "Official Sony digital store — download day one. No disc required.", bonus: "Standard pre-order bonus included" },
            { store: "Xbox Store", platform: "Xbox Digital", note: "Official Microsoft digital store — plays on Xbox Series X and S.", bonus: "Standard pre-order bonus included" },
            { store: "Amazon", platform: "Physical Disc (PS5/Xbox)", note: "Physical copy — can resell or lend. Ships to arrive by launch day.", bonus: "Standard pre-order bonus" },
            { store: "GameStop", platform: "Physical Disc", note: "In-store pickup available. GameStop may offer exclusive physical bonus.", bonus: "Store-exclusive bonus (unconfirmed)" },
            { store: "Best Buy", platform: "Physical Disc", note: "My Best Buy members may get bonus rewards.", bonus: "Standard pre-order bonus" },
            { store: "Walmart", platform: "Physical Disc", note: "Available for in-store pickup or home delivery.", bonus: "Standard pre-order bonus" },
          ].map(({ store, platform, note, bonus }) => (
            <div key={store} className="border border-border bg-card rounded-lg p-4">
              <div className="font-display font-bold text-sm text-foreground">{store}</div>
              <div className="text-[10px] font-mono text-primary uppercase tracking-widest mt-0.5 mb-2">{platform}</div>
              <p className="text-xs text-muted-foreground mb-2">{note}</p>
              <div className="text-[10px] text-emerald-400">{bonus}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Pre-order Bonuses */}
      <div className="border border-primary/30 bg-primary/5 rounded-xl p-5">
        <h2 className="font-headline text-2xl mb-3">GTA 6 Pre-Order Bonuses</h2>
        <div className="space-y-2">
          {[
            { item: "Exclusive GTA Online 6 vehicle", detail: "A unique vehicle available only to players who pre-order — specific model not yet revealed" },
            { item: "Leonida character cosmetic pack", detail: "Exclusive clothing set themed around the Leonida setting" },
            { item: "Early access (Premium Edition only)", detail: "Premium Edition pre-orders get 3 days early access before standard release" },
            { item: "$1M GTA Online cash (Premium Edition only)", detail: "Starting cash for GTA Online 6 — Premium Edition exclusive" },
          ].map(({ item, detail }) => (
            <div key={item} className="flex items-start gap-3">
              <span className="text-primary shrink-0">★</span>
              <div>
                <div className="text-sm font-semibold text-foreground">{item}</div>
                <div className="text-xs text-muted-foreground">{detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-5 text-sm text-muted-foreground leading-relaxed">
        <div>
          <h2 className="font-headline text-2xl text-foreground mb-3">Should You Pre-Order GTA 6?</h2>
          <p>Pre-ordering GTA 6 makes sense if you're certain you'll buy it at launch. The pre-order bonuses (exclusive vehicle, cosmetic pack) are nice additions for GTA Online 6. However, the bonuses aren't so significant that missing them will hurt your experience — they're cosmetics, not gameplay advantages.</p>
          <p className="mt-3"><strong className="text-foreground">Reason to pre-order:</strong> Lock in the price, get the exclusive cosmetics, guarantee a physical copy at launch if buying disc.</p>
          <p className="mt-2"><strong className="text-foreground">Reason to wait:</strong> If you're unsure about the game quality or want to see day-one reviews first. You can buy immediately after release and miss only the pre-order cosmetics.</p>
        </div>

        <div>
          <h2 className="font-headline text-2xl text-foreground mb-3">Digital vs Physical GTA 6</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="font-semibold text-foreground mb-2">Digital (PlayStation/Xbox Store)</div>
              <ul className="space-y-1 text-xs">
                <li className="text-emerald-400">✓ No disc required</li>
                <li className="text-emerald-400">✓ Can preload before launch</li>
                <li className="text-emerald-400">✓ Instant access at midnight</li>
                <li className="text-red-400">✗ Can't resell or lend</li>
                <li className="text-red-400">✗ Tied to your account</li>
                <li className="text-red-400">✗ Large download (150GB+)</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="font-semibold text-foreground mb-2">Physical Disc</div>
              <ul className="space-y-1 text-xs">
                <li className="text-emerald-400">✓ Can resell or lend</li>
                <li className="text-emerald-400">✓ Saves download quota</li>
                <li className="text-emerald-400">✓ Collectible box art</li>
                <li className="text-red-400">✗ Requires disc in drive</li>
                <li className="text-red-400">✗ Still requires large patch download</li>
                <li className="text-red-400">✗ Risk of shipping delays</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-border bg-card rounded-xl p-5">
        <h3 className="font-display font-semibold text-sm mb-3">Related Pages</h3>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            { href: "/gta6/price", label: "GTA 6 Price — All Editions" },
            { href: "/gta6/release-date", label: "GTA 6 Release Date" },
            { href: "/gta6/platforms", label: "GTA 6 Platforms" },
            { href: "/gta6/gameplay", label: "GTA 6 Gameplay Features" },
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
        <h2 className="font-headline text-3xl mb-4">GTA 6 Pre-Order FAQ</h2>
        <div className="space-y-2">
          {[
            { q: "Can you pre-order GTA 6?", a: "Yes — GTA 6 pre-orders are open now on PlayStation Store, Xbox Store, Amazon, GameStop, Best Buy, and Walmart. Pre-ordering includes an exclusive vehicle and Leonida-themed cosmetic bundle for GTA Online 6. The Premium Edition ($99.99) also adds 3 days early access and $1M GTA Online starting cash." },
            { q: "Is GTA 6 Premium Edition worth it?", a: "The Premium Edition's main value is the 3 days early access. If you're a day-one player regardless, $99.99 vs $79.99 for early access is good value — you'll beat the day-one server congestion and have a head-start in GTA Online 6. The $1M online cash and exclusive cosmetics are secondary bonuses." },
            { q: "When will GTA 6 pre-orders close?", a: "Pre-orders typically close at launch. You can usually pre-order physical copies until the game ships. Digital pre-orders sometimes stay available right up to the game's release time, though this varies by platform." },
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
