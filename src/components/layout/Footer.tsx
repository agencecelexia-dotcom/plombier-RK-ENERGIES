import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { footerNavItems, serviceNavItems } from "@/config/navigation";
import { communes } from "@/config/communes";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pb-24 lg:pb-0">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Infos */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="font-bold text-lg">D</span>
              </div>
              <span className="font-heading text-lg font-bold">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm mb-6">
              {siteConfig.description}
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-2 hover:text-white/90 transition-colors font-bold text-lg"
                >
                  <Phone className="w-5 h-5 shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-white/90 transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.street}, {siteConfig.address.postalCode}{" "}
                  {siteConfig.address.city}
                </span>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/70">
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
            <h3 className="font-heading text-base font-bold mb-4 text-white">
              Navigation
            </h3>
            <ul className="space-y-2">
              {footerNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="font-heading text-base font-bold mb-4 text-white">
              Nos services
            </h3>
            <ul className="space-y-2">
              {serviceNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Zone d'intervention */}
          <div>
            <h3 className="font-heading text-base font-bold mb-4 text-white">
              Zone d&apos;intervention
            </h3>
            <p className="text-sm text-primary-foreground/70 mb-3">
              Nous intervenons dans un rayon de 30 km autour de Lyon :
            </p>
            <div className="flex flex-wrap gap-1.5">
              {communes.map((commune) => (
                <span
                  key={commune.name}
                  className="text-xs text-primary-foreground/60 bg-white/5 rounded px-2 py-0.5"
                >
                  {commune.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.legalName} — SIRET{" "}
            {siteConfig.siret}
          </p>
          <div className="flex items-center gap-4">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">
              Mentions legales
            </Link>
            <span>|</span>
            <Link href="/mentions-legales" className="hover:text-white transition-colors">
              Politique de confidentialite
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
