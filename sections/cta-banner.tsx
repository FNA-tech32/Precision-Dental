"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function CtaBanner() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-slate-900"
        >
          <Image
            src="/images/family-care.jpg"
            alt="Dentiste prenant soin d'une jeune patiente à la clinique Precision Dental"
            fill
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-blue-900/60" />

          <div className="relative flex flex-col items-start gap-6 px-8 py-16 sm:px-14 sm:py-20 lg:max-w-2xl">
            <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Prêt à faire le premier pas vers votre plus beau sourire ?
            </h2>
            <p className="text-balance text-base leading-relaxed text-slate-200 sm:text-lg">
              Réservez dès aujourd&apos;hui votre première évaluation gratuite et découvrez le plan de traitement
              conçu exclusivement pour vous.
            </p>
            <Button
              href="#contact"
              size="lg"
              variant="secondary"
              icon={<CalendarCheck className="h-4 w-4" aria-hidden="true" />}
            >
              Prendre rendez-vous maintenant
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
