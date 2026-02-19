import Link from "next/link";
import { Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
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
    <section className="relative py-16 md:py-20">
      <div className="absolute inset-0">
        <ImagePlaceholder
          prompt="Vue aerienne plongee d'un plombier en uniforme bleu travaillant sur tuyauterie cuivre neuve dans maison en construction, lumiere naturelle, tons chauds, photo realiste"
          aspectRatio="21/9"
          alt="Plombier au travail"
          overlay
          className="w-full h-full rounded-none"
        />
      </div>
      <div className="relative z-20 container mx-auto px-4 lg:px-8 max-w-7xl text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
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
              className="bg-destructive hover:bg-destructive/90 text-white text-base px-8 py-6"
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
