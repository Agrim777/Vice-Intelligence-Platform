import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight, Clock, Music } from "lucide-react";
import { setPageMeta } from "@/lib/seo";

const LAST_UPDATED = "2025-06-26";

export function GTA6TrailerMusicPage() {
  useEffect(() => {
    setPageMeta({
      title: "GTA 6 Trailer Song — Music in Trailer 1 & Trailer 2",
      description: "What song is in GTA 6 Trailer? Trailer 1 uses 'Love Is a Long Road' by Tom Petty. Trailer 2 features 'What They Call Us' by Fever Ray. Full music breakdown for both trailers.",
      path: "/gta6/trailer-music",
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
      <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
        <Link href="/"><span className="hover:text-primary cursor-pointer">Home</span></Link>
        <ChevronRight className="w-3 h-3" />
        <span>GTA 6 Trailer Music</span>
      </div>

      <div>
        <div className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest border border-primary/30 bg-primary/5 px-3 py-1.5 rounded-full mb-4">
          <Music className="w-3 h-3" /> Confirmed Songs
        </div>
        <h1 className="font-headline text-5xl md:text-6xl mb-3">GTA 6 TRAILER SONG</h1>
        <div className="text-xs text-muted-foreground font-mono mb-4 flex items-center gap-2">
          <Clock className="w-3 h-3" /> Last updated: {LAST_UPDATED}
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          The GTA 6 Trailer 1 song is <strong className="text-foreground">"Love Is a Long Road" by Tom Petty</strong>. The GTA 6 Trailer 2 music is <strong className="text-foreground">"What They Call Us" by Fever Ray</strong>.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="border border-primary/30 bg-primary/5 rounded-xl p-6">
          <div className="text-[10px] font-mono text-primary uppercase tracking-widest mb-2">GTA 6 Trailer 1 — December 2023</div>
          <h2 className="font-headline text-2xl mb-1">Love Is a Long Road</h2>
          <div className="text-muted-foreground mb-3">Tom Petty · 1989</div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex gap-3"><span className="text-foreground font-semibold shrink-0 w-20">Album</span><span>Full Moon Fever (1989)</span></div>
            <div className="flex gap-3"><span className="text-foreground font-semibold shrink-0 w-20">Genre</span><span>Classic Rock / Heartland Rock</span></div>
            <div className="flex gap-3"><span className="text-foreground font-semibold shrink-0 w-20">Why It Works</span><span>The classic Americana feel perfectly evokes the Florida-inspired setting. Tom Petty's voice and the southern rock sound match the Vice City vibe.</span></div>
          </div>
        </div>

        <div className="border border-border bg-card rounded-xl p-6">
          <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-2">GTA 6 Trailer 2 — May 2025</div>
          <h2 className="font-headline text-2xl mb-1">What They Call Us</h2>
          <div className="text-muted-foreground mb-3">Fever Ray · 2024</div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex gap-3"><span className="text-foreground font-semibold shrink-0 w-20">Artist</span><span>Fever Ray (Karin Dreijer, of The Knife)</span></div>
            <div className="flex gap-3"><span className="text-foreground font-semibold shrink-0 w-20">Genre</span><span>Electropop / Art Pop</span></div>
            <div className="flex gap-3"><span className="text-foreground font-semibold shrink-0 w-20">Why It Works</span><span>The intense, otherworldly tone mirrors the high-stakes action in Trailer 2 — especially the hurricane sequence and the car chase with the federal agent antagonist.</span></div>
          </div>
        </div>
      </div>

      <div className="space-y-5 text-sm text-muted-foreground leading-relaxed">
        <div>
          <h2 className="font-headline text-2xl text-foreground mb-3">Why Did Rockstar Choose These Songs?</h2>
          <p>Rockstar's music curation has always been a defining feature of the GTA series. For Trailer 1, "Love Is a Long Road" by Tom Petty was a deliberate choice to anchor GTA 6 in American Heartland culture — the song's road-trip feel and Florida-adjacent Petty persona made it a natural fit for a Vice City reveal.</p>
          <p className="mt-3">For Trailer 2, the shift to Fever Ray's "What They Call Us" signals a darker, more intense tone. The Trailer 2 footage focuses heavily on law enforcement conflict, hurricanes, and criminal escalation — Fever Ray's ominous electropop perfectly underscores this progression.</p>
        </div>

        <div>
          <h2 className="font-headline text-2xl text-foreground mb-3">GTA 6 In-Game Soundtrack</h2>
          <p>Rockstar hasn't officially revealed the GTA 6 in-game radio stations and music lineup yet. However, given the Vice City / Florida setting (both 1986-inspired Vice City and modern-day Leonida are confirmed environments), expect a mix of contemporary and period-appropriate music. Previous GTA Vice City (2002) featured iconic 1980s stations including Flash FM, V-Rock, and Fever 105.</p>
          <p className="mt-3">GTA V's radio soundtrack was widely praised for its range — from West Coast rap (Radio Los Santos) to classic rock (K-Rose) and indie (East Los FM). GTA 6's soundtrack is expected to be similarly diverse and curated.</p>
        </div>
      </div>

      <div className="border border-border bg-card rounded-xl p-5">
        <h3 className="font-display font-semibold text-sm mb-3">Related Pages</h3>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            { href: "/gta6/trailer", label: "GTA 6 Trailer Breakdown" },
            { href: "/gta6/release-date", label: "GTA 6 Release Date" },
            { href: "/gta6/gameplay", label: "GTA 6 Gameplay Features" },
            { href: "/news", label: "GTA 6 News Hub" },
          ].map(({ href, label }) => (
            <Link key={href} href={href}>
              <div className="text-sm text-primary hover:text-primary/80 flex items-center gap-2 cursor-pointer py-1">
                <ChevronRight className="w-3.5 h-3.5 shrink-0" /> {label}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-headline text-3xl mb-4">GTA 6 Trailer Music FAQ</h2>
        <div className="space-y-2">
          {[
            { q: "What song is in the GTA 6 trailer?", a: "GTA 6 Trailer 1 (December 2023) uses 'Love Is a Long Road' by Tom Petty, released on his 1989 Full Moon Fever album. GTA 6 Trailer 2 (May 2025) features 'What They Call Us' by Fever Ray (artist name of Karin Dreijer from The Knife)." },
            { q: "What is the GTA 6 Trailer 2 song?", a: "The GTA 6 Trailer 2 song is 'What They Call Us' by Fever Ray. It plays throughout the second official trailer released May 6, 2025, which confirmed the Fall 2025 release window." },
            { q: "Is 'Love Is a Long Road' available to stream?", a: "Yes — Tom Petty's 'Love Is a Long Road' is available on all major streaming platforms including Spotify, Apple Music, and YouTube Music as part of the Full Moon Fever album and various Tom Petty compilations." },
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
