/**
 * Mapping des images du site — photos AQUALEO cohérentes.
 */

// ============================================================
// Images partagées
// ============================================================

/** Hero générique — blog, avis-clients, contact, a-propos, realisations, cta-bandeau */
const HERO_GENERIQUE = "/images/heroes/hero-generique.jpeg";

/** Chaudière gaz — page + réalisation castres/valence */
const IMG_CHAUDIERE_GAZ = "/images/pages/chauffage-chaudiere-gaz.jpeg";

/** Plancher chauffant — page + réalisation albi */
const IMG_PLANCHER_CHAUFFANT = "/images/pages/chauffage-plancher-chauffant.jpeg";

/** Urgence fuite — section + réalisation dépannage lavaur before */
const IMG_FUITE_EAU = "/images/sections/section-urgence-fuite.jpeg";

// ============================================================
// Hero pages
// ============================================================
export const heroImages: Record<string, string> = {
  "accueil":             "/images/heroes/hero-accueil.jpeg",
  "depannage-plomberie": "/images/heroes/hero-depannage.jpeg",
  "plomberie":           "/images/heroes/hero-plomberie.png",
  "renovation-sdb":      "/images/heroes/renovation-sdb.jpeg",
  "chauffage":           "/images/heroes/chauffage.jpeg",
  "chauffe-eau":         "/images/heroes/chauffe-eau.jpeg",
  "blog":                HERO_GENERIQUE,
  "avis-clients":        HERO_GENERIQUE,
  "contact":             HERO_GENERIQUE,
  "a-propos":            HERO_GENERIQUE,
  "realisations":        HERO_GENERIQUE,
};

// ============================================================
// Sections
// ============================================================
export const sectionImages: Record<string, string> = {
  "cta-bandeau":  HERO_GENERIQUE,
  "urgence-card": IMG_FUITE_EAU,
  "projet-card":  "/images/sections/section-projet-sdb.jpeg",
};

// ============================================================
// Pages spécifiques
// ============================================================
export const pageImages: Record<string, string> = {
  // A propos
  "a-propos-fondateur":          "/images/pages/a-propos-fondateur.jpeg",
  "a-propos-equipe":             "/images/pages/a-propos-equipe.jpeg",
  // Plomberie
  "plomberie-robinetterie":      "/images/pages/page-robinetterie.jpeg",
  "plomberie-tuyauterie":        "/images/heroes/hero-reparation-tuyauterie.jpeg",
  "plomberie-recherche-fuite":   "/images/pages/page-recherche-fuite.jpeg",
  "plomberie-mise-aux-normes":   "/images/pages/page-wc-suspendu.jpeg",
  // Renovation salle de bain
  "renovation-douche-italienne": "/images/pages/page-douche-italienne.png",
  "renovation-complete":         "/images/heroes/renovation-sdb.jpeg",
  "renovation-pmr":              "/images/pages/renovation-pmr.jpeg",
  // Chauffage
  "chauffage-chaudiere-gaz":     IMG_CHAUDIERE_GAZ,
  "chauffage-pac":               "/images/pages/chauffage-pac.jpeg",
  "chauffage-plancher-chauffant": IMG_PLANCHER_CHAUFFANT,
};

// ============================================================
// Réalisations avant/après — RK Energies (Tarn)
// ============================================================
export const realisationImages: Record<string, string> = {
  // Climatisation réversible — Albi
  "clim-reversible-albi-before":       "/images/heroes/chauffage.jpeg",
  "clim-reversible-albi-after":        "/images/pages/chauffage-pac.jpeg",
  // PAC air-eau — Albi
  "pac-albi-before":                   "/images/realisations/pac-bron-before.jpeg",
  "pac-albi-after":                    "/images/realisations/pac-bron-after.png",
  // Plomberie complète — Gaillac
  "plomberie-gaillac-before":          "/images/realisations/real-cuisine-versailles-before.jpeg",
  "plomberie-gaillac-after":           "/images/realisations/real-cuisine-versailles-after.jpeg",
  // Chauffe-eau thermodynamique — Carmaux
  "chauffe-eau-carmaux-before":        "/images/realisations/chauffe-eau-caluire-before.png",
  "chauffe-eau-carmaux-after":         "/images/realisations/chauffe-eau-caluire-after.png",
  // Chaudière gaz condensation — Castres
  "chaudiere-gaz-castres-before":      "/images/realisations/chaudiere-tassin-before.png",
  "chaudiere-gaz-castres-after":       IMG_CHAUDIERE_GAZ,
  // Dépannage fuite urgente — Lavaur
  "depannage-fuite-lavaur-before":     IMG_FUITE_EAU,
  "depannage-fuite-lavaur-after":      "/images/realisations/real-fuite-boulogne-after.jpeg",
  // Climatisation multi-split — Graulhet
  "clim-multi-split-graulhet-before":  "/images/heroes/chauffage.jpeg",
  "clim-multi-split-graulhet-after":   "/images/pages/chauffage-pac.jpeg",
  // Plancher chauffant — Albi
  "plancher-chauffant-albi-before":    "/images/realisations/plancher-chauffant-ecully-before.png",
  "plancher-chauffant-albi-after":     IMG_PLANCHER_CHAUFFANT,
  // Plomberie salle de bain — Rabastens
  "sdb-plomberie-rabastens-before":    "/images/realisations/real-sdb-paris15-before.jpeg",
  "sdb-plomberie-rabastens-after":     "/images/realisations/real-sdb-paris15-after.jpeg",
  // Entretien chaudière — Valence-d'Albigeois
  "entretien-chaudiere-valence-before": "/images/realisations/chaudiere-tassin-before.png",
  "entretien-chaudiere-valence-after":  IMG_CHAUDIERE_GAZ,
};
