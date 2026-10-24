import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { InsightCard } from "@/components/sections/InsightsGrid";
import { ContactCta } from "@/components/sections/ContactCta";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/Button";
import { insights } from "@/content/insights";
import { buildMetadata } from "@/lib/seo";
import type { InsightType } from "@/types";

export const metadata: Metadata = buildMetadata({
  title: "Insights",
  description:
    "Articles, whitepapers and research from PRAVAHAx on shipping AI, multi-tenant SaaS and edge inference: what we learn shipping real systems.",
  path: "/insights",
});

const groups: { id: string; title: string; type: InsightType }[] = [
  { id: "articles", title: "Articles", type: "Article" },
  { id: "whitepapers", title: "Whitepapers", type: "Whitepaper" },
  { id: "research", title: "Research", type: "Research" },
];

export default function InsightsPage() {
  return (
    <>
      <PageHero
        kicker="Insights"
        title="What we learn shipping real systems"
        subtitle="Practical writing from our engineers and researchers on AI, software architecture and connected systems."
        breadcrumbs={[{ label: "Insights" }]}
      />
      <section className="x-band" aria-labelledby="latest-title">
        <div className="x-wrap">
          <SectionHeading
            id="latest-title"
            title="Latest"
            action={<TextLink href="/case-studies">Client stories</TextLink>}
          />
          <div className="x-grid3">
            {insights.map((insight) => (
              <InsightCard key={insight.slug} insight={insight} showSummary />
            ))}
          </div>
        </div>
      </section>
      {groups.map((group, index) => {
        const items = insights.filter((i) => i.type === group.type);
        return (
          <section
            key={group.id}
            id={group.id}
            className={
              index % 2 === 0 ? "x-band x-band--light x-band--tight" : "x-band x-band--tight"
            }
            aria-labelledby={`${group.id}-title`}
          >
            <div className="x-wrap">
              <SectionHeading id={`${group.id}-title`} title={group.title} />
              <div className="x-grid3">
                {items.map((insight) => (
                  <InsightCard key={insight.slug} insight={insight} showSummary />
                ))}
              </div>
            </div>
          </section>
        );
      })}
      <ContactCta />
    </>
  );
}
