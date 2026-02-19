import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = generatePageMetadata({
  title: "Mentions legales",
  description: `Mentions legales du site ${siteConfig.name}. Informations sur l'editeur, l'hebergeur, la protection des donnees et les cookies.`,
  path: "/mentions-legales",
});

export default function MentionsLegalesPage() {
  return (
    <>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl pt-8">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Mentions legales" },
          ]}
        />
      </div>

      <SectionContainer>
        <div className="max-w-3xl mx-auto prose prose-sm prose-slate">
          <h1 className="text-3xl font-bold text-primary mb-8">Mentions legales</h1>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">1. Editeur du site</h2>
          <p>
            Le site <strong>{siteConfig.url}</strong> est edite par :
          </p>
          <ul className="list-none space-y-1 pl-0">
            <li><strong>Raison sociale :</strong> {siteConfig.legalName}</li>
            <li><strong>Siege social :</strong> {siteConfig.address.street}, {siteConfig.address.postalCode} {siteConfig.address.city}</li>
            <li><strong>SIRET :</strong> {siteConfig.siret}</li>
            <li><strong>Telephone :</strong> {siteConfig.phone}</li>
            <li><strong>Email :</strong> {siteConfig.email}</li>
            <li><strong>Directeur de la publication :</strong> {siteConfig.founder}</li>
          </ul>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">2. Hebergeur</h2>
          <p>
            Ce site est heberge par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">3. Propriete intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus (textes, images, graphismes, logo, icones) de ce site sont la propriete exclusive de {siteConfig.legalName}, sauf mention contraire. Toute reproduction, meme partielle, est interdite sans autorisation prealable.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">4. Protection des donnees personnelles (RGPD)</h2>
          <p>
            Conformement au Reglement General sur la Protection des Donnees (RGPD) et a la loi Informatique et Libertes, vous disposez d&apos;un droit d&apos;acces, de rectification, de suppression et de portabilite de vos donnees personnelles.
          </p>
          <p>
            Les donnees collectees via le formulaire de contact (nom, telephone, email, message) sont utilisees uniquement pour repondre a votre demande. Elles ne sont ni transmises a des tiers, ni utilisees a des fins commerciales.
          </p>
          <p>
            <strong>Responsable du traitement :</strong> {siteConfig.founder}<br />
            <strong>Contact :</strong> {siteConfig.email}<br />
            <strong>Duree de conservation :</strong> 3 ans a compter du dernier contact.
          </p>
          <p>
            Pour exercer vos droits, adressez-vous a : <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">{siteConfig.email}</a>
          </p>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">5. Cookies</h2>
          <p>
            Ce site utilise des cookies strictement necessaires a son fonctionnement. Aucun cookie de tracking ou publicitaire n&apos;est utilise. Des cookies d&apos;analyse anonyme (Google Analytics) peuvent etre mis en place avec votre consentement.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">6. Credits</h2>
          <p>
            Site concu et developpe par <strong>Agence Celexia</strong>.
          </p>
        </div>
      </SectionContainer>
    </>
  );
}
