export const siteConfig = {
  name: "RK Energies",
  legalName: "RK Energies",
  description:
    "Plombier chauffagiste et climaticien dans le Tarn (81). Dépannage urgent 7j/7, installation chauffage, climatisation, plomberie. Devis gratuit.",
  url: "https://www.rkenergies.fr",
  phone: "07 55 60 21 86",
  phoneHref: "tel:+33755602186",
  email: "rk.energies81@gmail.com",
  address: {
    street: "Tarn",
    city: "Albi",
    postalCode: "81000",
    region: "Occitanie",
    country: "France",
  },
  openingHours: {
    weekdays: "7h - 20h",
    saturday: "8h - 18h",
    sunday: "Sur appel",
    emergency: "24h/24 - 7j/7",
  },
  social: {
    facebook: "https://facebook.com/rkenergies",
    instagram: "https://instagram.com/rkenergies",
    google: "https://g.page/rk-energies",
  },
  siret: "En cours d'enregistrement",
  rge: "Certification RGE en cours",
  assuranceDecennale: "AXA Pro — Responsabilité Civile Décennale",
  yearsExperience: 8,
  interventionsCount: 1200,
  googleRating: 4.9,
  googleReviewCount: 52,
  foundedYear: 2017,
  founder: "Raphael Khelifi",
} as const;

export type SiteConfig = typeof siteConfig;
