import { CalendarClock, CalendarCheck, Stethoscope, Syringe } from "lucide-react";
import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Prenez rendez-vous",
    description:
      "Réservez votre première visite en ligne, par téléphone ou WhatsApp en moins d'une minute, sans temps d'attente.",
    icon: CalendarCheck,
  },
  {
    number: "02",
    title: "Premier bilan",
    description:
      "Nous réalisons un examen complet avec radiographie numérique et scanner 3D pour diagnostiquer votre cas avec précision.",
    icon: Stethoscope,
  },
  {
    number: "03",
    title: "Traitement",
    description:
      "Nous exécutons le plan convenu avec vous, en expliquant chaque étape et en répondant à vos questions tout au long du processus.",
    icon: Syringe,
  },
  {
    number: "04",
    title: "Suivi",
    description:
      "Nous programmons des contrôles périodiques pour veiller à ce que le résultat reste sain à long terme.",
    icon: CalendarClock,
  },
];
