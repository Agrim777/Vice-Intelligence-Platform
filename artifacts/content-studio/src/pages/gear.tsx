import { useState } from "react";
import { ExternalLink, Star, ShoppingCart, Shield, Zap, Award } from "lucide-react";
import { AFFILIATE_PRODUCTS, GEAR_CATEGORIES } from "@/data/affiliate";

export function Gear() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? AFFILIATE_PRODUCTS
    : AFFILIATE_PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* SEO Header */}
      <div className="mb-8">
        <h1 className="font-headline text-5xl md:text-6xl mb-3">GTA GAMING GEAR</h1>
        <p className="text-muted-foreground text-lg max-w-3xl">
          The ultimate gaming setup for GTA players — from PS5 controllers to gaming chairs.
          Every product hand-picked for GTA V, GTA Online, and GTA 6 readiness.
        </p>
      </div>

      {/* Trust Bar */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { icon: Shield, label: "Amazon Verified", sub: "All links direct to Amazon India" },
          { icon: Star, label: "GTA-Tested Picks", sub: "Chosen by actual GTA players" },
          { icon: Zap, label: "GTA 6 Ready", sub: "Future-proofed for next-gen GTA" },
        ].map(({ icon: Icon, label, sub }) => (
          <div key={label} className="bg-card border border-border rounded-lg p-4 flex items-start gap-3">
            <Icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div>
              <div className="text-sm font-semibold">{label}</div>
              <div className="text-xs text-muted-foreground">{sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {GEAR_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {filtered.map((product) => (
          <div key={product.id} className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-all group">
            {/* Card Header */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/5 px-5 pt-5 pb-3">
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest border border-border rounded px-2 py-0.5 bg-background/50">
                  {product.category}
                </span>
                {product.badge && (
                  <span className="text-xs font-bold text-primary bg-primary/15 border border-primary/30 rounded px-2 py-0.5 flex items-center gap-1">
                    <Award className="w-3 h-3" />{product.badge}
                  </span>
                )}
              </div>
              <h3 className="font-headline text-xl leading-tight text-foreground">{product.name}</h3>
              <div className="flex items-center gap-1.5 mt-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-border"}`}
                  />
                ))}
                <span className="text-xs text-muted-foreground ml-1">{product.rating}/5</span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-5 space-y-3">
              <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Why GTA players need this</div>
                <p className="text-xs text-muted-foreground leading-relaxed">{product.whyYouNeedIt}</p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {product.tags.map((tag) => (
                  <span key={tag} className="text-xs text-muted-foreground bg-secondary rounded px-2 py-0.5">{tag}</span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-border">
                <span className="font-headline text-xl text-foreground">{product.price}</span>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_rgba(255,20,147,0.4)]"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  Buy on Amazon
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* SEO Content Block */}
      <div className="bg-card border border-border rounded-xl p-8 mb-8">
        <h2 className="font-headline text-3xl mb-4">The Ultimate GTA Gaming Setup Guide</h2>
        <div className="grid md:grid-cols-2 gap-8 text-sm text-muted-foreground leading-relaxed">
          <div>
            <h3 className="font-headline text-lg text-foreground mb-2">For PS5 Players (GTA 6 & GTA V)</h3>
            <p className="mb-3">GTA 6 on PS5 is designed around the DualSense controller's haptic feedback and adaptive triggers. You'll feel the difference between weapons, vehicles, and terrain through the controller. Pair it with a proper HDMI 2.1 cable to unlock 60fps or 120fps gameplay, and a surround sound headset to hear wanted-level sirens approaching from all directions.</p>
            <p>Essential PS5 GTA setup: DualSense controller + HDMI 2.1 + 7.1 headset = complete next-gen experience.</p>
          </div>
          <div>
            <h3 className="font-headline text-lg text-foreground mb-2">For PC Players (GTA V + Mods)</h3>
            <p className="mb-3">GTA V on PC is still one of the most played games in the world thanks to GTA Online, modding (FiveM, GTA RP servers), and 4K visuals. PC players benefit most from a mechanical keyboard for typing cheat codes quickly, a high-DPI mouse for precise aiming, and a large mousepad for high-sensitivity tracking during car chases.</p>
            <p>If you prefer controller on PC: the USB adapter lets you use your DualSense or DS4 natively in GTA V with full haptic support.</p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="text-center">
        <p className="text-xs text-muted-foreground">
          As an Amazon Associate, Vice Intelligence earns from qualifying purchases. Prices are accurate at time of listing and may change.
          All products are independently selected by our team.
        </p>
      </div>
    </div>
  );
}
