import Link from "next/link";
import { ArrowRight, Siren, Wrench, Bath, Flame, Droplets, ClipboardCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Siren,
  Wrench,
  Bath,
  Flame,
  Droplets,
  ClipboardCheck,
};

const colorMap: Record<string, { bg: string; text: string; strip: string }> = {
  Siren: { bg: "bg-accent-warm/10", text: "text-accent-warm", strip: "bg-accent-warm" },
  Flame: { bg: "bg-accent-warm/10", text: "text-accent-warm", strip: "bg-accent-warm" },
  Wrench: { bg: "bg-primary/10", text: "text-primary", strip: "bg-primary" },
  Droplets: { bg: "bg-primary/10", text: "text-primary", strip: "bg-primary" },
  Bath: { bg: "bg-brand-green/10", text: "text-brand-green", strip: "bg-brand-green" },
  ClipboardCheck: { bg: "bg-brand-green/10", text: "text-brand-green", strip: "bg-brand-green" },
};

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon];
  const colors = colorMap[service.icon] || { bg: "bg-primary/10", text: "text-primary", strip: "bg-primary" };

  return (
    <Card className="py-0 group overflow-hidden" data-animate="scale-up">
      <div className={cn("h-1", colors.strip)} />
      <CardContent className="p-6">
        <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-colors", colors.bg)}>
          {IconComponent && (
            <IconComponent className={cn("w-7 h-7 group-hover:scale-110 transition-transform", colors.text)} />
          )}
        </div>
        <h3 className="text-lg font-bold text-foreground mb-2">
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
          <span className="sr-only"> sur {service.title}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
