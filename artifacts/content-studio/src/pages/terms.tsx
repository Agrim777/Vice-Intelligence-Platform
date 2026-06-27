import { useEffect } from "react";
import { setPageMeta } from "@/lib/seo";

export function Terms() {
  useEffect(() => {
    setPageMeta({ title: "Terms and Conditions", description: "Terms and Conditions for Vice Intelligence Platform.", path: "/terms" });
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 space-y-8">
      <h1 className="font-headline text-5xl">Terms and Conditions</h1>
      <div className="prose dark:prose-invert">
        <p>Welcome to Vice Intelligence Platform. By using our website, you agree to these terms.</p>
        <h2>Use of Content</h2>
        <p>All guides, tips, and articles are provided for informational purposes.</p>
        <h2>Limitation of Liability</h2>
        <p>We are not responsible for any issues arising from the use of our content.</p>
      </div>
    </div>
  );
}