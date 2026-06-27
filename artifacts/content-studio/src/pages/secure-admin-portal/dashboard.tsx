import { useGetAdminDashboardStats } from "@workspace/api-client-react";
import { FileText, Eye, CheckCircle2, Activity } from "lucide-react";

export function AdminDashboard() {
  const { data: stats, isLoading } = useGetAdminDashboardStats();

  if (isLoading) return <div className="font-mono text-muted-foreground">Loading dashboard...</div>;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-4xl">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to Vice CMS.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Articles", value: stats?.totalArticles ?? 0, icon: FileText, color: "text-primary" },
          { label: "Published", value: stats?.publishedArticles ?? 0, icon: CheckCircle2, color: "text-emerald-400" },
          { label: "Drafts", value: stats?.draftArticles ?? 0, icon: Activity, color: "text-amber-400" },
          { label: "Total Views", value: stats?.totalViews ?? 0, icon: Eye, color: "text-cyan-400" },
        ].map((card, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-5 shadow-sm">
            <card.icon className={`w-5 h-5 mb-3 ${card.color}`} />
            <div className="font-headline text-3xl">{card.value.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground mt-1 uppercase tracking-widest">{card.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
        <h2 className="font-headline text-2xl mb-4">Recent Articles</h2>
        <div className="divide-y divide-border">
          {stats?.recentArticles?.map(article => (
            <div key={article.id} className="py-3 flex items-center justify-between">
              <div>
                <div className="font-medium text-sm">{article.title}</div>
                <div className="text-xs text-muted-foreground font-mono mt-1">{article.status}</div>
              </div>
              <div className="text-xs text-muted-foreground">{new Date(article.createdAt).toLocaleDateString()}</div>
            </div>
          ))}
          {!stats?.recentArticles?.length && (
            <div className="text-sm text-muted-foreground py-4 text-center">No recent articles found.</div>
          )}
        </div>
      </div>
    </div>
  );
}