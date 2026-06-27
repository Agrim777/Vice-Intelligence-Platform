import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight, Clock, HardDrive } from "lucide-react";
import { setPageMeta } from "@/lib/seo";

export function GTA6DownloadSizePage() {
  useEffect(() => {
    setPageMeta({
      title: "GTA 6 Download Size — How Many GB Is GTA 6? PS5 & Xbox (2026)",
      description: "GTA 6 is estimated at 130–150GB on PS5 and Xbox Series X|S. Here's everything confirmed about GTA 6's file size, storage requirements, and pre-download details.",
      path: "/gta6/download-size",
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
      <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
        <Link href="/"><span className="hover:text-primary cursor-pointer">Home</span></Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/gta6/release-date"><span className="hover:text-primary cursor-pointer">GTA 6</span></Link>
        <ChevronRight className="w-3 h-3" />
        Download Size
      </div>

      <div>
        <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest border border-amber-500/30 bg-amber-500/5 px-3 py-1.5 rounded-full mb-4">
          <HardDrive className="w-3 h-3" /> ESTIMATED — NOT YET OFFICIAL
        </div>
        <h1 className="font-headline text-5xl md:text-6xl mb-3">GTA 6 DOWNLOAD SIZE</h1>
        <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono mb-4">
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Updated: June 27, 2026</span>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Rockstar has not yet officially confirmed GTA 6's file size. Based on the game's scale, PS5/Xbox architecture, and comparable titles, GTA 6 is estimated at <strong className="text-foreground">130–150 GB on PS5 and Xbox Series X</strong>. Xbox Series S will likely require a compressed version at approximately <strong className="text-foreground">100–120 GB</strong>. This page will be updated with official numbers as they're released.
        </p>
      </div>

      {/* Size estimates */}
      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { platform: "PS5", estimate: "130–150 GB", note: "Full quality assets. NVMe SSD required." },
          { platform: "Xbox Series X", estimate: "130–150 GB", note: "Same as PS5. Seagate expansion card or internal." },
          { platform: "Xbox Series S", estimate: "100–120 GB", note: "Compressed assets for 512GB internal storage." },
        ].map(({ platform, estimate, note }) => (
          <div key={platform} className="border border-border bg-card rounded-xl p-5 text-center">
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">{platform}</div>
            <div className="font-headline text-3xl text-foreground mb-1">{estimate}</div>
            <div className="text-xs text-muted-foreground">{note}</div>
          </div>
        ))}
      </div>

      <div className="border border-amber-500/20 bg-amber-500/5 rounded-xl p-4">
        <div className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">⚠ These are estimates</div>
        <p className="text-sm text-muted-foreground">Rockstar has not confirmed GTA 6's file size. These estimates are based on: (1) GTA V's modern install size (~100GB), (2) scale of the world (2.5–3× larger), (3) PS5/Xbox asset quality, and (4) precedent from other large open-world PS5 titles. Official confirmation expected 2–4 weeks before launch.</p>
      </div>

      {/* Comparison */}
      <div className="space-y-4">
        <h2 className="font-headline text-3xl">GTA 6 File Size vs Other Games</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-card border-b border-border">
                {["Game", "Platform", "Install Size"].map(h => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-mono uppercase tracking-widest text-muted-foreground">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["GTA 6 (estimated)", "PS5 / Xbox Series X", "~130–150 GB"],
                ["GTA V (modern)", "PS5", "~100 GB"],
                ["Call of Duty: Warzone", "PS5", "~120–200 GB"],
                ["Red Dead Redemption 2", "PS4/PS5", "~107 GB"],
                ["Cyberpunk 2077", "PS5", "~65 GB"],
                ["Baldur's Gate 3", "PS5", "~150 GB"],
                ["God of War: Ragnarök", "PS5", "~90 GB"],
                ["Spider-Man 2", "PS5", "~98 GB"],
                ["The Last of Us Part II", "PS5", "~78 GB"],
              ].map((row, i) => (
                <tr key={i} className={`border-b border-border/50 last:border-0 ${i === 0 ? "bg-primary/5" : "hover:bg-secondary/20"}`}>
                  {row.map((cell, j) => (
                    <td key={j} className={`px-4 py-3 ${i === 0 ? "text-foreground font-medium" : "text-muted-foreground"}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Storage guide */}
      <div className="space-y-4">
        <h2 className="font-headline text-3xl">Storage Planning for GTA 6</h2>
        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          <p><strong className="text-foreground">PS5 internal storage:</strong> The PS5 has 825GB of total SSD space with approximately 667GB available for games. If GTA 6 is 150GB, it'll use about 22% of your total PS5 storage. That leaves room for roughly 4–6 more large games. If you're a heavy collector, a PS5 NVMe expansion card (1TB or 2TB) is worth considering.</p>
          <p><strong className="text-foreground">Xbox Series X internal storage:</strong> Xbox Series X has 1TB of storage with approximately 802GB available for games. GTA 6 at 150GB uses about 18% of that. Seagate's Xbox expansion cards can add 1–4TB if needed.</p>
          <p><strong className="text-foreground">Xbox Series S storage:</strong> The Series S only has 512GB total (~364GB usable), which is tight for a potentially 120GB game alongside other titles. A 1TB Seagate expansion card is highly recommended for Series S owners planning to play GTA 6.</p>
          <p><strong className="text-foreground">Pre-download:</strong> Both PlayStation and Xbox allow pre-downloading games before launch. If you pre-order GTA 6 digitally, expect the pre-download to begin approximately 3–7 days before November 19, 2026. This lets you play immediately at midnight on launch day rather than waiting hours for a download.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { platform: "PS5", rec: "Add NVMe SSD if under 500GB free", capacity: "667GB usable" },
            { platform: "Xbox Series X", rec: "You're fine — 802GB available", capacity: "802GB usable" },
            { platform: "Xbox Series S", rec: "Get a 1TB expansion card", capacity: "364GB usable" },
          ].map(({ platform, rec, capacity }) => (
            <div key={platform} className="border border-border bg-card rounded-lg p-4">
              <div className="font-mono text-xs uppercase tracking-widest text-foreground mb-2">{platform}</div>
              <div className="text-xs text-muted-foreground mb-1">Available: {capacity}</div>
              <div className="text-xs text-primary">{rec}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Physical = same download */}
      <div className="border border-amber-500/20 bg-amber-500/5 rounded-xl p-5">
        <h2 className="font-headline text-2xl mb-3">Physical Copy? You Still Download Everything</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">GTA 6's physical edition is a <strong className="text-foreground">code-in-a-box</strong> — there is no disc. Whether you buy digital or physical, you will download the full game from PlayStation Network or Xbox Live. The physical box contains a download code, not a Blu-ray disc. This means physical buyers need the same storage space and fast internet as digital buyers.</p>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="font-headline text-3xl mb-4">GTA 6 Download Size FAQ</h2>
        <div className="space-y-2">
          {[
            { q: "How many GB is GTA 6?", a: "Rockstar has not officially confirmed GTA 6's file size. Based on the game's scale (2.5–3× larger than GTA 5) and PS5/Xbox specifications, the estimated install size is 130–150 GB on PS5 and Xbox Series X. Xbox Series S may have a smaller compressed version at approximately 100–120 GB. Official size will be confirmed closer to the November 19, 2026 launch." },
            { q: "Can you pre-download GTA 6?", a: "If you pre-order GTA 6 digitally from the PlayStation Store or Xbox Store, you will be able to pre-download the game before launch. Pre-downloads typically begin 3–7 days before release. This lets you play immediately when servers go live on November 19, 2026 rather than waiting for the full download." },
            { q: "Does the physical copy of GTA 6 require a download?", a: "Yes — GTA 6's physical edition is a code-in-a-box (no disc included). This means physical buyers must download the full game, just like digital buyers. There is no way to install GTA 6 from a disc because no disc is included. You will need the same storage space and internet connection regardless of physical or digital purchase." },
            { q: "Will GTA 6 have patches and updates after launch?", a: "Yes — like all modern games, GTA 6 will receive post-launch patches, updates, and eventually GTA Online 6 as a free update. Expect the install size to grow over time. GTA V has grown from ~50GB at launch to ~100GB+ over 13 years of updates. Reserve extra storage space beyond the base install." },
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
    </div>
  );
}
