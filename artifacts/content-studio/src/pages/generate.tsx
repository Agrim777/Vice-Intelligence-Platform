import { useState, useRef } from "react";
import { useLocation } from "wouter";
import { Zap, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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

export function Generate() {
  const [, setLocation] = useLocation();
  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [streaming, setStreaming] = useState(false);
  const [streamedContent, setStreamedContent] = useState("");
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  async function handleGenerate() {
    if (!topic.trim() || streaming) return;
    setStreaming(true);
    setStreamedContent("");
    setError(null);

    abortRef.current = new AbortController();

    try {
      const response = await fetch("/api/articles/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: topic.trim(), category }),
        signal: abortRef.current.signal,
      });

      if (!response.ok || !response.body) {
        throw new Error(`Server error: ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          try {
            const json = JSON.parse(line.slice(6));
            if (json.content) {
              setStreamedContent((prev) => {
                const next = prev + json.content;
                setTimeout(() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
                  }
                }, 0);
                return next;
              });
            }
            if (json.done && json.articleId) {
              setStreaming(false);
              setLocation(`/articles/${json.articleId}`);
              return;
            }
            if (json.error) {
              throw new Error(json.error);
            }
          } catch {
            // skip malformed lines
          }
        }
      }
    } catch (err: unknown) {
      if (err instanceof Error && err.name === "AbortError") return;
      setError(err instanceof Error ? err.message : "Generation failed");
    } finally {
      setStreaming(false);
    }
  }

  function handleStop() {
    abortRef.current?.abort();
    setStreaming(false);
  }

  const wordCount = streamedContent.split(/\s+/).filter(Boolean).length;

  return (
    <div className="flex flex-col h-full p-8 max-w-5xl mx-auto gap-6">
      <div>
        <h1 className="text-3xl font-display font-bold tracking-tight">Generate Article</h1>
        <p className="text-muted-foreground mt-1">Choose a category and topic to generate a full SEO article.</p>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="relative">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            disabled={streaming}
            className="w-full appearance-none bg-card border border-border rounded-md px-3 py-2.5 text-sm text-foreground pr-8 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary disabled:opacity-50 cursor-pointer"
            data-testid="select-category"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        </div>

        <input
          type="text"
          placeholder="Specific topic or angle..."
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
          disabled={streaming}
          className="md:col-span-1 bg-card border border-border rounded-md px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary disabled:opacity-50"
          data-testid="input-topic"
        />

        <div className="flex gap-2">
          <button
            onClick={handleGenerate}
            disabled={streaming || !topic.trim()}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2.5 text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            data-testid="button-generate"
          >
            <Zap className="w-4 h-4" />
            {streaming ? "Generating…" : "Generate"}
          </button>
          {streaming && (
            <button
              onClick={handleStop}
              className="px-4 py-2.5 rounded-md border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              data-testid="button-stop"
            >
              Stop
            </button>
          )}
        </div>
      </div>

      {error && (
        <div className="rounded-md border border-destructive/30 bg-destructive/10 text-destructive-foreground px-4 py-3 text-sm" data-testid="error-generate">
          {error}
        </div>
      )}

      {/* Stream output */}
      {(streamedContent || streaming) && (
        <div className="flex-1 flex flex-col min-h-0 border border-border rounded-lg bg-card overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary/50">
            <div className="flex items-center gap-3">
              {streaming && (
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_hsla(320,100%,55%,0.8)]" />
              )}
              <span className="text-sm font-mono text-muted-foreground">
                {streaming ? "Generating…" : "Complete"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="font-mono text-xs border-border text-muted-foreground">
                {wordCount.toLocaleString()} words
              </Badge>
              <Badge variant="outline" className="font-mono text-xs border-border text-muted-foreground">
                {category}
              </Badge>
            </div>
          </div>
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 font-mono text-sm text-foreground/90 whitespace-pre-wrap leading-relaxed"
            data-testid="stream-output"
          >
            {streamedContent}
            {streaming && <span className="inline-block w-2 h-4 bg-primary ml-0.5 animate-pulse" />}
          </div>
        </div>
      )}

      {!streamedContent && !streaming && (
        <div className="flex-1 flex items-center justify-center border border-dashed border-border rounded-lg">
          <div className="text-center text-muted-foreground space-y-2">
            <Zap className="w-8 h-8 mx-auto opacity-30" />
            <p className="text-sm">Select a category, enter a topic, and click Generate.</p>
            <p className="text-xs opacity-60">Articles take 60–120 seconds. Stay on this page while generating.</p>
          </div>
        </div>
      )}
    </div>
  );
}
