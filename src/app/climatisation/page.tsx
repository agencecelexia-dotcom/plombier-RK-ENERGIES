import type { Metadata } from "next";
import Link from "next/link";
import { Wind, Thermometer, Zap, ClipboardList, Wrench, HardHat, PartyPopper } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { siteConfig } from "@/config/site";
import { faqClimatisation } from "@/config/faq";
import { heroImages, pageImages } from "@/config/images";

export const metadata: Metadata = generatePageMetadata({
  title: `Climatisation réversible Tarn (81) | Installation et entretien — RK Energies`,
  description: `Installation de climatisation réversible dans le Tarn (81). Systèmes mono-split, multi-split, gainable. Entretien et dépannage. Devis gratuit — RK Energies.`,
  path: "/climatisation",
});

const solutions = [
  { icon: Wind, title: "Climatisation mono-split", desc: "Solution idéale pour une pièce unique (salon, chambre). Unité murale discrète, silencieuse et économique. Installation rapide.", image: "Salon moderne avec unite interieure climatisation murale blanche, telecommande, ambiance fraiche, photo realiste, ratio 4:3", imageKey: "chauffage-pac" },
  { icon: Thermometer, title: "Système multi-split", desc: "Climatisez plusieurs pièces avec une seule unité extérieure. Idéal pour maison ou appartement entier. Gain de place et d'énergie.", image: "Unite exterieure climatisation compacte sur terrasse maison, 3 unites interieures murales blanches discretes, photo realiste, ratio 4:3", imageKey: "chauffage-plancher-chauffant" },
  { icon: Zap, title: "Climatisation gainable", desc: "Confort invisible : diffusion de l'air via des gaines dans les faux-plafonds. Esthétisme maximal pour les maisons neuves ou rénovations.", image: "Bouche de climatisation gainable discrète dans faux-plafond blanc, pièce de vie moderne, photo réaliste, ratio 4:3", imageKey: "chauffage-chaudiere-gaz" },
];

const etapes = [
  { icon: ClipboardList, title: "Visite et conseil", desc: "Nous évaluons vos besoins et la configuration de votre logement pour vous recommander la solution idéale." },
  { icon: Wrench, title: "Devis détaillé", desc: "Vous recevez un devis précis sous 48h avec le détail des équipements et de la pose." },
  { icon: HardHat, title: "Installation", desc: "Pose propre et soignée par Raphael Khelifi. Mise en service et réglages inclus." },
  { icon: PartyPopper, title: "Réception", desc: "Démonstration du fonctionnement, prise en main de la télécommande. Vous êtes autonome !" },
];

export default function ClimatisationPage() {
  return (
    <ServicePageLayout
      hero={{
        title: `Climatisation réversible dans le Tarn — Installation et entretien par RK Energies`,
        subtitle: "Fraîcheur en été, chaleur en hiver. Mono-split, multi-split, gainable. Devis gratuit.",
        imagePlaceholder: {
          prompt: "Interieur maison moderne climatise, unite interieure climatisation murale blanche, salon confortable, lumiere douce, ambiance fraiche agreeable, photo realiste, ratio 16:9",
          aspectRatio: "16/9",
          src: heroImages["chauffage"] || undefined,
        },
        badges: ["Mono & multi-split", "Entretien annuel", "Devis gratuit"],
      }}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Climatisation" },
      ]}
      faqs={faqClimatisation}
    >
      {/* Solutions */}
      <SectionContainer>
        <SectionHeading
          title="Nos solutions climatisation"
          subtitle="RK Energies vous installe le système le mieux adapté à votre logement et votre budget."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((s) => (
            <div key={s.title} className="space-y-4">
              <ImagePlaceholder prompt={s.image} src={pageImages[s.imageKey] || undefined} aspectRatio="4/3" alt={s.title} />
              <div className="flex items-center gap-2">
                <s.icon className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-bold text-neutral-900">{s.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Avantages */}
      <SectionContainer variant="gray">
        <SectionHeading
          title="Pourquoi choisir la climatisation réversible ?"
          subtitle="La clim réversible, c'est 2 en 1 : confort été et hiver avec un seul équipement."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { title: "Été : jusqu'à 25°C en moins", desc: "Rafraîchissez rapidement votre logement même en pleine canicule tarnaise." },
            { title: "Hiver : chauffage d'appoint", desc: "En mode chauffage, la pompe à chaleur air-air consomme 3 fois moins que l'électrique." },
            { title: "Silencieux et discret", desc: "Les unités intérieures modernes sont quasi-silencieuses et s'intègrent parfaitement." },
            { title: "Entretien simple", desc: "Nettoyage des filtres 2 fois par an, contrôle annuel par RK Energies." },
            { title: "Qualité de l'air", desc: "Certains modèles filtrent l'air et réduisent les allergènes et poussières." },
            { title: "Éligible aux aides", desc: "Sous conditions, des aides CEE peuvent réduire le coût d'installation." },
          ].map((a) => (
            <div key={a.title} className="p-5 bg-white rounded-xl">
              <h3 className="font-bold text-neutral-900 mb-2 text-sm">{a.title}</h3>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Process */}
      <SectionContainer variant="white">
        <SectionHeading
          title="Notre méthode en 4 étapes"
          subtitle="Un accompagnement clé en main pour une installation réussie."
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
              <h3 className="font-bold text-neutral-900 mb-2">{e.title}</h3>
              <p className="text-sm text-muted-foreground">{e.desc}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Réalisations */}
      <SectionContainer variant="gray">
        <SectionHeading
          title="Nos réalisations climatisation"
          subtitle="Découvrez nos dernières installations dans le Tarn."
        />
        <div className="text-center">
          <Link
            href="/realisations"
            className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all inline-block"
          >
            Voir toutes nos réalisations
          </Link>
        </div>
      </SectionContainer>

      {/* Services liés */}
      <SectionContainer variant="white">
        <SectionHeading title="Services liés" />
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/chauffage" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Chauffage</Link>
          <Link href="/depannage-plomberie" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Dépannage urgent</Link>
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
