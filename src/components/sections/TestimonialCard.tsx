import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full relative">
      <span className="absolute top-4 right-6 text-8xl font-serif text-primary/[0.06] leading-none select-none pointer-events-none" aria-hidden="true">&ldquo;</span>
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex gap-0.5 mb-3" role="img" aria-label={`Note : ${testimonial.rating} sur 5`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              aria-hidden="true"
              className={`w-4 h-4 ${
                i < testimonial.rating
                  ? "text-accent-warm fill-accent-warm"
                  : "text-gray-200"
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-foreground/80 leading-relaxed flex-1 italic">
          &ldquo;{testimonial.text}&rdquo;
        </p>
        <div className="mt-4 pt-4 border-t flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <span className="text-xs font-semibold text-primary">
              {testimonial.name.split(" ").map(n => n[0]).join("")}
            </span>
          </div>
          <div className="flex items-center justify-between flex-1">
            <span className="text-sm font-medium text-primary">
              {testimonial.name}
            </span>
            <span className="text-xs text-muted-foreground">
              {testimonial.date}
              {testimonial.source && ` — ${testimonial.source}`}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
