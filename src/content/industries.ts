import type { Industry } from "@/types";

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    title: "Manufacturing",
    icon: "factory",
    image: "/images/industry-manufacturing.jpg",
    imageAlt: "Maintenance engineers inspecting equipment on a manufacturing plant floor",
    summary: "Connected maintenance, quality and production systems for the plant floor.",
    description:
      "Connected maintenance, quality and production systems that give plant teams real-time visibility and fewer surprises.",
    challenges: [
      {
        title: "Unplanned downtime",
        description:
          "Breakdowns are discovered late, and maintenance history lives in paper logs or personal spreadsheets.",
      },
      {
        title: "Disconnected machines",
        description:
          "Older equipment has no network access, so condition data never reaches the people who need it.",
      },
      {
        title: "Slow reporting",
        description:
          "Shift and line reports are compiled by hand, so management sees yesterday's problems tomorrow.",
      },
    ],
    solutions: [
      {
        title: "Maintenance intelligence",
        description:
          "Digital work orders, asset history and condition monitoring in one system the maintenance team relies on daily.",
      },
      {
        title: "Retrofit IoT sensing",
        description:
          "Vibration, temperature and current sensors on legacy machines, with edge gateways that tolerate network drops.",
      },
      {
        title: "Vision-based inspection",
        description: "Camera-based checks that flag defects early, with a human review path.",
      },
      {
        title: "Line and plant dashboards",
        description: "Live OEE, downtime and quality views for supervisors and plant heads.",
      },
    ],
    services: ["hardware-iot", "ai-automation", "software-engineering"],
    caseStudies: ["mahindra-maintenance-intelligence"],
  },
  {
    slug: "agriculture",
    title: "Agriculture",
    icon: "leaf",
    image: "/images/industry-agriculture.jpg",
    imageAlt: "Agronomy field team reviewing crop data on a tablet",
    summary: "Field, sales and inventory platforms for agri-input and agritech businesses.",
    description:
      "Platforms that connect field teams, distributors, inventory and sales for agri-input and agritech businesses.",
    challenges: [
      {
        title: "Scattered field teams",
        description:
          "Field officers work across districts with limited connectivity and report through calls and messages.",
      },
      {
        title: "Inventory blind spots",
        description:
          "Stock across warehouses and distributors is hard to see, leading to shortages in season and excess after it.",
      },
      {
        title: "Seasonal demand",
        description: "Systems must cope with sharp peaks during sowing and harvest windows.",
      },
    ],
    solutions: [
      {
        title: "Connected operations platform",
        description: "Sales, inventory and field teams in one workspace with org-wide visibility.",
      },
      {
        title: "Offline-first field apps",
        description:
          "Mobile apps that capture visits, orders and photos offline and sync when the network returns.",
      },
      {
        title: "Farm and soil sensing",
        description: "Low-power sensors for soil moisture and microclimate monitoring.",
      },
      {
        title: "Distributor management",
        description: "Order tracking, credit limits and scheme management for the dealer network.",
      },
    ],
    services: ["enterprise-solutions", "software-engineering", "hardware-iot"],
    caseStudies: ["eagrocare-connected-platform"],
  },
  {
    slug: "education",
    title: "Education",
    icon: "education",
    summary: "Learning, administration and campus systems for institutions and edtech.",
    description:
      "Learning platforms, campus administration and applied AI for universities, colleges, schools and education providers.",
    challenges: [
      {
        title: "Fragmented administration",
        description:
          "Admissions, attendance, fees and examinations run on separate tools that do not talk to each other.",
      },
      {
        title: "Limited digital capacity",
        description:
          "Institutions often lack in-house engineering teams to build and maintain systems over time.",
      },
      {
        title: "Responsible AI adoption",
        description:
          "Interest in AI tutoring and assessment is high, but so are concerns about accuracy and fairness.",
      },
    ],
    solutions: [
      {
        title: "Campus operations platform",
        description:
          "Admissions, attendance and academic records in one system with role-based access.",
      },
      {
        title: "Learning experiences",
        description: "Course delivery and assessment tools that work well on mobile networks.",
      },
      {
        title: "Applied AI with oversight",
        description:
          "Evaluated assistants for content, feedback and administration, with educators in control.",
      },
      {
        title: "Industry-linked training",
        description:
          "Internship and project programmes that connect students to real engineering work.",
      },
    ],
    services: ["software-engineering", "ai-automation", "cloud-data-security"],
    caseStudies: [],
  },
  {
    slug: "public-sector",
    title: "Public Sector",
    icon: "government",
    summary: "Citizen services and department systems built for scale and accountability.",
    description:
      "Secure, accessible and auditable systems for government departments, public undertakings and civic programmes.",
    challenges: [
      {
        title: "Scale and accessibility",
        description:
          "Services must work for every citizen, across languages, devices and levels of digital literacy.",
      },
      {
        title: "Security and auditability",
        description:
          "Every decision and data access needs a clear trail, under strict data protection obligations.",
      },
      {
        title: "Legacy integration",
        description:
          "New services have to integrate with long-standing departmental systems and national platforms.",
      },
    ],
    solutions: [
      {
        title: "Citizen-facing portals",
        description:
          "Accessible, multilingual service portals designed to WCAG 2.1 AA and GIGW guidelines.",
      },
      {
        title: "Workflow and case management",
        description: "Configurable approvals and case tracking with complete audit logs.",
      },
      {
        title: "Data platforms and dashboards",
        description: "Reliable reporting for programme monitoring and decision-making.",
      },
      {
        title: "Security reviews",
        description: "Independent assessments and hardening of existing systems.",
      },
    ],
    services: ["cloud-data-security", "enterprise-solutions", "consultancy"],
    caseStudies: [],
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    icon: "professional-services",
    summary: "Operations, utilisation and client delivery systems for services firms.",
    description:
      "Operations, people and delivery systems for IT services, consulting and professional firms, including our own product, Portal One.",
    challenges: [
      {
        title: "Utilisation visibility",
        description:
          "Leaders cannot see bench strength, billable hours and project health in one place.",
      },
      {
        title: "Tool sprawl",
        description:
          "Attendance, leave, timesheets and projects run on separate tools, each with its own login.",
      },
      {
        title: "Client trust",
        description:
          "Clients expect enterprise-grade security, SSO and audit trails from every vendor.",
      },
    ],
    solutions: [
      {
        title: "Portal One",
        description:
          "Our operations workspace for IT and services companies: attendance, leave, timesheets, projects and people.",
      },
      {
        title: "Digital presence and growth",
        description: "Web and search architecture that turns expertise into qualified enquiries.",
      },
      {
        title: "Client portals",
        description: "Secure portals for sharing deliverables, approvals and reports with clients.",
      },
      {
        title: "Security and compliance",
        description: "Controls and evidence for client security questionnaires and audits.",
      },
    ],
    services: ["enterprise-solutions", "cloud-data-security", "software-engineering"],
    caseStudies: [],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}
