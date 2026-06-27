import { useState } from "react";
import { useListAdminTags, useCreateAdminTag, useDeleteAdminTag } from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";
import { getListAdminTagsQueryKey } from "@workspace/api-client-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash2, Plus } from "lucide-react";

export function AdminTags() {
  const { data: tags, isLoading } = useListAdminTags();
  const createMutation = useCreateAdminTag();
  const deleteMutation = useDeleteAdminTag();
  const queryClient = useQueryClient();

  const [newName, setNewName] = useState("");

  const handleAdd = () => {
    if (!newName) return;
    createMutation.mutate(
      { data: { name: newName } },
      { 
        onSuccess: () => {
          setNewName("");
          queryClient.invalidateQueries({ queryKey: getListAdminTagsQueryKey() });
        }
      }
    );
  };

  const handleDelete = (id: number) => {
    if (confirm("Delete tag?")) {
      deleteMutation.mutate(
        { id },
        { onSuccess: () => queryClient.invalidateQueries({ queryKey: getListAdminTagsQueryKey() }) }
      );
    }
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="font-headline text-3xl">Tags</h1>
      
      <div className="flex gap-2 mb-6">
        <Input 
          value={newName} 
          onChange={(e) => setNewName(e.target.value)} 
          placeholder="New Tag Name" 
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        />
        <Button onClick={handleAdd} disabled={createMutation.isPending}><Plus className="w-4 h-4" /> Add</Button>
      </div>

      <div className="border border-border rounded-xl bg-card overflow-hidden">
        <ul className="divide-y divide-border">
          {tags?.map(t => (
            <li key={t.id} className="p-4 flex items-center justify-between hover:bg-secondary/20">
              <div>
                <div className="font-medium">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.slug}</div>
              </div>
              <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => handleDelete(t.id)}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </li>
          ))}
          {!tags?.length && !isLoading && (
            <li className="p-8 text-center text-muted-foreground">No tags found.</li>
          )}
        </ul>
      </div>
    </div>
  );
}