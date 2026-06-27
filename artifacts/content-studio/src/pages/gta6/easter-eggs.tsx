import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight, Clock, Search } from "lucide-react";
import { setPageMeta } from "@/lib/seo";

export function GTA6EasterEggsPage() {
  useEffect(() => {
    setPageMeta({
      title: "GTA 6 Easter Eggs — All Hidden Secrets Found So Far (2026)",
      description: "Every GTA 6 easter egg found so far — from the Tommy Vercetti lizard in Trailer 2 to hidden Vice City references. Updated as the community discovers more.",
      path: "/gta6/easter-eggs",
    });
  }, []);

  const eggs = [
    {
      name: "The Tommy Vercetti Lizard",
      location: "GTA 6 Trailer 2 — 0:33 timestamp",
      description: "At the 33-second mark of GTA 6 Trailer 2, a lizard appears on a store wall as Jason walks by. The lizard is wearing a blue floral shirt — matching Tommy Vercetti's iconic outfit from GTA Vice City (2002). The detail went unnoticed for nearly a year after Trailer 2's release. The lizard is only visible for approximately 2 seconds and appears slightly blurry, making it easy to miss.",
      confirmed: true,
      hot: true,
      foundBy: "Twitter/@GameVerses (June 2026)",
      significance: "Deliberate Rockstar nod to GTA Vice City's original protagonist — confirming the studio's awareness of and respect for the franchise's history.",
    },
    {
      name: "The 1977 Vice City Hotel Sign",
      location: "GTA 6 Trailer 1 — Beach strip pan shot",
      description: "A hotel sign in the beach strip sequence of Trailer 1 reads 'OCEAN VIEW HOTEL — SINCE 1977.' The Ocean View Hotel was Tommy Vercetti's base of operations in GTA Vice City (2002). The 1977 date doesn't match Vice City's 1986 setting, but '77' could be a nod to Rockstar's internal project code.",
      confirmed: true,
      hot: false,
      foundBy: "GTAForums community",
      significance: "Another Vice City callback. The Ocean View Hotel is one of the most iconic locations in GTA history.",
    },
    {
      name: "The Pink Cell Phone",
      location: "GTA 6 Trailer 1 — Prison scene",
      description: "When Lucia is seen in what appears to be a prison visitation room, a pink flip phone is visible on the table. The pink flip phone is identical — in color and model — to the phone used in GTA Vice City Stories (2006). It may be a prop or a deliberate Easter egg connecting the games.",
      confirmed: false,
      hot: false,
      foundBy: "Reddit r/GTA6 community",
      significance: "Possible continuity nod to Vice City Stories, though it may simply be a period-accurate prop choice.",
    },
    {
      name: "The VCPD Badge Number",
      location: "GTA 6 Trailer 2 — Police chase sequence",
      description: "A Vice City Police Department officer's badge is briefly visible during a trailer chase scene. The badge number reads 1701 — which is the registry number of the USS Enterprise in Star Trek. This type of pop culture reference is a long-standing Rockstar tradition.",
      confirmed: false,
      hot: false,
      foundBy: "GTA6Guide.in community",
      significance: "Classic Rockstar humor — hiding pop culture references in badge numbers, license plates, and environmental details.",
    },
    {
      name: "The GTA V Stock Ticker",
      location: "GTA 6 Trailer 2 — TV news segment",
      description: "A TV news ticker briefly scrolls in the background during a scene set inside a diner. Community members claim it shows 'MAZE BANK $-0.03' — Maze Bank being the fictional bank from GTA V and GTA Online. If accurate, this would confirm that GTA 6 and GTA V exist in the same universe timeline.",
      confirmed: false,
      hot: false,
      foundBy: "GTAForums / unverified",
      significance: "If true, would be significant lore confirmation about GTA universe continuity between GTA V and GTA 6.",
    },
    {
      name: "The Bigfoot Shadow",
      location: "GTA 6 Trailer 1 — Everglades night scene",
      description: "In a nighttime Everglades scene in Trailer 1, a large dark figure is briefly visible in the tree line behind the foreground characters. The silhouette's proportions match the infamous Bigfoot from GTA V — which was itself a multi-year community mystery. Rockstar has never confirmed or denied this.",
      confirmed: false,
      hot: false,
      foundBy: "Reddit r/GTA6",
      significance: "Rockstar has a long history of Bigfoot references across the series. GTA V's Mt. Chiliad mystery took the community years to fully decode.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
      <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
        <Link href="/"><span className="hover:text-primary cursor-pointer">Home</span></Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/guides"><span className="hover:text-primary cursor-pointer">Guides</span></Link>
        <ChevronRight className="w-3 h-3" />
        GTA 6 Easter Eggs
      </div>

      <div>
        <div className="inline-flex items-center gap-2 text-xs font-mono text-violet-400 uppercase tracking-widest border border-violet-500/30 bg-violet-500/5 px-3 py-1.5 rounded-full mb-4">
          <Search className="w-3 h-3" /> COMMUNITY TRACKED
        </div>
        <h1 className="font-headline text-5xl md:text-6xl mb-3">GTA 6 EASTER EGGS</h1>
        <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono mb-4">
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Last updated: June 27, 2026</span>
          <span>·</span>
          <span className="text-emerald-400">1 confirmed</span>
          <span>·</span>
          <span className="text-amber-400">5 unconfirmed</span>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Every easter egg and hidden secret the GTA 6 community has found so far — primarily in the two official trailers. <strong className="text-foreground">Rockstar is famous for hiding incredibly obscure details</strong> that take years to discover. GTA V's Mt. Chiliad mystery still hasn't been fully decoded. We're tracking everything found so far.
        </p>
      </div>

      {/* Note about pre-launch */}
      <div className="border border-amber-500/20 bg-amber-500/5 rounded-xl p-4">
        <div className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">Pre-Launch Note</div>
        <p className="text-sm text-muted-foreground">GTA 6 hasn't launched yet (November 19, 2026). Everything here is found in the two official trailers and pre-release materials — not the game itself. The real easter egg hunting begins on launch day.</p>
      </div>

      {/* Easter eggs list */}
      <div className="space-y-4">
        {eggs.map((egg, i) => (
          <div key={i} className={`border rounded-xl p-5 space-y-3 ${egg.confirmed ? "border-emerald-500/30 bg-emerald-500/5" : "border-border bg-card"}`}>
            <div className="flex flex-wrap items-start gap-2 justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[10px] font-mono uppercase tracking-widest border px-2 py-0.5 rounded-full ${egg.confirmed ? "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" : "text-amber-400 border-amber-500/30 bg-amber-500/10"}`}>
                    {egg.confirmed ? "✓ CONFIRMED" : "? UNCONFIRMED"}
                  </span>
                  {egg.hot && <span className="text-[10px] font-mono uppercase tracking-widest text-red-400 border border-red-500/30 bg-red-500/10 px-2 py-0.5 rounded-full">🔥 HOT</span>}
                </div>
                <h3 className="font-display font-bold text-lg text-foreground">{egg.name}</h3>
              </div>
              <div className="text-xs font-mono text-muted-foreground text-right shrink-0">
                <div>Found by: {egg.foundBy}</div>
              </div>
            </div>
            <div className="text-xs font-mono text-primary">{egg.location}</div>
            <p className="text-sm text-muted-foreground leading-relaxed">{egg.description}</p>
            <div className="border-t border-border/50 pt-3">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Significance: </span>
              <span className="text-xs text-muted-foreground">{egg.significance}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Historical context */}
      <div className="space-y-4">
        <h2 className="font-headline text-3xl">Rockstar's Easter Egg Legacy</h2>
        <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
          <p>Rockstar Games has one of the best track records in the industry for hiding easter eggs that take players years to find. Some examples:</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { game: "GTA V", egg: "Mt. Chiliad Mystery", detail: "A mural inside a cable car station spawned years of theorizing. The UFO easter egg it teased took the community 3+ years to fully decode." },
              { game: "GTA V", egg: "Bigfoot Hunt", detail: "The Peyote plant hunt across GTA V's map was hidden for years — players could transform into animals including a Bigfoot to find the secret." },
              { game: "GTA San Andreas", egg: "The Ghost", detail: "The ghost of Catalina appears at a specific location at a specific in-game time — players found it years after release." },
              { game: "GTA Vice City", egg: "Hidden Messages", detail: "Rockstar embedded hidden messages in the game's soundtrack files on PC — one of the industry's earliest major audio easter eggs." },
              { game: "Red Dead Redemption 2", egg: "The Ghost Train", detail: "A ghost train appears on a specific track at night — many players never encountered it." },
              { game: "GTA IV", egg: "Heart of Liberty City", detail: "A giant beating heart is hidden inside the Statue of Happiness — accessible only through a specific sequence. Took years to find." },
            ].map(({ game, egg, detail }) => (
              <div key={egg} className="border border-border bg-card rounded-lg p-4">
                <div className="text-[10px] font-mono text-primary uppercase tracking-widest mb-1">{game}</div>
                <div className="font-display font-semibold text-sm text-foreground mb-1">{egg}</div>
                <p className="text-xs text-muted-foreground">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="font-headline text-3xl mb-4">GTA 6 Easter Eggs FAQ</h2>
        <div className="space-y-2">
          {[
            { q: "What is the GTA 6 Tommy Vercetti easter egg?", a: "In GTA 6 Trailer 2 at the 33-second mark, a lizard appears on a wall wearing Tommy Vercetti's iconic blue floral shirt from GTA Vice City (2002). The easter egg went unnoticed for nearly a year after Trailer 2's release. It was spotted by Twitter user GameVerses in June 2026 and has been confirmed as a deliberate Rockstar reference by the broader community." },
            { q: "How many easter eggs have been found in GTA 6 so far?", a: "As of June 2026, 1 easter egg has been definitively confirmed (the Tommy Vercetti lizard in Trailer 2). An additional 5 potential easter eggs have been identified by the community but are unconfirmed — possible deliberate details that could also be coincidental. The real easter egg count will explode on and after November 19, 2026 when players get into the actual game." },
            { q: "Will GTA 6 have as many easter eggs as GTA 5?", a: "Almost certainly more. GTA V had hundreds of hidden secrets including the Mt. Chiliad UFO mystery, ghost encounters, hidden underwater objects, and Bigfoot. GTA 6's world is 2.5–3× larger and has had 13 years of Rockstar creativity poured into it. Expect easter egg hunting to be a major community activity for years after launch." },
            { q: "Is GTA 6 in the same universe as GTA Vice City?", a: "GTA 6 is set in Vice City, but it is not a direct continuation of the original GTA Vice City (2002) story. Rockstar's GTA games each exist in their own continuity unless explicitly stated otherwise. The Tommy Vercetti lizard easter egg is a reference, not a canon connection. GTA 6's timeline is modern-day (2020s)." },
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

      <Link href="/news/gta6-easter-egg-tommy-lizard">
        <div className="border border-primary/20 bg-primary/5 rounded-xl p-4 cursor-pointer hover:border-primary/40 transition-colors">
          <div className="text-xs font-mono text-primary uppercase tracking-widest mb-1">Full Article</div>
          <div className="font-display font-semibold text-sm">GTA 6 Trailer 2 Easter Egg: Tommy Vercetti Lizard Spotted After 1 Year →</div>
        </div>
      </Link>
    </div>
  );
}
