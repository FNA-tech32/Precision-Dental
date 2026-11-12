import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/legal-layout";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Politique de cookies",
  description: `Politique de cookies de ${siteConfig.name} : quels cookies utilisons-nous sur notre site web et comment les gérer.`,
  alternates: {
    canonical: "/cookies",
  },
};

const cookieTypes = [
  {
    name: "Cookies techniques",
    purpose:
      "Nécessaires au fonctionnement de base du site web, comme mémoriser vos préférences de navigation.",
    duration: "Session",
  },
  {
    name: "Cookies analytiques",
    purpose:
      "Nous permettent de comprendre comment les utilisateurs interagissent avec le site pour améliorer l&apos;expérience de navigation.",
    duration: "Jusqu&apos;à 12 mois",
  },
  {
    name: "Cookies de préférences",
    purpose: "Enregistrent des paramètres comme la langue ou la région pour les visites futures.",
    duration: "Jusqu&apos;à 12 mois",
  },
];

export default function CookiesPage() {
  return (
    <LegalLayout title="Politique de cookies" updatedAt="1 janvier 2026">
      <section>
        <h2 className="font-heading text-xl font-semibold text-slate-900">
          1. Qu&apos;est-ce que les cookies ?
        </h2>
        <p className="mt-3 text-sm leading-relaxed sm:text-base">
          Les cookies sont de petits fichiers texte que les sites web stockent dans votre navigateur
          pour mémoriser des informations sur votre visite, comme vos préférences ou la langue
          sélectionnée.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl font-semibold text-slate-900">
          2. Cookies que nous utilisons
        </h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[480px] border-collapse text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold text-slate-900">
                  Type
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-slate-900">
                  Finalité
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-slate-900">
                  Durée
                </th>
              </tr>
            </thead>
            <tbody>
              {cookieTypes.map((cookie) => (
                <tr key={cookie.name} className="border-t border-slate-200">
                  <td className="px-4 py-3 font-medium text-slate-800">{cookie.name}</td>
                  <td className="px-4 py-3 text-slate-600">{cookie.purpose}</td>
                  <td className="px-4 py-3 text-slate-600">{cookie.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-xl font-semibold text-slate-900">
          3. Comment gérer les cookies
        </h2>
        <p className="mt-3 text-sm leading-relaxed sm:text-base">
          Vous pouvez autoriser, bloquer ou supprimer les cookies installés sur votre ordinateur via la
          configuration de votre navigateur. Voici quelques liens d&apos;aide des
          navigateurs les plus courants :
        </p>
        <ul className="mt-3 flex flex-col gap-1.5 text-sm sm:text-base">
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-700 hover:underline"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies-preferences-sites-web"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-700 hover:underline"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-700 hover:underline"
            >
              Safari
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-heading text-xl font-semibold text-slate-900">
          4. Modifications de la politique de cookies
        </h2>
        <p className="mt-3 text-sm leading-relaxed sm:text-base">
          {siteConfig.name} se réserve le droit de modifier cette politique de cookies en fonction des exigences
          législatives ou pour l&apos;adapter aux nouvelles instructions de la Commission Nationale de
          l&apos;Informatique et des Libertés (CNIL). Nous vous recommandons de consulter cette page périodiquement.
        </p>
      </section>
    </LegalLayout>
  );
}
