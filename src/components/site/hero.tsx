import { motion } from "motion/react";
import { Play, MessageCircle, ArrowRight, Plane, Star, Users, MapPin } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { Counter } from "./counter";
import { whatsappHref } from "@/lib/whatsapp";

const stats = [
  { icon: Users, to: 10000, suffix: "+", label: "Happy Travelers" },
  { icon: MapPin, to: 150, suffix: "+", label: "Destinations" },
  { icon: Star, to: 500, suffix: "+", label: "Tour Packages" },
  { icon: MessageCircle, to: 24, suffix: "/7", label: "Concierge" },
];

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden bg-midnight text-white">
      {/* Background photo */}
      <img
        src={heroImg}
        alt="Luxury yacht cruising through the Mediterranean at golden twilight"
        width={1920}
        height={1200}
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-midnight/70 via-midnight/40 to-midnight" />

      {/* Drifting plane silhouette */}
      <div className="pointer-events-none absolute inset-x-0 top-24 -z-10 h-24 opacity-30">
        <div className="animate-drift w-max">
          <Plane className="size-8 -rotate-12 text-white" />
        </div>
      </div>

      {/* Floating orbs */}
      <div className="animate-float-slow absolute right-[8%] top-[22%] -z-10 size-40 rounded-full bg-amber-brand/20 blur-3xl" />
      <div className="animate-float-slow absolute left-[6%] bottom-[18%] -z-10 size-56 rounded-full bg-cyan-brand/20 blur-3xl [animation-delay:1.5s]" />

      <div className="container-luxe grid min-h-[100svh] items-center pb-16 pt-32 md:grid-cols-[1fr_420px] md:gap-12 md:pb-24 md:pt-36">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow text-amber-brand"
          >
            Bespoke luxury travel — since 2014
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 text-balance font-serif text-5xl leading-[0.98] tracking-tight md:text-7xl lg:text-8xl"
          >
            Explore the world <br />
            <span className="italic text-amber-brand">with confidence.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-[52ch] text-pretty text-base text-white/70 md:text-lg"
          >
            Book unforgettable tours, holiday packages and private travel experiences at
            the best prices — orchestrated by concierges who know every detail matters.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#tours"
              className="inline-flex items-center gap-2 rounded-full bg-amber-brand px-7 py-3.5 text-[12px] font-semibold uppercase tracking-widest text-midnight shadow-lg ring-1 ring-amber-brand/50 transition hover:translate-y-[-1px]"
            >
              Explore Tours <ArrowRight className="size-4" />
            </a>
            <a
              href="#enquiry"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-[12px] font-semibold uppercase tracking-widest text-white backdrop-blur transition hover:bg-white/10"
            >
              Enquire Now
            </a>
            <a
              href={whatsappHref("Hi Vantaggio, I'd like to learn more about your journeys.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-3 py-3 text-[12px] font-semibold uppercase tracking-widest text-white/90 hover:text-white"
            >
              <Play className="size-4 fill-white" /> Watch Video
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-14 grid max-w-2xl grid-cols-2 gap-6 border-t border-white/10 pt-8 md:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="mb-1 flex items-center gap-1.5 text-amber-brand/90">
                  <s.icon className="size-3.5" />
                </div>
                <div className="font-serif text-3xl leading-none tracking-tight md:text-4xl">
                  <Counter to={s.to} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating enquiry card */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass hidden rounded-3xl p-8 text-midnight shadow-luxe md:block"
        >
          <p className="eyebrow text-cobalt">Find your escape</p>
          <h3 className="mt-2 font-serif text-3xl">Plan a journey</h3>
          <p className="mt-2 text-sm text-midnight/60">Tell us where — we do the rest.</p>

          <div className="mt-6 space-y-4">
            <div>
              <label className="text-[10px] font-semibold uppercase tracking-widest text-midnight/50">
                Destination
              </label>
              <input
                type="text"
                placeholder="Where to?"
                className="mt-1 w-full rounded-xl border-0 bg-midnight/5 px-4 py-3 text-sm outline-none ring-1 ring-transparent transition focus:bg-white focus:ring-cobalt/30"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] font-semibold uppercase tracking-widest text-midnight/50">
                  Departure
                </label>
                <input
                  type="date"
                  className="mt-1 w-full rounded-xl border-0 bg-midnight/5 px-4 py-3 text-sm outline-none ring-1 ring-transparent focus:bg-white focus:ring-cobalt/30"
                />
              </div>
              <div>
                <label className="text-[10px] font-semibold uppercase tracking-widest text-midnight/50">
                  Travelers
                </label>
                <select className="mt-1 w-full rounded-xl border-0 bg-midnight/5 px-4 py-3 text-sm outline-none ring-1 ring-transparent focus:bg-white focus:ring-cobalt/30">
                  <option>2 Adults</option>
                  <option>1 Adult</option>
                  <option>Family</option>
                  <option>Group</option>
                </select>
              </div>
            </div>
            <a
              href="#enquiry"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-midnight py-4 text-[12px] font-semibold uppercase tracking-widest text-white transition hover:bg-midnight/90"
            >
              Check Availability <ArrowRight className="size-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}