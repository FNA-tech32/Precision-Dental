"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { benefits } from "@/lib/data/benefits";

export function Benefits() {
  return (
    <section id="benefices" className="scroll-mt-24 bg-slate-50 py-24 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Pourquoi nous choisir"
          title="Une dentisterie moderne, pensée pour vous"
          description="Nous combinons une technologie de pointe avec un contact humain et chaleureux à chaque visite."
        />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-xl shadow-slate-900/10">
              <Image
                src="/images/tech-digital.jpg"
                alt="Dentiste examinant une radiographie numérique avec un patient à la clinique Precision Dental"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-8 -right-8 -z-10 h-40 w-40 rounded-full bg-teal-200/50 blur-2xl"
            />
          </motion.div>

          <div className="order-1 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:order-2">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/[0.02]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-heading text-base font-semibold text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
