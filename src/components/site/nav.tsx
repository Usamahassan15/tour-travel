import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-[0_1px_0_0_rgba(15,23,42,0.06)]" : "bg-transparent",
      )}
    >
      <div className="container-luxe flex h-16 items-center justify-between md:h-20">
        <a
          href="#home"
          className={cn(
            "font-serif text-2xl tracking-tight md:text-[26px]",
            scrolled ? "text-midnight" : "text-white",
          )}
        >
          Vantaggio
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className={cn(
                "text-[13px] font-medium tracking-tight transition-colors",
                scrolled
                  ? "text-midnight/70 hover:text-midnight"
                  : "text-white/80 hover:text-white",
              )}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#enquiry"
            className="hidden rounded-full bg-amber-brand px-5 py-2.5 text-[12px] font-semibold uppercase tracking-widest text-midnight shadow-sm ring-1 ring-amber-brand/40 transition hover:scale-[1.02] active:scale-95 md:inline-flex"
          >
            Enquire Now
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "grid size-10 place-items-center rounded-full lg:hidden",
              scrolled ? "text-midnight" : "text-white",
            )}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="glass border-t border-midnight/5 lg:hidden">
          <div className="container-luxe flex flex-col gap-1 py-4">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-midnight/80 hover:bg-midnight/5"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#enquiry"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-amber-brand px-5 py-3 text-[12px] font-semibold uppercase tracking-widest text-midnight"
            >
              Enquire Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}