import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactCta } from "@/components/sections/ContactCta";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/content/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Locations",
  description:
    "PRAVAHAx Systems Engineering is based in Maharashtra, India, and works with clients across India and beyond.",
  path: "/about/locations",
});

export default function LocationsPage() {
  return (
    <>
      <PageHero
        kicker="About us"
        title="Locations"
        subtitle="Built in India, for the world. Our engineering team is based in Maharashtra."
        breadcrumbs={[{ label: "About us", href: "/about" }, { label: "Locations" }]}
      />
      <section className="x-band" aria-labelledby="office-title">
        <div className="x-wrap x-cols2">
          <div>
            <SectionHeading id="office-title" title="Head office" />
            <ul className="x-contactlist">
              <li>
                <Icon name="pin" />
                <div>
                  <b>{siteConfig.fullName}</b>
                  <address className="not-italic">
                    {siteConfig.address.line}, {siteConfig.address.region},{" "}
                    {siteConfig.address.country}
                  </address>
                </div>
              </li>
              <li>
                <Icon name="mail" />
                <div>
                  <b>Email</b>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </div>
              </li>
              <li>
                <Icon name="clock" />
                <div>
                  <b>Office hours</b>
                  <span>[Office hours], IST</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="x-aside">
            <h2>Working with clients everywhere</h2>
            <p className="mt-3">
              We work on site with clients across India and remotely with teams worldwide. Visits to
              our office are by appointment; write to us and we will arrange a time.
            </p>
          </div>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
