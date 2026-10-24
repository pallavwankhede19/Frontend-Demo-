"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Cards and panels that reveal on scroll on every page, plus anything wrapped in <Reveal>. */
const SELECTORS = [
  "[data-reveal]",
  ".x-svc",
  ".x-ind",
  ".x-story",
  ".x-sc",
  ".x-post",
  ".x-news li",
  ".x-person",
  ".x-steps li",
  ".x-release",
  ".x-aside",
  ".x-faq",
  ".x-split__copy",
  ".x-panel",
].join(", ");

const STAGGER_MS = 70;
const MAX_STAGGER_STEPS = 6;

/**
 * Scroll reveal for the whole site, driven by one IntersectionObserver. Re-scans on
 * every route change. Elements already on screen when the page loads are left alone
 * so nothing flashes; only elements below the fold are hidden and then faded in.
 */
export function RevealRoot() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timers = new Set<number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          observer.unobserve(el);
          el.classList.add("is-in");
          const delay = parseInt(el.style.getPropertyValue("--d"), 10) || 0;
          const timer = window.setTimeout(() => {
            el.classList.remove("x-reveal", "is-in");
            el.style.removeProperty("--d");
            timers.delete(timer);
          }, 700 + delay);
          timers.add(timer);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    const fold = window.innerHeight * 0.92;
    const counts = new Map<Element, number>();
    document.querySelectorAll<HTMLElement>(SELECTORS).forEach((el) => {
      // A revealed ancestor already animates this element.
      if (el.parentElement?.closest(SELECTORS)) return;
      if (el.getBoundingClientRect().top < fold) return;
      const parent = el.parentElement?.matches("li")
        ? el.parentElement.parentElement
        : el.parentElement;
      const index = parent ? (counts.get(parent) ?? 0) : 0;
      if (parent) counts.set(parent, index + 1);
      const extra = parseInt(el.dataset.reveal ?? "", 10) || 0;
      const delay = Math.min(index, MAX_STAGGER_STEPS) * STAGGER_MS + extra;
      el.classList.add("x-reveal");
      if (delay) el.style.setProperty("--d", `${delay}ms`);
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
      // Anything still hidden when the route changes is shown straight away.
      document.querySelectorAll<HTMLElement>(".x-reveal").forEach((el) => {
        el.classList.remove("x-reveal", "is-in");
        el.style.removeProperty("--d");
      });
    };
  }, [pathname]);

  return null;
}
