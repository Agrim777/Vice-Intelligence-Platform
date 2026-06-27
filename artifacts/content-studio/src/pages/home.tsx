import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, Clock, Eye, Star, Flame } from "lucide-react";
import { useGetHomepageData } from "@workspace/api-client-react";
import { setPageMeta } from "@/lib/seo";
import { Skeleton } from "@/components/ui/skeleton";

export function Home() {
  const { data, isLoading } = useGetHomepageData();

  useEffect(() => {
    setPageMeta({
      title: "Vice Intelligence Platform | Definitive GTA Guides & News",
      description: "The ultimate database for GTA 6, GTA 5, cheats, vehicles, weapons, and breaking news.",
      path: "/",
    });
  }, []);

  if (isLoading) return <div className="p-8 space-y-8"><Skeleton className="h-[400px] w-full" /><Skeleton className="h-[200px] w-full" /></div>;

  return (
    <div className="min-h-screen pb-20">
      <section className="relative overflow-hidden border-b border-border bg-black h-[500px] flex items-center">
        {data?.config?.heroImage && (
          <img src={data.config.heroImage} alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center space-y-6">
          <h1 className="font-headline text-5xl md:text-7xl text-white tracking-widest drop-shadow-md">
            {data?.config?.heroTitle || "VICE INTELLIGENCE"}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-medium">
            {data?.config?.heroSubtitle || "The Definitive GTA Database & Guide"}
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <Link href="/news">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded text-sm font-bold tracking-widest hover:bg-primary/90 transition-colors uppercase cursor-pointer">
                Latest Intel
              </button>
            </Link>
            <Link href="/guides">
              <button className="bg-transparent border border-white text-white px-8 py-3 rounded text-sm font-bold tracking-widest hover:bg-white/10 transition-colors uppercase cursor-pointer">
                Browse Guides
              </button>
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pt-16 space-y-20">
        
        {/* Editor Picks */}
        {data?.editorPicks && data.editorPicks.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Star className="w-6 h-6 text-primary" />
              <h2 className="font-headline text-3xl">EDITOR'S PICKS</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {data.editorPicks.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </section>
        )}

        {/* Trending & Popular */}
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-6">
            {data?.config?.showLatest !== false && data?.latest && data.latest.length > 0 && (
              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary" />
                  <h2 className="font-headline text-3xl">LATEST INTELLIGENCE</h2>
                </div>
                <div className="space-y-6">
                  {data.latest.map(article => (
                    <ArticleRow key={article.id} article={article} />
                  ))}
                </div>
              </section>
            )}
          </div>
          
          <div className="space-y-10">
            {data?.config?.showPopular !== false && data?.popular && data.popular.length > 0 && (
              <section className="space-y-6">
                <div className="flex items-center gap-3 border-b border-border pb-2">
                  <Flame className="w-5 h-5 text-cyan-400" />
                  <h2 className="font-headline text-xl">MOST POPULAR</h2>
                </div>
                <div className="space-y-4">
                  {data.popular.slice(0, 5).map((article, i) => (
                    <Link key={article.id} href={`/news/${article.slug}`}>
                      <div className="flex gap-4 group cursor-pointer">
                        <span className="font-headline text-3xl text-muted-foreground/30 group-hover:text-primary transition-colors">{(i + 1).toString().padStart(2, '0')}</span>
                        <div>
                          <h4 className="font-bold text-sm group-hover:text-primary transition-colors line-clamp-2">{article.title}</h4>
                          <div className="text-xs text-muted-foreground mt-1">{new Date(article.createdAt).toLocaleDateString()}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ArticleCard({ article }: { article: any }) {
  return (
    <Link href={`/news/${article.slug}`}>
      <div className="group cursor-pointer border border-border bg-card rounded-xl overflow-hidden hover:border-primary/50 transition-colors h-full flex flex-col">
        {article.featuredImage ? (
          <div className="w-full h-48 overflow-hidden">
            <img src={article.featuredImage} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        ) : (
          <div className="w-full h-48 bg-secondary/50 flex items-center justify-center">
            <span className="font-headline text-muted-foreground text-4xl opacity-30">VICE</span>
          </div>
        )}
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            {article.category && (
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/20 px-2 py-0.5 rounded-full">{article.category.name}</span>
            )}
            <span className="text-xs text-muted-foreground"><Clock className="w-3 h-3 inline mr-1" />{new Date(article.createdAt).toLocaleDateString()}</span>
          </div>
          <h3 className="font-bold text-lg group-hover:text-primary transition-colors mb-2 line-clamp-2">{article.title}</h3>
          {article.excerpt && (
            <p className="text-sm text-muted-foreground line-clamp-2 mt-auto">{article.excerpt}</p>
          )}
        </div>
      </div>
    </Link>
  );
}

function ArticleRow({ article }: { article: any }) {
  return (
    <Link href={`/news/${article.slug}`}>
      <div className="group cursor-pointer flex gap-6 border-b border-border pb-6 last:border-0">
        {article.featuredImage ? (
          <div className="w-32 md:w-48 h-24 md:h-32 shrink-0 rounded-lg overflow-hidden bg-secondary">
            <img src={article.featuredImage} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        ) : (
          <div className="w-32 md:w-48 h-24 md:h-32 shrink-0 rounded-lg bg-secondary/50 flex items-center justify-center">
            <span className="font-headline text-muted-foreground text-2xl opacity-30">VICE</span>
          </div>
        )}
        <div className="flex-1 py-1 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            {article.category && (
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{article.category.name}</span>
            )}
            <span className="text-xs text-muted-foreground">{new Date(article.createdAt).toLocaleDateString()}</span>
          </div>
          <h3 className="font-bold text-lg md:text-xl group-hover:text-primary transition-colors mb-2 line-clamp-2">{article.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 hidden md:block">{article.excerpt}</p>
        </div>
      </div>
    </Link>
  );
}