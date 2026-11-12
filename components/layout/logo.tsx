import Link from "next/link";
import { ToothIcon } from "@/components/icons/tooth-icon";
import { siteConfig } from "@/lib/site-config";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2.5 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
      aria-label={`${siteConfig.name} — Aller à l'accueil`}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 text-white shadow-sm shadow-blue-600/20 transition-transform duration-200 group-hover:scale-105">
        <ToothIcon className="h-5 w-5" />
      </span>
      <span
        className={`font-heading text-lg font-bold tracking-tight ${
          inverted ? "text-white" : "text-slate-900"
        }`}
      >
        {siteConfig.shortName}
      </span>
    </Link>
  );
}
