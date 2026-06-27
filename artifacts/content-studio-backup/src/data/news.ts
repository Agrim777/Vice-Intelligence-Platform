export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  body?: string;
  date: string;
  source: string;
  tag: "confirmed" | "official" | "leaked" | "rumor" | "guide" | "history";
  hot?: boolean;
  readTime?: string;
  views?: number;
}

export const NEWS: NewsItem[] = [
  // ===================== BREAKING 2026 NEWS =====================
  {
    id: "gta6-take-two-stock-drop-2026",
    title: "GTA 6 Pre-Orders: Take-Two Stock Drops 3% as $79.99 Price and No Online at Launch Disappoint Investors",
    summary: "Take-Two stock fell nearly 3% after GTA 6 pre-orders opened at $79.99 — below bullish expectations. No disc and no GTA Online at launch compounded investor concern despite record pre-order numbers.",
    body: `Rockstar Games officially opened Grand Theft Auto VI pre-orders and the reaction sent Take-Two Interactive shares down nearly 3%. Investors who had bid the stock up 13% in the preceding days took profits immediately after the announcement.

## Key Facts at a Glance

| Fact | Detail |
|---|---|
| Pre-order start | June 25, 2026 |
| Launch date | November 19, 2026 |
| Standard edition | $79.99 |
| Ultimate edition | $99.99 |
| Disc in physical box? | No — code in a box |
| Online at launch? | No — single-player only |
| Take-Two stock move | −3% on pre-order day |
| Analyst target (BofA) | $368 |
| Morningstar sales proj. | 60–70M units FY2027 |

## Why Did Take-Two Stock Drop?

Take-Two shares climbed steadily for a week before pre-orders went live. When the moment arrived, short-term traders cashed out — a textbook "sell the news" move. But this wasn't just profit-taking. The actual pre-order details disappointed investors who had expected more.

Speculation ahead of the announcement suggested Rockstar could price GTA 6 at $90 or even $100. The $79.99 standard edition, while still premium, didn't match those hopes.

For context, the Grand Theft Auto franchise has sold over 470 million units globally. That track record led analysts to argue Rockstar could charge a premium without hurting demand. When base price came in below that threshold, the short-term reaction was negative.

## $79.99 — A Disappointment for Bulls?

The $79.99 figure is not the whole story. Rockstar confirmed an Ultimate Edition at $99.99 with exclusive vehicles, weapons, and apparel. Yet the base price is what most buyers see.

Still, $79.99 is $10 higher than most current-gen games. If GTA 6 sells 60 million copies at that price, net revenue from the base game alone exceeds $4.8 billion — before counting microtransactions or the Ultimate Edition upcharge.

## No Disc, No Online at Launch

Physical collectors got two surprises. First: no disc. Boxed editions of GTA 6 contain only a digital download code. Second: no GTA Online 6 on November 19. The multiplayer component arrives as a free post-launch update — expected early 2027.

Both factors added to investor disappointment. GTA Online's microtransaction revenue was a significant driver of Take-Two's valuation. Delaying that revenue stream by months concerned analysts banking on day-one Online earnings.

## Long-Term Picture Remains Strong

Despite the stock dip, analysts maintain bullish long-term targets. Bank of America reiterated a $368 price target. Morningstar projects 60–70 million units in fiscal year 2027 alone.

GTA V sold 210 million copies over 13 years. GTA 6 is on track to beat that pace significantly — the 39 million pre-orders in 24 hours suggest unprecedented demand.`,
    date: "June 27, 2026",
    source: "Take-Two Interactive / Analyst Reports",
    tag: "official",
    hot: true,
    readTime: "5 min",
    views: 890000,
  },
  {
    id: "gta6-preorder-records-2026",
    title: "GTA 6 Pre-Orders Shatter All Records: 39 Million Copies, $3 Billion Revenue Before Launch",
    summary: "Grand Theft Auto VI has become the most pre-ordered game in history. One day after pre-orders went live on June 25, 2026 — 39 million copies sold, $3 billion in revenue before a single copy ships.",
    body: `Pre-orders for GTA 6 opened on June 25, 2026 across PlayStation Store, Xbox Store, Amazon, GameStop, and major retailers worldwide. Within 24 hours, Take-Two Interactive confirmed staggering numbers: 39 million copies pre-ordered, generating over $3 billion in revenue.

## Pre-Order Numbers: Record-Breaking Demand

The 39 million figure surpasses Call of Duty: Modern Warfare II's previous day-one pre-order record by a significant margin. For comparison, the entire Grand Theft Auto V series took its first three days to earn $1 billion. GTA 6 did three times that before launch.

| Comparison | Record |
|---|---|
| GTA 6 pre-orders (24 hrs) | 39 million copies |
| GTA 6 pre-launch revenue | $3+ billion |
| GTA V day 1 revenue (2013) | $800 million |
| CoD MW2 pre-orders | ~10 million (previous record) |
| GTA V total sales | ~215 million (13 years) |

## What Drove the Demand?

**The 13-year wait.** GTA V launched in 2013. The 13-year gap created pent-up demand that no marketing campaign could manufacture.

**39M pre-orders in 24 hours.** This reflects genuine enthusiasm from the GTA fanbase — and proves the series' cultural gravity remains intact.

**The Vintage Vice City Pack.** Rockstar's pre-order bonus — 5 throwback vehicles, retro outfits, classic weapon skins — created urgency. Pre-order before launch or miss the bonus permanently.

## What This Means for Launch Day

Analysts project GTA 6 will surpass $1 billion in sales on November 19, 2026 alone — potentially making it the highest single-day revenue event in entertainment history, topping Avengers: Endgame's opening weekend.

Pre-load for both digital and physical (code-in-box) editions begins November 12 — one week before launch.`,
    date: "June 26, 2026",
    source: "Take-Two Interactive",
    tag: "official",
    hot: true,
    readTime: "4 min",
    views: 1420000,
  },
  {
    id: "gta6-preorder-open-june25",
    title: "GTA 6 Pre-Orders Now Open: Vintage Vice City Pack, Standard $79.99 vs Ultimate $99.99",
    summary: "GTA 6 pre-orders launched June 25, 2026. Standard Edition $79.99, Ultimate Edition $99.99. The Vintage Vice City pack — 5 throwback vehicles, retro outfits, classic weapon skins — goes to all pre-buyers.",
    body: `Rockstar revealed full edition details alongside the launch of GTA 6 pre-orders on June 25, 2026.

## Editions Breakdown

| Edition | Price | What's Included |
|---|---|---|
| Standard | $79.99 | Full story mode + GTA Online 6 access |
| Ultimate | $99.99 | Standard + exclusive vehicles, weapons, apparel |
| Pre-order bonus | Free (both) | Vintage Vice City Pack |

**Standard Edition — $79.99**
Full GTA 6 story mode + GTA Online 6 access (when it launches) + Vintage Vice City pre-order pack.

**Ultimate Edition — $99.99**
Everything in Standard, plus an exclusive collection of premium vehicles, weapons, and apparel for Lucia and Jason — woven into all aspects of the game's narrative. Additional GTA Online 6 starting benefits.

## Vintage Vice City Pre-Order Pack (all editions)

All pre-orders — Standard and Ultimate — receive the Vintage Vice City Pack:
- **Infernus Classic** sports car
- **Stinger GT** convertible
- 3 additional throwback 1980s vehicles
- 1980s Vice City outfit set for Lucia and Jason
- Gold-and-chrome retro weapon skin pack

All items are usable in both story mode and GTA Online 6.

## Physical vs Digital

Both editions are available digitally and physically. **Important:** the physical edition is a code-in-a-box — no disc is included. The box contains a download code. Storage required: ~130–150 GB estimated.

Pre-load begins November 12 for digital pre-orders.`,
    date: "June 25, 2026",
    source: "Rockstar Newswire",
    tag: "official",
    hot: true,
    readTime: "3 min",
    views: 980000,
  },
  {
    id: "gta6-easter-egg-tommy-lizard",
    title: "GTA 6 Trailer 2 Easter Egg: Tommy Vercetti Lizard Found Hidden in Plain Sight for a Year",
    summary: "Community spotted a lizard in GTA 6 Trailer 2 wearing Tommy Vercetti's iconic blue floral shirt — a Rockstar easter egg undetected for over a year since the trailer's May 2025 release.",
    body: `Grand Theft Auto 6 fans discovered a hidden nod to Vice City protagonist Tommy Vercetti in the game's second trailer — over a year after it first dropped.

## The Discovery

At the 33-second mark of GTA 6 Trailer 2, during a quick montage of co-protagonist Jason Duvall's day, a lizard painting on a store wall wears the same blue floral shirt Tommy made famous in GTA Vice City (2002).

Twitter user **GameVerses** spotted the lizard while rewatching the trailer for a video breakdown. The detail went unnoticed for so long because it's only visible for half a second and slightly blurry — approximately 2 seconds of screen time at 24fps.

## Why Did It Take a Year to Find?

The trailer has amassed hundreds of millions of views across platforms. But several factors made this easy to miss:

- The detail is visible for less than 2 seconds
- The image is slightly out of focus
- The lizard's shirt only matches Tommy's in the specific shade of blue
- It's a painting on a building wall — background detail in a fast-moving montage

## What Does This Mean?

Rockstar is famous for deep-cut references. GTA V hid an entire UFO mystery (Mt. Chiliad) that took years to decode. The Tommy Vercetti lizard is consistent with Rockstar's world-building approach — placing specific, meaningful details for attentive players.

GTA 6 is set in Vice City (fictional Miami) — the same city Tommy Vercetti called home in 2002. The nod may simply honor the location's history, or hint at deeper lore connections. Rockstar has not commented.

## Frequently Asked Questions

**Will Tommy Vercetti appear in GTA 6?**
No confirmation from Rockstar. The lizard is a reference, not a canonical plot connection. GTA 6 appears to be set in a separate timeline from GTA Vice City.

**Who voiced Tommy Vercetti?**
Ray Liotta voiced Tommy Vercetti in GTA Vice City (2002). Ray Liotta passed away in 2022. Any appearance of Tommy in GTA 6 would require a new voice actor or archival recordings.`,
    date: "June 24, 2026",
    source: "GTAForums Community",
    tag: "confirmed",
    hot: true,
    readTime: "4 min",
    views: 756000,
  },
  {
    id: "gta6-price-79-single-player",
    title: "GTA 6 Price $79.99 Confirmed — Single-Player Only at Launch, GTA Online 6 Comes Later",
    summary: "Rockstar confirmed GTA 6 launches at $79.99 (Standard) and $99.99 (Ultimate) on November 19 — but GTA Online 6 will not be included at launch. It arrives as a free update after release.",
    body: `Final GTA 6 pricing and launch content confirmed by Rockstar alongside the June 25 pre-order announcement.

## Pricing Summary

| Edition | Price | Launch Content |
|---|---|---|
| Standard | $79.99 | Story mode + future GTA Online access |
| Ultimate | $99.99 | Story mode + extras + future GTA Online access |

GTA Online 6 is NOT included at launch. It arrives as a free post-launch update for all GTA 6 owners.

## Why Single-Player Only at Launch?

Rockstar's official reasoning: *"We want the story of Lucia and Jason to be the complete focus at launch. GTA Online 6 will be the biggest online open-world experience we've ever built — and it deserves its own moment."*

This mirrors the GTA V approach. GTA V launched September 17, 2013 as story-only. GTA Online followed on October 1, 2013 — just 2 weeks later, but it was notoriously unstable at launch.

For GTA 6, the gap is expected to be much longer. Early 2027 is the commonly reported window, though Rockstar has not confirmed a date.

## What Does This Mean for Buyers?

**If you only play story mode:** No impact. GTA 6 launches with the full Lucia and Jason narrative on November 19.

**If you planned to play GTA Online 6 on launch day:** You'll need to wait. The exact wait time is unknown.

**Ultimate Edition players:** The exclusive vehicles, weapons, and apparel from the Ultimate Edition are usable in story mode from day one. Additional GTA Online 6 starting benefits will activate when Online launches.

## Is $79.99 Worth It?

GTA 6 is $10 more than the standard $69.99 price of most current-gen AAA games. Given the scale — 2.5–3× larger than GTA V, 13 years of development, dual protagonists, dynamic weather, living wildlife ecosystem — $79.99 for the base game represents reasonable value for a story-mode-only purchase.`,
    date: "June 25, 2026",
    source: "Rockstar Newswire",
    tag: "official",
    readTime: "4 min",
    views: 845000,
  },
  {
    id: "gta6-leonida-six-regions",
    title: "GTA 6 Map of Leonida: All Six Confirmed Regions, Biomes & Vice City Districts",
    summary: "Rockstar's Leonida map spans six distinct regions confirmed from both official trailers — Vice City urban core, Everglades swampland, offshore Keys, working port, rural panhandle, and suburban sprawl.",
    body: `GTA 6 returns to a modern version of Florida — reimagined as the State of Leonida. Unlike GTA V, which was centered on a single city, Leonida is an entire state with distinct regions, each with its own environment, culture, and criminal ecosystem.

## The Six Confirmed Regions

### 1. Vice City — The Urban Core
The main city hub. A neon-soaked reimagining of modern Miami with distinct districts: a glittering downtown skyline, beachfront art deco strips, wealthy hillside neighborhoods, and industrial waterfront areas. Confirmed in both trailers with extensive footage.

### 2. Port Leonida — Working Waterfront
A massive commercial shipping port with animated container cranes, cargo vessels, and warehouse facilities. Confirmed in Trailer 2. Likely the setting for smuggling missions and organized crime storylines.

### 3. Leonida Everglades — The Swamp Interior
A massive interior swampland region — the GTA 6 equivalent of Blaine County but with Florida character. Airboat navigation, alligator territory, hidden criminal operations, and the hurricane weather system interacting with flooding marshland. Confirmed in multiple trailer sequences.

### 4. The Leonida Keys — Offshore Island Chain
A southern island chain visible in aerial trailer shots — luxury marinas, beach communities, and smuggling routes. Inspired by the Florida Keys. Confirmed via Trailer 1 and 2 aerial sequences.

### 5. Leonida Panhandle — Rural Interior
Northern rural region with highway motels, small towns, and countryside. Visible in trailer car chase sequences set in distinctly non-Miami environments. Likely the setting for redneck/rural crime storylines.

### 6. Suburban Leonida — Middle-Class Sprawl
Strip malls, tract housing, and suburban neighborhoods connecting the urban core to the rural regions. Confirmed via trailer footage of Lucia and Jason in everyday Leonida environments.

## Map Size

Community analysis estimates the total map at 175–200 km² of land area — approximately 2.5–3× the size of GTA V's San Andreas. The full map has not been officially revealed.

## What Makes Leonida Different

Unlike any previous GTA map, Leonida features:
- **Dynamic hurricane weather** that reshapes the map in real time
- **Living wildlife ecosystem** — alligators, birds, fish
- **Water-dominant geography** — the Keys and Everglades require boat travel
- **Distinct cultural zones** — from luxury Vice City to rural Panhandle`,
    date: "June 15, 2026",
    source: "GTA6Guide.in Analysis",
    tag: "confirmed",
    hot: false,
    readTime: "5 min",
    views: 520000,
  },
  {
    id: "gta6-second-delay-march-2026",
    title: "GTA 6 Delayed a Second Time: May 2026 → November 19, 2026 — Rockstar's Full Statement",
    summary: "Rockstar announced a second delay to GTA 6 in March 2026, pushing the launch from May 2026 to November 19, 2026. The studio cited the need for additional polish across all of Leonida.",
    body: `Rockstar Games announced on March 18, 2026 that Grand Theft Auto VI would not meet its May 2026 release date. The game was delayed to November 19, 2026 — its third announced window.

## The Timeline of Delays

| Announced | Window | Status |
|---|---|---|
| April 2025 | Fall 2025 | Delayed |
| September 2025 | May 2026 | Delayed |
| March 2026 | November 19, 2026 | CONFIRMED FINAL |

## Rockstar's Statement

*"We know the wait has been long, and we are committed to delivering an experience that redefines what open-world gaming can be. The additional time allows us to polish every corner of Leonida to the standard our players deserve. Grand Theft Auto VI launches November 19, 2026."*

## Why the Second Delay?

Rockstar cited "additional polish" without specifics. Industry analysts speculated:

- The dynamic systems (hurricane weather, wildlife AI, economy simulation) needed more time to stabilize
- The dual-protagonist story needed additional QA testing at a massive narrative scale
- The online component required more architecture work before launch — ultimately leading to GTA Online 6 being separated from the launch entirely

## Community Reaction

The reaction was predictable but measured. GTA fans had already processed one delay. Many community members pointed to the first delay as evidence Rockstar takes quality seriously. "Better delayed than broken at launch" was the dominant sentiment on GTAForums.

The announcement of November 19 — a concrete date rather than a seasonal window — was broadly welcomed as a sign the game was genuinely near completion.`,
    date: "March 2026",
    source: "Rockstar Newswire",
    tag: "official",
    readTime: "4 min",
    views: 1340000,
  },
  {
    id: "gta6-release-date-november-2026",
    title: "GTA 6 Release Date Officially Confirmed: November 19, 2026 — After Two Delays",
    summary: "Rockstar Games confirms GTA 6 launches November 19, 2026 on PS5 and Xbox Series X|S. The game was delayed twice — first from Fall 2025, then from May 2026. Pre-orders open June 25.",
    body: `After two high-profile delays, Rockstar Games officially confirmed Grand Theft Auto VI launches November 19, 2026 on PlayStation 5 and Xbox Series X|S.

## The Delays

- **Original window:** Fall 2025 (announced April 2025)
- **First delay:** Pushed to May 2026 (announced September 2025)
- **Second delay:** Pushed to November 19, 2026 (announced March 2026)

Rockstar's statement: *"We know the wait has been long, and we are committed to delivering an experience that redefines what open-world gaming can be. The additional time allows us to polish every corner of Leonida to the standard our players deserve."*

## What's Confirmed for Nov 19, 2026

- Full GTA 6 story mode (Lucia & Jason)
- PS5 and Xbox Series X|S only
- Standard Edition $79.99
- Ultimate Edition $99.99
- Pre-orders opened June 25, 2026

## What's NOT at Launch

- GTA Online 6 (arrives as free post-launch update)
- PC version (confirmed but no date)

## Pre-Load Date

Pre-loading begins **November 12, 2026** — one week before launch — for both digital and physical (code-in-box) pre-orders.`,
    date: "June 18, 2026",
    source: "Rockstar Newswire",
    tag: "official",
    hot: true,
    readTime: "4 min",
    views: 2100000,
  },
  {
    id: "gta6-online-separate-launch",
    title: "GTA Online 6 Will Not Launch With GTA 6 — Confirmed Separate Post-Launch Release",
    summary: "Rockstar confirmed GTA Online 6 will not be available on November 19. Story mode only at launch. GTA Online 6 follows as a free update — no date confirmed yet but early 2027 reported.",
    date: "June 25, 2026",
    source: "Rockstar Newswire",
    tag: "confirmed",
    readTime: "3 min",
    views: 678000,
  },
  {
    id: "gta6-trailer2-official",
    title: "GTA 6 Trailer 2 Released — Hurricane, Port Leonida, Federal Agent Antagonist Revealed",
    summary: "Rockstar dropped the second official GTA 6 trailer on May 6, 2025. Port Leonida, offshore keys, casino interior, hurricane system, and a new female federal agent antagonist were revealed.",
    body: `GTA 6 Trailer 2 hit YouTube on May 6, 2025 and immediately broke the gaming internet.

## Key Reveals

**Port Leonida:** A massive working shipping port with animated container cranes — suggests criminal smuggling missions.

**Hurricane System:** Stores board up, residents evacuate, sky turns green-yellow. Real-time weather event that changes the open world.

**Casino Interior:** High-limit gambling room with slot machines and card tables visible.

**Federal Agent Antagonist:** A female FBI/DEA agent appears in the trailer's car chase sequence — the apparent law enforcement antagonist who pursues Lucia and Jason.

**Offshore Keys:** Aerial shot confirms a tropical island chain extends south of Vice City — luxury marinas, smuggling routes.

**Jason's Name Confirmed:** A TV news ticker in the trailer reads "Jason Duvall" — officially confirming his last name.

**The Tommy Lizard:** At 0:33, a lizard on a wall wears Tommy Vercetti's blue floral shirt — discovered by community members June 2026.

## Trailer Stats

- Release: May 6, 2025
- Views: 250+ million across platforms
- Combined trailer views (Trailer 1 + 2): 450+ million
- Music: Not officially identified (instrumental score)

Fall 2025 release window was originally confirmed alongside Trailer 2's release, before two subsequent delays.`,
    date: "May 6, 2025",
    source: "Rockstar Games",
    tag: "official",
    hot: false,
    readTime: "5 min",
    views: 980000,
  },
  {
    id: "gta6-first-delay-sep-2025",
    title: "GTA 6 First Delay Announced: Fall 2025 Pushed to May 2026",
    summary: "Rockstar announced in September 2025 that GTA 6 would miss the Fall 2025 window and launch in May 2026 instead. A second delay later pushed it again to November 19, 2026.",
    date: "September 2025",
    source: "Rockstar Newswire",
    tag: "official",
    readTime: "3 min",
    views: 1780000,
  },
  {
    id: "gta6-pc-confirmed",
    title: "GTA 6 PC Version Confirmed — DLSS 4, Full Ray Tracing, Ultra-Wide Monitor Support",
    summary: "Rockstar confirmed GTA 6 will come to PC after the console release. DLSS 4, AMD FSR 4, full ray tracing, and ultra-wide support all confirmed. No PC release date yet — expect 2027+.",
    date: "June 2025",
    source: "Rockstar Newswire",
    tag: "confirmed",
    readTime: "4 min",
    views: 560000,
  },
  {
    id: "gta6-lucia-first-female",
    title: "Lucia Confirmed as First Female Lead in Mainline GTA History",
    summary: "Rockstar officially confirmed Lucia as GTA 6's female protagonist — first in mainline GTA history. She and Jason are equally playable co-protagonists throughout the entire story.",
    date: "December 2023",
    source: "Rockstar Newswire",
    tag: "official",
    readTime: "4 min",
    views: 920000,
  },
  {
    id: "gta6-trailer1-200m",
    title: "GTA 6 Trailer 1 Crosses 200 Million Views — Most-Watched Game Trailer in History",
    summary: "The December 2023 GTA 6 Trailer 1 crossed 200 million YouTube views. Tom Petty's 'Love Is a Long Road' charted globally. The game's Vice City setting and Lucia reveal drove massive engagement.",
    date: "January 2024",
    source: "YouTube",
    tag: "history",
    readTime: "2 min",
    views: 540000,
  },
  {
    id: "gta6-hurricane-system",
    title: "GTA 6 Hurricane Weather System Confirmed — The Open World Changes in Real Time",
    summary: "Trailer 2 showed a full dynamic hurricane system: stores board up, residents evacuate, roads flood. The map itself transforms during hurricane events. First such system in open-world gaming.",
    date: "May 2025",
    source: "Rockstar Games",
    tag: "confirmed",
    readTime: "4 min",
    views: 430000,
  },
  {
    id: "gta6-map-leonida",
    title: "GTA 6 Map Revealed: Leonida State — Vice City, Everglades & Offshore Keys",
    summary: "Community analysis of both trailers estimates GTA 6's map is 2.5–3× the size of GTA V. It spans the Vice City urban core, Leonida Everglades swamp, rural farmland, and an offshore island chain.",
    date: "May 2025",
    source: "GTA6Guide.in Analysis",
    tag: "confirmed",
    readTime: "5 min",
    views: 390000,
  },
  {
    id: "gta6-economy-property",
    title: "GTA 6 Economy: Property Buying, Expanded Stock Market & Criminal Business All Confirmed",
    summary: "GTA 6 features a fully simulated economy with property purchasing, an expanded stock market, and overlapping legitimate and criminal business ventures with a real-time NPC supply/demand system.",
    date: "May 2025",
    source: "GTA6Guide.in Analysis",
    tag: "confirmed",
    readTime: "4 min",
    views: 295000,
  },
  {
    id: "gta6-wildlife",
    title: "GTA 6 Wildlife Ecosystem: Alligators, Birds & Fish in a Living Open World",
    summary: "GTA 6 has a functioning wildlife ecosystem. Alligators in the Everglades, coastal seabirds, fish in underwater sections — all part of a living simulation that reacts to weather and player actions.",
    date: "May 2025",
    source: "GTA6Guide.in Analysis",
    tag: "confirmed",
    readTime: "3 min",
    views: 255000,
  },
  {
    id: "gta5-215m-sales",
    title: "GTA V Surpasses 215 Million Copies — Still in Weekly Top 5 Charts in 2026",
    summary: "GTA V has sold 215 million copies as of Q1 2026 — over 12 years after launch. GTA Online revenue still exceeds $500M annually, making it one of gaming's greatest long-term earners.",
    date: "February 2026",
    source: "Take-Two Interactive",
    tag: "history",
    readTime: "3 min",
    views: 280000,
  },
  {
    id: "gta6-san-andreas-comparison",
    title: "Why GTA 6 Is the Biggest GTA Leap Since GTA III Went 3D in 2001",
    summary: "Dual protagonists, hurricane weather, living wildlife, prone combat system — GTA 6 represents a generational leap that rivals GTA III's move to 3D as the franchise's biggest technical evolution.",
    date: "June 2025",
    source: "GTA6Guide.in",
    tag: "guide",
    readTime: "6 min",
    views: 220000,
  },
  {
    id: "gta6-weapons-combat",
    title: "GTA 6 Combat System: Prone Mechanic, Modular Weapons & Realistic Reload Animations Confirmed",
    summary: "Major combat upgrades in GTA 6: prone cover system, modular in-field weapon customization (grips, scopes, suppressors), per-magazine reload tracking, and improved contextual takedowns.",
    date: "May 2025",
    source: "GTA6Guide.in Analysis",
    tag: "confirmed",
    readTime: "5 min",
    views: 320000,
  },
];

export const TICKER_ITEMS = [
  "🔥 GTA 6 — November 19, 2026 — CONFIRMED",
  "🛒 Pre-orders LIVE now — Vintage Vice City Pack bonus",
  "📊 39 Million pre-orders in 24 hours · $3 Billion revenue",
  "🦎 Tommy Vercetti lizard easter egg found in Trailer 2",
  "💰 Standard Edition $79.99 · Ultimate Edition $99.99",
  "🎮 Story mode only Nov 19 — GTA Online 6 launches later",
  "💻 PC version confirmed — DLSS 4, ray tracing, ultra-wide",
  "🌊 Hurricane weather system · Live wildlife ecosystem",
  "📦 Physical edition = code-in-box (no disc)",
  "⬇️ Pre-load begins November 12 — 1 week before launch",
];
