import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { Container } from "@/components/ui/container";
import {
  footerLegalLinks,
  footerServiceLinks,
  navLinks,
  siteConfig,
  socialLinks,
} from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-slate-600">
              {siteConfig.description}
            </p>
            <div className="mt-2 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-colors hover:border-blue-600 hover:text-blue-700"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-slate-900">
              Liens rapides
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-blue-700"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-slate-900">
              Services
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {footerServiceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-blue-700"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-slate-900">
              Contact & Coordonnées
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                <span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.postalCode} {siteConfig.address.city}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                <div className="flex flex-col">
                  <a href={siteConfig.phoneHref} className="hover:text-blue-700">
                    <span className="text-xs text-slate-400">Standard: </span>{siteConfig.phone}
                  </a>
                  <a href={siteConfig.altPhoneHref} className="hover:text-blue-700">
                    <span className="text-xs text-teal-600">Urgences: </span>{siteConfig.altPhone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                <div className="flex flex-col">
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-blue-700">
                    {siteConfig.email}
                  </a>
                  <a href={`mailto:${siteConfig.altEmail}`} className="text-xs text-slate-500 hover:text-blue-700">
                    {siteConfig.altEmail} (RDV)
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {year} {siteConfig.name}. Tous droits réservés.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLegalLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-xs text-slate-500 hover:text-blue-700">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
