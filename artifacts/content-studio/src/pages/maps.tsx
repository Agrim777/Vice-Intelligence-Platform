import { useState } from "react";
import { MapPin, Info, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

interface MapGame {
  id: string;
  title: string;
  year: number;
  city: string;
  mapSize: string;
  basedOn: string;
  description: string;
  keyAreas: { name: string; description: string }[];
  secrets: string[];
  bestSpots: { name: string; why: string }[];
  coverColor: string;
}

const MAP_GAMES: MapGame[] = [
  {
    id: "gta1",
    title: "GTA 1",
    year: 1997,
    city: "Liberty City, San Andreas & Vice City",
    mapSize: "Three separate 2D city grids",
    basedOn: "New York, San Francisco & Miami (top-down)",
    description: "The original GTA featured three separate 2D top-down cities across six chapters. Each city was a compact grid of streets, each playable from a bird's-eye view. Despite being simple by today's standards, the maps introduced the open-world formula that defined the series.",
    keyAreas: [
      { name: "Liberty City", description: "New York-inspired metropolis, first chapter. Dense grid of streets with warehouses, residential blocks, and an industrial port." },
      { name: "San Andreas", description: "Second city — San Francisco-inspired hilly terrain with a central business district and beach area." },
      { name: "Vice City", description: "Miami-inspired third city with a causeway connecting two islands, beachfront, and the Vice City Docks." },
    ],
    secrets: [
      "Tank spawn on the military base island in Liberty City",
      "Hidden bonus areas accessible only by boat",
      "Multi-storey car parks are secret vantage points for cop evasion",
      "Train tracks in San Andreas lead to hidden off-map areas",
    ],
    bestSpots: [
      { name: "Liberty City Docks", why: "Best area for boat escapes and hard-to-reach objectives" },
      { name: "Vice City Causeway", why: "High-speed chase route connecting both islands" },
    ],
    coverColor: "from-yellow-500/20 to-orange-500/10",
  },
  {
    id: "gta2",
    title: "GTA 2",
    year: 1999,
    city: "Anywhere City",
    mapSize: "Three vertical districts",
    basedOn: "Futuristic unnamed megacity (near future 2013)",
    description: "GTA 2 introduced a single futuristic city called 'Anywhere City' set in the near future. The city was divided into three horizontal districts, each with its own gang territory system. The map introduced territory control mechanics and reputation systems per gang.",
    keyAreas: [
      { name: "Downtown District", description: "The upper city. Business district with six rival gangs including the Zaibatsu Corporation and Loonies. Most complex gang dynamics." },
      { name: "Residential District", description: "Middle district. Suburban neighbourhoods and factories. Home to the Hare Krishna and Rednecks factions." },
      { name: "Industrial District", description: "Bottom district. The port, military base, and industrial zones. Yakuza and Scientist presence." },
    ],
    secrets: [
      "Gouranga bonus — run over all the Hare Krishna monks in a line for a massive score multiplier",
      "Electro gun spawns at a hidden location in the industrial district",
      "Train network connects all three districts and can be used for quick travel",
      "Tank hidden in the military compound — requires high wanted level to trigger it",
    ],
    bestSpots: [
      { name: "Train Station", why: "Fastest cross-district transport and escape route" },
      { name: "Zaibatsu HQ", why: "High-value targets and best gang mission rewards" },
    ],
    coverColor: "from-cyan-500/20 to-blue-500/10",
  },
  {
    id: "gta3",
    title: "GTA III",
    year: 2001,
    city: "Liberty City",
    mapSize: "~8 km² across 3 islands",
    basedOn: "New York City (NY, NJ, Brooklyn areas)",
    description: "GTA III's 3D Liberty City was a groundbreaking achievement. The city is split into three islands — Portland, Staunton Island, and Shoreside Vale — unlocked progressively as you complete missions. Portland is industrial, Staunton is the Manhattan-style commercial core, and Shoreside Vale is the suburban residential area.",
    keyAreas: [
      { name: "Portland", description: "Industrial island. Red Light District, Chinatown, the Callahan Bridge, and Triad Fish Factory. Starting location." },
      { name: "Staunton Island", description: "The commercial and government hub. Newport, Torrington, Belleville Park, and the Francis International Airport (closed)." },
      { name: "Shoreside Vale", description: "Residential area and airport. Cedar Grove, Pike Creek, and the Cochrane Dam. Unlocked after a key story mission." },
    ],
    secrets: [
      "The Ghost Town — a partial 3D model of Claude's apartment area accessible via the Dodo plane through a glitch",
      "Rhino tank spawns at the military base on Shoreside Vale after 6 stars",
      "Hidden packages reward weapons at safehouses — 10 packages = pistol, 20 = shotgun, up to 100 for full arsenal",
      "The car crusher in Portland pays cash for any vehicle you feed it",
      "Stunt jump at the Callahan Bridge ramp under the bridge section",
    ],
    bestSpots: [
      { name: "Staunton Island Multi-Storey Car Park", why: "Best sniper perch in the game, covering the entire plaza below" },
      { name: "Cochrane Dam", why: "Final mission location and secret car spawn for the Cartel Cruiser" },
      { name: "Portland Docks", why: "Multiple mission triggers and weapon pickups in a compact area" },
    ],
    coverColor: "from-zinc-500/20 to-slate-500/10",
  },
  {
    id: "vice-city",
    title: "GTA Vice City",
    year: 2002,
    city: "Vice City",
    mapSize: "~8 km² across 2 islands",
    basedOn: "Miami, Florida (1986)",
    description: "Vice City is based on 1980s Miami. Split into two islands connected by bridges, the map oozes neon, Art Deco architecture, beach culture, and organized crime. The East Island is the residential and commercial side (Prawn Island, Starfish Island with Vercetti's mansion), while the West Island is Downtown and the commercial districts.",
    keyAreas: [
      { name: "Ocean Beach", description: "South East Island. Vice City's beach strip — Ocean Drive-style promenade, hotels, and the starting safe house above the Ocean View Hotel." },
      { name: "Vice Point & Vice Beach", description: "North East Island. Mall, North Point Mall (key robbery mission), Malibu Club, and the mansion-filled beach strip." },
      { name: "Downtown", description: "West Island commercial core. Police station, Hyman Condo safehouse, multistorey car park missions, and street races." },
      { name: "Starfish Island", description: "The mansion hub connecting both islands. Tommy's Vercetti Estate, the ultimate safehouse after completing the 'Shakedown' mission." },
      { name: "Little Haiti & Little Havana", description: "West Island south. Gang territory, Print Works (business), the Boatyard, and the Kaufman Cab depot." },
    ],
    secrets: [
      "Chainsaw at the Bunch of Tools hardware store in Downtown — behind the store",
      "Hunter attack helicopter — spawns at Fort Baxter Air Base after 6 stars or in full military gear",
      "Rhino tank at Fort Baxter — also accessible in full military gear",
      "Candy Suxxx poster easter egg at InterGlobal Studios",
      "Hidden easter egg on Leaf Links Golf Course — ball says 'here' on the giant golf ball",
      "The 'Love Fist' tour bus parked behind the recording studio",
      "Zebra Cab in Cherry Popper mission — unique vehicle worth keeping in your garage",
    ],
    bestSpots: [
      { name: "Vercetti Estate Roof", why: "Helicopter spawn after 100%, best helicopter base in game" },
      { name: "Downtown Multistorey Car Park", why: "Unique stunt jumps, mission location, and weapons pickup" },
      { name: "Fort Baxter Air Base", why: "Hunter helicopter, Rhino tank, and military vehicle spawns" },
    ],
    coverColor: "from-pink-500/20 to-purple-500/10",
  },
  {
    id: "san-andreas",
    title: "GTA San Andreas",
    year: 2004,
    city: "San Andreas (Los Santos, San Fierro, Las Venturas)",
    mapSize: "~36 km² — largest 3D-era GTA",
    basedOn: "Los Angeles, San Francisco & Las Vegas",
    description: "San Andreas is the biggest 3D-era GTA — a full US state with three cities, countryside, desert, mountains, and military base. Los Santos (LA) is the starting city. San Fierro (San Francisco) opens mid-game. Las Venturas (Las Vegas) is the endgame. The map includes countryside between all three cities: forests, Bone County desert, Red County farmland, and the Badlands.",
    keyAreas: [
      { name: "Los Santos", description: "CJ's home city. Grove Street, Idlewood, Vinewood, Jefferson, Ganton. Starting area — classic LA/Compton inspired neighbourhoods and Hollywood hills." },
      { name: "Red County & Flint County", description: "Countryside between LS and SF. Dillimore, Blueberry, Palomino Creek. Farms, police, and the Fern Ridge lake area." },
      { name: "San Fierro", description: "San Francisco-inspired city. Doherty Garage (player property), Chinatown, Calton Heights, and the San Fierro PD. Unlocked mid-game." },
      { name: "Bone County (Desert)", description: "Massive desert between SF and LV. Area 69 military base, Sherman Dam, Verdant Meadows airfield. Open and dangerous." },
      { name: "Las Venturas", description: "Las Vegas inspired. Four Dragons Casino, Caligula's Palace, The Clown's Pocket. Casino heist mission takes place here." },
      { name: "Mount Chiliad", description: "The tallest peak in the state. Cable car to summit. Secret packages, parachute, and a mountain bike at the peak." },
    ],
    secrets: [
      "Bigfoot/Sasquatch — rumoured but officially not in the game, a myth that spawned decades of searching",
      "Chiliad Mystery — abandoned cabin, strange drawings, and 'coming soon' in the game files (debunked for SA, later referenced in GTA V)",
      "Ghost car in Bone County — a Glendale spawns and drives with no driver through the desert",
      "The Leatherface myth — random chainsaw-wielding NPC rumoured to appear on foggy nights",
      "Area 69 underground hangar — infiltrate the military base for a Jetpack in the actual mission",
      "All 50 Oysters raise sex appeal to max and make all girlfriends immediately available",
      "All 100 Tags sprayed in Los Santos unlock weapons at the Grove Street safe house",
      "The Epsilon Program in-game website hints that tie to GTA V years later",
    ],
    bestSpots: [
      { name: "Grove Street (Ganton, Los Santos)", why: "CJ's home — weapon pickups, gang war triggers, and story missions" },
      { name: "Mount Chiliad Summit", why: "Best parachute landing view, secret package spawns, and mountain bike" },
      { name: "Las Venturas Airport", why: "Multiple aircraft spawns, ideal for traversing the full state" },
      { name: "Area 69 (Military Base)", why: "Jetpack spawn, military vehicles, Rhino tank — high difficulty infiltration" },
    ],
    coverColor: "from-orange-500/20 to-red-500/10",
  },
  {
    id: "gta4",
    title: "GTA IV",
    year: 2008,
    city: "Liberty City",
    mapSize: "~10 km² — most detailed 3D city of its time",
    basedOn: "New York City (modern era, 2008)",
    description: "GTA IV's Liberty City is the most detailed and authentic recreation of New York City in any game. Four boroughs make up the map: Broker (Brooklyn), Dukes (Queens/Bronx), Algonquin (Manhattan), and Alderney (New Jersey). The city is dense, alive, and every alley, subway, and rooftop has been considered.",
    keyAreas: [
      { name: "Algonquin (Manhattan)", description: "The island heart of Liberty City. Midtown, Star Junction (Times Square), Middle Park (Central Park), Castle Garden City, and the financial district The Triangle." },
      { name: "Broker (Brooklyn)", description: "Niko's starting neighbourhood. Hove Beach, Firefly Island, Beachgate, and the Algonquin Bridge. Dense residential with a boardwalk." },
      { name: "Dukes (Queens/Bronx)", description: "East side borough. Francis International Airport, Cerveza Heights, and Steinway. Mostly residential suburban." },
      { name: "Alderney (New Jersey)", description: "Unlocked later. Industrial, suburban. Tudor, Alderney City, and the Booth Tunnel connecting to Algonquin." },
      { name: "Bohan", description: "Small borough (Bronx). High density residential, low-income area with gang activity. Little Jacob lives here." },
    ],
    secrets: [
      "The Heart of the City — inside the Statue of Happiness, climb the ladder inside and find a giant beating heart chained to the wall",
      "Serial Killer Easter Egg — apartment in Algonquin has drawings on the wall and body parts in the fridge",
      "Annihilator helicopter spawn on the Algonquin police HQ rooftop",
      "Platypus ship at the docks — the cargo ship from the game's intro, still docked at Broker",
      "Ghost car — a car drives itself around at night in specific locations near the bridge",
      "All 200 Pigeons unlocks the Annihilator helicopter at safe houses",
    ],
    bestSpots: [
      { name: "Algonquin Rooftops", why: "Helicopter landing pads, sniper positions, and Police HQ spawn" },
      { name: "Broker Bridge", why: "Key chase corridor and stunt jump location" },
      { name: "Middle Park", why: "Central meeting point, random encounter triggers, and perfect for getting lost" },
      { name: "Francis International Airport (Dukes)", why: "Aircraft spawns, high open space for parachute stunts" },
    ],
    coverColor: "from-gray-500/20 to-zinc-500/10",
  },
  {
    id: "gta5",
    title: "GTA V",
    year: 2013,
    city: "Los Santos & Blaine County",
    mapSize: "~81 km² — biggest GTA map ever at launch",
    basedOn: "Los Angeles, Inland Empire & Southern California",
    description: "GTA V's map is the most ambitious in the series — Los Santos (LA) plus all of Blaine County (the surrounding inland empire, desert, forests, and Alamo Sea). Mount Chiliad returns as the tallest point. The Pacific Ocean, underwater sea life, military base, and Vinewood Hills are all fully explorable. The map is 3.5× larger than San Andreas and was unprecedented for its time.",
    keyAreas: [
      { name: "Los Santos City", description: "Full downtown (Pillbox Hill = downtown LA), Vespucci Beach (Venice Beach), Del Perro (Santa Monica pier), Vinewood (Hollywood), Rockford Hills (Beverly Hills), and Davis (Compton)." },
      { name: "Blaine County", description: "Everything outside the city. Sandy Shores (desert town), Paleto Bay (northern coastal), Grapeseed (farming), Alamo Sea (Salton Sea analog), and Zancudo River." },
      { name: "Mount Chiliad", description: "The 2,400m peak. Cable car, hiking trails, secret mural of the jetpack (GTA Online Doomsday clue), and the infamous Mount Chiliad Mystery." },
      { name: "Fort Zancudo", description: "Military base in northwest. Insurgent, tank, and Lazer jet spawns. 5-star instant wanted level entry. Used in several heist preps." },
      { name: "LSIA (Los Santos International Airport)", description: "Massive airport on the south coast. Multiple aircraft spawns — Titan, Mallard, helicopters. Heist setup and getaway location." },
      { name: "Merryweather HQ (Terminal)", description: "Industrial port terminal near the docks. Merryweather Heist mission location and cargo ship." },
    ],
    secrets: [
      "Mount Chiliad Mystery — the jetpack mural at the top of Chiliad referenced 'coming soon' for years — confirmed solved by GTA Online Doomsday Heist (jetpack in Avenger)",
      "Ghost of Mount Gordo — between 11pm and midnight a ghost appears at the top of Mount Gordo near the Alamo Sea",
      "UFO Easter Eggs — three UFOs appear at specific times/locations: Sandy Shores, Fort Zancudo, and Mount Chiliad (all require 100% completion)",
      "The Infinity Murders — Franklin finds a serial killer's clue trail across Blaine County. 8 victims hidden in the world",
      "Thelma & Louise — time it right near the clifftop east of the map to witness a car fly off a cliff (tribute to the film)",
      "Secret submarine (Kraken) — all 30 Submarine Parts collected unlocks the Kraken sub",
      "Epsilon Tract — collecting all 10 Epsilon vehicles unlocks $2.1M in story mode",
      "The hatch in the ocean floor — references Lost TV show, Easter egg hatch in the underwater map north of the airport",
    ],
    bestSpots: [
      { name: "Fort Zancudo", why: "Lazer jet, Insurgent, Rhino — best military vehicle farming spot" },
      { name: "Mount Chiliad Summit", why: "UFO easter egg at 3am (100% save), cable car, and mountain bike" },
      { name: "Vinewood Hills", why: "Paleto Score getaway route and secret stash house in the hills" },
      { name: "LSIA Roof", why: "Mallard plane spawns, helicopter landing, best airport access point" },
      { name: "Del Perro Pier", why: "Tourist area, random events, and Ferris wheel view perfect for screenshots" },
    ],
    coverColor: "from-primary/20 to-accent/10",
  },
];

export function Maps() {
  const [expanded, setExpanded] = useState<string | null>("gta5");

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/8 text-xs font-mono text-primary uppercase tracking-widest mb-4">
          <MapPin className="w-3 h-3" /> Every GTA Map Ever
        </div>
        <h1 className="font-headline text-5xl md:text-6xl mb-3">GTA MAPS — ALL GAMES</h1>
        <p className="text-muted-foreground text-lg max-w-3xl">
          Complete map breakdowns for every GTA game from GTA 1 (1997) to GTA V (2013) — key areas, secrets,
          easter eggs, best spots, and what each city is based on in real life.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { label: "Games Covered", value: "7" },
          { label: "Cities Mapped", value: "9" },
          { label: "Secrets Documented", value: "50+" },
          { label: "Years of GTA", value: "28" },
        ].map(({ label, value }) => (
          <div key={label} className="bg-card border border-border rounded-lg p-4 text-center">
            <div className="font-headline text-3xl text-primary">{value}</div>
            <div className="text-xs text-muted-foreground mt-1">{label}</div>
          </div>
        ))}
      </div>

      {/* Map Cards */}
      <div className="space-y-4">
        {MAP_GAMES.map((game) => {
          const isOpen = expanded === game.id;
          return (
            <div key={game.id} className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-colors">
              {/* Header */}
              <button
                onClick={() => setExpanded(isOpen ? null : game.id)}
                className="w-full text-left"
              >
                <div className={`bg-gradient-to-r ${game.coverColor} px-6 py-5 flex items-center justify-between gap-4`}>
                  <div className="flex items-center gap-4">
                    <div className="shrink-0">
                      <div className="font-headline text-3xl text-foreground">{game.title}</div>
                      <div className="text-xs text-muted-foreground font-mono">{game.year} · {game.city}</div>
                    </div>
                    <div className="hidden md:flex flex-wrap gap-2">
                      <span className="text-xs bg-background/50 border border-border rounded px-2 py-1">📐 {game.mapSize}</span>
                      <span className="text-xs bg-background/50 border border-border rounded px-2 py-1">🗺 Based on: {game.basedOn}</span>
                    </div>
                  </div>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-muted-foreground shrink-0" /> : <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />}
                </div>
              </button>

              {/* Body */}
              {isOpen && (
                <div className="px-6 py-6 space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{game.description}</p>

                  {/* Key Areas */}
                  <div>
                    <h3 className="font-headline text-xl mb-3 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" /> Key Areas & Districts
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {game.keyAreas.map((area) => (
                        <div key={area.name} className="bg-secondary/50 rounded-lg p-3">
                          <div className="font-semibold text-sm text-foreground mb-1">{area.name}</div>
                          <p className="text-xs text-muted-foreground leading-relaxed">{area.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Secrets */}
                  <div>
                    <h3 className="font-headline text-xl mb-3 flex items-center gap-2">
                      <Info className="w-4 h-4 text-accent" /> Hidden Secrets & Easter Eggs
                    </h3>
                    <ul className="space-y-2">
                      {game.secrets.map((secret, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-accent mt-0.5 shrink-0">▸</span>
                          {secret}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best Spots */}
                  <div>
                    <h3 className="font-headline text-xl mb-3">⭐ Best Spots to Know</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {game.bestSpots.map((spot) => (
                        <div key={spot.name} className="flex gap-3 bg-primary/5 border border-primary/20 rounded-lg p-3">
                          <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <div>
                            <div className="text-sm font-semibold text-foreground">{spot.name}</div>
                            <div className="text-xs text-muted-foreground">{spot.why}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Map resource note */}
                  <div className="bg-secondary/30 border border-border rounded-lg p-4 flex items-start gap-3">
                    <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                    <div className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Interactive maps: </span>
                      For visual maps with all collectible locations, weapon spawns, and vehicle locations,
                      visit <a href="https://gta.fandom.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GTA Fandom Wiki</a> or
                      the community map at <a href="https://mapgenie.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">MapGenie</a>.
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* GTA 6 Map Section */}
      <div className="mt-8 bg-gradient-to-r from-primary/10 to-accent/5 border border-primary/30 rounded-xl p-8">
        <h2 className="font-headline text-3xl mb-3">GTA 6 Map — What We Know</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          GTA 6 returns to Vice City (Miami) and surrounding areas. Based on trailers and leaks, the map includes:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { area: "Vice City (Miami)", detail: "The neon-soaked beach city returns — Art Deco, Ocean Drive, skyscrapers, and the VCA (Vice City Airport)" },
            { area: "Leonida Everglades", detail: "A massive swampland south of Vice City with wildlife, drug labs, and rural criminal networks" },
            { area: "Port Gellhorn", detail: "An industrial port town north of Vice City based on Fort Lauderdale / Port Everglades" },
          ].map(({ area, detail }) => (
            <div key={area} className="bg-background/50 rounded-lg p-4">
              <div className="font-semibold text-sm text-primary mb-1">{area}</div>
              <p className="text-xs text-muted-foreground">{detail}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-4">Map details based on leaked footage and official trailer analysis. Subject to change at launch.</p>
      </div>
    </div>
  );
}
