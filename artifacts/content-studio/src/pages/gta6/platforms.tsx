import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight, Clock, Monitor, Gamepad2 } from "lucide-react";
import { setPageMeta } from "@/lib/seo";

const LAST_UPDATED = "2025-06-26";

export function GTA6PlatformsPage() {
  useEffect(() => {
    setPageMeta({
      title: "GTA 6 Platforms — PS5, Xbox Series X|S & PC Release Info",
      description: "Is GTA 6 coming to PC? Yes — after consoles. GTA 6 releases Fall 2025 on PS5 and Xbox Series X|S. PC version confirmed for later with ray tracing and DLSS 4. No PS4/Xbox One version.",
      path: "/gta6/platforms",
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
      <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
        <Link href="/"><span className="hover:text-primary cursor-pointer">Home</span></Link>
        <ChevronRight className="w-3 h-3" />
        <span>GTA 6 Platforms</span>
      </div>

      <div>
        <div className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest border border-primary/30 bg-primary/5 px-3 py-1.5 rounded-full mb-4">
          ✓ CONFIRMED
        </div>
        <h1 className="font-headline text-5xl md:text-6xl mb-3">GTA 6 PLATFORMS</h1>
        <div className="text-xs text-muted-foreground font-mono mb-4 flex items-center gap-2">
          <Clock className="w-3 h-3" /> Last updated: {LAST_UPDATED}
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          GTA 6 launches on <strong className="text-foreground">PlayStation 5 and Xbox Series X|S (Fall 2025)</strong>. A PC version is confirmed for later. No PS4, Xbox One, or Nintendo Switch version exists.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { platform: "PlayStation 5", icon: "🎮", date: "Fall 2025", status: "CONFIRMED", detail: "Full PS5 version. DualSense haptic feedback and adaptive trigger support confirmed.", color: "border-emerald-500/30 bg-emerald-500/5 text-emerald-400" },
          { platform: "Xbox Series X|S", icon: "🎮", date: "Fall 2025", status: "CONFIRMED", detail: "Full Xbox Series X|S native version. Xbox Series S version with lower resolution/frame rate settings.", color: "border-emerald-500/30 bg-emerald-500/5 text-emerald-400" },
          { platform: "PC", icon: "🖥️", date: "2026 (est.)", status: "CONFIRMED LATER", detail: "Ray tracing, DLSS 4, AMD FSR 4, ultra-wide support. No official date yet.", color: "border-amber-500/30 bg-amber-500/5 text-amber-400" },
          { platform: "PS4 / Xbox One", icon: "🚫", date: "Never", status: "NOT COMING", detail: "GTA 6 is next-gen only. No current-gen version planned or announced.", color: "border-red-500/30 bg-red-500/5 text-red-400" },
          { platform: "Nintendo Switch", icon: "🚫", date: "Never", status: "NOT ANNOUNCED", detail: "No Switch version announced. Switch hardware couldn't run GTA 6 at acceptable quality.", color: "border-red-500/30 bg-red-500/5 text-red-400" },
          { platform: "Mobile (iOS/Android)", icon: "🚫", date: "Not planned", status: "UNLIKELY", detail: "Rockstar hasn't mentioned mobile. GTA 6 is console/PC focused.", color: "border-border bg-secondary text-muted-foreground" },
        ].map(({ platform, icon, date, status, detail, color }) => (
          <div key={platform} className={`border rounded-xl p-4 ${color}`}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{icon}</span>
              <span className="font-display font-bold text-foreground">{platform}</span>
            </div>
            <div className="font-headline text-xl mb-1">{date}</div>
            <div className={`text-[10px] font-mono uppercase tracking-widest mb-2`}>{status}</div>
            <p className="text-xs text-muted-foreground">{detail}</p>
          </div>
        ))}
      </div>

      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <div>
          <h2 className="font-headline text-2xl text-foreground mb-3">Is GTA 6 Coming to PC?</h2>
          <p>Yes — <strong className="text-foreground">GTA 6 is confirmed for PC</strong>, but not at launch. In a June 2025 Rockstar Newswire post, Rockstar stated: "We want to deliver the definitive PC experience for GTA 6, and that takes time." The PC version will launch at a date after the Fall 2025 console release.</p>
          <p className="mt-3">The GTA 6 PC version will support:</p>
          <ul className="space-y-1 mt-2">
            {["Full ray tracing (global illumination, reflections, shadows)", "NVIDIA DLSS 4 upscaling", "AMD FSR 4 support", "Intel XeSS support", "Ultra-wide monitor support (21:9 and 32:9)", "PC-exclusive graphical detail options", "Keyboard and mouse optimized controls"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs"><span className="text-primary shrink-0">→</span> {item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-headline text-2xl text-foreground mb-3">GTA 6 PC Release Date Estimate</h2>
          <p>Rockstar's GTA V PC release came 19 months after the original PS3/Xbox 360 launch (September 2013 to April 2015). Red Dead Redemption 2 PC launched 13 months after consoles (October 2018 to November 2019). If GTA 6 follows a similar pattern, the PC version could arrive anywhere between late 2026 and mid-2027.</p>
        </div>

        <div>
          <h2 className="font-headline text-2xl text-foreground mb-3">Why Is GTA 6 Not Coming to PS4?</h2>
          <p>Rockstar confirmed GTA 6 as a next-gen-only title because the game's technical demands — including the large open world, dynamic weather systems, advanced NPC AI, and detailed physics — exceed what PS4 and Xbox One hardware can deliver. Targeting only PS5 and Xbox Series X|S allows Rockstar to push graphics and world simulation further than a cross-gen title would permit.</p>
        </div>
      </div>

      <div className="border border-border bg-card rounded-xl p-5">
        <h3 className="font-display font-semibold text-sm mb-3">Related Pages</h3>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            { href: "/gta6/system-requirements", label: "GTA 6 PC System Requirements" },
            { href: "/gta6/release-date", label: "GTA 6 Release Date" },
            { href: "/gta6/price", label: "GTA 6 Price — All Editions" },
            { href: "/gta6/pre-order", label: "GTA 6 Pre-Order Guide" },
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
        <h2 className="font-headline text-3xl mb-4">GTA 6 Platforms FAQ</h2>
        <div className="space-y-2">
          {[
            { q: "Is GTA 6 coming to PC?", a: "Yes, GTA 6 is confirmed for PC — but not at launch. The game releases Fall 2025 on PS5 and Xbox Series X|S first. Rockstar confirmed the PC version will follow later, with full ray tracing, DLSS 4, and PC-exclusive graphical enhancements. Based on Rockstar's history, expect the PC version in 2026 or later." },
            { q: "Is GTA 6 coming to PS4?", a: "No. GTA 6 is next-gen only — PS5 and Xbox Series X|S at launch, PC later. There is no PS4, Xbox One, or Nintendo Switch version of GTA 6. Rockstar chose next-gen only to maximize the game's technical capabilities." },
            { q: "What are the GTA 6 system requirements?", a: "Rockstar hasn't officially released GTA 6 PC system requirements yet. Based on the game's scope and comparable titles, expect a mid-range PC (RTX 3070 or equivalent) for 1080p/60fps, with an RTX 4080 or better needed for 4K with ray tracing. See our full GTA 6 system requirements page for detailed estimates." },
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
