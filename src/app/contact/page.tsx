import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/content/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact us",
  description:
    "Talk to PRAVAHAx about services, consultancy, research or careers. Email hello@pravahax.com; our team responds within one business day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Let’s talk about your next system"
        subtitle={`Tell us what you are building. ${siteConfig.responseTime}`}
        breadcrumbs={[{ label: "Contact" }]}
        image="/images/contact-office-banner.jpg"
      />
      <section className="x-band" aria-labelledby="form-title">
        <div className="x-wrap grid gap-16 lg:grid-cols-[1fr_360px]">
          <div>
            <SectionHeading id="form-title" title="Send us a message" />
            <ContactForm />
          </div>
          <aside aria-labelledby="details-title">
            <h2 id="details-title" className="text-xl font-semibold">
              Contact details
            </h2>
            <ul className="x-contactlist mt-6">
              <li>
                <Icon name="mail" />
                <div>
                  <b>Email</b>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </div>
              </li>
              <li>
                <Icon name="pin" />
                <div>
                  <b>Office</b>
                  <address className="not-italic">
                    {siteConfig.address.line}, {siteConfig.address.region},{" "}
                    {siteConfig.address.country}
                  </address>
                </div>
              </li>
              <li>
                <Icon name="clock" />
                <div>
                  <b>Response time</b>
                  <span>{siteConfig.responseTime}</span>
                </div>
              </li>
            </ul>
            <h3 className="mt-10 text-base font-semibold">Follow us</h3>
            <ul className="x-socials mt-2">
              {siteConfig.socials.map((social) => (
                <li key={social.href}>
                  <a
                    className="x-link"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.label}
                    <span className="x-sr"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
