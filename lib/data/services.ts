import { Baby, Droplets, Microscope, Anchor, Sparkles, SmilePlus } from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "nettoyage-dentaire",
    title: "Nettoyage dentaire",
    shortDescription:
      "Prophylaxie professionnelle pour éliminer la plaque et le tartre, et prévenir les problèmes futurs.",
    description:
      "Nous réalisons un détartrage complet (prophylaxie) qui élimine la plaque bactérienne et le tartre accumulé dans les zones difficiles d'accès avec le brossage quotidien. Comprend le polissage et le contrôle des gencives pour maintenir votre bouche en bonne santé plus longtemps.",
    icon: Droplets,
    highlights: ["Élimination du tartre et de la plaque", "Polissage dentaire", "Contrôle des gencives inclus"],
  },
  {
    slug: "orthodontie",
    title: "Orthodontie",
    shortDescription:
      "Bagues esthétiques et aligneurs transparents pour obtenir un sourire aligné.",
    description:
      "Nous corrigeons la position de vos dents avec des bagues métalliques, esthétiques ou des aligneurs transparents, en adaptant le traitement à votre rythme de vie. Nous étudions chaque cas avec un scanner intraoral 3D pour planifier le résultat avant de commencer.",
    icon: SmilePlus,
    highlights: ["Aligneurs invisibles", "Bagues esthétiques", "Planification numérique 3D"],
  },
  {
    slug: "implants-dentaires",
    title: "Implants dentaires",
    shortDescription:
      "Récupérez les dents manquantes avec des implants en titane de haute qualité et un aspect naturel.",
    description:
      "Nous remplaçons les dents manquantes par des implants en titane biocompatible, restaurant la fonction masticatrice et une esthétique entièrement naturelle. Nous réalisons une étude préalable avec radiographie 3D pour garantir une précision maximale.",
    icon: Anchor,
    highlights: ["Titane biocompatible", "Étude 3D préalable", "Garantie de 10 ans"],
  },
  {
    slug: "blanchiment-dentaire",
    title: "Blanchiment dentaire",
    shortDescription:
      "Éclaircissez la couleur de vos dents en toute sécurité avec des techniques supervisées par des professionnels.",
    description:
      "Nous appliquons des techniques de blanchiment dentaire en cabinet et avec des gouttières pour la maison, toujours supervisées par notre équipe pour protéger l'émail. Vous remarquerez des résultats visibles dès la première séance.",
    icon: Sparkles,
    highlights: ["Résultats dès la 1ère séance", "Protection de l'émail", "Effet durable"],
  },
  {
    slug: "endodontie",
    title: "Endodontie",
    shortDescription:
      "Traitement des canaux au microscope pour sauver les dents abîmées sans douleur.",
    description:
      "Nous traitons les infections et inflammations du nerf dentaire avec des techniques microscopiques de précision, en évitant l'extraction de la dent chaque fois que possible. Nous travaillons avec une anesthésie locale pour une intervention indolore.",
    icon: Microscope,
    highlights: ["Microscope de précision", "Intervention indolore", "Conservez votre dent naturelle"],
  },
  {
    slug: "odontologie-pediatrique",
    title: "Odontologie pédiatrique",
    shortDescription:
      "Soins dentaires spécialisés et bienveillants pour les plus jeunes de la famille.",
    description:
      "Nous offrons un accueil chaleureux et adapté aux enfants, avec des bilans préventifs, le scellement des sillons et l'éducation à l'hygiène bucco-dentaire dès le plus jeune âge pour créer de bonnes habitudes à vie.",
    icon: Baby,
    highlights: ["Accueil chaleureux et sans stress", "Scellement des sillons", "Éducation à l'hygiène bucco-dentaire"],
  },
];
