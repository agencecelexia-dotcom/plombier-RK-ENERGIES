"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { mainNavItems } from "@/config/navigation";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleServicesKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setServicesOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setServicesOpen(false);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setServicesOpen(true);
      }
    },
    []
  );

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white"
        )}
      >
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 shrink-0"
              aria-label="Retour à l'accueil — Durand Plomberie"
            >
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary-foreground" aria-hidden="true">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 13.5a4 4 0 0 0 0-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
                </svg>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-heading text-lg font-normal text-foreground">
                  {siteConfig.name}
                </span>
                <span className="text-xs text-muted-foreground">Plombier à Lyon</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
              {mainNavItems.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md"
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      aria-controls="services-submenu"
                      onClick={() => setServicesOpen((prev) => !prev)}
                      onKeyDown={handleServicesKeyDown}
                    >
                      {item.label}
                      <ChevronDown className={cn("w-4 h-4 transition-transform", servicesOpen && "rotate-180")} />
                    </button>
                    {servicesOpen && (
                      <div
                        id="services-submenu"
                        role="menu"
                        className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-lg border py-2 backdrop-blur-sm animate-in fade-in slide-in-from-top-2 duration-200"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            role="menuitem"
                            className={cn(
                              "block px-4 py-2.5 text-sm text-foreground/80 hover:bg-muted hover:text-primary transition-colors",
                              isActive(child.href) && "text-primary font-semibold"
                            )}
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
                    href={item.href!}
                    className={cn(
                      "px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md",
                      isActive(item.href!) && "text-primary font-semibold after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-6 after:h-0.5 after:bg-accent-warm after:rounded-full relative"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA + Mobile Menu */}
            <div className="flex items-center gap-3">
              <Button asChild variant="cta" className="hidden sm:flex">
                <a href={siteConfig.phoneHref} data-track="header-appel">
                  <Phone className="w-4 h-4 mr-2" />
                  {siteConfig.phone}
                </a>
              </Button>
              <button
                className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                onClick={() => setMobileOpen(true)}
                aria-label="Ouvrir le menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
