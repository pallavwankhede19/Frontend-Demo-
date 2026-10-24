import Link from "next/link";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
}

/** Breadcrumb trail (Home is added automatically) with BreadcrumbList structured data. */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const trail: Crumb[] = [{ label: "Home", href: "/" }, ...items];
  return (
    <nav className="x-crumbs" aria-label="Breadcrumb">
      <ol>
        {trail.map((crumb, index) => {
          const isLast = index === trail.length - 1;
          return (
            <li key={`${crumb.label}-${index}`}>
              {crumb.href && !isLast ? (
                <Link href={crumb.href}>{crumb.label}</Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined}>{crumb.label}</span>
              )}
            </li>
          );
        })}
      </ol>
      <JsonLd data={breadcrumbJsonLd(trail)} />
    </nav>
  );
}
