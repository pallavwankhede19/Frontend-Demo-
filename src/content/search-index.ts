import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { caseStudies } from "@/content/case-studies";
import { insights } from "@/content/insights";

import type { SearchEntry } from "@/lib/search";

/** Static index of the site's main destinations, searched entirely in the browser. */
export const searchIndex: SearchEntry[] = [
  ...services.map((s) => ({
    title: s.title,
    href: `/services/${s.slug}`,
    section: "Service",
    text: [s.summary, s.description, ...s.capabilities.map((c) => c.title)].join(" "),
  })),
  ...industries.map((i) => ({
    title: i.title,
    href: `/industries/${i.slug}`,
    section: "Industry",
    text: [i.summary, i.description, ...i.solutions.map((c) => c.title)].join(" "),
  })),
  ...caseStudies.map((c) => ({
    title: c.title,
    href: `/case-studies/${c.slug}`,
    section: "Case study",
    text: [c.client, c.tag, c.summary].join(" "),
  })),
  ...insights.map((p) => ({
    title: p.title,
    href: `/insights/${p.slug}`,
    section: p.type,
    text: p.summary,
  })),
  {
    title: "Portal One",
    href: "/products/portal-one",
    section: "Product",
    text: "operations workspace IT services attendance geo-check leave timesheets utilisation projects people SSO multi-tenant RBAC audit logs demo",
  },
  {
    title: "Careers",
    href: "/careers",
    section: "Careers",
    text: "jobs open roles hiring applied AI engineering product engineering research education",
  },
  {
    title: "Internships",
    href: "/careers/internships",
    section: "Careers",
    text: "internship students AI ML software systems hardware embedded IoT cloud data DevOps cybersecurity enterprise certificate placement",
  },
  {
    title: "Life at PRAVAHAx",
    href: "/careers/life-at-pravahax",
    section: "Careers",
    text: "culture team values mentorship learning",
  },
  {
    title: "About us",
    href: "/about",
    section: "Company",
    text: "our story PRAVAHA current principles mission",
  },
  {
    title: "Leadership",
    href: "/about/leadership",
    section: "Company",
    text: "team founder CEO Pallav Wankhede",
  },
  {
    title: "Locations",
    href: "/about/locations",
    section: "Company",
    text: "office address Maharashtra India",
  },
  {
    title: "Newsroom",
    href: "/newsroom",
    section: "Company",
    text: "news press announcements launch",
  },
  {
    title: "Investors",
    href: "/investors",
    section: "Company",
    text: "investor relations corporate information",
  },
  {
    title: "Contact us",
    href: "/contact",
    section: "Contact",
    text: "contact email hello enquiry consultancy research careers talk to an expert",
  },
];
