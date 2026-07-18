import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import bali from "@/assets/dest-bali.jpg";
import turkey from "@/assets/dest-turkey.jpg";
import paris from "@/assets/dest-paris.jpg";
import { SectionHeading } from "./section-heading";

const posts = [
  { image: turkey, tag: "Travel Tips", title: "How to fly Cappadocia's balloons — a first-timer's playbook", read: "6 min read" },
  { image: bali, tag: "Visa Guides", title: "The 2026 Bali visa update every luxury traveler should know", read: "4 min read" },
  { image: paris, tag: "Luxury Resorts", title: "Nine Paris suites with views worth the wait", read: "8 min read" },
];

export function Blog() {
  return (
    <section id="blog" className="bg-canvas py-24 md:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Journal"
          title={<>Field notes & <em className="italic text-cobalt">travel dispatches.</em></>}
          description="Slow-cooked stories, practical guides, and the occasional insider tip."
          action={
            <a href="#" className="text-[12px] font-semibold uppercase tracking-widest text-midnight underline underline-offset-8">
              All articles
            </a>
          }
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group cursor-pointer overflow-hidden rounded-3xl bg-white ring-1 ring-midnight/5"
            >
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cobalt">
                    {p.tag}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-midnight/40">{p.read}</span>
                </div>
                <h3 className="mt-3 font-serif text-xl leading-snug">{p.title}</h3>
                <div className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-widest text-midnight">
                  Read More <ArrowUpRight className="size-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}