import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallCTA } from "@/components/layout/MobileCallCTA";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { AnalyticsTracker } from "@/components/features/AnalyticsTracker";
import { ScrollRevealProvider } from "@/components/features/ScrollRevealProvider";
import { siteConfig } from "@/config/site";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `Plombier à ${siteConfig.address.city} | Dépannage 7j/7 — Devis Gratuit — ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${dmSerif.variable} ${dmSans.variable} antialiased`}
      >
        <SchemaOrg />
        <ScrollRevealProvider />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg"
        >
          Aller au contenu principal
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileCallCTA />
        <AnalyticsTracker />
      </body>
    </html>
  );
}
