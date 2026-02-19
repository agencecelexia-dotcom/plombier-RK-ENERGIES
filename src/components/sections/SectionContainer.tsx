import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  variant?: "white" | "gray";
  id?: string;
}

export function SectionContainer({
  children,
  className,
  variant = "white",
  id,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        variant === "gray" ? "bg-muted" : "bg-background",
        className
      )}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
}
