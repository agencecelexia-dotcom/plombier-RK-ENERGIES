import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import RealisationsClient from "./RealisationsClient";

export const metadata: Metadata = generatePageMetadata({
  title: "Nos réalisations plomberie, chauffage et climatisation dans le Tarn",
  description: "Découvrez les réalisations RK Energies : installation climatisation, chauffage, dépannage plomberie. Photos avant/après de nos chantiers dans le Tarn (81).",
  path: "/realisations",
});

export default function RealisationsPage() {
  return <RealisationsClient />;
}
