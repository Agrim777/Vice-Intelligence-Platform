import { useEffect } from "react";
import { setPageMeta } from "@/lib/seo";

export function PrivacyPolicy() {
  useEffect(() => {
    setPageMeta({ title: "Privacy Policy", description: "Privacy Policy for Vice Intelligence Platform.", path: "/privacy" });
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 space-y-8">
      <h1 className="font-headline text-5xl">Privacy Policy</h1>
      <div className="prose dark:prose-invert">
        <p>This Privacy Policy describes how we collect, use, and handle your information when you use our website.</p>
        <h2>Information We Collect</h2>
        <p>We may collect basic analytics data to improve the user experience.</p>
        <h2>How We Use Information</h2>
        <p>Information is used solely to enhance the quality of our content and services.</p>
      </div>
    </div>
  );
}