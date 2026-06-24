import { useState, useRef } from "react";
import { useListBranches, getListArticlesQueryKey, getGetArticleStatsQueryKey } from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";
import { Plus, Trash2, Play, Square, ChevronDown, Github, CheckCircle2, XCircle, Loader2, Zap, Link as LinkIcon } from "lucide-react";

const CATEGORIES = [
  "GTA 6 News",
  "GTA 6 Release Date",
  "GTA 6 Trailer Analysis",
  "GTA 6 Hidden Details",
  "GTA 6 Map Predictions",
  "GTA 6 Vice City Guide",
  "GTA 6 Characters",
  "GTA 6 Businesses",
  "GTA 6 Vehicles",
  "GTA 6 Weapons",
  "GTA 6 Gameplay Features",
  "GTA 6 Graphics Analysis",
  "GTA 6 Easter Eggs",
  "GTA 6 Secrets",
  "GTA 6 Story Predictions",
  "GTA 6 Online Predictions",
  "GTA 6 PC Requirements",
  "GTA 6 PS5 Guide",
  "GTA 6 Xbox Guide",
  "GTA 6 Performance Guide",
];

interface QueueItem {
  id: string;
  topic: string;
  category: string;
}

type ItemStatus = "pending" | "generating" | "done" | "error" | "published";

interface ItemResult {
  status: ItemStatus;
  articleId?: number;
  githubUrl?: string;
  seoTitle?: string;
  wordCount?: number;
  errorMsg?: string;
  currentChunkLen?: number;
}

function uid() {
  return Math.random().toString(36).slice(2);
}

