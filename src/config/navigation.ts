import type { NavItem } from "@/types";

export const mainNavItems: NavItem[] = [
  { label: "Accueil", href: "/" },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Depannage urgent", href: "/depannage-plomberie" },
      { label: "Plomberie generale", href: "/plomberie" },
      { label: "Salle de bain", href: "/renovation-salle-de-bain" },
      { label: "Chauffage", href: "/chauffage" },
      { label: "Chauffe-eau", href: "/chauffe-eau" },
    ],
  },
  { label: "Realisations", href: "/realisations" },
  { label: "Avis clients", href: "/avis-clients" },
  { label: "A propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export const footerNavItems: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Realisations", href: "/realisations" },
  { label: "Avis clients", href: "/avis-clients" },
  { label: "A propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Mentions legales", href: "/mentions-legales" },
];

export const serviceNavItems: NavItem[] = [
  { label: "Depannage urgent", href: "/depannage-plomberie" },
  { label: "Plomberie generale", href: "/plomberie" },
  { label: "Salle de bain", href: "/renovation-salle-de-bain" },
  { label: "Chauffage", href: "/chauffage" },
  { label: "Chauffe-eau", href: "/chauffe-eau" },
];
