import Link from "next/link";
import { Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { siteConfig } from "@/config/site";
import { sectionImages } from "@/config/images";

export function UrgencyProjectCards() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-10" data-animate="fade-up">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-foreground">
            Urgence ou projet ?
          </h2>
          <div className="mt-4 w-16 h-1 rounded-full bg-accent-warm mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Carte Urgence */}
          <div className="relative rounded-2xl overflow-hidden group" data-animate="slide-left">
            <div className="absolute top-0 left-0 right-0 h-1 bg-destructive z-10" />
            <div className="overflow-hidden">
              <div className="group-hover:scale-105 transition-transform duration-500">
                <ImagePlaceholder
                  prompt="Gros plan sur une fuite d'eau sous un lavabo, gouttes d'eau visibles, tuyau cuivre avec joint défaillant, ambiance urgente, photo réaliste, ratio 4:3"
                  src={sectionImages["urgence-card"] || undefined}
                  aspectRatio="4/3"
                  alt="Urgence plomberie"
                  overlay
                  className="w-full rounded-none"
                >
                  <div className="text-center p-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-warm/20 flex items-center justify-center">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-normal font-heading text-white mb-2">
                      J&apos;ai une urgence
                    </h3>
                    <p className="text-white/80 mb-6">
                      Fuite, dégât des eaux, canalisation bouchée...
                    </p>
                    <Button
                      asChild
                      size="lg"
                      variant="cta"
                      className="text-base px-8"
                    >
                      <a href={siteConfig.phoneHref} data-track="urgence-card-appel">
                        <Phone className="w-5 h-5 mr-2" />
                        Appeler maintenant
                      </a>
                    </Button>
                  </div>
                </ImagePlaceholder>
              </div>
            </div>
          </div>

          {/* Carte Projet */}
          <div className="relative rounded-2xl overflow-hidden group" data-animate="slide-right">
            <div className="absolute top-0 left-0 right-0 h-1 bg-brand-green z-10" />
            <div className="overflow-hidden">
              <div className="group-hover:scale-105 transition-transform duration-500">
                <ImagePlaceholder
                  prompt="Belle salle de bain moderne rénovée, douche italienne carrelage gris, robinetterie noire mate, paroi vitrée, ambiance zen, photo réaliste, ratio 4:3"
                  src={sectionImages["projet-card"] || undefined}
                  aspectRatio="4/3"
                  alt="Projet rénovation"
                  overlay
                  className="w-full rounded-none"
                >
                  <div className="text-center p-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-normal font-heading text-white mb-2">
                      Je planifie des travaux
                    </h3>
                    <p className="text-white/80 mb-6">
                      Rénovation, installation, remplacement...
                    </p>
                    <Button
                      asChild
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-white text-base px-8"
                    >
                      <Link href="/contact" data-track="projet-card-devis">
                        <FileText className="w-5 h-5 mr-2" />
                        Demander un devis gratuit
                      </Link>
                    </Button>
                  </div>
                </ImagePlaceholder>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
