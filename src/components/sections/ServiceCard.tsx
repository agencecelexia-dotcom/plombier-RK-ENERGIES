import Link from "next/link";
import { ArrowRight, Siren, Wrench, Bath, Flame, Droplets, ClipboardCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Service } from "@/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Siren,
  Wrench,
  Bath,
  Flame,
  Droplets,
  ClipboardCheck,
};

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon];

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-transparent hover:border-primary/20">
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          {IconComponent && (
            <IconComponent className="w-6 h-6 text-primary" />
          )}
        </div>
        <h3 className="text-lg font-bold text-primary mb-2">
          {service.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {service.shortDescription}
        </p>
        <Link
          href={service.slug}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline group-hover:gap-2 transition-all"
        >
          En savoir plus
          <ArrowRight className="w-4 h-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
