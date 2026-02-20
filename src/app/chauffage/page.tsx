import type { Metadata } from "next";
import Link from "next/link";
import { Flame, Wind, Heater, ShieldCheck, CheckCircle } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { faqChauffage } from "@/config/faq";
import { heroImages, pageImages } from "@/config/images";

export const metadata: Metadata = generatePageMetadata({
  title: `Chauffagiste ${siteConfig.address.city} | Chaudière, PAC, entretien`,
  description: `Chauffagiste certifié RGE à ${siteConfig.address.city}. Installation chaudière gaz, pompe à chaleur, plancher chauffant. Entretien annuel et dépannage. Devis gratuit.`,
  path: "/chauffage",
});

const servicesChauffage = [
  { icon: Flame, title: "Chaudière gaz condensation", desc: "Installation et remplacement de chaudière gaz dernière génération. Jusqu'à 30% d'économies sur votre facture.", image: "Chaudiere gaz condensation murale blanche moderne dans buanderie rangee, ecran digital vert, tuyauterie cuivre propre, photo realiste, ratio 3:2", imageKey: "chauffage-chaudiere-gaz" },
  { icon: Wind, title: "Pompe à chaleur air-eau", desc: "Solution écologique et économique. Éligible aux aides MaPrimeRénov' et CEE. Nous sommes certifiés RGE.", image: "Unite exterieure pompe a chaleur air-eau blanche installee sur terrasse maison individuelle francaise, jardin soigne, photo realiste, ratio 3:2", imageKey: "chauffage-pac" },
  { icon: Heater, title: "Plancher chauffant", desc: "Confort optimal et diffusion homogène de la chaleur. Idéal en rénovation ou construction neuve.", image: "Installation plancher chauffant en cours, tubes PER rouges en serpentin sur isolant argente, vue plongee, chantier propre, photo realiste, ratio 3:2", imageKey: "chauffage-plancher-chauffant" },
];

const entretienInclus = [
  "Vérification de la combustion et des émissions",
  "Nettoyage du corps de chauffe et du brûleur",
  "Contrôle de la pression et du circulateur",
  "Vérification des dispositifs de sécurité",
  "Mesure du taux de CO (monoxyde de carbone)",
  "Remise de l'attestation d'entretien",
];

export default function ChauffagePage() {
  return (
    <ServicePageLayout
      hero={{
        title: `Chauffagiste à ${siteConfig.address.city} — Installation, entretien et dépannage`,
        subtitle: "Chaudière gaz, pompe à chaleur, plancher chauffant. Certifié RGE pour bénéficier des aides.",
        imagePlaceholder: {
          prompt: "Salon chaleureux maison francaise, radiateur design blanc sous fenetre, lumiere doree hivernale, sensation confort et chaleur, photo realiste, ratio 16:9",
          aspectRatio: "16/9",
          src: heroImages["chauffage"] || undefined,
        },
        badges: ["Certifié RGE", "Entretien annuel", "Éligible aides"],
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
          subtitle="Installation, remplacement et dépannage de tous types de systèmes de chauffage."
        />
        <div className="space-y-12">
          {servicesChauffage.map((s, i) => (
            <div key={s.title} className="grid lg:grid-cols-2 gap-8 items-center">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <s.icon className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-neutral-900">{s.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <ImagePlaceholder prompt={s.image} src={pageImages[s.imageKey] || undefined} aspectRatio="3/2" alt={s.title} />
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Entretien */}
      <SectionContainer variant="gray" id="entretien">
        <SectionHeading
          title="Entretien annuel chaudière"
          subtitle="L'entretien de votre chaudière est obligatoire chaque année. Nous intervenons sur toutes les marques."
        />
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-neutral-900">Ce qui est inclus</h3>
                <span className="px-3 py-1 bg-accent-500 text-white text-sm font-semibold rounded-full">À partir de 89 EUR TTC</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {entretienInclus.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </SectionContainer>

      {/* RGE */}
      <SectionContainer variant="white">
        <div className="max-w-3xl mx-auto text-center">
          <ShieldCheck className="w-16 h-16 text-accent-500 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-4">
            Certifié RGE — Éligible aux aides de l&apos;État
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Notre certification RGE (Reconnu Garant de l&apos;Environnement) vous permet de bénéficier des aides financières pour vos travaux de chauffage : MaPrimeRénov&apos;, CEE, éco-prêt à taux zéro.
          </p>
          <p className="text-sm text-muted-foreground">
            {siteConfig.rge}
          </p>
        </div>
      </SectionContainer>

      {/* Services liés */}
      <SectionContainer variant="gray">
        <SectionHeading title="Services liés" />
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/chauffe-eau" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Chauffe-eau</Link>
          <Link href="/depannage-plomberie" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Dépannage plomberie</Link>
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
