"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function MobileCallCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden p-3 bg-white/80 backdrop-blur-md border-t">
      <a
        href={siteConfig.phoneHref}
        data-track="mobile-appel-sticky"
        className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-destructive hover:bg-destructive/90 text-white font-bold text-base transition-colors shadow-lg"
      >
        <Phone className="w-5 h-5" />
        Appelez maintenant
      </a>
    </div>
  );
}
