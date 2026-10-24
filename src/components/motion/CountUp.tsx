"use client";

import { useEffect, useRef, useState } from "react";

const DURATION_MS = 1400;
const PATTERN = /^\[([\d.]+)\](.*)$/;

/**
 * Counts the number inside a "[25]+" style placeholder up from zero the first time it
 * is half in view, keeping the brackets and any suffix. Renders the final value on the
 * server, exposes only the final value to assistive tech, and stays still under
 * prefers-reduced-motion.
 */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    const match = PATTERN.exec(value);
    if (!el || !match || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const raw = match[1] ?? "0";
    const rest = match[2] ?? "";
    const end = parseFloat(raw);
    const decimals = (raw.split(".")[1] ?? "").length;
    let frame = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        let start: number | null = null;
        const step = (t: number) => {
          start ??= t;
          const k = Math.min((t - start) / DURATION_MS, 1);
          const v = end * (1 - Math.pow(1 - k, 3));
          setDisplay(`[${v.toFixed(decimals)}]${rest}`);
          if (k < 1) frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <>
      <span ref={ref} aria-hidden="true">
        {display}
      </span>
      <span className="x-sr">{value}</span>
    </>
  );
}
