import { useEffect } from "react";
import { setPageMeta } from "@/lib/seo";

export function Disclaimer() {
  useEffect(() => {
    setPageMeta({ title: "Disclaimer", description: "Disclaimer for Vice Intelligence Platform.", path: "/disclaimer" });
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 space-y-8">
      <h1 className="font-headline text-5xl">Disclaimer</h1>
      <div className="prose dark:prose-invert">
        <p>Vice Intelligence Platform is a fan-created site and is not affiliated with, endorsed by, or sponsored by Rockstar Games or Take-Two Interactive.</p>
        <p>Grand Theft Auto and all related properties are trademarks of Take-Two Interactive.</p>
      </div>
    </div>
  );
}