import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = generatePageMetadata({
  title: "Mentions légales",
  description: `Mentions légales du site ${siteConfig.name}. Informations sur l'éditeur, l'hébergeur, la protection des données et les cookies.`,
  path: "/mentions-legales",
});

export default function MentionsLegalesPage() {
  return (
    <>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl pt-8">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Mentions légales" },
          ]}
        />
      </div>

      <SectionContainer>
        <div className="max-w-3xl mx-auto prose prose-sm prose-slate">
          <h1 className="text-3xl font-heading font-bold text-neutral-900 mb-8">Mentions légales</h1>

          <h2 className="text-xl font-heading font-bold text-neutral-900 mt-8 mb-4">1. Éditeur du site</h2>
          <p>
            Le site <strong>{siteConfig.url}</strong> est édité par :
          </p>
          <ul className="list-none space-y-1 pl-0">
            <li><strong>Raison sociale :</strong> {siteConfig.legalName}</li>
            <li><strong>Siège social :</strong> {siteConfig.address.street}, {siteConfig.address.postalCode} {siteConfig.address.city}</li>
            <li><strong>SIRET :</strong> {siteConfig.siret}</li>
            <li><strong>Téléphone :</strong> {siteConfig.phone}</li>
            <li><strong>Email :</strong> {siteConfig.email}</li>
            <li><strong>Directeur de la publication :</strong> {siteConfig.founder}</li>
          </ul>

          <h2 className="text-xl font-heading font-bold text-neutral-900 mt-8 mb-4">2. Hébergeur</h2>
          <p>
            Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
          </p>

          <h2 className="text-xl font-heading font-bold text-neutral-900 mt-8 mb-4">3. Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus (textes, images, graphismes, logo, icônes) de ce site sont la propriété exclusive de {siteConfig.legalName}, sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation préalable.
          </p>

          <h2 className="text-xl font-heading font-bold text-neutral-900 mt-8 mb-4">4. Protection des données personnelles (RGPD)</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et de portabilité de vos données personnelles.
          </p>
          <p>
            Les données collectées via le formulaire de contact (nom, téléphone, email, message) sont utilisées uniquement pour répondre à votre demande. Elles ne sont ni transmises à des tiers, ni utilisées à des fins commerciales.
          </p>
          <p>
            <strong>Responsable du traitement :</strong> {siteConfig.founder}<br />
            <strong>Contact :</strong> {siteConfig.email}<br />
            <strong>Durée de conservation :</strong> 3 ans à compter du dernier contact.
          </p>
          <p>
            Pour exercer vos droits, adressez-vous à : <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">{siteConfig.email}</a>
          </p>

          <h2 className="text-xl font-heading font-bold text-neutral-900 mt-8 mb-4">5. Cookies</h2>
          <p>
            Ce site utilise des cookies strictement nécessaires à son fonctionnement. Aucun cookie de tracking ou publicitaire n&apos;est utilisé. Des cookies d&apos;analyse anonyme (Google Analytics) peuvent être mis en place avec votre consentement.
          </p>

          <h2 className="text-xl font-heading font-bold text-neutral-900 mt-8 mb-4">6. Crédits</h2>
          <p>
            Site conçu et développé par <strong>Agence Celexia</strong>.
          </p>
        </div>
      </SectionContainer>
    </>
  );
}
