import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-14",
        align === "center" && "text-center",
        className
      )}
    >
      {badge && (
        <Badge variant="secondary" className="mb-3">
          {badge}
        </Badge>
      )}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
