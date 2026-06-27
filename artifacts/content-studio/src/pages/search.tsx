import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Search as SearchIcon, Clock } from "lucide-react";
import { useSearchArticles } from "@workspace/api-client-react";
import { setPageMeta } from "@/lib/seo";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";

export function Search() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(query), 500);
    return () => clearTimeout(t);
  }, [query]);

  const { data, isLoading } = useSearchArticles({ q: debouncedQuery, limit: 50 }, { query: { enabled: debouncedQuery.length > 2 } });

  useEffect(() => {
    setPageMeta({
      title: "Search — Vice Intelligence Platform",
      description: "Search for GTA guides, news, and cheat codes.",
      path: "/search",
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 min-h-screen space-y-10">
      <div className="text-center space-y-6">
        <h1 className="font-headline text-5xl">SEARCH</h1>
        <div className="relative max-w-xl mx-auto text-left">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" />
          <Input 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            placeholder="Search intel, guides, codes..." 
            className="pl-14 py-6 text-lg rounded-2xl bg-card border-2 border-border focus-visible:border-primary focus-visible:ring-0"
            autoFocus
          />
        </div>
      </div>

      <div className="space-y-6">
        {isLoading && debouncedQuery.length > 2 && (
          <div className="space-y-4">
            {[1, 2, 3].map(i => <Skeleton key={i} className="h-24 w-full rounded-xl" />)}
          </div>
        )}

        {data?.articles && data.articles.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Results for "{debouncedQuery}"</h3>
            {data.articles.map((article) => (
              <Link key={article.id} href={`/${article.category?.slug || 'news'}/${article.slug}`}>
                <div className="group border border-border bg-card rounded-xl p-5 hover:border-primary/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-mono text-muted-foreground mb-2">
                    {article.category && <span className="text-primary">{article.category.name}</span>}
                    <span><Clock className="w-3 h-3 inline mr-1" />{new Date(article.createdAt).toLocaleDateString()}</span>
                  </div>
                  <h3 className="font-headline text-xl group-hover:text-primary transition-colors">{article.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {data?.articles?.length === 0 && debouncedQuery.length > 2 && !isLoading && (
          <div className="text-center py-20 text-muted-foreground">
            No intelligence found for "{debouncedQuery}".
          </div>
        )}
      </div>
    </div>
  );
}