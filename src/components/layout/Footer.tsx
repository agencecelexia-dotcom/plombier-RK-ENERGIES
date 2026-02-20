import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { footerNavItems, serviceNavItems } from "@/config/navigation";
import { communes } from "@/config/communes";

export function Footer() {
  return (
    <footer className="bg-surface-dark text-surface-dark-foreground pb-24 lg:pb-0" aria-label="Informations de contact et navigation">
      <div className="text-surface-dark">
        <svg className="w-full h-8 md:h-12" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 48L60 42C120 36 240 24 360 20C480 16 600 20 720 26C840 32 960 40 1080 38C1200 36 1320 24 1380 18L1440 12V48H0Z" fill="currentColor" />
        </svg>
      </div>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Infos */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-surface-dark-foreground" aria-hidden="true">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-heading text-lg font-normal">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-surface-dark-muted text-sm mb-6">
              {siteConfig.description}
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-2 text-accent-warm hover:text-white/90 transition-colors font-bold text-lg"
                >
                  <Phone className="w-5 h-5 shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-surface-dark-muted hover:text-white/90 transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-surface-dark-muted">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.street}, {siteConfig.address.postalCode}{" "}
                  {siteConfig.address.city}
                </span>
              </li>
              <li className="flex items-start gap-2 text-surface-dark-muted">
                <Clock className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  Lun-Ven: {siteConfig.openingHours.weekdays}
                  <br />
                  Sam: {siteConfig.openingHours.saturday}
                  <br />
                  Urgences: {siteConfig.openingHours.emergency}
                </span>
              </li>
            </ul>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="font-heading text-base font-normal mb-4 text-white">
              Navigation
            </h3>
            <ul className="space-y-2">
              {footerNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-surface-dark-muted hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="font-heading text-base font-normal mb-4 text-white">
              Nos services
            </h3>
            <ul className="space-y-2">
              {serviceNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-surface-dark-muted hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Zone d'intervention */}
          <div>
            <h3 className="font-heading text-base font-normal mb-4 text-white">
              Zone d&apos;intervention
            </h3>
            <p className="text-sm text-surface-dark-muted mb-3">
              Nous intervenons dans un rayon de 30 km autour de Lyon :
            </p>
            <div className="flex flex-wrap gap-1.5">
              {communes.map((commune) => (
                <span
                  key={commune.name}
                  className="text-xs text-surface-dark-muted bg-white/[0.06] rounded-full px-2 py-0.5"
                >
                  {commune.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/[0.08]" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-surface-dark-muted">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.legalName} — SIRET{" "}
            {siteConfig.siret}
          </p>
          <div className="flex items-center gap-4">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <span>|</span>
            <Link href="/mentions-legales#confidentialite" className="hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
