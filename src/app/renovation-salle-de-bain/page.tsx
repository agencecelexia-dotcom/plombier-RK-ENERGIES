import type { Metadata } from "next";
import Link from "next/link";
import { Accessibility, ShowerHead, Bath, PaintBucket, ClipboardList, HardHat, CheckCircle, PartyPopper } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { faqSalleDeBain } from "@/config/faq";
import { heroImages, pageImages } from "@/config/images";

export const metadata: Metadata = generatePageMetadata({
  title: `Rénovation salle de bain ${siteConfig.address.city} | Douche italienne`,
  description: `Rénovation de salle de bain à ${siteConfig.address.city}. Douche italienne, rénovation complète, adaptation PMR. Du projet à la réalisation. Devis gratuit.`,
  path: "/renovation-salle-de-bain",
});

const projets = [
  { icon: ShowerHead, title: "Douche italienne", desc: "Receveur extra-plat, carrelage grand format, paroi vitrée, pommeau pluie. Design et accessibilité.", image: "Douche italienne ouverte, receveur extra-plat, carrelage grand format gris clair, pommeau pluie chrome, niche murale eclairee, photo realiste, ratio 4:3", imageKey: "renovation-douche-italienne" },
  { icon: Bath, title: "Rénovation complète", desc: "Démolition, plomberie, carrelage, sanitaires, meuble vasque, éclairage. Un seul interlocuteur.", image: "Magnifique salle de bain renovee style contemporain, grande douche italienne paroi vitree, vasque pierre naturelle, robinetterie laiton brosse, carrelage terrazzo, photo realiste, ratio 4:3", imageKey: "renovation-complete" },
  { icon: Accessibility, title: "Adaptation PMR", desc: "Barre d'appui, siège douche, receveur plain-pied, antidérapant. Éligible MaPrimeAdapt'.", image: "Salle de bain PMR adaptee, barre d'appui chromee, siege douche rabattable, receveur plain-pied antiderapant, espace circulation large, photo realiste, ratio 4:3", imageKey: "renovation-pmr" },
];

const etapes = [
  { icon: ClipboardList, title: "Visite conseil", desc: "Nous venons chez vous pour écouter vos envies, prendre les mesures et vous conseiller." },
  { icon: PaintBucket, title: "Devis détaillé", desc: "Vous recevez un devis précis sous 48h avec le détail des prestations et matériaux." },
  { icon: HardHat, title: "Travaux", desc: "Notre équipe réalise les travaux dans les délais convenus. Chantier propre garanti." },
  { icon: PartyPopper, title: "Réception", desc: "Vérification finale ensemble. Vous ne payez le solde qu'à votre entière satisfaction." },
];

export default function SalleDeBainPage() {
  return (
    <ServicePageLayout
      hero={{
        title: `Rénovation salle de bain à ${siteConfig.address.city} — Du projet à la réalisation`,
        subtitle: "Douche italienne, rénovation complète, adaptation PMR. Un interlocuteur unique du début à la fin.",
        imagePlaceholder: {
          prompt: "Magnifique salle de bain renovee style contemporain, grande douche italienne paroi vitree, vasque pierre naturelle, robinetterie laiton brosse, carrelage terrazzo, plantes vertes, lumiere naturelle, photo realiste haut de gamme, ratio 16:9",
          aspectRatio: "16/9",
          src: heroImages["renovation-sdb"] || undefined,
        },
      }}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Salle de bain" },
      ]}
      faqs={faqSalleDeBain}
    >
      {/* Types de projets */}
      <SectionContainer>
        <SectionHeading
          title="Nos types de projets"
          subtitle="Chaque salle de bain est unique. Nous adaptons nos solutions à vos besoins et votre budget."
        />
        <div className="grid md:grid-cols-3 gap-8 stagger-children" data-animate="fade-up">
          {projets.map((p) => (
            <div key={p.title} className="space-y-4">
              <ImagePlaceholder prompt={p.image} src={pageImages[p.imageKey] || undefined} aspectRatio="4/3" alt={p.title} />
              <div className="flex items-center gap-2">
                <p.icon className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-normal text-foreground">{p.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Process */}
      <SectionContainer variant="warm">
        <SectionHeading
          title="Notre méthode en 4 étapes"
          subtitle="Un accompagnement clé en main pour un résultat à la hauteur de vos attentes."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {etapes.map((e, i) => (
            <div key={e.title} className="text-center relative">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <e.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                {i + 1}
              </div>
              <h3 className="font-normal text-foreground mb-2">{e.title}</h3>
              <p className="text-sm text-muted-foreground">{e.desc}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Galerie */}
      <SectionContainer>
        <SectionHeading
          title="Nos réalisations salle de bain"
          subtitle="Découvrez nos derniers projets de rénovation."
        />
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/realisations">Voir toutes nos réalisations</Link>
          </Button>
        </div>
      </SectionContainer>

      {/* Services liés */}
      <SectionContainer>
        <SectionHeading title="Services liés" />
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild variant="outline"><Link href="/plomberie">Plomberie</Link></Button>
          <Button asChild variant="outline"><Link href="/chauffe-eau">Chauffe-eau</Link></Button>
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
