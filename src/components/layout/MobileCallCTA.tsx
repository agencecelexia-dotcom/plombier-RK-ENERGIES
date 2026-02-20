import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function MobileCallCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden p-3 bg-white/95 backdrop-blur-sm border-t border-border/50">
      <a
        href={siteConfig.phoneHref}
        data-track="mobile-appel-sticky"
        className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-accent-warm hover:bg-accent-warm-hover text-white font-bold text-base transition-colors shadow-lg btn-pulse"
      >
        <Phone className="w-5 h-5" />
        Appelez maintenant
      </a>
    </div>
  );
}
