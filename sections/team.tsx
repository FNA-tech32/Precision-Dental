"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { team } from "@/lib/data/team";

export function Team() {
  return (
    <section id="equipe" className="scroll-mt-24 bg-white py-24 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Notre équipe"
          title="Des spécialistes en qui vous pouvez avoir confiance"
          description="Une équipe pluridisciplinaire avec une formation continue pour vous offrir toujours le meilleur traitement."
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm shadow-slate-900/[0.02] transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-900/5"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/40 to-transparent" />
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm">
                  <Award className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
                  {member.experience}
                </span>
              </div>

              <div className="flex flex-col gap-2 p-6">
                <h3 className="font-heading text-lg font-semibold text-slate-900">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-blue-700">{member.role}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{member.bio}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
