import type { ReactNode } from "react";
import { PageHero } from "./PageHero";

interface LegalPageProps {
  title: string;
  summary: string;
  updated: string;
  children: ReactNode;
}

/** Shared layout for policy pages: navy hero, then a single readable prose column. */
export function LegalPage({ title, summary, updated, children }: LegalPageProps) {
  return (
    <>
      <PageHero title={title} subtitle={summary} breadcrumbs={[{ label: title }]}>
        <p className="x-meta">Last updated: {updated}</p>
      </PageHero>
      <section className="x-band" aria-label={`${title} details`}>
        <div className="x-wrap">
          <div className="x-prose">{children}</div>
        </div>
      </section>
    </>
  );
}
