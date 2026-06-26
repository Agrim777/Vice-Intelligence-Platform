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
      { name: "Fast Run", effect: "Increases sprint speed dramatically", disablesAchievements: true, ps: "Triangle, Left, Right, Right, L2, L1, Square", xbox: "Y, Left, Right, Right, LT, LB, X", pc: "CATCHME", phone: "1-999-228-8463", category: "Player" },
      { name: "Fast Swim", effect: "Increases swim speed", disablesAchievements: true, ps: "Left, Left, L1, Right, Right, R2, Left, L2, Right", xbox: "Left, Left, LB, Right, Right, RT, Left, LT, Right", pc: "GOTGILLS", phone: "1-999-468-44557", category: "Player" },
      { name: "Max Health & Armor", effect: "Full health and armor instantly", disablesAchievements: true, ps: "Circle, L1, Triangle, R2, X, Square, Circle, Right, Square, L1, L1, L1", xbox: "B, LB, Y, RT, A, X, B, Right, X, LB, LB, LB", pc: "TURTLE", phone: "1-999-887-853", category: "Player" },
      { name: "Skyfall", effect: "Spawn in mid-air — fall from the sky", disablesAchievements: true, ps: "L1, L2, R1, R2, Left, Right, Left, Right, L1, L2, R1, R2, Left, Right, Left, Right", xbox: "LB, LT, RB, RT, Left, Right, Left, Right, LB, LT, RB, RT, Left, Right, Left, Right", pc: "SKYFALL", phone: "", category: "Player" },
      { name: "Explosive Melee Attacks", effect: "Punch enemies to send them flying with explosions", disablesAchievements: true, ps: "Right, Left, X, Triangle, R1, Circle, Circle, Circle, L2", xbox: "Right, Left, A, Y, RB, B, B, B, LT", pc: "HOTHANDS", phone: "1-999-4684-2637", category: "Combat" },
      { name: "Flaming Bullets", effect: "Your bullets set targets on fire", disablesAchievements: true, ps: "L1, R1, Square, R1, Left, R2, R1, Left, Square, Right, L1, L1", xbox: "LB, RB, X, RB, Left, RT, RB, Left, X, Right, LB, LB", pc: "INCENDIARY", phone: "1-999-462-363-4279", category: "Combat" },
      { name: "Explosive Bullets", effect: "Bullets cause explosions on impact", disablesAchievements: true, ps: "Right, Square, X, Left, R1, R2, Left, Right, Right, L1, L1, L1", xbox: "Right, X, A, Left, RB, RT, Left, Right, Right, LB, LB, LB", pc: "HIGHEX", phone: "1-999-444-439", category: "Combat" },
      { name: "Super Jump", effect: "Leap tall buildings in a single bound", disablesAchievements: true, ps: "Left, Left, Triangle, Triangle, Right, Right, Left, Right, Square, R1, R2", xbox: "Left, Left, Y, Y, Right, Right, Left, Right, X, RB, RT", pc: "HOPTOIT", phone: "1-999-467-8648", category: "Player" },
      { name: "Drunk Mode", effect: "Character gets drunk — blurry vision, stumbling", disablesAchievements: true, ps: "Triangle, Right, Right, Left, Right, Square, Circle, Left", xbox: "Y, Right, Right, Left, Right, X, B, Left", pc: "LIQUOR", phone: "1-999-547-861", category: "Misc" },
      { name: "Spawn PCJ-600 Motorcycle", effect: "Spawns a PCJ-600 near you", disablesAchievements: true, ps: "R1, Right, Left, Right, R2, Left, Right, Square, Right, L2, L1, L1", xbox: "RB, Right, Left, Right, RT, Left, Right, X, Right, LT, LB, LB", pc: "ROCKET", phone: "1-999-762-538", category: "Vehicles" },
      { name: "Spawn Buzzard Attack Helicopter", effect: "Spawns an armed Buzzard helicopter", disablesAchievements: true, ps: "Circle, Circle, L1, Circle, Circle, Circle, L1, L2, R1, Triangle, Circle, Triangle", xbox: "B, B, LB, B, B, B, LB, LT, RB, Y, B, Y", pc: "BUZZOFF", phone: "1-999-289-9633", category: "Vehicles" },
      { name: "Spawn Rapid GT", effect: "Spawns a Rapid GT sports car", disablesAchievements: true, ps: "R2, L1, Circle, Right, L1, R1, Right, Left, Circle, R2", xbox: "RT, LB, B, Right, LB, RB, Right, Left, B, RT", pc: "RAPIDGT", phone: "1-999-727-4348", category: "Vehicles" },
      { name: "Spawn BMX", effect: "Spawns a BMX bicycle", disablesAchievements: true, ps: "Left, Left, Right, Right, Left, Right, Square, Circle, Triangle, R1, R2", xbox: "Left, Left, Right, Right, Left, Right, X, B, Y, RB, RT", pc: "BANDIT", phone: "1-999-226-348", category: "Vehicles" },
      { name: "Spawn Trashmaster", effect: "Spawns a garbage truck", disablesAchievements: true, ps: "Circle, R1, Circle, R1, Left, Left, R1, L1, Circle, Right", xbox: "B, RB, B, RB, Left, Left, RB, LB, B, Right", pc: "TRASHED", phone: "1-999-872-7433", category: "Vehicles" },
      { name: "Spawn Duster (Crop Duster)", effect: "Spawns a crop duster plane", disablesAchievements: true, ps: "Right, Left, R1, R1, R1, Left, Triangle, Triangle, X, Circle, L1, L1", xbox: "Right, Left, RB, RB, RB, Left, Y, Y, A, B, LB, LB", pc: "FLYSPRAY", phone: "1-999-359-77729", category: "Vehicles" },
      { name: "Spawn Comet", effect: "Spawns a Comet sports car", disablesAchievements: true, ps: "R1, Circle, R2, Right, L1, L2, X, X, Square, R1", xbox: "RB, B, RT, Right, LB, LT, A, A, X, RB", pc: "COMET", phone: "1-999-266-38", category: "Vehicles" },
      { name: "Slow Motion Aim", effect: "Dramatically slows time when aiming (use 3× for max)", disablesAchievements: true, ps: "Square, L2, R1, Triangle, Left, Square, L2, Right, X", xbox: "X, LT, RB, Y, Left, X, LT, Right, A", pc: "DEADEYE", phone: "1-999-332-3393", category: "Misc" },
      { name: "Moon Gravity", effect: "Low gravity — floaty jumps & physics", disablesAchievements: true, ps: "Left, Left, L1, R1, L1, Right, Left, L1, Left", xbox: "Left, Left, LB, RB, LB, Right, Left, LB, Left", pc: "FLOATER", phone: "1-999-356-2837", category: "Misc" },
      { name: "Change Weather", effect: "Cycles through all weather states", disablesAchievements: false, ps: "R2, X, L1, L1, L2, L2, L2, Square", xbox: "RT, A, LB, LB, LT, LT, LT, X", pc: "MAKEITRAIN", phone: "1-999-625-348-7246", category: "World" },
      { name: "Slippery Cars", effect: "Insane vehicle handling — cars slide like ice", disablesAchievements: true, ps: "Triangle, R1, R1, Left, R1, L1, R2, L1", xbox: "Y, RB, RB, Left, RB, LB, RT, LB", pc: "SNOWDAY", phone: "1-999-766-9329", category: "Vehicles" },
      { name: "Slow Motion Mode", effect: "Game slows to 25% speed (use 3× for max effect)", disablesAchievements: true, ps: "Triangle, Left, Right, Right, Square, R2, R1", xbox: "Y, Left, Right, Right, X, RT, RB", pc: "SLOWMO", phone: "1-999-756-966", category: "Misc" },
    ],
  },
  {
    game: "GTA San Andreas",
    slug: "san-andreas",
    cheats: [
      { name: "Infinite Health", effect: "CJ cannot die from bullets or explosions (not drowning)", disablesAchievements: false, ps: "Down, X, Right, Left, Right, R1, Right, Down, Up, Triangle", xbox: "Down, A, Right, Left, Right, RB, Right, Down, Up, Y", pc: "BAGUVIX", phone: "", category: "Player" },
      { name: "Infinite Ammo", effect: "Weapons never run out of ammo", disablesAchievements: false, ps: "L1, R1, Square, R1, Left, R2, R1, Left, Square, Down, L1, L1", xbox: "LB, RB, X, RB, Left, RT, RB, Left, X, Down, LB, LB", pc: "FULLCLIP", phone: "", category: "Combat" },
      { name: "All Weapons (Tier 1)", effect: "Bat, pistol, shotgun, micro-SMG, AK47, rifle, rocket", disablesAchievements: false, ps: "R1, R2, L1, R2, Left, Down, Right, Up, Left, Down, Right, Up", xbox: "RB, RT, LB, RT, Left, Down, Right, Up, Left, Down, Right, Up", pc: "LXGIWYL", phone: "", category: "Combat" },
      { name: "All Weapons (Tier 2)", effect: "Knife, pistol, sawn-off shotgun, Tec-9, sniper", disablesAchievements: false, ps: "R1, R2, L1, R2, Left, Down, Right, Up, Left, Down, Down, Left", xbox: "RB, RT, LB, RT, Left, Down, Right, Up, Left, Down, Down, Left", pc: "PROFESSIONALSKIT", phone: "", category: "Combat" },
      { name: "All Weapons (Tier 3)", effect: "Chainsaw, deagle, combat shotgun, M4, RPG, minigun", disablesAchievements: false, ps: "R1, R2, L1, R2, Left, Down, Right, Up, Left, Down, Down, Down", xbox: "RB, RT, LB, RT, Left, Down, Right, Up, Left, Down, Down, Down", pc: "UZUMYMW", phone: "", category: "Combat" },
      { name: "Wanted Level × 6", effect: "Instant 6-star wanted level", disablesAchievements: false, ps: "Circle, Right, Circle, Right, Left, Square, Triangle, Up", xbox: "B, Right, B, Right, Left, X, Y, Up", pc: "BRINGITON", phone: "", category: "Wanted" },
      { name: "Lower Wanted Level", effect: "Removes all wanted stars instantly", disablesAchievements: false, ps: "R1, R1, Circle, R2, Up, Down, Up, Down, Up, Down", xbox: "RB, RB, B, RT, Up, Down, Up, Down, Up, Down", pc: "TURNDOWNTHEHEAT", phone: "", category: "Wanted" },
      { name: "Spawn Jetpack", effect: "Places a jetpack on CJ's back", disablesAchievements: false, ps: "L1, L2, R1, R2, Up, Down, Left, Right, L1, L2, R1, R2, Up, Down, Left, Right", xbox: "LB, LT, RB, RT, Up, Down, Left, Right, LB, LT, RB, RT, Up, Down, Left, Right", pc: "ROCKETMAN", phone: "", category: "Vehicles" },
      { name: "Spawn Hydra (Fighter Jet)", effect: "Spawns an armed military Harrier jet", disablesAchievements: false, ps: "Triangle, Triangle, Square, Circle, X, L1, L1, Down, Up", xbox: "Y, Y, X, B, A, LB, LB, Down, Up", pc: "AIRSHIP", phone: "", category: "Vehicles" },
      { name: "Spawn Rhino Tank", effect: "Spawns a military tank near you", disablesAchievements: false, ps: "Circle, Circle, L1, Circle, Circle, Circle, L1, L2, R1, Triangle, Circle, Triangle", xbox: "B, B, LB, B, B, B, LB, LT, RB, Y, B, Y", pc: "AIWPRTON", phone: "", category: "Vehicles" },
      { name: "Spawn Monster Truck", effect: "Spawns the massive Monster Truck", disablesAchievements: false, ps: "Right, Up, R1, R1, R1, Down, Triangle, Triangle, X, Circle, L1, L1", xbox: "Right, Up, RB, RB, RB, Down, Y, Y, A, B, LB, LB", pc: "MONSTERMASH", phone: "", category: "Vehicles" },
      { name: "Spawn NRG-500", effect: "Spawns the fastest motorcycle in SA", disablesAchievements: false, ps: "Triangle, Left, X, R2, L1, L2, L2, Up, Down", xbox: "Y, Left, A, RT, LB, LT, LT, Up, Down", pc: "ANGELDHAED", phone: "", category: "Vehicles" },
      { name: "Chaos Mode", effect: "Aggressive NPCs — everybody attacks everybody", disablesAchievements: false, ps: "Down, Up, Up, Up, X, R2, R1, L2, L2", xbox: "Down, Up, Up, Up, A, RT, RB, LT, LT", pc: "STATEOFEMERGENCY", phone: "", category: "World" },
      { name: "Max Muscle", effect: "CJ instantly reaches maximum muscle stat", disablesAchievements: false, ps: "Triangle, Up, Up, Left, Right, Square, Circle, Left", xbox: "Y, Up, Up, Left, Right, X, B, Left", pc: "BUFFMEUP", phone: "", category: "Player" },
      { name: "Max Fat", effect: "CJ instantly reaches maximum fat stat", disablesAchievements: false, ps: "Triangle, Up, Up, Left, Right, Square, Circle, Right", xbox: "Y, Up, Up, Left, Right, X, B, Right", pc: "WHOAAAMICRAZY", phone: "", category: "Player" },
      { name: "Max Respect", effect: "Maxes out CJ's respect stat instantly", disablesAchievements: false, ps: "L1, R1, Triangle, Down, R2, X, L1, Up, L2, L2, L1, L1", xbox: "LB, RB, Y, Down, RT, A, LB, Up, LT, LT, LB, LB", pc: "WORSHIPME", phone: "", category: "Player" },
      { name: "Max Sex Appeal", effect: "Maxes sex appeal to get any girlfriend immediately", disablesAchievements: false, ps: "Circle, Triangle, Triangle, Up, Circle, R1, L2, Up, Triangle, L1, L1, L1", xbox: "B, Y, Y, Up, B, RB, LT, Up, Y, LB, LB, LB", pc: "HELLOLADIES", phone: "", category: "Player" },
      { name: "Sunny Weather", effect: "Sets weather to bright and sunny", disablesAchievements: false, ps: "Down, Down, Down, Square, Square, Circle, Circle, L1, L1", xbox: "Down, Down, Down, X, X, B, B, LB, LB", pc: "PLEASANTLYWARM", phone: "", category: "World" },
      { name: "Foggy Weather", effect: "Dense fog throughout the world", disablesAchievements: false, ps: "R2, X, L1, L1, L2, L2, L2, X", xbox: "RT, A, LB, LB, LT, LT, LT, A", pc: "TOODAMNHOT", phone: "", category: "World" },
      { name: "Always Midnight", effect: "Locks game time to midnight permanently", disablesAchievements: false, ps: "Square, L1, R1, Right, X, Up, L1, Left, Left", xbox: "X, LB, RB, Right, A, Up, LB, Left, Left", pc: "NIGHTPROWLER", phone: "", category: "World" },
      { name: "Infinite Sprint", effect: "CJ can sprint forever without tiring", disablesAchievements: false, ps: "Triangle, Up, Up, Left, Right, Square, Circle, Left", xbox: "Y, Up, Up, Left, Right, X, B, Left", pc: "VKYPQCF", phone: "", category: "Player" },
      { name: "Pedestrians Riot", effect: "All pedestrians riot and fight each other", disablesAchievements: false, ps: "Down, Left, Up, Left, X, R2, R1, L2, L1", xbox: "Down, Left, Up, Left, A, RT, RB, LT, LB", pc: "ROUGHNEIGHBOURHOOD", phone: "", category: "World" },
    ],
  },
  {
    game: "GTA Vice City",
    slug: "vice-city",
    cheats: [
      { name: "Full Health", effect: "Restores Tommy's health to maximum", disablesAchievements: false, ps: "R1, R2, L1, Circle, Left, Down, Right, Up, Left, Down, Right, Up", xbox: "RB, RT, LB, B, Left, Down, Right, Up, Left, Down, Right, Up", pc: "ASPIRINE", phone: "", category: "Player" },
      { name: "Full Armor", effect: "Restores armor to maximum instantly", disablesAchievements: false, ps: "R1, R2, L1, X, Left, Down, Right, Up, Left, Down, Right, Up", xbox: "RB, RT, LB, A, Left, Down, Right, Up, Left, Down, Right, Up", pc: "PRECIOUSPROTECTION", phone: "", category: "Player" },
      { name: "Wanted Level Up", effect: "Adds two wanted stars to current level", disablesAchievements: false, ps: "R1, R1, Circle, R2, Left, Right, Left, Right, Left, Right", xbox: "RB, RB, B, RT, Left, Right, Left, Right, Left, Right", pc: "YOUWONTTAKEMEALIVE", phone: "", category: "Wanted" },
      { name: "Clear Wanted Level", effect: "Removes all wanted stars completely", disablesAchievements: false, ps: "R1, R1, Circle, R2, Up, Down, Up, Down, Up, Down", xbox: "RB, RB, B, RT, Up, Down, Up, Down, Up, Down", pc: "LEAVEMEALONE", phone: "", category: "Wanted" },
      { name: "All Weapons (Tier 1)", effect: "Baseball bat, pistol, shotgun, SMG, AK47", disablesAchievements: false, ps: "R1, R2, L1, R2, Left, Down, Right, Up, Left, Down, Right, Up", xbox: "RB, RT, LB, RT, Left, Down, Right, Up, Left, Down, Right, Up", pc: "THUGSTOOLS", phone: "", category: "Combat" },
      { name: "All Weapons (Tier 2)", effect: "Screwdriver, deagle, spas, Python, sniper, M4", disablesAchievements: false, ps: "R1, R2, L1, R2, Left, Down, Right, Up, Left, Down, Down, Left", xbox: "RB, RT, LB, RT, Left, Down, Right, Up, Left, Down, Down, Left", pc: "PROFESSIONALTOOLS", phone: "", category: "Combat" },
      { name: "All Weapons (Tier 3)", effect: "Chainsaw, minigun, rocket launcher, flame thrower", disablesAchievements: false, ps: "R1, R2, L1, R2, Left, Down, Right, Up, Left, Down, Down, Down", xbox: "RB, RT, LB, RT, Left, Down, Right, Up, Left, Down, Down, Down", pc: "NUTTERSTOYS", phone: "", category: "Combat" },
      { name: "Spawn Rhino", effect: "Spawns a military tank on your location", disablesAchievements: false, ps: "Circle, Circle, L1, Circle, Circle, Circle, L1, L2, R1, Triangle, Circle, Triangle", xbox: "B, B, LB, B, B, B, LB, LT, RB, Y, B, Y", pc: "PANZER", phone: "", category: "Vehicles" },
      { name: "Spawn Hotring Racer", effect: "Spawns a fast NASCAR-style racing car", disablesAchievements: false, ps: "R1, Circle, R2, Right, L1, L2, X, X, Square, R1", xbox: "RB, B, RT, Right, LB, LT, A, A, X, RB", pc: "GETTHEREVERYFASTINDEED", phone: "", category: "Vehicles" },
      { name: "Spawn Hearse", effect: "Spawns a Romero's Hearse funeral car", disablesAchievements: false, ps: "Down, R2, Down, R1, L2, Left, R1, L1, Left, Right", xbox: "Down, RT, Down, RB, LT, Left, RB, LB, Left, Right", pc: "THELASTRIDE", phone: "", category: "Vehicles" },
      { name: "Spawn Bloodring Banger", effect: "Spawns a demolition derby car", disablesAchievements: false, ps: "Up, Right, Right, L1, Right, Up, Square, L2", xbox: "Up, Right, Right, LB, Right, Up, X, LT", pc: "BEATDOWNBOOGALOO", phone: "", category: "Vehicles" },
      { name: "Spawn Caddie (Golf Cart)", effect: "Spawns the golf cart vehicle", disablesAchievements: false, ps: "Circle, L1, Up, R1, L2, X, R1, L1, Circle, X", xbox: "B, LB, Up, RB, LT, A, RB, LB, B, A", pc: "BETTERTHANWALKING", phone: "", category: "Vehicles" },
      { name: "Aggressive Drivers", effect: "All vehicle drivers become hostile and ram you", disablesAchievements: false, ps: "R2, Circle, R1, L2, Left, R1, L1, R2, L2", xbox: "RT, B, RB, LT, Left, RB, LB, RT, LT", pc: "MIAMITRAFFIC", phone: "", category: "World" },
      { name: "Pedestrians Armed", effect: "All pedestrians carry weapons", disablesAchievements: false, ps: "R2, R1, X, Triangle, X, Triangle, Up, Down", xbox: "RT, RB, A, Y, A, Y, Up, Down", pc: "ARMEDTOTHETEETH", phone: "", category: "World" },
      { name: "Pedestrians Attack You", effect: "All pedestrians become hostile towards Tommy", disablesAchievements: false, ps: "Down, Up, Up, Up, X, R2, R1, L2, R2", xbox: "Down, Up, Up, Up, A, RT, RB, LT, RT", pc: "NOBODYLIKESME", phone: "", category: "World" },
      { name: "Cars Float on Water", effect: "Vehicles can drive on the ocean surface", disablesAchievements: false, ps: "Right, R2, Circle, R1, L2, Square, R1, R2", xbox: "Right, RT, B, RB, LT, X, RB, RT", pc: "SEAWAYS", phone: "", category: "Vehicles" },
      { name: "Perfect Handling", effect: "All vehicles get perfect grip and handling", disablesAchievements: false, ps: "Triangle, R1, R1, Left, R1, L1, R2, L1", xbox: "Y, RB, RB, Left, RB, LB, RT, LB", pc: "GRIPISEVERYTHING", phone: "", category: "Vehicles" },
      { name: "Suicide Cheat", effect: "Tommy kills himself instantly", disablesAchievements: false, ps: "Right, L2, Down, R1, Left, Left, R1, L1, L2, L1", xbox: "Right, LT, Down, RB, Left, Left, RB, LB, LT, LB", pc: "ICANTTAKEITANYMORE", phone: "", category: "Misc" },
    ],
  },
  {
    game: "GTA III",
    slug: "gta3",
    cheats: [
      { name: "Full Health", effect: "Restores Claude's health to maximum", disablesAchievements: false, ps: "R2, R2, L1, R1, Left, Down, Right, Up, Left, Down, Right, Up", xbox: "RT, RT, LB, RB, Left, Down, Right, Up, Left, Down, Right, Up", pc: "GESUNDHEIT", phone: "", category: "Player" },
      { name: "Full Armor", effect: "Restores armor to maximum", disablesAchievements: false, ps: "R2, R2, L1, L2, Left, Down, Right, Up, Left, Down, Right, Up", xbox: "RT, RT, LB, LT, Left, Down, Right, Up, Left, Down, Right, Up", pc: "TURTOISE", phone: "", category: "Player" },
      { name: "All Weapons", effect: "Full arsenal including all available weapons", disablesAchievements: false, ps: "R2, R2, L1, R2, Left, Down, Right, Up, Left, Down, Right, Up", xbox: "RT, RT, LB, RT, Left, Down, Right, Up, Left, Down, Right, Up", pc: "GUNSGUNSGUNS", phone: "", category: "Combat" },
      { name: "Wanted Level × 6", effect: "Sets wanted level to maximum 6 stars", disablesAchievements: false, ps: "Circle, Circle, Circle, Square, Square, Square, Square, Square, L1, Triangle, Circle, Triangle", xbox: "B, B, B, X, X, X, X, X, LB, Y, B, Y", pc: "MOREPOLICEPLEASE", phone: "", category: "Wanted" },
      { name: "Clear Wanted Level", effect: "Removes all wanted stars", disablesAchievements: false, ps: "R2, R2, L1, R2, Up, Down, Up, Down, Up, Down", xbox: "RT, RT, LB, RT, Up, Down, Up, Down, Up, Down", pc: "NOPOLICEPLEASE", phone: "", category: "Wanted" },
      { name: "Spawn Rhino Tank", effect: "Spawns a military Rhino tank near you", disablesAchievements: false, ps: "Circle, Circle, Circle, Circle, Circle, Circle, R1, L2, L1, Triangle, Circle, Triangle", xbox: "B, B, B, B, B, B, RB, LT, LB, Y, B, Y", pc: "TRAVELINSTYLE", phone: "", category: "Vehicles" },
      { name: "Spawn Monster Truck", effect: "Spawns the Patriot monster truck", disablesAchievements: false, ps: "Right, R2, Circle, R1, L2, Down, L1, R1", xbox: "Right, RT, B, RB, LT, Down, LB, RB", pc: "BANGBANGBANG", phone: "", category: "Vehicles" },
      { name: "Faster Gameplay", effect: "Game speed increases to 150%", disablesAchievements: false, ps: "Triangle, Up, Right, Down, Square, R1, R2", xbox: "Y, Up, Right, Down, X, RB, RT", pc: "MADWEATHER", phone: "", category: "Misc" },
      { name: "Slower Gameplay", effect: "Game speed decreases to 50%", disablesAchievements: false, ps: "Triangle, Up, Right, Down, Square, R2, R1", xbox: "Y, Up, Right, Down, X, RT, RB", pc: "TIMEFLIESWHENYOU", phone: "", category: "Misc" },
      { name: "Pedestrians Fight Each Other", effect: "All pedestrians riot and attack each other", disablesAchievements: false, ps: "Down, Up, Left, Up, X, R1, R2, L2, L1", xbox: "Down, Up, Left, Up, A, RB, RT, LT, LB", pc: "ITSALLBULL", phone: "", category: "World" },
      { name: "Pedestrians Armed", effect: "All pedestrians carry weapons and use them", disablesAchievements: false, ps: "R2, R1, Triangle, X, L2, L1, Up, Down", xbox: "RT, RB, Y, A, LT, LB, Up, Down", pc: "WEAPONSFORALL", phone: "", category: "World" },
      { name: "Gore Mode", effect: "Increases blood and body damage effects", disablesAchievements: false, ps: "Square, L1, Circle, Down, L1, R1, Triangle, Right, L1, X", xbox: "X, LB, B, Down, LB, RB, Y, Right, LB, A", pc: "ILIKESCOTLAND", phone: "", category: "Misc" },
    ],
  },
  {
    game: "GTA IV",
    slug: "gta4",
    cheats: [
      { name: "Health & Armor", effect: "Restores Niko's health and gives full armor", disablesAchievements: true, ps: "", xbox: "", pc: "", phone: "362-555-0100", category: "Player" },
      { name: "Weapons Tier 1", effect: "Baseball bat, pistol, shotgun, MP5, RPG, sniper", disablesAchievements: true, ps: "", xbox: "", pc: "", phone: "486-555-0150", category: "Combat" },
      { name: "Weapons Tier 2", effect: "Knife, Molotov, Desert Eagle, AK47, minigun, .44 magnum", disablesAchievements: true, ps: "", xbox: "", pc: "", phone: "486-555-0100", category: "Combat" },
      { name: "Remove Wanted Level", effect: "Clears all wanted stars instantly", disablesAchievements: true, ps: "", xbox: "", pc: "", phone: "267-555-0100", category: "Wanted" },
      { name: "Raise Wanted Level", effect: "Adds one wanted star to current level", disablesAchievements: true, ps: "", xbox: "", pc: "", phone: "267-555-0150", category: "Wanted" },
      { name: "Spawn Annihilator Helicopter", effect: "Armed police helicopter with rocket launchers", disablesAchievements: true, ps: "", xbox: "", pc: "", phone: "359-555-0100", category: "Vehicles" },
      { name: "Spawn NRG-900 Motorcycle", effect: "Fast sports motorcycle spawns near you", disablesAchievements: true, ps: "", xbox: "", pc: "", phone: "625-555-0100", category: "Vehicles" },
      { name: "Spawn Comet Sports Car", effect: "Porsche 911-inspired Comet car", disablesAchievements: true, ps: "", xbox: "", pc: "", phone: "227-555-0142", category: "Vehicles" },
      { name: "Spawn Sanchez (Dirt Bike)", effect: "Off-road dirt bike for Blaine County style riding", disablesAchievements: true, ps: "", xbox: "", pc: "", phone: "625-555-0150", category: "Vehicles" },
      { name: "Spawn FIB Buffalo", effect: "Fast unmarked police vehicle", disablesAchievements: true, ps: "", xbox: "", pc: "", phone: "227-555-0100", category: "Vehicles" },
      { name: "Spawn Turismo", effect: "Fast supercar spawn", disablesAchievements: true, ps: "", xbox: "", pc: "", phone: "227-555-0168", category: "Vehicles" },
      { name: "Change Weather", effect: "Cycles through weather: Sunny, Clear, Cloudy, Rainy, Thunderstorm", disablesAchievements: false, ps: "", xbox: "", pc: "", phone: "468-555-0100", category: "World" },
    ],
  },
];

export const CATEGORIES = ["All", "Player", "Combat", "Vehicles", "Wanted", "World", "Misc"];
