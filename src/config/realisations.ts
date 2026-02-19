import type { Realisation } from "@/types";

export const realisations: Realisation[] = [
  {
    id: "sdb-villeurbanne",
    title: "Renovation salle de bain complete",
    category: "Salle de bain",
    city: "Villeurbanne",
    description:
      "Transformation d'une salle de bain annees 80 en espace moderne avec douche italienne, meuble vasque et miroir LED.",
    beforePrompt:
      "Vieille salle de bain annees 80, baignoire jaunatre, carrelage rose fissure, robinetterie rouillee, photo realiste brute",
    afterPrompt:
      "Meme salle de bain renovee, douche italienne carrelage gris anthracite, meuble vasque bois clair, miroir LED, photo realiste",
    aspectRatio: "4/3",
  },
  {
    id: "cuisine-lyon3",
    title: "Refection plomberie cuisine",
    category: "Plomberie",
    city: "Lyon 3e",
    description:
      "Remplacement complet de la tuyauterie et installation d'un evier encastre avec robinet col de cygne.",
    beforePrompt:
      "Vieille cuisine evier inox use, tuyauterie apparente oxydee, robinet qui goutte, photo realiste",
    afterPrompt:
      "Cuisine moderne evier encastre granit noir, robinet col de cygne chrome, tuyauterie neuve cachee, photo realiste",
    aspectRatio: "4/3",
  },
  {
    id: "chauffe-eau-caluire",
    title: "Remplacement chauffe-eau",
    category: "Chauffe-eau",
    city: "Caluire-et-Cuire",
    description:
      "Remplacement d'un vieux chauffe-eau rouille par un ballon thermodynamique classe A.",
    beforePrompt:
      "Vieux chauffe-eau rouille encrasse dans placard technique, tuyaux oxydes, photo realiste",
    afterPrompt:
      "Chauffe-eau thermodynamique neuf blanc, tuyauterie cuivre neuve, etiquette energie A, photo realiste",
    aspectRatio: "4/3",
  },
  {
    id: "pac-bron",
    title: "Installation pompe a chaleur",
    category: "Chauffage",
    city: "Bron",
    description:
      "Remplacement d'une vieille chaudiere fioul par une pompe a chaleur air-eau compacte.",
    beforePrompt:
      "Vieille chaudiere fioul volumineuse dans cave sombre, tuyaux rouilles, photo realiste",
    afterPrompt:
      "Pompe a chaleur air-eau compacte installee dans buanderie moderne, ecran digital, photo realiste",
    aspectRatio: "4/3",
  },
  {
    id: "sdb-pmr-lyon6",
    title: "Salle de bain PMR",
    category: "Salle de bain",
    city: "Lyon 6e",
    description:
      "Adaptation d'une salle de bain pour personne a mobilite reduite avec douche plain-pied et barres d'appui.",
    beforePrompt:
      "Salle de bain etroite avec baignoire haute, acces difficile, carrelage glissant, photo realiste",
    afterPrompt:
      "Salle de bain PMR adaptee, barre d'appui chromee, siege douche rabattable, receveur plain-pied antiderapant, espace circulation large, photo realiste",
    aspectRatio: "4/3",
  },
  {
    id: "chaudiere-tassin",
    title: "Remplacement chaudiere gaz",
    category: "Chauffage",
    city: "Tassin-la-Demi-Lune",
    description:
      "Installation d'une chaudiere gaz a condensation derniere generation en remplacement d'un modele de 20 ans.",
    beforePrompt:
      "Vieille chaudiere gaz murale encrassee, tuyaux anciens, thermostat analogique, photo realiste",
    afterPrompt:
      "Chaudiere gaz condensation murale blanche moderne, ecran digital vert, tuyauterie cuivre propre, thermostat connecte, photo realiste",
    aspectRatio: "4/3",
  },
  {
    id: "douche-lyon7",
    title: "Douche italienne sur mesure",
    category: "Salle de bain",
    city: "Lyon 7e",
    description:
      "Creation d'une douche italienne avec receveur extra-plat, carrelage grand format et niche murale eclairee.",
    beforePrompt:
      "Salle de bain avec baignoire classique blanche, murs peints ecailles, sol vinyle use, photo realiste",
    afterPrompt:
      "Douche italienne ouverte, receveur extra-plat, carrelage grand format gris clair, pommeau pluie chrome, niche murale eclairee, photo realiste",
    aspectRatio: "4/3",
  },
  {
    id: "plancher-chauffant-ecully",
    title: "Installation plancher chauffant",
    category: "Chauffage",
    city: "Ecully",
    description:
      "Pose d'un plancher chauffant hydraulique dans une maison en renovation complete.",
    beforePrompt:
      "Sol brut en beton dans piece en renovation, gaines electriques apparentes, chantier en cours, photo realiste",
    afterPrompt:
      "Installation plancher chauffant en cours, tubes PER rouges en serpentin sur isolant argente, vue plongee, chantier propre, photo realiste",
    aspectRatio: "4/3",
  },
  {
    id: "depannage-lyon2",
    title: "Reparation fuite urgente",
    category: "Plomberie",
    city: "Lyon 2e",
    description:
      "Intervention d'urgence pour une fuite sur canalisation d'eau chaude dans un appartement ancien.",
    beforePrompt:
      "Fuite d'eau importante sur tuyau cuivre sous evier, gouttes d'eau, sol mouille, urgence, photo realiste",
    afterPrompt:
      "Tuyauterie cuivre neuve sous evier, raccords neufs chromes, sol sec, reparation propre, photo realiste",
    aspectRatio: "4/3",
  },
  {
    id: "sdb-complete-oullins",
    title: "Renovation salle de bain luxe",
    category: "Salle de bain",
    city: "Oullins",
    description:
      "Renovation haut de gamme avec double vasque, robinetterie laiton brosse et carrelage terrazzo.",
    beforePrompt:
      "Salle de bain ancienne, carrelage blanc basique, lavabo sur colonne, baignoire jaunatre, eclairage neon, photo realiste",
    afterPrompt:
      "Magnifique salle de bain renovee style contemporain, grande douche italienne paroi vitree, vasque pierre naturelle, robinetterie laiton brosse, carrelage terrazzo, plantes vertes, lumiere naturelle, photo realiste haut de gamme",
    aspectRatio: "4/3",
  },
];
