import type { Service } from "@/types";

export const services: Service[] = [
  {
    title: "Dépannage urgent",
    shortDescription: "Intervention rapide en moins de 2h pour toutes vos urgences plomberie et chauffage.",
    description:
      "Fuite d'eau, canalisation bouchée, dégât des eaux, panne de chaudière ou de climatisation... RK Energies intervient en urgence 7j/7 dans tout le Tarn. Diagnostic sur place et réparation immédiate dans la majorité des cas.",
    icon: "Siren",
    slug: "/depannage-plomberie",
  },
  {
    title: "Plomberie générale",
    shortDescription: "Installation, remplacement et mise aux normes de vos équipements.",
    description:
      "Robinetterie, tuyauterie, raccordements, WC, éviers, recherche de fuite... RK Energies intervient pour tous vos travaux de plomberie, de l'installation neuve à la mise aux normes de vos installations existantes.",
    icon: "Wrench",
    slug: "/plomberie",
  },
  {
    title: "Climatisation",
    shortDescription: "Climatisation réversible, split, gainable — installation et entretien.",
    description:
      "Installation de systèmes de climatisation réversible (air-air, gainable, multi-split) pour votre confort été comme hiver. RK Energies vous conseille sur la solution la mieux adaptée à votre logement et votre budget.",
    icon: "Wind",
    slug: "/climatisation",
  },
  {
    title: "Chauffage",
    shortDescription: "Chaudière, pompe à chaleur, plancher chauffant, entretien annuel.",
    description:
      "Installation et remplacement de chaudière gaz condensation, pompe à chaleur air-eau, plancher chauffant, radiateurs. Entretien annuel obligatoire et dépannage de votre système de chauffage dans le Tarn.",
    icon: "Flame",
    slug: "/chauffage",
  },
  {
    title: "Chauffe-eau",
    shortDescription: "Remplacement, ballon thermodynamique, détartrage.",
    description:
      "Remplacement de chauffe-eau électrique ou gaz, installation de ballon thermodynamique pour réduire votre facture énergétique. Détartrage et entretien pour prolonger la durée de vie de votre équipement.",
    icon: "Droplets",
    slug: "/chauffe-eau",
  },
  {
    title: "Maintenance",
    shortDescription: "Contrats d'entretien chaudière, clim et maintenance préventive.",
    description:
      "L'entretien annuel de votre chaudière est obligatoire. RK Energies propose des contrats de maintenance incluant la visite annuelle chaudière et climatisation, le dépannage prioritaire et les pièces d'usure.",
    icon: "ClipboardCheck",
    slug: "/chauffage#entretien",
  },
];
