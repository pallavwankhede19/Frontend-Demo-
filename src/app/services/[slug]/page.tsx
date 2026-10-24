import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { StepsList } from "@/components/sections/StepsList";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { FaqList } from "@/components/sections/FaqList";
import { ContactCta } from "@/components/sections/ContactCta";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button, ButtonGroup, TextLink } from "@/components/ui/Button";
import { caseStudies } from "@/content/case-studies";
import { industries } from "@/content/industries";
import { getService, services } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import { pickBySlug } from "@/lib/utils";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = pickBySlug(caseStudies, service.relatedCaseStudies);
  const relatedIndustries = pickBySlug(industries, service.industries);

  return (
    <>
      <PageHero
        kicker="What we do"
        title={service.title}
        subtitle={service.description}
        breadcrumbs={[{ label: "What we do", href: "/services" }, { label: service.title }]}
      >
        <ButtonGroup>
          <Button variant="white" href="/contact" arrow>
            Discuss your project
          </Button>
          <Button variant="ghost" href="#capabilities">
            Our capabilities
          </Button>
        </ButtonGroup>
      </PageHero>

      <section className="x-band" aria-labelledby="overview-title">
        <div className="x-wrap x-cols2">
          <div>
            <SectionHeading id="overview-title" title="Overview" />
            <div className="x-prose">
              {service.overview.map((paragraph, index) => (
                <p key={index} className={index === 0 ? "x-lead" : undefined}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <aside className="x-aside" aria-labelledby="industries-aside">
            <h2 id="industries-aside">Industries we apply this in</h2>
            <ul>
              {relatedIndustries.map((industry) => (
                <li key={industry.slug}>
                  <Link href={`/industries/${industry.slug}`}>{industry.title} →</Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section
        className="x-band x-band--light"
        id="capabilities"
        aria-labelledby="capabilities-title"
      >
        <div className="x-wrap">
          <SectionHeading id="capabilities-title" title="Capabilities" />
          <FeatureGrid items={service.capabilities} />
        </div>
      </section>

      <section className="x-band" aria-labelledby="approach-title">
        <div className="x-wrap">
          <SectionHeading
            id="approach-title"
            title="Our delivery approach"
            intro="Short cycles, real users and a clear owner at every step."
          />
          <StepsList steps={service.approach} />
        </div>
      </section>

      {related.length > 0 ? (
        <section className="x-band x-band--light" aria-labelledby="related-title">
          <div className="x-wrap">
            <SectionHeading
              id="related-title"
              title="Related client stories"
              action={<TextLink href="/case-studies">View all case studies</TextLink>}
            />
            <div className="x-stories2 x-stories2--top">
              {related.map((study) => (
                <CaseStudyCard key={study.slug} study={study} showQuote={false} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="x-band" aria-labelledby="faq-title">
        <div className="x-wrap">
          <SectionHeading id="faq-title" title="Frequently asked questions" />
          <FaqList faqs={service.faqs} />
        </div>
      </section>

      <ContactCta title={`Talk to our ${service.title} team`} />
    </>
  );
}
