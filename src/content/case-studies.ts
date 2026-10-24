import type { CaseStudy } from "@/types";

/**
 * Client stories. Bracketed values such as [XX]% are placeholders to be confirmed
 * with each client before publication.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "mahindra-maintenance-intelligence",
    client: "Mahindra & Mahindra",
    title: "Maintenance intelligence for Mahindra & Mahindra",
    tag: "Manufacturing",
    industry: "manufacturing",
    summary:
      "Replaced manual maintenance logs with a connected system the maintenance team relies on daily.",
    image: "/images/industry-manufacturing.jpg",
    imageAlt: "Maintenance team on the Mahindra & Mahindra plant floor",
    results: [
      { value: "[XX]%", label: "Less unplanned downtime" },
      { value: "Within hours", label: "New features shipped" },
      { value: "[Year]", label: "Live since" },
    ],
    quote: {
      text: "Nothing even came close to the architecture they delivered.",
      name: "Nilesh Patil",
      role: "Manager, Maintenance Department",
      organisation: "Mahindra & Mahindra",
    },
    challenge: [
      "The maintenance department tracked breakdowns, preventive schedules and spare parts in manual logs. Information was hard to search, slow to compile into reports and dependent on the people who wrote it.",
      "The team needed a system that matched how maintenance work actually happens on the floor, could change quickly as requirements evolved, and would hold up under daily use across shifts.",
    ],
    solution: [
      "PRAVAHAx designed and built a connected maintenance platform covering work orders, asset history, preventive maintenance schedules and reporting, used by technicians, supervisors and managers.",
      "The architecture separates a stable core data model from configurable workflows, so new forms, reports and rules can be shipped within hours rather than weeks. Role-based access and an audit trail record who changed what, and when.",
    ],
    outcome: [
      "Maintenance records are now captured once, searchable instantly and available to everyone who needs them. Supervisors see open work and recurring faults at a glance, and management reports are generated rather than compiled.",
      "Unplanned downtime fell by [XX]% compared with the period before go-live, and the team continues to request and receive improvements within hours.",
    ],
    services: ["software-engineering", "hardware-iot", "ai-automation"],
    stack: ["Web platform", "Relational database", "Role-based access", "Audit logging"],
  },
  {
    slug: "eagrocare-connected-platform",
    client: "eAGROCARE",
    title: "One connected platform for eAGROCARE",
    tag: "Agriculture",
    industry: "agriculture",
    summary: "Sales, inventory and field teams in one workspace, with org-wide visibility.",
    image: "/images/industry-agriculture.jpg",
    imageAlt: "Field team at work for eAGROCARE",
    results: [
      { value: "1", label: "Workspace for sales, inventory and field" },
      { value: "[XX]%", label: "Faster order processing" },
      { value: "[Year]", label: "Live since" },
    ],
    quote: {
      text: "Our processes are more streamlined and we have better visibility across the organisation.",
      name: "Rahul Deshmukh",
      role: "Director",
      organisation: "eAGROCARE",
    },
    challenge: [
      "eAGROCARE's sales, inventory and field teams worked in separate tools and spreadsheets. Leadership lacked a single, current view of orders, stock and field activity across the organisation.",
      "Field staff often work with limited connectivity, and demand peaks sharply in season, so any system had to be dependable under both conditions.",
    ],
    solution: [
      "We built one connected platform where sales, inventory and field teams share the same data: orders flow directly into stock movements, and field visits are linked to customers and outcomes.",
      "Dashboards give leadership organisation-wide visibility, while role-based access ensures each team sees what it needs. The platform is hosted on secure cloud infrastructure with monitored backups.",
    ],
    outcome: [
      "Processes that previously required re-entry across tools now happen once. Leadership has a current, shared view of the business, and teams spend less time reconciling spreadsheets.",
      "Order processing time improved by [XX]%, and the platform continues to grow with new modules as the organisation expands.",
    ],
    services: ["enterprise-solutions", "software-engineering", "cloud-data-security"],
    stack: ["Web platform", "Mobile-friendly field workflows", "Cloud hosting", "Dashboards"],
  },
  {
    slug: "sujal-industries-digital-seo",
    client: "Sujal Industries",
    title: "Digital and SEO architecture for Sujal Industries",
    tag: "Growth",
    industry: "growth",
    summary: "Rebuilt the web presence and search architecture for faster lead flow.",
    panelMetric: { value: "[X]x", label: "Organic traffic" },
    results: [
      { value: "[X]x", label: "Organic traffic" },
      { value: "[XX]%", label: "More qualified enquiries" },
      { value: "[Year]", label: "Live since" },
    ],
    challenge: [
      "Sujal Industries' website did not reflect the range or quality of its work. Pages were slow, poorly structured for search engines and did little to convert visitors into enquiries.",
      "The business needed a web presence that could be found by the right buyers and make it easy for them to get in touch.",
    ],
    solution: [
      "We rebuilt the website on a fast, modern stack with a clear information architecture organised around what buyers search for. Every page received unique metadata, structured data and a single canonical URL.",
      "Enquiry paths were simplified, and analytics were set up to measure which pages and searches produced qualified leads.",
    ],
    outcome: [
      "Organic traffic grew [X]x and qualified enquiries rose by [XX]%, with a site the team can update without developer help.",
    ],
    services: ["software-engineering", "consultancy"],
    stack: ["Static-first web framework", "Structured data", "Technical SEO", "Analytics"],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
