import Link from "next/link";
import { Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  variant?: "urgent" | "devis" | "contact";
}

export function CTASection({
  title = "Un projet ? Une urgence ? Contactez-nous maintenant.",
  subtitle,
  variant = "devis",
}: CTASectionProps) {
  return (
    <section className="relative py-16 md:py-20 bg-surface-dark overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/[0.02] -translate-y-1/3 translate-x-1/3" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-accent-warm/[0.05] translate-y-1/3 -translate-x-1/3" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '16px 16px' }} aria-hidden="true" />

      <div className="relative z-20 container mx-auto px-4 lg:px-8 max-w-7xl text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading text-white">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-lg text-white/80 max-w-xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          {(variant === "urgent" || variant === "devis") && (
            <Button
              asChild
              size="lg"
              variant="cta"
              className="text-base px-8 py-6 btn-pulse"
            >
              <a href={siteConfig.phoneHref} data-track="cta-appel-bandeau">
                <Phone className="w-5 h-5 mr-2" />
                Appelez maintenant — {siteConfig.phone}
              </a>
            </Button>
          )}
          {(variant === "devis" || variant === "contact") && (
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-base px-8 py-6"
            >
              <Link href="/contact" data-track="cta-devis-bandeau">
                <FileText className="w-5 h-5 mr-2" />
                Demander un devis gratuit
              </Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