export function BulkGenerate() {
  const { data: branches = [] } = useListBranches();
  const queryClient = useQueryClient();

  const [queue, setQueue] = useState<QueueItem[]>([
    { id: uid(), topic: "", category: CATEGORIES[0] },
  ]);
  const [autoPush, setAutoPush] = useState(false);
  const [branch, setBranch] = useState("main");
  const [running, setRunning] = useState(false);
  const [results, setResults] = useState<Record<string, ItemResult>>({});
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [done, setDone] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  function addRow() {
    setQueue((q) => [...q, { id: uid(), topic: "", category: CATEGORIES[0] }]);
  }

  function removeRow(id: string) {
    setQueue((q) => q.filter((item) => item.id !== id));
  }

  function updateRow(id: string, field: keyof QueueItem, value: string) {
    setQueue((q) => q.map((item) => (item.id === id ? { ...item, [field]: value } : item)));
  }

  function addPreset(topics: string[], category: string) {
    const newItems = topics.map((topic) => ({ id: uid(), topic, category }));
    setQueue((q) => [...q.filter((i) => i.topic), ...newItems]);
  }

  const validQueue = queue.filter((i) => i.topic.trim());

  async function handleRun() {
    if (validQueue.length === 0 || running) return;
    setRunning(true);
    setDone(false);
    setCurrentIndex(null);

    // Initialize results
    const initial: Record<string, ItemResult> = {};
    validQueue.forEach((item) => { initial[item.id] = { status: "pending" }; });
    setResults(initial);

    abortRef.current = new AbortController();

    try {
      const response = await fetch("/api/articles/bulk-generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: validQueue.map(({ topic, category }) => ({ topic, category })),
          autoPush,
          branch,
        }),
        signal: abortRef.current.signal,
      });

      if (!response.ok || !response.body) throw new Error(`Server error: ${response.status}`);

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      // Map index → queue item id
      const indexToId = validQueue.map((i) => i.id);

      while (true) {
        const { done: streamDone, value } = await reader.read();
        if (streamDone) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          try {
            const event = JSON.parse(line.slice(6));
            const itemId = event.index != null ? indexToId[event.index] : null;

            if (event.type === "article_start" && itemId) {
              setCurrentIndex(event.index);
              setResults((r) => ({ ...r, [itemId]: { status: "generating", currentChunkLen: 0 } }));
            }

            if (event.type === "article_chunk" && itemId) {
              setResults((r) => ({
                ...r,
                [itemId]: {
                  ...r[itemId],
                  status: "generating",
                  currentChunkLen: (r[itemId]?.currentChunkLen ?? 0) + (event.content?.length ?? 0),
                },
              }));
            }

            if (event.type === "article_done" && itemId) {
              setResults((r) => ({
                ...r,
                [itemId]: {
                  ...r[itemId],
                  status: "done",
                  articleId: event.articleId,
                  seoTitle: event.seoTitle,
                  wordCount: event.wordCount,
                },
              }));
              queryClient.invalidateQueries({ queryKey: getListArticlesQueryKey() });
              queryClient.invalidateQueries({ queryKey: getGetArticleStatsQueryKey() });
            }

            if (event.type === "article_published" && itemId) {
              setResults((r) => ({
                ...r,
                [itemId]: { ...r[itemId], status: "published", githubUrl: event.githubUrl },
              }));
              queryClient.invalidateQueries({ queryKey: getListArticlesQueryKey() });
              queryClient.invalidateQueries({ queryKey: getGetArticleStatsQueryKey() });
            }

            if (event.type === "article_error" && itemId) {
              setResults((r) => ({
                ...r,
                [itemId]: { status: "error", errorMsg: event.message },
              }));
            }

            if (event.type === "article_publish_error" && itemId) {
              setResults((r) => ({
                ...r,
                [itemId]: { ...r[itemId], status: "done", errorMsg: event.message },
              }));
            }

            if (event.type === "queue_complete") {
              setDone(true);
              setCurrentIndex(null);
              queryClient.invalidateQueries({ queryKey: getListArticlesQueryKey() });
              queryClient.invalidateQueries({ queryKey: getGetArticleStatsQueryKey() });
            }
          } catch {
            // skip malformed lines
          }
        }
      }
    } catch (err: unknown) {
      if (err instanceof Error && err.name === "AbortError") return;
    } finally {
      setRunning(false);
    }
  }

  function handleStop() {
    abortRef.current?.abort();
    setRunning(false);
  }

  const completedCount = Object.values(results).filter((r) => r.status === "done" || r.status === "published").length;
  const publishedCount = Object.values(results).filter((r) => r.status === "published").length;
  const totalWords = Object.values(results).reduce((sum, r) => sum + (r.wordCount ?? 0), 0);

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-display font-bold tracking-tight">Bulk Generate</h1>
        <p className="text-muted-foreground mt-1">Queue multiple articles and generate + push them all automatically.</p>
      </div>

      {/* Settings bar */}
      <div className="flex flex-wrap items-center gap-4 p-4 rounded-lg border border-border bg-card">
        <label className="flex items-center gap-2.5 cursor-pointer">
          <div
            onClick={() => !running && setAutoPush((v) => !v)}
            className={`relative w-10 h-5 rounded-full transition-colors ${autoPush ? "bg-primary" : "bg-secondary border border-border"} ${running ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
          >
            <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${autoPush ? "translate-x-5" : "translate-x-0.5"}`} />
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-sm font-medium text-foreground">
              <Github className="w-4 h-4" />
              Auto-push to GitHub
            </div>
            <p className="text-xs text-muted-foreground">Each article is pushed immediately after generation</p>
          </div>
        </label>

        {autoPush && (
          <div className="relative ml-auto">
            <select
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              disabled={running}
              className="appearance-none bg-secondary border border-border rounded-md px-3 py-1.5 text-sm text-foreground pr-7 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
              data-testid="select-branch-bulk"
            >
              {branches.length === 0 && <option value="main">main</option>}
              {branches.map((b) => (
                <option key={b.name} value={b.name}>{b.name}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
          </div>
        )}
      </div>

      {/* Quick presets */}
      {!running && (
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Quick add:</span>
          {[
            { label: "PS5 Bundle", cat: "GTA 6 PS5 Guide", topics: ["GTA 6 PS5 Setup Guide", "GTA 6 PS5 Performance Tips", "GTA 6 PS5 vs Xbox Comparison"] },
            { label: "Vehicles", cat: "GTA 6 Vehicles", topics: ["GTA 6 Fastest Cars", "GTA 6 Motorcycles Guide", "GTA 6 Supercars List"] },
            { label: "Story", cat: "GTA 6 Story Predictions", topics: ["GTA 6 Story Mode Predictions", "GTA 6 Lucia Character Deep Dive", "GTA 6 Jason Character Guide"] },
            { label: "SEO Essentials", cat: "GTA 6 News", topics: ["GTA 6 Release Date Confirmed", "GTA 6 Price Predictions", "GTA 6 Pre-order Bonuses"] },
          ].map((preset) => (
            <button
              key={preset.label}
              onClick={() => addPreset(preset.topics, preset.cat)}
              className="px-3 py-1 rounded-md text-xs border border-border bg-secondary text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
              data-testid={`preset-${preset.label.toLowerCase().replace(/\s/g, "-")}`}
            >
              + {preset.label}
            </button>
          ))}
        </div>
      )}

      {/* Queue table */}
      <div className="space-y-2">
        <div className="grid grid-cols-[1fr_220px_36px] gap-2 px-1 text-xs font-mono text-muted-foreground uppercase tracking-wider">
          <span>Topic</span>
          <span>Category</span>
          <span />
        </div>

        <div className="space-y-1.5">
          {queue.map((item, idx) => {
            const result = results[item.id];
            const isActive = running && currentIndex === validQueue.findIndex((vi) => vi.id === item.id);

            return (
              <div key={item.id} className={`grid grid-cols-[1fr_220px_36px] gap-2 items-center rounded-md p-2 border transition-colors ${
                isActive ? "border-primary/50 bg-primary/5" :
                result?.status === "published" ? "border-emerald-500/30 bg-emerald-500/5" :
                result?.status === "error" ? "border-destructive/30 bg-destructive/5" :
                result?.status === "done" ? "border-border bg-card" :
                "border-border bg-card"
              }`} data-testid={`queue-row-${idx}`}>
                <div className="flex items-center gap-2 min-w-0">
                  <StatusIcon result={result} isActive={isActive} />
                  {running ? (
                    <div className="min-w-0">
                      <div className="text-sm text-foreground truncate">{item.topic || <span className="text-muted-foreground italic">empty</span>}</div>
                      {result && (
                        <div className="text-xs text-muted-foreground mt-0.5 flex items-center gap-2">
                          {result.status === "generating" && result.currentChunkLen && (
                            <span>{Math.round((result.currentChunkLen / 20000) * 100)}% written</span>
                          )}
                          {result.seoTitle && <span className="truncate opacity-70">{result.seoTitle}</span>}
                          {result.wordCount && <span>{result.wordCount.toLocaleString()} words</span>}
                          {result.githubUrl && (
                            <a href={result.githubUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 flex items-center gap-1 hover:underline">
                              <LinkIcon className="w-3 h-3" /> GitHub
                            </a>
                          )}
                          {result.errorMsg && <span className="text-destructive-foreground">{result.errorMsg}</span>}
                        </div>
                      )}
                    </div>
                  ) : (
                    <input
                      type="text"
                      placeholder={`Article topic #${idx + 1}…`}
                      value={item.topic}
                      onChange={(e) => updateRow(item.id, "topic", e.target.value)}
                      className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none min-w-0"
                      data-testid={`input-topic-${idx}`}
                    />
                  )}
                </div>

                <div className="relative">
                  <select
                    value={item.category}
                    onChange={(e) => updateRow(item.id, "category", e.target.value)}
                    disabled={running}
                    className="w-full appearance-none bg-secondary border border-border rounded px-2 py-1.5 text-xs text-foreground pr-6 focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-60 cursor-pointer"
                    data-testid={`select-category-${idx}`}
                  >
                    {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                  <ChevronDown className="absolute right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground pointer-events-none" />
                </div>

                <button
                  onClick={() => removeRow(item.id)}
                  disabled={running || queue.length === 1}
                  className="text-muted-foreground hover:text-destructive-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
                  data-testid={`button-remove-${idx}`}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {!running && (
          <button
            onClick={addRow}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md border border-dashed border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
            data-testid="button-add-row"
          >
            <Plus className="w-4 h-4" />
            Add topic
          </button>
        )}
      </div>

      {/* Summary when done */}
      {done && (
        <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-5 py-4">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-2">
            <CheckCircle2 className="w-4 h-4" />
            Queue complete
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <span><span className="text-foreground font-medium">{completedCount}</span> generated</span>
            {autoPush && <span><span className="text-foreground font-medium">{publishedCount}</span> pushed to GitHub</span>}
            <span><span className="text-foreground font-medium">{totalWords.toLocaleString()}</span> total words</span>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-3">
        {!running ? (
          <button
            onClick={handleRun}
            disabled={validQueue.length === 0}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            data-testid="button-run-bulk"
          >
            <Play className="w-4 h-4" />
            Run {validQueue.length > 0 ? `${validQueue.length} Article${validQueue.length > 1 ? "s" : ""}` : "Queue"}
            {autoPush && <span className="opacity-70">+ Push</span>}
          </button>
        ) : (
          <button
            onClick={handleStop}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md border border-destructive/40 bg-destructive/10 text-destructive-foreground text-sm font-semibold hover:bg-destructive/20 transition-colors"
            data-testid="button-stop-bulk"
          >
            <Square className="w-4 h-4" />
            Stop Queue
          </button>
        )}

        {running && (
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin text-primary" />
            {currentIndex != null
              ? `Generating article ${currentIndex + 1} of ${validQueue.length}…`
              : "Starting…"}
          </div>
        )}
      </div>
    </div>
  );
}

function StatusIcon({ result, isActive }: { result?: ItemResult; isActive: boolean }) {
  if (isActive) return <Loader2 className="w-4 h-4 text-primary animate-spin shrink-0" />;
  if (!result) return <div className="w-4 h-4 rounded-full border border-border shrink-0" />;
  if (result.status === "published") return <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />;
  if (result.status === "done") return <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />;
  if (result.status === "error") return <XCircle className="w-4 h-4 text-destructive-foreground shrink-0" />;
  if (result.status === "generating") return <Zap className="w-4 h-4 text-primary animate-pulse shrink-0" />;
  return <div className="w-4 h-4 rounded-full border border-border shrink-0" />;
}
