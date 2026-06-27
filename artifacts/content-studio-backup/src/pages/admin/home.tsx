import { useGetArticleStats, useListArticles } from "@workspace/api-client-react";
import { Link } from "wouter";
import { ArrowRight, Activity, FileText, CheckCircle2, Zap } from "lucide-react";
import { format } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

export function Home() {
  const { data: stats, isLoading: statsLoading } = useGetArticleStats();
  const { data: articles, isLoading: articlesLoading } = useListArticles();

  const statCards = [
    { label: "Total Articles", value: stats?.total ?? 0, icon: FileText, color: "text-primary" },
    { label: "Published", value: stats?.published ?? 0, icon: CheckCircle2, color: "text-emerald-400" },
    { label: "Drafts", value: stats?.draft ?? 0, icon: Activity, color: "text-amber-400" },
    { label: "This Week", value: stats?.thisWeek ?? 0, icon: Zap, color: "text-cyan-400" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-10">
      <div>
        <h1 className="font-headline text-4xl md:text-5xl">STUDIO DASHBOARD</h1>
        <p className="text-muted-foreground mt-2">Content management for Vice Intelligence.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statCards.map((card) => (
          <div key={card.label} className="border border-border bg-card rounded-md p-5">
            <card.icon className={`w-5 h-5 mb-3 ${card.color}`} />
            {statsLoading ? (
              <Skeleton className="h-8 w-16 mb-1" />
            ) : (
              <div className="font-headline text-3xl">{card.value}</div>
            )}
            <div className="text-xs text-muted-foreground mt-1">{card.label}</div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="/admin/generate">
          <div className="group border border-border bg-card rounded-md p-5 hover:border-primary/30 hover-lift transition-all cursor-pointer">
            <Zap className="w-5 h-5 mb-3 text-primary" />
            <div className="font-display font-semibold text-sm group-hover:text-primary transition-colors">Generate Article</div>
            <div className="text-xs text-muted-foreground mt-1">AI-powered article generation</div>
            <ArrowRight className="w-4 h-4 mt-3 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
        </Link>
        <Link href="/admin/bulk">
          <div className="group border border-border bg-card rounded-md p-5 hover:border-primary/30 hover-lift transition-all cursor-pointer">
            <Activity className="w-5 h-5 mb-3 text-cyan-400" />
            <div className="font-display font-semibold text-sm group-hover:text-primary transition-colors">Bulk Generate</div>
            <div className="text-xs text-muted-foreground mt-1">Create multiple articles at once</div>
            <ArrowRight className="w-4 h-4 mt-3 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
        </Link>
        <Link href="/admin/articles">
          <div className="group border border-border bg-card rounded-md p-5 hover:border-primary/30 hover-lift transition-all cursor-pointer">
            <FileText className="w-5 h-5 mb-3 text-amber-400" />
            <div className="font-display font-semibold text-sm group-hover:text-primary transition-colors">Article Library</div>
            <div className="text-xs text-muted-foreground mt-1">Manage all content</div>
            <ArrowRight className="w-4 h-4 mt-3 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
        </Link>
      </div>

      {/* Recent Articles */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-headline text-2xl md:text-3xl">RECENT ARTICLES</h2>
          <Link href="/admin/articles">
            <div className="text-sm text-primary hover:text-primary/80 flex items-center gap-1 cursor-pointer">
              View all <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
        <div className="border border-border bg-card rounded-md overflow-hidden">
          {articlesLoading ? (
            <div className="p-4 space-y-3">
              {[1, 2, 3].map((i) => <Skeleton key={i} className="h-12 w-full" />)}
            </div>
          ) : (
            <div className="divide-y divide-border">
              {(articles ?? []).slice(0, 5).map((article: any) => (
                <Link key={article.id} href={`/admin/articles/${article.id}`}>
                  <div className="group flex items-center gap-4 px-4 py-3 hover:bg-secondary/40 transition-colors cursor-pointer">
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm truncate group-hover:text-primary transition-colors">{article.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{article.game} · {article.category}</div>
                    </div>
                    <Badge variant={article.status === "published" ? "default" : "secondary"} className="shrink-0 text-[10px]">
                      {article.status}
                    </Badge>
                    <div className="shrink-0 text-xs text-muted-foreground hidden sm:block">
                      {article.createdAt ? format(new Date(article.createdAt), "MMM d") : "—"}
                    </div>
                  </div>
                </Link>
              ))}
              {(articles ?? []).length === 0 && (
                <div className="py-10 text-center text-muted-foreground text-sm">
                  No articles yet. <Link href="/admin/generate"><span className="text-primary cursor-pointer">Generate your first one →</span></Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
