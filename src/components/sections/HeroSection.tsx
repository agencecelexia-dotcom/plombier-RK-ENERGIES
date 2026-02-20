import Link from "next/link";
import { Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  imagePlaceholder: {
    prompt: string;
    aspectRatio?: string;
    src?: string;
  };
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  badges?: string[];
  variant?: "home" | "service" | "page";
}

export function HeroSection({
  title,
  subtitle,
  imagePlaceholder,
  ctaPrimary,
  ctaSecondary,
  badges,
  variant = "service",
}: HeroSectionProps) {
  if (variant === "home") {
    return (
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <ImagePlaceholder
            prompt={imagePlaceholder.prompt}
            src={imagePlaceholder.src}
            aspectRatio="16/9"
            alt={title}
            overlay
            className="w-full h-full rounded-none"
            priority={true}
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/95 via-primary/70 to-primary/30 z-10" />
        <div className="relative z-20 container mx-auto px-4 lg:px-8 max-w-7xl py-20">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 md:mt-6 text-lg md:text-xl text-white/90 leading-relaxed">
                {subtitle}
              </p>
            )}
            {badges && (
              <div className="mt-6 flex flex-wrap gap-2">
                {badges.map((badge) => (
                  <Badge
                    key={badge}
                    variant="warm"
                    className="bg-white/15 text-white border-white/20 backdrop-blur-sm text-sm"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            )}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              {ctaPrimary && (
                <Button
                  asChild
                  size="lg"
                  variant="cta"
                  className="text-base px-8 py-6 btn-pulse"
                >
                  <a href={ctaPrimary.href} data-track="hero-appel">
                    <Phone className="w-5 h-5 mr-2" />
                    {ctaPrimary.label}
                  </a>
                </Button>
              )}
              {ctaSecondary && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-base px-8 py-6"
                >
                  <Link href={ctaSecondary.href} data-track="hero-devis">
                    {ctaSecondary.label}
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
          <ChevronDown className="w-8 h-8 text-white animate-bounce" aria-hidden="true" />
        </div>
      </section>
    );
  }

  if (variant === "page") {
    return (
      <section className="relative py-16 md:py-20">
        <div className="absolute inset-0">
          <ImagePlaceholder
            prompt={imagePlaceholder.prompt}
            src={imagePlaceholder.src}
            aspectRatio="21/9"
            alt={title}
            overlay
            className="w-full h-full rounded-none"
            priority={true}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/90 via-primary/60 to-primary/30 z-10" />
        <div className="relative z-20 container mx-auto px-4 lg:px-8 max-w-7xl text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </section>
    );
  }

  // variant === "service"
  return (
    <section className="py-12 md:py-20 bg-surface-warm">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-foreground leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 md:mt-6 text-lg text-muted-foreground leading-relaxed">
                {subtitle}
              </p>
            )}
            {badges && (
              <div className="mt-4 flex flex-wrap gap-2">
                {badges.map((badge, index) => (
                  <Badge
                    key={badge}
                    variant="secondary"
                    className={cn(
                      "text-sm",
                      index === badges.length - 1 && "hidden sm:inline-flex"
                    )}
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            )}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                variant="cta"
              >
                <a href={siteConfig.phoneHref} data-track="service-hero-appel">
                  <Phone className="w-5 h-5 mr-2" />
                  Appelez-nous — {siteConfig.phone}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact" data-track="service-hero-devis">Demander un devis gratuit</Link>
              </Button>
            </div>
          </div>
          <div>
            <ImagePlaceholder
              prompt={imagePlaceholder.prompt}
              src={imagePlaceholder.src}
              aspectRatio={imagePlaceholder.aspectRatio || "16/9"}
              alt={title}
              className={cn("shadow-xl rounded-2xl")}
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
