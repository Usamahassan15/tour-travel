import { useState } from "react";
import { motion } from "motion/react";
import { z } from "zod";
import { Send } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { SectionHeading } from "./section-heading";

const schema = z.object({
  name: z.string().trim().min(2, "Please share your full name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().min(6, "Enter a valid phone number").max(24),
  destination: z.string().trim().min(2).max(80),
  travelDate: z.string().trim().max(24).optional().or(z.literal("")),
  travelers: z.string().trim().max(6).optional().or(z.literal("")),
  budget: z.string().trim().max(24).optional().or(z.literal("")),
  message: z.string().trim().max(600).optional().or(z.literal("")),
});

type FormValues = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormValues, string>>;

const initial: FormValues = {
  name: "", email: "", phone: "", destination: "",
  travelDate: "", travelers: "", budget: "", message: "",
};

export function EnquiryForm() {
  const [values, setValues] = useState<FormValues>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = <K extends keyof FormValues>(k: K, v: string) =>
    setValues((s) => ({ ...s, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const flat: Errors = {};
      parsed.error.issues.forEach((iss) => {
        const key = iss.path[0] as keyof FormValues;
        if (!flat[key]) flat[key] = iss.message;
      });
      setErrors(flat);
      return;
    }
    setErrors({});
    const url = buildWhatsAppUrl(parsed.data);
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
    setValues(initial);
    setTimeout(() => setSent(false), 4000);
  };

  const field =
    "w-full rounded-xl border border-midnight/15 bg-white px-4 py-3 text-sm text-midnight outline-none transition placeholder:text-midnight/35 focus:border-cobalt focus:ring-2 focus:ring-cobalt/20";

  return (
    <section id="enquiry" className="relative overflow-hidden bg-midnight py-24 text-white md:py-32">
      <div className="absolute -left-40 top-10 size-96 rounded-full bg-cobalt/25 blur-[120px]" />
      <div className="absolute -right-40 bottom-10 size-96 rounded-full bg-amber-brand/20 blur-[120px]" />

      <div className="container-luxe relative grid gap-14 md:grid-cols-[1fr_1.15fr]">
        <div>
          <SectionHeading
            variant="dark"
            eyebrow="Enquiry"
            title={<>Tell us where — <em className="italic text-amber-brand">we'll do the rest.</em></>}
            description="Share a few details and a concierge will craft a proposal, usually within a few hours. Prefer instant chat? Every submission opens WhatsApp with your enquiry pre-filled."
          />
          <ul className="mt-8 space-y-3 text-sm text-white/60">
            <li>· No obligation, no cost — proposals are free.</li>
            <li>· Human replies from real travel designers.</li>
            <li>· Response within 4 business hours.</li>
          </ul>
        </div>

        <motion.form
          onSubmit={submit}
          noValidate
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="glass-dark grid gap-4 rounded-3xl p-8 md:grid-cols-2 md:p-10"
        >
          {[
            { k: "name", label: "Full Name", type: "text", placeholder: "Jane Doe" },
            { k: "email", label: "Email", type: "email", placeholder: "jane@company.com" },
            { k: "phone", label: "Phone", type: "tel", placeholder: "+1 (555) 000 0000" },
            { k: "destination", label: "Destination", type: "text", placeholder: "Maldives, Kyoto…" },
            { k: "travelDate", label: "Travel Date", type: "text", placeholder: "March 2026" },
            { k: "travelers", label: "Travelers", type: "text", placeholder: "2 adults" },
          ].map((f) => (
            <label key={f.k} className="block">
              <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-white/60">
                {f.label}
              </span>
              <input
                type={f.type}
                value={values[f.k as keyof FormValues]}
                onChange={(e) => set(f.k as keyof FormValues, e.target.value)}
                placeholder={f.placeholder}
                className={field}
                aria-invalid={!!errors[f.k as keyof FormValues]}
              />
              {errors[f.k as keyof FormValues] && (
                <span className="mt-1 block text-xs text-red-300">
                  {errors[f.k as keyof FormValues]}
                </span>
              )}
            </label>
          ))}

          <label className="block md:col-span-2">
            <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-white/60">
              Budget (optional)
            </span>
            <select
              value={values.budget}
              onChange={(e) => set("budget", e.target.value)}
              className={field}
            >
              <option value="">Select a range</option>
              <option>Under $2,000 pp</option>
              <option>$2,000 – $5,000 pp</option>
              <option>$5,000 – $10,000 pp</option>
              <option>$10,000+ pp</option>
            </select>
          </label>

          <label className="block md:col-span-2">
            <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-white/60">
              Tell us more
            </span>
            <textarea
              rows={4}
              value={values.message}
              onChange={(e) => set("message", e.target.value)}
              placeholder="Anniversary? Dietary needs? Specific hotels in mind?"
              className={field}
            />
            {errors.message && (
              <span className="mt-1 block text-xs text-red-300">{errors.message}</span>
            )}
          </label>

          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber-brand px-8 py-4 text-[12px] font-semibold uppercase tracking-widest text-midnight transition hover:bg-white md:col-span-2"
          >
            {sent ? "Opening WhatsApp…" : "Send Enquiry via WhatsApp"}
            <Send className="size-4 transition group-hover:translate-x-0.5" />
          </button>
          <p className="text-center text-[11px] text-white/40 md:col-span-2">
            By submitting, you agree to be contacted about your travel plans.
          </p>
        </motion.form>
      </div>
    </section>
  );
}