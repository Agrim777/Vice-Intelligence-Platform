import { useEffect } from "react";
import { Link, useRoute } from "wouter";
import { Clock } from "lucide-react";
import { useListPublicArticles } from "@workspace/api-client-react";
import { setPageMeta } from "@/lib/seo";
import { Skeleton } from "@/components/ui/skeleton";

export function TagPage() {
  const [, params] = useRoute("/tag/:slug");
  const slug = params?.slug;

  const { data, isLoading } = useListPublicArticles({ limit: 50, tag: slug });

  useEffect(() => {
    if (slug) {
      setPageMeta({
        title: `#${slug.toUpperCase()} — Vice Intelligence Platform`,
        description: `Browse articles tagged with ${slug}.`,
        path: `/tag/${slug}`,
      });
    }
  }, [slug]);

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 min-h-screen">
      <div className="mb-12 border-b border-border pb-6">
        <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Tag</div>
        <h1 className="font-headline text-5xl uppercase text-primary">#{slug}</h1>
      </div>

      {isLoading ? (
        <div className="space-y-6">
          {[1, 2, 3].map(i => <Skeleton key={i} className="h-32 w-full rounded-xl" />)}
        </div>
      ) : (
        <div className="space-y-6">
          {data?.articles?.map((article) => (
            <Link key={article.id} href={`/${article.category?.slug || 'news'}/${article.slug}`}>
              <div className="group border border-border bg-card rounded-xl p-5 hover:border-primary/50 transition-colors cursor-pointer flex gap-6">
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-headline text-xl group-hover:text-primary transition-colors">{article.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1 mb-2">{article.excerpt}</p>
                  <div className="text-[10px] uppercase tracking-widest font-mono text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {new Date(article.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </Link>
          ))}
          {!data?.articles?.length && (
            <div className="text-center py-20 text-muted-foreground">
              No articles found with this tag.
            </div>
          )}
        </div>
      )}
    </div>
  );
}