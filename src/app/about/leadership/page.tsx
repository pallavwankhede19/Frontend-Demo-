import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { LeadershipGrid } from "@/components/sections/LeadershipGrid";
import { ContactCta } from "@/components/sections/ContactCta";
import { leadership } from "@/content/leadership";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Leadership",
  description:
    "Meet the leadership team of PRAVAHAx Systems Engineering, led by founder and CEO Pallav Wankhede.",
  path: "/about/leadership",
});

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        kicker="About us"
        title="Leadership"
        subtitle="The people accountable for how PRAVAHAx builds, delivers and grows."
        breadcrumbs={[{ label: "About us", href: "/about" }, { label: "Leadership" }]}
      />
      <LeadershipGrid leaders={leadership} showBio showHeading={false} />
      <ContactCta />
    </>
  );
}
