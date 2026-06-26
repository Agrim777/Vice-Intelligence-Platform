export interface Weapon {
  name: string;
  class: string;
  game: string;
  damage: number; // 1-10
  fireRate: number; // 1-10
  accuracy: number; // 1-10
  range: number; // 1-10
  location: string;
  price: string;
  description: string;
  bestFor: string;
}

export const WEAPONS: Weapon[] = [
  // GTA V / Online Rifles
  { name: "Assault Rifle Mk II", class: "Rifle", game: "GTA V", damage: 8, fireRate: 7, accuracy: 8, range: 8, location: "Ammu-Nation / Weapon Workshop", price: "$8,500", description: "The versatile AK-47 inspired workhorse. Upgraded Mk II version gets explosive rounds, tracer rounds, and a massive damage boost.", bestFor: "Mid-range combat, missions" },
  { name: "Special Carbine Mk II", class: "Rifle", game: "GTA V", damage: 7, fireRate: 9, accuracy: 9, range: 8, location: "Ammu-Nation / Weapon Workshop", price: "$3,400", description: "Arguably the best overall rifle in GTA Online. High accuracy, fast fire rate, and excellent handling. Upgrade to Mk II for maximum potential.", bestFor: "PvP, most versatile overall" },
  { name: "Heavy Sniper Mk II", class: "Sniper", game: "GTA V", damage: 10, fireRate: 3, accuracy: 10, range: 10, location: "Ammu-Nation / Weapon Workshop", price: "$38,150", description: "The king of snipers in GTA Online. Explosive rounds let you one-shot vehicles and destroy aircraft. Thermal scope for finding hidden players.", bestFor: "Anti-vehicle, anti-aircraft, PvP" },
  { name: "Up-n-Atomizer", class: "Pistol", game: "GTA V", damage: 6, fireRate: 5, accuracy: 7, range: 6, location: "Ammu-Nation", price: "$399,000", description: "A futuristic energy pistol that launches vehicles and players into the air. Unlimited ammo. Hilarious and surprisingly effective in chaotic situations.", bestFor: "Trolling, crowd control" },
  { name: "Minigun", class: "Heavy", game: "GTA V", damage: 9, fireRate: 10, accuracy: 4, range: 6, location: "Ammu-Nation / Army Base", price: "$55,000", description: "Shreds everything — vehicles, helicopters, people. Slow spin-up time and terrible accuracy. Best used from cover or from a vehicle.", bestFor: "Vehicle destruction, overwhelming firepower" },
  { name: "Sticky Bomb", class: "Throwable", game: "GTA V", damage: 10, fireRate: 1, accuracy: 6, range: 4, location: "Ammu-Nation", price: "$600 each", description: "Place on any surface, detonate remotely. Stick to vehicles to destroy them. Essential for heists and missions. Destroys most vehicles in one hit.", bestFor: "Vehicle elimination, heists" },
  { name: "RPG", class: "Heavy", game: "GTA V", damage: 10, fireRate: 2, accuracy: 7, range: 7, location: "Ammu-Nation", price: "$26,250", description: "Classic rocket launcher. Direct hits destroy any vehicle. Splash damage kills groups. Lock-on RPG variant (Homing Launcher) is best for aircraft.", bestFor: "Anti-vehicle, groups" },
  { name: "Homing Launcher", class: "Heavy", game: "GTA V", damage: 10, fireRate: 2, accuracy: 10, range: 9, location: "Ammu-Nation", price: "$75,000", description: "Lock-on missile launcher. Tracks and destroys helicopters and jets with ease. Every GTA Online player needs this to counter aircraft griefers.", bestFor: "Anti-aircraft, vehicles" },
  { name: "Combat Shotgun", class: "Shotgun", game: "GTA V", damage: 8, fireRate: 7, accuracy: 6, range: 3, location: "Ammu-Nation", price: "$11,250", description: "The best shotgun in GTA Online for indoor/close combat. Semi-automatic fire with high damage per shot. Upgrade to Mk II for brutal stopping power.", bestFor: "Close-quarters, indoors" },
  { name: "AP Pistol", class: "Pistol", game: "GTA V", damage: 6, fireRate: 8, accuracy: 7, range: 5, location: "Ammu-Nation", price: "$5,000", description: "The one-handed SMG pistol. Lethal while driving — usable one-handed in vehicles. Essential for drive-bys. Outperforms most rifles at close range from a car.", bestFor: "Drive-by shooting, vehicles" },

  // San Andreas Weapons
  { name: "AK-47", class: "Rifle", game: "San Andreas", damage: 7, fireRate: 6, accuracy: 6, range: 8, location: "Ammu-Nation / Pickup / Drug deal bust", price: "$1,000", description: "The iconic assault rifle of San Andreas. Reliable and deadly. Available early in the game from Ammu-Nation in Los Santos.", bestFor: "General combat" },
  { name: "Desert Eagle", class: "Pistol", game: "San Andreas", damage: 8, fireRate: 4, accuracy: 7, range: 5, location: "Ammu-Nation / Pickup", price: "$3,500", description: "One-shot kill potential on enemies with low health. Heavy, powerful, and satisfying. CJ holds it sideways — very stylish.", bestFor: "Single targets, stealth kills" },
  { name: "M4", class: "Rifle", game: "San Andreas", damage: 8, fireRate: 8, accuracy: 8, range: 8, location: "Ammu-Nation / Army Base", price: "$5,000", description: "The military-grade rifle. Slightly more accurate than the AK-47 but with comparable damage. Best rifle for sustained gunfights in San Andreas.", bestFor: "Combat, military missions" },
  { name: "Rocket Launcher", class: "Heavy", game: "San Andreas", damage: 10, fireRate: 1, accuracy: 6, range: 8, location: "Ammu-Nation / Area 69", price: "$25,000", description: "Classic tank-busting RPG. Destroys vehicles in one hit. Essential for gang war missions and army base raids.", bestFor: "Anti-vehicle, large groups" },
  { name: "Chainsaw", class: "Melee", game: "San Andreas", damage: 10, fireRate: 10, accuracy: 10, range: 1, location: "Safe house (with packages) / Ammu-Nation", price: "$5,000", description: "Instant kill melee weapon. Terrifying and visceral. Unlock with 20 hidden packages or buy from Ammu-Nation in SF. Used by CJ in some story moments.", bestFor: "Melee, shock value" },
  { name: "Heat-Seeking Rocket", class: "Heavy", game: "San Andreas", damage: 10, fireRate: 1, accuracy: 10, range: 10, location: "Ammu-Nation Las Venturas", price: "$50,000", description: "Lock-on missiles that track aircraft and vehicles. The endgame weapon of San Andreas. Destroys the Hydra before it can even approach you.", bestFor: "Anti-aircraft, endgame" },

  // Vice City Weapons
  { name: "Python Revolver", class: "Pistol", game: "Vice City", damage: 9, fireRate: 3, accuracy: 8, range: 5, location: "Ammu-Nation (after 30 packages)", price: "Free (30 packages)", description: "The most powerful handgun in Vice City. One-shot kills on most enemies. Available free once you collect 30 hidden packages. Tommy's signature sidearm.", bestFor: "Single targets, boss fights" },
  { name: "SPAS-12", class: "Shotgun", game: "Vice City", damage: 9, fireRate: 4, accuracy: 5, range: 3, location: "Ammu-Nation", price: "$5,000", description: "The pump shotgun of Vice City. Devastating at close range. Used in numerous gang war missions. Pick up in the stairwell during the Malibu Club raid.", bestFor: "Close combat, gang wars" },
  { name: "Minigun", class: "Heavy", game: "Vice City", damage: 10, fireRate: 10, accuracy: 4, range: 5, location: "Ammu-Nation / Pickup", price: "$30,000", description: "Tommy's big gun. Shreds enemies and vehicles alike. Used in the climactic mansion assault finale. Scary in NPC hands too.", bestFor: "Assault missions, huge firefights" },
];

export const WEAPON_CLASSES = ["All", "Pistol", "Rifle", "Shotgun", "Sniper", "Heavy", "Melee", "Throwable", "SMG"];
export const WEAPON_GAMES = ["All Games", "GTA V", "San Andreas", "Vice City", "GTA IV", "GTA III"];
