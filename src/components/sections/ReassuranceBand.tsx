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
    label: "Assure decennale",
  },
];

export function ReassuranceBand() {
  return (
    <section className="bg-primary py-6">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 justify-center text-primary-foreground"
            >
              <item.icon className="w-8 h-8 shrink-0 text-white/80" />
              <span className="text-sm md:text-base font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
