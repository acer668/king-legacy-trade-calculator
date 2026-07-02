// Edit values here whenever you want to update the calculator.
// Material entries like "2 for 1 fin" are converted into a per-item value.
let ITEMS = [
  // Fruits
  { name: "Demon Fruit", category: "Fruits", value: 7 },
  { name: "Tree Fruit", category: "Fruits", value: 7 },
  { name: "Dragon Fruit", category: "Fruits", value: 6 },
  { name: "Phoenix Fruit", category: "Fruits", value: 5 },
  { name: "Gate Fruit", category: "Fruits", value: 5 },
  { name: "Dough Fruit", category: "Fruits", value: 5 },
  { name: "Pter Fruit", category: "Fruits", value: 3 },
  { name: "Melody Fruit", category: "Fruits", value: 2 },
  { name: "Toy Fruit", category: "Fruits", value: 1 },
  { name: "Rumble Fruit", category: "Fruits", value: 1 },
  { name: "Gas Fruit", category: "Fruits", value: 1 },
  { name: "Magma Fruit", category: "Fruits", value: 1 },
  { name: "Light Fruit", category: "Fruits", value: 1 },
  { name: "Quake Fruit", category: "Fruits", value: 1 },
  { name: "Flame Fruit", category: "Fruits", value: 1 },
  { name: "Snow Fruit", category: "Fruits", value: 1 },
  { name: "Ice Fruit", category: "Fruits", value: 1 },
  { name: "Control Fruit", category: "Fruits", value: 0.75 },
  { name: "Buddha Fruit", category: "Fruits", value: 0.75 },
  { name: "Gravity Fruit", category: "Fruits", value: 0.75 },
  { name: "Dark Fruit", category: "Fruits", value: 0.75 },

  // Swords
  { name: "Noirceur", category: "Swords", value: 2900 },
  { name: "Cerulean Blossom", category: "Swords", value: 800 },
  { name: "Ancient Sword", category: "Swords", value: 130 },
  { name: "Abyssal Crab Axe", category: "Swords", value: 20 },
  { name: "Ethereal", category: "Swords", value: 4.5 },
  { name: "Phoenix Blade", category: "Swords", value: 4.5 },
  { name: "Acroscythe", category: "Swords", value: 4 },
  { name: "Scepter of Flames", category: "Swords", value: 3.5 },
  { name: "Authentic Triple Katana", category: "Swords", value: 3.5 },
  { name: "Avalon", category: "Swords", value: 1 },
  { name: "Longaevus", category: "Swords", value: 1 },
  { name: "Daybreak Cleaver", category: "Swords", value: 1 },
  { name: "Aquatic Anchor", category: "Swords", value: 1 },

  // Accessories
  { name: "Dragon Band", category: "Accessories", value: 350 },
  { name: "EXP Crown", category: "Accessories", value: 100 },
  { name: "Crustacean Armor", category: "Accessories", value: 80 },
  { name: "Water Kimono", category: "Accessories", value: 42.5 },
  { name: "Night Necklace", category: "Accessories", value: 19 },
  { name: "Drakenfyr Cape", category: "Accessories", value: 13 },
  { name: "Oceanic tanto", category: "Accessories", value: 12 },
  { name: "Dominion Cloak", category: "Accessories", value: 10 },
  { name: "Inferno Cloak", category: "Accessories", value: 4 },
  { name: "Floffy Glasses", category: "Accessories", value: 4 },
  { name: "Glacies Shoulder", category: "Accessories", value: 4 },
  { name: "Nativitatis", category: "Accessories", value: 4 },
  { name: "Green Dryadalis", category: "Accessories", value: 4 },
  { name: "Cervus", category: "Accessories", value: 4 },
  { name: "Dark Beard Hat", category: "Accessories", value: 3.5 },
  { name: "Abyss Sentinel Armor", category: "Accessories", value: 2 },
  { name: "Metal Fin", category: "Accessories", value: 1.5 },
  { name: "Oceanic Tentacle", category: "Accessories", value: 1 },
  { name: "Tomoe Taiko", category: "Accessories", value: 1 },
  { name: "Lucidus Coat", category: "Accessories", value: 1 },
  { name: "Sally Crown", category: "Accessories", value: 1 },
  { name: "Dragon Necklace", category: "Accessories", value: 1 },
  { name: "Tengu Mask", category: "Accessories", value: 1 },
  { name: "Oni Mask", category: "Accessories", value: 1 },
  { name: "Shadow Cloak", category: "Accessories", value: 1 },
  { name: "Sentinel Armor", category: "Accessories", value: 1 },
  { name: "Flame Hair", category: "Accessories", value: 1 },
  { name: "Crimson Scarf", category: "Accessories", value: 1 },

  // Materials
  { name: "Dragon Fang", category: "Materials", value: 20, note: "1 for 20 fins" },
  { name: "Kraken's Ink", category: "Materials", value: 6.5, note: "1 for 6.5 fins" },
  { name: "Phoenix's Tear", category: "Materials", value: 5, note: "1 for 5 fins" },
  { name: "Crab Meat", category: "Materials", value: 4, note: "1 for 4 fins" },
  { name: "Hydra's Tail", category: "Materials", value: 3, note: "1 for 3 fins" },
  { name: "Severed Kraken", category: "Materials", value: 3, note: "1 for 3 fins" },
  { name: "Sea King's Fin", category: "Materials", value: 1, note: "1 for 1 fin" },
  { name: "Serpent Fin", category: "Materials", value: 0.5, note: "2 for 1 fin" },
  { name: "Sea's Wraith", category: "Materials", value: 0.4, note: "2.5 for 1 fin" },
  { name: "Aqua Gem", category: "Materials", value: 1 / 3.5, note: "3.5 for 1 fin" },
  { name: "Lost Ruby", category: "Materials", value: 0.25, note: "4 for 1 fin" },
  { name: "Essence of Fire", category: "Materials", value: 0.25, note: "4 for 1 fin" },
  { name: "Dragon Scale", category: "Materials", value: 0.2, note: "5 for 1 fin" },
  { name: "Twilight's Orb", category: "Materials", value: 0.2, note: "5 for 1 fin" },
  { name: "Samurai's Bandage", category: "Materials", value: 1 / 7.5, note: "7.5 for 1 fin" },
  { name: "Sea King's Blood", category: "Materials", value: 0.1, note: "10 for 1 fin" },
  { name: "Dragon Orb", category: "Materials", value: 0.1, note: "10 for 1 fin" },
  { name: "Shark's Canine", category: "Materials", value: 1 / 12.5, note: "12.5 for 1 fin" },
  { name: "Pearl", category: "Materials", value: 1 / 15, note: "15 for 1 fin" },
  { name: "Vampire's Vital Fluid", category: "Materials", value: 1 / 22.5, note: "22.5 for 1 fin" },
  { name: "Lucidus's Totem", category: "Materials", value: 0.04, note: "25 for 1 fin" },
  { name: "Magma Crystal", category: "Materials", value: 0.04, note: "25 for 1 fin" },
  { name: "Ice Crystal", category: "Materials", value: 0.04, note: "25 for 1 fin" },
  { name: "Dark Beard's Totem", category: "Materials", value: 1 / 30, note: "30 for 1 fin" },
  { name: "Shark's Fin", category: "Materials", value: 0.025, note: "40 for 1 fin" },
  { name: "Coral", category: "Materials", value: 0.025, note: "40 for 1 fin" },
  { name: "Gunpowder", category: "Materials", value: 1 / 300, note: "300 for 1 fin" },
  { name: "Fresh Fish", category: "Materials", value: 1 / 375, note: "375 for 1 fin" },
  { name: "Iron Ingot", category: "Materials", value: 0.002, note: "500 for 1 fin" },
  { name: "Sea Artifact", category: "Materials", value: 0.002, note: "500 for 1 fin" },
  { name: "Rusted Scrap", category: "Materials", value: 1 / 600, note: "600 for 1 fin" },
  { name: "Carrot", category: "Materials", value: 1 / 600, note: "600 for 1 fin" },
  { name: "Pile of Bones", category: "Materials", value: 1 / 600, note: "600 for 1 fin" },
  { name: "Angellic's Feather", category: "Materials", value: 1 / 600, note: "600 for 1 fin" },
  { name: "Thief's Rag", category: "Materials", value: 1 / 600, note: "600 for 1 fin" },
  { name: "Leather", category: "Materials", value: 1 / 600, note: "600 for 1 fin" },
  { name: "Undead's Ooze", category: "Materials", value: 1 / 750, note: "750 for 1 fin" },

  // Gamepasses
  { name: "Volt Bundle", category: "Gamepasses", value: 775 },
  { name: "Conqueror", category: "Gamepasses", value: 725 },
  { name: "BlazeIce Pack", category: "Gamepasses", value: 375 },
  { name: "Night Blade", category: "Gamepasses", value: 300 },
  { name: "+1 Slot (Passive)", category: "Gamepasses", value: 290 },
  { name: "2x Money", category: "Gamepasses", value: 265 },
  { name: "2x Drop Item", category: "Gamepasses", value: 240 },
  { name: "Coffin Boat", category: "Gamepasses", value: 90 },
  { name: "+1 Fruit Storage", category: "Gamepasses", value: 85 },
  { name: "Legacy Pose", category: "Gamepasses", value: 80 },
  { name: "Animation (Any)", category: "Gamepasses", value: 30 },
  { name: "2x exp (12 hours)", category: "Gamepasses", value: 5.5 },
  { name: "Race Rerolls", category: "Gamepasses", value: 4 },
  { name: "Refund Stats", category: "Gamepasses", value: 2.5 },

  // Bundles
  { name: "Hellroot Bundle", category: "Bundles", value: 1300 },
  { name: "Primal Pack", category: "Bundles", value: 500 },
  { name: "Acrospear (Mats)", category: "Bundles", value: 32.5 },
  { name: "Phoenix Blade V2 (Mats)", category: "Bundles", value: 27.5 },
  { name: "Dark Stone (Mats)", category: "Bundles", value: 25.5 },
  { name: "Spark Stone (Mats)", category: "Bundles", value: 22.5 },
  { name: "Poison Stone (Mats)", category: "Bundles", value: 22.5 },
  { name: "Cyborg V2 (Mats)", category: "Bundles", value: 22.1 },
  { name: "Blaze Stone (Mats)", category: "Bundles", value: 14.5 },
  { name: "Abyss Stone (Mats)", category: "Bundles", value: 13 },
  { name: "Gale Stone (Mats)", category: "Bundles", value: 11.5 },
  { name: "Light Stone (Mats)", category: "Bundles", value: 7 },
  { name: "Bloodthirsty Stone (Mats)", category: "Bundles", value: 6 },
  { name: "Glacier Stone (Mats)", category: "Bundles", value: 5.5 },
  { name: "Tempestas Stone (Mats)", category: "Bundles", value: 5 },
  { name: "Disillusion Stone (Mats)", category: "Bundles", value: 1 },

  // Perm Fruits
  { name: "Perm Dragon", category: "Perm Fruits", value: 825 },
  { name: "Perm Dough", category: "Perm Fruits", value: 775 },
  { name: "Perm Phoenix", category: "Perm Fruits", value: 735 },
  { name: "Perm Pter", category: "Perm Fruits", value: 725 },
  { name: "Perm Tree", category: "Perm Fruits", value: 700 },
  { name: "Perm Gate", category: "Perm Fruits", value: 690 },
  { name: "Perm Toy", category: "Perm Fruits", value: 637.5 },
  { name: "Perm Melody", category: "Perm Fruits", value: 615 },
  { name: "Perm Demon", category: "Perm Fruits", value: 550 },
  { name: "Perm Quake", category: "Perm Fruits", value: 425 },
  { name: "Perm Rumble", category: "Perm Fruits", value: 410 },
  { name: "Perm Gas", category: "Perm Fruits", value: 410 },
  { name: "Perm Control", category: "Perm Fruits", value: 325 },
  { name: "Perm Light", category: "Perm Fruits", value: 275 },
  { name: "Perm Snow", category: "Perm Fruits", value: 265 },
  { name: "Perm Spino", category: "Perm Fruits", value: 250 },
  { name: "Perm Gravity", category: "Perm Fruits", value: 215 },
  { name: "Perm Buddha", category: "Perm Fruits", value: 210 },
  { name: "Perm Flame", category: "Perm Fruits", value: 205 },
  { name: "Perm Magma", category: "Perm Fruits", value: 190 },
  { name: "Perm Brachio", category: "Perm Fruits", value: 175 },
  { name: "Perm Venom", category: "Perm Fruits", value: 155 },
  { name: "Perm Ice", category: "Perm Fruits", value: 125 },
  { name: "Perm Dark", category: "Perm Fruits", value: 110 },
  { name: "Perm Love", category: "Perm Fruits", value: 110 },
  { name: "Perm Allo", category: "Perm Fruits", value: 50 },
  { name: "Perm Rubber", category: "Perm Fruits", value: 45 },
  { name: "Perm Paw", category: "Perm Fruits", value: 45 },
  { name: "Perm Telekinesis", category: "Perm Fruits", value: 25 },
  { name: "Perm Bomb", category: "Perm Fruits", value: 12.5 }
];


