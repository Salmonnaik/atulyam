// types/index.ts
export interface EventItem {
  id: string;
  icon: string;
  name: string;
  tagline: string;
  image?: string;
  description: string;
  date: string;
  venue: string;
  prize: string;
  fee: string;
  color: string;
  day: 1 | 2 | 3;
  tags: string[];
  teamSize?: string;
  resultAnnouncement?: string | null;
  dayTimeVenue?: string | null;
  registrationLink?: string;
}
export interface MerchItem {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
  color: string;
  tag: string;
  sizes?: string[];
  registrationLink?: string;
  priceColor?: string;
  glowColor?: string;
}
export interface SponsorItem {
  name: string;
  tier: "title" | "platinum" | "gold" | "associate";
  emoji: string;
  desc: string;
  logo?: string;
}
