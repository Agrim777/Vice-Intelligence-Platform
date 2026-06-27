import { useState, useEffect } from "react";
import { useGetAdminSettings, useUpdateAdminSettings } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function AdminSettings() {
  const { data: settings, isLoading } = useGetAdminSettings();
  const updateMutation = useUpdateAdminSettings();
  const { toast } = useToast();

  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    if (settings) {
      setFormData(settings);
    }
  }, [settings]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateMutation.mutate(
      { data: formData },
      { 
        onSuccess: () => toast({ title: "Settings updated successfully" }),
        onError: () => toast({ title: "Failed to update settings", variant: "destructive" })
      }
    );
  };

  if (isLoading) return <div className="text-muted-foreground p-10">Loading settings...</div>;

  return (
    <div className="max-w-2xl space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="font-headline text-3xl">Site Settings</h1>
        <Button onClick={handleSave} disabled={updateMutation.isPending}>
          <Save className="w-4 h-4 mr-2" /> Save Settings
        </Button>
      </div>

      <div className="space-y-6 bg-card border border-border p-6 rounded-xl">
        <div className="space-y-2">
          <Label>Site Name</Label>
          <Input name="siteName" value={formData.siteName || ""} onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <Label>Site Description</Label>
          <Textarea name="siteDescription" value={formData.siteDescription || ""} onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <Label>Site URL</Label>
          <Input name="siteUrl" value={formData.siteUrl || ""} onChange={handleChange} />
        </div>
        
        <h3 className="font-headline text-xl pt-4 border-t border-border">Social Links</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Twitter Handle</Label>
            <Input name="twitterHandle" value={formData.twitterHandle || ""} onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label>Facebook URL</Label>
            <Input name="facebookUrl" value={formData.facebookUrl || ""} onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label>YouTube URL</Label>
            <Input name="youtubeUrl" value={formData.youtubeUrl || ""} onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label>Discord URL</Label>
            <Input name="discordUrl" value={formData.discordUrl || ""} onChange={handleChange} />
          </div>
        </div>

        <h3 className="font-headline text-xl pt-4 border-t border-border">Analytics & Ads</h3>
        <div className="space-y-2">
          <Label>Google Analytics ID</Label>
          <Input name="googleAnalyticsId" value={formData.googleAnalyticsId || ""} onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <Label>AdSense ID</Label>
          <Input name="adsenseId" value={formData.adsenseId || ""} onChange={handleChange} />
        </div>
      </div>
    </div>
  );
}