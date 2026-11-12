"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/lib/data/process";

export function Process() {
  return (
    <section id="processus" className="scroll-mt-24 bg-gradient-to-b from-white to-blue-50/60 py-24 sm:py-28">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Comment nous travaillons"
          title="Du premier appel à votre nouveau sourire"
          description="Un processus clair et sans surprise, conçu pour que vous sachiez à quoi vous attendre à chaque étape de votre traitement."
        />

        <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent lg:block"
          />

          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                className="relative flex flex-col items-start gap-4"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-md shadow-blue-900/10 ring-1 ring-slate-100">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="font-heading text-sm font-semibold text-slate-500">
                  {step.number}
                </span>
                <h3 className="font-heading text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
