import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import heroImage from "@/assets/trade-hero.jpg";
import { tradeImages, galleryImages, galleryCategories } from './trade-images';
export const photos = Object.values(tradeImages).map((image) => image.url);
export type Entry = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  status: string;
  value?: string;
  company?: string;
  rating?: string;
  date?: string;
  email?: string;
  phone?: string;
  subject?: string;
  [key: string]: string | undefined;
};
export type Collection =
  "products" | "services" | "markets" | "gallery" | "testimonials" | "enquiries" | "stats";
type Company = Record<
  "name" | "partners" | "address" | "phone" | "email" | "about" | "vision" | "mission",
  string
>;
type Hero = Record<"title" | "subtitle" | "image" | "cta" | "link" | "status", string>;
type Settings = Record<
  "footer" | "facebook" | "linkedin" | "instagram" | "seoTitle" | "heroCTA",
  string
>;
export type SiteData = { company: Company; hero: Hero; settings: Settings; imageVersion?: number } & Record<
  Collection,
  Entry[]
>;
const item = (
  title: string,
  description: string,
  image: string,
  category = "General",
  extra: Record<string, string> = {},
): Entry => ({
  id: title.toLowerCase().replaceAll(" ", "-"),
  title,
  description,
  image,
  category,
  status: "Active",
  ...extra,
});
export const initialData: SiteData = {
  imageVersion: 2,
  company: {
    name: "CARGOVERA TRADING LLP",
    partners: "AAYUSH RAI, PARAM RAJESH PARDESHI",
    address:
      "A7-401 Park Infinia, Fursungii Bheakrai Nagar, Phursungi, Haveli, Pune, Maharashtra, India, 412308",
    phone: "3215435213",
    email: "",
    about:
      "CARGOVERA TRADING LLP is a modern wholesale trading company connecting businesses with the products, suppliers and opportunities they need. From sourcing to distribution, we bring a professional, transparent approach to every business relationship.",
    vision: "To build dependable and long-term business relationships across markets.",
    mission:
      "To simplify sourcing, wholesale trading and business connectivity through professional service and reliable coordination.",
  },
  hero: {
    title: "Connecting Global Markets Through Reliable Trade",
    subtitle:
      "CARGOVERA TRADING LLP delivers professional wholesale trading and global sourcing solutions, connecting businesses with reliable products, suppliers and markets.",
    image: heroImage,
    cta: "Explore Our Business",
    link: "/products",
    status: "Active",
  },
  settings: {
    footer: "Designed and development by SOSynch Ai Tech",
    facebook: "",
    linkedin: "",
    instagram: "",
    seoTitle: "CARGOVERA TRADING LLP",
    heroCTA: "Explore Our Business",
  },
  products: [
    item(
      "Industrial Products",
      "Dependable industrial and commercial products for growing businesses.",
      tradeImages.manufacturing.url,
      "Industrial",
    ),
    item(
      "Consumer Products",
      "Quality consumer and lifestyle products, sourced for your market.",
      tradeImages.consumer.url,
      "Consumer",
    ),
    item(
      "Packaging & Supplies",
      "Practical packaging and supply solutions for business operations.",
      tradeImages.packaging.url,
      "Packaging",
    ),
    item(
      "General Merchandise",
      "Versatile wholesale merchandise across multiple trading categories.",
      tradeImages.wholesale.url,
      "Merchandise",
    ),
    item(
      "Commercial Goods",
      "Purposeful procurement for business and institutional requirements.",
      tradeImages.commercial.url,
      "Commercial",
    ),
    item(
      "Customized Sourcing",
      "The right products, sourced around your specific business needs.",
      tradeImages.equipment.url,
      "Sourcing",
    ),
  ],
  services: [
    item(
      "Global Sourcing",
      "Connecting your business with suitable suppliers and quality products across markets.",
      tradeImages.vessel.url,
    ),
    item(
      "Wholesale Trading",
      "Bulk product sourcing and distribution designed around business requirements.",
      tradeImages.distribution.url,
    ),
    item(
      "Supplier Coordination",
      "Professional coordination between suppliers and buyers, from introduction to delivery.",
      tradeImages.partnership.url,
    ),
    item(
      "Import & Export Support",
      "Trade-oriented coordination for your international business requirements.",
      tradeImages.exportTruck.url,
    ),
    item(
      "Product Procurement",
      "Focused product procurement aligned with your specifications and objectives.",
      tradeImages.team.url,
    ),
    item(
      "Business Trade Solutions",
      "Flexible solutions that connect your business to wider trading opportunities.",
      tradeImages.discussion.url,
    ),
  ],
  markets: ["India", "Middle East", "Asia", "Europe", "Global Markets"].map((t, i) =>
    item(
      t,
      [
        "Our home market. Building dependable connections from Pune to businesses across India.",
        "Connecting with emerging business and sourcing opportunities.",
        "Exploring supplier relationships across diverse Asian markets.",
        "Developing trade connectivity with European business networks.",
        "A wider perspective on sourcing, partnerships and distribution.",
      ][i] || "",
      [tradeImages.port, tradeImages.dubai, tradeImages.containers, tradeImages.road, tradeImages.airport][i]?.url || heroImage,
      "Demo market",
    ),
  ),
  gallery: galleryImages.map((image, i) =>
    item(image.alt, "Trading and business imagery for illustrative purposes.", image.url,
      galleryCategories[i] || "Trading"),
  ),
  testimonials: [
    item(
      "Rohan Mehta",
      "A professional approach to sourcing, with clear communication at every step. We value the attention to our requirements.",
      "",
      "Demo testimonial",
      { company: "Procurement Partner", rating: "5" },
    ),
    item(
      "Priya Sharma",
      "Reliable coordination and a genuine focus on building long-term business relationships.",
      "",
      "Demo testimonial",
      { company: "Distribution Partner", rating: "5" },
    ),
    item(
      "Arjun Patel",
      "Flexible solutions and transparent conversations made the sourcing process straightforward.",
      "",
      "Demo testimonial",
      { company: "Wholesale Partner", rating: "5" },
    ),
  ],
  enquiries: [],
  stats: [
    item("Trading Categories", "Global Trade", "", "", { value: "10+" }),
    item("Business Connections", "Reliable Sourcing", "", "", { value: "25+" }),
    item("Markets Served", "Wholesale Distribution", "", "", { value: "15+" }),
    item("Commitment to Reliability", "Business Partnerships", "", "", { value: "100%" }),
  ],
};
const legacyPhotoUrls = new Set<string>(["/__l5e/assets-v1/c14a6b48-6914-4408-9f94-9d137f6a87c9/photo-4.jpg", "/__l5e/assets-v1/da67c12b-232b-4c51-83d5-9c9edfbd3bb8/photo-0.jpg", "/__l5e/assets-v1/f7fdb3fa-718c-4d39-842d-ca5c51453e3f/photo-3.jpg", "/__l5e/assets-v1/6c3e2971-7762-4703-9498-cf0e69bddc35/photo-2.jpg", "/__l5e/assets-v1/7929e75b-b315-4033-8e7e-f842878d3aba/photo-1.jpg", "/__l5e/assets-v1/19301c63-a74c-4195-8635-8fc346762178/photo-5.jpg", "/__l5e/assets-v1/bc6e7f36-999d-4544-ae9e-44fd1edc3d7a/photo-7.jpg", "/__l5e/assets-v1/abb0b8b8-f60f-4d69-b953-f88192a4e589/photo-10.jpg", "/__l5e/assets-v1/8c1f9355-0aed-45eb-a973-aaf0945f75c4/photo-11.jpg", "/__l5e/assets-v1/d6ece85a-9b6d-4ab4-9842-77945c653963/photo-9.jpg", "/__l5e/assets-v1/9c315b2a-ac56-4704-8373-6a64c64b3751/photo-6.jpg", "/__l5e/assets-v1/bd020778-a1d5-401c-aa5f-520d1436fcae/port.jpg", "/__l5e/assets-v1/abae19b4-b11e-42d5-9282-d19820526328/warehouse.jpg", "/__l5e/assets-v1/65b6f1cf-5e9f-4061-8989-68d3ee212fb7/cargo.jpg"]);
export function upgradeImages(saved: SiteData): SiteData {
  const merged = { ...initialData, ...saved };
  if (saved.imageVersion === 2) return merged;
  for (const collection of ['products', 'services', 'markets'] as const) {
    merged[collection] = merged[collection].map((entry) => {
      const seed = initialData[collection].find((item) => item.id === entry.id);
      return seed && legacyPhotoUrls.has(entry.image) ? { ...entry, image: seed.image } : entry;
    });
  }
  if (merged.gallery.some((entry) => legacyPhotoUrls.has(entry.image) && entry.description === 'Trading and business imagery for illustrative purposes.')) {
    const custom = merged.gallery.filter((entry) => !legacyPhotoUrls.has(entry.image) || entry.description !== 'Trading and business imagery for illustrative purposes.');
    merged.gallery = [...initialData.gallery, ...custom.filter((entry) => !initialData.gallery.some((seed) => seed.image === entry.image))];
  }
  return { ...merged, imageVersion: 2 };
}
const KEY = "cargovera-cms-v1";
const DataContext = createContext<{
  data: SiteData;
  save: (data: SiteData) => void;
  authenticated: boolean;
  login: (u: string, p: string) => boolean;
  logout: () => void;
  ready: boolean;
} | null>(null);
export function DataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState(initialData);
  const [authenticated, setAuthenticated] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try {
      const s = localStorage.getItem(KEY);
      if (s) {
        const upgraded = upgradeImages(JSON.parse(s));
        setData(upgraded);
        localStorage.setItem(KEY, JSON.stringify(upgraded));
      }
      setAuthenticated(localStorage.getItem("cargovera-demo-auth") === "true");
    } catch {}
    setReady(true);
    const sync = (e: StorageEvent) => {
      if (e.key === KEY && e.newValue) {
        try {
          setData(upgradeImages(JSON.parse(e.newValue)));
        } catch {}
      }
      if (e.key === "cargovera-demo-auth") setAuthenticated(e.newValue === "true");
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);
  const save = (d: SiteData) => {
    localStorage.setItem(KEY, JSON.stringify(d));
    setData(d);
  };
  const login = (u: string, p: string) => {
    if (u === "admin" && p === "admin123") {
      localStorage.setItem("cargovera-demo-auth", "true");
      setAuthenticated(true);
      return true;
    }
    return false;
  };
  const logout = () => {
    localStorage.removeItem("cargovera-demo-auth");
    setAuthenticated(false);
  };
  return (
    <DataContext.Provider value={{ data, save, authenticated, login, logout, ready }}>
      {children}
    </DataContext.Provider>
  );
}
export function useData() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error("Content provider missing");
  return ctx;
}
export const active = (items: Entry[]) => items.filter((x) => x.status === "Active");
