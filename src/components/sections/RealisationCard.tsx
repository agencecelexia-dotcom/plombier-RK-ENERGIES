import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { Realisation } from "@/types";

interface RealisationCardProps {
  realisation: Realisation;
}

export function RealisationCard({ realisation }: RealisationCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
      <div className="grid grid-cols-2">
        <div className="relative">
          <div className="absolute top-2 left-2 z-10">
            <Badge variant="destructive" className="text-xs">
              Avant
            </Badge>
          </div>
          <ImagePlaceholder
            prompt={realisation.beforePrompt}
            aspectRatio={realisation.aspectRatio}
            alt={`${realisation.title} — avant`}
            className="rounded-none h-full"
          />
        </div>
        <div className="relative">
          <div className="absolute top-2 left-2 z-10">
            <Badge className="bg-brand-green text-white text-xs">
              Apres
            </Badge>
          </div>
          <ImagePlaceholder
            prompt={realisation.afterPrompt}
            aspectRatio={realisation.aspectRatio}
            alt={`${realisation.title} — apres`}
            className="rounded-none h-full"
          />
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-1">
          <Badge variant="outline" className="text-xs">
            {realisation.category}
          </Badge>
          <span className="text-xs text-muted-foreground">
            {realisation.city}
          </span>
        </div>
        <h3 className="font-bold text-sm text-primary">{realisation.title}</h3>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
          {realisation.description}
        </p>
      </CardContent>
    </Card>
  );
}
