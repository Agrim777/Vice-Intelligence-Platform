import { useEffect } from "react";
import { setPageMeta } from "@/lib/seo";

export function DMCA() {
  useEffect(() => {
    setPageMeta({ title: "DMCA Policy", description: "DMCA Policy for Vice Intelligence Platform.", path: "/dmca" });
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 space-y-8">
      <h1 className="font-headline text-5xl">DMCA Policy</h1>
      <div className="prose dark:prose-invert">
        <p>We respect the intellectual property rights of others. If you believe your copyright has been infringed upon, please contact us.</p>
        <h2>Filing a Complaint</h2>
        <p>Provide a written communication containing detailed information about the alleged infringement to our contact email.</p>
      </div>
    </div>
  );
}