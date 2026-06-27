import { useEffect } from "react";
import { useRoute, Link } from "wouter";
import { Clock, Eye, Share2, Copy } from "lucide-react";
import { useGetPublicArticle, getGetPublicArticleQueryKey } from "@workspace/api-client-react";
import { setPageMeta } from "@/lib/seo";
import { Skeleton } from "@/components/ui/skeleton";
import MDEditor from '@uiw/react-md-editor';
import { useToast } from "@/hooks/use-toast";

export function NewsArticlePage() {
  const [, params] = useRoute("/:type/:slug");
  const slug = params?.slug;
  const { data: detail, isLoading } = useGetPublicArticle(slug ?? "", { query: { enabled: !!slug, queryKey: getGetPublicArticleQueryKey(slug ?? "") } });
  const { toast } = useToast();

  useEffect(() => {
    if (detail?.article) {
      setPageMeta({
        title: detail.article.seoTitle || detail.article.title,
        description: detail.article.metaDescription || detail.article.excerpt || "",
        path: `/${params?.type}/${detail.article.slug}`,
      });
    }
  }, [detail, params?.type]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({ title: "Link copied to clipboard" });
  };

  if (isLoading) return <div className="max-w-3xl mx-auto px-6 py-20"><Skeleton className="h-[60vh] w-full" /></div>;

  if (!detail?.article) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h1 className="font-headline text-3xl mb-3">Article Not Found</h1>
        <Link href="/"><div className="text-primary cursor-pointer hover:underline">← Return Home</div></Link>
      </div>
    );
  }

  const { article, breadcrumbs, related } = detail;

  return (
    <article className="min-h-screen pb-20">
      {/* Header */}
      <div className="border-b border-border bg-card/30 pt-10 pb-16">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-primary">
            {article.category?.name && <span className="border border-primary/20 px-2 py-0.5 rounded-full">{article.category.name}</span>}
          </div>
          <h1 className="font-headline text-4xl md:text-5xl leading-tight">{article.title}</h1>
          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground font-mono uppercase tracking-widest">
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {new Date(article.createdAt).toLocaleDateString()}</span>
            {article.readingTime && <span>{article.readingTime} min read</span>}
            <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {article.viewCount} views</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10 space-y-12">
        {article.featuredImage && (
          <div className="w-full rounded-xl overflow-hidden border border-border shadow-2xl">
            <img src={article.featuredImage} alt={article.title} className="w-full h-auto object-cover" />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-invert prose-pink max-w-none font-sans" data-color-mode="dark">
          <MDEditor.Markdown source={article.content || ""} style={{ backgroundColor: 'transparent' }} />
        </div>

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-6 border-t border-border">
            {article.tags.map(tag => (
              <Link key={tag.id} href={`/tag/${tag.slug}`}>
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground bg-secondary px-3 py-1.5 rounded cursor-pointer hover:text-primary hover:bg-primary/10 transition-colors">
                  #{tag.name}
                </span>
              </Link>
            ))}
          </div>
        )}

        {/* Share */}
        <div className="flex justify-center pt-8">
          <button onClick={handleShare} className="flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border hover:border-primary/50 hover:text-primary transition-colors text-sm font-medium">
            <Share2 className="w-4 h-4" /> Share Article
          </button>
        </div>

        {/* Related */}
        {related && related.length > 0 && (
          <div className="pt-12 border-t border-border">
            <h3 className="font-headline text-2xl mb-6">Read Next</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map(rel => (
                <Link key={rel.id} href={`/${params?.type}/${rel.slug}`}>
                  <div className="group border border-border bg-card p-4 rounded-xl cursor-pointer hover:border-primary/50 transition-colors">
                    <h4 className="font-bold text-sm group-hover:text-primary transition-colors line-clamp-2">{rel.title}</h4>
                    <span className="text-xs text-muted-foreground mt-2 block">{new Date(rel.createdAt).toLocaleDateString()}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}