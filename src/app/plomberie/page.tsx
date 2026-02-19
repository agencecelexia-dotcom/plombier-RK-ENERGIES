import type { Metadata } from "next";
import { Wrench, Search, Pipette, ShieldCheck, Sparkles, CheckCircle } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { faqPlomberie } from "@/config/faq";

export const metadata: Metadata = generatePageMetadata({
  title: `Plombier ${siteConfig.address.city} | Installation et reparation`,
  description: `Plombier professionnel a ${siteConfig.address.city}. Installation, reparation, mise aux normes plomberie. Robinetterie, tuyauterie, WC, recherche de fuite. Devis gratuit.`,
  path: "/plomberie",
});

const servicesPlomberie = [
  { icon: Pipette, title: "Robinetterie", desc: "Installation et remplacement de robinets, mitigeurs, douchettes. Toutes marques.", image: "Gros plan mains de plombier serrant un raccord cuivre avec une pince, travail de precision, photo realiste" },
  { icon: Wrench, title: "Tuyauterie et raccordements", desc: "Installation, remplacement et reparation de canalisations en cuivre, PER ou multicouche.", image: "Plombier professionnel installant de la tuyauterie en cuivre dans une maison neuve, raccords visibles, travail soigne, photo realiste" },
  { icon: Search, title: "Recherche de fuite", desc: "Detection non destructive par camera thermique, acoustique ou colorimetrique.", image: "Plombier utilisant une camera d'inspection de canalisation, ecran video visible, intervention technique, photo realiste" },
  { icon: ShieldCheck, title: "Mise aux normes", desc: "Mise en conformite de vos installations selon les normes en vigueur (DTU, NF).", image: "Plombier installant un WC suspendu neuf dans une salle de bain en renovation, bati-support visible, photo realiste" },
];

const avantages = [
  "Plus de 15 ans d'experience",
  "Materiel professionnel derniere generation",
  "Chantier laisse propre apres intervention",
  "Garantie decennale sur tous les travaux",
  "Devis detaille gratuit sous 48h",
  "Conseil personnalise et transparent",
];

export default function PlomberiePage() {
  return (
    <ServicePageLayout
      hero={{
        title: `Plombier a ${siteConfig.address.city} — Installation et reparation`,
        subtitle: "Robinetterie, tuyauterie, mise aux normes, recherche de fuite... Intervention rapide et travail soigne.",
        imagePlaceholder: {
          prompt: "Plombier professionnel installant de la tuyauterie en cuivre dans une maison neuve, raccords visibles, travail soigne, lumiere naturelle, photo realiste",
          aspectRatio: "16/9",
        },
      }}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Plomberie" },
      ]}
      faqs={faqPlomberie}
    >
      {/* Services detailles */}
      <SectionContainer>
        <SectionHeading
          title="Nos services de plomberie"
          subtitle="De l'installation neuve a la reparation, nous intervenons sur tous vos equipements."
        />
        <div className="space-y-12">
          {servicesPlomberie.map((s, i) => (
            <div key={s.title} className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">{s.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <ImagePlaceholder prompt={s.image} aspectRatio="3/2" alt={s.title} />
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Pourquoi nous choisir */}
      <SectionContainer variant="gray">
        <SectionHeading title="Pourquoi nous choisir ?" />
        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            {avantages.map((a) => (
              <div key={a} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green shrink-0" />
                <span className="text-sm font-medium">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
