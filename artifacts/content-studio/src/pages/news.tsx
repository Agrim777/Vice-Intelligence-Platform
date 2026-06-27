import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Clock, Eye, ChevronRight } from "lucide-react";
import { useListPublicArticles } from "@workspace/api-client-react";
import { setPageMeta } from "@/lib/seo";
import { Skeleton } from "@/components/ui/skeleton";

export function News() {
  const { data, isLoading } = useListPublicArticles({ limit: 50 });
  const [, setLocation] = useLocation();

  useEffect(() => {
    setPageMeta({
      title: "GTA News Hub — Latest Updates, Official Reveals",
      description: "All GTA news in one place — official announcements and verified facts.",
      path: "/news",
    });
  }, []);

  return (
    <div className="min-h-screen">
      <div className="relative border-b border-border overflow-hidden bg-card/30">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h1 className="font-headline text-5xl md:text-6xl mb-4">INTELLIGENCE FEED</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">The latest verified updates, official reveals, and analytical deep-dives from the Vice Intelligence team.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {isLoading ? (
          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map(i => <Skeleton key={i} className="h-40 w-full rounded-xl" />)}
          </div>
        ) : (
          <div className="space-y-6">
            {data?.articles?.map((article) => (
              <Link key={article.id} href={`/news/${article.slug}`}>
                <div className="group border border-border bg-card rounded-xl p-5 hover:border-primary/50 transition-colors cursor-pointer flex flex-col md:flex-row gap-6">
                  {article.featuredImage && (
                    <div className="w-full md:w-48 h-40 md:h-32 shrink-0 rounded-lg overflow-hidden bg-secondary">
                      <img src={article.featuredImage} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                  )}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-mono text-muted-foreground">
                      {article.category && <span className="text-primary border border-primary/20 px-2 py-0.5 rounded">{article.category.name}</span>}
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {new Date(article.createdAt).toLocaleDateString()}</span>
                      {article.viewCount !== undefined && <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {article.viewCount}</span>}
                    </div>
                    <h3 className="font-headline text-2xl group-hover:text-primary transition-colors">{article.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{article.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
            {!data?.articles?.length && (
              <div className="text-center py-20 text-muted-foreground border border-dashed border-border rounded-xl">
                No articles published yet.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}