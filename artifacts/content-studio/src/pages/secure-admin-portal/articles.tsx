import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useListAdminArticles, useDeleteAdminArticle } from "@workspace/api-client-react";
import { Search, Plus, Trash2, Edit2, FileText, CheckCircle2, Activity, Archive, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useQueryClient } from "@tanstack/react-query";
import { getListAdminArticlesQueryKey } from "@workspace/api-client-react";

export function AdminArticles() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<any>(undefined);
  const { data, isLoading } = useListAdminArticles({ search, status: statusFilter });
  const deleteMutation = useDeleteAdminArticle();
  const queryClient = useQueryClient();
  const [, setLocation] = useLocation();

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this article?")) {
      deleteMutation.mutate({ id }, {
        onSuccess: () => queryClient.invalidateQueries({ queryKey: getListAdminArticlesQueryKey() })
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-headline text-3xl">Articles</h1>
        <Button onClick={() => setLocation("/secure-admin-portal/articles/new")}>
          <Plus className="w-4 h-4 mr-2" /> New Article
        </Button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            placeholder="Search articles..." 
            className="pl-9"
          />
        </div>
        <select 
          className="bg-card border border-border rounded-md px-3 text-sm focus:outline-none"
          value={statusFilter || ""}
          onChange={(e) => setStatusFilter(e.target.value || undefined)}
        >
          <option value="">All Statuses</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
          <option value="scheduled">Scheduled</option>
          <option value="archived">Archived</option>
        </select>
      </div>

      <div className="border border-border rounded-xl bg-card overflow-hidden">
        {isLoading ? (
          <div className="p-4 space-y-4">
            {[1, 2, 3, 4, 5].map(i => <Skeleton key={i} className="h-12 w-full" />)}
          </div>
        ) : (
          <table className="w-full text-sm text-left">
            <thead className="bg-secondary/50 text-muted-foreground uppercase tracking-widest text-[10px]">
              <tr>
                <th className="px-4 py-3 font-medium">Title</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Views</th>
                <th className="px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {data?.articles?.map((article) => (
                <tr key={article.id} className="hover:bg-secondary/20 transition-colors">
                  <td className="px-4 py-3 font-medium">{article.title}</td>
                  <td className="px-4 py-3">
                    <Badge variant={article.status === "published" ? "default" : "secondary"}>{article.status}</Badge>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground"><Eye className="w-3 h-3 inline mr-1" />{article.viewCount}</td>
                  <td className="px-4 py-3 text-muted-foreground">{new Date(article.createdAt).toLocaleDateString()}</td>
                  <td className="px-4 py-3 text-right">
                    <Button variant="ghost" size="sm" onClick={() => setLocation(`/secure-admin-portal/articles/${article.id}/edit`)}>
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive" onClick={() => handleDelete(article.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
              {!data?.articles?.length && (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">No articles found.</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}