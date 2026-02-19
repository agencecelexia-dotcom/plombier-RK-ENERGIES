import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <Quote className="w-8 h-8 text-primary/20 mb-3 shrink-0" />
        <div className="flex gap-0.5 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < testimonial.rating
                  ? "text-yellow-500 fill-yellow-500"
                  : "text-gray-200"
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-foreground/80 leading-relaxed flex-1">
          &ldquo;{testimonial.text}&rdquo;
        </p>
        <div className="mt-4 pt-4 border-t flex items-center justify-between">
          <span className="text-sm font-medium text-primary">
            {testimonial.name}
          </span>
          <span className="text-xs text-muted-foreground">
            {testimonial.date}
            {testimonial.source && ` — ${testimonial.source}`}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
