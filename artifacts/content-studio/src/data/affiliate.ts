export interface AffiliateProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  whyYouNeedIt: string;
  price: string;
  rating: number;
  badge?: string;
  link: string;
  tags: string[];
}

export const AFFILIATE_PRODUCTS: AffiliateProduct[] = [
  {
    id: "p1",
    name: "PS5 DualSense Wireless Controller",
    category: "Controller",
    description: "The official PlayStation 5 controller with haptic feedback and adaptive triggers. Feel every gunshot, car crash, and explosion in GTA like never before.",
    whyYouNeedIt: "GTA 6 is built specifically around the DualSense's adaptive triggers — you'll feel the tension of pulling a handgun vs. firing an assault rifle. Essential for the full PS5 GTA 6 experience.",
    price: "₹5,990",
    rating: 4.8,
    badge: "Best for GTA 6",
    link: "https://amzn.in/d/0abEa5WE?tag=dealify01-21",
    tags: ["PS5", "GTA 6", "Controller", "Haptic Feedback"],
  },
  {
    id: "p2",
    name: "Gaming Headset with 7.1 Surround Sound",
    category: "Audio",
    description: "Immersive surround sound gaming headset with noise-cancelling mic. Hear police sirens approaching from every direction in GTA Online.",
    whyYouNeedIt: "In GTA Online heists, directional audio is a competitive advantage — you'll hear enemies reload, footsteps, and cars before you see them. 7.1 surround changes how you play.",
    price: "₹2,499",
    rating: 4.5,
    badge: "Top Rated",
    link: "https://amzn.in/d/0dhR3xna?tag=dealify01-21",
    tags: ["Headset", "7.1 Surround", "GTA Online", "PC", "PS4"],
  },
  {
    id: "p3",
    name: "Mechanical Gaming Keyboard",
    category: "Keyboard",
    description: "Tactile mechanical keyboard optimized for gaming. PC cheat codes in GTA V are entered instantly — never miss a keypress mid-chase.",
    whyYouNeedIt: "PC GTA players type cheat codes while being chased. A mechanical keyboard's tactile response means you enter PAINKILLER before cops take you down. Also great for GTA RP servers.",
    price: "₹3,299",
    rating: 4.6,
    badge: "PC Essential",
    link: "https://amzn.in/d/02p5mfSk?tag=dealify01-21",
    tags: ["Keyboard", "PC Gaming", "Mechanical", "Cheat Codes"],
  },
  {
    id: "p4",
    name: "High-Precision Gaming Mouse",
    category: "Mouse",
    description: "High DPI gaming mouse with adjustable sensitivity. Perfect for precise aiming in GTA V's sniper missions and PC gameplay.",
    whyYouNeedIt: "GTA V PC sniper missions demand precision — Rockstar's PC port has full mouse support and the right DPI setting makes headshots feel natural. Also works perfectly for GTA modding.",
    price: "₹1,599",
    rating: 4.4,
    badge: "PC Recommended",
    link: "https://amzn.in/d/04hRzytH?tag=dealify01-21",
    tags: ["Mouse", "PC Gaming", "Precision", "Aiming"],
  },
  {
    id: "p5",
    name: "Ergonomic Gaming Chair with Lumbar Support",
    category: "Chair",
    description: "Professional gaming chair built for long sessions. If you're grinding GTA Online businesses or doing 100% completion runs, your back will thank you.",
    whyYouNeedIt: "GTA V story mode 100% completion takes 60–80 hours. GTA Online grind sessions run 4–8 hours. You need proper lumbar support — your spine is more valuable than the Oppressor Mk II.",
    price: "₹8,999",
    rating: 4.3,
    badge: "Long Session Pick",
    link: "https://amzn.in/d/01WH0Chp?tag=dealify01-21",
    tags: ["Chair", "Ergonomic", "Gaming Setup", "Comfort"],
  },
  {
    id: "p6",
    name: "XXL Extended Gaming Mouse Pad",
    category: "Accessories",
    description: "Massive desk-covering mouse pad with stitched edges. Covers your entire desk — keyboard, mouse, and controller all in one smooth surface.",
    whyYouNeedIt: "For PC GTA players doing wide mouse sweeps for car chases and combat, a small mousepad is a death sentence. XXL gives your mouse the full freedom the Los Santos map deserves.",
    price: "₹699",
    rating: 4.7,
    badge: "Best Value",
    link: "https://amzn.in/d/074r8tn1?tag=dealify01-21",
    tags: ["Mousepad", "XXL", "PC Gaming", "Desk Setup"],
  },
  {
    id: "p7",
    name: "4K HDMI 2.1 Cable — High Speed",
    category: "Cables",
    description: "48Gbps HDMI 2.1 cable supporting 4K@120fps and VRR. Required for the full PS5/Xbox Series X GTA 6 next-gen experience.",
    whyYouNeedIt: "GTA 6 on PS5 supports 60fps in fidelity mode and 120fps in performance mode — but only if you have an HDMI 2.1 cable. Many players miss this and get capped at 60fps without knowing.",
    price: "₹899",
    rating: 4.6,
    link: "https://amzn.in/d/0bfo8ONz?tag=dealify01-21",
    tags: ["HDMI 2.1", "4K", "120fps", "PS5", "Xbox Series X"],
  },
  {
    id: "p8",
    name: "Blue Light Gaming Glasses",
    category: "Accessories",
    description: "Anti-blue light glasses designed for gamers. Reduce eye strain during marathon GTA sessions — especially useful for night grinding.",
    whyYouNeedIt: "Late-night GTA Online grinding destroys your eyes and sleep cycle. Blue light glasses reduce strain during 3am heist runs and help you sleep after — so you can do it again tomorrow.",
    price: "₹799",
    rating: 4.2,
    link: "https://amzn.in/d/0bG7Eqff?tag=dealify01-21",
    tags: ["Blue Light", "Eye Strain", "Night Gaming", "Health"],
  },
  {
    id: "p9",
    name: "USB Controller Adapter — PS4/PS5 to PC",
    category: "Accessories",
    description: "Plug your DualShock 4 or DualSense into PC with full button mapping. Play GTA V PC with a PlayStation controller natively.",
    whyYouNeedIt: "GTA V PC officially supports Xbox controllers — but with this adapter, you can use your PS4 or PS5 DualSense with full button prompts. Best of both worlds: PC graphics + PlayStation comfort.",
    price: "₹1,299",
    rating: 4.4,
    link: "https://amzn.in/d/0dJSCTkJ?tag=dealify01-21",
    tags: ["Controller Adapter", "PC", "DualSense", "PS4", "GTA V"],
  },
];

export const GEAR_CATEGORIES = ["All", "Controller", "Audio", "Keyboard", "Mouse", "Chair", "Accessories", "Cables"];
