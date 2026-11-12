import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/legal-layout";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales de ${siteConfig.name} : informations sur le propriétaire du site web, conditions d'utilisation et propriété intellectuelle.`,
  alternates: {
    canonical: "/mentions-legales",
  },
};

export default function MentionsLegalesPage() {
  return (
    <LegalLayout title="Mentions légales" updatedAt="1 janvier 2026">
      <section>
        <h2 className="font-heading text-xl font-semibold text-slate-900">
          1. Informations d&apos;identification
        </h2>
        <p className="mt-3 text-sm leading-relaxed sm:text-base">
          Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique,
          nous vous informons que ce site web est la propriété de{" "}
          <strong>{siteConfig.name}</strong>, domicilié au {siteConfig.address.street},{" "}
          {siteConfig.address.postalCode} {siteConfig.address.city}, et joignable à l&apos;adresse {siteConfig.email}.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl font-semibold text-slate-900">
          2. Objet et champ d&apos;application
        </h2>
        <p className="mt-3 text-sm leading-relaxed sm:text-base">
          Les présentes mentions légales régissent l&apos;utilisation du site web {siteConfig.url}, que{" "}
          {siteConfig.name} met à disposition des utilisateurs afin de leur fournir des informations
          sur ses services dentaires. L&apos;accès et l&apos;utilisation de ce site web confèrent la
          qualité d&apos;utilisateur et impliquent l&apos;acceptation pleine et entière des conditions ci-après.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl font-semibold text-slate-900">
          3. Propriété intellectuelle et industrielle
        </h2>
        <p className="mt-3 text-sm leading-relaxed sm:text-base">
          L&apos;ensemble des contenus du site web, y compris textes, photographies, graphismes, images,
          conception et icônes, sont la propriété de {siteConfig.name} ou de tiers ayant autorisé leur
          utilisation, et sont protégés par la législation relative à la propriété intellectuelle et industrielle. Toute
          reproduction, distribution ou communication publique sans autorisation expresse est interdite.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl font-semibold text-slate-900">
          4. Exclusion de responsabilité
        </h2>
        <p className="mt-3 text-sm leading-relaxed sm:text-base">
          {siteConfig.name} ne saurait être tenu responsable des dommages résultant
          d&apos;interférences, d&apos;interruptions, de virus informatiques ou de déconnexions dans le
          fonctionnement du site web, ni de ceux résultant de l&apos;utilisation abusive du site par
          l&apos;utilisateur.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl font-semibold text-slate-900">
          5. Droit applicable
        </h2>
        <p className="mt-3 text-sm leading-relaxed sm:text-base">
          Les présentes conditions sont régies par le droit français. Tout
          litige né de l&apos;accès ou de l&apos;utilisation de ce site web sera soumis aux
          tribunaux compétents de {siteConfig.address.city}, sauf disposition légale contraire.
        </p>
      </section>
    </LegalLayout>
  );
}
