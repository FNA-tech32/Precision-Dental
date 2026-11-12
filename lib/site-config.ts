import type { NavLink, SocialLink, TrustStat } from "@/types";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "@/components/icons/brand-icons";

export const siteConfig = {
  name: "Precision Dental",
  shortName: "Precision Dental",
  tagline: "L'art du sourire avec une précision d'excellence",
  description:
    "Clinique dentaire d'excellence Precision Dental au Mans, spécialisée en odontologie générale, orthodontie invisible, implantologie et esthétique dentaire. Une équipe d'experts et des technologies de pointe pour sublimer votre sourire.",
  url: "https://www.precisiondental.fr",
  locale: "fr_FR",
  // Primary Contact Line
  phone: "+33 2 43 28 85 90",
  phoneHref: "tel:+33243288590",
  email: "contact@precisiondental.fr",
  // Alternative Contact Line (Emergency & WhatsApp Hotline)
  altPhone: "+33 6 45 89 12 34",
  altPhoneHref: "tel:+33645891234",
  altEmail: "rdv@precisiondental.fr",
  whatsapp: "+33 6 45 89 12 34",
  whatsappHref: "https://wa.me/33645891234",
  address: {
    street: "28 Boulevard René Levasseur",
    postalCode: "72000",
    city: "Le Mans",
    region: "Sarthe",
    country: "FR",
    transit: "Tramway T1 / T2 (Arrêt République / Préfecture) · Parking République à 50m",
  },
  mapEmbedSrc:
    "https://www.google.com/maps?q=28+Boulevard+Rene+Levasseur+72000+Le+Mans&output=embed",
  schedule: [
    { days: "Lundi à vendredi", hours: "8h30 – 13h00 et 14h00 – 19h30" },
    { days: "Samedis", hours: "9h00 – 14h00 (Consultations & Urgences)" },
    { days: "Dimanches", hours: "Fermé (Permanence WhatsApp urgences)" },
  ],
  founded: 2012,
} as const;

export const trustStats: TrustStat[] = [
  { value: "+15", label: "ans d'expérience" },
  { value: "+5 000", label: "patients satisfaits" },
  { value: "4,9/5", label: "note moyenne" },
];

export const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Pourquoi nous choisir", href: "#benefices" },
  { label: "Équipe", href: "#equipe" },
  { label: "Avis", href: "#avis" },
  { label: "Questions fréquentes", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const footerServiceLinks:NavLink[] = [
  { label: "Nettoyage dentaire", href: "#services" },
  { label: "Orthodontie", href: "#services" },
  { label: "Implants dentaires", href: "#services" },
  { label: "Blanchiment", href: "#services" },
  { label: "Endodontie", href: "#services" },
  { label: "Odontologie pédiatrique", href: "#services" },
];

export const footerLegalLinks: NavLink[] = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
  { label: "Politique de cookies", href: "/cookies" },
];

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { label: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
  { label: "WhatsApp", href: siteConfig.whatsappHref, icon: WhatsAppIcon },
];
