import { Link, useLocation } from "wouter";
import { Newspaper, BookOpen, Gamepad2, Star, Crosshair, Car, PenTool, Menu, X, Map, ShoppingBag } from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/news", label: "GTA 6 News", icon: Newspaper },
  { href: "/games", label: "All Games", icon: Star },
  { href: "/guides", label: "Guides", icon: BookOpen },
  { href: "/cheats", label: "Cheats", icon: Gamepad2 },
  { href: "/maps", label: "Maps", icon: Map },
  { href: "/vehicles", label: "Vehicles", icon: Car },
  { href: "/weapons", label: "Weapons", icon: Crosshair },
  { href: "/gear", label: "GTA Gear", icon: ShoppingBag },
];

const ADMIN_ITEMS = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/generate", label: "Generate" },
  { href: "/admin/bulk", label: "Bulk Generate" },
  { href: "/admin/articles", label: "Library" },
];

function GamingLogo() {
  return (
    <svg viewBox="0 0 200 40" className="h-9 w-auto" xmlns="http://www.w3.org/2000/svg" aria-label="GTA6Guide.in">
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff1493" />
          <stop offset="60%" stopColor="#ff69b4" />
          <stop offset="100%" stopColor="#ff1493" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glowText" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Icon: stylized star/shield with 6 inside */}
      <g filter="url(#glow)">
        {/* Hexagon-ish star shape */}
        <polygon
          points="20,3 27,8 30,16 27,24 20,29 13,24 10,16 13,8"
          fill="none"
          stroke="url(#logoGrad)"
          strokeWidth="1.8"
        />
        {/* Inner highlight lines */}
        <line x1="20" y1="3" x2="20" y2="8" stroke="#ff1493" strokeWidth="1" opacity="0.6" />
        <line x1="27" y1="8" x2="23" y2="11" stroke="#ff1493" strokeWidth="1" opacity="0.6" />
        <line x1="13" y1="8" x2="17" y2="11" stroke="#ff1493" strokeWidth="1" opacity="0.6" />
        {/* The 6 */}
        <text
          x="20"
          y="22"
          textAnchor="middle"
          fontFamily="'Arial Black', Arial, sans-serif"
          fontWeight="900"
          fontSize="14"
          fill="url(#logoGrad)"
          letterSpacing="-0.5"
        >6</text>
      </g>

      {/* GTA text */}
      <g filter="url(#glowText)">
        <text
          x="36"
          y="22"
          fontFamily="'Arial Black', Impact, Arial, sans-serif"
          fontWeight="900"
          fontSize="18"
          fill="url(#logoGrad)"
          letterSpacing="1"
        >GTA</text>
      </g>

      {/* GUIDE text */}
      <text
        x="78"
        y="22"
        fontFamily="'Arial Black', Impact, Arial, sans-serif"
        fontWeight="900"
        fontSize="18"
        fill="white"
        letterSpacing="0.5"
      >GUIDE</text>

      {/* .IN badge */}
      <rect x="148" y="12" width="22" height="11" rx="2" fill="#ff1493" opacity="0.15" stroke="#ff1493" strokeWidth="0.8" />
      <text
        x="159"
        y="21"
        textAnchor="middle"
        fontFamily="'Arial', sans-serif"
        fontWeight="700"
        fontSize="7"
        fill="#ff1493"
        letterSpacing="0.5"
      >.IN</text>

      {/* Bottom accent line */}
      <line x1="36" y1="26" x2="143" y2="26" stroke="url(#logoGrad)" strokeWidth="0.8" opacity="0.4" />
    </svg>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isAdmin = location.startsWith("/admin");

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground dark">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur nav-glow">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center gap-4">
          {/* Logo */}
          <Link href="/">
            <div className="cursor-pointer shrink-0 flex items-center">
              <GamingLogo />
            </div>
          </Link>

          {/* Desktop Nav — scrollable */}
          <nav className="hidden md:flex items-center gap-0.5 flex-1 overflow-x-auto scrollbar-hide">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href}>
                <div
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    item.href === "/gear"
                      ? isActive(item.href)
                        ? "text-primary bg-primary/10 border border-primary/30"
                        : "text-primary/80 hover:text-primary hover:bg-primary/10 border border-primary/20"
                      : isActive(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3 ml-auto shrink-0">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(34,197,94,0.8)]" />
              GTA 6 — Nov 19, 2026
            </div>
            <Link href="/admin">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors cursor-pointer">
                <PenTool className="w-3 h-3" /> Studio
              </div>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden ml-auto p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-background/98 px-4 py-3 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href}>
                <div
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-md text-sm font-medium cursor-pointer ${
                    item.href === "/gear"
                      ? "text-primary border border-primary/20 bg-primary/5"
                      : isActive(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Admin Sub-nav */}
      {isAdmin && (
        <div className="border-b border-border bg-card/50">
          <div className="max-w-7xl mx-auto px-6 flex items-center gap-1 h-10">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest mr-3">Studio</span>
            {ADMIN_ITEMS.map((item) => {
              const active = item.href === "/admin" ? location === "/admin" : location.startsWith(item.href);
              return (
                <Link key={item.href} href={item.href}>
                  <div className={`px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                    active ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}>
                    {item.label}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Main */}
      <main className="flex-1 relative">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 40% at 80% 0%, rgba(255,20,147,0.04) 0%, transparent 60%)" }} />
        <div className="relative z-10">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-3">
                <GamingLogo />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                The definitive GTA resource — cheat codes, guides, vehicles, maps, and news for every Grand Theft Auto game from GTA 1 to GTA 6.
              </p>
            </div>
            <div>
              <div className="text-xs font-bold text-foreground uppercase tracking-widest mb-3">Games</div>
              <div className="space-y-1.5">
                {["/games", "/news", "/guides", "/cheats"].map((href) => {
                  const labels: Record<string, string> = { "/games": "All GTA Games", "/news": "GTA 6 News", "/guides": "Guides", "/cheats": "Cheat Codes" };
                  return (
                    <Link key={href} href={href}>
                      <div className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">{labels[href]}</div>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="text-xs font-bold text-foreground uppercase tracking-widest mb-3">GTA 6 Pages</div>
              <div className="space-y-1.5">
                {[
                  ["/gta6/release-date", "Release Date"],
                  ["/gta6/editions", "Editions Guide"],
                  ["/gta6/pre-order", "Pre-Order Guide"],
                  ["/gta6/map-size", "Map Size vs GTA 5"],
                  ["/gta6/story", "Story & Characters"],
                  ["/gta6/easter-eggs", "Easter Eggs"],
                ].map(([href, label]) => (
                  <Link key={href} href={href}>
                    <div className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">{label}</div>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-bold text-foreground uppercase tracking-widest mb-3">GTA 6 — Nov 19, 2026</div>
              <div className="space-y-1.5 text-xs text-muted-foreground">
                <div>Platform: PS5 / Xbox Series X|S</div>
                <div>Setting: Vice City / Leonida</div>
                <div>Protagonists: Lucia & Jason</div>
                <div>Standard: $79.99 · Ultimate: $99.99</div>
                <div>Pre-orders: Open since June 25, 2026</div>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="text-xs text-muted-foreground">
              Fan site. Not affiliated with Rockstar Games or Take-Two Interactive.
            </div>
            <div className="text-xs text-muted-foreground">
              Affiliate links: As an Amazon Associate we earn from qualifying purchases.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
