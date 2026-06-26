export interface Guide {
  id: string;
  title: string;
  game: string;
  gameSlug: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  timeRequired: string;
  reward: string;
  summary: string;
  tips: string[];
  isPremium?: boolean;
}

export const GUIDES: Guide[] = [
  // GTA V / GTA Online
  {
    id: "g1",
    title: "GTA Online: Fastest $1M/hr Money Methods 2025",
    game: "GTA V / GTA Online",
    gameSlug: "gta5",
    category: "Money",
    difficulty: "Intermediate",
    timeRequired: "1–2 hours",
    reward: "$800k–$1.2M/hr",
    summary: "The most efficient ways to grind money in GTA Online right now. Cayo Perico Heist solo, Acid Lab, and Bunker supply runs ranked by $/hr.",
    tips: [
      "Cayo Perico solo is ~$1.2M every 48 min cooldown — always do the scope-out on a new session",
      "Acid Lab passive income: start a supply run, then do other content while it cooks",
      "Bunker requires full supplies + staff upgrade + equipment upgrade for max profit",
      "Agency contract missions (Dr. Dre) pay ~$1M for ~30 min of work",
      "Double Money events rotate weekly — always check Rockstar Newswire",
    ],
  },
  {
    id: "g2",
    title: "Cayo Perico Heist: Solo Guide & Maximum Payout",
    game: "GTA V / GTA Online",
    gameSlug: "gta5",
    category: "Money",
    difficulty: "Beginner",
    timeRequired: "35–50 min",
    reward: "$1.0M–$1.5M",
    summary: "Complete step-by-step guide for solo Cayo Perico. Scope everything, pick the Kosatka approach, get the best loot, escape without firing a shot.",
    tips: [
      "Always scope the Communications Tower first for the primary target reveal",
      "Secondary targets: Tequila and Cash are best, Artwork is the worst per weight",
      "North Dock + Kosatka is the most reliable approach vehicle for solo",
      "Cutting torch + suppressors are the essential prep missions",
      "Pavel's control tower trick: kill the guard, never trigger alert",
    ],
  },
  {
    id: "g3",
    title: "GTA V: All 69 Strangers & Freaks Missions — Complete Guide",
    game: "GTA V",
    gameSlug: "gta5",
    category: "Missions",
    difficulty: "Intermediate",
    timeRequired: "10–15 hours",
    reward: "100% completion + unique content",
    summary: "Complete walkthrough for every Strangers & Freaks random encounter mission in GTA V story mode. Miss one and you'll lose 100% completion.",
    tips: [
      "Tonya's tow truck missions unlock after completing 'Pulling Favors' with Franklin",
      "Strangers unlock at different percentages — some only appear after specific story missions",
      "Flora's Farms requires Trevor and appears only after 'Nervous Ron'",
      "Save before Tau Savant encounters — some have missable dialogue",
    ],
  },
  {
    id: "g4",
    title: "Best Beginner Cars to Buy in GTA Online (Under $500k)",
    game: "GTA V / GTA Online",
    gameSlug: "gta5",
    category: "Vehicles",
    difficulty: "Beginner",
    timeRequired: "30 min",
    reward: "Race-competitive car for cheap",
    summary: "The best performance-per-dollar cars for new GTA Online players. Race-ready and capable of competing with expensive supers.",
    tips: [
      "Elegy Retro Custom is completely FREE with Social Club — get it first",
      "Banshee 900R ($565k) outperforms many $1M+ supers after upgrade",
      "BF Weevil Custom (~$870k with Benny's work) has insane lap times",
      "Entity XXX (~$450k on sale) is a solid budget super",
      "Always fully upgrade before judging a car's real performance",
    ],
  },
  {
    id: "g5",
    title: "GTA Online: Complete Business Guide — What to Buy First",
    game: "GTA V / GTA Online",
    gameSlug: "gta5",
    category: "Business",
    difficulty: "Intermediate",
    timeRequired: "Ongoing",
    reward: "$500k–$1M+/hr passive",
    summary: "The definitive business buying order for GTA Online. From your first CEO office to a full criminal empire. What to buy, what to skip, and why.",
    tips: [
      "Priority 1: Acid Lab ($750k) — best passive income per dollar invested",
      "Priority 2: Kosatka ($2.2M) for Cayo Perico heist access",
      "Priority 3: Bunker (Paleto Bay for cheap) — passive gunrunning income",
      "Skip: Cocaine/Meth/Weed labs — bunker outperforms all three",
      "Skip: Counterfeit Cash — terrible $/hr",
      "CEO import/export with a 10-car garage is strong active income",
    ],
  },
  {
    id: "g6",
    title: "GTA Online Roleplay: Beginner Server Guide",
    game: "GTA V / GTA Online",
    gameSlug: "gta5",
    category: "Roleplay",
    difficulty: "Beginner",
    timeRequired: "1 hour setup",
    reward: "Access to RP communities",
    summary: "How to join GTA RP servers on PC (FiveM) and console alternatives. Rules, etiquette, character creation tips, and best servers for beginners.",
    tips: [
      "NoPixel is the most famous server but has long waitlists — try smaller whitelisted servers first",
      "Learn RP rules: in-character vs out-of-character communication, NLR (New Life Rule), VDM/RDM",
      "FiveM (PC) has thousands of servers — use the server browser to find beginner-friendly ones",
      "Create a character backstory before joining — good RP starts with a believable personality",
      "Watch established GTA RP streamers to learn etiquette before jumping in",
    ],
  },

  // GTA San Andreas
  {
    id: "g7",
    title: "GTA San Andreas: 100% Completion Checklist",
    game: "GTA San Andreas",
    gameSlug: "san-andreas",
    category: "Completion",
    difficulty: "Advanced",
    timeRequired: "60–80 hours",
    reward: "100% trophy + 2 exclusive rewards",
    summary: "Every single requirement for 100% completion in GTA San Andreas. Missions, assets, collectibles, and the hidden side content most players miss.",
    tips: [
      "50 Tags in Los Santos, 50 Snapshots in San Fierro, 50 Oysters underwater, 30 Horseshoes in Las Venturas",
      "All Unique Stunt Jumps (70 total) — use a fast motorcycle like the NRG-500",
      "Vigilante mission (level 12), Ambulance (level 12), Firefighter, Taxi (50 fares)",
      "Complete all schools: Driving, Boat, Bike, Pilot, Lowrider — get gold in all",
      "Gang territories: you must take them all back at some point during the story",
      "Rewards: infinite ammo + Rhino/Hydra spawn at CJ's house",
    ],
  },
  {
    id: "g8",
    title: "San Andreas: Fastest Ways to Make Money (Story Mode)",
    game: "GTA San Andreas",
    gameSlug: "san-andreas",
    category: "Money",
    difficulty: "Beginner",
    timeRequired: "Varies",
    reward: "$50k–$2M+",
    summary: "From casino glitches to ambulance missions and asset income — every reliable money method in San Andreas story mode.",
    tips: [
      "Inside Track Betting at the casino: maximize bet on the 3/1 favourite horse, save/reload on losses",
      "Complete asset missions early: Whetstone quarry, Zero RC, Driving School pay well",
      "Ambulance missions level 12 gives you infinite sprint for free",
      "Robbing stores at night is fast early-game cash — learn which stores to rob in sequence",
      "Gambling wins are the fastest late-game money farm once you unlock Las Venturas",
    ],
  },
  {
    id: "g9",
    title: "San Andreas: How to Get the Hydra (Fighter Jet) Early",
    game: "GTA San Andreas",
    gameSlug: "san-andreas",
    category: "Secrets",
    difficulty: "Beginner",
    timeRequired: "5 min",
    reward: "Free Hydra fighter jet",
    summary: "You can spawn a fully armed Hydra fighter jet before you've even left Los Santos using the cheat code — here's how and how to fly it.",
    tips: [
      "Enter code: Triangle, Triangle, Square, Circle, X, L1, L1, Down, Up (PS2)",
      "PC: Type AIRSHIP while playing",
      "Hydra uses VTOL (vertical takeoff) — hold nothing to rise, tilt back to go forward",
      "Boost with L3 (PS2) or Caps Lock (PC)",
      "Lock on to vehicles with Circle (PS2) — fire missiles with R1",
    ],
  },

  // GTA Vice City
  {
    id: "g10",
    title: "Vice City: Building Your Empire — All Assets Guide",
    game: "GTA Vice City",
    gameSlug: "vice-city",
    category: "Business",
    difficulty: "Intermediate",
    timeRequired: "8–12 hours",
    reward: "$20,000+/day passive income",
    summary: "Tommy Vercetti's business empire generates passive cash. Complete guide to unlocking all assets and maximizing daily income in Vice City.",
    tips: [
      "Sunshine Autos generates the most income — complete all car lists first",
      "The Pole Position Club requires dancing in the private room for 300 seconds",
      "Print Works requires completing the Printworks missions — generates $8,000/day",
      "Boatyard: complete Checkpoint Charlie to unlock",
      "All 6 assets generate ~$20,000+ per day — revisit regularly",
    ],
  },
  {
    id: "g11",
    title: "Vice City: Hidden Packages (100 Locations) Full Map",
    game: "GTA Vice City",
    gameSlug: "vice-city",
    category: "Collectibles",
    difficulty: "Intermediate",
    timeRequired: "5–8 hours",
    reward: "Weapons spawning at your safe houses",
    summary: "Find all 100 hidden packages in Vice City. Each 10 you collect spawns a new weapon at your safe houses. Full location breakdown by area.",
    tips: [
      "10 Packages: Body Armor spawns at safe house",
      "20: Chainsaw spawns",
      "30: Python (revolver) spawns",
      "40: Flame Thrower spawns",
      "50: Minigun spawns",
      "Helicopter is essential for hard-to-reach roof packages",
      "Use the in-game map radar — packages show as pink dots once you get the guide",
    ],
  },

  // GTA III
  {
    id: "g12",
    title: "GTA III: All Hidden Packages & Rewards Guide",
    game: "GTA III",
    gameSlug: "gta3",
    category: "Collectibles",
    difficulty: "Intermediate",
    timeRequired: "4–6 hours",
    reward: "Weapons at safe houses + $1,000 per package",
    summary: "All 100 hidden packages in GTA III across all three islands. Rewards unlock progressively — here's what you get and where they all are.",
    tips: [
      "10 packages: Pistol + $1,000 per package",
      "Each subsequent 10 unlocks a new weapon spawn at your safe house",
      "100 packages: Rocket Launcher spawns at all safe houses",
      "You need to unlock all three islands first to get every package",
      "Dodo plane is needed for some elevated packages",
    ],
  },

  // GTA IV
  {
    id: "g13",
    title: "GTA IV: Roman's Cab Missions & Early Money Guide",
    game: "GTA IV",
    gameSlug: "gta4",
    category: "Money",
    difficulty: "Beginner",
    timeRequired: "2–4 hours",
    reward: "$5,000–$10,000 early game",
    summary: "How to make money early in GTA IV before the story opens up. Taxi work, Little Jacob drug deliveries, and vigilante missions.",
    tips: [
      "Little Jacob's drug deliveries are the best early cash — call him from your phone",
      "Armored car robberies: ram them, get 3 stars, lose the cops, get $3,000–$6,000",
      "Brucie's car thefts pay well and are repeatable",
      "Street races with Brucie unlock after 'No. 1' mission — up to $5,000 per race",
      "Lottery scratch cards: buy from shops, cheap but can give nice returns",
    ],
  },
  {
    id: "g14",
    title: "GTA IV: 100% Completion — Everything You Need",
    game: "GTA IV",
    gameSlug: "gta4",
    category: "Completion",
    difficulty: "Advanced",
    timeRequired: "50–70 hours",
    reward: "Achievement + bragging rights",
    summary: "GTA IV's 100% requires completing all story missions, side missions, collecting all pigeons, and more. The definitive completion guide.",
    tips: [
      "200 pigeons (flying rats) hidden across Liberty City — missable if killed",
      "50 stunt jumps across all three islands",
      "All 10 car thefts for Stevie",
      "All activities with friends (bowling, darts, pool, shows, eating)",
      "Never skip a friend activity — some are required for achievements",
      "Most Wanted: 30 criminals to eliminate from the police computer",
    ],
  },

  // GTA 6 Pre-Launch
  {
    id: "g15",
    title: "GTA 6: Everything Confirmed So Far (Updated 2025)",
    game: "GTA 6",
    gameSlug: "gta6",
    category: "News",
    difficulty: "Beginner",
    timeRequired: "15 min read",
    reward: "Full GTA 6 knowledge",
    summary: "The definitive, always-updated guide to every confirmed detail about GTA 6. Protagonists, setting, features, platforms, and release window — sourced only from Rockstar.",
    tips: [
      "Dual protagonists: Lucia (playable female lead) and Jason — confirmed by Trailer 1",
      "Setting: Vice City and the surrounding Leonida state (inspired by Florida)",
      "PS5 and Xbox Series X|S at launch — PC version announced separately",
      "Fall 2025 launch window — official from Rockstar's earnings report",
      "GTA Online continues as a live service alongside GTA 6",
    ],
  },
];

export const GUIDE_CATEGORIES = ["All", "Money", "Missions", "Vehicles", "Business", "Completion", "Collectibles", "Secrets", "Roleplay", "News"];
export const GUIDE_GAMES = ["All Games", "GTA 6", "GTA V / GTA Online", "GTA IV", "GTA San Andreas", "Vice City", "GTA III"];
