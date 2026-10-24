import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactCta } from "@/components/sections/ContactCta";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/content/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Investors",
  description:
    "Corporate information for investors and partners of PRAVAHAx Systems Engineering Pvt. Ltd.",
  path: "/investors",
});

const facts = [
  { label: "Registered name", value: siteConfig.legalName },
  { label: "Corporate Identification Number (CIN)", value: "[CIN]" },
  {
    label: "Registered office",
    value: `${siteConfig.address.line}, ${siteConfig.address.region}, ${siteConfig.address.country}`,
  },
  { label: "Founder & CEO", value: siteConfig.founder },
  { label: "Year of incorporation", value: "[Year]" },
  { label: "Investor contact", value: siteConfig.email },
];

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        kicker="Investors"
        title="Corporate information"
        subtitle="PRAVAHAx Systems Engineering is a privately held company. This page provides corporate information for investors, partners and regulators."
        breadcrumbs={[{ label: "Investors" }]}
      />
      <section className="x-band" aria-labelledby="facts-title">
        <div className="x-wrap x-cols2">
          <div>
            <SectionHeading id="facts-title" title="Company facts" />
            <dl className="border-line border-t">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-line grid gap-1 border-b py-5 sm:grid-cols-[240px_1fr] sm:gap-6"
                >
                  <dt className="text-ink font-semibold">{fact.label}</dt>
                  <dd>
                    {fact.value === siteConfig.email ? (
                      <a className="x-link" href={`mailto:${siteConfig.email}`}>
                        {fact.value}
                      </a>
                    ) : (
                      fact.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="x-aside">
            <h2>Investor relations</h2>
            <p className="mt-3">
              Financial statements, statutory filings and shareholder communications will be
              published here as they become available. For enquiries, please contact us by email.
            </p>
          </div>
        </div>
      </section>
      <ContactCta title="Investor and partnership enquiries" />
    </>
  );
}
