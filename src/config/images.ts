/**
 * Mapping des images du site — 33 images uniques pour 46 emplacements.
 *
 * Les constantes partagees permettent de remplir UN chemin
 * et toutes les pages qui reutilisent cette image se mettent a jour.
 */

// ============================================================
// Images partagees (1 fichier → plusieurs emplacements)
// ============================================================

/** #7 — 21:9 — heroes blog, avis-clients, contact, a-propos, realisations + section cta-bandeau */
const HERO_GENERIQUE = "/images/heroes/generique-plombier.jpeg";

/** #3 — 16:9 — hero plomberie + page plomberie-tuyauterie */
const IMG_PLOMBERIE_HERO = "/images/heroes/plomberie.jpeg";

/** #4 — 16:9 — hero renovation-sdb + page renovation-complete + realisation sdb-oullins-after */
const IMG_RENOVATION_SDB = "/images/heroes/renovation-sdb.jpeg";

/** #15 — 4:3 — page douche-italienne + realisation douche-lyon7-after */
const IMG_DOUCHE_ITALIENNE = "/images/pages/renovation-douche-italienne.jpeg";

/** #16 — 4:3 — page PMR + realisation sdb-pmr-lyon6-after */
const IMG_SDB_PMR = "/images/pages/renovation-pmr.jpeg";

/** #17 — 3:2 — page chaudiere-gaz + realisation chaudiere-tassin-after */
const IMG_CHAUDIERE_GAZ = "/images/pages/chauffage-chaudiere-gaz.jpeg";

/** #19 — 3:2 — page plancher-chauffant + realisation plancher-ecully-after */
const IMG_PLANCHER_CHAUFFANT = "/images/pages/chauffage-plancher-chauffant.jpeg";

/** #8 — 4:3 — section urgence-card + realisation depannage-lyon2-before */
const IMG_FUITE_EAU = "/images/sections/urgence-card.png";

// ============================================================
// Hero pages (11 emplacements → 7 images uniques)
// ============================================================
export const heroImages: Record<string, string> = {
  "accueil":              "/images/heroes/accueil.jpeg",
  "depannage-plomberie":  "/images/heroes/depannage-plomberie.jpeg",
  "plomberie":            IMG_PLOMBERIE_HERO,
  "renovation-sdb":       IMG_RENOVATION_SDB,
  "chauffage":            "/images/heroes/chauffage.jpeg",
  "chauffe-eau":          "/images/heroes/chauffe-eau.jpeg",
  "blog":                 HERO_GENERIQUE,
  "avis-clients":         HERO_GENERIQUE,
  "contact":              HERO_GENERIQUE,
  "a-propos":             HERO_GENERIQUE,
  "realisations":         HERO_GENERIQUE,
};

// ============================================================
// Sections (3 emplacements → 2 images uniques)
// ============================================================
export const sectionImages: Record<string, string> = {
  "cta-bandeau":          HERO_GENERIQUE,
  "urgence-card":         IMG_FUITE_EAU,
  "projet-card":          "/images/sections/projet-card.jpeg",
};

// ============================================================
// Pages specifiques (12 emplacements → 10 images uniques)
// ============================================================
export const pageImages: Record<string, string> = {
  // A propos
  "a-propos-fondateur":          "/images/pages/a-propos-fondateur.jpeg",
  "a-propos-equipe":             "/images/pages/a-propos-equipe.jpeg",
  // Plomberie
  "plomberie-robinetterie":      "/images/pages/plomberie-robinetterie.jpeg",
  "plomberie-tuyauterie":        IMG_PLOMBERIE_HERO,
  "plomberie-recherche-fuite":   "/images/pages/plomberie-recherche-fuite.jpeg",
  "plomberie-mise-aux-normes":   "/images/pages/plomberie-mise-aux-normes.jpeg",
  // Renovation salle de bain
  "renovation-douche-italienne": IMG_DOUCHE_ITALIENNE,
  "renovation-complete":         IMG_RENOVATION_SDB,
  "renovation-pmr":              IMG_SDB_PMR,
  // Chauffage
  "chauffage-chaudiere-gaz":     IMG_CHAUDIERE_GAZ,
  "chauffage-pac":               "/images/pages/chauffage-pac.jpeg",
  "chauffage-plancher-chauffant": IMG_PLANCHER_CHAUFFANT,
};

// ============================================================
// Realisations avant/apres — RK Energies (Tarn)
// Mapping des 10 réalisations × 2 (avant/après) = 20 entrées
// ============================================================
export const realisationImages: Record<string, string> = {
  // Climatisation réversible — Albi
  "clim-reversible-albi-before":       "/images/heroes/chauffage.jpeg",
  "clim-reversible-albi-after":        "/images/pages/chauffage-pac.jpeg",
  // PAC air-eau — Albi
  "pac-albi-before":                   "/images/realisations/pac-bron-before.jpeg",
  "pac-albi-after":                    "/images/realisations/pac-bron-after.png",
  // Plomberie complète — Gaillac
  "plomberie-gaillac-before":          "/images/realisations/cuisine-lyon3-before.png",
  "plomberie-gaillac-after":           "/images/realisations/cuisine-lyon3-after.jpeg",
  // Chauffe-eau thermodynamique — Carmaux
  "chauffe-eau-carmaux-before":        "/images/realisations/chauffe-eau-caluire-before.png",
  "chauffe-eau-carmaux-after":         "/images/realisations/chauffe-eau-caluire-after.png",
  // Chaudière gaz condensation — Castres
  "chaudiere-gaz-castres-before":      "/images/realisations/chaudiere-tassin-before.png",
  "chaudiere-gaz-castres-after":       IMG_CHAUDIERE_GAZ,
  // Dépannage fuite urgente — Lavaur
  "depannage-fuite-lavaur-before":     IMG_FUITE_EAU,
  "depannage-fuite-lavaur-after":      "/images/realisations/depannage-lyon2-after.png",
  // Climatisation multi-split — Graulhet
  "clim-multi-split-graulhet-before":  IMG_RENOVATION_SDB,
  "clim-multi-split-graulhet-after":   "/images/pages/chauffage-pac.jpeg",
  // Plancher chauffant — Albi
  "plancher-chauffant-albi-before":    "/images/realisations/plancher-chauffant-ecully-before.png",
  "plancher-chauffant-albi-after":     IMG_PLANCHER_CHAUFFANT,
  // Plomberie salle de bain — Rabastens
  "sdb-plomberie-rabastens-before":    "/images/pages/plomberie-mise-aux-normes.jpeg",
  "sdb-plomberie-rabastens-after":     "/images/pages/plomberie-robinetterie.jpeg",
  // Entretien chaudière — Valence-d'Albigeois
  "entretien-chaudiere-valence-before": "/images/realisations/chaudiere-tassin-before.png",
  "entretien-chaudiere-valence-after":  IMG_CHAUDIERE_GAZ,
};
