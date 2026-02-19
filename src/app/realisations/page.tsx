"use client";

import { useState } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { RealisationCard } from "@/components/sections/RealisationCard";
import { CTASection } from "@/components/sections/CTASection";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { realisations } from "@/config/realisations";

const categories = ["Tout", "Salle de bain", "Plomberie", "Chauffage", "Chauffe-eau"];

export default function RealisationsPage() {
  const [activeCategory, setActiveCategory] = useState("Tout");

  const filtered =
    activeCategory === "Tout"
      ? realisations
      : realisations.filter((r) => r.category === activeCategory);

  return (
    <>
      <HeroSection
        variant="page"
        title="Nos realisations — Avant / Apres"
        subtitle="Decouvrez nos derniers chantiers en images. Chaque projet est realise avec soin et professionnalisme."
        imagePlaceholder={{
          prompt: "Vue aerienne plongee d'un plombier en uniforme bleu travaillant sur tuyauterie cuivre neuve dans maison en construction, lumiere naturelle, tons chauds, photo realiste",
          aspectRatio: "21/9",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Realisations" },
          ]}
        />
      </div>

      <SectionContainer>
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-10">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-6"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid sm:grid-cols-2 gap-6">
          {filtered.map((real) => (
            <RealisationCard key={real.id} realisation={real} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            Aucune realisation dans cette categorie pour le moment.
          </p>
        )}
      </SectionContainer>

      <CTASection
        title="Vous avez un projet similaire ?"
        subtitle="Contactez-nous pour un devis gratuit et personnalise."
      />
    </>
  );
}
