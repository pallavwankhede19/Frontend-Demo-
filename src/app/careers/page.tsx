import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { StepsList } from "@/components/sections/StepsList";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CareersBanner } from "@/components/sections/CareersBanner";
import { ContactCta } from "@/components/sections/ContactCta";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button, ButtonGroup } from "@/components/ui/Button";
import { hiringFlow, openAreas } from "@/content/careers";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Careers",
  description:
    "Do the work that matters. Join a small team building from India for the world in applied AI engineering, product engineering, and research and education.",
  path: "/careers",
  image: "/images/careers-team-whiteboard.jpg",
});

export default function CareersPage() {
  return (
    <>
      <PageHero
        kicker="Careers"
        title="Do the work that matters"
        subtitle="Join a small team building from India for the world, with range, rigour and clear ownership."
        breadcrumbs={[{ label: "Careers" }]}
        image="/images/careers-team-whiteboard.jpg"
      >
        <ButtonGroup>
          <Button variant="white" href="/contact" arrow>
            Signal your interest
          </Button>
          <Button variant="ghost" href="/careers/internships">
            Internships
          </Button>
        </ButtonGroup>
      </PageHero>

      <section className="x-band" id="hiring-flow" aria-labelledby="flow-title">
        <div className="x-wrap">
          <SectionHeading
            id="flow-title"
            title="A human hiring conversation"
            intro="Four steps, no trick questions. You always know where you stand."
          />
          <StepsList steps={hiringFlow} />
        </div>
      </section>

      <section className="x-band x-band--light" id="open-areas" aria-labelledby="areas-title">
        <div className="x-wrap">
          <SectionHeading
            id="areas-title"
            title="Open areas of work"
            intro="Make your own role. Tell us which kind of work you want to own."
          />
          <FeatureGrid items={openAreas.map((a) => ({ ...a, href: "/contact" }))} />
        </div>
      </section>

      <CareersBanner
        id="internships-band"
        title="Starting out? Intern with us."
        text="2, 3 and 6-month internships across AI/ML, software, IoT, cloud, cybersecurity and enterprise solutions."
        primary={{ label: "Internship tracks", href: "/careers/internships" }}
        secondary={{ label: "Life at PRAVAHAx", href: "/careers/life-at-pravahax" }}
      />
      <ContactCta
        title="Start with a note about the work you want to own"
        text="Tell us what you build and what you want to learn next. We read every message."
        buttonLabel="Open a careers inquiry"
      />
    </>
  );
}
