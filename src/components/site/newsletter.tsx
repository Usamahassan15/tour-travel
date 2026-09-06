import { useState } from "react";
import { motion } from "motion/react";
import { Check, Send } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section aria-label="Newsletter" className="bg-canvas pb-24 md:pb-32">
      <div className="container-luxe">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] bg-midnight px-8 py-14 text-white md:px-16 md:py-20"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-cobalt/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-20 size-72 rounded-full bg-amber-brand/20 blur-3xl" />

          <div className="relative grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-brand">
                The Concierge Letter
              </span>
              <h2 className="mt-4 font-serif text-3xl leading-tight md:text-5xl">
                Private fares and quiet escapes,{" "}
                <em className="italic text-amber-brand">once a month.</em>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
                Suite upgrades, seasonal windows and off-market villas — shared with our list
                before they reach anyone else. No noise, unsubscribe anytime.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setDone(true);
              }}
              className="w-full"
            >
              {done ? (
                <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-6 py-5 text-sm ring-1 ring-white/15">
                  <Check className="size-5 text-amber-brand" />
                  You're on the list — welcome aboard.
                </div>
              ) : (
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    aria-label="Email address"
                    className="w-full rounded-full bg-white/10 px-6 py-4 text-sm text-white outline-none ring-1 ring-white/15 transition placeholder:text-white/40 focus:ring-amber-brand"
                  />
                  <button
                    type="submit"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-amber-brand px-7 py-4 text-[12px] font-semibold uppercase tracking-widest text-midnight transition hover:scale-[1.02] active:scale-95"
                  >
                    Subscribe <Send className="size-4" />
                  </button>
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
