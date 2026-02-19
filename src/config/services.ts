import type { Service } from "@/types";

export const services: Service[] = [
  {
    title: "Depannage urgent",
    shortDescription: "Intervention rapide en moins de 2h pour toutes vos urgences plomberie.",
    description:
      "Fuite d'eau, canalisation bouchee, degat des eaux, panne de chaudiere... Notre equipe intervient en urgence 7j/7 dans un rayon de 30 km autour de Lyon. Diagnostic sur place et reparation immediate dans la majorite des cas.",
    icon: "Siren",
    slug: "/depannage-plomberie",
  },
  {
    title: "Plomberie generale",
    shortDescription: "Installation, remplacement et mise aux normes de vos equipements.",
    description:
      "Robinetterie, tuyauterie, raccordements, WC, eviers, recherche de fuite... Nous intervenons pour tous vos travaux de plomberie, de l'installation neuve a la mise aux normes de vos installations existantes.",
    icon: "Wrench",
    slug: "/plomberie",
  },
  {
    title: "Salle de bain",
    shortDescription: "Renovation complete, douche italienne, adaptation PMR.",
    description:
      "De la conception a la realisation, nous prenons en charge votre projet de renovation de salle de bain. Douche italienne, remplacement baignoire, accessibilite PMR, meuble vasque... Un interlocuteur unique du debut a la fin.",
    icon: "Bath",
    slug: "/renovation-salle-de-bain",
  },
  {
    title: "Chauffage",
    shortDescription: "Chaudiere, pompe a chaleur, plancher chauffant, entretien annuel.",
    description:
      "Installation et remplacement de chaudiere gaz condensation, pompe a chaleur air-eau, plancher chauffant, radiateurs. Entretien annuel obligatoire et depannage de votre systeme de chauffage.",
    icon: "Flame",
    slug: "/chauffage",
  },
  {
    title: "Chauffe-eau",
    shortDescription: "Remplacement, ballon thermodynamique, detartrage.",
    description:
      "Remplacement de chauffe-eau electrique ou gaz, installation de ballon thermodynamique pour reduire votre facture energetique. Detartrage et entretien pour prolonger la duree de vie de votre equipement.",
    icon: "Droplets",
    slug: "/chauffe-eau",
  },
  {
    title: "Entretien",
    shortDescription: "Contrats d'entretien chaudiere et maintenance preventive.",
    description:
      "L'entretien annuel de votre chaudiere est obligatoire. Nous proposons des contrats d'entretien incluant la visite annuelle, le depannage prioritaire et les pieces d'usure.",
    icon: "ClipboardCheck",
    slug: "/chauffage#entretien",
  },
];