let ROBUX_ITEMS = [
  // Gamepasses
  { name: "Volt Bundle", category: "Bundles", maxRobux: 3399 },
  { name: "Hellroot Bundle", category: "Bundles", maxRobux: 4999 },
  { name: "Conqueror", category: "Gamepasses", maxRobux: 2500 },
  { name: "Primal Pack", category: "Bundles", maxRobux: 2999 },
  { name: "BlazeIce Pack", category: "Bundles", maxRobux: 999 },
  { name: "Night Blade", category: "Gamepasses", maxRobux: 1000 },
  { name: "+1 Slot (Passive)", category: "Gamepasses", maxRobux: 1000 },
  { name: "2x Money", category: "Gamepasses", maxRobux: 1000 },
  { name: "2x Drop Item", category: "Gamepasses", maxRobux: 750 },
  { name: "Coffin Boat", category: "Gamepasses", maxRobux: 500 },
  { name: "+1 Fruit Storage", category: "Gamepasses", maxRobux: 375 },
  { name: "Legacy Pose", category: "Gamepasses", maxRobux: 350 },
  { name: "Animation (Any)", category: "Gamepasses", maxRobux: 100 },
  { name: "2x exp (12 hours)", category: "Gamepasses", maxRobux: 699 },
  { name: "Race Rerolls", category: "Gamepasses", maxRobux: 75 },
  { name: "Refund Stats", category: "Gamepasses", maxRobux: 25 },

  // Perm Fruits
  { name: "Perm Dragon", category: "Perm Fruits", maxRobux: 3250 },
  { name: "Perm Dough", category: "Perm Fruits", maxRobux: 2850 },
  { name: "Perm Phoenix", category: "Perm Fruits", maxRobux: 3125 },
  { name: "Perm Pter", category: "Perm Fruits", maxRobux: 3275 },
  { name: "Perm Tree", category: "Perm Fruits", maxRobux: 2500 },
  { name: "Perm Gate", category: "Perm Fruits", maxRobux: 2350 },
  { name: "Perm Toy", category: "Perm Fruits", maxRobux: 3000 },
  { name: "Perm Melody", category: "Perm Fruits", maxRobux: 2750 },
  { name: "Perm Demon", category: "Perm Fruits", maxRobux: 2950 },
  { name: "Perm Quake", category: "Perm Fruits", maxRobux: 1800 },
  { name: "Perm Rumble", category: "Perm Fruits", maxRobux: 1500 },
  { name: "Perm Gas", category: "Perm Fruits", maxRobux: 1250 },
  { name: "Perm Control", category: "Perm Fruits", maxRobux: 1075 },
  { name: "Perm Light", category: "Perm Fruits", maxRobux: 1200 },
  { name: "Perm Snow", category: "Perm Fruits", maxRobux: 1350 },
  { name: "Perm Spino", category: "Perm Fruits", maxRobux: 1100 },
  { name: "Perm Gravity", category: "Perm Fruits", maxRobux: 1050 },
  { name: "Perm Buddha", category: "Perm Fruits", maxRobux: 975 },
  { name: "Perm Flame", category: "Perm Fruits", maxRobux: 1150 },
  { name: "Perm Magma", category: "Perm Fruits", maxRobux: 1150 },
  { name: "Perm Brachio", category: "Perm Fruits", maxRobux: 1075 },
  { name: "Perm Venom", category: "Perm Fruits", maxRobux: 975 },
  { name: "Perm Ice", category: "Perm Fruits", maxRobux: 1100 },
  { name: "Perm Dark", category: "Perm Fruits", maxRobux: 975 },
  { name: "Perm Love", category: "Perm Fruits", maxRobux: 600 },
  { name: "Perm Allo", category: "Perm Fruits", maxRobux: 1075 },
  { name: "Perm Rubber", category: "Perm Fruits", maxRobux: 725 },
  { name: "Perm Paw", category: "Perm Fruits", maxRobux: 300 },
  { name: "Perm Telekinesis", category: "Perm Fruits", maxRobux: 450 },
  { name: "Perm Bomb", category: "Perm Fruits", maxRobux: 125 }
].map(item => {
  const finItem = ITEMS.find(valueItem => valueItem.name.toLowerCase() === item.name.toLowerCase());
  return { ...item, finValue: finItem ? finItem.value : 0 };
}).filter(item => item.finValue > 0);


