import { useListAdminMedia, useDeleteAdminMedia } from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";
import { getListAdminMediaQueryKey } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Trash2, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function AdminMedia() {
  const { data, isLoading } = useListAdminMedia();
  const deleteMutation = useDeleteAdminMedia();
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const handleDelete = (id: number) => {
    if (confirm("Delete media?")) {
      deleteMutation.mutate(
        { id },
        { onSuccess: () => queryClient.invalidateQueries({ queryKey: getListAdminMediaQueryKey() }) }
      );
    }
  };

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    toast({ title: "URL Copied" });
  };

  return (
    <div className="space-y-6">
      <h1 className="font-headline text-3xl">Media Library</h1>

      {isLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4].map(i => <div key={i} className="aspect-square bg-secondary/50 rounded-xl animate-pulse" />)}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {data?.items?.map((item) => (
            <div key={item.id} className="group relative aspect-square border border-border bg-card rounded-xl overflow-hidden">
              <img src={item.url} alt={item.filename} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2">
                <div className="flex justify-end gap-1">
                  <Button variant="secondary" size="icon" className="h-7 w-7" onClick={() => copyUrl(item.url)}>
                    <Copy className="w-3 h-3" />
                  </Button>
                  <Button variant="destructive" size="icon" className="h-7 w-7" onClick={() => handleDelete(item.id)}>
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
                <div className="text-[10px] text-white break-all bg-black/80 p-1 rounded leading-tight">
                  {item.filename}
                </div>
              </div>
            </div>
          ))}
          {!data?.items?.length && (
            <div className="col-span-full py-12 text-center text-muted-foreground border border-dashed rounded-xl">
              No media items uploaded.
            </div>
          )}
        </div>
      )}
    </div>
  );
}