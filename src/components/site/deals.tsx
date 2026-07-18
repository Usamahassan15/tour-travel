import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Clock, Sparkles } from "lucide-react";

function useCountdown(targetMs: number) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const i = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(i);
  }, []);
  const diff = Math.max(0, targetMs - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
}

export function Deals() {
  const target = typeof window === "undefined" ? 0 : Date.now() + 5 * 86400000 + 3 * 3600000;
  const { d, h, m, s } = useCountdown(target);
  const cells = [
    { label: "Days", v: d },
    { label: "Hrs", v: h },
    { label: "Min", v: m },
    { label: "Sec", v: s },
  ];
  return (
    <section id="deals" className="bg-midnight py-24 text-white md:py-32">
      <div className="container-luxe grid items-center gap-14 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow flex items-center gap-2 text-amber-brand">
            <Sparkles className="size-3.5" /> Special Deals
          </span>
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
            Early-bird & seasonal offers — <em className="italic text-amber-brand">up to 30% off.</em>
          </h2>
          <p className="mt-5 max-w-[46ch] text-white/60">
            Limited allocations on selected departures. Group discounts and honeymoon
            add-ons available on request from our concierges.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#tours"
              className="rounded-full bg-amber-brand px-6 py-3 text-[12px] font-semibold uppercase tracking-widest text-midnight"
            >
              See Featured Deals
            </a>
            <a
              href="#enquiry"
              className="rounded-full border border-white/25 px-6 py-3 text-[12px] font-semibold uppercase tracking-widest text-white hover:bg-white/10"
            >
              Request Group Rates
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="glass-dark relative overflow-hidden rounded-3xl p-10"
        >
          <div className="absolute -right-16 -top-16 size-56 rounded-full bg-amber-brand/20 blur-3xl" />
          <div className="flex items-center gap-2 text-amber-brand">
            <Clock className="size-4" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em]">Offer ends in</span>
          </div>
          <div className="mt-6 grid grid-cols-4 gap-3">
            {cells.map((c) => (
              <div key={c.label} className="rounded-2xl bg-white/5 p-4 text-center ring-1 ring-white/10">
                <div className="font-serif text-4xl tabular-nums md:text-5xl">
                  {String(c.v).padStart(2, "0")}
                </div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-white/50">
                  {c.label}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-between text-sm">
            <span className="text-white/60">Maldives · Overwater Villa · 6N</span>
            <span>
              <span className="mr-2 text-white/40 line-through">$3,200</span>
              <span className="font-serif text-2xl text-amber-brand">$2,240</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}