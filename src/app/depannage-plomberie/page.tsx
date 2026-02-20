import type { Metadata } from "next";
import Link from "next/link";
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
import { heroImages } from "@/config/images";

export const metadata: Metadata = generatePageMetadata({
  title: `Plombier urgence ${siteConfig.address.city} | Intervention rapide 7j/7`,
  description: `Dépannage plomberie urgent à ${siteConfig.address.city}. Fuite d'eau, WC bouché, canalisation bouchée. Intervention en moins de 2h, 7j/7. Appelez le ${siteConfig.phone}.`,
  path: "/depannage-plomberie",
});

const urgences = [
  { icon: Droplets, title: "Fuite d'eau", desc: "Fuite sur canalisation, robinet, raccord ou chasse d'eau. Intervention rapide pour limiter les dégâts." },
  { icon: AlertTriangle, title: "Dégât des eaux", desc: "Coupure d'eau, assèchement et réparation. Nous vous accompagnons pour le constat d'assurance." },
  { icon: ShowerHead, title: "Canalisation bouchée", desc: "Débouchage WC, évier, douche ou canalisation principale par furet ou haute pression." },
  { icon: Flame, title: "Panne de chaudière", desc: "Diagnostic et réparation de votre chaudière gaz ou pompe à chaleur, même le week-end." },
];

const etapes = [
  { num: "1", title: "Vous appelez", desc: "Décrivez-nous votre problème par téléphone. Nous évaluons l'urgence et vous donnons un tarif indicatif." },
  { num: "2", title: "On intervient sous 2h", desc: "Un technicien qualifié se déplace chez vous avec tout le matériel nécessaire." },
  { num: "3", title: "Problème résolu", desc: "Réparation immédiate dans la majorité des cas. Facture claire, pas de mauvaise surprise." },
];

export default function DepannagePage() {
  return (
    <ServicePageLayout
      hero={{
        title: `Plombier dépannage urgent à ${siteConfig.address.city} — Intervention en moins de 2h`,
        subtitle: "Fuite d'eau, WC bouché, dégât des eaux ? Appelez maintenant.",
        imagePlaceholder: {
          prompt: "Plombier en intervention urgence la nuit, lampe frontale allumee, coupant l'arrivee d'eau principale dans une cave, expression concentree, eclairage dramatique, photo realiste, ratio 16:9",
          aspectRatio: "16/9",
          src: heroImages["depannage-plomberie"] || undefined,
        },
        badges: ["Urgence 24h/24", "Intervention <2h", "7j/7"],
      }}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Dépannage plomberie" },
      ]}
      faqs={faqDepannage}
      ctaVariant="urgent"
    >
      {/* Urgences prises en charge */}
      <SectionContainer>
        <SectionHeading
          title="Les urgences que nous prenons en charge"
          subtitle="Quel que soit votre problème, nous avons la solution."
        />
        <div className="grid sm:grid-cols-2 gap-6 stagger-children" data-animate="fade-up">
          {urgences.map((u) => (
            <Card key={u.title} className="border-accent-warm/20">
              <CardContent className="p-6 flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent-warm/10 flex items-center justify-center shrink-0">
                  <u.icon className="w-6 h-6 text-accent-warm" />
                </div>
                <div>
                  <h3 className="font-normal text-foreground mb-1">{u.title}</h3>
                  <p className="text-sm text-muted-foreground">{u.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* Comment ça marche */}
      <SectionContainer variant="warm">
        <SectionHeading
          title="Comment ça marche ?"
          subtitle="3 étapes simples pour un dépannage sans stress."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {etapes.map((e) => (
            <div key={e.num} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">{e.num}</span>
              </div>
              <h3 className="text-lg font-normal text-foreground mb-2">{e.title}</h3>
              <p className="text-sm text-muted-foreground">{e.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg" variant="cta" className="text-base px-8 py-6">
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
          subtitle="Transparence totale sur nos prix. Le tarif exact vous est confirmé avant intervention."
        />
        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl border overflow-hidden">
            {[
              { service: "Débouchage WC / évier", prix: "À partir de 89 EUR" },
              { service: "Réparation fuite", prix: "À partir de 120 EUR" },
              { service: "Remplacement robinet", prix: "À partir de 95 EUR" },
              { service: "Dégât des eaux (intervention)", prix: "À partir de 150 EUR" },
              { service: "Déplacement + diagnostic", prix: "À partir de 49 EUR" },
            ].map((t, i) => (
              <div key={t.service} className={`flex items-center justify-between px-6 py-4 ${i % 2 === 0 ? "bg-muted/50" : ""}`}>
                <span className="text-sm font-medium">{t.service}</span>
                <span className="text-sm font-semibold text-accent-warm">{t.prix}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground text-center">
            * Tarifs TTC indicatifs hors pièces. Supplément possible en soirée, week-end et jours fériés.
          </p>
        </div>
      </SectionContainer>

      {/* Services liés */}
      <SectionContainer>
        <SectionHeading title="Services liés" />
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild variant="outline"><Link href="/plomberie">Plomberie</Link></Button>
          <Button asChild variant="outline"><Link href="/chauffage">Chauffage</Link></Button>
          <Button asChild variant="outline"><Link href="/chauffe-eau">Chauffe-eau</Link></Button>
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
