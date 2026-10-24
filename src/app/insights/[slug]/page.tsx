import type { Metadata } from "next";
import { Fragment } from "react";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { InsightCard } from "@/components/sections/InsightsGrid";
import { ContactCta } from "@/components/sections/ContactCta";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/ui/JsonLd";
import { getInsight, insights } from "@/content/insights";
import { articleJsonLd, buildMetadata } from "@/lib/seo";

interface InsightPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};
  return buildMetadata({
    title: insight.title,
    description: insight.summary,
    path: `/insights/${insight.slug}`,
    type: "article",
    publishedTime: `${insight.date}-01`,
  });
}

export default async function InsightPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  const more = insights.filter((i) => i.slug !== insight.slug);

  return (
    <>
      <PageHero
        kicker={insight.type}
        title={insight.title}
        subtitle={insight.summary}
        breadcrumbs={[{ label: "Insights", href: "/insights" }, { label: insight.title }]}
      >
        <p className="x-meta">
          <time dateTime={insight.date}>{insight.dateLabel}</time>
          <span>{insight.author}</span>
          <span>{insight.readingTime}</span>
        </p>
      </PageHero>
      <article className="x-band" aria-labelledby="page-title">
        <div className="x-wrap">
          <div className="x-prose">
            {insight.body.map((block, index) => (
              <Fragment key={index}>
                {block.heading ? <h2>{block.heading}</h2> : null}
                {block.paragraphs.map((paragraph, pi) => (
                  <p key={pi} className={index === 0 && pi === 0 ? "x-lead" : undefined}>
                    {paragraph}
                  </p>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </article>
      <section className="x-band x-band--light" aria-labelledby="more-insights-title">
        <div className="x-wrap">
          <SectionHeading id="more-insights-title" title="More insights" />
          <div className="x-grid2">
            {more.map((item) => (
              <InsightCard key={item.slug} insight={item} />
            ))}
          </div>
        </div>
      </section>
      <ContactCta />
      <JsonLd
        data={articleJsonLd({
          title: insight.title,
          description: insight.summary,
          path: `/insights/${insight.slug}`,
          date: `${insight.date}-01`,
          author: insight.author,
        })}
      />
    </>
  );
}
