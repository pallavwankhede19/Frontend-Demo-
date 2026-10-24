import type { FooterColumn, MegaMenuGroup, NavLink } from "@/types";
import { services } from "./services";
import { industries } from "./industries";
import { siteConfig } from "./site-config";

const serviceLinks: NavLink[] = services.map((s) => ({
  label: s.title,
  href: `/services/${s.slug}`,
}));
const industryLinks: NavLink[] = industries.map((i) => ({
  label: i.title,
  href: `/industries/${i.slug}`,
}));

export const utilityLinks: NavLink[] = [
  { label: "Investors", href: "/investors" },
  { label: "Newsroom", href: "/newsroom" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const mainNavigation: MegaMenuGroup[] = [
  {
    label: "What we do",
    href: "/services",
    description: "End-to-end engineering, from strategy to support.",
    columns: [serviceLinks.slice(0, 2), serviceLinks.slice(2, 4), serviceLinks.slice(4, 6)],
  },
  {
    label: "Industries",
    href: "/industries",
    description: "Systems built for the way each sector runs.",
    columns: [industryLinks.slice(0, 2), industryLinks.slice(2, 4), industryLinks.slice(4)],
  },
  {
    label: "Products",
    href: "/products",
    description: "Platforms we build, ship and support.",
    columns: [[{ label: "Portal One", href: "/products/portal-one" }]],
  },
  {
    label: "Insights",
    href: "/insights",
    description: "What we learn shipping real systems.",
    columns: [
      [{ label: "Articles", href: "/insights#articles" }],
      [{ label: "Case studies", href: "/case-studies" }],
      [{ label: "Research", href: "/insights#research" }],
    ],
  },
  {
    label: "About us",
    href: "/about",
    description: "One accountable engineering team.",
    columns: [
      [{ label: "Our story", href: "/about" }],
      [{ label: "Leadership", href: "/about/leadership" }],
      [{ label: "Locations", href: "/about/locations" }],
    ],
  },
  {
    label: "Careers",
    href: "/careers",
    description: "Build what matters. Grow with us.",
    columns: [
      [{ label: "Open roles", href: "/careers#open-areas" }],
      [{ label: "Internships", href: "/careers/internships" }],
      [{ label: "Life at PRAVAHAx", href: "/careers/life-at-pravahax" }],
    ],
  },
];

export const footerColumns: FooterColumn[] = [
  { heading: "What we do", links: serviceLinks },
  { heading: "Industries", links: industryLinks },
  {
    heading: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Newsroom", href: "/newsroom" },
      { label: "Investors", href: "/investors" },
      { label: "Careers", href: "/careers" },
      { label: "Internships", href: "/careers/internships" },
    ],
  },
  {
    heading: "Connect",
    links: siteConfig.socials.map((s) => ({ label: s.label, href: s.href })),
  },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Statement", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Sitemap", href: "/sitemap.xml" },
];
