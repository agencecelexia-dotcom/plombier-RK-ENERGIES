import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowLeft } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = generatePageMetadata({
  title: `Blog plomberie ${siteConfig.address.city} | Conseils et astuces`,
  description: `Conseils plomberie, astuces chauffage, guides renovation. Le blog de ${siteConfig.name}, votre plombier a ${siteConfig.address.city}.`,
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <HeroSection
        variant="page"
        title="Blog — Conseils et astuces plomberie"
        subtitle="Retrouvez bientot nos articles pour vous aider au quotidien."
        imagePlaceholder={{
          prompt: "Vue aerienne plongee d'un plombier en uniforme bleu travaillant sur tuyauterie cuivre neuve dans maison en construction, lumiere naturelle, tons chauds, photo realiste",
          aspectRatio: "21/9",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Blog" },
          ]}
        />
      </div>

      <SectionContainer>
        <div className="max-w-lg mx-auto text-center py-12">
          <BookOpen className="w-16 h-16 text-primary/20 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-primary mb-4">
            Bientot disponible
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Nous preparons des articles sur l&apos;entretien de votre plomberie, les economies d&apos;energie, les aides pour la renovation... Revenez bientot !
          </p>
          <Button asChild variant="outline">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour a l&apos;accueil
            </Link>
          </Button>
        </div>
      </SectionContainer>
    </>
  );
}
