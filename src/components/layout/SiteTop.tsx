"use client";

import { usePathname } from "next/navigation";
import { useSyncExternalStore, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD_PX = 40;

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

/**
 * Wraps the utility bar and header. On the home page it floats over the photo hero,
 * clear at the top and frosted white glass once the page scrolls past 40px (or when
 * search or the mobile menu is open). Inner pages get the frosted state from the start.
 * The clear state only applies once the inline `x-js` flag is set, so without
 * JavaScript the header is always the readable frosted version.
 */
export function SiteTop({ children }: { children: ReactNode }) {
  const overlay = usePathname() === "/";
  const scrolled = useSyncExternalStore(
    subscribe,
    () => window.scrollY > SCROLL_THRESHOLD_PX,
    () => false,
  );
  return (
    <div className={cn("x-top", overlay && "x-top--overlay", overlay && !scrolled && "is-clear")}>
      {children}
    </div>
  );
}