let DROP_ITEMS = [
  { name: "Shellreaper", chance: 0.1 },
  { name: "Draken Fangs", chance: 1.0 },
  { name: "Acrodagger", chance: 0.35 },
  { name: "Acromask", chance: 0.5 },
  { name: "Infernal Manehelm", chance: 0.1 },
  { name: "Abyssal Tyrant Armor", chance: 1 },
  { name: "Dragon Bones", chance: 2 },
  { name: "Sonata", chance: { Common: 1.0, Rare: 5.0, Epic: 10.0, Legendary: 20.0 } },
  { name: "Pyreblade", chance: 0.5 },
  { name: "Riptide Slayer", chance: 1.5 },
  { name: "Saber", chance: 15 },
  { name: "Abyssal Crab Axe", chance: 1 },
  { name: "Dawnbreaker", chance: 5 },
  { name: "Bloodshell Edge", chance: 0.2 },
  { name: "Drakenfyr Cape", chance: 2 },
  { name: "Galleon Ability", chance: 3 },
  { name: "Shark Galleon Ability", chance: 3 },
  { name: "Kraken Galleon Ability", chance: 3 },
  { name: "Ghost Galleon Ability", chance: 3 },
  { name: "Whale Galleon Ability", chance: 3 },
  { name: "Dragon Fang", chance: 2.5 },
  { name: "Royal Galleon Ability", chance: 3 }
];

let selectedDropItem = DROP_ITEMS[0];

let customRegionalPercent = null;


// Paste your Discord webhook URLs here. Each feedback type can go to a different channel.
const FEEDBACK_WEBHOOKS = {
  bug: "https://discord.com/api/webhooks/1521359374465892503/k_pppmZm_OfotjCweZ9XNf020UaP37cMydbqAD-w4ngECvvgUO2LsTDAP5eUP7My4abw",
  revaluation: "https://discord.com/api/webhooks/1521359485631725678/7VCVy5eQNomXCXXK33y4bv7BRrbw-h9uCf6iZNOZGhbwVY4wMzONsjJjMYkmddhmOMf7",
  suggestion: "https://discord.com/api/webhooks/1521359554745602194/MM8mO6jQAFPE4PgYI3U1NQA3oGX2d_okk5wvz3v2TaxpbJijJ2MXnL2uwHYuA7GFUVZv",
  update: "https://discord.com/api/webhooks/1521359623913996360/wkoRGSEowhl2Lsti4lxScZZkErDC_XIjf_7eeDSYfb_DxHAGsFmG77SBmYZrYwwGFc1s"
};

const GENERAL_ROLE_ID = "1521379287754604594";
const PRIORITY_ROLE_ID = "1521378897759961110";
const FEEDBACK_COOLDOWN_MS = 60 * 1000;
const FEEDBACK_MAX_PER_HOUR = 5;
const FEEDBACK_HISTORY_KEY = "kingLegacyFeedbackHistory";

const INFO_REQUEST_WEBHOOK = "https://discord.com/api/webhooks/1522074534935658587/zV580X9eovjKkQZxK-3O6IrgWpNulC0iwMb3X5w6tciJ-GY6jh0gnpaqPGmhLnpO6HEB";
const INFO_REQUEST_ROLE_IDS = ["1522074986494558330", "1521379287754604594"];
const INFO_SHEETS_FILE = "info-sheets";
const TIER_LIST_CONFIG_FILE = "values/tier-lists.json";
let infoSheets = [];
let tierListConfig = {};
let infoRequestFiles = [];

const FEEDBACK_TYPE_INFO = {
  bug: {
    label: "Bug Report",
    emoji: "🐞",
    color: 0xff5c7a,
    description: "Report anything on the site that is broken, glitching, displaying incorrectly, or not working the way it should."
  },
  revaluation: {
    label: "Revaluation",
    emoji: "📈",
    color: 0xffe066,
    description: "Submit value changes you believe should be made, including items you think are overvalued, undervalued, or outdated."
  },
  suggestion: {
    label: "Suggestion",
    emoji: "💡",
    color: 0x36d4ff,
    description: "Submit any suggestions you might have for updates you'd like to see added to this tool in the future."
  },
  update: {
    label: "Update Request",
    emoji: "🔄",
    color: 0x51e28a,
    description: "Request a larger site update, new items, new calculator features, or changes after a King Legacy update."
  }
};

const state = {
  your: {},
  their: {}
};

const els = {
  yourTotal: document.getElementById("yourTotal"),
  theirTotal: document.getElementById("theirTotal"),
  tradeResult: document.getElementById("tradeResult"),
  differenceText: document.getElementById("differenceText"),
  resultBox: document.getElementById("resultBox"),
  yourItems: document.getElementById("yourItems"),
  theirItems: document.getElementById("theirItems"),
  searchInput: document.getElementById("searchInput"),
  categoryFilter: document.getElementById("categoryFilter"),
  sortFilter: document.getElementById("sortFilter"),
  itemsContainer: document.getElementById("itemsContainer"),
  template: document.getElementById("itemTemplate"),
  themeBtn: document.getElementById("themeBtn"),
  tradeNavBtn: document.getElementById("tradeNavBtn"),
  robuxNavBtn: document.getElementById("robuxNavBtn"),
  dropNavBtn: document.getElementById("dropNavBtn"),
  infoNavBtn: document.getElementById("infoNavBtn"),
  tierNavBtn: document.getElementById("tierNavBtn"),
  feedbackNavBtn: document.getElementById("feedbackNavBtn"),
  sideFeedbackBtn: document.getElementById("sideFeedbackBtn"),
  feedbackSidePanel: document.getElementById("feedbackSidePanel"),
  openInfoRequestBtn: document.getElementById("openInfoRequestBtn"),
  officialSideLinks: document.querySelector(".official-side-links"),
  calculatorView: document.getElementById("calculatorView"),
  robuxView: document.getElementById("robuxView"),
  dropView: document.getElementById("dropView"),
  infoView: document.getElementById("infoView"),
  tierView: document.getElementById("tierView"),
  feedbackView: document.getElementById("feedbackView"),
  robuxItemsContainer: document.getElementById("robuxItemsContainer"),
  siteTitle: document.getElementById("siteTitle"),
  siteSubtitle: document.getElementById("siteSubtitle"),
  conquerorPriceInput: document.getElementById("conquerorPriceInput"),
  regionalGoBtn: document.getElementById("regionalGoBtn"),
  regionalResetBtn: document.getElementById("regionalResetBtn"),
  regionalPercentText: document.getElementById("regionalPercentText"),
  dropHome: document.getElementById("dropHome"),
  dropCalc: document.getElementById("dropCalc"),
  dropItemsContainer: document.getElementById("dropItemsContainer"),
  dropSearchInput: document.getElementById("dropSearchInput"),
  dropBackBtn: document.getElementById("dropBackBtn"),
  dropResetBtn: document.getElementById("dropResetBtn"),
  dropSelectedName: document.getElementById("dropSelectedName"),
  dropOriginalChance: document.getElementById("dropOriginalChance"),
  dropTwoX: document.getElementById("dropTwoX"),
  dropPassiveBoost: document.getElementById("dropPassiveBoost"),
  dropExtraBoost: document.getElementById("dropExtraBoost"),
  dropPassiveLabel: document.getElementById("dropPassiveLabel"),
  dropExtraLabel: document.getElementById("dropExtraLabel"),
  dropPassiveLevel: document.getElementById("dropPassiveLevel"),
  dropResult: document.getElementById("dropResult"),
  dropExpected: document.getElementById("dropExpected"),
  dropMultiplier: document.getElementById("dropMultiplier"),
  feedbackName: document.getElementById("feedbackName"),
  feedbackTime: document.getElementById("feedbackTime"),
  feedbackType: document.getElementById("feedbackType"),
  feedbackTypeDescription: document.getElementById("feedbackTypeDescription"),
  feedbackMessage: document.getElementById("feedbackMessage"),
  feedbackWordCount: document.getElementById("feedbackWordCount"),
  feedbackStatus: document.getElementById("feedbackStatus"),
  feedbackSubmitBtn: document.getElementById("feedbackSubmitBtn"),
  infoBoard: document.getElementById("infoBoard"),
  infoEmpty: document.getElementById("infoEmpty"),
  openInfoRequestBtn: document.getElementById("openInfoRequestBtn"),
  infoRequestModal: document.getElementById("infoRequestModal"),
  closeInfoRequestBtn: document.getElementById("closeInfoRequestBtn"),
  infoRequestName: document.getElementById("infoRequestName"),
  infoRequestTime: document.getElementById("infoRequestTime"),
  infoRequestCategory: document.getElementById("infoRequestCategory"),
  infoNewCategoryRow: document.getElementById("infoNewCategoryRow"),
  infoRequestNewCategory: document.getElementById("infoRequestNewCategory"),
  infoRequestInformation: document.getElementById("infoRequestInformation"),
  infoRequestWordCount: document.getElementById("infoRequestWordCount"),
  infoMediaSource: document.getElementById("infoMediaSource"),
  infoMediaUrl: document.getElementById("infoMediaUrl"),
  infoDropZone: document.getElementById("infoDropZone"),
  infoMediaFiles: document.getElementById("infoMediaFiles"),
  infoSelectedFiles: document.getElementById("infoSelectedFiles"),
  infoRequestStatus: document.getElementById("infoRequestStatus"),
  infoRequestSubmitBtn: document.getElementById("infoRequestSubmitBtn"),
  infoDetailModal: document.getElementById("infoDetailModal"),
  closeInfoDetailBtn: document.getElementById("closeInfoDetailBtn"),
  infoDetailTitle: document.getElementById("infoDetailTitle"),
  infoDetailCategory: document.getElementById("infoDetailCategory"),
  infoDetailInformation: document.getElementById("infoDetailInformation"),
  infoDetailMedia: document.getElementById("infoDetailMedia"),
  infoDetailMeta: document.getElementById("infoDetailMeta"),
  tierModeSelect: document.getElementById("tierModeSelect"),
  tierCategorySelect: document.getElementById("tierCategorySelect"),
  tierDisplayTitle: document.getElementById("tierDisplayTitle"),
  tierDisplayPath: document.getElementById("tierDisplayPath"),
  tierListImage: document.getElementById("tierListImage"),
  tierMissingText: document.getElementById("tierMissingText")
};


