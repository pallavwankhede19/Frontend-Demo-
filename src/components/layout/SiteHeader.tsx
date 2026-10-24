"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";
import { mainNavigation } from "@/content/navigation";
import { siteConfig } from "@/content/site-config";
import { cn } from "@/lib/utils";

/** Sticky white header with logo, mega menu, primary CTA and the mobile hamburger menu. */
export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
        burgerRef.current?.focus();
      }
    }
    const desktop = window.matchMedia("(min-width: 901px)");
    function onChange(event: MediaQueryListEvent) {
      if (event.matches) setMobileOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onChange);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onChange);
    };
  }, [mobileOpen]);

  return (
    <header className={cn("x-header", mobileOpen && "is-open")}>
      <div className="x-wrap x-header__in">
        <Link className="x-logo" href="/" aria-label={`${siteConfig.name} home`}>
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={450}
            height={170}
            priority
            sizes="106px"
          />
        </Link>
        <MegaMenu groups={mainNavigation} />
        <Link className="x-btn x-btn--primary x-header__cta" href="/contact">
          Contact us
        </Link>
        <button
          ref={burgerRef}
          className="x-burger"
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <Icon name={mobileOpen ? "close" : "menu"} />
        </button>
      </div>
      <MobileNav id="mobile-nav" groups={mainNavigation} onNavigate={() => setMobileOpen(false)} />
    </header>
  );
}
