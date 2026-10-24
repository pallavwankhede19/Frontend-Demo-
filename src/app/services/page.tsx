import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { StepsList } from "@/components/sections/StepsList";
import { IndustryTiles } from "@/components/sections/IndustryTiles";
import { ContactCta } from "@/components/sections/ContactCta";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button, ButtonGroup } from "@/components/ui/Button";
import { industries } from "@/content/industries";
import { services } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Software engineering, AI and automation, hardware and IoT, enterprise solutions, cloud, data and security, and consultancy from PRAVAHAx Systems Engineering.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="What we do"
        title="End-to-end engineering, from strategy to support"
        subtitle="Six practices, one accountable team. We design, build and run the software, AI and connected systems that keep Indian enterprises moving."
        breadcrumbs={[{ label: "What we do" }]}
      >
        <ButtonGroup>
          <Button variant="white" href="/contact" arrow>
            Talk to an expert
          </Button>
          <Button variant="ghost" href="/case-studies">
            See client stories
          </Button>
        </ButtonGroup>
      </PageHero>
      <ServicesGrid
        services={services}
        title="Our services"
        intro="Choose a practice to see capabilities, our delivery approach and related work."
      />
      <section className="x-band" aria-labelledby="how-title">
        <div className="x-wrap">
          <SectionHeading
            id="how-title"
            title="How we work"
            intro="Every engagement follows the same disciplined rhythm, whatever the technology."
          />
          <StepsList
            steps={[
              {
                title: "Discover",
                description:
                  "Understand users, workflows, data and constraints before writing code.",
              },
              {
                title: "Design",
                description:
                  "Choose an architecture we can defend and test the riskiest parts first.",
              },
              {
                title: "Build",
                description: "Ship working increments to real users with measurable outcomes.",
              },
              {
                title: "Run",
                description:
                  "Monitor, support and improve with clear service levels and ownership.",
              },
            ]}
          />
        </div>
      </section>
      <IndustryTiles industries={industries} light />
      <ContactCta />
    </>
  );
}
