import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { StepsList } from "@/components/sections/StepsList";
import { ContactCta } from "@/components/sections/ContactCta";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button, ButtonGroup } from "@/components/ui/Button";
import { internshipBenefits, internshipDurations, internshipTracks } from "@/content/careers";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Engineering internships",
  description:
    "Hands-on 2, 3 and 6-month engineering internships at PRAVAHAx across AI/ML, software and systems, hardware and IoT, cloud and DevOps, cybersecurity and enterprise solutions.",
  path: "/careers/internships",
  image: "/images/careers-team-whiteboard.jpg",
});

export default function InternshipsPage() {
  return (
    <>
      <PageHero
        kicker="Careers"
        title="Gain real engineering experience with intent"
        subtitle="Hands-on internships on production code, research threads and real client systems, with a certificate and a path to placement."
        breadcrumbs={[{ label: "Careers", href: "/careers" }, { label: "Internships" }]}
        image="/images/careers-team-whiteboard.jpg"
      >
        <ButtonGroup>
          <Button variant="white" href="/contact" arrow>
            Apply for an internship
          </Button>
          <Button variant="ghost" href="#tracks">
            Explore tracks
          </Button>
        </ButtonGroup>
      </PageHero>

      <section className="x-band" aria-labelledby="why-title">
        <div className="x-wrap">
          <SectionHeading
            id="why-title"
            title="Why intern with us"
            intro="Built for learners who want to build real work."
          />
          <FeatureGrid items={internshipBenefits} />
        </div>
      </section>

      <section className="x-band x-band--light" id="tracks" aria-labelledby="tracks-title">
        <div className="x-wrap">
          <SectionHeading
            id="tracks-title"
            title="Internship tracks"
            intro="Choose the track that matches your engineering goals. Every track is grounded in practical implementation."
          />
          <FeatureGrid items={internshipTracks} />
        </div>
      </section>

      <section className="x-band" id="durations" aria-labelledby="durations-title">
        <div className="x-wrap">
          <SectionHeading id="durations-title" title="Programme durations" />
          <FeatureGrid items={internshipDurations} />
        </div>
      </section>

      <section className="x-band x-band--light" aria-labelledby="path-title">
        <div className="x-wrap">
          <SectionHeading
            id="path-title"
            title="Certificate and placement path"
            intro="Strong interns leave with evidence of real work, and the best receive offers."
          />
          <StepsList
            steps={[
              {
                title: "Apply",
                description: "Choose a track and duration and tell us what you have built so far.",
              },
              {
                title: "Build",
                description: "Work on a real project with a named mentor and weekly reviews.",
              },
              {
                title: "Certify",
                description: "Receive a formal certificate and a project recommendation.",
              },
              {
                title: "Join",
                description: "Outstanding interns are considered directly for full-time roles.",
              },
            ]}
          />
        </div>
      </section>

      <ContactCta
        title="Applications for 2027 are open"
        text="Tell us your preferred track, duration and dates. We reply to every application."
        buttonLabel="Apply now"
      />
    </>
  );
}
