export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  tag: "confirmed" | "leaked" | "rumor" | "official";
  source: string;
  date: string;
  hot?: boolean;
}

export const NEWS: NewsItem[] = [
  {
    id: "1",
    title: "GTA 6 Official Release Date: Fall 2025 Confirmed by Rockstar",
    summary: "Rockstar Games officially confirmed GTA 6 launches Fall 2025 for PS5 and Xbox Series X|S, with a PC version to follow.",
    tag: "confirmed",
    source: "Rockstar Games",
    date: "2025-04-07",
    hot: true,
  },
  {
    id: "2",
    title: "Trailer 2 Breakdown: Every Detail You Missed in 4K",
    summary: "We went frame-by-frame through the second GTA 6 trailer. New map locations, aircraft, and an apparent gambling mechanic spotted.",
    tag: "official",
    source: "Rockstar Games",
    date: "2025-05-06",
    hot: true,
  },
  {
    id: "3",
    title: "Dual Protagonists Confirmed: Lucia & Jason Both Playable Throughout Story",
    summary: "Rockstar has confirmed you can switch between Lucia and Jason at any point during the open world, not just during missions.",
    tag: "confirmed",
    source: "Rockstar Games",
    date: "2025-04-20",
  },
  {
    id: "4",
    title: "Vice City Map Leak: Full Map Size Allegedly 2× GTA 5",
    summary: "A developer build leak suggests the GTA 6 map spans two counties across a reimagined Vice City and surrounding Everglades area.",
    tag: "leaked",
    source: "GTAForums / Unverified",
    date: "2025-05-10",
  },
  {
    id: "5",
    title: "GTA Online 6 Will Not Require GTA+ Subscription at Launch",
    summary: "Sources close to Rockstar suggest the new GTA Online will be free to all owners at launch, with GTA+ offering cosmetic perks only.",
    tag: "rumor",
    source: "Bloomberg / Jason Schreier",
    date: "2025-05-22",
  },
  {
    id: "6",
    title: "New Business System Allegedly Includes Drug Trafficking Empire",
    summary: "Leaked content points to a fully-fledged criminal empire system — players can build drug routes, launder money, and expand across counties.",
    tag: "leaked",
    source: "GTAForums / Insider",
    date: "2025-06-01",
  },
  {
    id: "7",
    title: "Rockstar Files Patent for Dynamic NPC Memory System",
    summary: "A new Rockstar patent describes NPCs that remember player actions across sessions — what you do to them today affects their behavior tomorrow.",
    tag: "confirmed",
    source: "USPTO Patent Database",
    date: "2025-06-10",
  },
  {
    id: "8",
    title: "GTA 6 PC Version: Minimum Spec Requirements Rumored",
    summary: "Leaked GeForce driver notes suggest GTX 1080 as minimum GPU. Official specs from Rockstar expected at launch.",
    tag: "rumor",
    source: "Nvidia Driver Leak",
    date: "2025-06-15",
  },
];

export const TICKER_ITEMS = [
  "🔴 OFFICIAL: GTA 6 Fall 2025 — PS5 & Xbox Series X|S",
  "🎬 Trailer 2 Breakdown live now — 147 new details found",
  "📍 Vice City Map: Alleged size 2× GTA 5 map",
  "👤 Lucia & Jason — both playable in open world",
  "💰 Criminal Empire system spotted in leaked footage",
  "🎮 GTA Online 6 launching free at game release",
  "🤖 Dynamic NPC Memory system patent confirmed",
];
