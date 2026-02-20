import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { siteConfig } from "@/config/site";
import { heroImages } from "@/config/images";

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: `Blog plomberie chauffage climatisation Tarn | Conseils RK Energies`,
    description: `Conseils plomberie, chauffage, climatisation et économies d'énergie par RK Energies, votre artisan dans le Tarn (81). Articles pratiques et guides.`,
    path: "/blog",
  }),
  robots: { index: true, follow: true },
};

const articles = [
  {
    slug: "entretien-chaudiere-obligatoire",
    title: "Entretien chaudière : ce que dit la loi et comment économiser",
    category: "Chauffage",
    date: "15 février 2026",
    readTime: "5 min",
    excerpt:
      "L'entretien annuel de votre chaudière gaz est obligatoire en France depuis 2009. Mais au-delà de l'obligation légale, c'est aussi le meilleur moyen de réduire votre facture de chauffage et d'éviter les pannes en hiver. RK Energies vous explique tout.",
    color: "bg-orange-50 border-orange-100",
    badgeColor: "bg-orange-100 text-orange-700",
  },
  {
    slug: "climatisation-reversible-tarn",
    title: "Climatisation réversible dans le Tarn : le guide complet 2026",
    category: "Climatisation",
    date: "8 février 2026",
    readTime: "7 min",
    excerpt:
      "Avec les étés de plus en plus chauds dans le Tarn, la climatisation réversible est devenue incontournable. Mono-split, multi-split, gainable… Découvrez comment choisir votre système, les prix, les aides disponibles et les erreurs à éviter.",
    color: "bg-blue-50 border-blue-100",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    slug: "economies-energie-chauffage",
    title: "5 gestes simples pour réduire votre facture de chauffage de 20%",
    category: "Économies d'énergie",
    date: "28 janvier 2026",
    readTime: "4 min",
    excerpt:
      "Entre le réglage optimal de votre thermostat, la purge des radiateurs et le remplacement d'une chaudière vieillissante, il existe des actions concrètes pour faire baisser votre facture. Raphael Khelifi partage ses conseils de professionnel.",
    color: "bg-green-50 border-green-100",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    slug: "depannage-urgence-plomberie",
    title: "Fuite d'eau : les bons réflexes en attendant le plombier",
    category: "Dépannage",
    date: "20 janvier 2026",
    readTime: "3 min",
    excerpt:
      "Une fuite d'eau peut rapidement causer des dégâts importants dans votre logement. En attendant l'intervention de RK Energies, voici les gestes essentiels pour limiter les dégâts et sécuriser votre installation.",
    color: "bg-red-50 border-red-100",
    badgeColor: "bg-red-100 text-red-700",
  },
  {
    slug: "pompe-a-chaleur-aides-2026",
    title: "Pompe à chaleur 2026 : toutes les aides disponibles dans le Tarn",
    category: "Chauffage",
    date: "10 janvier 2026",
    readTime: "6 min",
    excerpt:
      "MaPrimeRénov', CEE, éco-prêt à taux zéro, TVA réduite… Les aides pour installer une pompe à chaleur restent nombreuses en 2026. RK Energies vous guide pour cumuler les aides et financer jusqu'à 70% de votre installation.",
    color: "bg-purple-50 border-purple-100",
    badgeColor: "bg-purple-100 text-purple-700",
  },
];

export default function BlogPage() {
  return (
    <>
      <HeroSection
        variant="page"
        title="Blog — Conseils plomberie, chauffage et climatisation"
        subtitle={`Les conseils pratiques de ${siteConfig.name} pour votre confort et vos économies d'énergie.`}
        imagePlaceholder={{
          prompt: "Vue aerienne plongee d'un plombier en uniforme travaillant sur tuyauterie cuivre neuve dans maison en construction, lumiere naturelle, tons chauds, photo realiste, ratio 21:9",
          aspectRatio: "21/9",
          src: heroImages["blog"] || undefined,
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Blog" },
          ]}
        />
      </div>

      <SectionContainer>
        <SectionHeading
          title="Nos derniers articles"
          subtitle="Conseils pratiques, guides et actualités pour votre plomberie, chauffage et climatisation dans le Tarn."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.slug}
              className={`rounded-2xl border p-6 ${article.color} flex flex-col gap-4 hover:shadow-md transition-shadow`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${article.badgeColor}`}>
                  {article.category}
                </span>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-bold text-neutral-900 mb-2 leading-snug">
                  {article.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
              <div className="mt-auto pt-2 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  {article.date}
                </span>
                <Link
                  href={`/contact`}
                  className="text-sm font-semibold text-primary hover:underline flex items-center gap-1"
                >
                  Lire plus
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center p-8 bg-primary/5 rounded-2xl">
          <h3 className="text-xl font-bold text-neutral-900 mb-2">Une question ? Un projet ?</h3>
          <p className="text-muted-foreground mb-6">
            Raphael Khelifi vous répond par téléphone ou par e-mail pour tout devis ou conseil.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={siteConfig.phoneHref}
              className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-colors"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
