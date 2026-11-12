import type { FaqItem } from "@/types";
import { siteConfig } from "@/lib/site-config";

export const faqs: FaqItem[] = [
  {
    question: "Comment puis-je prendre rendez-vous chez Precision Dental ?",
    answer:
      `Vous pouvez réserver votre rendez-vous via notre formulaire en ligne, en appelant l'accueil au ${siteConfig.phone}, notre ligne alternative & urgences au ${siteConfig.altPhone}, ou directement par message WhatsApp. Notre secrétariat médical confirmera votre créneau sous 24 heures.`,
  },
  {
    question: "La première visite est-elle payante ?",
    answer:
      "Le premier bilan, avec radiographie numérique incluse, est entièrement gratuit et sans engagement. Nous vous remettons un devis détaillé avant de commencer tout traitement.",
  },
  {
    question: "Acceptez-vous les assurances dentaires ?",
    answer:
      "Nous travaillons avec les principales assurances dentaires du marché. Renseignez-vous sur votre mutuelle et nous vérifierons ensemble la couverture applicable à votre traitement.",
  },
  {
    question: "Proposez-vous un financement pour les traitements ?",
    answer:
      "Oui, nous disposons de facilités de paiement propres et via des partenaires financiers, avec des mensualités sans intérêt pouvant aller jusqu'à 24 mois selon le traitement.",
  },
  {
    question: "Combien de temps dure un traitement d'orthodontie invisible ?",
    answer:
      "Cela dépend de chaque cas, mais la plupart des traitements avec des aligneurs transparents durent entre 6 et 18 mois. Lors de votre première visite, nous vous donnerons une estimation personnalisée avec planification 3D.",
  },
  {
    question: "Les implants dentaires font-ils mal ?",
    answer:
      "La chirurgie est réalisée sous anesthésie locale et la plupart des patients ne ressentent aucune douleur pendant l'intervention. Les inconforts post-opératoires sont généralement légers et se contrôlent avec la médication prescrite.",
  },
  {
    question: "Prenez-vous en charge les urgences en dehors des heures d'ouverture ?",
    answer:
      "Oui, nous disposons d'un service d'urgences qui vous reçoit en moins de 24 heures, y compris le samedi. Appelez-nous et nous vous donnerons la priorité dans l'agenda.",
  },
  {
    question: "À partir de quel âge mon enfant peut-il venir au cabinet ?",
    answer:
      "Nous recommandons la première visite d'odontologie pédiatrique vers l'âge de 3 ans, bien que nous adaptions chaque consultation à l'âge et aux besoins spécifiques de chaque enfant.",
  },
  {
    question: "À quelle fréquence dois-je faire un nettoyage dentaire ?",
    answer:
      "Pour la plupart des patients, nous recommandons un détartrage professionnel tous les 6 mois, bien que dans les cas de tendance accrue au tartre ou de gencives sensibles, nous puissions ajuster la fréquence.",
  },
];
