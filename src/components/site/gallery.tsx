import { motion } from "motion/react";
import maldives from "@/assets/dest-maldives.jpg";
import dubai from "@/assets/dest-dubai.jpg";
import bali from "@/assets/dest-bali.jpg";
import swiss from "@/assets/dest-switzerland.jpg";
import turkey from "@/assets/dest-turkey.jpg";
import paris from "@/assets/dest-paris.jpg";
import kyoto from "@/assets/pkg-kyoto.jpg";
import safari from "@/assets/pkg-safari.jpg";
import amalfi from "@/assets/pkg-amalfi.jpg";
import jet from "@/assets/gal-jet.jpg";
import pool from "@/assets/gal-pool.jpg";
import { SectionHeading } from "./section-heading";

const images = [
  { src: maldives, alt: "Maldives overwater villas", span: "row-span-2" },
  { src: pool, alt: "Aegean infinity pool at sunset", span: "row-span-2" },
  { src: turkey, alt: "Hot air balloons over Cappadocia" },
  { src: amalfi, alt: "Amalfi coast" },
  { src: kyoto, alt: "Kyoto bamboo forest" },
  { src: paris, alt: "Paris at dusk" },
  { src: safari, alt: "Serengeti safari" },
  { src: dubai, alt: "Dubai skyline" },
  { src: bali, alt: "Bali rice terraces" },
  { src: swiss, alt: "Swiss Alps chalet" },
  { src: jet, alt: "Private jet cabin" },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-canvas py-24 md:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Travel Gallery"
          title={<>Postcards from <em className="italic text-cobalt">our travelers.</em></>}
          description="A living gallery of moments — sunsets, private terraces, quiet corners."
        />

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
          {images.map((img, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.04 }}
              className={"group relative overflow-hidden rounded-2xl ring-1 ring-midnight/5 " + (img.span ?? "")}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-midnight/0 transition group-hover:bg-midnight/20" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}