async function loadValueFiles() {
  try {
    const [itemsResponse, robuxResponse, dropsResponse] = await Promise.all([
      fetch("values/items.json", { cache: "no-store" }),
      fetch("values/robux-values.json", { cache: "no-store" }),
      fetch("values/drop-values.json", { cache: "no-store" })
    ]);

    if (itemsResponse.ok) {
      const loadedItems = await itemsResponse.json();
      if (Array.isArray(loadedItems) && loadedItems.length) ITEMS = loadedItems;
    }

    if (robuxResponse.ok) {
      const loadedRobuxItems = await robuxResponse.json();
      if (Array.isArray(loadedRobuxItems) && loadedRobuxItems.length) {
        ROBUX_ITEMS = loadedRobuxItems.map(item => {
          const finItem = ITEMS.find(valueItem => valueItem.name.toLowerCase() === item.name.toLowerCase());
          return { ...item, finValue: item.finValue || (finItem ? finItem.value : 0) };
        }).filter(item => item.finValue > 0);
      }
    }

    if (dropsResponse.ok) {
      const loadedDropItems = await dropsResponse.json();
      if (Array.isArray(loadedDropItems) && loadedDropItems.length) {
        DROP_ITEMS = loadedDropItems;
        selectedDropItem = DROP_ITEMS[0];
      }
    }
  } catch (error) {
    console.warn("Using built-in values because external value files could not be loaded.", error);
  }
}

function formatValue(value) {
  if (Number.isInteger(value)) return String(value);
  if (value >= 1) return String(Number(value.toFixed(2)));
  return String(Number(value.toFixed(4)));
}

function getItem(name) {
  return ITEMS.find(item => item.name === name);
}

function addItem(side, itemName) {
  state[side][itemName] = (state[side][itemName] || 0) + 1;
  renderSelected();
renderDropItems();
loadInfoSheets();
showCalculatorView();
}

function changeQty(side, itemName, delta) {
  state[side][itemName] = (state[side][itemName] || 0) + delta;
  if (state[side][itemName] <= 0) delete state[side][itemName];
  renderSelected();
renderDropItems();
loadInfoSheets();
showCalculatorView();
}

function setQty(side, itemName, value) {
  const qty = Math.floor(Number(value));

  if (!Number.isFinite(qty) || qty <= 0) {
    delete state[side][itemName];
  } else {
    state[side][itemName] = qty;
  }

  renderSelected();
renderDropItems();
loadInfoSheets();
showCalculatorView();
}

function sideTotal(side) {
  return Object.entries(state[side]).reduce((total, [name, qty]) => {
    const item = getItem(name);
    return total + (item ? item.value * qty : 0);
  }, 0);
}

function renderSelectedList(side, container) {
  const entries = Object.entries(state[side]);
  container.innerHTML = "";

  if (!entries.length) {
    container.className = "selected-list empty";
    container.textContent = "No items added.";
    return;
  }

  container.className = "selected-list";
  entries.forEach(([name, qty]) => {
    const item = getItem(name);
    if (!item) return;

    const row = document.createElement("div");
    row.className = "selected-item";
    row.innerHTML = `
      <div>
        <strong>${item.name}</strong><br>
        <small>${item.category} • ${formatValue(item.value)} fins each</small>
      </div>
      <div class="qty-controls">
        <button aria-label="decrease">−</button>
        <input class="qty-input" type="number" min="1" step="1" value="${qty}" aria-label="quantity for ${item.name}">
        <button aria-label="increase">+</button>
      </div>
      <div>
        <strong>${formatValue(item.value * qty)}</strong> fins<br>
        <button class="remove-btn">Remove</button>
      </div>
    `;

    const [minusBtn, plusBtn] = row.querySelectorAll(".qty-controls button");
    const qtyInput = row.querySelector(".qty-input");

    minusBtn.addEventListener("click", () => changeQty(side, name, -1));
    plusBtn.addEventListener("click", () => changeQty(side, name, 1));
    qtyInput.addEventListener("change", () => setQty(side, name, qtyInput.value));
    qtyInput.addEventListener("keydown", event => {
      if (event.key === "Enter") qtyInput.blur();
    });
    row.querySelector(".remove-btn").addEventListener("click", () => {
      delete state[side][name];
      renderSelected();
renderDropItems();
loadInfoSheets();
showCalculatorView();
    });

    container.appendChild(row);
  });
}

function renderSelected() {
  const your = sideTotal("your");
  const their = sideTotal("their");
  const diff = your - their;

  els.yourTotal.textContent = formatValue(your);
  els.theirTotal.textContent = formatValue(their);
  els.differenceText.textContent = `Difference: ${formatValue(Math.abs(diff))} fins`;

  els.resultBox.classList.remove("win", "lose", "even");
  if (Math.abs(diff) < 0.00001) {
    els.tradeResult.textContent = "Even";
    els.resultBox.classList.add("even");
  } else if (diff < 0) {
    els.tradeResult.textContent = "Win";
    els.resultBox.classList.add("win");
  } else {
    els.tradeResult.textContent = "Lose";
    els.resultBox.classList.add("lose");
  }

  renderSelectedList("your", els.yourItems);
  renderSelectedList("their", els.theirItems);
}

function filteredItems() {
  const query = els.searchInput.value.trim().toLowerCase();
  const category = els.categoryFilter.value;
  const sort = els.sortFilter.value;

  let items = ITEMS.filter(item => {
    const matchesQuery = item.name.toLowerCase().includes(query);
    const matchesCategory = category === "All" || item.category === category;
    return matchesQuery && matchesCategory;
  });

  if (sort === "value-desc") items.sort((a, b) => b.value - a.value);
  if (sort === "value-asc") items.sort((a, b) => a.value - b.value);
  if (sort === "name") items.sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "category") items.sort((a, b) => a.category.localeCompare(b.category) || b.value - a.value);

  return items;
}

function renderItems() {
  const items = filteredItems();
  els.itemsContainer.innerHTML = "";

  if (!items.length) {
    els.itemsContainer.innerHTML = `<p class="category-title">No items found.</p>`;
    return;
  }

  const grouped = items.reduce((acc, item) => {
    acc[item.category] ||= [];
    acc[item.category].push(item);
    return acc;
  }, {});

  Object.entries(grouped).forEach(([category, categoryItems]) => {
    const title = document.createElement("h2");
    title.className = "category-title";
    title.textContent = category;
    els.itemsContainer.appendChild(title);

    const grid = document.createElement("div");
    grid.className = "item-grid";

    categoryItems.forEach(item => {
      const node = els.template.content.cloneNode(true);
      const card = node.querySelector(".item-card");
      card.querySelector("h3").textContent = item.name;
      card.querySelector("p").textContent = item.note
        ? `${formatValue(item.value)} fins each • ${item.note}`
        : `${formatValue(item.value)} fins`;
      card.querySelector(".add-your").addEventListener("click", () => addItem("your", item.name));
      card.querySelector(".add-their").addEventListener("click", () => addItem("their", item.name));
      grid.appendChild(node);
    });

    els.itemsContainer.appendChild(grid);
  });
}

