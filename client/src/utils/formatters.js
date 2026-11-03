export const formatINR = (n) => "₹" + Number(n).toLocaleString("en-IN");

const OCCASIONS_BY_SLUG = {
  "the-humaira-slider-ring": ["casual-wear", "party-wear", "anniversary"],
  "the-aubade-stackable-ring": ["casual-wear", "party-wear", "graduation"],
  "the-solitaire-majestic-ring": ["engagement", "wedding", "anniversary"],
  "the-aneira-stud-earrings": ["casual-wear", "party-wear", "birthday"],
  "the-jacinta-dangler-earrings": ["party-wear", "wedding", "birthday"],
  "the-mesmerising-statement-earrings": ["festive", "party-wear", "wedding"],
  "the-mizuki-mangalsutra": ["wedding", "anniversary", "festive"],
  "the-adaliyah-toggle-bangle": ["wedding", "festive", "party-wear"],
  "the-jenie-chain-bracelet": ["casual-wear", "party-wear", "graduation", "birthday"],
  "the-timeless-allure-watch-charm": ["gifting", "birthday", "graduation"],
  "lakshmi-ganesh-gold-coin-5g": ["gifting", "festive", "wedding"],
};

const OCCASIONS_BY_CATEGORY = {
  rings: ["casual-wear", "party-wear", "anniversary"],
  earrings: ["casual-wear", "party-wear", "birthday"],
  pendants: ["casual-wear", "party-wear", "gifting"],
  chains: ["casual-wear", "party-wear"],
  necklaces: ["wedding", "party-wear", "anniversary"],
  bangles: ["wedding", "festive", "party-wear"],
  bracelets: ["casual-wear", "party-wear", "graduation"],
  mangalsutras: ["wedding", "anniversary", "festive"],
  solitaires: ["engagement", "wedding", "anniversary"],
  "gold-coins": ["gifting", "festive", "wedding"],
  kadas: ["wedding", "festive", "party-wear"],
  anklets: ["wedding", "casual-wear", "party-wear"],
  "nose-pins": ["casual-wear", "party-wear"],
  mens: ["casual-wear", "party-wear", "gifting"],
  kids: ["birthday", "gifting", "casual-wear"],
  accessories: ["gifting", "birthday", "graduation"],
};

export const audienceOf = (p) =>
  p.category === "kids"
    ? "kids-unisex"
    : p.category === "mens"
      ? "men"
      : ["gold-coins", "accessories"].includes(p.category)
        ? "adult-unisex"
        : "women";

export const materialsOf = (p) => {
  const m = (p.metal || "").toLowerCase();
  const r = [];
  if (m.includes("gold")) r.push("gold");
  if (m.includes("silver")) r.push("silver");
  if (m.includes("platinum")) r.push("platinum");
  if (m.includes("diamond") || m.includes("solitaire")) r.push("diamond");
  if (m.includes("brass")) r.push("brass");
  return r;
};

export const occasionsOf = (p) =>
  OCCASIONS_BY_SLUG[p.slug] ??
  OCCASIONS_BY_CATEGORY[p.category] ?? [
    "casual-wear",
    "party-wear",
    "gifting",
  ];

export const styleOf = (p) => {
  const m = (p.metal || "").toLowerCase();
  return m.includes("rose")
    ? "rose-gold"
    : m.includes("white")
      ? "white"
      : m.includes("pink")
        ? "pink"
        : "yellow";
};
