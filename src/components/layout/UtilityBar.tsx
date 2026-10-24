"use client";

import Link from "next/link";
import { useId, useRef, useState, type FormEvent } from "react";
import { Icon } from "@/components/ui/Icon";
import { utilityLinks } from "@/content/navigation";
import { searchSite, type SearchEntry } from "@/lib/search";

interface UtilityBarProps {
  /** Prebuilt on the server so the content modules stay out of the client bundle. */
  searchIndex: SearchEntry[];
}

/** Utility bar with secondary links and the site search panel. */
export function UtilityBar({ searchIndex }: UtilityBarProps) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [results, setResults] = useState<SearchEntry[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();
  const inputId = useId();

  function toggle() {
    const next = !open;
    setOpen(next);
    if (next) {
      requestAnimationFrame(() => inputRef.current?.focus());
    } else {
      setMessage("");
      setResults([]);
    }
  }

  function reset() {
    setOpen(false);
    setMessage("");
    setResults([]);
  }

  function close() {
    reset();
    buttonRef.current?.focus();
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = inputRef.current?.value.trim() ?? "";
    if (!query) {
      setResults([]);
      setMessage("Type a word to search, such as AI, Portal One or careers.");
      return;
    }
    const found = searchSite(searchIndex, query);
    setResults(found);
    setMessage(
      found.length > 0
        ? `${found.length} result${found.length === 1 ? "" : "s"} for \u201c${query}\u201d.`
        : `No results for \u201c${query}\u201d. Try AI, IoT, Portal One or careers.`,
    );
  }

  return (
    <div className="x-util">
      <div className="x-wrap">
        <p className="x-util__lang">India | English</p>
        <nav className="x-util__links" aria-label="Utility">
          {utilityLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <button
            ref={buttonRef}
            className="x-util__search"
            type="button"
            aria-label={open ? "Close search" : "Search"}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={toggle}
          >
            <Icon name={open ? "close" : "search"} />
          </button>
        </nav>
      </div>
      <div
        className={open ? "x-search is-open" : "x-search"}
        id={panelId}
        onKeyDown={(e) => {
          if (e.key === "Escape") close();
        }}
      >
        <form className="x-wrap" role="search" onSubmit={onSubmit}>
          <label className="x-sr" htmlFor={inputId}>
            Search PRAVAHAx
          </label>
          <input
            ref={inputRef}
            id={inputId}
            type="search"
            name="q"
            autoComplete="off"
            placeholder="Search services, industries, insights"
          />
          <button className="x-btn x-btn--primary" type="submit">
            Search
          </button>
        </form>
        <p className="x-wrap x-search__msg" role="status" aria-live="polite">
          {message}
        </p>
        {results.length > 0 ? (
          <ul className="x-wrap x-search__results" aria-label="Search results">
            {results.map((r) => (
              <li key={r.href}>
                <Link href={r.href} onClick={reset}>
                  <small>{r.section}</small>
                  <span>{r.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
