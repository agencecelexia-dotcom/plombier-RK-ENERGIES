import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  variant?: "white" | "gray" | "warm" | "dark" | "accent";
  id?: string;
  waveTop?: boolean;
  waveBottom?: boolean;
  dots?: boolean;
}

const variantClasses: Record<string, string> = {
  white: "bg-background",
  gray: "bg-muted",
  warm: "bg-surface-warm",
  dark: "bg-surface-dark text-white",
  accent: "bg-primary text-primary-foreground",
};

export function SectionContainer({
  children,
  className,
  variant = "white",
  id,
  waveTop,
  waveBottom,
  dots,
}: SectionContainerProps) {
  const hasDecorative = waveTop || waveBottom || dots;

  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        variantClasses[variant],
        hasDecorative && "relative overflow-hidden",
        className
      )}
    >
      {waveTop && (
        <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M0 40L60 35C120 30 240 20 360 16.7C480 13.3 600 16.7 720 20C840 23.3 960 26.7 1080 25C1200 23.3 1320 16.7 1380 13.3L1440 10V0H0V40Z" fill="currentColor" />
        </svg>
      )}
      {dots && (
        <div
          className="absolute top-0 right-0 w-64 h-64 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
          aria-hidden="true"
        />
      )}
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
}
