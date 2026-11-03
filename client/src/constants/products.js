import gc1 from "@/assets/gift-card-1.jpg";
import gc2 from "@/assets/gift-card-2.jpg";
import gc3 from "@/assets/gift-card-3.jpg";
import gc4 from "@/assets/gift-card-4.jpg";
import ring from "../assets/Rings.png";
import earings from "../assets/earings.png";
import pendants from "../assets/pendants.png";
import chains from "../assets/chains.png";
import necklaces from "../assets/necklace.png";
import bangles from "../assets/bangles.png";
import bracelets from "../assets/bracelets.png";
import mangalsutras from "../assets/mangalsutras.png";
import solitaires from "../assets/solitaires.png";
import goldcoins from "../assets/Rings.png";
import kadas from "../assets/kadas.png";
import anklets from "../assets/anklets.png";
import nosepins from "../assets/nodepins.png";
import mens from "../assets/mensjewellery.png";
import kids from "../assets/kidsjewellery.png";
import watch from "../assets/watch.png";

const A = "https://solmare.vercel.app/assets/";
const B = "https://kinclimg{n}.bluestone.com/f_png,w_600/giproduct/";
const img = (n, p) => B.replace("{n}", String(n)) + p;

export const categories = [
  { slug: "rings", name: "Rings", image: ring },
  { slug: "earrings", name: "Earrings", image: earings },
  { slug: "pendants", name: "Pendants", image: pendants },
  { slug: "chains", name: "Chains", image: chains },
  { slug: "necklaces", name: "Necklaces", image: necklaces },
  { slug: "bangles", name: "Bangles", image: bangles },
  { slug: "bracelets", name: "Bracelets", image: bracelets },
  { slug: "mangalsutras", name: "Mangalsutras", image: mangalsutras },
  { slug: "solitaires", name: "Solitaires", image: solitaires },
  { slug: "gold-coins", name: "Gold Coins", image: goldcoins },
  { slug: "kadas", name: "Kadas", image: kadas },
  { slug: "anklets", name: "Anklets", image: anklets },
  { slug: "nose-pins", name: "Nose Pins", image: nosepins },
  { slug: "mens", name: "Men's Jewellery", image: mens },
  { slug: "kids", name: "Kids Jewellery", image: kids },
  { slug: "accessories", name: "Watch Accessories", image: watch },
];

