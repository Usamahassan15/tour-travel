import { motion } from "motion/react";
import {
  Globe2, Plane, FileCheck2, BedDouble, Ship, ShieldCheck, HeartHandshake,
  Building2, Mountain, Users, MoonStar,
} from "lucide-react";
import { SectionHeading } from "./section-heading";

const services = [
  { icon: Globe2, title: "International Tours", desc: "Curated multi-country journeys." },
  { icon: Mountain, title: "Domestic Tours", desc: "Hidden corners closer to home." },
  { icon: FileCheck2, title: "Visa Processing", desc: "End-to-end visa assistance." },
  { icon: BedDouble, title: "Hotel Booking", desc: "5-star to boutique properties." },
  { icon: Plane, title: "Flight Booking", desc: "Business & first-class fares." },
  { icon: ShieldCheck, title: "Travel Insurance", desc: "Peace of mind, worldwide." },
  { icon: MoonStar, title: "Umrah Packages", desc: "Comfortable, guided pilgrimages." },
  { icon: HeartHandshake, title: "Honeymoon Tours", desc: "Private escapes for two." },
  { icon: Building2, title: "Corporate Tours", desc: "Off-sites, incentives, MICE." },
  { icon: Users, title: "Family Packages", desc: "Something for every age." },
  { icon: Ship, title: "Cruise Tours", desc: "Luxury liner partnerships." },
  { icon: Mountain, title: "Adventure Tours", desc: "Trekking, safari, expedition." },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-24 md:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Services"
          title={<>Everything you need — <em className="italic text-cobalt">under one concierge.</em></>}
          description="Twelve services, one point of contact. From visas to villas, we handle every touchpoint of your journey."
          align="center"
        />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.04 }}
              className="flex items-start gap-4 rounded-2xl border border-midnight/5 bg-canvas p-5 transition hover:border-amber-brand/40 hover:bg-white"
            >
              <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-midnight/5">
                <s.icon className="size-4 text-midnight" />
              </div>
              <div>
                <h4 className="text-sm font-semibold">{s.title}</h4>
                <p className="mt-1 text-xs leading-relaxed text-midnight/55">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}