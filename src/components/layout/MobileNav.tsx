"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, ChevronDown, X, Clock } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { mainNavItems } from "@/config/navigation";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="left" className="w-80 p-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">D</span>
              </div>
              <span className="font-heading text-base font-bold text-primary">
                {siteConfig.name}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-md hover:bg-muted"
              aria-label="Fermer le menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4">
            {mainNavItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full px-6 py-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors"
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        servicesOpen && "rotate-180"
                      )}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="bg-muted/30 py-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className="block px-10 py-2.5 text-sm text-foreground/70 hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="block px-6 py-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Bottom CTA */}
          <div className="p-4 border-t space-y-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Lun-Ven {siteConfig.openingHours.weekdays} | Sam {siteConfig.openingHours.saturday}</span>
            </div>
            <Separator />
            <Button asChild className="w-full bg-destructive hover:bg-destructive/90 text-white">
              <a href={siteConfig.phoneHref}>
                <Phone className="w-4 h-4 mr-2" />
                Appelez-nous — {siteConfig.phone}
              </a>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
