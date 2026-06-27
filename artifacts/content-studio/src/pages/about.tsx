import { Link } from "wouter";
import { setPageMeta } from "@/lib/seo";
import { useEffect } from "react";

export function About() {
  useEffect(() => {
    setPageMeta({ title: "About Us — Vice Intelligence Platform", description: "Learn about the team behind the definitive GTA guide.", path: "/about" });
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 space-y-8">
      <h1 className="font-headline text-5xl">About Us</h1>
      <div className="prose dark:prose-invert">
        <p>Vice Intelligence Platform is the definitive resource for everything Grand Theft Auto. We are a team of dedicated gamers and analysts providing the most accurate, up-to-date information on GTA 6, GTA V, and the classic titles.</p>
        <p>Our mission is to cut through the noise and deliver high-quality guides, verified news, and comprehensive databases for vehicles, weapons, and cheats.</p>
      </div>
    </div>
  );
}