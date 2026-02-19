import type { Metadata } from "next";
import Link from "next/link";
import { Star, ExternalLink } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { testimonials } from "@/config/testimonials";

export const metadata: Metadata = generatePageMetadata({
  title: `Avis clients plombier ${siteConfig.address.city}`,
  description: `Decouvrez les avis de nos clients. Note ${siteConfig.googleRating}/5 sur ${siteConfig.googleReviewCount} avis Google. Plombier de confiance a ${siteConfig.address.city}.`,
  path: "/avis-clients",
});

export default function AvisClientsPage() {
  return (
    <>
      <HeroSection
        variant="page"
        title="Avis clients — Ce qu'ils disent de nous"
        subtitle={`${siteConfig.googleRating}/5 sur ${siteConfig.googleReviewCount} avis Google`}
        imagePlaceholder={{
          prompt: "Vue aerienne plongee d'un plombier en uniforme bleu travaillant sur tuyauterie cuivre neuve dans maison en construction, lumiere naturelle, tons chauds, photo realiste",
          aspectRatio: "21/9",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Avis clients" },
          ]}
        />
      </div>

      {/* Note globale */}
      <SectionContainer>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-6 bg-muted rounded-2xl px-10 py-8">
            <div>
              <span className="text-6xl font-extrabold text-primary">
                {siteConfig.googleRating}
              </span>
              <span className="text-2xl text-muted-foreground">/5</span>
            </div>
            <div className="text-left">
              <div className="flex gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-7 h-7 ${
                      i < Math.round(siteConfig.googleRating)
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-gray-200"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Basee sur {siteConfig.googleReviewCount} avis Google
              </p>
            </div>
          </div>
        </div>

        {/* Liste des avis */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} />
          ))}
        </div>

        {/* Lien Google */}
        <div className="mt-12 text-center space-y-4">
          <Button asChild variant="outline" size="lg">
            <a
              href={siteConfig.social.google}
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir tous les avis sur Google
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </SectionContainer>

      <CTASection
        title="Vous aussi, faites-nous confiance"
        subtitle="Demandez votre devis gratuit ou appelez-nous directement."
      />
    </>
  );
}
