import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "./section-heading";

const faqs = [
  {
    q: "How do I book a tour?",
    a: "Submit the enquiry form or WhatsApp us. A concierge responds within a few hours with a proposal tailored to your dates, preferences and budget.",
  },
  {
    q: "Do you help with visas?",
    a: "Yes — our visa desk handles documentation, appointments and interview prep for most destinations we serve.",
  },
  {
    q: "Are prices per person or per package?",
    a: "Package prices shown are per person on twin sharing, unless otherwise indicated. Custom quotes are always confirmed in writing.",
  },
  {
    q: "Can you arrange group or corporate travel?",
    a: "Absolutely. We regularly plan corporate off-sites, incentive travel and MICE programs for groups of 10 to 200.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Policies vary by supplier and destination. We share the applicable terms in every proposal — no hidden clauses, ever.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-24 md:py-32">
      <div className="container-luxe grid gap-12 md:grid-cols-[1fr_1.4fr]">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Everything you were <em className="italic text-cobalt">wondering.</em></>}
          description="Still curious? Message our concierge — they answer in minutes, not days."
        />
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-midnight/10">
              <AccordionTrigger className="text-left font-serif text-lg hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-midnight/60">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </section>
  );
}