function setupFilters() {
  const categories = [...new Set(ITEMS.map(item => item.category))];
  categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    els.categoryFilter.appendChild(option);
  });

  els.searchInput.addEventListener("input", renderItems);
  els.categoryFilter.addEventListener("change", renderItems);
  els.sortFilter.addEventListener("change", renderItems);
}

document.querySelectorAll(".clear-btn").forEach(button => {
  button.addEventListener("click", () => {
    state[button.dataset.side] = {};
    renderSelected();
renderDropItems();
loadInfoSheets();
showCalculatorView();
  });
});

els.themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
});


function formatRobux(value) {
  return Number(value.toFixed(2)).toLocaleString(undefined, { maximumFractionDigits: 2 });
}

function makeRobuxColumn(label, robux, finValue, extraClass = "") {
  const ratio = robux / finValue;
  return `
    <div class="robux-column ${extraClass}">
      <h4>${label}</h4>
      <p><span>Robux value:</span><strong>${formatRobux(robux)}</strong></p>
      <p><span>Fin value:</span><strong>${formatValue(finValue)}</strong></p>
      <p><span>Robux/fin value:</span><strong>${formatRobux(ratio)}</strong></p>
    </div>
  `;
}

function renderRobuxItems() {
  const categoryOrder = ["Gamepasses", "Perm Fruits", "Bundles"];
  els.robuxItemsContainer.innerHTML = "";

  categoryOrder.forEach(category => {
    const categoryItems = ROBUX_ITEMS
      .filter(item => item.category === category)
      .sort((a, b) => (a.maxRobux / a.finValue) - (b.maxRobux / b.finValue));

    if (!categoryItems.length) return;

    const section = document.createElement("section");
    section.className = "robux-category-section";

    const heading = document.createElement("h2");
    heading.className = "robux-category-heading";
    heading.textContent = category;
    section.appendChild(heading);

    categoryItems.forEach(item => {
      const card = document.createElement("article");
      card.className = "robux-card";

      const columns = customRegionalPercent === null
        ? [
            makeRobuxColumn("Max regional", item.maxRobux, item.finValue),
            makeRobuxColumn("50% regional", item.maxRobux * 0.5, item.finValue),
            makeRobuxColumn("30% regional", item.maxRobux * 0.3, item.finValue)
          ].join("")
        : makeRobuxColumn(`${formatRobux(customRegionalPercent)}% regional`, item.maxRobux * (customRegionalPercent / 100), item.finValue, "single-regional-column");

      card.innerHTML = `
        <div class="robux-card-title">
          <h3>${item.name}</h3>
          <span>${item.category}</span>
        </div>
        <div class="robux-columns">${columns}</div>
      `;

      section.appendChild(card);
    });

    els.robuxItemsContainer.appendChild(section);
  });
}

function tierKey(mode, category) {
  return `${mode}/${category}`;
}

function defaultTierPath(mode, category) {
  return `assets/tier-lists/${mode}/${category}/tier-list.png`;
}

async function loadTierListConfig() {
  try {
    const response = await fetch(TIER_LIST_CONFIG_FILE, { cache: "no-store" });
    if (!response.ok) throw new Error("No tier list config found.");
    const loadedConfig = await response.json();
    if (loadedConfig && typeof loadedConfig === "object") tierListConfig = loadedConfig;
  } catch (error) {
    tierListConfig = {};
  }
}

function updateTierListDisplay() {
  if (!els.tierModeSelect || !els.tierCategorySelect || !els.tierListImage) return;

  const mode = els.tierModeSelect.value || "PvP";
  const category = els.tierCategorySelect.value || "fruits";
  const label = category
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const configKey = tierKey(mode, category);
  const imagePath = tierListConfig[configKey] || defaultTierPath(mode, category);

  els.tierDisplayTitle.textContent = `${mode} ${label}`;
  els.tierDisplayPath.textContent = imagePath;
  els.tierMissingText.classList.add("hidden-view");
  els.tierListImage.classList.add("hidden-view");
  els.tierListImage.removeAttribute("src");

  els.tierListImage.onload = () => {
    els.tierMissingText.classList.add("hidden-view");
    els.tierListImage.classList.remove("hidden-view");
  };

  els.tierListImage.onerror = () => {
    els.tierListImage.classList.add("hidden-view");
    els.tierMissingText.classList.remove("hidden-view");
    els.tierMissingText.textContent = `No tier list image found for ${mode} ${label}. Add one at: ${imagePath}`;
  };

  els.tierListImage.alt = `${mode} ${label} tier list`;
  els.tierListImage.src = imagePath;
}

function setActiveNav(active) {
  [els.tradeNavBtn, els.robuxNavBtn, els.dropNavBtn, els.infoNavBtn, els.tierNavBtn, els.feedbackNavBtn].forEach(btn => btn.classList.remove("active-nav"));
  if (active === "trade") els.tradeNavBtn.classList.add("active-nav");
  if (active === "robux") els.robuxNavBtn.classList.add("active-nav");
  if (active === "drop") els.dropNavBtn.classList.add("active-nav");
  if (active === "info") els.infoNavBtn.classList.add("active-nav");
  if (active === "tier") els.tierNavBtn.classList.add("active-nav");
  if (active === "feedback") els.feedbackNavBtn.classList.add("active-nav");
}

function setInfoPlusVisible(isVisible) {
  if (els.openInfoRequestBtn) {
    els.openInfoRequestBtn.style.display = isVisible ? "inline-flex" : "none";
  }
  if (els.officialSideLinks) {
    els.officialSideLinks.classList.toggle("show-info-plus", Boolean(isVisible));
  }
}

function showCalculatorView() {
  els.calculatorView.classList.remove("hidden-view");
  els.robuxView.classList.add("hidden-view");
  els.dropView.classList.add("hidden-view");
  els.infoView.classList.add("hidden-view");
  els.tierView.classList.add("hidden-view");
  els.feedbackView.classList.add("hidden-view");
  els.feedbackSidePanel.classList.remove("hidden-view");
  setInfoPlusVisible(false);
  els.siteTitle.textContent = "King Legacy Trade Calculator";
  els.siteSubtitle.textContent = "Compare both sides of a trade using custom Fin values.";
  document.title = "King Legacy Trade Calculator";
  setActiveNav("trade");
}

