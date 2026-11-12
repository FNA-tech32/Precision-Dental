import { CreditCard, HandHeart, Scan, Siren } from "lucide-react";
import type { Benefit } from "@/types";

export const benefits: Benefit[] = [
  {
    title: "Technologie numérique",
    description:
      "Scanner intraoral 3D, radiographie numérique à faible dose et planification de traitements par ordinateur pour des diagnostics plus précis.",
    icon: Scan,
  },
  {
    title: "Attention personnalisée",
    description:
      "Chaque patient bénéficie d'un plan de traitement dédié, avec le même spécialiste qui vous accompagne à chaque visite.",
    icon: HandHeart,
  },
  {
    title: "Financement sur mesure",
    description:
      "Nous finançons votre traitement jusqu'à 24 mois sans intérêt, en adaptant les mensualités à votre budget.",
    icon: CreditCard,
  },
  {
    title: "Urgences en 24h",
    description:
      "Nous prenons en charge les urgences dentaires en moins de 24 heures, y compris les week-ends, pour que la douleur n'attende pas.",
    icon: Siren,
  },
];
