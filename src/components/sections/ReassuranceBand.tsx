import { Clock, CalendarDays, BadgeEuro, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Clock,
    label: "Intervention en moins de 2h",
  },
  {
    icon: CalendarDays,
    label: "Disponible 7j/7",
  },
  {
    icon: BadgeEuro,
    label: "Devis gratuit, sans surprise",
  },
  {
    icon: ShieldCheck,
    label: "Assuré décennale",
  },
];

export function ReassuranceBand() {
  return (
    <section className="bg-gradient-to-r from-primary via-primary to-surface-dark py-8" aria-label="Nos engagements">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 justify-center text-primary-foreground"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-accent-warm" />
              </div>
              <span className="text-sm md:text-base font-semibold">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
