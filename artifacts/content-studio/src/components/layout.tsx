import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Search as SearchIcon, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./theme-provider";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News" },
  { href: "/games", label: "All Games" },
  { href: "/guides", label: "Guides" },
  { href: "/cheats", label: "Cheats" },
  { href: "/maps", label: "Maps" },
  { href: "/vehicles", label: "Vehicles" },
  { href: "/weapons", label: "Weapons" },
  { href: "/gear", label: "Gear" },
];

function GamingLogo() {
  return (
    <svg viewBox="0 0 200 40" className="h-9 w-auto" xmlns="http://www.w3.org/2000/svg" aria-label="VICE">
      <text
        x="10"
        y="28"
        fontFamily="'Arial Black', Impact, Arial, sans-serif"
        fontWeight="900"
        fontSize="24"
        fill="#ff1a8c"
        letterSpacing="2"
      >VICE</text>
    </svg>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);

  const isArticlePage = location.startsWith("/news/") || location.startsWith("/guides/");

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground transition-colors duration-300">
      {isArticlePage && (
        <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-secondary">
          <div 
            className="h-full bg-primary transition-all duration-100 ease-out" 
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      )}

      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center gap-4">
          <Link href="/">
            <div className="cursor-pointer shrink-0 flex items-center">
              <GamingLogo />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1 flex-1 overflow-x-auto scrollbar-hide">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href}>
                <div
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
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

          <div className="hidden md:flex items-center gap-3 ml-auto shrink-0">
            <button onClick={() => setLocation("/search")} className="p-2 text-muted-foreground hover:text-foreground">
              <SearchIcon className="w-5 h-5" />
            </button>
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 text-muted-foreground hover:text-foreground">
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          <button
            className="md:hidden ml-auto p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-background/98 px-4 py-3 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href}>
                <div
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2.5 rounded-md text-sm font-medium cursor-pointer ${
                    isActive(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {item.label}
                </div>
              </Link>
            ))}
            <div className="flex gap-4 px-3 py-2.5">
              <button onClick={() => { setLocation("/search"); setMobileOpen(false); }} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                <SearchIcon className="w-4 h-4" /> Search
              </button>
              <button onClick={() => { setTheme(theme === "dark" ? "light" : "dark"); setMobileOpen(false); }} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />} Theme
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 relative">
        <div className="relative z-10">
          {children}
        </div>
      </main>

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
                  const labels: Record<string, string> = { "/games": "All GTA Games", "/news": "GTA News", "/guides": "Guides", "/cheats": "Cheat Codes" };
                  return (
                    <Link key={href} href={href}>
                      <div className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">{labels[href]}</div>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="text-xs font-bold text-foreground uppercase tracking-widest mb-3">Legal</div>
              <div className="space-y-1.5">
                {[
                  ["/about", "About Us"],
                  ["/contact", "Contact"],
                  ["/privacy", "Privacy Policy"],
                  ["/terms", "Terms & Conditions"],
                  ["/disclaimer", "Disclaimer"],
                  ["/cookie-policy", "Cookie Policy"],
                  ["/dmca", "DMCA"],
                ].map(([href, label]) => (
                  <Link key={href} href={href}>
                    <div className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">{label}</div>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-bold text-foreground uppercase tracking-widest mb-3">GTA 6</div>
              <div className="space-y-1.5 text-xs text-muted-foreground">
                <div>Platform: PS5 / Xbox Series X|S</div>
                <div>Setting: Vice City / Leonida</div>
                <div>Release: Nov 19, 2026</div>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="text-xs text-muted-foreground">
              Fan site. Not affiliated with Rockstar Games or Take-Two Interactive.
            </div>
            <div className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Vice Intelligence Platform.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}