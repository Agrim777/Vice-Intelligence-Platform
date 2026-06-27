import { useGetAdminSession, useAdminLogout } from "@workspace/api-client-react";
import { Link, useLocation } from "wouter";
import { LayoutDashboard, FileText, Tags, Image as ImageIcon, Settings, Home, LogOut } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const SIDEBAR_ITEMS = [
  { href: "/secure-admin-portal/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/secure-admin-portal/articles", label: "Articles", icon: FileText },
  { href: "/secure-admin-portal/categories", label: "Categories", icon: Tags },
  { href: "/secure-admin-portal/tags", label: "Tags", icon: Tags },
  { href: "/secure-admin-portal/media", label: "Media", icon: ImageIcon },
  { href: "/secure-admin-portal/settings", label: "Settings", icon: Settings },
  { href: "/secure-admin-portal/homepage", label: "Homepage", icon: Home },
];

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useLocation();
  const { data: session, isLoading, error } = useGetAdminSession();
  const logout = useAdminLogout();

  if (isLoading) return <div className="p-10"><Skeleton className="h-[80vh] w-full" /></div>;

  if (!session || error) {
    if (location !== "/secure-admin-portal") {
      setLocation("/secure-admin-portal");
      return null;
    }
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen bg-background dark text-foreground">
      <aside className="w-64 border-r border-border bg-card/50 flex flex-col shrink-0">
        <div className="p-6 border-b border-border">
          <h2 className="font-headline text-2xl text-primary tracking-widest">VICE CMS</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {SIDEBAR_ITEMS.map(item => {
            const active = location.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href}>
                <div className={`flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer transition-colors ${active ? "bg-primary/20 text-primary border border-primary/20" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`}>
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              </Link>
            );
          })}
        </nav>
      </aside>
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-14 border-b border-border bg-card/50 flex items-center justify-between px-6 shrink-0">
          <div className="font-mono text-sm text-muted-foreground">User: <span className="text-foreground">{session.username}</span></div>
          <button onClick={() => logout.mutate(undefined, { onSuccess: () => setLocation("/secure-admin-portal") })} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </header>
        <main className="flex-1 overflow-auto p-6 relative">
          <div className="absolute inset-0 pointer-events-none grid-bg opacity-30" />
          <div className="relative z-10 max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}