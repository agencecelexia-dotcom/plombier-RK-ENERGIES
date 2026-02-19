import type { Metadata } from "next";
import { Phone, Clock, Wrench, CheckCircle, AlertTriangle, Droplets, ShowerHead, Flame } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { faqDepannage } from "@/config/faq";

export const metadata: Metadata = generatePageMetadata({
  title: `Plombier urgence ${siteConfig.address.city} | Intervention rapide 7j/7`,
  description: `Depannage plomberie urgent a ${siteConfig.address.city}. Fuite d'eau, WC bouche, canalisation bouchee. Intervention en moins de 2h, 7j/7. Appelez le ${siteConfig.phone}.`,
  path: "/depannage-plomberie",
});

const urgences = [
  { icon: Droplets, title: "Fuite d'eau", desc: "Fuite sur canalisation, robinet, raccord ou chasse d'eau. Intervention rapide pour limiter les degats." },
  { icon: AlertTriangle, title: "Degat des eaux", desc: "Coupure d'eau, assechement et reparation. Nous vous accompagnons pour le constat d'assurance." },
  { icon: ShowerHead, title: "Canalisation bouchee", desc: "Debouchage WC, evier, douche ou canalisation principale par furet ou haute pression." },
  { icon: Flame, title: "Panne de chaudiere", desc: "Diagnostic et reparation de votre chaudiere gaz ou pompe a chaleur, meme le week-end." },
];

const etapes = [
  { num: "1", title: "Vous appelez", desc: "Decrivez-nous votre probleme par telephone. Nous evaluons l'urgence et vous donnons un tarif indicatif." },
  { num: "2", title: "On intervient sous 2h", desc: "Un technicien qualifie se deplace chez vous avec tout le materiel necessaire." },
  { num: "3", title: "Probleme resolu", desc: "Reparation immediate dans la majorite des cas. Facture claire, pas de mauvaise surprise." },
];

export default function DepannagePage() {
  return (
    <ServicePageLayout
      hero={{
        title: `Plombier depannage urgent a ${siteConfig.address.city} — Intervention en moins de 2h`,
        subtitle: "Fuite d'eau, WC bouche, degat des eaux ? Appelez maintenant.",
        imagePlaceholder: {
          prompt: "Plombier en intervention urgence la nuit, lampe frontale allumee, coupant l'arrivee d'eau principale dans une cave, expression concentree, eclairage dramatique, photo realiste",
          aspectRatio: "16/9",
        },
        badges: ["Urgence 24h/24", "Intervention <2h", "7j/7"],
      }}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Depannage plomberie" },
      ]}
      faqs={faqDepannage}
      ctaVariant="urgent"
    >
      {/* Urgences prises en charge */}
      <SectionContainer>
        <SectionHeading
          title="Les urgences que nous prenons en charge"
          subtitle="Quel que soit votre probleme, nous avons la solution."
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {urgences.map((u) => (
            <Card key={u.title} className="border-destructive/20">
              <CardContent className="p-6 flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                  <u.icon className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">{u.title}</h3>
                  <p className="text-sm text-muted-foreground">{u.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* Comment ca marche */}
      <SectionContainer variant="gray">
        <SectionHeading
          title="Comment ca marche ?"
          subtitle="3 etapes simples pour un depannage sans stress."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {etapes.map((e) => (
            <div key={e.num} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">{e.num}</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{e.title}</h3>
              <p className="text-sm text-muted-foreground">{e.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg" className="bg-destructive hover:bg-destructive/90 text-white text-base px-8 py-6">
            <a href={siteConfig.phoneHref}>
              <Phone className="w-5 h-5 mr-2" />
              Appelez maintenant — {siteConfig.phone}
            </a>
          </Button>
        </div>
      </SectionContainer>

      {/* Tarifs indicatifs */}
      <SectionContainer>
        <SectionHeading
          title="Tarifs indicatifs"
          subtitle="Transparence totale sur nos prix. Le tarif exact vous est confirme avant intervention."
        />
        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl border overflow-hidden">
            {[
              { service: "Debouchage WC / evier", prix: "A partir de 89 EUR" },
              { service: "Reparation fuite", prix: "A partir de 120 EUR" },
              { service: "Remplacement robinet", prix: "A partir de 95 EUR" },
              { service: "Degat des eaux (intervention)", prix: "A partir de 150 EUR" },
              { service: "Deplacement + diagnostic", prix: "A partir de 49 EUR" },
            ].map((t, i) => (
              <div key={t.service} className={`flex items-center justify-between px-6 py-4 ${i % 2 === 0 ? "bg-muted/50" : ""}`}>
                <span className="text-sm font-medium">{t.service}</span>
                <span className="text-sm font-bold text-primary">{t.prix}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground text-center">
            * Tarifs TTC indicatifs hors pieces. Supplement possible en soiree, week-end et jours feries.
          </p>
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
