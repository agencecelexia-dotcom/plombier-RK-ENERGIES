export const siteConfig = {
  name: "Durand Plomberie",
  legalName: "Durand Plomberie SARL",
  description:
    "Plombier chauffagiste a Lyon. Depannage urgent 7j/7, installation, renovation salle de bain, chauffage. Devis gratuit.",
  url: "https://www.durand-plomberie-lyon.fr",
  phone: "06 72 45 89 13",
  phoneHref: "tel:+33672458913",
  email: "contact@durand-plomberie.fr",
  address: {
    street: "14 rue des Ateliers",
    city: "Lyon",
    postalCode: "69003",
    region: "Auvergne-Rhone-Alpes",
    country: "France",
  },
  openingHours: {
    weekdays: "7h - 20h",
    saturday: "8h - 18h",
    sunday: "Ferme",
    emergency: "24h/24 - 7j/7",
  },
  social: {
    facebook: "https://facebook.com/durand-plomberie-lyon",
    instagram: "https://instagram.com/durandplomberie",
    google:
      "https://g.page/durand-plomberie-lyon",
  },
  siret: "912 345 678 00012",
  rge: "RGE QualiPAC n°12345",
  assuranceDecennale: "AXA - Police n°789456123",
  yearsExperience: 15,
  interventionsCount: 3500,
  googleRating: 4.8,
  googleReviewCount: 127,
  foundedYear: 2011,
  founder: "Marc Durand",
} as const;

export type SiteConfig = typeof siteConfig;
