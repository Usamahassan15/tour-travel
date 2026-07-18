import { Counter } from "./counter";

const stats = [
  { value: 10, suffix: "+", label: "Years of Craft" },
  { value: 150, suffix: "+", label: "Destinations" },
  { value: 10000, suffix: "+", label: "Happy Travelers", formatter: (n: number) => n.toLocaleString() },
  { value: 4.9, label: "Guest Rating", decimals: 1 },
];

export function StatsStrip() {
  return (
    <section className="border-y border-midnight/10 bg-white py-12">
      <div className="container-luxe grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-serif text-4xl text-midnight md:text-5xl">
              <Counter
                to={s.value}
                decimals={s.decimals}
                suffix={s.suffix}
                formatter={s.formatter}
              />
            </div>
            <div className="mt-2 text-[11px] font-semibold uppercase tracking-widest text-midnight/50">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}