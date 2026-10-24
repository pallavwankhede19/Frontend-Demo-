import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { ContactCta } from "@/components/sections/ContactCta";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { caseStudies } from "@/content/case-studies";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Case studies",
  description:
    "Client stories from PRAVAHAx: maintenance intelligence for Mahindra & Mahindra, a connected platform for eAGROCARE, and digital and SEO architecture for Sujal Industries.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        kicker="Insights"
        title="Client stories"
        subtitle="Systems our clients rely on every day, and what changed once they went live."
        breadcrumbs={[{ label: "Insights", href: "/insights" }, { label: "Case studies" }]}
      />
      <section className="x-band x-band--light" aria-labelledby="all-stories-title">
        <div className="x-wrap">
          <SectionHeading id="all-stories-title" title="All case studies" />
          <div className="x-stories2 x-stories2--top">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
