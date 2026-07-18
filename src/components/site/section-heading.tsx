import { motion } from "motion/react";
import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  action?: ReactNode;
  variant?: "light" | "dark";
}

export function SectionHeading({ eyebrow, title, description, align = "left", action, variant = "light" }: Props) {
  const dark = variant === "dark";
  return (
    <div
      className={
        "mb-12 flex flex-col gap-6 md:mb-16 " +
        (align === "center"
          ? "items-center text-center"
          : "items-start md:flex-row md:items-end md:justify-between")
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className={align === "center" ? "max-w-2xl" : "max-w-2xl"}
      >
        {eyebrow && <p className={"eyebrow " + (dark ? "text-amber-brand" : "text-cobalt")}>{eyebrow}</p>}
        <h2 className={"mt-3 text-balance font-serif text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-[56px] " + (dark ? "text-white" : "")}>
          {title}
        </h2>
        {description && (
          <p className={"mt-4 max-w-[56ch] text-pretty " + (dark ? "text-white/60" : "text-midnight/60")}>{description}</p>
        )}
      </motion.div>
      {action}
    </div>
  );
}