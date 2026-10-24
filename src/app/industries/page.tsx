import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { IndustryTiles } from "@/components/sections/IndustryTiles";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { ContactCta } from "@/components/sections/ContactCta";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/content/industries";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Industries",
  description:
    "Systems built for the way each sector runs: manufacturing, agriculture, education, public sector and professional services.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        kicker="Industries"
        title="Systems built for the way each sector runs"
        subtitle="We bring the same engineering discipline to every sector, shaped by what the plant floor, the field, the campus or the department actually needs."
        breadcrumbs={[{ label: "Industries" }]}
        image="/images/industry-manufacturing.jpg"
      />
      <IndustryTiles industries={industries} title="Industries we serve" />
      <section className="x-band x-band--light" aria-labelledby="sectors-title">
        <div className="x-wrap">
          <SectionHeading id="sectors-title" title="Where we help" />
          <FeatureGrid
            items={industries.map((i) => ({
              title: i.title,
              description: i.summary,
              icon: i.icon,
              href: `/industries/${i.slug}`,
            }))}
          />
        </div>
      </section>
      <ContactCta />
    </>
  );
}
