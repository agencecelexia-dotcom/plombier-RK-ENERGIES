import Link from "next/link";
import { Star } from "lucide-react";
import { HeroSection } from "@/components/sections/HeroSection";
import { ReassuranceBand } from "@/components/sections/ReassuranceBand";
import { UrgencyProjectCards } from "@/components/sections/UrgencyProjectCards";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { RealisationCard } from "@/components/sections/RealisationCard";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { services } from "@/config/services";
import { realisations } from "@/config/realisations";
import { testimonials } from "@/config/testimonials";

export default function HomePage() {
  const featuredRealisations = realisations.slice(0, 4);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <HeroSection
        variant="home"
        title={`Votre plombier a ${siteConfig.address.city} — Depannage 7j/7, intervention rapide`}
        subtitle="Fuite d'eau, WC bouche, panne de chaudiere ? Devis gratuit sous 48h."
        imagePlaceholder={{
          prompt:
            "Plombier professionnel francais en uniforme bleu propre, agenouille sous un evier de cuisine moderne, reparant une canalisation avec une cle a molette, eclairage naturel chaleureux, interieur maison francaise contemporaine, photo realiste professionnelle",
          aspectRatio: "16/9",
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
          "Decennale",
          "Devis gratuit",
          `${siteConfig.googleRating}/5 — ${siteConfig.googleReviewCount} avis Google`,
        ]}
      />

      {/* Reassurance */}
      <ReassuranceBand />

      {/* Urgence ou projet */}
      <UrgencyProjectCards />

      {/* Services */}
      <SectionContainer variant="gray">
        <SectionHeading
          badge="Nos services"
          title="Des solutions pour tous vos besoins"
          subtitle="De l'urgence au projet de renovation, notre equipe qualifiee intervient avec professionnalisme."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </SectionContainer>

      {/* Realisations */}
      <SectionContainer>
        <SectionHeading
          badge="Avant / Apres"
          title="Nos realisations"
          subtitle="Decouvrez nos derniers chantiers en images."
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {featuredRealisations.map((real) => (
            <RealisationCard key={real.id} realisation={real} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/realisations">Voir toutes nos realisations</Link>
          </Button>
        </div>
      </SectionContainer>

      {/* Avis */}
      <SectionContainer variant="gray">
        <SectionHeading
          badge="Avis clients"
          title="Ce que disent nos clients"
        />
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-4xl font-bold text-primary">
              {siteConfig.googleRating}
            </span>
            <span className="text-2xl text-muted-foreground">/5</span>
          </div>
          <div className="flex justify-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-6 h-6 ${
                  i < Math.round(siteConfig.googleRating)
                    ? "text-yellow-500 fill-yellow-500"
                    : "text-gray-200"
                }`}
              />
            ))}
          </div>
          <p className="text-muted-foreground">
            {siteConfig.googleReviewCount} avis Google
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
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

      {/* CTA Final */}
      <CTASection />
    </>
  );
}
