import { motion } from "motion/react";
import { Star, BadgeCheck } from "lucide-react";
import { SectionHeading } from "./section-heading";

const reviews = [
  {
    name: "Elena Rossi",
    country: "Italy",
    text: "Aethelgard doesn't just book a trip — they orchestrate a symphony. From private hangar transfers to hidden village dinners, every moment was flawless.",
    rating: 5,
  },
  {
    name: "Omar Al-Farsi",
    country: "United Arab Emirates",
    text: "The Maldives villa was beyond anything I'd imagined. Their concierge answered within minutes at 3am — that alone was worth it.",
    rating: 5,
  },
  {
    name: "Amelia Chen",
    country: "Singapore",
    text: "We've used other 'luxury' agencies. Vantaggio is on a different plane — quite literally. Every detail, from lounge access to spa timings, was handled.",
    rating: 5,
  },
  {
    name: "James Whitaker",
    country: "United Kingdom",
    text: "Genuine advice, no upselling, incredible partner network. Our Kyoto ryokan stay was a lifetime memory.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="bg-white py-24 md:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Customer Reviews"
          title={
            <>
              Rated <span className="text-amber-brand">4.9</span> from{" "}
              <em className="italic text-cobalt">1,200+</em> travelers.
            </>
          }
          description="Verified reviews from journeys we've orchestrated across six continents."
          align="center"
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className="flex h-full flex-col justify-between rounded-3xl bg-canvas p-7 ring-1 ring-midnight/5"
            >
              <div>
                <div className="flex gap-0.5 text-amber-brand">
                  {Array.from({ length: r.rating }).map((_, k) => (
                    <Star key={k} className="size-3.5 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-midnight/80">
                  "{r.text}"
                </blockquote>
              </div>
              <figcaption className="mt-6 flex items-center gap-3">
                <div
                  aria-hidden
                  className="grid size-10 place-items-center rounded-full bg-midnight font-serif text-white"
                >
                  {r.name[0]}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-sm font-semibold text-midnight">
                    {r.name} <BadgeCheck className="size-3.5 text-cyan-brand" />
                  </div>
                  <div className="text-[11px] text-midnight/50">{r.country}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#enquiry"
            className="text-[12px] font-semibold uppercase tracking-widest text-midnight underline underline-offset-8"
          >
            See More Reviews
          </a>
        </div>
      </div>
    </section>
  );
}