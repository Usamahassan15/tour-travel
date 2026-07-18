import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

interface CounterProps {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
  formatter?: (n: number) => string;
}

export function Counter({ to, suffix = "", duration = 1600, className, decimals = 0, formatter }: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  const display = formatter
    ? formatter(decimals > 0 ? Number(n.toFixed(decimals)) : Math.round(n))
    : decimals > 0
      ? n.toFixed(decimals)
      : Math.round(n).toLocaleString();

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}