import type { Metadata } from "next";
import { ShieldCheck, Award, Clock, Users, Wrench, Heart, CheckCircle } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Card, CardContent } from "@/components/ui/card";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = generatePageMetadata({
  title: `A propos — ${siteConfig.name}`,
  description: `Decouvrez ${siteConfig.name}, votre plombier de confiance a ${siteConfig.address.city} depuis ${siteConfig.yearsExperience} ans. Certifie RGE, assure decennale.`,
  path: "/a-propos",
});

const chiffres = [
  { value: `${siteConfig.yearsExperience}+`, label: "Annees d'experience", icon: Clock },
  { value: `${siteConfig.interventionsCount}+`, label: "Interventions realisees", icon: Wrench },
  { value: `${siteConfig.googleReviewCount}`, label: "Avis Google", icon: Users },
  { value: `${siteConfig.googleRating}/5`, label: "Note moyenne", icon: Award },
];

const valeurs = [
  { icon: Clock, title: "Reactivite", desc: "Nous intervenons dans les meilleurs delais. En urgence, comptez moins de 2 heures." },
  { icon: Heart, title: "Transparence", desc: "Devis detailles, tarifs clairs, pas de mauvaise surprise. Vous savez exactement ce que vous payez." },
  { icon: ShieldCheck, title: "Qualite", desc: "Travail soigne, materiaux de qualite, chantier propre. Nous garantissons la qualite de nos prestations." },
];

export default function AProposPage() {
  return (
    <>
      <HeroSection
        variant="page"
        title={`${siteConfig.name} — Votre plombier de confiance depuis ${siteConfig.yearsExperience} ans`}
        subtitle="Professionnalisme, reactivite et transparence au service de votre confort."
        imagePlaceholder={{
          prompt: "Vue aerienne plongee d'un plombier en uniforme bleu travaillant sur tuyauterie cuivre neuve dans maison en construction, lumiere naturelle, tons chauds, photo realiste",
          aspectRatio: "21/9",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "A propos" },
          ]}
        />
      </div>

      {/* Notre histoire */}
      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading title="Notre histoire" align="left" />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Fonde en {siteConfig.foundedYear} par {siteConfig.founder}, {siteConfig.name} est ne d&apos;une passion pour le metier et d&apos;une conviction simple : un plombier doit etre fiable, reactif et transparent.
              </p>
              <p>
                Apres {siteConfig.yearsExperience} ans d&apos;experience et plus de {siteConfig.interventionsCount} interventions, nous restons fideles a ces valeurs. Notre equipe de techniciens qualifies intervient chaque jour dans la metropole lyonnaise pour des depannages, installations et renovations.
              </p>
              <p>
                Certifies RGE et couverts par une assurance decennale, nous accompagnons nos clients dans tous leurs projets de plomberie et de chauffage, du depannage urgent a la renovation complete.
              </p>
            </div>
          </div>
          <ImagePlaceholder
            prompt="Portrait professionnel artisan plombier francais, polo bleu logo brode, bras croises, sourire confiant, atelier range arriere-plan flou, photo realiste"
            aspectRatio="2/3"
            alt={`${siteConfig.founder}, fondateur de ${siteConfig.name}`}
            className="max-w-sm mx-auto"
          />
        </div>
      </SectionContainer>

      {/* Equipe */}
      <SectionContainer variant="gray">
        <SectionHeading
          title="Notre equipe"
          subtitle="Des professionnels qualifies et passionnes a votre service."
        />
        <ImagePlaceholder
          prompt="Equipe de 2-3 plombiers en uniforme bleu propre devant camionnette utilitaire blanche avec logo, souriant, parking exterieur, lumiere naturelle, photo realiste"
          aspectRatio="3/2"
          alt={`L'equipe ${siteConfig.name}`}
          className="max-w-3xl mx-auto"
        />
      </SectionContainer>

      {/* Chiffres cles */}
      <SectionContainer>
        <SectionHeading title="En quelques chiffres" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {chiffres.map((c) => (
            <div key={c.label} className="text-center">
              <c.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-extrabold text-primary mb-1">
                {c.value}
              </div>
              <p className="text-sm text-muted-foreground">{c.label}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Valeurs */}
      <SectionContainer variant="gray">
        <SectionHeading title="Nos valeurs" />
        <div className="grid md:grid-cols-3 gap-8">
          {valeurs.map((v) => (
            <Card key={v.title}>
              <CardContent className="p-6 text-center">
                <v.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-primary mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* Certifications */}
      <SectionContainer>
        <SectionHeading
          title="Certifications et assurances"
          subtitle="Votre tranquillite d'esprit est notre priorite."
        />
        <div className="max-w-2xl mx-auto space-y-4">
          {[
            { label: "Certification RGE QualiPAC", detail: siteConfig.rge },
            { label: "Assurance decennale", detail: siteConfig.assuranceDecennale },
            { label: "SIRET", detail: siteConfig.siret },
          ].map((cert) => (
            <div key={cert.label} className="flex items-center gap-3 p-4 rounded-lg bg-muted">
              <CheckCircle className="w-5 h-5 text-brand-green shrink-0" />
              <div>
                <span className="font-medium text-sm">{cert.label}</span>
                <span className="text-sm text-muted-foreground ml-2">{cert.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      <CTASection />
    </>
  );
}
