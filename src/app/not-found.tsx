import type { Metadata } from "next";
import Link from "next/link";
import { Button, ButtonGroup } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const suggestions = [
  { label: "What we do", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Portal One", href: "/products/portal-one" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Careers", href: "/careers" },
];

export default function NotFound() {
  return (
    <section className="x-band" aria-labelledby="nf-title">
      <div className="x-wrap x-404">
        <b aria-hidden="true">404</b>
        <h1 id="nf-title" className="x-title mt-8">
          We couldn&rsquo;t find that page
        </h1>
        <p className="x-intro">
          The page may have moved, or the address may be mistyped. Try one of these instead.
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-6">
          {suggestions.map((s) => (
            <li key={s.href}>
              <Link className="x-link" href={s.href}>
                {s.label} →
              </Link>
            </li>
          ))}
        </ul>
        <ButtonGroup>
          <Button href="/" arrow>
            Back to home
          </Button>
          <Button variant="secondary" href="/contact">
            Contact us
          </Button>
        </ButtonGroup>
      </div>
    </section>
  );
}
