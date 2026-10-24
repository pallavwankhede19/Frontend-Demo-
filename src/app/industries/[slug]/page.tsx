import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { ContactCta } from "@/components/sections/ContactCta";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button, ButtonGroup, TextLink } from "@/components/ui/Button";
import { caseStudies } from "@/content/case-studies";
import { getIndustry, industries } from "@/content/industries";
import { services } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import { pickBySlug } from "@/lib/utils";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return buildMetadata({
    title: `${industry.title} industry solutions`,
    description: industry.description,
    path: `/industries/${industry.slug}`,
    image: industry.image,
  });
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const relevantServices = pickBySlug(services, industry.services);
  const stories = pickBySlug(caseStudies, industry.caseStudies);

  return (
    <>
      <PageHero
        kicker="Industries"
        title={industry.title}
        subtitle={industry.description}
        breadcrumbs={[{ label: "Industries", href: "/industries" }, { label: industry.title }]}
        image={industry.image}
        imageAlt={industry.imageAlt}
      >
        <ButtonGroup>
          <Button variant="white" href="/contact" arrow>
            Talk to an expert
          </Button>
        </ButtonGroup>
      </PageHero>

      <section className="x-band" aria-labelledby="challenges-title">
        <div className="x-wrap">
          <SectionHeading
            id="challenges-title"
            title="The challenges we see"
            intro={`What ${industry.title.toLowerCase()} teams tell us gets in the way.`}
          />
          <FeatureGrid items={industry.challenges} />
        </div>
      </section>

      <section className="x-band x-band--light" aria-labelledby="solutions-title">
        <div className="x-wrap">
          <SectionHeading id="solutions-title" title="How we help" />
          <FeatureGrid items={industry.solutions} columns={2} />
        </div>
      </section>

      <section className="x-band" aria-labelledby="services-title">
        <div className="x-wrap">
          <SectionHeading id="services-title" title="Relevant services" />
          <FeatureGrid
            items={relevantServices.map((s) => ({
              title: s.title,
              description: s.summary,
              icon: s.icon,
              href: `/services/${s.slug}`,
            }))}
          />
        </div>
      </section>

      <section className="x-band x-band--light" aria-labelledby="stories-title">
        <div className="x-wrap">
          <SectionHeading
            id="stories-title"
            title="Client stories"
            action={<TextLink href="/case-studies">View all case studies</TextLink>}
          />
          {stories.length > 0 ? (
            <div className="x-stories2 x-stories2--top">
              {stories.map((study) => (
                <CaseStudyCard key={study.slug} study={study} />
              ))}
            </div>
          ) : (
            <p className="x-lead max-w-3xl">
              {industry.title} stories are being prepared for publication. Ask us for references and
              examples relevant to your organisation.
            </p>
          )}
        </div>
      </section>

      <ContactCta title={`Building for ${industry.title.toLowerCase()}?`} />
    </>
  );
}
