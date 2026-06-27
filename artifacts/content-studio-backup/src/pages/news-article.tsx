import { useEffect } from "react";
import { useRoute, Link } from "wouter";
import { Clock, ChevronRight, ArrowLeft, Eye } from "lucide-react";
import { NEWS } from "@/data/news";
import { setPageMeta } from "@/lib/seo";

const TAG_STYLES: Record<string, string> = {
  confirmed: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  official: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  leaked: "text-amber-400 border-amber-500/30 bg-amber-500/10",
  rumor: "text-muted-foreground border-border bg-card",
  guide: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
  history: "text-violet-400 border-violet-500/30 bg-violet-500/10",
};
const TAG_LABELS: Record<string, string> = {
  confirmed: "✓ CONFIRMED",
  official: "✓ OFFICIAL",
  leaked: "⚠ LEAKED",
  rumor: "? RUMOR",
  guide: "GUIDE",
  history: "HISTORY",
};

function renderBody(body: string) {
  const paragraphs = body.split(/\n\n+/);
  return paragraphs.map((p, i) => {
    if (p.startsWith("## ")) {
      return <h2 key={i} className="font-headline text-2xl text-foreground mt-8 mb-3">{p.slice(3)}</h2>;
    }
    if (p.startsWith("### ")) {
      return <h3 key={i} className="font-display font-semibold text-lg text-foreground mt-6 mb-2">{p.slice(4)}</h3>;
    }
    if (p.startsWith("**") && p.endsWith("**") && !p.slice(2).includes("**")) {
      return <p key={i} className="font-semibold text-foreground mt-4">{p.slice(2, -2)}</p>;
    }
    // Bullet list
    if (p.trim().startsWith("- ")) {
      const items = p.trim().split("\n").filter(l => l.trim().startsWith("- "));
      return (
        <ul key={i} className="list-disc list-inside space-y-1 text-muted-foreground my-3">
          {items.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: boldify(item.slice(2)) }} />
          ))}
        </ul>
      );
    }
    // Table (markdown)
    if (p.includes("|") && p.includes("\n")) {
      const rows = p.split("\n").filter(r => r.trim() && !r.match(/^[\|\s\-:]+$/));
      return (
        <div key={i} className="overflow-x-auto my-4">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <tbody>
              {rows.map((row, j) => {
                const cells = row.split("|").filter(c => c.trim());
                const Tag = j === 0 ? "th" : "td";
                return (
                  <tr key={j} className={j === 0 ? "bg-card border-b border-border" : "border-b border-border/50 last:border-0"}>
                    {cells.map((cell, k) => (
                      <Tag key={k} className={`px-4 py-2 text-left ${j === 0 ? "font-mono text-xs uppercase tracking-widest text-muted-foreground" : "text-muted-foreground"}`}
                        dangerouslySetInnerHTML={{ __html: boldify(cell.trim()) }} />
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
    // Blockquote
    if (p.trim().startsWith(">")) {
      const text = p.replace(/^>\s*/gm, "");
      return (
        <blockquote key={i} className="border-l-2 border-primary pl-4 my-4 text-muted-foreground italic text-sm leading-relaxed"
          dangerouslySetInnerHTML={{ __html: boldify(text) }} />
      );
    }
    return (
      <p key={i} className="text-muted-foreground leading-relaxed mt-4"
        dangerouslySetInnerHTML={{ __html: boldify(p) }} />
    );
  });
}

function boldify(text: string) {
  return text.replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground">$1</strong>');
}

export function NewsArticlePage() {
  const [, params] = useRoute("/news/:id");
  const id = params?.id;
  const article = NEWS.find(n => n.id === id);

  useEffect(() => {
    if (!article) return;
    setPageMeta({
      title: article.title,
      description: article.summary,
      path: `/news/${article.id}`,
      type: "article",
    });
  }, [article]);

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <div className="text-4xl mb-4">404</div>
        <h1 className="font-headline text-3xl mb-3">Article Not Found</h1>
        <Link href="/news"><div className="text-primary cursor-pointer hover:underline">← Back to News</div></Link>
      </div>
    );
  }

  const related = NEWS.filter(n => n.id !== article.id && (n.tag === article.tag || n.hot)).slice(0, 4);

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 space-y-8">
      {/* Breadcrumb */}
      <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
        <Link href="/"><span className="hover:text-primary cursor-pointer">Home</span></Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/news"><span className="hover:text-primary cursor-pointer">GTA 6 News</span></Link>
        <ChevronRight className="w-3 h-3" />
        <span className="truncate max-w-[200px]">{article.title.slice(0, 40)}…</span>
      </div>

      {/* Header */}
      <div>
        <div className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest border px-3 py-1.5 rounded-full mb-4 ${TAG_STYLES[article.tag]}`}>
          {TAG_LABELS[article.tag]}
        </div>
        <h1 className="font-headline text-4xl md:text-5xl leading-tight mb-4">{article.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground font-mono">
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.date}</span>
          <span>Source: {article.source}</span>
          {article.readTime && <span>{article.readTime} read</span>}
          {article.views && <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {(article.views / 1000).toFixed(0)}K views</span>}
        </div>
      </div>

      {/* Summary card */}
      <div className="border border-primary/20 bg-primary/5 rounded-xl p-5">
        <div className="text-xs font-mono text-primary uppercase tracking-widest mb-2">TL;DR</div>
        <p className="text-sm leading-relaxed text-foreground/90">{article.summary}</p>
      </div>

      {/* Body */}
      <article className="space-y-0 text-[15px]">
        {article.body ? (
          renderBody(article.body)
        ) : (
          <p className="text-muted-foreground leading-relaxed">{article.summary}</p>
        )}
      </article>

      {/* CTA */}
      <div className="border border-primary/20 bg-card rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <div className="font-display font-semibold text-sm mb-1">Pre-order GTA 6 now</div>
          <div className="text-xs text-muted-foreground">All pre-orders include the Vintage Vice City Pack. Standard $79.99 · Ultimate $99.99. November 19, 2026.</div>
        </div>
        <Link href="/gta6/pre-order">
          <div className="shrink-0 px-4 py-2 rounded-md bg-primary text-background text-xs font-mono font-bold uppercase tracking-widest cursor-pointer hover:bg-primary/90 transition-colors">
            Pre-Order Guide →
          </div>
        </Link>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div>
          <h3 className="font-display font-semibold text-sm mb-3 text-muted-foreground uppercase tracking-widest">Related Articles</h3>
          <div className="space-y-2">
            {related.map(item => (
              <Link key={item.id} href={`/news/${item.id}`}>
                <div className="border border-border bg-card rounded-lg px-4 py-3 hover:border-primary/30 transition-colors cursor-pointer">
                  <div className="text-sm font-medium text-foreground leading-snug">{item.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">{item.date} · {item.source}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <Link href="/news">
        <div className="flex items-center gap-2 text-sm text-primary cursor-pointer hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to all GTA 6 news
        </div>
      </Link>
    </div>
  );
}