function showRobuxView() {
  setInfoPlusVisible(false);
  els.calculatorView.classList.add("hidden-view");
  els.robuxView.classList.remove("hidden-view");
  els.dropView.classList.add("hidden-view");
  els.infoView.classList.add("hidden-view");
  els.tierView.classList.add("hidden-view");
  els.feedbackView.classList.add("hidden-view");
  els.feedbackSidePanel.classList.remove("hidden-view");
  els.siteTitle.textContent = "King Legacy Robux Per Fin Calculator";
  els.siteSubtitle.textContent = "Calculates the amount of Robux required to obtain 1 Fin through trading.";
  document.title = "King Legacy Robux Per Fin Calculator";
  setActiveNav("robux");
  renderRobuxItems();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showDropView() {
  setInfoPlusVisible(false);
  els.calculatorView.classList.add("hidden-view");
  els.robuxView.classList.add("hidden-view");
  els.dropView.classList.remove("hidden-view");
  els.infoView.classList.add("hidden-view");
  els.tierView.classList.add("hidden-view");
  els.feedbackView.classList.add("hidden-view");
  els.feedbackSidePanel.classList.remove("hidden-view");
  els.siteTitle.textContent = "King Legacy Drop Boost Helper";
  els.siteSubtitle.textContent = "Calculate final drop chances using gamepass, passive, and extra drop boosts.";
  document.title = "King Legacy Drop Boost Helper";
  setActiveNav("drop");
  renderDropItems();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showInfoView() {
  setInfoPlusVisible(true);
  els.calculatorView.classList.add("hidden-view");
  els.robuxView.classList.add("hidden-view");
  els.dropView.classList.add("hidden-view");
  els.infoView.classList.remove("hidden-view");
  els.tierView.classList.add("hidden-view");
  els.feedbackView.classList.add("hidden-view");
  els.feedbackSidePanel.classList.remove("hidden-view");
  els.siteTitle.textContent = "King Legacy Info Sheets";
  els.siteSubtitle.textContent = "Community-submitted King Legacy notes, tech, bugs, glitches, and guides.";
  document.title = "King Legacy Info Sheets";
  setActiveNav("info");
  renderInfoSheets();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showTierView() {
  setInfoPlusVisible(false);
  els.calculatorView.classList.add("hidden-view");
  els.robuxView.classList.add("hidden-view");
  els.dropView.classList.add("hidden-view");
  els.infoView.classList.add("hidden-view");
  els.tierView.classList.remove("hidden-view");
  els.feedbackView.classList.add("hidden-view");
  els.feedbackSidePanel.classList.remove("hidden-view");
  els.siteTitle.textContent = "King Legacy Tier Lists";
  els.siteSubtitle.textContent = "Browse PvP and PvE tier lists for fruits, swords, fighting styles, and passives.";
  document.title = "King Legacy Tier Lists";
  setActiveNav("tier");
  updateTierListDisplay();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showFeedbackView() {
  setInfoPlusVisible(false);
  els.calculatorView.classList.add("hidden-view");
  els.robuxView.classList.add("hidden-view");
  els.dropView.classList.add("hidden-view");
  els.infoView.classList.add("hidden-view");
  els.tierView.classList.add("hidden-view");
  els.feedbackView.classList.remove("hidden-view");
  els.feedbackSidePanel.classList.add("hidden-view");
  els.siteTitle.textContent = "King Legacy Feedback";
  els.siteSubtitle.textContent = "Submit bug reports, revaluations, suggestions, or update requests.";
  document.title = "King Legacy Feedback";
  setActiveNav("feedback");
  updateFeedbackTypeDescription();
  if (!els.feedbackTime.value) els.feedbackTime.value = new Date().toLocaleString();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function parseInfoSheetsText(text) {
  return text
    .split(/\n\s*\n/g)
    .map(chunk => chunk.trim())
    .filter(chunk => chunk && !chunk.toUpperCase().startsWith("FORMAT:"))
    .map(chunk => {
      const entry = {};
      chunk.split(/\r?\n/).forEach(line => {
        const match = line.match(/^([1-6])\s*-\s*(.*)$/);
        if (!match) return;
        const value = match[2].trim().replace(/^"|"$/g, "");
        if (match[1] === "1") entry.category = value;
        if (match[1] === "2") entry.name = value;
        if (match[1] === "3") entry.information = value;
        if (match[1] === "4") entry.media = value;
        if (match[1] === "5") entry.op = value;
        if (match[1] === "6") entry.date = value;
      });
      return entry;
    })
    .filter(entry => entry.category && entry.name && entry.information);
}

async function loadInfoSheets() {
  try {
    const response = await fetch(`${INFO_SHEETS_FILE}?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error("Info sheet file not found.");
    const text = await response.text();
    infoSheets = parseInfoSheetsText(text);
  } catch (error) {
    infoSheets = [];
  }
  populateInfoCategoryOptions();
  renderInfoSheets();
}

function getInfoMediaList(media) {
  if (!media || media.toLowerCase() === "none") return [];
  return String(media)
    .split(/[,|]/g)
    .map(item => item.trim())
    .filter(Boolean);
}

function isInfoImage(media) {
  return /\.(png|jpe?g|jfif|gif|webp|svg)$/i.test(media.toLowerCase());
}

function isInfoVideo(media) {
  return /\.(mp4|webm|ogg|mov)$/i.test(media.toLowerCase());
}

function renderInfoMediaItem(media, options = {}) {
  const safeMedia = escapeHtml(media);
  const compact = Boolean(options.compact);
  if (isInfoImage(media)) {
    return `<div class="info-media"><img src="${safeMedia}" alt="Info sheet media" loading="lazy"></div>`;
  }
  if (isInfoVideo(media)) {
    return `<div class="info-media"><video src="${safeMedia}" ${compact ? "" : "controls"}></video></div>`;
  }
  return `<div class="info-media"><a href="${safeMedia}" target="_blank" rel="noopener noreferrer">View media/source</a></div>`;
}

function renderInfoMedia(media, options = {}) {
  const items = getInfoMediaList(media);
  if (!items.length) return "";
  const toRender = options.firstOnly ? items.slice(0, 1) : items;
  return toRender.map(item => renderInfoMediaItem(item, options)).join("");
}

function truncateInfoText(text, maxLength = 30) {
  const clean = String(text || "").replace(/\s+/g, " ").trim();
  if (clean.length <= maxLength) return clean;
  return `${clean.slice(0, maxLength).trim()}...`;
}

function openInfoDetail(entry) {
  if (!els.infoDetailModal) return;
  els.infoDetailTitle.textContent = entry.name || "Info Sheet";
  els.infoDetailCategory.textContent = entry.category || "Uncategorized";
  els.infoDetailInformation.textContent = entry.information || "No information listed.";
  els.infoDetailMedia.innerHTML = renderInfoMedia(entry.media);
  els.infoDetailMeta.innerHTML = `
    <span>OP: ${escapeHtml(entry.op || "No original poster")}</span>
    <span>Date: ${escapeHtml(entry.date || "No date listed")}</span>
  `;
  els.infoDetailModal.classList.remove("hidden-view");
  els.infoDetailModal.setAttribute("aria-hidden", "false");
}

function closeInfoDetail() {
  if (!els.infoDetailModal) return;
  els.infoDetailModal.classList.add("hidden-view");
  els.infoDetailModal.setAttribute("aria-hidden", "true");
}

function renderInfoSheets() {
  if (!els.infoBoard || !els.infoEmpty) return;
  els.infoBoard.innerHTML = "";
  const hasInfo = infoSheets.length > 0;
  els.infoBoard.classList.toggle("hidden-view", !hasInfo);
  els.infoEmpty.classList.toggle("hidden-view", hasInfo);
  if (!hasInfo) return;

  const grouped = infoSheets.reduce((acc, item) => {
    const category = item.category || "Uncategorized";
    acc[category] ||= [];
    acc[category].push(item);
    return acc;
  }, {});

  Object.entries(grouped).forEach(([category, entries]) => {
    const column = document.createElement("section");
    column.className = "info-column";
    column.innerHTML = `<h3>${escapeHtml(category)}</h3>`;

    entries.forEach((entry, index) => {
      const card = document.createElement("article");
      card.className = `info-sheet-card ${index === 0 ? "is-expanded" : "is-minimized"}`;
      card.tabIndex = 0;
      card.innerHTML = `
        <h4>${escapeHtml(entry.name)}</h4>
        <div class="info-card-preview">
          <p>${escapeHtml(truncateInfoText(entry.information, 30))}</p>
          ${renderInfoMedia(entry.media, { firstOnly: true, compact: true })}
          <div class="info-card-meta">
            <span>OP: ${escapeHtml(entry.op || "No original poster")}</span>
            <span>Date: ${escapeHtml(entry.date || "No date listed")}</span>
          </div>
        </div>
      `;

      const expandThisCard = () => {
        column.querySelectorAll(".info-sheet-card").forEach(otherCard => {
          otherCard.classList.remove("is-expanded");
          otherCard.classList.add("is-minimized");
        });
        card.classList.remove("is-minimized");
        card.classList.add("is-expanded");
      };

      card.addEventListener("mouseenter", expandThisCard);
      card.addEventListener("focus", expandThisCard);
      card.addEventListener("click", () => openInfoDetail(entry));
      card.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openInfoDetail(entry);
        }
      });

      column.appendChild(card);
    });

    els.infoBoard.appendChild(column);
  });
}

function populateInfoCategoryOptions() {
  if (!els.infoRequestCategory) return;
  const current = els.infoRequestCategory.value;
  const categories = [...new Set(infoSheets.map(item => item.category).filter(Boolean))].sort((a, b) => a.localeCompare(b));
  els.infoRequestCategory.innerHTML = "";
  categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    els.infoRequestCategory.appendChild(option);
  });
  const newOption = document.createElement("option");
  newOption.value = "new-category";
  newOption.textContent = "New Category";
  els.infoRequestCategory.appendChild(newOption);
  els.infoRequestCategory.value = categories.includes(current) ? current : "new-category";
  updateInfoNewCategoryVisibility();
}

function updateInfoNewCategoryVisibility() {
  const isNew = els.infoRequestCategory.value === "new-category";
  els.infoNewCategoryRow.classList.toggle("hidden-view", !isNew);
}

function openInfoRequestModal() {
  els.infoRequestModal.classList.remove("hidden-view");
  els.infoRequestModal.setAttribute("aria-hidden", "false");
  if (!els.infoRequestTime.value) els.infoRequestTime.value = new Date().toLocaleString();
  updateInfoRequestWordCount();
  updateInfoMediaSource();
}

function closeInfoRequestModal() {
  els.infoRequestModal.classList.add("hidden-view");
  els.infoRequestModal.setAttribute("aria-hidden", "true");
  setInfoRequestStatus("", "");
}

function countInfoRequestWords() {
  return els.infoRequestInformation.value.trim().split(/\s+/).filter(Boolean).length;
}

function updateInfoRequestWordCount() {
  let words = els.infoRequestInformation.value.trim().split(/\s+/).filter(Boolean);
  if (words.length > 500) {
    els.infoRequestInformation.value = words.slice(0, 500).join(" ");
    words = els.infoRequestInformation.value.trim().split(/\s+/).filter(Boolean);
  }
  els.infoRequestWordCount.textContent = `${words.length} / 500 words`;
}

function updateInfoMediaSource() {
  const isDevice = els.infoMediaSource.value === "device";
  els.infoDropZone.classList.toggle("hidden-view", !isDevice);
  els.infoMediaUrl.classList.toggle("hidden-view", isDevice);
  if (!isDevice) {
    const sourceName = els.infoMediaSource.options[els.infoMediaSource.selectedIndex].textContent;
    els.infoMediaUrl.placeholder = `Paste ${sourceName} here`;
  }
}

function updateSelectedInfoFiles(files) {
  infoRequestFiles = Array.from(files || []).slice(0, 3);
  els.infoSelectedFiles.textContent = infoRequestFiles.length
    ? infoRequestFiles.map(file => file.name).join(", ")
    : "No files selected.";
}

function setInfoRequestStatus(message, type = "") {
  els.infoRequestStatus.textContent = message;
  els.infoRequestStatus.className = `feedback-status ${type}`.trim();
}

async function submitInfoRequest() {
  const selectedCategory = els.infoRequestCategory.value;
  const category = selectedCategory === "new-category"
    ? els.infoRequestNewCategory.value.trim()
    : selectedCategory;
  const name = els.infoRequestName.value.trim() || "Anonymous / no credit requested";
  const time = els.infoRequestTime.value.trim() || new Date().toLocaleString();
  const information = els.infoRequestInformation.value.trim();
  const mediaSource = els.infoMediaSource.value;
  const mediaUrl = els.infoMediaUrl.value.trim();

  if (!category) {
    setInfoRequestStatus("Please enter a category.", "error");
    return;
  }

  if (!information) {
    setInfoRequestStatus("Please type the information before submitting.", "error");
    return;
  }

  if (countInfoRequestWords() > 500) {
    setInfoRequestStatus("Please keep the information at 500 words or less.", "error");
    return;
  }

  const pingText = INFO_REQUEST_ROLE_IDS.map(roleId => `<@&${roleId}>`).join(" ");
  const fields = [
    { name: "Name/Username", value: name, inline: true },
    { name: "Time and Date", value: time, inline: true },
    { name: "Category", value: category, inline: true },
    { name: "Information", value: information.slice(0, 3900) }
  ];

  if (mediaSource !== "device" && mediaUrl) {
    fields.push({ name: "Media Link", value: mediaUrl.slice(0, 1000) });
  }

  const payload = {
    username: "King Legacy Info Sheets",
    content: pingText,
    allowed_mentions: { roles: INFO_REQUEST_ROLE_IDS },
    embeds: [{
      title: "📚 Info Sheet Submission",
      color: 0x36d4ff,
      fields,
      footer: { text: "Sent from King Legacy Toolkit Info Sheets" },
      timestamp: new Date().toISOString()
    }]
  };

  els.infoRequestSubmitBtn.disabled = true;
  els.infoRequestSubmitBtn.textContent = "Sending...";
  setInfoRequestStatus("Sending info request...", "");

  try {
    let response;
    if (mediaSource === "device" && infoRequestFiles.length) {
      const formData = new FormData();
      formData.append("payload_json", JSON.stringify(payload));
      infoRequestFiles.forEach((file, index) => formData.append(`files[${index}]`, file, file.name));
      response = await fetch(INFO_REQUEST_WEBHOOK, { method: "POST", body: formData });
    } else {
      response = await fetch(INFO_REQUEST_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
    }

    if (!response.ok) throw new Error("Discord rejected the info request.");

    els.infoRequestInformation.value = "";
    els.infoRequestNewCategory.value = "";
    els.infoMediaUrl.value = "";
    els.infoMediaFiles.value = "";
    updateSelectedInfoFiles([]);
    updateInfoRequestWordCount();
    closeInfoRequestModal();
  } catch (error) {
    setInfoRequestStatus("Info request failed to send. Check the webhook or uploaded file size.", "error");
  } finally {
    els.infoRequestSubmitBtn.disabled = false;
    els.infoRequestSubmitBtn.textContent = "Submit!";
  }
}

function updateFeedbackTypeDescription() {
  const type = els.feedbackType.value;
  els.feedbackTypeDescription.textContent = FEEDBACK_TYPE_INFO[type]?.description || "";
}

function getFeedbackHistory() {
  const now = Date.now();

  try {
    const history = JSON.parse(localStorage.getItem(FEEDBACK_HISTORY_KEY) || "[]");
    return history
      .filter(time => Number.isFinite(Number(time)))
      .map(Number)
      .filter(time => now - time < 60 * 60 * 1000)
      .sort((a, b) => a - b);
  } catch (error) {
    localStorage.removeItem(FEEDBACK_HISTORY_KEY);
    return [];
  }
}

function saveFeedbackHistory(history) {
  localStorage.setItem(FEEDBACK_HISTORY_KEY, JSON.stringify(history));
}

function canSubmitFeedback() {
  const now = Date.now();
  const history = getFeedbackHistory();
  saveFeedbackHistory(history);

  const lastSubmit = history[history.length - 1] || 0;

  if (now - lastSubmit < FEEDBACK_COOLDOWN_MS) {
    const secondsLeft = Math.ceil((FEEDBACK_COOLDOWN_MS - (now - lastSubmit)) / 1000);
    return { ok: false, message: `Please wait ${secondsLeft}s before sending feedback again.` };
  }

  if (history.length >= FEEDBACK_MAX_PER_HOUR) {
    return { ok: false, message: "You can only send 5 feedback messages per hour." };
  }

  return { ok: true };
}

function recordFeedbackSubmit() {
  const history = getFeedbackHistory();
  history.push(Date.now());
  saveFeedbackHistory(history);
}

function countFeedbackWords() {
  return els.feedbackMessage.value.trim().split(/\s+/).filter(Boolean).length;
}

function updateFeedbackWordCount() {
  let words = els.feedbackMessage.value.trim().split(/\s+/).filter(Boolean);
  if (words.length > 500) {
    els.feedbackMessage.value = words.slice(0, 500).join(" ");
    words = els.feedbackMessage.value.trim().split(/\s+/).filter(Boolean);
  }
  els.feedbackWordCount.textContent = `${words.length} / 500 words`;
}

function setFeedbackStatus(message, type = "") {
  els.feedbackStatus.textContent = message;
  els.feedbackStatus.className = `feedback-status ${type}`.trim();
}

async function submitFeedback() {
  const type = els.feedbackType.value;
  const info = FEEDBACK_TYPE_INFO[type] || FEEDBACK_TYPE_INFO.bug;
  const webhookUrl = FEEDBACK_WEBHOOKS[type];
  const name = els.feedbackName.value.trim() || "Anonymous";
  const time = els.feedbackTime.value.trim() || new Date().toLocaleString();
  const message = els.feedbackMessage.value.trim();

  if (!message) {
    setFeedbackStatus("Please type your feedback before submitting.", "error");
    return;
  }

  if (countFeedbackWords() > 500) {
    setFeedbackStatus("Please keep your feedback at 500 words or less.", "error");
    return;
  }

  if (!webhookUrl || webhookUrl.includes("PASTE_")) {
    setFeedbackStatus("Webhook URL missing. Paste your Discord webhook URLs into script.js first.", "error");
    return;
  }

  const rateLimit = canSubmitFeedback();

  if (!rateLimit.ok) {
    setFeedbackStatus(rateLimit.message, "error");
    return;
  }

  els.feedbackSubmitBtn.disabled = true;
  els.feedbackSubmitBtn.textContent = "Sending...";
  setFeedbackStatus("Sending feedback...", "");

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "King Legacy Toolkit Feedback",
        content: (type === "bug" || type === "suggestion")
          ? `<@&${GENERAL_ROLE_ID}> <@&${PRIORITY_ROLE_ID}>`
          : `<@&${GENERAL_ROLE_ID}>`,
        allowed_mentions: {
          roles: [GENERAL_ROLE_ID, PRIORITY_ROLE_ID]
        },
        embeds: [{
          title: `${info.emoji} ${info.label}`,
          color: info.color,
          fields: [
            { name: "Name/Username", value: name, inline: true },
            { name: "Time and Date", value: time, inline: true },
            { name: "Page", value: document.title, inline: true },
            { name: "Feedback", value: message.slice(0, 3900) }
          ],
          footer: { text: "Sent from King Legacy Toolkit" },
          timestamp: new Date().toISOString()
        }]
      })
    });

    if (!response.ok) throw new Error("Discord rejected the message.");

    recordFeedbackSubmit();
    els.feedbackMessage.value = "";
    updateFeedbackWordCount();
    setFeedbackStatus("Feedback sent. Thank you!", "success");
  } catch (error) {
    setFeedbackStatus("Feedback failed to send. Check your webhook URL or Discord channel permissions.", "error");
  } finally {
    els.feedbackSubmitBtn.disabled = false;
    els.feedbackSubmitBtn.textContent = "Submit!";
  }
}

els.tradeNavBtn.addEventListener("click", showCalculatorView);
els.robuxNavBtn.addEventListener("click", showRobuxView);
els.dropNavBtn.addEventListener("click", showDropView);
els.infoNavBtn.addEventListener("click", showInfoView);
els.tierNavBtn.addEventListener("click", showTierView);
els.feedbackNavBtn.addEventListener("click", showFeedbackView);
els.sideFeedbackBtn.addEventListener("click", showFeedbackView);
els.openInfoRequestBtn.addEventListener("click", openInfoRequestModal);
els.closeInfoRequestBtn.addEventListener("click", closeInfoRequestModal);
els.infoRequestCategory.addEventListener("change", updateInfoNewCategoryVisibility);
els.infoRequestInformation.addEventListener("input", updateInfoRequestWordCount);
els.infoMediaSource.addEventListener("change", updateInfoMediaSource);
els.infoMediaFiles.addEventListener("change", event => updateSelectedInfoFiles(event.target.files));
els.infoRequestSubmitBtn.addEventListener("click", submitInfoRequest);
if (els.closeInfoDetailBtn) els.closeInfoDetailBtn.addEventListener("click", closeInfoDetail);
if (els.infoDetailModal) {
  els.infoDetailModal.addEventListener("click", event => {
    if (event.target === els.infoDetailModal) closeInfoDetail();
  });
}

els.infoDropZone.addEventListener("dragover", event => {
  event.preventDefault();
  els.infoDropZone.classList.add("drag-over");
});
els.infoDropZone.addEventListener("dragleave", () => els.infoDropZone.classList.remove("drag-over"));
els.infoDropZone.addEventListener("drop", event => {
  event.preventDefault();
  els.infoDropZone.classList.remove("drag-over");
  updateSelectedInfoFiles(event.dataTransfer.files);
});
els.infoRequestModal.addEventListener("click", event => {
  if (event.target === els.infoRequestModal) closeInfoRequestModal();
});

els.regionalGoBtn.addEventListener("click", () => {
  const value = Number(els.conquerorPriceInput.value);
  if (!Number.isFinite(value) || value < 750 || value > 2500) {
    els.regionalPercentText.textContent = "Please enter a Conqueror's Haki price from 750 to 2500.";
    return;
  }

  customRegionalPercent = (value / 2500) * 100;
  els.regionalPercentText.textContent = `Showing your specific regional pricing: ${formatRobux(customRegionalPercent)}% of max regional prices.`;
  renderRobuxItems();
});

els.conquerorPriceInput.addEventListener("keydown", event => {
  if (event.key === "Enter") els.regionalGoBtn.click();
});

els.regionalResetBtn.addEventListener("click", () => {
  customRegionalPercent = null;
  els.conquerorPriceInput.value = "";
  els.regionalPercentText.textContent = "Showing max, 50%, and 30% regional pricing columns.";
  renderRobuxItems();
});


function formatChanceValue(value) {
  return `${Number(value.toFixed(6))}%`;
}

function dropChanceLabel(chance) {
  if (typeof chance === "object") {
    return "Original Drop Chances: " + Object.entries(chance).map(([tier, value]) => `${tier}: ${value}%`).join(" • ");
  }
  return `Original Drop Chance: ${chance}%`;
}

function getDropBoostPercent() {
  const twoX = els.dropTwoX.checked ? 100 : 0;
  const passive = Number(els.dropPassiveBoost.value || 0) * 5;
  let extra = Number(els.dropExtraBoost.value || 0);
  if (!Number.isFinite(extra) || extra < 0) extra = 0;
  if (extra > 99999) extra = 99999;
  els.dropExtraBoost.value = String(extra);
  return twoX + passive + extra;
}

function boostedDropChance(base, boostPercent) {
  return base * (1 + boostPercent / 100);
}

function expectedDropText(chancePercent) {
  if (!chancePercent || chancePercent <= 0) return "Average: —";
  const kills = 100 / chancePercent;
  return `Average: 1 drop every ${formatRobux(kills)} kills`;
}

function updateDropCalculator() {
  const passivePercent = Number(els.dropPassiveBoost.value || 0) * 5;
  const boostPercent = getDropBoostPercent();
  const multiplier = 1 + boostPercent / 100;

  els.dropPassiveLevel.textContent = String(els.dropPassiveBoost.value || 0);
  els.dropPassiveLabel.textContent = `+${formatRobux(passivePercent)}%`;
  els.dropExtraLabel.textContent = `+${formatRobux(Number(els.dropExtraBoost.value || 0))}%`;
  els.dropOriginalChance.textContent = dropChanceLabel(selectedDropItem.chance);

  if (typeof selectedDropItem.chance === "object") {
    const lines = Object.entries(selectedDropItem.chance).map(([tier, base]) => {
      const finalChance = boostedDropChance(base, boostPercent);
      return `<span>${tier}: <strong>${formatChanceValue(finalChance)}</strong> <small>${expectedDropText(finalChance).replace("Average: ", "")}</small></span>`;
    });
    els.dropResult.innerHTML = lines.join("");
    els.dropExpected.textContent = "Average shown beside each tier.";
  } else {
    const finalChance = boostedDropChance(selectedDropItem.chance, boostPercent);
    els.dropResult.textContent = formatChanceValue(finalChance);
    els.dropExpected.textContent = expectedDropText(finalChance);
  }

  els.dropMultiplier.textContent = `Multiplier: ${formatRobux(multiplier)}x`;
}

function openDropCalculator(item) {
  selectedDropItem = item;
  els.dropSelectedName.textContent = item.name;
  els.dropTwoX.checked = false;
  els.dropPassiveBoost.value = 0;
  els.dropExtraBoost.value = 0;
  els.dropHome.classList.remove("active-drop-page");
  els.dropCalc.classList.add("active-drop-page");
  updateDropCalculator();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderDropItems() {
  const query = (els.dropSearchInput.value || "").trim().toLowerCase();
  const drops = DROP_ITEMS.filter(item => item.name.toLowerCase().includes(query));
  els.dropItemsContainer.innerHTML = "";

  if (!drops.length) {
    els.dropItemsContainer.innerHTML = `<p class="category-title">No drops found.</p>`;
    return;
  }

  drops.forEach(item => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "drop-item-card";
    card.innerHTML = `
      <span class="drop-icon-placeholder">${item.name.slice(0, 1)}</span>
      <span>
        <strong>${item.name}</strong>
        <small>${dropChanceLabel(item.chance)}</small>
      </span>
    `;
    card.addEventListener("click", () => openDropCalculator(item));
    els.dropItemsContainer.appendChild(card);
  });
}

els.dropSearchInput.addEventListener("input", renderDropItems);
els.dropBackBtn.addEventListener("click", () => {
  els.dropCalc.classList.remove("active-drop-page");
  els.dropHome.classList.add("active-drop-page");
});
els.dropResetBtn.addEventListener("click", () => {
  els.dropTwoX.checked = false;
  els.dropPassiveBoost.value = 0;
  els.dropExtraBoost.value = 0;
  updateDropCalculator();
});
[els.dropTwoX, els.dropPassiveBoost, els.dropExtraBoost].forEach(input => {
  input.addEventListener("input", updateDropCalculator);
  input.addEventListener("change", updateDropCalculator);
});

if (els.tierModeSelect) els.tierModeSelect.addEventListener("change", updateTierListDisplay);
if (els.tierCategorySelect) els.tierCategorySelect.addEventListener("change", updateTierListDisplay);

els.feedbackType.addEventListener("change", updateFeedbackTypeDescription);
els.feedbackMessage.addEventListener("input", updateFeedbackWordCount);
els.feedbackSubmitBtn.addEventListener("click", submitFeedback);
updateFeedbackTypeDescription();
updateFeedbackWordCount();

async function initializeSite() {
  await loadValueFiles();
  setupFilters();
  renderItems();
  renderSelected();
  renderDropItems();
  await loadInfoSheets();
  await loadTierListConfig();
  updateTierListDisplay();
  showCalculatorView();
}

initializeSite();
