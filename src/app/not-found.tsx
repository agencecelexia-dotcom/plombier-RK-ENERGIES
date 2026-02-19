import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <p className="text-8xl font-extrabold text-primary/20 mb-4">404</p>
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-4">
          Page introuvable
        </h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          La page que vous recherchez n&apos;existe pas ou a ete deplacee. Verifiez l&apos;adresse ou retournez a l&apos;accueil.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild>
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Retour a l&apos;accueil
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">
              Nous contacter
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
