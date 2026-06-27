import { useState } from "react";
import { useRoute, useLocation, Link } from "wouter";
import {
  useGetArticle,
  getGetArticleQueryKey,
  useListBranches,
  usePublishArticle,
  getListArticlesQueryKey,
  getGetArticleStatsQueryKey,
} from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";
import {
  ArrowLeft,
  Copy,
  CheckCheck,
  Github,
  ExternalLink,
  FileText,
  Hash,
  AlignLeft,
  Globe,
} from "lucide-react";
import { format } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { StatusBadge } from "@/components/status-badge";

export function ArticleDetail() {
  const [, params] = useRoute("/articles/:id");
  const id = params?.id ? parseInt(params.id, 10) : null;
  const [, setLocation] = useLocation();
  const queryClient = useQueryClient();

  const { data: article, isLoading } = useGetArticle(id!, {
    query: { enabled: !!id, queryKey: getGetArticleQueryKey(id!) },
  });
  const { data: branches = [] } = useListBranches();
  const publishMutation = usePublishArticle({
    mutation: {
      onSuccess: (result) => {
        queryClient.invalidateQueries({ queryKey: getGetArticleQueryKey(id!) });
        queryClient.invalidateQueries({ queryKey: getListArticlesQueryKey() });
        queryClient.invalidateQueries({ queryKey: getGetArticleStatsQueryKey() });
        setPublishSuccess(result.url);
      },
    },
  });

  const [copied, setCopied] = useState(false);
  const [showPublish, setShowPublish] = useState(false);
  const [branch, setBranch] = useState("");
  const [filename, setFilename] = useState("");
  const [commitMessage, setCommitMessage] = useState("");
  const [publishSuccess, setPublishSuccess] = useState<string | null>(null);

  function handleCopy() {
    if (!article?.content) return;
    navigator.clipboard.writeText(article.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleOpenPublish() {
    setBranch(branches[0]?.name ?? "main");
    setFilename(article?.slug ?? `gta6-article-${id}`);
    setCommitMessage(`Add article: ${article?.topic ?? ""}`);
    setShowPublish(true);
    setPublishSuccess(null);
  }

  function handlePublish() {
    if (!id || !branch || !filename) return;
    publishMutation.mutate({
      id,
      data: { branch, filename, commitMessage: commitMessage || undefined },
    });
  }

  if (!id) {
    return (
      <div className="p-8 text-muted-foreground">Invalid article ID.</div>
    );
  }

  if (isLoading) {
    return (
      <div className="p-8 max-w-5xl mx-auto space-y-6">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-96 w-full" />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="p-8 text-muted-foreground">Article not found.</div>
    );
  }

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <button
            onClick={() => setLocation("/admin/articles")}
            className="mt-1 text-muted-foreground hover:text-foreground transition-colors"
            data-testid="button-back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl font-display font-bold tracking-tight leading-tight">{article.topic}</h1>
            <div className="flex items-center gap-2 mt-2 flex-wrap">
              <span className="font-mono text-xs px-1.5 py-0.5 bg-secondary rounded text-muted-foreground">
                {article.category}
              </span>
              <StatusBadge status={article.status} />
              {article.wordCount && (
                <span className="text-xs text-muted-foreground">{article.wordCount.toLocaleString()} words</span>
              )}
              <span className="text-xs text-muted-foreground">
                {format(new Date(article.createdAt), "MMM d, yyyy · h:mm a")}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {article.content && (
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-border bg-card text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              data-testid="button-copy"
            >
              {copied ? <CheckCheck className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied" : "Copy"}
            </button>
          )}
          {article.status !== "published" && article.content && (
            <button
              onClick={handleOpenPublish}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
              data-testid="button-publish"
            >
              <Github className="w-4 h-4" />
              Publish to GitHub
            </button>
          )}
          {article.status === "published" && article.githubUrl && (
            <a
              href={article.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-semibold hover:bg-emerald-500/20 transition-colors"
              data-testid="link-published"
            >
              <ExternalLink className="w-4 h-4" />
              View on GitHub
            </a>
          )}
        </div>
      </div>

      {/* Metadata panel */}
      {(article.seoTitle || article.metaDescription || article.slug) && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {article.seoTitle && (
            <MetaCard icon={Hash} label="SEO Title" value={article.seoTitle} testId="meta-seo-title" />
          )}
          {article.slug && (
            <MetaCard icon={Globe} label="URL Slug" value={article.slug} mono testId="meta-slug" />
          )}
          {article.metaDescription && (
            <MetaCard icon={AlignLeft} label="Meta Description" value={article.metaDescription} testId="meta-description" />
          )}
        </div>
      )}

      {/* Publish panel */}
      {showPublish && !publishSuccess && (
        <div className="rounded-lg border border-primary/30 bg-primary/5 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-semibold text-sm text-foreground">Publish to GitHub</h3>
            <button onClick={() => setShowPublish(false)} className="text-muted-foreground hover:text-foreground text-xs">
              Cancel
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-muted-foreground">Branch</label>
              <select
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="w-full bg-card border border-border rounded-md px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                data-testid="select-branch"
              >
                {branches.length === 0 && <option value="main">main</option>}
                {branches.map((b) => (
                  <option key={b.name} value={b.name}>{b.name}</option>
                ))}
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-muted-foreground">Filename (.md)</label>
              <input
                type="text"
                value={filename}
                onChange={(e) => setFilename(e.target.value)}
                className="w-full bg-card border border-border rounded-md px-3 py-2 text-sm text-foreground font-mono focus:outline-none focus:ring-2 focus:ring-primary"
                data-testid="input-filename"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">Commit message (optional)</label>
            <input
              type="text"
              value={commitMessage}
              onChange={(e) => setCommitMessage(e.target.value)}
              className="w-full bg-card border border-border rounded-md px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              data-testid="input-commit-message"
            />
          </div>
          <button
            onClick={handlePublish}
            disabled={publishMutation.isPending || !branch || !filename}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            data-testid="button-confirm-publish"
          >
            <Github className="w-4 h-4" />
            {publishMutation.isPending ? "Publishing…" : "Confirm Publish"}
          </button>
          {publishMutation.isError && (
            <p className="text-xs text-destructive-foreground">
              {(publishMutation.error as Error)?.message ?? "Publish failed"}
            </p>
          )}
        </div>
      )}

      {publishSuccess && (
        <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 flex items-center gap-3">
          <CheckCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="text-sm text-emerald-400">Published successfully.</span>
          <a
            href={publishSuccess}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-xs text-emerald-400 hover:text-emerald-300 underline underline-offset-2 flex items-center gap-1"
            data-testid="link-publish-success"
          >
            View on GitHub <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      )}

      {/* Article content */}
      {article.content ? (
        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
            <FileText className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-mono text-muted-foreground">article.md</span>
          </div>
          <div
            className="p-6 font-mono text-sm text-foreground/90 whitespace-pre-wrap leading-relaxed overflow-y-auto max-h-[70vh]"
            data-testid="text-content"
          >
            {article.content}
          </div>
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-border p-12 text-center text-muted-foreground">
          <p className="text-sm">No content yet. This article may still be generating.</p>
        </div>
      )}
    </div>
  );
}

function MetaCard({
  icon: Icon,
  label,
  value,
  mono = false,
  testId,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  mono?: boolean;
  testId?: string;
}) {
  return (
    <div className="rounded-md border border-border bg-card p-3 space-y-1">
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Icon className="w-3.5 h-3.5" />
        {label}
      </div>
      <p
        className={`text-xs text-foreground line-clamp-3 ${mono ? "font-mono" : ""}`}
        data-testid={testId}
      >
        {value}
      </p>
    </div>
  );
}
