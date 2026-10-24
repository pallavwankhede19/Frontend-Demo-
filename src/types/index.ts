import type { IconName } from "@/components/ui/Icon";

export interface NavLink {
  label: string;
  href: string;
}

export interface MegaMenuGroup {
  /** Top-level label shown in the header and mobile menu. */
  label: string;
  /** Landing page for the group, linked from the mega menu lead column. */
  href: string;
  /** Short line shown under the heading inside the mega menu. */
  description: string;
  /** Links, split into up to three columns in the mega menu. */
  columns: NavLink[][];
}

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Capability {
  title: string;
  description: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  icon: IconName;
  /** One-line summary used on cards and in the mega menu. */
  summary: string;
  /** Longer description used for the detail page hero and metadata. */
  description: string;
  overview: string[];
  capabilities: Capability[];
  approach: Step[];
  faqs: Faq[];
  relatedCaseStudies: string[];
  industries: string[];
}

export interface Industry {
  slug: string;
  title: string;
  icon: IconName;
  image?: string;
  imageAlt?: string;
  summary: string;
  description: string;
  challenges: Capability[];
  solutions: Capability[];
  services: string[];
  caseStudies: string[];
}

export interface Metric {
  value: string;
  label: string;
}

export interface Quote {
  text: string;
  name: string;
  role: string;
  organisation: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  title: string;
  tag: string;
  industry: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  /** Headline figure used when the story has no photo. */
  panelMetric?: Metric;
  results: Metric[];
  quote?: Quote;
  challenge: string[];
  solution: string[];
  outcome: string[];
  services: string[];
  stack: string[];
}

export type InsightType = "Article" | "Whitepaper" | "Research";

export interface Insight {
  slug: string;
  title: string;
  type: InsightType;
  icon: IconName;
  /** ISO year-month, e.g. 2026-10. */
  date: string;
  dateLabel: string;
  author: string;
  readingTime: string;
  summary: string;
  body: { heading?: string; paragraphs: string[] }[];
}

export interface NewsItem {
  id: string;
  date?: string;
  dateLabel: string;
  title: string;
  summary: string;
  placeholder?: boolean;
}

export interface Leader {
  name: string;
  role: string;
  bio: string;
  placeholder?: boolean;
  linkedin?: string;
}
