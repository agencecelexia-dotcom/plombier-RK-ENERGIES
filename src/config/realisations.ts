import type { Realisation } from "@/types";

export const realisations: Realisation[] = [
  {
    id: "clim-reversible-albi",
    title: "Installation climatisation réversible",
    category: "Climatisation",
    city: "Albi",
    description:
      "Installation d'un système de climatisation réversible air-air dans une maison individuelle. Confort optimal été comme hiver.",
    beforePrompt:
      "Pièce de vie maison sans climatisation, chaleur visible, radiateur électrique ancien au mur, photo réaliste, ratio 4:3",
    afterPrompt:
      "Salon moderne avec unité intérieure climatisation murale blanche, télécommande, ambiance fraîche et confortable, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "pac-albi",
    title: "Installation pompe à chaleur air-eau",
    category: "Chauffage",
    city: "Albi",
    description:
      "Remplacement d'une vieille chaudière fioul par une pompe à chaleur air-eau. Économies d'énergie immédiates et éligible MaPrimeRénov'.",
    beforePrompt:
      "Vieille chaudière fioul volumineuse dans cave sombre, tuyaux rouillés, photo réaliste, ratio 4:3",
    afterPrompt:
      "Pompe à chaleur air-eau compacte installée en buanderie moderne, écran digital, tuyauterie neuve, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "plomberie-gaillac",
    title: "Réfection plomberie complète",
    category: "Plomberie",
    city: "Gaillac",
    description:
      "Remplacement complet de la tuyauterie d'une maison ancienne avec mise aux normes de toutes les installations.",
    beforePrompt:
      "Tuyauterie ancienne oxydée apparente dans cave, raccords rouillés, robinetterie qui fuit, photo réaliste, ratio 4:3",
    afterPrompt:
      "Tuyauterie cuivre neuve bien rangée, raccords neufs propres, robinetterie moderne chromée, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "chauffe-eau-carmaux",
    title: "Remplacement chauffe-eau thermodynamique",
    category: "Chauffe-eau",
    city: "Carmaux",
    description:
      "Remplacement d'un vieux chauffe-eau électrique par un ballon thermodynamique classe A — 3 fois moins de consommation.",
    beforePrompt:
      "Vieux chauffe-eau électrique rouillé dans placard technique, tuyaux oxydés, photo réaliste, ratio 4:3",
    afterPrompt:
      "Chauffe-eau thermodynamique neuf blanc, tuyauterie cuivre neuve, étiquette énergie A, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "chaudiere-gaz-castres",
    title: "Remplacement chaudière gaz condensation",
    category: "Chauffage",
    city: "Castres",
    description:
      "Installation d'une chaudière gaz à condensation dernière génération en remplacement d'un modèle vieux de 18 ans.",
    beforePrompt:
      "Vieille chaudière gaz murale encrassée, tuyaux anciens, thermostat analogique vieilli, photo réaliste, ratio 4:3",
    afterPrompt:
      "Chaudière gaz condensation murale blanche moderne, écran digital vert, tuyauterie cuivre propre, thermostat connecté, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "depannage-fuite-lavaur",
    title: "Dépannage fuite urgente",
    category: "Plomberie",
    city: "Lavaur",
    description:
      "Intervention d'urgence pour une fuite importante sur canalisation d'eau chaude dans un appartement. Réparation définitive en 2 heures.",
    beforePrompt:
      "Fuite d'eau importante sur tuyau cuivre sous évier, gouttes d'eau, sol mouillé, urgence, photo réaliste, ratio 4:3",
    afterPrompt:
      "Tuyauterie cuivre neuve sous évier, raccords neufs chromés, sol sec, réparation propre et soignée, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "clim-multi-split-graulhet",
    title: "Climatisation multi-split",
    category: "Climatisation",
    city: "Graulhet",
    description:
      "Installation d'un système multi-split pour climatiser 3 pièces depuis une seule unité extérieure.",
    beforePrompt:
      "Salon et chambres sans climatisation, pièces chaudes en été, fenêtres ouvertes, photo réaliste, ratio 4:3",
    afterPrompt:
      "Unité extérieure climatisation compacte sur terrasse, 3 unités intérieures murales blanches discrètes, câblage soigné, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "plancher-chauffant-albi",
    title: "Installation plancher chauffant",
    category: "Chauffage",
    city: "Albi",
    description:
      "Pose d'un plancher chauffant hydraulique dans une maison en rénovation. Confort thermique optimal et économies d'énergie.",
    beforePrompt:
      "Sol brut en béton dans pièce en rénovation, gaines apparentes, chantier en cours, photo réaliste, ratio 4:3",
    afterPrompt:
      "Installation plancher chauffant en cours, tubes PER rouges en serpentin sur isolant argenté, vue plongée, chantier propre, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "sdb-plomberie-rabastens",
    title: "Plomberie salle de bain complète",
    category: "Plomberie",
    city: "Rabastens",
    description:
      "Installation complète de la plomberie d'une salle de bain neuve : douche, vasque, WC suspendu, robinetterie.",
    beforePrompt:
      "Salle de bain en chantier, murs bruts, tuyaux apparents non raccordés, sol en béton, photo réaliste, ratio 4:3",
    afterPrompt:
      "Salle de bain neuve moderne, douche à l'italienne, vasque design, WC suspendu, robinetterie chromée, tout installé proprement, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "entretien-chaudiere-valence",
    title: "Entretien chaudière annuel",
    category: "Maintenance",
    city: "Valence-d'Albigeois",
    description:
      "Entretien annuel obligatoire d'une chaudière gaz avec nettoyage, contrôle combustion et remise de l'attestation.",
    beforePrompt:
      "Technicien vérifiant chaudière gaz avec outillage professionnel, carnet d'entretien, photo réaliste, ratio 4:3",
    afterPrompt:
      "Chaudière gaz propre après entretien, technicien remettant attestation au client, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
];
