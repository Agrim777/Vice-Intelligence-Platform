import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight, Clock } from "lucide-react";
import { setPageMeta } from "@/lib/seo";

export function GTA6StoryPage() {
  useEffect(() => {
    setPageMeta({
      title: "GTA 6 Story — Lucia, Jason, and the Leonida Crime Saga Explained",
      description: "GTA 6 follows Lucia and Jason — a Bonnie & Clyde duo navigating crime across Leonida. Here's everything confirmed about GTA 6's story, setting, and characters.",
      path: "/gta6/story",
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
      <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
        <Link href="/"><span className="hover:text-primary cursor-pointer">Home</span></Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/gta6/characters"><span className="hover:text-primary cursor-pointer">Characters</span></Link>
        <ChevronRight className="w-3 h-3" />
        GTA 6 Story
      </div>

      <div>
        <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest border border-emerald-500/30 bg-emerald-500/5 px-3 py-1.5 rounded-full mb-4">
          ✓ OFFICIAL
        </div>
        <h1 className="font-headline text-5xl md:text-6xl mb-3">GTA 6 STORY</h1>
        <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono mb-4">
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Updated June 27, 2026</span>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          GTA 6's story follows <strong className="text-foreground">Lucia</strong> and <strong className="text-foreground">Jason</strong> — a criminal couple drawn into the sprawling underworld of Leonida, Rockstar's fictional version of modern-day Florida. It's the GTA series' first dual-protagonist story, and its first featuring a female lead.
        </p>
      </div>

      {/* Key story facts */}
      <div className="border border-primary/20 bg-primary/5 rounded-xl p-5">
        <div className="text-xs font-mono text-primary uppercase tracking-widest mb-3">Story at a Glance</div>
        <div className="grid sm:grid-cols-2 gap-2 text-sm">
          {[
            ["Protagonists", "Lucia & Jason Duvall"],
            ["Setting", "State of Leonida (fictional Florida)"],
            ["Main city", "Vice City (fictional Miami)"],
            ["Tone", "Bonnie & Clyde crime saga"],
            ["Series first", "First female protagonist in GTA"],
            ["Series first", "First dual-protagonist story"],
            ["Game release", "November 19, 2026"],
            ["Platforms", "PS5 · Xbox Series X|S"],
          ].map(([label, val]) => (
            <div key={label + val} className="flex gap-2">
              <span className="text-muted-foreground shrink-0">{label}:</span>
              <span className="text-foreground font-medium">{val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Protagonists */}
      <div className="space-y-4">
        <h2 className="font-headline text-3xl">The Protagonists: Lucia & Jason</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-border bg-card rounded-xl p-5 space-y-3">
            <div className="text-xs font-mono text-primary uppercase tracking-widest">Lucia</div>
            <h3 className="font-headline text-2xl">Lucia</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Lucia is GTA 6's first confirmed female protagonist and the series' first female lead in a mainline game. She appears prominently in both trailers — cool, competent, and morally complex. In Trailer 1's opening she is seen in a prison meeting room, suggesting her story begins after a stretch of incarceration. Her full last name has not been officially confirmed.</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {[
                "First female protagonist in GTA series history",
                "Latina descent (confirmed by trailer dialogue and appearance)",
                "Skilled driver, combatant, and thief — shown in both trailers",
                "Seems to be the more pragmatic of the two",
                "Voice actress not yet officially announced",
              ].map(f => <li key={f} className="flex items-start gap-2"><ChevronRight className="w-3 h-3 shrink-0 mt-0.5 text-primary" />{f}</li>)}
            </ul>
          </div>
          <div className="border border-border bg-card rounded-xl p-5 space-y-3">
            <div className="text-xs font-mono text-amber-400 uppercase tracking-widest">Jason</div>
            <h3 className="font-headline text-2xl">Jason Duvall</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Jason Duvall is Lucia's partner and co-protagonist. Last name confirmed in Trailer 2 by a TV news ticker. He appears throughout Trailer 2's daily-life montage — driving, working (likely undercover or in a regular job), and interacting with Vice City. His relationship with Lucia is presented as romantic and criminal partnership — a modern Bonnie & Clyde.</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {[
                "Full name confirmed: Jason Duvall (Trailer 2 news ticker)",
                "Partner — romantically and criminally — of Lucia",
                "Last name suggests possible Cajun/Louisiana heritage",
                "Appears more emotionally expressive than Lucia in trailer footage",
                "Voice actor not yet officially announced",
              ].map(f => <li key={f} className="flex items-start gap-2"><ChevronRight className="w-3 h-3 shrink-0 mt-0.5 text-amber-400" />{f}</li>)}
            </ul>
          </div>
        </div>
      </div>

      {/* Story premise */}
      <div className="space-y-4">
        <h2 className="font-headline text-3xl">The Story Premise</h2>
        <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
          <p>The full story of GTA 6 hasn't been revealed by Rockstar — plot details are being kept tightly under wraps. But from the two official trailers, a clear premise has emerged:</p>
          <p><strong className="text-foreground">Lucia and Jason are a criminal couple.</strong> The opening of Trailer 1 shows Lucia in a prison visitation room — suggesting she's either just been released or is currently incarcerated when the story begins. Jason appears to be on the outside, possibly waiting for her. Their reunion sets the story in motion.</p>
          <p><strong className="text-foreground">The Bonnie & Clyde dynamic.</strong> Rockstar described the duo as "a couple on the run" in early promotional materials. Like the real Bonnie and Clyde, they seem to operate as a team — planning and executing crimes together across Leonida. Trailer 2 shows them robbing a diner, evading law enforcement, and navigating the criminal underworld of Vice City.</p>
          <p><strong className="text-foreground">Leonida's criminal hierarchy.</strong> Both trailers hint at a larger criminal ecosystem in Leonida — cartel elements, corrupt law enforcement, wealthy crime bosses, and the seedy underbelly of a Florida-inspired sun-and-sin culture. Lucia and Jason appear to be mid-level operators drawn deeper into bigger conflicts.</p>
          <p><strong className="text-foreground">Switching between protagonists.</strong> Similar to GTA V's three-character switching, players are expected to switch between Lucia and Jason during the story. Some missions may be played as one protagonist while the other appears as an NPC; others may require coordinating both characters simultaneously.</p>
        </div>
      </div>

      {/* Setting */}
      <div className="space-y-4">
        <h2 className="font-headline text-3xl">Setting: Vice City & Leonida</h2>
        <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
          <p>GTA 6 is set in Leonida — Rockstar's fictional version of modern-day Florida — with Vice City as the main urban hub. Vice City previously appeared in GTA Vice City (2002) and GTA Vice City Stories (2006), but GTA 6's version is a modern reimagining, not a direct continuation of those games' timelines.</p>
          <div className="grid sm:grid-cols-2 gap-3 mt-3">
            {[
              { place: "Vice City", real: "Miami, FL", shown: "Downtown, beach strip, nightlife, port, wealthy suburbs" },
              { place: "Leonida Everglades", real: "The Everglades, FL", shown: "Swamps, marshland, airboats, alligators, rural crime" },
              { place: "Leonida Keys", real: "Florida Keys", shown: "Island chains, marinas, beach communities" },
              { place: "Port Leonida", real: "Port of Miami", shown: "Industrial docks, cargo cranes, container yards" },
              { place: "Leonida Panhandle", real: "Florida Panhandle", shown: "Rural highways, motels, trailer parks, small towns" },
              { place: "Vice City Beach", real: "South Beach / Miami Beach", shown: "Art Deco strip, hotels, beach culture, tourists" },
            ].map(({ place, real, shown }) => (
              <div key={place} className="border border-border bg-card rounded-lg p-3">
                <div className="font-display font-semibold text-sm text-foreground">{place}</div>
                <div className="text-xs text-primary mb-1">Based on: {real}</div>
                <div className="text-xs text-muted-foreground">{shown}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story themes */}
      <div className="space-y-3">
        <h2 className="font-headline text-3xl">Story Themes</h2>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { theme: "Love & Loyalty", desc: "Lucia and Jason's bond is the emotional core — the story explores how far people go for each other in extreme circumstances." },
            { theme: "The American Dream, Perverted", desc: "Florida as the land of opportunity, exploited by criminals, corrupt officials, and wealth inequality. Classic GTA social satire." },
            { theme: "Crime Escalation", desc: "The duo starts small and gets pulled into increasingly dangerous criminal territory — the classic GTA rise from small-time to top of the food chain." },
            { theme: "Florida Man Culture", desc: "Rockstar has always satirized American culture. Leonida's wild Florida environment — meth labs, gator farms, yacht parties, strip malls — is a goldmine for this." },
            { theme: "Media & Social Virality", desc: "Trailer 2 features influencers, true crime cameras, and media crews. The modern viral age of crime documentation is expected to be a story element." },
            { theme: "Identity & Reinvention", desc: "Lucia's background suggests themes of identity, second chances, and what people do to escape their circumstances." },
          ].map(({ theme, desc }) => (
            <div key={theme} className="border border-border bg-card rounded-xl p-4">
              <div className="font-display font-semibold text-sm text-foreground mb-2">{theme}</div>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="font-headline text-3xl mb-4">GTA 6 Story FAQ</h2>
        <div className="space-y-2">
          {[
            { q: "Who are the GTA 6 protagonists?", a: "GTA 6's protagonists are Lucia and Jason Duvall — a criminal couple operating across the State of Leonida (fictional Florida). Lucia is the series' first female protagonist in a mainline GTA game. Jason's last name, Duvall, was confirmed via a TV news ticker in GTA 6 Trailer 2." },
            { q: "Is GTA 6 connected to GTA 5's story?", a: "No — GTA 6 is a standalone story set in its own continuity. Rockstar games typically exist in separate narrative universes. GTA 6 is not a sequel to GTA 5's story; it is an entirely new crime saga in the new Leonida setting." },
            { q: "Does GTA 6 have a female protagonist?", a: "Yes — Lucia is GTA 6's first female protagonist in the mainline series. She is one of two playable characters alongside Jason Duvall. Lucia is also the first Latina protagonist in a mainline GTA game." },
            { q: "Can you play as both Lucia and Jason?", a: "Yes — GTA 6 features a dual-protagonist system where you can switch between Lucia and Jason during the story, similar to how GTA V allowed switching between Michael, Trevor, and Franklin. Some missions may require playing as a specific character; others may allow free switching." },
            { q: "Is GTA 6 set in Vice City?", a: "Yes — Vice City returns as GTA 6's main urban hub. The game is set in Leonida (fictional Florida) with Vice City (fictional Miami) at its center. This is a modern reimagining of Vice City — not a continuation of the 2002 GTA Vice City timeline." },
          ].map(({ q, a }, i) => (
            <details key={i} className="group border border-border bg-card rounded-md overflow-hidden">
              <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none hover:bg-secondary/30 transition-colors">
                <h3 className="font-display font-semibold text-sm">{q}</h3>
                <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-4 pb-4 pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>

      <div className="border border-border bg-card rounded-xl p-5">
        <h3 className="font-display font-semibold text-sm mb-3">Explore More GTA 6</h3>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            { href: "/gta6/characters", label: "GTA 6 Characters — Full Roster" },
            { href: "/gta6/trailer", label: "GTA 6 Trailers — All Details Analysed" },
            { href: "/gta6/gameplay", label: "GTA 6 Gameplay — Confirmed Mechanics" },
            { href: "/gta6/map", label: "GTA 6 Map — Leonida & Vice City" },
            { href: "/gta6/release-date", label: "GTA 6 Release Date — November 19, 2026" },
          ].map(({ href, label }) => (
            <Link key={href} href={href}>
              <div className="text-sm text-primary hover:text-primary/80 flex items-center gap-2 cursor-pointer py-1">
                <ChevronRight className="w-3.5 h-3.5 shrink-0" /> {label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