export const products = [
  {
    slug: "the-humaira-slider-ring",
    name: "The Humaira Slider Ring",
    category: "rings",
    price: 28900,
    mrp: 33500,
    metal: "18Kt Rose Gold · Diamond",
    rating: 4.8,
    badge: "Bestseller",
    images: [
      img(9, "BIPO0716R16_RAA18DIG6XXXXXXXX_ABCD00-PICS-00000-1024-52073.png"),
      img(9, "BIPO0716R16_RAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-52073.png"),
    ],
    description:
      "A fluid slider silhouette set with brilliant-cut diamonds — light enough for every day, luminous enough for every occasion.",
  },
  {
    slug: "the-aubade-stackable-ring",
    name: "The Aubade Stackable Ring",
    category: "rings",
    price: 36200,
    mrp: 42000,
    metal: "18Kt White Gold · Diamond",
    rating: 4.7,
    images: [
      img(1, "BIPM0001R26_WAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-17777.png"),
    ],
    description:
      "Designed to be worn alone or stacked — a delicate row of diamonds that catches the morning light.",
  },
  {
    slug: "the-solitaire-majestic-ring",
    name: "The Solitaire Majestic Ring",
    category: "solitaires",
    price: 124500,
    mrp: 139000,
    metal: "18Kt White Gold · Solitaire",
    rating: 4.9,
    badge: "Iconic",
    images: [
      img(6, "BIPM0017R02_WAA18DIG6DIG6XXXX_ABCD00-PICS-00003-1024-14079.png"),
    ],
    description:
      "A certified centre solitaire framed by a halo of pavé diamonds. The ring for the question that matters most.",
  },
  {
    slug: "the-aneira-stud-earrings",
    name: "The Aneira Stud Earrings",
    category: "earrings",
    price: 43500,
    mrp: 51000,
    metal: "18Kt Rose Gold · Diamond",
    rating: 4.8,
    images: [
      img(5, "BENS0737R13_RAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-53550.png"),
    ],
    description:
      "Petal-shaped studs that sit softly on the lobe — a modern heirloom in rose gold.",
  },
  {
    slug: "the-jacinta-dangler-earrings",
    name: "The Jacinta Dangler Earrings",
    category: "earrings",
    price: 68900,
    mrp: 82000,
    metal: "18Kt Yellow Gold · Diamond",
    rating: 4.6,
    badge: "New",
    images: [
      img(4, "BIPO0659R64_YAA18DIG6BLTOXXXX_ABCD00-PICS-00001-1024-49340.png"),
    ],
    description:
      "Cascading danglers that move with you, finished with diamonds and a polished gold drop.",
  },
  {
    slug: "the-mesmerising-statement-earrings",
    name: "The Mesmerising Statement Earrings",
    category: "earrings",
    price: 84200,
    mrp: 95000,
    metal: "22Kt Yellow Gold",
    rating: 4.9,
    images: [
      img(3, "BIPO0646U78_YAA22XXXXXXXXXXXX_ABCD00-PICS-00000-1024-51659.png"),
    ],
    description:
      "Handcrafted in 22Kt gold with traditional filigree — a statement made for festive evenings.",
  },
  {
    slug: "the-mizuki-mangalsutra",
    name: "The Mizuki Mangalsutra Pendant",
    category: "mangalsutras",
    price: 52800,
    mrp: 61000,
    metal: "22Kt Yellow Gold",
    rating: 4.7,
    images: [
      img(2, "BIMG0650R27_YAA22XXXXXXXXXXXX_ABCD00-PICS-00001-1024-48768.png"),
    ],
    description:
      "A contemporary mangalsutra pendant that honours tradition while fitting effortlessly into modern life.",
  },
  {
    slug: "the-adaliyah-toggle-bangle",
    name: "The Adaliyah Toggle Bangle",
    category: "bangles",
    price: 96400,
    mrp: 108000,
    metal: "18Kt Yellow Gold · Diamond",
    rating: 4.8,
    images: [
      img(1, "BIAB0617R09_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-53890.png"),
    ],
    description:
      "A sculpted toggle bangle with a diamond-set clasp — bold, balanced and beautifully wearable.",
  },
  {
    slug: "the-jenie-chain-bracelet",
    name: "The Jenie Chain Bracelet",
    category: "bracelets",
    price: 31700,
    mrp: 36500,
    metal: "18Kt White Gold · Diamond",
    rating: 4.6,
    images: [
      img(8, "BIAB0574R07_WAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-44088.png"),
    ],
    description:
      "A fine chain bracelet punctuated by diamond stations. Your new forever-on piece.",
  },
  {
    slug: "the-timeless-allure-watch-charm",
    name: "The Timeless Allure Watch Charm",
    category: "accessories",
    price: 18900,
    mrp: 22000,
    metal: "18Kt Rose Gold · Diamond",
    rating: 4.5,
    images: [
      img(6, "BISS0388R78_RAA18DIG6SYEMXXXX_ABCD00-PICS-00001-1024-26832.png"),
    ],
    description:
      "Turn your watch strap into jewellery with this diamond-studded charm.",
  },
  {
    slug: "lakshmi-ganesh-gold-coin-5g",
    name: "24Kt Lakshmi Ganesh Gold Coin (5g)",
    category: "gold-coins",
    price: 39800,
    mrp: 41500,
    metal: "24Kt 999.9 Gold",
    rating: 4.9,
    images: [
      img(1, "BIPO0718R04_YAA22XXXXXXXXXXXX_ABCD00-PICS-00001-1024-54082.png"),
    ],
    description:
      "A hallmarked 24Kt gold coin embossed with Lakshmi and Ganesh — an auspicious gift for every beginning.",
  },
  {
    slug: "gift-card-5000",
    name: "Solmare Gift Card · ₹5,000",
    category: "gift-cards",
    price: 5000,
    mrp: 5000,
    metal: "E-gift or keepsake card",
    rating: 4.9,
    images: [gc1],
    description:
      "A little something with the big gift — redeemable on every Solmare design, online and in store, for 12 months.",
  },
  {
    slug: "gift-card-10000",
    name: "Solmare Gift Card · ₹10,000",
    category: "gift-cards",
    price: 10000,
    mrp: 10000,
    metal: "E-gift or keepsake card",
    rating: 4.9,
    images: [gc2],
    description:
      "A beautiful pair of studs or a fine gold chain — their choice, made with your thoughtfulness.",
  },
  {
    slug: "gift-card-25000",
    name: "Solmare Gift Card · ₹25,000",
    category: "gift-cards",
    price: 25000,
    mrp: 25000,
    metal: "E-gift or keepsake card",
    rating: 4.9,
    images: [gc3],
    description:
      "Opens the door to diamond pendants and 22Kt heirlooms — delivered by email or in a keepsake box.",
  },
  {
    slug: "gift-card-50000",
    name: "Solmare Gift Card · ₹50,000",
    category: "gift-cards",
    price: 50000,
    mrp: 50000,
    metal: "E-gift or keepsake card",
    rating: 4.9,
    images: [gc4],
    description:
      "For the grandest gestures — certified solitaires and statement sets, chosen by the one who wears them.",
  },
];

export const getProduct = (slug) => products.find((p) => p.slug === slug);
export const getCategory = (slug) => categories.find((c) => c.slug === slug);

export const testimonials = [
  {
    name: "Ishita Verma",
    loved: "The Culaan Ring",
    quote:
      "Bought this as a gift for my mom and she absolutely loved it. Simple, elegant, and perfect for everyday wear.",
    image: "https://kinclimg5.bluestone.com/f_webp/static/hp/m/bm3.png",
  },
  {
    name: "Rhea Malhotra",
    loved: "The Gold Bracelet",
    quote:
      "Such a pretty and delicate piece. I've worn it several times already and keep getting compliments!",
    image: "https://kinclimg5.bluestone.com/f_webp/static/hp/m/bm4.png",
  },
  {
    name: "Saanvi Reddy",
    loved: "The Diamond Pendant",
    quote:
      "Exactly what I was looking for. The design is minimal, comfortable to wear, and goes with almost everything.",
    image: "https://kinclimg5.bluestone.com/f_webp/static/hp/m/bm5.png",
  },
];
