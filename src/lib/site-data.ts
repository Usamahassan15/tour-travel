import maldives from "@/assets/dest-maldives.jpg";
import dubai from "@/assets/dest-dubai.jpg";
import bali from "@/assets/dest-bali.jpg";
import swiss from "@/assets/dest-switzerland.jpg";
import turkey from "@/assets/dest-turkey.jpg";
import paris from "@/assets/dest-paris.jpg";
import kyoto from "@/assets/pkg-kyoto.jpg";
import safari from "@/assets/pkg-safari.jpg";
import amalfi from "@/assets/pkg-amalfi.jpg";

export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  duration: string;
  from: number;
  rating: number;
}

export const destinations: Destination[] = [
  { id: "maldives", name: "Maldives", country: "Indian Ocean", image: maldives, duration: "5–7 Nights", from: 2450, rating: 4.9 },
  { id: "dubai", name: "Dubai", country: "United Arab Emirates", image: dubai, duration: "4–6 Nights", from: 1180, rating: 4.8 },
  { id: "bali", name: "Bali", country: "Indonesia", image: bali, duration: "6–8 Nights", from: 1390, rating: 4.9 },
  { id: "switzerland", name: "Switzerland", country: "The Alps", image: swiss, duration: "7–10 Nights", from: 3200, rating: 4.9 },
  { id: "turkey", name: "Cappadocia", country: "Turkey", image: turkey, duration: "5–7 Nights", from: 1450, rating: 4.8 },
  { id: "paris", name: "Paris", country: "France", image: paris, duration: "4–6 Nights", from: 1780, rating: 4.7 },
];

export interface Package {
  id: string;
  title: string;
  location: string;
  image: string;
  duration: string;
  oldPrice: number;
  price: number;
  badge: "Popular" | "Best Seller" | "New";
  highlights: string[];
}

export const packages: Package[] = [
  {
    id: "amalfi",
    title: "Amalfi Private Charter",
    location: "Italy",
    image: amalfi,
    duration: "7 Nights",
    oldPrice: 4200,
    price: 3450,
    badge: "Popular",
    highlights: ["Private yacht", "Michelin dining", "Chauffeured tours"],
  },
  {
    id: "kyoto",
    title: "Kyoto Zen Retreat",
    location: "Japan",
    image: kyoto,
    duration: "10 Nights",
    oldPrice: 6800,
    price: 5200,
    badge: "Best Seller",
    highlights: ["Ryokan stay", "Tea ceremony", "Private guide"],
  },
  {
    id: "safari",
    title: "Serengeti Sky Safari",
    location: "Tanzania",
    image: safari,
    duration: "8 Nights",
    oldPrice: 8500,
    price: 7100,
    badge: "New",
    highlights: ["Luxury tents", "Hot air balloon", "Private ranger"],
  },
];

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Deals", href: "#deals" },
  { label: "Destinations", href: "#destinations" },
  { label: "Tours", href: "#tours" },
  { label: "Visa", href: "#services" },
  { label: "Hotels", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const destinationOptions = [
  "Dubai", "Turkey", "Maldives", "Thailand", "Malaysia", "Singapore",
  "Saudi Arabia", "Bali", "Switzerland", "Paris", "Italy",
  "United Kingdom", "Japan", "Azerbaijan", "Georgia",
];