import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight, Clock, Monitor } from "lucide-react";
import { setPageMeta } from "@/lib/seo";

const LAST_UPDATED = "2025-06-26";

export function GTA6SysReqPage() {
  useEffect(() => {
    setPageMeta({
      title: "GTA 6 PC System Requirements — Minimum & Recommended Specs",
      description: "GTA 6 PC system requirements — minimum and recommended specs for 1080p, 1440p, and 4K. What GPU, CPU, and RAM you'll need to run GTA 6 on PC.",
      path: "/gta6/system-requirements",
    });
  }, []);

  const specTiers = [
    {
      tier: "Minimum (1080p/30fps)",
      cpu: "AMD Ryzen 5 5600X or Intel Core i5-12400F",
      gpu: "NVIDIA RTX 3060 (12GB) or AMD RX 6700 XT",
      ram: "16 GB DDR4",
      storage: "180 GB SSD (estimated)",
      os: "Windows 10 64-bit (version 1903+)",
      color: "border-border bg-card",
    },
    {
      tier: "Recommended (1440p/60fps)",
      cpu: "AMD Ryzen 7 5800X3D or Intel Core i7-13700K",
      gpu: "NVIDIA RTX 4070 Ti or AMD RX 7900 XT",
      ram: "32 GB DDR5",
      storage: "180 GB NVMe SSD",
      os: "Windows 11 64-bit",
      color: "border-primary/30 bg-primary/5",
    },
    {
      tier: "Ultra (4K/60fps + Ray Tracing)",
      cpu: "AMD Ryzen 9 7950X or Intel Core i9-14900K",
      gpu: "NVIDIA RTX 4090 or RTX 5090",
      ram: "32 GB DDR5",
      storage: "180 GB NVMe Gen4 SSD",
      os: "Windows 11 64-bit",
      color: "border-border bg-card",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
      <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
        <Link href="/"><span className="hover:text-primary cursor-pointer">Home</span></Link>
        <ChevronRight className="w-3 h-3" />
        <span>GTA 6 System Requirements</span>
      </div>

      <div>
        <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest border border-amber-500/30 bg-amber-500/5 px-3 py-1.5 rounded-full mb-4">
          <Monitor className="w-3 h-3" /> Estimated — Not Official
        </div>
        <h1 className="font-headline text-5xl md:text-6xl mb-3">GTA 6 SYSTEM REQUIREMENTS</h1>
        <div className="text-xs text-muted-foreground font-mono mb-4 flex items-center gap-2">
          <Clock className="w-3 h-3" /> Last updated: {LAST_UPDATED}
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Rockstar has not officially released GTA 6 PC system requirements yet. The specs below are <strong className="text-foreground">community estimates</strong> based on the game's scale, comparable titles, and confirmed PC features (ray tracing, DLSS 4). <strong className="text-foreground">This page will be updated when official specs are released.</strong>
        </p>
      </div>

      <div className="space-y-4">
        {specTiers.map(({ tier, cpu, gpu, ram, storage, os, color }) => (
          <div key={tier} className={`border rounded-xl p-5 ${color}`}>
            <h2 className="font-headline text-xl text-foreground mb-4">{tier}</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "CPU", value: cpu },
                { label: "GPU", value: gpu },
                { label: "RAM", value: ram },
                { label: "Storage", value: storage },
                { label: "OS", value: os },
              ].map(({ label, value }) => (
                <div key={label} className="bg-background/40 rounded-lg p-3">
                  <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1">{label}</div>
                  <div className="text-sm text-foreground font-semibold">{value}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border border-amber-500/20 bg-amber-500/5 rounded-xl p-4">
        <div className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">⚠ Important Disclaimer</div>
        <p className="text-sm text-muted-foreground">These system requirements are community estimates only. Official GTA 6 PC system requirements will be published by Rockstar Games on the Rockstar Newswire and Steam store page when the PC release date is announced. GTA6Guide.in will update this page immediately when official specs are available.</p>
      </div>

      <div className="space-y-5 text-sm text-muted-foreground leading-relaxed">
        <div>
          <h2 className="font-headline text-2xl text-foreground mb-3">What GPU Do You Need for GTA 6 PC?</h2>
          <p>Based on GTA 6's confirmed feature set — full ray tracing, DLSS 4, an open world 2× the size of GTA 5, and a living wildlife/weather simulation — we estimate you'll need at least an RTX 3060 (12GB) for 1080p gameplay at 30fps on lower settings. For a comfortable 60fps at 1080p, an RTX 3070 Ti or equivalent is the safe minimum.</p>
          <p className="mt-3">For 4K gaming with ray tracing enabled, expect to need an RTX 4090 or the upcoming RTX 5090. Ray tracing is extremely GPU-intensive in open-world games — Cyberpunk 2077 is the closest comparable title and it needed a 4090 for smooth 4K RT performance.</p>
        </div>

        <div>
          <h2 className="font-headline text-2xl text-foreground mb-3">GTA 6 Storage Requirements</h2>
          <p>GTA 6 will be one of the largest games ever shipped. GTA V's PC version required 65GB in 2015. RDR2 PC required 150GB. GTA 6 — with its vastly larger world, higher-res textures, and more complex audio — is estimated to require 150–250GB. An SSD is strongly recommended (and possibly required) given the streaming demands of the open world.</p>
        </div>

        <div>
          <h2 className="font-headline text-2xl text-foreground mb-3">GTA 5 System Requirements (For Comparison)</h2>
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="grid sm:grid-cols-2 gap-2 text-xs">
              <div><span className="text-muted-foreground">Minimum GPU:</span> <span className="text-foreground">NVIDIA GTX 660 2GB</span></div>
              <div><span className="text-muted-foreground">Recommended GPU:</span> <span className="text-foreground">NVIDIA GTX 780 3GB</span></div>
              <div><span className="text-muted-foreground">Minimum CPU:</span> <span className="text-foreground">Intel Core i5-3470</span></div>
              <div><span className="text-muted-foreground">Minimum RAM:</span> <span className="text-foreground">8 GB</span></div>
              <div><span className="text-muted-foreground">Storage:</span> <span className="text-foreground">65 GB HDD</span></div>
            </div>
            <p className="text-xs text-muted-foreground mt-3">GTA 6 will require significantly more powerful hardware than GTA 5 due to the game's much larger scope and next-gen feature set.</p>
          </div>
        </div>
      </div>

      <div className="border border-border bg-card rounded-xl p-5">
        <h3 className="font-display font-semibold text-sm mb-3">Related Pages</h3>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            { href: "/gta6/platforms", label: "GTA 6 Platforms — PS5, Xbox & PC" },
            { href: "/gta6/release-date", label: "GTA 6 PC Release Date" },
            { href: "/gta5/system-requirements", label: "GTA 5 System Requirements" },
            { href: "/gta6/price", label: "GTA 6 Price" },
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
        <h2 className="font-headline text-3xl mb-4">GTA 6 System Requirements FAQ</h2>
        <div className="space-y-2">
          {[
            { q: "Can my PC run GTA 6?", a: "Official GTA 6 PC system requirements haven't been released yet. Our estimates suggest you'll need at minimum an RTX 3060 (12GB) GPU, Ryzen 5 5600X CPU, 16GB RAM, and a 180GB SSD for 1080p/30fps. Check back here when Rockstar officially publishes the requirements." },
            { q: "Does GTA 6 PC require an SSD?", a: "Rockstar hasn't confirmed this, but given GTA 6's massive open world and streaming requirements, an SSD is very likely to be the minimum storage requirement (not just recommended). The game's world is too large to stream asset data effectively from a traditional hard drive." },
            { q: "Will GTA 6 support DLSS?", a: "Yes — Rockstar confirmed GTA 6 PC will support DLSS 4 (NVIDIA) along with AMD FSR 4 and Intel XeSS. DLSS 4 significantly boosts frame rates, which means mid-range cards can achieve higher resolutions and frame rates than their raw rasterization performance would suggest." },
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
