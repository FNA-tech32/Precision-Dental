import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/legal-layout";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Politique de confidentialité de ${siteConfig.name} : comment nous traitons vos données personnelles conformément au RGPD.`,
  alternates: {
    canonical: "/politique-confidentialite",
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalLayout title="Politique de confidentialité" updatedAt="1 janvier 2026">
      <section>
        <h2 className="font-heading text-xl font-semibold text-slate-900">
          1. Responsable du traitement
        </h2>
        <p className="mt-3 text-sm leading-relaxed sm:text-base">
          Le responsable du traitement de vos données personnelles est <strong>{siteConfig.name}</strong>,
          domicilié au {siteConfig.address.street}, {siteConfig.address.postalCode}{" "}
          {siteConfig.address.city}, et joignable à l&apos;adresse {siteConfig.email}.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl font-semibold text-slate-900">
          2. Finalité du traitement
        </h2>
        <p className="mt-3 text-sm leading-relaxed sm:text-base">
          Les données fournies via le formulaire de contact sont utilisées exclusivement
          pour gérer votre demande d&apos;information ou de rendez-vous, répondre à vos questions et,
          le cas échéant, vous fournir les services dentaires sollicités.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl font-semibold text-slate-900">
          3. Base légale
        </h2>
        <p className="mt-3 text-sm leading-relaxed sm:text-base">
          La base légale du traitement de vos données est votre consentement exprès, accordé lors de
          l&apos;envoi du formulaire de contact, ainsi que l&apos;exécution de la relation
          patient-cabinet en cas de devenir patient.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl font-semibold text-slate-900">4. Conservation</h2>
        <p className="mt-3 text-sm leading-relaxed sm:text-base">
          Vos données seront conservées aussi longtemps qu&apos;il existera un intérêt mutuelpour maintenir la finalité du
          traitement et, lorsqu&apos;elles ne seront plus nécessaires, elles seront supprimées avec les mesures de sécurité
          appropriées ou, le cas échéant, pendant les délais légaux de conservation du dossier
          médical exigés par la réglementation sanitaire en vigueur.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl font-semibold text-slate-900">
          5. Destinataires
        </h2>
        <p className="mt-3 text-sm leading-relaxed sm:text-base">
          Aucune donnée ne sera transmise à des tiers, sauf obligation légale ou lorsque ce sera strictement
          nécessaire à la prestation du service (par exemple, laboratoires prothétiques ou
          assurances dentaires, toujours avec votre autorisation préalable).
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl font-semibold text-slate-900">6. Vos droits</h2>
        <p className="mt-3 text-sm leading-relaxed sm:text-base">
          Vous pouvez exercer vos droits d&apos;accès, de rectification, d&apos;effacement, d&apos;opposition, de limitation
          du traitement et de portabilité de vos données en écrivant à {siteConfig.email},
          en joignant une copie d&apos;un justificatif d&apos;identité. Vous avez également le droit de
          déposer une réclamation auprès de la Commission Nationale de l&apos;Informatique et des Libertés (www.cnil.fr)
          si vous estimez que le traitement ne respecte pas la réglementation en vigueur.
        </p>
      </section>
    </LegalLayout>
  );
}
