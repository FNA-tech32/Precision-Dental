"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StarRating } from "@/components/ui/star-rating";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  return (
    <section id="avis" className="scroll-mt-24 bg-white py-24 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Avis & Témoignages"
          title="La confiance de nos patients est notre plus belle réussite"
          description="Découvrez les retours d'expérience de patients ayant confié la santé de leur sourire à l'équipe Precision Dental."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm shadow-slate-900/[0.02]"
            >
              <div className="flex items-center justify-between">
                <StarRating rating={testimonial.rating} />
                <Quote className="h-6 w-6 text-blue-100" aria-hidden="true" />
              </div>

              <blockquote className="flex-1 text-sm leading-relaxed text-slate-700">
                &ldquo;{testimonial.comment}&rdquo;
              </blockquote>

              <figcaption className="flex items-center justify-between border-t border-slate-100 pt-4">
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-900">{testimonial.name}</span>
                  <span className="text-xs text-slate-500">{testimonial.treatment}</span>
                </div>
                <time className="text-xs text-slate-500">{testimonial.date}</time>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
