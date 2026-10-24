"use client";

import { useEffect, useRef, type ReactNode } from "react";

const MAX_SHIFT_PX = 30;

/**
 * Holds the hero photo. CSS gives it a slow 12s zoom; this adds a scroll parallax of
 * at most 30px. Both are skipped under prefers-reduced-motion.
 */
export function HeroMedia({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const hero = el?.parentElement;
    if (!el || !hero) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    function update() {
      frame = 0;
      if (!el || !hero) return;
      const height = hero.offsetHeight || 1;
      const y = Math.min(window.scrollY, height);
      el.style.setProperty("--py", `${((y / height) * MAX_SHIFT_PX).toFixed(1)}px`);
    }
    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="x-hero__media" ref={ref}>
      {children}
    </div>
  );
}
