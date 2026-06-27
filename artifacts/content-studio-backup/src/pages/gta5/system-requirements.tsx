import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight, Monitor } from "lucide-react";
import { setPageMeta } from "@/lib/seo";

export function GTA5SysReqPage() {
  useEffect(() => {
    setPageMeta({
      title: "GTA 5 System Requirements — Minimum & Recommended PC Specs",
      description: "Official GTA 5 PC system requirements — minimum specs for 720p and recommended for 1080p/60fps. Check if your PC can run GTA V and what settings to use.",
      path: "/gta5/system-requirements",
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
      <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
        <Link href="/"><span className="hover:text-primary cursor-pointer">Home</span></Link>
        <ChevronRight className="w-3 h-3" />
        <span>GTA 5 System Requirements</span>
      </div>

      <div>
        <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest border border-emerald-500/30 bg-emerald-500/5 px-3 py-1.5 rounded-full mb-4">
          <Monitor className="w-3 h-3" /> Official Rockstar Specs
        </div>
        <h1 className="font-headline text-5xl md:text-6xl mb-3">GTA 5 SYSTEM REQUIREMENTS</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          The official GTA V PC system requirements — minimum specs for the game to run and recommended specs for a smooth experience. Also includes modern 2025 hardware recommendations for high FPS.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {[
          {
            tier: "Minimum Specs",
            note: "720p · Low settings · 30fps target",
            color: "border-border bg-card",
            specs: [
              { label: "OS", value: "Windows 10 64-bit" },
              { label: "CPU", value: "Intel Core i5-3470 or AMD FX-8350" },
              { label: "RAM", value: "8 GB" },
              { label: "GPU", value: "NVIDIA GTX 660 2GB or AMD HD 7870 2GB" },
              { label: "Storage", value: "72 GB HDD" },
              { label: "DirectX", value: "Version 10" },
            ],
          },
          {
            tier: "Recommended Specs",
            note: "1080p · High settings · 60fps",
            color: "border-primary/30 bg-primary/5",
            specs: [
              { label: "OS", value: "Windows 10/11 64-bit" },
              { label: "CPU", value: "Intel Core i5-6600K or AMD Ryzen 5 2600" },
              { label: "RAM", value: "16 GB" },
              { label: "GPU", value: "NVIDIA GTX 1070 8GB or AMD RX 5700" },
              { label: "Storage", value: "72 GB SSD" },
              { label: "DirectX", value: "Version 11" },
            ],
          },
        ].map(({ tier, note, color, specs }) => (
          <div key={tier} className={`border rounded-xl p-5 ${color}`}>
            <h2 className="font-headline text-xl text-foreground mb-1">{tier}</h2>
            <div className="text-xs text-muted-foreground font-mono mb-4">{note}</div>
            <div className="space-y-2">
              {specs.map(({ label, value }) => (
                <div key={label} className="flex gap-3 text-sm">
                  <span className="text-muted-foreground w-20 shrink-0">{label}</span>
                  <span className="text-foreground font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modern recommendations */}
      <div className="border border-border bg-card rounded-xl p-5">
        <h2 className="font-headline text-xl text-foreground mb-4">2025 Hardware — What Settings to Use</h2>
        <div className="space-y-3">
          {[
            { gpu: "RTX 3060 / RX 6700 XT", target: "1080p Ultra @ 60fps+", note: "Plenty of power for maximum GTA V settings. Enable MSAA 4x, distance scaling to max, and high shader quality." },
            { gpu: "RTX 3080 / RX 6800 XT", target: "1440p Ultra @ 60fps+", note: "1440p ultra settings with frames to spare. Enable full resolution shadow map and all advanced graphics." },
            { gpu: "RTX 4070 / RX 7800 XT", target: "4K Medium-High @ 60fps", note: "GTA V is CPU-heavy at lower resolutions. At 4K the GPU becomes the bottleneck — solid 60fps experience." },
            { gpu: "RTX 4090 / RX 7900 XTX", target: "4K Ultra @ 100fps+", note: "Overkill for GTA V but enables very high frame rates for 144Hz monitors at any resolution." },
          ].map(({ gpu, target, note }) => (
            <div key={gpu} className="flex gap-4 items-start">
              <div className="shrink-0 font-mono text-[10px] text-primary border border-primary/30 rounded px-2 py-1 whitespace-nowrap self-start">{gpu}</div>
              <div>
                <div className="text-sm font-semibold text-foreground">{target}</div>
                <div className="text-xs text-muted-foreground">{note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
        <div>
          <h2 className="font-headline text-2xl text-foreground mb-3">GTA 5 PC Performance Tips</h2>
          <ul className="space-y-2">
            {[
              "GTA V is highly CPU-dependent in GTA Online sessions — a modern 6-core CPU (Ryzen 5 5600X or better) makes a significant difference",
              "Distance scaling is the most GPU-intensive setting — reduce it first if you need more frames",
              "Installing GTA V on an SSD dramatically reduces loading times, especially for GTA Online",
              "If you have 8GB VRAM or less, lower texture quality to avoid VRAM overflow stuttering",
              "GTA V benefits from DirectX 11 over DirectX 10 — always use DX11 for better performance",
              "For GTA Online, set graphics to Medium on older hardware — competitive play benefits from frame rate over quality",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs">
                <span className="text-primary shrink-0">→</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border border-border bg-card rounded-xl p-5">
        <h3 className="font-display font-semibold text-sm mb-3">Related Pages</h3>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            { href: "/gta6/system-requirements", label: "GTA 6 PC System Requirements (Estimated)" },
            { href: "/cheats", label: "GTA 5 Cheat Codes" },
            { href: "/gta5/best-cars", label: "Best GTA 5 Cars" },
            { href: "/gta5/online-money", label: "GTA Online Money Guide" },
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
        <h2 className="font-headline text-3xl mb-4">GTA 5 System Requirements FAQ</h2>
        <div className="space-y-2">
          {[
            { q: "Can my PC run GTA 5?", a: "GTA 5 minimum requirements are modest for 2025 hardware: any modern CPU (even budget Ryzen 3 or Core i3) with a GTX 1050 or equivalent GPU and 8GB RAM will run GTA V at 1080p medium settings. The game launched in 2015 and runs well on old hardware." },
            { q: "How many GB is GTA 5 on PC?", a: "GTA V requires approximately 72 GB of storage on PC. Rockstar has updated the install size multiple times since 2015. An SSD is recommended for faster loading, especially for GTA Online where load times can be very long on a traditional HDD." },
            { q: "Does GTA 5 work on Windows 11?", a: "Yes — GTA V is fully compatible with Windows 11. It also runs on Windows 10 (64-bit). Ensure your GPU drivers are up to date and that you're running DirectX 11 for best performance." },
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
