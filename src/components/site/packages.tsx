import { motion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";
import { packages } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";

const badgeStyles: Record<string, string> = {
  Popular: "bg-cobalt/10 text-cobalt",
  "Best Seller": "bg-cyan-brand/10 text-cyan-brand",
  New: "bg-amber-brand/15 text-amber-brand",
};

export function Packages() {
  return (
    <section id="tours" className="bg-white py-24 md:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Featured Tour Packages"
          title={<>Bespoke <em className="font-serif italic text-cobalt">itineraries.</em></>}
          description="All-inclusive journeys designed by regional specialists. Private guides, curated stays, zero admin."
          align="center"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {packages.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group overflow-hidden rounded-[2rem] bg-canvas ring-1 ring-midnight/5 transition hover:-translate-y-1 hover:shadow-luxe"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title}, ${p.location}`}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span
                  className={
                    "absolute left-5 top-5 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest " +
                    badgeStyles[p.badge]
                  }
                >
                  {p.badge}
                </span>
              </div>

              <div className="px-7 pt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-midnight/40">
                  {p.location} · {p.duration}
                </p>
                <h3 className="mt-2 font-serif text-2xl">{p.title}</h3>
                <div className="mt-2 flex items-center gap-1 text-amber-brand">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="size-3.5 fill-current" />
                  ))}
                </div>
                <ul className="mt-4 space-y-1.5 text-sm text-midnight/60">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2">
                      <span className="size-1 rounded-full bg-amber-brand" /> {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ticket perforation */}
              <div className="relative my-6 h-6">
                <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 border-t border-dashed border-midnight/15" />
                <div className="absolute -left-3 top-1/2 size-6 -translate-y-1/2 rounded-full bg-white ring-1 ring-midnight/5" />
                <div className="absolute -right-3 top-1/2 size-6 -translate-y-1/2 rounded-full bg-white ring-1 ring-midnight/5" />
              </div>

              <div className="flex items-center justify-between px-7 pb-7">
                <div>
                  <p className="text-xs text-midnight/40 line-through">${p.oldPrice.toLocaleString()}</p>
                  <p className="font-serif text-2xl text-midnight">
                    ${p.price.toLocaleString()}
                    <span className="ml-1 font-sans text-[11px] font-normal text-midnight/50">/ pp</span>
                  </p>
                </div>
                <a
                  href="#enquiry"
                  className="inline-flex items-center gap-1.5 rounded-full bg-amber-brand px-4 py-2.5 text-[11px] font-semibold uppercase tracking-widest text-midnight transition hover:bg-midnight hover:text-white"
                >
                  Book Now <ArrowRight className="size-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}