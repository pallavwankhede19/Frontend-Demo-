import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import { absoluteUrl } from "@/lib/utils";

interface PageMetadataInput {
  title: string;
  description: string;
  /** Site path of the page, e.g. "/services". Becomes the page's single canonical URL. */
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  noIndex?: boolean;
}

/**
 * Builds metadata for one page. Every page calls this so that each route emits
 * exactly one canonical link that points at itself (the root layout sets none).
 */
export function buildMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  publishedTime,
  noIndex,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  // Pages without their own photo fall back to the generated brand card (app/opengraph-image.tsx).
  // It must be listed explicitly because a page-level openGraph object replaces the inherited one.
  const images = image
    ? [{ url: image, width: 1376, height: 768, alt: title }]
    : [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteConfig.fullName }];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url,
      title: `${title} | ${siteConfig.name}`,
      description,
      siteName: siteConfig.fullName,
      locale: siteConfig.locale,
      images,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      site: "@pravahax",
      images: [images[0]?.url ?? "/opengraph-image"],
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.fullName,
    legalName: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logo),
    email: siteConfig.email,
    description: siteConfig.description,
    founder: { "@type": "Person", name: siteConfig.founder },
    address: {
      "@type": "PostalAddress",
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.countryCode,
    },
    sameAs: siteConfig.socials.map((s) => s.href),
  };
}

export function breadcrumbJsonLd(items: { label: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: absoluteUrl(item.href) } : {}),
    })),
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  date: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.date,
    author: { "@type": "Organization", name: input.author },
    publisher: {
      "@type": "Organization",
      name: siteConfig.fullName,
      logo: { "@type": "ImageObject", url: absoluteUrl(siteConfig.logo) },
    },
    mainEntityOfPage: absoluteUrl(input.path),
  };
}
