import { useEffect } from "react";
import { setPageMeta } from "@/lib/seo";

export function CookiePolicy() {
  useEffect(() => {
    setPageMeta({ title: "Cookie Policy", description: "Cookie Policy for Vice Intelligence Platform.", path: "/cookie-policy" });
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 space-y-8">
      <h1 className="font-headline text-5xl">Cookie Policy</h1>
      <div className="prose dark:prose-invert">
        <p>This Cookie Policy explains how we use cookies and similar technologies.</p>
        <h2>What are Cookies?</h2>
        <p>Cookies are small text files placed on your device to help the site provide a better user experience.</p>
        <h2>How We Use Cookies</h2>
        <p>We use cookies to retain user preferences and provide anonymized tracking data to third-party applications.</p>
      </div>
    </div>
  );
}