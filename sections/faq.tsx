"use client";

import { useState } from "react";
import { AccordionItem } from "@/components/ui/accordion-item";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/lib/data/faq";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-slate-50 py-24 sm:py-28">
      <Container className="flex flex-col gap-12 lg:flex-row lg:gap-20">
        <div className="lg:w-1/3">
          <SectionHeading
            eyebrow="Aide"
            title="Questions fréquentes"
            description="Nous répondons aux questions les plus courantes sur nos traitements, rendez-vous et financement."
            align="left"
          />
        </div>

        <div className="lg:w-2/3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              id={`faq-${index}`}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
