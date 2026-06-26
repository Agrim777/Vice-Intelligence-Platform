import { Link, useLocation } from "wouter";
import { Newspaper, BookOpen, Gamepad2, Star, Crosshair, Car, PenTool, Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/news", label: "GTA 6 News", icon: Newspaper },
  { href: "/games", label: "All Games", icon: Star },
  { href: "/guides", label: "Guides", icon: BookOpen },
  { href: "/cheats", label: "Cheats", icon: Gamepad2 },
  { href: "/vehicles", label: "Vehicles", icon: Car },
  { href: "/weapons", label: "Weapons", icon: Crosshair },
];

const ADMIN_ITEMS = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/generate", label: "Generate" },
  { href: "/admin/bulk", label: "Bulk Generate" },
  { href: "/admin/articles", label: "Library" },
];

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
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center gap-6">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-1.5 cursor-pointer shrink-0">
              <span className="font-headline text-2xl text-primary leading-none">VICE</span>
              <span className="font-headline text-2xl text-foreground leading-none">INTEL</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5 flex-1">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href}>
                <div
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                    isActive(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3 ml-auto">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(34,197,94,0.8)]" />
              GTA 6 Fall 2025
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
                    isActive(item.href) ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
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
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1.5">
              <span className="font-headline text-xl text-primary">VICE</span>
              <span className="font-headline text-xl text-foreground">INTELLIGENCE</span>
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
              {NAV_ITEMS.slice(1).map((item) => (
                <Link key={item.href} href={item.href}>
                  <span className="hover:text-foreground cursor-pointer transition-colors">{item.label}</span>
                </Link>
              ))}
            </div>
            <div className="text-xs text-muted-foreground">
              Fan site. Not affiliated with Rockstar Games.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
