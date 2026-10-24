"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, type FocusEvent, type KeyboardEvent } from "react";
import { Icon } from "@/components/ui/Icon";
import type { MegaMenuGroup } from "@/types";
import { cn } from "@/lib/utils";

interface MegaMenuProps {
  groups: MegaMenuGroup[];
}

function groupIsCurrent(group: MegaMenuGroup, pathname: string): boolean {
  const hrefs = [group.href, ...group.columns.flat().map((l) => l.href.split("#")[0] ?? "")];
  return hrefs.some(
    (href) => href !== "/" && (pathname === href || pathname.startsWith(`${href}/`)),
  );
}

/**
 * Desktop mega menu. Panels open on hover (pointer) or on click / Enter / Space (keyboard),
 * expose their state through aria-expanded, close on Escape and when focus leaves them.
 */
export function MegaMenu({ groups }: MegaMenuProps) {
  const pathname = usePathname();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // Set after a deliberate close so a hovered panel hides until the pointer leaves.
  const [suppressedIndex, setSuppressedIndex] = useState<number | null>(null);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function toggle(index: number) {
    const willOpen = openIndex !== index;
    setOpenIndex(willOpen ? index : null);
    setSuppressedIndex(willOpen ? null : index);
  }

  function closeAndFocus(index: number) {
    setOpenIndex(null);
    setSuppressedIndex(index);
    buttonRefs.current[index]?.focus();
  }

  function onKeyDown(event: KeyboardEvent<HTMLLIElement>, index: number) {
    if (event.key === "Escape") {
      event.stopPropagation();
      closeAndFocus(index);
    }
  }

  function onBlur(event: FocusEvent<HTMLLIElement>, index: number) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null) && openIndex === index) {
      setOpenIndex(null);
    }
  }

  return (
    <nav className="x-menu" aria-label="Main">
      <ul>
        {groups.map((group, index) => {
          const isOpen = openIndex === index;
          const panelId = `mega-${index}`;
          return (
            <li
              key={group.label}
              className={cn(
                "x-mi",
                isOpen && "is-open",
                suppressedIndex === index && "is-closed",
                groupIsCurrent(group, pathname) && "is-current",
              )}
              onMouseLeave={() => {
                if (suppressedIndex === index) setSuppressedIndex(null);
              }}
              onKeyDown={(e) => onKeyDown(e, index)}
              onBlur={(e) => onBlur(e, index)}
            >
              <button
                ref={(el) => {
                  buttonRefs.current[index] = el;
                }}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
              >
                {group.label} <Icon name="chevron" />
              </button>
              <div className="x-mega" id={panelId}>
                <div className="x-wrap">
                  <div className="x-mega__lead">
                    <p className="x-mega__heading">
                      <Link href={group.href} onClick={() => closeAndFocus(index)}>
                        {group.label}
                      </Link>
                    </p>
                    <p>{group.description}</p>
                  </div>
                  {group.columns.map((column, ci) => (
                    <ul key={ci}>
                      {column.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            aria-current={pathname === link.href ? "page" : undefined}
                            onClick={(e) => {
                              setOpenIndex(null);
                              setSuppressedIndex(index);
                              e.currentTarget.blur();
                            }}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
