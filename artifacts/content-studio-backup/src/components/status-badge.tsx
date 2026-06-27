import { Badge } from "@/components/ui/badge";

const STATUS_STYLES: Record<string, string> = {
  done: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  published: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  generating: "bg-amber-500/15 text-amber-400 border-amber-500/30 animate-pulse",
  error: "bg-red-500/15 text-red-400 border-red-500/30",
  pending: "bg-secondary text-muted-foreground border-border",
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded border text-[10px] font-mono uppercase tracking-wider ${STATUS_STYLES[status] ?? STATUS_STYLES.pending}`}
      data-testid={`badge-status-${status}`}
    >
      {status}
    </span>
  );
}
