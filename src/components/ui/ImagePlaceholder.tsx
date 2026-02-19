import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  prompt: string;
  aspectRatio?: string;
  alt: string;
  className?: string;
  overlay?: boolean;
  children?: React.ReactNode;
}

const ratioMap: Record<string, string> = {
  "1/1": "aspect-square",
  "4/3": "aspect-[4/3]",
  "3/4": "aspect-[3/4]",
  "16/9": "aspect-video",
  "9/16": "aspect-[9/16]",
  "2/3": "aspect-[2/3]",
  "3/2": "aspect-[3/2]",
  "21/9": "aspect-[21/9]",
};

export function ImagePlaceholder({
  prompt,
  aspectRatio = "16/9",
  alt,
  className,
  overlay = false,
  children,
}: ImagePlaceholderProps) {
  const ratioClass = ratioMap[aspectRatio] || "aspect-video";

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 via-primary/10 to-brand-green/10",
        ratioClass,
        className
      )}
    >
      {overlay && (
        <div className="absolute inset-0 bg-black/60 z-10" />
      )}
      <div className="absolute inset-0 flex items-center justify-center p-4 z-0">
        <div className="text-center max-w-md">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-primary/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
              />
            </svg>
          </div>
          <p className="text-xs text-muted-foreground/60 italic leading-relaxed line-clamp-3">
            {prompt}
          </p>
          <p className="text-[10px] text-muted-foreground/40 mt-1">
            Ratio : {aspectRatio}
          </p>
        </div>
      </div>
      {children && (
        <div className="relative z-20 h-full flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}
