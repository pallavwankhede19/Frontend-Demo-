import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CareersBanner } from "@/components/sections/CareersBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { lifeAtPravahax } from "@/content/careers";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Life at PRAVAHAx",
  description:
    "Ownership from day one, learning built into the work, honest feedback and a sustainable pace. What it is like to work at PRAVAHAx.",
  path: "/careers/life-at-pravahax",
});

export default function LifeAtPravahaxPage() {
  return (
    <>
      <PageHero
        kicker="Careers"
        title="Life at PRAVAHAx"
        subtitle="A small team with range, rigour and clear ownership, where learning is part of the job."
        breadcrumbs={[{ label: "Careers", href: "/careers" }, { label: "Life at PRAVAHAx" }]}
      />
      <section className="x-band" aria-labelledby="culture-title">
        <div className="x-wrap x-cols2">
          <div>
            <SectionHeading id="culture-title" title="How we work together" />
            <div className="x-prose">
              <p className="x-lead">
                We are engineers first. We value people who finish things, explain their thinking
                and leave systems better than they found them.
              </p>
              <p>
                Our principles, useful over impressive, measure the work, teach as we build and keep
                humans accountable, shape how we hire, review and grow just as much as how we ship.
              </p>
            </div>
          </div>
          <div className="x-story__media rounded-brand overflow-hidden">
            <Image
              src="/images/careers-team-whiteboard.jpg"
              alt="PRAVAHAx team planning work together at a whiteboard"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
      <section className="x-band x-band--light" aria-labelledby="values-title">
        <div className="x-wrap">
          <SectionHeading id="values-title" title="What to expect" />
          <FeatureGrid items={lifeAtPravahax} />
        </div>
      </section>
      <CareersBanner />
    </>
  );
}
