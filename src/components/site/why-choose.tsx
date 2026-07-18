import { motion } from "motion/react";
import {
  Compass, Wallet, BedDouble, ShieldCheck, HeadphonesIcon, CalendarCheck, Award, FileCheck,
} from "lucide-react";
import { SectionHeading } from "./section-heading";

const reasons = [
  { icon: Compass, title: "Professional Guides", desc: "Regional specialists on the ground in every destination." },
  { icon: Wallet, title: "Best Value", desc: "Direct partnerships mean better prices — never a markup war." },
  { icon: BedDouble, title: "Luxury Hotels", desc: "Handpicked 5-star stays and boutique retreats." },
  { icon: ShieldCheck, title: "Safe Travel", desc: "Vetted operators, comprehensive travel insurance." },
  { icon: HeadphonesIcon, title: "24/7 Support", desc: "A real human, in your timezone, whenever you need." },
  { icon: CalendarCheck, title: "Easy Booking", desc: "One conversation, one contract, one point of contact." },
  { icon: Award, title: "Trusted Agency", desc: "IATA-affiliated with 10,000+ journeys curated." },
  { icon: FileCheck, title: "Visa Assistance", desc: "End-to-end paperwork handled by our visa desk." },
];

export function WhyChoose() {
  return (
    <section className="bg-canvas py-24 md:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Why Choose Vantaggio"
          title={<>The difference is in <em className="italic text-cobalt">the details.</em></>}
          description="Ten years, one hundred fifty destinations, and an obsession with getting the small things right."
        />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}
              className="group rounded-2xl bg-white p-6 ring-1 ring-midnight/5 transition hover:-translate-y-1 hover:shadow-card"
            >
              <div className="grid size-11 place-items-center rounded-xl bg-midnight text-amber-brand transition group-hover:bg-amber-brand group-hover:text-midnight">
                <r.icon className="size-5" />
              </div>
              <h3 className="mt-5 font-serif text-xl">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-midnight/60">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}