export interface Vehicle {
  name: string;
  class: string;
  game: string;
  topSpeed: number; // mph
  acceleration: number; // 1-10
  handling: number; // 1-10
  price: string;
  location: string;
  image?: string;
  description: string;
  drivetrain: string;
}

export const VEHICLES: Vehicle[] = [
  { name: "Pfister 811", class: "Super", game: "GTA 5", topSpeed: 130, acceleration: 9.7, handling: 8.8, price: "$1,135,000", location: "Legendary Motorsport", drivetrain: "RWD", description: "Inspired by the Porsche 918 Spyder. The fastest accelerating car in GTA Online. Electric powertrain gives instant torque." },
  { name: "Grotti Itali RSX", class: "Super", game: "GTA 5", topSpeed: 135, acceleration: 9.3, handling: 9.1, price: "$3,465,000", location: "Legendary Motorsport", drivetrain: "AWD", description: "Ferrari SF90 inspired hybrid hypercar. Arguably the best all-around super in GTA Online thanks to exceptional cornering grip." },
  { name: "Ocelot Pariah", class: "Sports", game: "GTA 5", topSpeed: 136, acceleration: 8.2, handling: 8.5, price: "$1,420,000", location: "Legendary Motorsport", drivetrain: "RWD", description: "The fastest car by top speed in GTA Online (non-oppressor). Ferrari 458 Speciale inspiration. Great for highway runs." },
  { name: "Declasse Scramjet", class: "Super", game: "GTA 5", topSpeed: 132, acceleration: 9.0, handling: 8.4, price: "$3,480,000", location: "Warstock Cache & Carry", drivetrain: "RWD", description: "Armed scramjet rocket car. Jet boost for insane acceleration bursts. Great for both races and combat." },
  { name: "Grotti Vigilante", class: "Super", game: "GTA 5", topSpeed: 128, acceleration: 9.5, handling: 8.0, price: "$3,750,000", location: "Warstock Cache & Carry", drivetrain: "RWD", description: "Batman's Batmobile in GTA Online. Rocket boost, explosive missiles. Fastest 0–60 in the game due to rocket assist." },
  { name: "Pegassi Zentorno", class: "Super", game: "GTA 5", topSpeed: 119, acceleration: 8.9, handling: 8.7, price: "$725,000", location: "Legendary Motorsport", drivetrain: "AWD", description: "Lamborghini Sesto Elemento inspired. Budget super car with competitive lap times. Great handling for the price." },
  { name: "Pegassi Torero XO", class: "Super", game: "GTA 5", topSpeed: 125, acceleration: 9.1, handling: 9.0, price: "$2,985,000", location: "Legendary Motorsport", drivetrain: "AWD", description: "Lamborghini Countach style retro supercar. Surprisingly competitive lap time with extremely stable cornering." },
  { name: "Lampadati Tigon", class: "Super", game: "GTA 5", topSpeed: 122, acceleration: 9.2, handling: 8.8, price: "$2,825,000", location: "Legendary Motorsport", drivetrain: "AWD", description: "One of the top lap-time supers. Consistent, grippy, and relatively forgiving. A race-day choice for serious players." },
  { name: "Bravado Banshee 900R", class: "Super", game: "GTA 5", topSpeed: 131, acceleration: 8.8, handling: 8.3, price: "$565,000", location: "Southern SA Auto (modded)", drivetrain: "RWD", description: "Modified Dodge Viper / Banshee variant. Extremely fast top speed for the price. Requires vehicle workshop upgrade." },
  { name: "Annis S80RR", class: "Super", game: "GTA 5", topSpeed: 121, acceleration: 9.4, handling: 9.3, price: "$2,575,000", location: "Legendary Motorsport", drivetrain: "AWD", description: "Nissan R390 GT1 inspired Le Mans racer. Incredible cornering speed. One of the best lap-time cars overall." },
  { name: "Principe Deveste Eight", class: "Super", game: "GTA 5", topSpeed: 132, acceleration: 9.6, handling: 8.9, price: "$1,795,000", location: "Legendary Motorsport", drivetrain: "AWD", description: "Devel Sixteen inspired hypercar. Enormous spoiler and jaw-dropping stats. Top-tier race car with great visual presence." },
  { name: "Western Motorcycle Nightblade", class: "Motorcycle", game: "GTA 5", topSpeed: 110, acceleration: 7.5, handling: 7.8, price: "$88,000", location: "Legendary Motorsport", drivetrain: "RWD", description: "Classic chopper style motorcycle. Great for leisurely cruises through Los Santos. Reliable starter bike." },
  { name: "Shitzu Hakuchou Drag", class: "Motorcycle", game: "GTA 5", topSpeed: 134, acceleration: 9.8, handling: 6.5, price: "$976,000", location: "Legendary Motorsport", drivetrain: "RWD", description: "Fastest motorcycle in GTA Online. Drag bike based on the Suzuki Hayabusa. Wheelies constantly — hard to control." },
  { name: "BF Weevil Custom", class: "Compact", game: "GTA 5", topSpeed: 122, acceleration: 9.1, handling: 9.5, price: "$870,000", location: "Benny's Original Motorworks", drivetrain: "RWD", description: "VW Beetle turned race car. Tiny sleeper that humiliates supercars on lap times. Incredible bang-for-buck racer." },
  { name: "Dinka Jester Classic", class: "Sports", game: "GTA 5", topSpeed: 124, acceleration: 9.0, handling: 9.2, price: "$498,000", location: "Legendary Motorsport", drivetrain: "RWD", description: "Toyota Supra (A70) inspired retro sports. Outstanding cornering grip. Best Sports class car for circuit racing." },
  { name: "Annis Elegy Retro Custom", class: "Sports", game: "GTA 5", topSpeed: 119, acceleration: 8.8, handling: 9.1, price: "Free (story mode trophy)", location: "Legendary Motorsport (free)", drivetrain: "AWD", description: "Nissan Skyline R32 tribute. Free with Social Club. AWD platform with excellent lap times in Sports class." },
];

export const VEHICLE_CLASSES = ["All", "Super", "Sports", "Motorcycle", "Compact", "SUV", "Muscle"];
