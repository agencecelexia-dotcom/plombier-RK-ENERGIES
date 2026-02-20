import Link from "next/link";
import { siteConfig } from "@/config/site";
import { serviceNavItems } from "@/config/navigation";
import Logo from "./Logo";

export function Footer() {
  return (
    <footer
      className="bg-primary-900 text-neutral-300"
      aria-label="Informations de contact et navigation"
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Col 1: Brand */}
          <div>
            <div className="mb-4">
              <Logo light />
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed mb-5">
              Plombier chauffagiste et climaticien dans le Tarn (81).
              Dépannage urgent 7j/7.
            </p>
            <a
              href={siteConfig.phoneHref}
              className="text-accent-400 hover:text-accent-300 font-semibold transition-colors duration-200"
            >
              {siteConfig.phone}
            </a>
            <p className="text-sm text-neutral-500 mt-1">{siteConfig.email}</p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Nos services
            </h3>
            <ul className="space-y-2">
              {serviceNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 hover:text-accent-400 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Horaires */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Horaires
            </h3>
            <ul className="space-y-1.5 text-sm text-neutral-400">
              <li>Lun–Ven : {siteConfig.openingHours.weekdays}</li>
              <li>Samedi : {siteConfig.openingHours.saturday}</li>
              <li>Urgences : {siteConfig.openingHours.emergency}</li>
            </ul>
            <p className="text-sm text-neutral-500 mt-4">
              Tarn (81) et communes limitrophes
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
            <p>
              &copy; {new Date().getFullYear()} {siteConfig.legalName}
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/mentions-legales"
                className="hover:text-accent-400 transition-colors duration-200"
              >
                Mentions légales
              </Link>
              <span className="text-neutral-700">|</span>
              <Link
                href="/admin"
                className="hover:text-accent-400 transition-colors duration-200"
              >
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
