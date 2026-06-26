import { useState } from "react";
import { Link } from "wouter";
import { useListArticles, useDeleteArticle, getListArticlesQueryKey } from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";
import { Search, Plus, Trash2, ExternalLink } from "lucide-react";
import { format } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";
import { StatusBadge } from "@/components/status-badge";
import { Badge } from "@/components/ui/badge";

const STATUSES = ["all", "done", "published", "generating", "error", "pending"] as const;

export function Articles() {
  const { data: articles = [], isLoading } = useListArticles();
  const queryClient = useQueryClient();
  const deleteMutation = useDeleteArticle({
    mutation: {
      onSuccess: () => queryClient.invalidateQueries({ queryKey: getListArticlesQueryKey() }),
    },
  });

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filtered = articles.filter((a) => {
    const matchesSearch =
      !search ||
      a.topic.toLowerCase().includes(search.toLowerCase()) ||
      a.category.toLowerCase().includes(search.toLowerCase()) ||
      (a.seoTitle ?? "").toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || a.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold tracking-tight">Article Library</h1>
          <p className="text-muted-foreground mt-1">{articles.length} articles total</p>
        </div>
        <Link href="/admin/generate">
          <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-semibold transition-colors cursor-pointer" data-testid="button-new-article">
            <Plus className="w-4 h-4" />
            New Article
          </div>
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search by topic, category, or SEO title…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-card border border-border rounded-md pl-9 pr-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            data-testid="input-search"
          />
        </div>
        <div className="flex items-center gap-1.5 flex-wrap">
          {STATUSES.map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-wider transition-colors ${
                statusFilter === s
                  ? "bg-primary/20 text-primary border border-primary/40"
                  : "bg-secondary text-muted-foreground border border-border hover:text-foreground"
              }`}
              data-testid={`filter-${s}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="border border-border rounded-lg bg-card overflow-hidden">
        {isLoading ? (
          <div className="divide-y divide-border">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="p-4 flex items-center gap-4">
                <Skeleton className="h-4 w-64" />
                <Skeleton className="h-4 w-24 ml-auto" />
                <Skeleton className="h-4 w-16" />
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-12 text-center text-muted-foreground space-y-2">
            <Search className="w-8 h-8 mx-auto opacity-30" />
            <p className="text-sm">No articles found. Try a different search or filter.</p>
          </div>
        ) : (
          <div className="divide-y divide-border">
            {filtered.map((article) => (
              <div key={article.id} className="group flex items-center gap-4 p-4 hover:bg-secondary/40 transition-colors" data-testid={`row-article-${article.id}`}>
                <div className="flex-1 min-w-0">
                  <Link href={`/admin/articles/${article.id}`}>
                    <div className="font-medium text-sm truncate group-hover:text-primary transition-colors cursor-pointer" data-testid={`text-topic-${article.id}`}>
                      {article.topic}
                    </div>
                  </Link>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-mono text-[11px] px-1.5 py-0.5 bg-secondary rounded text-muted-foreground">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {format(new Date(article.createdAt), "MMM d, yyyy")}
                    </span>
                    {article.wordCount && (
                      <span className="text-xs text-muted-foreground">{article.wordCount.toLocaleString()} words</span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <StatusBadge status={article.status} />
                  {article.githubUrl && (
                    <a
                      href={article.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-github-${article.id}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <button
                    onClick={() => {
                      if (confirm("Delete this article?")) {
                        deleteMutation.mutate({ id: article.id });
                      }
                    }}
                    className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive-foreground transition-all"
                    data-testid={`button-delete-${article.id}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
