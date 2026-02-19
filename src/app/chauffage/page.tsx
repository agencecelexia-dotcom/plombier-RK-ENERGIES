import type { Metadata } from "next";
import { Flame, Wind, Heater, Thermometer, Wrench, ShieldCheck, CheckCircle } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";
import { faqChauffage } from "@/config/faq";

export const metadata: Metadata = generatePageMetadata({
  title: `Chauffagiste ${siteConfig.address.city} | Chaudiere, PAC, entretien`,
  description: `Chauffagiste certifie RGE a ${siteConfig.address.city}. Installation chaudiere gaz, pompe a chaleur, plancher chauffant. Entretien annuel et depannage. Devis gratuit.`,
  path: "/chauffage",
});

const servicesChauffage = [
  { icon: Flame, title: "Chaudiere gaz condensation", desc: "Installation et remplacement de chaudiere gaz derniere generation. Jusqu'a 30% d'economies sur votre facture.", image: "Chaudiere gaz condensation murale blanche moderne dans buanderie rangee, ecran digital vert, tuyauterie cuivre propre, photo realiste" },
  { icon: Wind, title: "Pompe a chaleur air-eau", desc: "Solution ecologique et economique. Eligible aux aides MaPrimeRenov' et CEE. Nous sommes certifies RGE.", image: "Unite exterieure pompe a chaleur air-eau blanche installee sur terrasse maison individuelle francaise, jardin soigne, photo realiste" },
  { icon: Heater, title: "Plancher chauffant", desc: "Confort optimal et diffusion homogene de la chaleur. Ideal en renovation ou construction neuve.", image: "Installation plancher chauffant en cours, tubes PER rouges en serpentin sur isolant argente, vue plongee, chantier propre, photo realiste" },
];

const entretienInclus = [
  "Verification de la combustion et des emissions",
  "Nettoyage du corps de chauffe et du bruleur",
  "Controle de la pression et du circulateur",
  "Verification des dispositifs de securite",
  "Mesure du taux de CO (monoxyde de carbone)",
  "Remise de l'attestation d'entretien",
];

export default function ChauffagePage() {
  return (
    <ServicePageLayout
      hero={{
        title: `Chauffagiste a ${siteConfig.address.city} — Installation, entretien et depannage`,
        subtitle: "Chaudiere gaz, pompe a chaleur, plancher chauffant. Certifie RGE pour beneficier des aides.",
        imagePlaceholder: {
          prompt: "Salon chaleureux maison francaise, radiateur design blanc sous fenetre, lumiere doree hivernale, sensation confort et chaleur, photo realiste",
          aspectRatio: "16/9",
        },
        badges: ["Certifie RGE", "Entretien annuel", "Eligible aides"],
      }}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Chauffage" },
      ]}
      faqs={faqChauffage}
    >
      {/* Services */}
      <SectionContainer>
        <SectionHeading
          title="Nos solutions de chauffage"
          subtitle="Installation, remplacement et depannage de tous types de systemes de chauffage."
        />
        <div className="space-y-12">
          {servicesChauffage.map((s, i) => (
            <div key={s.title} className={`grid lg:grid-cols-2 gap-8 items-center`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <s.icon className="w-6 h-6 text-primary" />
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

      {/* Entretien */}
      <SectionContainer variant="gray" id="entretien">
        <SectionHeading
          badge="Obligatoire"
          title="Entretien annuel chaudiere"
          subtitle="L'entretien de votre chaudiere est obligatoire chaque annee. Nous intervenons sur toutes les marques."
        />
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-primary">Ce qui est inclus</h3>
                <Badge className="bg-brand-green text-white">A partir de 89 EUR TTC</Badge>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {entretienInclus.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </SectionContainer>

      {/* RGE */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center">
          <ShieldCheck className="w-16 h-16 text-brand-green mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Certifie RGE — Eligible aux aides de l&apos;Etat
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Notre certification RGE (Reconnu Garant de l&apos;Environnement) vous permet de beneficier des aides financieres pour vos travaux de chauffage : MaPrimeRenov&apos;, CEE, eco-pret a taux zero.
          </p>
          <p className="text-sm text-muted-foreground">
            {siteConfig.rge}
          </p>
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
