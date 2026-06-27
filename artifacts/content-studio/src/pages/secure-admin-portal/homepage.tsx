import { useState, useEffect } from "react";
import { useGetAdminHomepageConfig, useUpdateAdminHomepageConfig } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";

export function AdminHomepage() {
  const { data: config, isLoading } = useGetAdminHomepageConfig();
  const updateMutation = useUpdateAdminHomepageConfig();
  const { toast } = useToast();

  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    if (config) {
      setFormData(config);
    }
  }, [config]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData({ ...formData, [name]: checked });
  };

  const handleSave = () => {
    updateMutation.mutate(
      { data: formData },
      { 
        onSuccess: () => toast({ title: "Homepage config updated" }),
        onError: () => toast({ title: "Failed to update config", variant: "destructive" })
      }
    );
  };

  if (isLoading) return <div className="text-muted-foreground p-10">Loading homepage config...</div>;

  return (
    <div className="max-w-2xl space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="font-headline text-3xl">Homepage Configuration</h1>
        <Button onClick={handleSave} disabled={updateMutation.isPending}>
          <Save className="w-4 h-4 mr-2" /> Save Config
        </Button>
      </div>

      <div className="space-y-6 bg-card border border-border p-6 rounded-xl">
        <h3 className="font-headline text-xl">Hero Section</h3>
        <div className="space-y-2">
          <Label>Hero Title</Label>
          <Input name="heroTitle" value={formData.heroTitle || ""} onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <Label>Hero Subtitle</Label>
          <Input name="heroSubtitle" value={formData.heroSubtitle || ""} onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <Label>Hero Image URL</Label>
          <Input name="heroImage" value={formData.heroImage || ""} onChange={handleChange} />
        </div>
        
        <h3 className="font-headline text-xl pt-4 border-t border-border">Section Toggles</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>Show Trending</Label>
            <Switch checked={formData.showTrending || false} onCheckedChange={(c) => handleSwitchChange('showTrending', c)} />
          </div>
          <div className="flex items-center justify-between">
            <Label>Show Latest</Label>
            <Switch checked={formData.showLatest || false} onCheckedChange={(c) => handleSwitchChange('showLatest', c)} />
          </div>
          <div className="flex items-center justify-between">
            <Label>Show Popular</Label>
            <Switch checked={formData.showPopular || false} onCheckedChange={(c) => handleSwitchChange('showPopular', c)} />
          </div>
          <div className="flex items-center justify-between">
            <Label>Show Browse by Game</Label>
            <Switch checked={formData.showByGame || false} onCheckedChange={(c) => handleSwitchChange('showByGame', c)} />
          </div>
        </div>

        <h3 className="font-headline text-xl pt-4 border-t border-border">Curated Content</h3>
        <div className="space-y-2">
          <Label>Featured Article IDs (comma separated)</Label>
          <Input 
            value={formData.featuredIds?.join(", ") || ""} 
            onChange={(e) => setFormData({ ...formData, featuredIds: e.target.value.split(",").map(s => parseInt(s.trim())).filter(n => !isNaN(n)) })} 
          />
        </div>
        <div className="space-y-2">
          <Label>Editor Pick IDs (comma separated)</Label>
          <Input 
            value={formData.editorPickIds?.join(", ") || ""} 
            onChange={(e) => setFormData({ ...formData, editorPickIds: e.target.value.split(",").map(s => parseInt(s.trim())).filter(n => !isNaN(n)) })} 
          />
        </div>
      </div>
    </div>
  );
}