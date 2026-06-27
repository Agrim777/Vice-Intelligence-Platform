import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight, Clock } from "lucide-react";
import { setPageMeta } from "@/lib/seo";

const LAST_UPDATED = "2025-06-26";

export function GTA6CharactersPage() {
  useEffect(() => {
    setPageMeta({
      title: "GTA 6 Characters — Lucia, Jason & Full Confirmed Cast",
      description: "Everything confirmed about GTA 6's characters — Lucia (first female GTA protagonist), Jason, supporting cast, and what we know about their backstories from official trailers.",
      path: "/gta6/characters",
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
      <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
        <Link href="/"><span className="hover:text-primary cursor-pointer">Home</span></Link>
        <ChevronRight className="w-3 h-3" />
        <span>GTA 6 Characters</span>
      </div>

      <div>
        <div className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest border border-primary/30 bg-primary/5 px-3 py-1.5 rounded-full mb-4">
          ✓ CONFIRMED
        </div>
        <h1 className="font-headline text-5xl md:text-6xl mb-3">GTA 6 CHARACTERS</h1>
        <div className="text-xs text-muted-foreground font-mono mb-4 flex items-center gap-2">
          <Clock className="w-3 h-3" /> Last updated: {LAST_UPDATED} · GTA6Guide.in
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          GTA 6 features two playable protagonists — <strong className="text-foreground">Lucia</strong> and <strong className="text-foreground">Jason</strong> — both switchable at any point in the open world. Lucia is the first female main protagonist in mainline GTA history.
        </p>
      </div>

      {/* Character Cards */}
      <div className="grid md:grid-cols-2 gap-5">
        <div className="border border-primary/30 bg-primary/5 rounded-xl p-6">
          <div className="text-[10px] font-mono text-primary uppercase tracking-widest mb-2">Protagonist 1 · ✓ Confirmed</div>
          <h2 className="font-headline text-4xl mb-3">LUCIA</h2>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex gap-3"><span className="text-foreground font-semibold w-24 shrink-0">Status</span><span>First female lead in mainline GTA history</span></div>
            <div className="flex gap-3"><span className="text-foreground font-semibold w-24 shrink-0">Background</span><span>Former Leonida state corrections officer. Serves time at Leonida State Penitentiary — Trailer 1 opens with her prison interview.</span></div>
            <div className="flex gap-3"><span className="text-foreground font-semibold w-24 shrink-0">Motivation</span><span>Escaping poverty by any means necessary — Rockstar describes her as "driven, resourceful, and determined."</span></div>
            <div className="flex gap-3"><span className="text-foreground font-semibold w-24 shrink-0">Relationship</span><span>Partner-in-crime with Jason. Their dynamic is the emotional core of the story.</span></div>
          </div>
        </div>

        <div className="border border-border bg-card rounded-xl p-6">
          <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-2">Protagonist 2 · ✓ Confirmed</div>
          <h2 className="font-headline text-4xl mb-3">JASON</h2>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex gap-3"><span className="text-foreground font-semibold w-24 shrink-0">Status</span><span>Male co-protagonist, equally playable throughout the story</span></div>
            <div className="flex gap-3"><span className="text-foreground font-semibold w-24 shrink-0">Background</span><span>Local Leonida criminal who connects with Lucia after her release. His full backstory hasn't been fully revealed by Rockstar.</span></div>
            <div className="flex gap-3"><span className="text-foreground font-semibold w-24 shrink-0">Role</span><span>Both protagonists are equally important — the story is designed around both perspectives simultaneously.</span></div>
            <div className="flex gap-3"><span className="text-foreground font-semibold w-24 shrink-0">Switching</span><span>Players can switch between Lucia and Jason freely in the open world, not just during missions.</span></div>
          </div>
        </div>
      </div>

      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <div>
          <h2 className="font-headline text-2xl text-foreground mb-3">GTA 6 Jason and Lucia — The Full Story</h2>
          <p>GTA 6's narrative revolves around the relationship between Lucia and Jason — described by Rockstar as "a Bonnie and Clyde-style couple" pulling jobs across the state of Leonida. The story appears to begin with Lucia's release from prison, where she reconnects with or meets Jason, and the two embark on an escalating criminal enterprise.</p>
          <p className="mt-3">Both characters are fully playable throughout the entire story — not just in missions. This is a first for the mainline GTA series, which previously had single protagonists (GTA III through GTA IV) or switched control at designated story points (GTA V's Michael, Trevor, and Franklin).</p>
        </div>

        <div>
          <h2 className="font-headline text-2xl text-foreground mb-3">Supporting Characters in GTA 6</h2>
          <div className="space-y-3">
            {[
              { name: "Unnamed Crime Boss", role: "Appears to be the primary antagonist in Act 1 — older, well-dressed male figure seen in Trailer 1" },
              { name: "Female Federal Agent", role: "An FBI/DEA antagonist visible in the Trailer 2 car chase sequence" },
              { name: "Rico", role: "Referenced in trailer dialogue — a Leonida gang leader with apparent connections to Lucia and Jason's criminal network" },
              { name: "GTA Online 6 Protagonist", role: "Your custom character for GTA Online 6 — separate from Lucia and Jason" },
            ].map(({ name, role }) => (
              <div key={name} className="border border-border bg-card rounded-lg p-3">
                <div className="font-semibold text-foreground text-sm">{name}</div>
                <div className="text-xs mt-0.5">{role}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-headline text-2xl text-foreground mb-3">Lucia's Historic Role in GTA</h2>
          <p>Lucia is a historic milestone for the Grand Theft Auto franchise. In an interview with Edge Magazine, Rockstar acknowledged her as the first female main protagonist in the mainline series. Previous GTA games featured male leads exclusively — CJ (San Andreas), Tommy Vercetti (Vice City), Claude (GTA III), Niko Bellic (GTA IV), and Michael/Trevor/Franklin (GTA V).</p>
          <p className="mt-3">Rockstar has been careful not to describe GTA 6 as "Lucia's game" — both she and Jason are co-equals throughout the story. The dual-protagonist system mirrors GTA V's three-character system but with tighter narrative integration.</p>
        </div>
      </div>

      {/* Related Links */}
      <div className="border border-border bg-card rounded-xl p-5">
        <h3 className="font-display font-semibold text-sm mb-3">Related GTA 6 Pages</h3>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            { href: "/gta6/release-date", label: "GTA 6 Release Date" },
            { href: "/gta6/trailer", label: "GTA 6 Trailer 2 Breakdown" },
            { href: "/gta6/map", label: "GTA 6 Map & Leonida Explained" },
            { href: "/gta6/gameplay", label: "GTA 6 Gameplay Features" },
          ].map(({ href, label }) => (
            <Link key={href} href={href}>
              <div className="text-sm text-primary hover:text-primary/80 flex items-center gap-2 cursor-pointer py-1">
                <ChevronRight className="w-3.5 h-3.5 shrink-0" /> {label}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="font-headline text-3xl mb-4">GTA 6 Characters FAQ</h2>
        <div className="space-y-2">
          {[
            { q: "Who are the GTA 6 characters?", a: "GTA 6 has two playable protagonists: Lucia and Jason. Lucia is a former Leonida state corrections officer who serves time in prison before the events of the game. Jason is her male co-protagonist and partner-in-crime. Both are fully playable throughout the story and can be switched at any time in the open world." },
            { q: "Is GTA 6 a female protagonist?", a: "Yes — Lucia is the first female main protagonist in mainline GTA history. However, GTA 6 has a dual-protagonist system, meaning Jason (male) is equally playable. Neither character is exclusive to the story — you can freely switch between them." },
            { q: "Can you play as both Lucia and Jason in GTA 6?", a: "Yes. Unlike GTA V where character switching happened at story checkpoints or specific free-roam moments, GTA 6 allows you to switch between Lucia and Jason at any time during free roam. Both have their own skill trees and unique story perspectives." },
          ].map(({ q, a }, i) => (
            <details key={i} className="group border border-border bg-card rounded-md overflow-hidden">
              <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none hover:bg-secondary/30">
                <h3 className="font-display font-semibold text-sm">{q}</h3>
                <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-4 pb-4"><p className="text-sm text-muted-foreground leading-relaxed">{a}</p></div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
