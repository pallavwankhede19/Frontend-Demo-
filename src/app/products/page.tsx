import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ProductSpotlight } from "@/components/sections/ProductSpotlight";
import { ContactCta } from "@/components/sections/ContactCta";
import { portalOneHighlights } from "@/content/portal-one";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Products",
  description:
    "Platforms PRAVAHAx builds, ships and supports, including Portal One, the operations workspace for IT and services companies.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        kicker="Products"
        title="Platforms we build, ship and support"
        subtitle="Our products come from the systems we build for clients, hardened into platforms that teams can adopt in weeks."
        breadcrumbs={[{ label: "Products" }]}
      />
      <ProductSpotlight
        label="Product"
        title="Portal One"
        line="The operations workspace for IT and services companies."
        points={portalOneHighlights}
        image="/images/product-portal-one.jpg"
        imageAlt="Laptop showing the Portal One dashboard"
        primary={{ label: "Explore Portal One", href: "/products/portal-one" }}
        secondary={{ label: "Request a demo", href: "/products/portal-one#request-demo" }}
      />
      <ContactCta />
    </>
  );
}
