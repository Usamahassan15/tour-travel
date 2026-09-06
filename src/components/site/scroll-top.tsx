import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const on = () => setShow(window.scrollY > 700);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-24 right-6 z-40 grid size-11 place-items-center rounded-full bg-midnight text-white shadow-luxe transition hover:scale-105 sm:bottom-6 sm:right-[13.5rem]"
    >
      <ArrowUp className="size-4" />
    </button>
  );
}
