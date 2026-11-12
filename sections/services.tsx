"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/data/services";
import { cn } from "@/lib/utils";

export function Services() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <section id="services" className="scroll-mt-24 bg-white py-24 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Traitements"
          title="Tout ce dont votre sourire a besoin, en un seul endroit"
          description="De la prévention aux traitements les plus avancés, nous disposons de spécialistes dédiés dans chaque domaine de la dentisterie."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isOpen = openSlug === service.slug;

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                className={cn(
                  "group flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm shadow-slate-900/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5"
                )}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-teal-50 text-blue-700 transition-colors duration-300 group-hover:from-blue-600 group-hover:to-teal-500 group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>

                <h3 className="mt-5 font-heading text-lg font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {service.shortDescription}
                </p>

                <button
                  type="button"
                  onClick={() => setOpenSlug(isOpen ? null : service.slug)}
                  aria-expanded={isOpen}
                  aria-controls={`service-panel-${service.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-blue-700 transition-colors hover:text-blue-800"
                >
                  Plus d&apos;informations
                  <ChevronDown
                    className={cn("h-4 w-4 transition-transform duration-300", isOpen && "rotate-180")}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={`service-panel-${service.slug}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-sm leading-relaxed text-slate-600">
                        {service.description}
                      </p>
                      <ul className="mt-4 flex flex-col gap-2">
                        {service.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-2 text-sm text-slate-700">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" aria-hidden="true" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
