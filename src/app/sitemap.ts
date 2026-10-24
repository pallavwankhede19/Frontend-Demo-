import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/case-studies";
import { industries } from "@/content/industries";
import { insights } from "@/content/insights";
import { services } from "@/content/services";
import { absoluteUrl } from "@/lib/utils";

const staticRoutes: {
  path: string;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
}[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/industries", priority: 0.9, changeFrequency: "monthly" },
  { path: "/products", priority: 0.7, changeFrequency: "monthly" },
  { path: "/products/portal-one", priority: 0.9, changeFrequency: "monthly" },
  { path: "/case-studies", priority: 0.8, changeFrequency: "monthly" },
  { path: "/insights", priority: 0.8, changeFrequency: "weekly" },
  { path: "/newsroom", priority: 0.7, changeFrequency: "weekly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about/leadership", priority: 0.6, changeFrequency: "monthly" },
  { path: "/about/locations", priority: 0.5, changeFrequency: "yearly" },
  { path: "/careers", priority: 0.8, changeFrequency: "weekly" },
  { path: "/careers/internships", priority: 0.8, changeFrequency: "monthly" },
  { path: "/careers/life-at-pravahax", priority: 0.6, changeFrequency: "monthly" },
  { path: "/investors", priority: 0.4, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms-of-use", priority: 0.2, changeFrequency: "yearly" },
  { path: "/cookie-policy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/accessibility", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-24");
  return [
    ...staticRoutes.map((r) => ({
      url: absoluteUrl(r.path),
      lastModified,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...services.map((s) => ({
      url: absoluteUrl(`/services/${s.slug}`),
      lastModified,
      priority: 0.8,
    })),
    ...industries.map((i) => ({
      url: absoluteUrl(`/industries/${i.slug}`),
      lastModified,
      priority: 0.8,
    })),
    ...caseStudies.map((c) => ({
      url: absoluteUrl(`/case-studies/${c.slug}`),
      lastModified,
      priority: 0.7,
    })),
    ...insights.map((p) => ({
      url: absoluteUrl(`/insights/${p.slug}`),
      lastModified: new Date(`${p.date}-01`),
      priority: 0.6,
    })),
  ];
}
