import { useGetArticleStats, useListArticles } from "@workspace/api-client-react";
import { Link } from "wouter";
import { ArrowRight, Activity, FileText, CheckCircle2, Zap } from "lucide-react";
import { format } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

export function Home() {
  const { data: stats, isLoading: statsLoading } = useGetArticleStats();
  const { data: articles, isLoading: articlesLoading } = useListArticles();

  const recentArticles = articles?.slice(0, 5) || [];

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold tracking-tight">Overview</h1>
          <p className="text-muted-foreground mt-1">System status and content metrics.</p>
        </div>
        <Link href="/generate">
          <div className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 cursor-pointer" data-testid="button-quick-generate">
            <Zap className="w-4 h-4 mr-2" />
            Generate New
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard 
          title="Total Articles" 
          value={stats?.total} 
          icon={FileText} 
          isLoading={statsLoading} 
        />
        <StatCard 
          title="Published" 
          value={stats?.published} 
          icon={CheckCircle2} 
          isLoading={statsLoading} 
        />
        <StatCard 
          title="Generating" 
          value={stats?.generating} 
          icon={Activity} 
          isLoading={statsLoading} 
          highlight
        />
        <StatCard 
          title="Words Generated" 
          value={stats?.totalWords ? new Intl.NumberFormat().format(stats.totalWords) : 0} 
          icon={PenTool} 
          isLoading={statsLoading} 
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-display font-semibold">Recent Activity</h2>
          <Link href="/articles">
            <div className="text-sm text-primary hover:text-primary/80 flex items-center gap-1 cursor-pointer">
              View all <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        <div className="border border-border rounded-lg bg-card/50 backdrop-blur-sm overflow-hidden">
          {articlesLoading ? (
            <div className="divide-y divide-border">
              {[1, 2, 3].map(i => (
                <div key={i} className="p-4 flex items-center gap-4">
                  <Skeleton className="h-4 w-48" />
                  <Skeleton className="h-4 w-24 ml-auto" />
                </div>
              ))}
            </div>
          ) : recentArticles.length > 0 ? (
            <div className="divide-y divide-border">
              {recentArticles.map(article => (
                <Link key={article.id} href={`/articles/${article.id}`}>
                  <div className="p-4 flex items-center justify-between hover:bg-secondary/50 transition-colors cursor-pointer group">
                    <div>
                      <div className="font-medium group-hover:text-primary transition-colors">{article.topic}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                        <span className="font-mono text-xs px-1.5 py-0.5 bg-secondary rounded text-secondary-foreground">{article.category}</span>
                        <span>•</span>
                        <span>{format(new Date(article.createdAt), "MMM d, h:mm a")}</span>
                      </div>
                    </div>
                    <StatusBadge status={article.status} />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-muted-foreground">
              No articles found. Generate your first one to get started.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon: Icon, isLoading, highlight = false }: any) {
  return (
    <div className={`p-6 rounded-lg border ${highlight ? 'border-primary/50 bg-primary/5' : 'border-border bg-card'}`}>
      <div className="flex items-center gap-3 text-muted-foreground mb-4">
        <Icon className={`w-5 h-5 ${highlight ? 'text-primary' : ''}`} />
        <span className="text-sm font-medium">{title}</span>
      </div>
      {isLoading ? (
        <Skeleton className="h-8 w-24" />
      ) : (
        <div className={`text-3xl font-display font-bold ${highlight ? 'text-primary' : 'text-foreground'}`}>
          {value || 0}
        </div>
      )}
    </div>
  );
}

import { PenTool } from "lucide-react";

export function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    pending: "bg-secondary text-secondary-foreground border-border",
    generating: "bg-primary/20 text-primary border-primary/30 animate-pulse",
    done: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    error: "bg-destructive/20 text-destructive-foreground border-destructive/30",
    published: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  };

  return (
    <Badge variant="outline" className={`font-mono uppercase tracking-wider text-[10px] ${styles[status] || styles.pending}`}>
      {status}
    </Badge>
  );
}
