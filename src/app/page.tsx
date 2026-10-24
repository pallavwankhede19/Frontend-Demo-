import type { Metadata } from "next";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { KeyMetrics } from "@/components/sections/KeyMetrics";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { IndustryTiles } from "@/components/sections/IndustryTiles";
import { ClientStories } from "@/components/sections/ClientStories";
import { ProductSpotlight } from "@/components/sections/ProductSpotlight";
import { InsightsGrid } from "@/components/sections/InsightsGrid";
import { NewsroomList } from "@/components/sections/NewsroomList";
import { CareersBanner } from "@/components/sections/CareersBanner";
import { LeadershipGrid } from "@/components/sections/LeadershipGrid";
import { ContactCta } from "@/components/sections/ContactCta";
import { caseStudies } from "@/content/case-studies";
import { industries } from "@/content/industries";
import { insights } from "@/content/insights";
import { leadership } from "@/content/leadership";
import { keyMetrics, keyMetricsNote } from "@/content/metrics";
import { news } from "@/content/news";
import { portalOneHighlights } from "@/content/portal-one";
import { services } from "@/content/services";
import { siteConfig } from "@/content/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    title: siteConfig.tagline,
    description: siteConfig.description,
    path: "/",
    image: "/images/hero-engineering-team.jpg",
  }),
  title: { absolute: `${siteConfig.fullName} | ${siteConfig.tagline}` },
};

export default function HomePage() {
  const [featured, ...otherStories] = caseStudies;
  return (
    <>
      <HeroBanner
        kicker={siteConfig.fullName}
        title={siteConfig.tagline}
        subtitle="Software, AI and connected systems that run manufacturing plants, farms, campuses and operations. Designed, built and supported by one accountable team."
        image="/images/hero-engineering-team.jpg"
        imageAlt="PRAVAHAx engineers working in a glass-walled office at dusk"
        primary={{ label: "Explore our services", href: "/services" }}
        secondary={{ label: "Talk to an expert", href: "/contact" }}
        featured={[
          {
            kicker: "Case study",
            label: "Maintenance intelligence at Mahindra & Mahindra",
            href: "/case-studies/mahindra-maintenance-intelligence",
          },
          {
            kicker: "Product",
            label: "Portal One for IT and services companies",
            href: "/products/portal-one",
          },
          {
            kicker: "Insight",
            label: "Shipping AI features that survive real users",
            href: "/insights/shipping-ai-features-that-survive-real-users",
          },
        ]}
      />
      <KeyMetrics metrics={keyMetrics} note={keyMetricsNote} />
      <ServicesGrid services={services} />
      <IndustryTiles industries={industries} />
      {featured ? <ClientStories featured={featured} others={otherStories} /> : null}
      <ProductSpotlight
        label="Product"
        title="Portal One"
        line="The operations workspace for IT and services companies."
        points={portalOneHighlights}
        image="/images/product-portal-one.jpg"
        imageAlt="Laptop showing the Portal One dashboard"
        primary={{ label: "Request a demo", href: "/products/portal-one#request-demo" }}
        secondary={{ label: "Product overview", href: "/products/portal-one" }}
      />
      <InsightsGrid insights={insights} />
      <NewsroomList items={news} />
      <CareersBanner />
      <LeadershipGrid leaders={leadership} />
      <ContactCta />
    </>
  );
}
