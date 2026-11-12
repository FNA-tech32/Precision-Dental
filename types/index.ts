import type { ComponentType } from "react";
import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
}

export interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  bio: string;
  image: string;
  imageAlt: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  name: string;
  rating: number;
  comment: string;
  date: string;
  treatment: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TrustStat {
  value: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon | ComponentType<{ className?: string }>;
}
