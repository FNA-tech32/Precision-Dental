import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";

interface LegalLayoutProps {
  title: string;
  updatedAt: string;
  children: ReactNode;
}

export function LegalLayout({ title, updatedAt, children }: LegalLayoutProps) {
  return (
    <article className="py-20 sm:py-24">
      <Container className="max-w-3xl">
        <header className="flex flex-col gap-2 border-b border-slate-200 pb-8">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h1>
          <p className="text-sm text-slate-500">Dernière mise à jour : {updatedAt}</p>
        </header>

        <div className="prose-legal mt-10 flex flex-col gap-8 text-slate-700">{children}</div>
      </Container>
    </article>
  );
}
