import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { Hero } from "@/sections/hero";
import { Services } from "@/sections/services";
import { Benefits } from "@/sections/benefits";
import { Team } from "@/sections/team";
import { Process } from "@/sections/process";
import { Testimonials } from "@/sections/testimonials";
import { CtaBanner } from "@/sections/cta-banner";
import { Faq } from "@/sections/faq";
import { Contact } from "@/sections/contact";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Clinique Dentaire d'Excellence au Mans`,
  description:
    "Odontologie générale, orthodontie invisible, implants et esthétique dentaire de haute précision. Demandez votre première consultation offerte chez Precision Dental.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Benefits />
      <Team />
      <Process />
      <Testimonials />
      <CtaBanner />
      <Faq />
      <Contact />
      <WhatsAppButton />
    </>
  );
}
