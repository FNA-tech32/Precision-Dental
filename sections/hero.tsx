"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { trustStats } from "@/lib/site-config";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-white pb-20 pt-14 sm:pb-28 sm:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] h-96 w-96 rounded-full bg-teal-200/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl"
      />

      <Container className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <div className="flex flex-col items-start gap-7">
          <motion.span
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700 shadow-sm"
          >
            Clinique Dentaire Precision Dental · Le Mans
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            className="text-balance font-heading text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]"
          >
            Votre sourire, entre de bonnes mains
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
            className="max-w-lg text-balance text-lg leading-relaxed text-slate-600"
          >
            Odontologie générale, orthodontie et implants avec technologie digitale de dernière
            génération. Nous prenons soin de votre santé dentaire avec un accompagnement personnalisé.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Button href="#contact" size="lg" icon={<CalendarCheck className="h-4 w-4" aria-hidden="true" />}>
              Prendre rendez-vous
            </Button>
            <Button
              href="#services"
              size="lg"
              variant="outline"
              icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
            >
              Découvrir nos soins
            </Button>
          </motion.div>

          <motion.dl
            initial="hidden"
            animate="visible"
            custom={0.4}
            variants={fadeUp}
            className="mt-4 grid w-full grid-cols-3 gap-4 border-t border-slate-200 pt-6 sm:max-w-md"
          >
            {trustStats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="flex items-center gap-1 font-heading text-2xl font-bold text-slate-900">
                  {stat.value}
                  {stat.label.includes("note") ? (
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ) : null}
                </dd>
                <span className="text-xs leading-tight text-slate-500">{stat.label}</span>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-900/10 sm:aspect-[5/4.2]">
            <Image
              src="/images/hero-clinic.jpg"
              alt="Consultation moderne et lumineuse de la clinique Precision Dental"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 hidden max-w-[15rem] rounded-2xl bg-white p-4 shadow-xl shadow-slate-900/10 sm:flex sm:items-center sm:gap-3">
            <div className="flex -space-x-2" aria-hidden="true">
              {trustStats.map((stat) => (
                <span
                  key={stat.label}
                  className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-blue-500 to-teal-400"
                />
              ))}
            </div>
            <p className="text-xs font-medium leading-snug text-slate-600">
              +5.000 patients nous font confiance chaque année
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
