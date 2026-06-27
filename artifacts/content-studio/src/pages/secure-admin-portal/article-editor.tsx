import { useState, useEffect } from "react";
import { useLocation, useRoute } from "wouter";
import MDEditor from '@uiw/react-md-editor';
import { 
  useCreateAdminArticle, 
  useUpdateAdminArticle, 
  useGetAdminArticle,
  useListAdminCategories,
  useListAdminTags
} from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { ArrowLeft, Save } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export function AdminArticleEditor() {
  const [, params] = useRoute("/secure-admin-portal/articles/:id/edit");
  const isEdit = !!params?.id;
  const articleId = isEdit ? parseInt(params.id!) : undefined;
  
  const [, setLocation] = useLocation();
  const createMutation = useCreateAdminArticle();
  const updateMutation = useUpdateAdminArticle();
  
  const { data: article, isLoading: articleLoading } = useGetAdminArticle(articleId!, { query: { enabled: isEdit } });
  const { data: categories } = useListAdminCategories();
  const { data: tags } = useListAdminTags();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [categoryId, setCategoryId] = useState<number | undefined>(undefined);
  const [status, setStatus] = useState<any>("draft");

  useEffect(() => {
    if (isEdit && article) {
      setTitle(article.title);
      setSlug(article.slug);
      setExcerpt(article.excerpt || "");
      setContent(article.content || "");
      setFeaturedImage(article.featuredImage || "");
      setCategoryId(article.categoryId || undefined);
      setStatus(article.status as any);
    }
  }, [isEdit, article]);

  const handleSave = () => {
    const payload = {
      title,
      slug: slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
      excerpt,
      content,
      featuredImage,
      categoryId,
      status
    };

    if (isEdit) {
      updateMutation.mutate(
        { id: articleId!, data: payload },
        { onSuccess: () => setLocation("/secure-admin-portal/articles") }
      );
    } else {
      createMutation.mutate(
        { data: payload },
        { onSuccess: () => setLocation("/secure-admin-portal/articles") }
      );
    }
  };

  if (isEdit && articleLoading) return <div className="p-8"><Skeleton className="h-[600px] w-full" /></div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => setLocation("/secure-admin-portal/articles")}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="font-headline text-3xl">{isEdit ? "Edit Article" : "New Article"}</h1>
        <div className="ml-auto flex gap-2">
          <Button variant="outline" onClick={() => { setStatus("draft"); handleSave(); }}>Save Draft</Button>
          <Button onClick={() => { setStatus("published"); handleSave(); }}><Save className="w-4 h-4 mr-2" /> Publish</Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="space-y-2">
            <Label>Title</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Article Title" className="text-lg font-medium" />
          </div>
          <div className="space-y-2">
            <Label>Content</Label>
            <div data-color-mode="dark">
              <MDEditor value={content} onChange={(v) => setContent(v || "")} height={500} />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Excerpt</Label>
            <Textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} placeholder="Short summary" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="border border-border rounded-xl p-4 space-y-4 bg-card">
            <h3 className="font-headline text-lg">Settings</h3>
            <div className="space-y-2">
              <Label>Slug</Label>
              <Input value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="auto-generated-if-empty" />
            </div>
            <div className="space-y-2">
              <Label>Category</Label>
              <select 
                className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none"
                value={categoryId || ""}
                onChange={(e) => setCategoryId(parseInt(e.target.value) || undefined)}
              >
                <option value="">No Category</option>
                {categories?.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <Label>Featured Image URL</Label>
              <Input value={featuredImage} onChange={(e) => setFeaturedImage(e.target.value)} placeholder="https://..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}