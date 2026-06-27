import { useState } from "react";
import { useListAdminCategories, useCreateAdminCategory, useDeleteAdminCategory } from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";
import { getListAdminCategoriesQueryKey } from "@workspace/api-client-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash2, Plus } from "lucide-react";

export function AdminCategories() {
  const { data: categories, isLoading } = useListAdminCategories();
  const createMutation = useCreateAdminCategory();
  const deleteMutation = useDeleteAdminCategory();
  const queryClient = useQueryClient();

  const [newName, setNewName] = useState("");

  const handleAdd = () => {
    if (!newName) return;
    createMutation.mutate(
      { data: { name: newName } },
      { 
        onSuccess: () => {
          setNewName("");
          queryClient.invalidateQueries({ queryKey: getListAdminCategoriesQueryKey() });
        }
      }
    );
  };

  const handleDelete = (id: number) => {
    if (confirm("Delete category?")) {
      deleteMutation.mutate(
        { id },
        { onSuccess: () => queryClient.invalidateQueries({ queryKey: getListAdminCategoriesQueryKey() }) }
      );
    }
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="font-headline text-3xl">Categories</h1>
      
      <div className="flex gap-2 mb-6">
        <Input 
          value={newName} 
          onChange={(e) => setNewName(e.target.value)} 
          placeholder="New Category Name" 
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        />
        <Button onClick={handleAdd} disabled={createMutation.isPending}><Plus className="w-4 h-4" /> Add</Button>
      </div>

      <div className="border border-border rounded-xl bg-card overflow-hidden">
        <ul className="divide-y divide-border">
          {categories?.map(c => (
            <li key={c.id} className="p-4 flex items-center justify-between hover:bg-secondary/20">
              <div>
                <div className="font-medium">{c.name}</div>
                <div className="text-xs text-muted-foreground">{c.slug}</div>
              </div>
              <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => handleDelete(c.id)}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </li>
          ))}
          {!categories?.length && !isLoading && (
            <li className="p-8 text-center text-muted-foreground">No categories found.</li>
          )}
        </ul>
      </div>
    </div>
  );
}