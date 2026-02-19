import type { Metadata } from "next";
import { Droplets, Zap, Leaf, Wrench, CheckCircle } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { faqChauffeEau } from "@/config/faq";

export const metadata: Metadata = generatePageMetadata({
  title: `Remplacement chauffe-eau ${siteConfig.address.city} | Ballon thermodynamique`,
  description: `Installation et remplacement de chauffe-eau a ${siteConfig.address.city}. Electrique, thermodynamique, detartrage. Economies d'energie garanties. Devis gratuit.`,
  path: "/chauffe-eau",
});

const servicesChauffeEau = [
  { icon: Zap, title: "Chauffe-eau electrique", desc: "Remplacement et installation de cumulus electrique, toutes capacites (75L a 300L). Intervention rapide en cas de panne." },
  { icon: Leaf, title: "Ballon thermodynamique", desc: "Jusqu'a 3x moins d'electricite. Eligible aux aides de l'Etat. Amortissement en 3 a 5 ans." },
  { icon: Wrench, title: "Detartrage et entretien", desc: "Prolongez la duree de vie de votre chauffe-eau. Le detartrage permet de maintenir les performances optimales." },
  { icon: Droplets, title: "Depannage", desc: "Plus d'eau chaude ? Fuite sur le groupe de securite ? Nous intervenons rapidement pour vous depanner." },
];

const comparatif = [
  { critere: "Consommation", electrique: "Elevee", thermo: "3x moins" },
  { critere: "Prix installation", electrique: "500 - 1 200 EUR", thermo: "2 000 - 3 500 EUR" },
  { critere: "Aides financieres", electrique: "Aucune", thermo: "MaPrimeRenov', CEE" },
  { critere: "Duree de vie", electrique: "10 - 15 ans", thermo: "15 - 20 ans" },
  { critere: "Amortissement", electrique: "-", thermo: "3 a 5 ans" },
  { critere: "Classe energie", electrique: "C / D", thermo: "A / A+" },
];

export default function ChauffeEauPage() {
  return (
    <ServicePageLayout
      hero={{
        title: `Remplacement et installation chauffe-eau a ${siteConfig.address.city}`,
        subtitle: "Electrique, thermodynamique, solaire. Conseil expert pour choisir la solution la plus adaptee a vos besoins.",
        imagePlaceholder: {
          prompt: "Technicien plombier installant un chauffe-eau thermodynamique neuf dans un garage propre, branchements electriques et hydrauliques visibles, photo realiste",
          aspectRatio: "16/9",
        },
      }}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Chauffe-eau" },
      ]}
      faqs={faqChauffeEau}
    >
      {/* Services */}
      <SectionContainer>
        <SectionHeading
          title="Nos services chauffe-eau"
          subtitle="Installation, remplacement, entretien et depannage de tous types de chauffe-eau."
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {servicesChauffeEau.map((s) => (
            <Card key={s.title}>
              <CardContent className="p-6 flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* Comparatif */}
      <SectionContainer variant="gray">
        <SectionHeading
          title="Electrique vs Thermodynamique"
          subtitle="Comparez les deux technologies pour faire le bon choix."
        />
        <div className="max-w-3xl mx-auto">
          <div className="rounded-xl border overflow-hidden bg-white">
            <div className="grid grid-cols-3 bg-primary text-primary-foreground text-sm font-bold">
              <div className="p-4">Critere</div>
              <div className="p-4 text-center">Electrique</div>
              <div className="p-4 text-center">Thermodynamique</div>
            </div>
            {comparatif.map((row, i) => (
              <div key={row.critere} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? "bg-muted/30" : ""}`}>
                <div className="p-4 font-medium">{row.critere}</div>
                <div className="p-4 text-center text-muted-foreground">{row.electrique}</div>
                <div className="p-4 text-center font-medium text-brand-green">{row.thermo}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
