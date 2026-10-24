"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/Icon";
import type { MegaMenuGroup } from "@/types";

interface MobileNavProps {
  id: string;
  groups: MegaMenuGroup[];
  onNavigate: () => void;
}

/** Accordion navigation shown below 900px when the hamburger is open. */
export function MobileNav({ id, groups, onNavigate }: MobileNavProps) {
  const pathname = usePathname();
  return (
    <nav className="x-mobile" id={id} aria-label="Mobile">
      <div className="x-wrap">
        {groups.map((group) => (
          <details key={group.label}>
            <summary>
              {group.label} <Icon name="chevron" />
            </summary>
            <Link
              href={group.href}
              onClick={onNavigate}
              aria-current={pathname === group.href ? "page" : undefined}
            >
              {group.label} overview
            </Link>
            {group.columns.flat().map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onNavigate}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </details>
        ))}
        <Link className="x-btn x-btn--primary" href="/contact" onClick={onNavigate}>
          Contact us <Icon name="arrow" />
        </Link>
      </div>
    </nav>
  );
}
