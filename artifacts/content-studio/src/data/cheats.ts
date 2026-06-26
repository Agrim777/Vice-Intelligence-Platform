export interface Cheat {
  name: string;
  effect: string;
  disablesAchievements: boolean;
  ps: string;
  xbox: string;
  pc: string;
  phone?: string;
  category: string;
}

export interface GameCheats {
  game: string;
  slug: string;
  cheats: Cheat[];
}

export const CHEAT_GAMES: GameCheats[] = [
  {
    game: "GTA V / GTA Online",
    slug: "gta5",
    cheats: [
      { name: "Invincibility", effect: "God mode for 5 minutes", disablesAchievements: true, ps: "Right, X, Right, Left, Right, R1, Right, Left, X, Triangle", xbox: "Right, A, Right, Left, Right, RB, Right, Left, A, Y", pc: "PAINKILLER", phone: "1-999-724-654-5537", category: "Player" },
      { name: "Wanted Level Up", effect: "Raises wanted level by 1 star", disablesAchievements: false, ps: "R1, R1, Circle, R2, Left, Right, Left, Right, Left, Right", xbox: "RB, RB, B, RT, Left, Right, Left, Right, Left, Right", pc: "FUGITIVE", phone: "1-999-3844-8483", category: "Wanted" },
      { name: "Wanted Level Down", effect: "Lowers wanted level by 1 star", disablesAchievements: false, ps: "R1, R1, Circle, R2, Right, Left, Right, Left, Right, Left", xbox: "RB, RB, B, RT, Right, Left, Right, Left, Right, Left", pc: "LAWYERUP", phone: "1-999-5299-3787", category: "Wanted" },
      { name: "Fast Run", effect: "Increases sprint speed", disablesAchievements: true, ps: "Triangle, Left, Right, Right, L2, L1, Square", xbox: "Y, Left, Right, Right, LT, LB, X", pc: "CATCHME", phone: "1-999-228-8463", category: "Player" },
      { name: "Fast Swim", effect: "Increases swim speed", disablesAchievements: true, ps: "Left, Left, L1, Right, Right, R2, Left, L2, Right", xbox: "Left, Left, LB, Right, Right, RT, Left, LT, Right", pc: "GOTGILLS", phone: "1-999-468-44557", category: "Player" },
      { name: "Max Health & Armor", effect: "Full health and armor instantly", disablesAchievements: true, ps: "Circle, L1, Triangle, R2, X, Square, Circle, Right, Square, L1, L1, L1", xbox: "B, LB, Y, RT, A, X, B, Right, X, LB, LB, LB", pc: "TURTLE", phone: "1-999-887-853", category: "Player" },
      { name: "Skyfall", effect: "Spawn in mid-air, fall from the sky", disablesAchievements: true, ps: "L1, L2, R1, R2, Left, Right, Left, Right, L1, L2, R1, R2, Left, Right, Left, Right", xbox: "LB, LT, RB, RT, Left, Right, Left, Right, LB, LT, RB, RT, Left, Right, Left, Right", pc: "SKYFALL", phone: "", category: "Player" },
      { name: "Explosive Melee Attacks", effect: "Punch enemies to send them flying", disablesAchievements: true, ps: "Right, Left, X, Triangle, R1, Circle, Circle, Circle, L2", xbox: "Right, Left, A, Y, RB, B, B, B, LT", pc: "HOTHANDS", phone: "1-999-4684-2637", category: "Combat" },
      { name: "Flaming Bullets", effect: "Your bullets set targets on fire", disablesAchievements: true, ps: "L1, R1, Square, R1, Left, R2, R1, Left, Square, Right, L1, L1", xbox: "LB, RB, X, RB, Left, RT, RB, Left, X, Right, LB, LB", pc: "INCENDIARY", phone: "1-999-462-363-4279", category: "Combat" },
      { name: "Explosive Bullets", effect: "Bullets cause explosions on impact", disablesAchievements: true, ps: "Right, Square, X, Left, R1, R2, Left, Right, Right, L1, L1, L1", xbox: "Right, X, A, Left, RB, RT, Left, Right, Right, LB, LB, LB", pc: "HIGHEX", phone: "1-999-444-439", category: "Combat" },
      { name: "Super Jump", effect: "Leap tall buildings in a single bound", disablesAchievements: true, ps: "Left, Left, Triangle, Triangle, Right, Right, Left, Right, Square, R1, R2", xbox: "Left, Left, Y, Y, Right, Right, Left, Right, X, RB, RT", pc: "HOPTOIT", phone: "1-999-467-8648", category: "Player" },
      { name: "Drunk Mode", effect: "Your character gets wasted", disablesAchievements: true, ps: "Triangle, Right, Right, Left, Right, Square, Circle, Left", xbox: "Y, Right, Right, Left, Right, X, B, Left", pc: "LIQUOR", phone: "1-999-547-861", category: "Misc" },
      { name: "Spawn PCJ-600 Motorcycle", effect: "Spawns a PCJ-600 near you", disablesAchievements: true, ps: "R1, Right, Left, Right, R2, Left, Right, Square, Right, L2, L1, L1", xbox: "RB, Right, Left, Right, RT, Left, Right, X, Right, LT, LB, LB", pc: "ROCKET", phone: "1-999-762-538", category: "Vehicles" },
      { name: "Spawn Buzzard Attack Helicopter", effect: "Spawns an armed Buzzard helicopter", disablesAchievements: true, ps: "Circle, Circle, L1, Circle, Circle, Circle, L1, L2, R1, Triangle, Circle, Triangle", xbox: "B, B, LB, B, B, B, LB, LT, RB, Y, B, Y", pc: "BUZZOFF", phone: "1-999-289-9633", category: "Vehicles" },
      { name: "Spawn Rapid GT", effect: "Spawns a Rapid GT sports car", disablesAchievements: true, ps: "R2, L1, Circle, Right, L1, R1, Right, Left, Circle, R2", xbox: "RT, LB, B, Right, LB, RB, Right, Left, B, RT", pc: "RAPIDGT", phone: "1-999-727-4348", category: "Vehicles" },
      { name: "Spawn BMX", effect: "Spawns a BMX bicycle", disablesAchievements: true, ps: "Left, Left, Right, Right, Left, Right, Square, Circle, Triangle, R1, R2", xbox: "Left, Left, Right, Right, Left, Right, X, B, Y, RB, RT", pc: "BANDIT", phone: "1-999-226-348", category: "Vehicles" },
      { name: "Slow Motion Aim", effect: "Dramatically slows time when aiming", disablesAchievements: true, ps: "Square, L2, R1, Triangle, Left, Square, L2, Right, X", xbox: "X, LT, RB, Y, Left, X, LT, Right, A", pc: "DEADEYE", phone: "1-999-332-3393", category: "Misc" },
      { name: "Moon Gravity", effect: "Low gravity — floaty jumps & explosions", disablesAchievements: true, ps: "Left, Left, L1, R1, L1, Right, Left, L1, Left", xbox: "Left, Left, LB, RB, LB, Right, Left, LB, Left", pc: "FLOATER", phone: "1-999-356-2837", category: "Misc" },
      { name: "Change Weather", effect: "Cycles through weather states", disablesAchievements: false, ps: "R2, X, L1, L1, L2, L2, L2, Square", xbox: "RT, A, LB, LB, LT, LT, LT, X", pc: "MAKEITRAIN", phone: "1-999-625-348-7246", category: "World" },
      { name: "Slippery Cars", effect: "Insane vehicle handling", disablesAchievements: true, ps: "Triangle, R1, R1, Left, R1, L1, R2, L1", xbox: "Y, RB, RB, Left, RB, LB, RT, LB", pc: "SNOWDAY", phone: "1-999-766-9329", category: "Vehicles" },
    ],
  },
  {
    game: "GTA San Andreas",
    slug: "san-andreas",
    cheats: [
      { name: "Infinite Health", effect: "CJ cannot die from bullets or explosions", disablesAchievements: false, ps: "Down, X, Right, Left, Right, R1, Right, Down, Up, Triangle", xbox: "Down, A, Right, Left, Right, RB, Right, Down, Up, Y", pc: "BAGUVIX", phone: "", category: "Player" },
      { name: "Infinite Ammo", effect: "Weapons never run out of ammo", disablesAchievements: false, ps: "L1, R1, Square, R1, Left, R2, R1, Left, Square, Down, L1, L1", xbox: "LB, RB, X, RB, Left, RT, RB, Left, X, Down, LB, LB", pc: "FULLCLIP", phone: "", category: "Combat" },
      { name: "All Weapons (Tier 1)", effect: "Grants a full set of basic weapons", disablesAchievements: false, ps: "R1, R2, L1, R2, Left, Down, Right, Up, Left, Down, Right, Up", xbox: "RB, RT, LB, RT, Left, Down, Right, Up, Left, Down, Right, Up", pc: "LXGIWYL", phone: "", category: "Combat" },
      { name: "Wanted Level × 6", effect: "Instant 6-star wanted level", disablesAchievements: false, ps: "Circle, Right, Circle, Right, Left, Square, Triangle, Up", xbox: "B, Right, B, Right, Left, X, Y, Up", pc: "BRINGITON", phone: "", category: "Wanted" },
      { name: "Lower Wanted Level", effect: "Remove all wanted stars", disablesAchievements: false, ps: "R1, R1, Circle, R2, Up, Down, Up, Down, Up, Down", xbox: "RB, RB, B, RT, Up, Down, Up, Down, Up, Down", pc: "TURNDOWNTHEHEAT", phone: "", category: "Wanted" },
      { name: "Spawn Jetpack", effect: "Places a jetpack on CJ", disablesAchievements: false, ps: "L1, L2, R1, R2, Up, Down, Left, Right, L1, L2, R1, R2, Up, Down, Left, Right", xbox: "LB, LT, RB, RT, Up, Down, Left, Right, LB, LT, RB, RT, Up, Down, Left, Right", pc: "ROCKETMAN", phone: "", category: "Vehicles" },
      { name: "Spawn Hydra (Fighter Jet)", effect: "Spawns an armed military jet", disablesAchievements: false, ps: "Triangle, Triangle, Square, Circle, X, L1, L1, Down, Up", xbox: "Y, Y, X, B, A, LB, LB, Down, Up", pc: "AIRSHIP", phone: "", category: "Vehicles" },
      { name: "Spawn Rhino Tank", effect: "Spawns a military tank near you", disablesAchievements: false, ps: "Circle, Circle, L1, Circle, Circle, Circle, L1, L2, R1, Triangle, Circle, Triangle", xbox: "B, B, LB, B, B, B, LB, LT, RB, Y, B, Y", pc: "AIWPRTON", phone: "", category: "Vehicles" },
      { name: "Chaos Mode", effect: "Aggressive NPCs — everyone attacks everyone", disablesAchievements: false, ps: "Down, Up, Up, Up, X, R2, R1, L2, L2", xbox: "Down, Up, Up, Up, A, RT, RB, LT, LT", pc: "STATEOFEMERGENCY", phone: "", category: "World" },
      { name: "Max Muscle", effect: "CJ instantly reaches max muscle stat", disablesAchievements: false, ps: "Triangle, Up, Up, Left, Right, Square, Circle, Left", xbox: "Y, Up, Up, Left, Right, X, B, Left", pc: "BUFFMEUP", phone: "", category: "Player" },
      { name: "Sunny Weather", effect: "Sets weather to clear and sunny", disablesAchievements: false, ps: "Down, Down, Down, Square, Square, Circle, Circle, L1, L1", xbox: "Down, Down, Down, X, X, B, B, LB, LB", pc: "PLEASANTLYWARM", phone: "", category: "World" },
      { name: "Always Midnight", effect: "Locks game time to midnight", disablesAchievements: false, ps: "Square, L1, R1, Right, X, Up, L1, Left, Left", xbox: "X, LB, RB, Right, A, Up, LB, Left, Left", pc: "NIGHTPROWLER", phone: "", category: "World" },
    ],
  },
  {
    game: "GTA Vice City",
    slug: "vice-city",
    cheats: [
      { name: "Full Health", effect: "Restores Tommy's health to maximum", disablesAchievements: false, ps: "R1, R2, L1, Circle, Left, Down, Right, Up, Left, Down, Right, Up", xbox: "RB, RT, LB, B, Left, Down, Right, Up, Left, Down, Right, Up", pc: "ASPIRINE", phone: "", category: "Player" },
      { name: "Full Armor", effect: "Restores armor to maximum", disablesAchievements: false, ps: "R1, R2, L1, X, Left, Down, Right, Up, Left, Down, Right, Up", xbox: "RB, RT, LB, A, Left, Down, Right, Up, Left, Down, Right, Up", pc: "PRECIOUSPROTECTION", phone: "", category: "Player" },
      { name: "Wanted Level Up", effect: "Adds two more wanted stars", disablesAchievements: false, ps: "R1, R1, Circle, R2, Left, Right, Left, Right, Left, Right", xbox: "RB, RB, B, RT, Left, Right, Left, Right, Left, Right", pc: "YOUWONTTAKEMEALIVE", phone: "", category: "Wanted" },
      { name: "Clear Wanted Level", effect: "Removes all wanted stars", disablesAchievements: false, ps: "R1, R1, Circle, R2, Up, Down, Up, Down, Up, Down", xbox: "RB, RB, B, RT, Up, Down, Up, Down, Up, Down", pc: "LEAVEMEALONE", phone: "", category: "Wanted" },
      { name: "Spawn Rhino", effect: "Spawns a military tank", disablesAchievements: false, ps: "Circle, Circle, L1, Circle, Circle, Circle, L1, L2, R1, Triangle, Circle, Triangle", xbox: "B, B, LB, B, B, B, LB, LT, RB, Y, B, Y", pc: "PANZER", phone: "", category: "Vehicles" },
      { name: "All Weapons", effect: "Grants a full arsenal to Tommy", disablesAchievements: false, ps: "R1, R2, L1, R2, Left, Down, Right, Up, Left, Down, Down, Left", xbox: "RB, RT, LB, RT, Left, Down, Right, Up, Left, Down, Down, Left", pc: "THUGSTOOLS", phone: "", category: "Combat" },
      { name: "Aggressive Drivers", effect: "All vehicle drivers become hostile", disablesAchievements: false, ps: "R2, Circle, R1, L2, Left, R1, L1, R2, L2", xbox: "RT, B, RB, LT, Left, RB, LB, RT, LT", pc: "MIAMITRAFFIC", phone: "", category: "World" },
      { name: "Spawn Hotring Racer", effect: "Spawns a fast racing car", disablesAchievements: false, ps: "R1, Circle, R2, Right, L1, L2, X, X, Square, R1", xbox: "RB, B, RT, Right, LB, LT, A, A, X, RB", pc: "GETTHEREVERYFASTINDEED", phone: "", category: "Vehicles" },
    ],
  },
  {
    game: "GTA IV",
    slug: "gta4",
    cheats: [
      { name: "Health Cheat", effect: "Restores Niko's health", disablesAchievements: true, ps: "", xbox: "", pc: "", phone: "362-555-0100", category: "Player" },
      { name: "Armor Cheat", effect: "Gives full body armor", disablesAchievements: true, ps: "", xbox: "", pc: "", phone: "362-555-0100", category: "Player" },
      { name: "Weapons Tier 1", effect: "Baseball bat, pistol, shotgun, MP5, RPG, sniper", disablesAchievements: true, ps: "", xbox: "", pc: "", phone: "486-555-0150", category: "Combat" },
      { name: "Weapons Tier 2", effect: "Knife, Molotov, Desert Eagle, AK47, minigun", disablesAchievements: true, ps: "", xbox: "", pc: "", phone: "486-555-0100", category: "Combat" },
      { name: "Remove Wanted Level", effect: "Clears all wanted stars", disablesAchievements: true, ps: "", xbox: "", pc: "", phone: "267-555-0100", category: "Wanted" },
      { name: "Raise Wanted Level", effect: "Adds a wanted star", disablesAchievements: true, ps: "", xbox: "", pc: "", phone: "267-555-0150", category: "Wanted" },
      { name: "Spawn Annihilator Helicopter", effect: "Armed police helicopter", disablesAchievements: true, ps: "", xbox: "", pc: "", phone: "359-555-0100", category: "Vehicles" },
      { name: "Spawn NRG-900 Motorcycle", effect: "Fast sport motorcycle", disablesAchievements: true, ps: "", xbox: "", pc: "", phone: "625-555-0100", category: "Vehicles" },
    ],
  },
];

export const CATEGORIES = ["All", "Player", "Combat", "Vehicles", "Wanted", "World", "Misc"];
