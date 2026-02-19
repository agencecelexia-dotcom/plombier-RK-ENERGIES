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

export const metadata: Metadata = generatePageMetadata({
  title: `Renovation salle de bain ${siteConfig.address.city} | Douche italienne`,
  description: `Renovation de salle de bain a ${siteConfig.address.city}. Douche italienne, renovation complete, adaptation PMR. Du projet a la realisation. Devis gratuit.`,
  path: "/renovation-salle-de-bain",
});

const projets = [
  { icon: ShowerHead, title: "Douche italienne", desc: "Receveur extra-plat, carrelage grand format, paroi vitree, pommeau pluie. Design et accessibilite.", image: "Douche italienne ouverte, receveur extra-plat, carrelage grand format gris clair, pommeau pluie chrome, niche murale eclairee, photo realiste" },
  { icon: Bath, title: "Renovation complete", desc: "Demolition, plomberie, carrelage, sanitaires, meuble vasque, eclairage. Un seul interlocuteur.", image: "Magnifique salle de bain renovee style contemporain, grande douche italienne paroi vitree, vasque pierre naturelle, robinetterie laiton brosse, carrelage terrazzo, photo realiste" },
  { icon: Accessibility, title: "Adaptation PMR", desc: "Barre d'appui, siege douche, receveur plain-pied, antiderapant. Eligible MaPrimeAdapt'.", image: "Salle de bain PMR adaptee, barre d'appui chromee, siege douche rabattable, receveur plain-pied antiderapant, espace circulation large, photo realiste" },
];

const etapes = [
  { icon: ClipboardList, title: "Visite conseil", desc: "Nous venons chez vous pour ecouter vos envies, prendre les mesures et vous conseiller." },
  { icon: PaintBucket, title: "Devis detaille", desc: "Vous recevez un devis precis sous 48h avec le detail des prestations et materiaux." },
  { icon: HardHat, title: "Travaux", desc: "Notre equipe realise les travaux dans les delais convenus. Chantier propre garanti." },
  { icon: PartyPopper, title: "Reception", desc: "Verification finale ensemble. Vous ne payez le solde qu'a votre entiere satisfaction." },
];

export default function SalleDeBainPage() {
  return (
    <ServicePageLayout
      hero={{
        title: `Renovation salle de bain a ${siteConfig.address.city} — Du projet a la realisation`,
        subtitle: "Douche italienne, renovation complete, adaptation PMR. Un interlocuteur unique du debut a la fin.",
        imagePlaceholder: {
          prompt: "Magnifique salle de bain renovee style contemporain, grande douche italienne paroi vitree, vasque pierre naturelle, robinetterie laiton brosse, carrelage terrazzo, plantes vertes, lumiere naturelle, photo realiste haut de gamme",
          aspectRatio: "16/9",
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
          subtitle="Chaque salle de bain est unique. Nous adaptons nos solutions a vos besoins et votre budget."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {projets.map((p) => (
            <div key={p.title} className="space-y-4">
              <ImagePlaceholder prompt={p.image} aspectRatio="4/3" alt={p.title} />
              <div className="flex items-center gap-2">
                <p.icon className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-bold text-primary">{p.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Process */}
      <SectionContainer variant="gray">
        <SectionHeading
          title="Notre methode en 4 etapes"
          subtitle="Un accompagnement cle en main pour un resultat a la hauteur de vos attentes."
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
              <h3 className="font-bold text-primary mb-2">{e.title}</h3>
              <p className="text-sm text-muted-foreground">{e.desc}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Galerie */}
      <SectionContainer>
        <SectionHeading
          title="Nos realisations salle de bain"
          subtitle="Decouvrez nos derniers projets de renovation."
        />
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/realisations">Voir toutes nos realisations</Link>
          </Button>
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
