import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { ContactCta } from "@/components/sections/ContactCta";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/Button";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { services } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import { pickBySlug } from "@/lib/utils";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return buildMetadata({
    title: study.title,
    description: study.summary,
    path: `/case-studies/${study.slug}`,
    image: study.image,
    type: "article",
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const usedServices = pickBySlug(services, study.services);
  const others = caseStudies.filter((s) => s.slug !== study.slug);

  return (
    <>
      <PageHero
        kicker={`Case study · ${study.tag}`}
        title={study.title}
        subtitle={study.summary}
        breadcrumbs={[{ label: "Case studies", href: "/case-studies" }, { label: study.client }]}
      />

      <section className="x-nums" aria-label="Results">
        <div className="x-wrap">
          <ul>
            {study.results.map((r) => (
              <li key={r.label}>
                <b>{r.value}</b>
                <span>{r.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {study.image ? (
        <div className="x-wrap">
          <div className="x-story__media rounded-brand overflow-hidden">
            <Image
              src={study.image}
              alt={study.imageAlt ?? ""}
              fill
              sizes="(max-width: 1280px) 100vw, 1216px"
            />
          </div>
        </div>
      ) : null}

      <section className="x-band" aria-labelledby="story-title">
        <h2 id="story-title" className="x-sr">
          The story
        </h2>
        <div className="x-wrap x-cols2">
          <div className="x-prose">
            <h2>The challenge</h2>
            {study.challenge.map((p, i) => (
              <p key={`c-${i}`}>{p}</p>
            ))}
            <h2>What we built</h2>
            {study.solution.map((p, i) => (
              <p key={`s-${i}`}>{p}</p>
            ))}
            <h2>The outcome</h2>
            {study.outcome.map((p, i) => (
              <p key={`o-${i}`}>{p}</p>
            ))}
          </div>
          <aside className="x-aside" aria-labelledby="engagement-title">
            <h2 id="engagement-title">Engagement</h2>
            <dl className="mt-4 grid gap-4 text-[15px]">
              <div>
                <dt className="text-ink font-semibold">Client</dt>
                <dd>{study.client}</dd>
              </div>
              <div>
                <dt className="text-ink font-semibold">Focus</dt>
                <dd>{study.tag}</dd>
              </div>
              <div>
                <dt className="text-ink font-semibold">Building blocks</dt>
                <dd>{study.stack.join(", ")}</dd>
              </div>
            </dl>
            <h3 className="mt-8">Services used</h3>
            <ul>
              {usedServices.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.title} →</Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {study.quote ? (
        <section className="x-band x-band--light" aria-label="Client testimonial">
          <div className="x-wrap">
            <blockquote className="x-quote x-quote--lg max-w-4xl">
              <p>“{study.quote.text}”</p>
              <footer>
                <b>{study.quote.name}</b>, {study.quote.role}, {study.quote.organisation}
              </footer>
            </blockquote>
          </div>
        </section>
      ) : null}

      <section className="x-band" aria-labelledby="more-title">
        <div className="x-wrap">
          <SectionHeading
            id="more-title"
            title="More client stories"
            action={<TextLink href="/case-studies">View all case studies</TextLink>}
          />
          <div className="x-stories2 x-stories2--top">
            {others.map((s) => (
              <CaseStudyCard key={s.slug} study={s} showQuote={false} />
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
