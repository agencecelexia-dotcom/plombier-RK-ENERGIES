import type { Metadata } from "next";
import Link from "next/link";
import { Star } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { ReassuranceBand } from "@/components/sections/ReassuranceBand";
import { UrgencyProjectCards } from "@/components/sections/UrgencyProjectCards";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { RealisationCard } from "@/components/sections/RealisationCard";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { services } from "@/config/services";
import { realisations } from "@/config/realisations";
import { testimonials } from "@/config/testimonials";
import { faqGeneral } from "@/config/faq";
import { heroImages } from "@/config/images";

export const metadata: Metadata = generatePageMetadata({
  title: "Plombier à Lyon | Dépannage 7j/7 — Devis Gratuit",
  description: "Durand Plomberie, votre plombier à Lyon. Dépannage 7j/7, rénovation salle de bain, chauffage. Certifié RGE. Devis gratuit.",
  path: "/",
});

export default function HomePage() {
  const featuredRealisations = realisations.slice(0, 4);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <HeroSection
        variant="home"
        title={`Votre plombier à ${siteConfig.address.city} — Dépannage 7j/7, intervention rapide`}
        subtitle="Fuite d'eau, WC bouché, panne de chaudière ? Devis gratuit sous 48h."
        imagePlaceholder={{
          prompt:
            "Plombier professionnel francais en uniforme bleu propre, agenouille sous un evier de cuisine moderne, reparant une canalisation avec une cle a molette, eclairage naturel chaleureux, interieur maison francaise contemporaine, photo realiste professionnelle, ratio 16:9",
          aspectRatio: "16/9",
          src: heroImages["accueil"] || undefined,
        }}
        ctaPrimary={{
          label: `Appelez maintenant — ${siteConfig.phone}`,
          href: siteConfig.phoneHref,
        }}
        ctaSecondary={{
          label: "Demander un devis gratuit",
          href: "/contact",
        }}
        badges={[
          "Intervention <2h",
          "Décennale",
          "Devis gratuit",
          `${siteConfig.googleRating}/5 — ${siteConfig.googleReviewCount} avis Google`,
        ]}
      />

      {/* Réassurance */}
      <ReassuranceBand />

      {/* Urgence ou projet */}
      <UrgencyProjectCards />

      {/* Services */}
      <SectionContainer variant="warm" dots>
        <SectionHeading
          badge="Nos services"
          title="Des solutions pour tous vos besoins"
          subtitle="De l'urgence au projet de rénovation, notre équipe qualifiée intervient avec professionnalisme."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </SectionContainer>

      {/* Réalisations */}
      <SectionContainer>
        <SectionHeading
          badge="Avant / Après"
          title="Nos réalisations"
          subtitle="Découvrez nos derniers chantiers en images."
        />
        <div className="grid sm:grid-cols-2 gap-6" data-animate="fade-up">
          {featuredRealisations.map((real) => (
            <RealisationCard key={real.id} realisation={real} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/realisations">Voir toutes nos réalisations</Link>
          </Button>
        </div>
      </SectionContainer>

      {/* Avis */}
      <SectionContainer variant="white">
        <SectionHeading
          badge="Avis clients"
          title="Ce que disent nos clients"
        />
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-4xl font-normal text-foreground">
              {siteConfig.googleRating}
            </span>
            <span className="text-2xl text-muted-foreground">/5</span>
          </div>
          <div className="flex justify-center gap-1 mb-2" role="img" aria-label="Note : 4.8 sur 5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                aria-hidden="true"
                className={`w-6 h-6 ${
                  i < Math.round(siteConfig.googleRating)
                    ? "text-accent-warm fill-accent-warm"
                    : "text-gray-200"
                }`}
              />
            ))}
          </div>
          <p className="text-muted-foreground">
            {siteConfig.googleReviewCount} avis Google
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 stagger-children">
          {featuredTestimonials.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/avis-clients">Voir tous les avis</Link>
          </Button>
        </div>
      </SectionContainer>

      {/* FAQ */}
      <FAQSection faqs={faqGeneral} />

      {/* CTA Final */}
      <CTASection />
    </>
  );
}
