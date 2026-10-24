import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { LeadershipGrid } from "@/components/sections/LeadershipGrid";
import { CareersBanner } from "@/components/sections/CareersBanner";
import { ContactCta } from "@/components/sections/ContactCta";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { leadership } from "@/content/leadership";
import { services } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About us",
  description:
    "PRAVAHAx is a software and technology engineering company from India. PRAVAHA means current; the lowercase x marks where effort, capability and intent meet.",
  path: "/about",
});

const principles = [
  {
    title: "Useful over impressive",
    description:
      "We prefer systems that quietly keep working over demos that win a room and fail a week later.",
  },
  {
    title: "Measure the work",
    description: "If a system cannot be evaluated, improved and defended, it is not ready.",
  },
  {
    title: "Teach as we build",
    description:
      "Research and talent work stay connected so learning compounds instead of getting trapped.",
  },
  {
    title: "Keep humans accountable",
    description:
      "AI can amplify judgment, but responsibility still needs a person who owns the outcome.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About us"
        title="One accountable engineering team"
        subtitle="A software and technology engineering company from India, shaped around dependable systems, clear thinking and useful execution."
        breadcrumbs={[{ label: "About us" }]}
        image="/images/hero-engineering-team.jpg"
      />

      <section className="x-band" id="our-story" aria-labelledby="story-title">
        <div className="x-wrap x-cols2">
          <div>
            <SectionHeading id="story-title" title="Our story" />
          </div>
          <div className="x-prose">
            <p className="x-lead">
              PRAVAHAx is a software and technology engineering company from India, built for the
              world. We lead with work that has to hold up, not with labels.
            </p>
            <h3>The name</h3>
            <p>
              <strong>PRAVAHA</strong> means current: steady, directed movement that carries things
              forward. The lowercase <strong>x</strong> marks the point where effort, capability and
              intent meet.
            </p>
            <h3>What we do</h3>
            <p>
              We build software, research threads and practical learning pathways for teams that
              need useful outcomes, across{" "}
              {services
                .map((s) => s.title)
                .join(", ")
                .replace(/, ([^,]*)$/, " and $1")}
              .
            </p>
          </div>
        </div>
      </section>

      <section className="x-band x-band--light" id="principles" aria-labelledby="principles-title">
        <div className="x-wrap">
          <SectionHeading
            id="principles-title"
            title="How we work"
            intro="Four principles guide every system we build."
          />
          <FeatureGrid items={principles} columns={2} />
        </div>
      </section>

      <LeadershipGrid leaders={leadership} />
      <CareersBanner />
      <ContactCta />
    </>
  );
}
