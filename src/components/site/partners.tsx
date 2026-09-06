import { motion } from "motion/react";

const partners = [
  "EMIRATES",
  "QATAR AIRWAYS",
  "FOUR SEASONS",
  "AMAN",
  "TURKISH AIRLINES",
  "ROSEWOOD",
  "BANYAN TREE",
];

export function Partners() {
  return (
    <section aria-label="Our partners" className="border-y border-midnight/5 bg-white py-10">
      <div className="container-luxe">
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-midnight/40">
          Trusted partners & preferred suppliers
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 md:gap-x-16">
          {partners.map((p, i) => (
            <motion.span
              key={p}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="font-serif text-base tracking-[0.18em] text-midnight/45 transition-colors hover:text-midnight md:text-lg"
            >
              {p}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
