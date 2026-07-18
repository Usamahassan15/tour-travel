import { motion } from "motion/react";
import { Star, ArrowUpRight } from "lucide-react";
import { destinations } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";

export function Destinations() {
  return (
    <section id="destinations" className="bg-canvas py-24 md:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Popular Destinations"
          title={<>The world, <em className="font-serif italic text-cobalt">refined.</em></>}
          description="From private atolls to alpine hideaways — hand-picked places worth crossing time zones for."
          action={
            <a href="#tours" className="group inline-flex items-center gap-2 text-sm font-semibold text-midnight">
              View all destinations
              <span className="grid size-8 place-items-center rounded-full bg-midnight/5 transition group-hover:bg-amber-brand">
                <ArrowUpRight className="size-4" />
              </span>
            </a>
          }
        />

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {destinations.map((d, i) => (
            <motion.a
              key={d.id}
              href="#tours"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.06 }}
              className={
                "group relative overflow-hidden rounded-3xl ring-1 ring-midnight/5 " +
                (i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-[4/5]")
              }
            >
              <img
                src={d.image}
                alt={`${d.name}, ${d.country}`}
                width={900}
                height={1100}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/85 via-midnight/20 to-transparent" />
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-midnight">
                  <Star className="size-3 fill-amber-brand stroke-amber-brand" /> {d.rating}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                  {d.country}
                </p>
                <h3 className="mt-1 font-serif text-2xl md:text-3xl">{d.name}</h3>
                <div className="mt-3 flex items-baseline justify-between text-xs text-white/80">
                  <span>{d.duration}</span>
                  <span>
                    From <span className="font-semibold text-amber-brand">${d.from.toLocaleString()}</span>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}