import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className,
  dark,
}: SectionHeadingProps) {
  return (
    <div
      data-animate="fade-up"
      className={cn(
        "mb-10 md:mb-14",
        align === "center" && "text-center",
        className
      )}
    >
      {badge && (
        <Badge variant={dark ? "warm" : "secondary"} className="mb-3">
          {badge}
        </Badge>
      )}
      <h2 className={cn(
        "text-2xl md:text-3xl lg:text-4xl",
        dark ? "text-white" : "text-foreground"
      )}>
        {title}
      </h2>
      <div className={cn(
        "mt-4 w-16 h-1 rounded-full bg-accent-warm",
        align === "center" && "mx-auto"
      )} />
      {subtitle && (
        <p className={cn(
          "mt-3 max-w-2xl text-base md:text-lg",
          dark ? "text-white/70" : "text-muted-foreground",
          align === "center" && "mx-auto"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
