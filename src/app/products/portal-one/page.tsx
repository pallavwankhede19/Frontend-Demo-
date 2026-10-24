import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ProductSpotlight } from "@/components/sections/ProductSpotlight";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { StepsList } from "@/components/sections/StepsList";
import { ContactForm } from "@/components/sections/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button, ButtonGroup } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { Icon } from "@/components/ui/Icon";
import {
  portalOneFeatures,
  portalOneHighlights,
  portalOneModules,
  portalOneSecurity,
  portalOneSteps,
} from "@/content/portal-one";
import { siteConfig } from "@/content/site-config";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

const description =
  "Portal One is the operations workspace for IT and services companies: attendance with geo-check, leave, timesheets and utilisation, projects and people, with SSO, multi-tenancy, RBAC and audit logs.";

export const metadata: Metadata = buildMetadata({
  title: "Portal One: the operations workspace for IT and services companies",
  description,
  path: "/products/portal-one",
  image: "/images/product-portal-one.jpg",
});

export default function PortalOnePage() {
  return (
    <>
      <PageHero
        kicker="Product"
        title="Portal One"
        subtitle="The operations workspace for IT and services companies. Attendance, leave, timesheets, projects and people in one secure, multi-tenant platform."
        breadcrumbs={[{ label: "Products", href: "/products" }, { label: "Portal One" }]}
      >
        <ButtonGroup>
          <Button variant="white" href="#request-demo" arrow>
            Request a demo
          </Button>
          <Button variant="ghost" href="#modules">
            See the modules
          </Button>
        </ButtonGroup>
      </PageHero>

      <ProductSpotlight
        id="overview"
        label="Why Portal One"
        title="Run your services business from one place"
        line="Replace scattered attendance apps, leave spreadsheets and timesheet tools with one workspace your people and your leadership both trust."
        points={portalOneHighlights}
        image="/images/product-portal-one.jpg"
        imageAlt="Laptop showing the Portal One dashboard"
        primary={{ label: "Request a demo", href: "#request-demo" }}
      />

      <section className="x-band x-band--light" id="features" aria-labelledby="features-title">
        <div className="x-wrap">
          <SectionHeading id="features-title" title="Features" />
          <FeatureGrid items={portalOneFeatures} columns={2} />
        </div>
      </section>

      <section className="x-band" id="modules" aria-labelledby="modules-title">
        <div className="x-wrap">
          <SectionHeading
            id="modules-title"
            title="Modules"
            intro="Start with the modules you need and add more as you grow."
          />
          <FeatureGrid items={portalOneModules} />
        </div>
      </section>

      <section className="x-band x-band--light" id="how-it-works" aria-labelledby="how-title">
        <div className="x-wrap">
          <SectionHeading id="how-title" title="How it works" />
          <StepsList steps={portalOneSteps} />
        </div>
      </section>

      <section className="x-band" id="security" aria-labelledby="security-title">
        <div className="x-wrap">
          <SectionHeading
            id="security-title"
            title="Security"
            intro="Designed for companies whose own clients ask hard questions about data."
          />
          <FeatureGrid items={portalOneSecurity} />
        </div>
      </section>

      <section className="x-band x-band--light" id="request-demo" aria-labelledby="demo-title">
        <div className="x-wrap x-cols2">
          <div>
            <SectionHeading
              id="demo-title"
              title="Request a demo"
              intro="Tell us about your team and we will show you Portal One configured for the way you work."
            />
            <ul className="x-checks">
              <li>
                <Icon name="check" />
                30-minute guided walkthrough
              </li>
              <li>
                <Icon name="check" />
                Configured for your policies and structure
              </li>
              <li>
                <Icon name="check" />
                Pricing and rollout plan for your team size
              </li>
            </ul>
          </div>
          <div className="x-svc x-svc--static">
            <ContactForm topics={["demo"]} submitLabel="Request a demo" />
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Portal One",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description,
          url: absoluteUrl("/products/portal-one"),
          publisher: { "@type": "Organization", name: siteConfig.fullName },
        }}
      />
    </>
  );
}
