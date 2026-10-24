import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "software-engineering",
    title: "Software Engineering",
    icon: "code",
    summary: "Web platforms, APIs and integrations built to last.",
    description:
      "Product-grade web platforms, APIs and integrations, engineered for the load, the users and the years they have to serve.",
    overview: [
      "Most enterprise software fails slowly: a release cadence that stalls, integrations nobody wants to touch, and a codebase that only one person understands. We build systems that stay easy to change long after launch.",
      "Our engineers own the work end to end, from the first architecture decision through deployment, monitoring and support. You deal with one accountable team rather than a chain of handovers.",
    ],
    capabilities: [
      {
        title: "Web platforms and portals",
        description:
          "Customer, partner and employee portals built with modern frameworks, fast on low-end devices and patchy networks.",
      },
      {
        title: "APIs and integrations",
        description:
          "Well-documented REST and event-driven APIs that connect ERP, CRM, payment and government systems reliably.",
      },
      {
        title: "Multi-tenant SaaS",
        description:
          "Tenant isolation, single sign-on, role-based access and billing designed in from the start, not bolted on.",
      },
      {
        title: "Modernisation",
        description:
          "Incremental migration of legacy applications to maintainable architectures without stopping the business.",
      },
      {
        title: "Quality engineering",
        description:
          "Automated tests, code review discipline and release pipelines that make shipping on a Tuesday afternoon routine.",
      },
    ],
    approach: [
      {
        title: "Discover",
        description: "Map users, workflows, data and constraints. Agree what success looks like.",
      },
      {
        title: "Design",
        description:
          "Choose an architecture we can defend, and prototype the riskiest parts first.",
      },
      {
        title: "Build",
        description: "Ship working software in short increments with real users giving feedback.",
      },
      {
        title: "Run",
        description: "Monitor, support and improve the system with clear service levels.",
      },
    ],
    faqs: [
      {
        question: "Do you work with our existing codebase?",
        answer:
          "Yes. Most engagements start with a short technical review so we understand what to keep, what to refactor and what to replace before we change anything.",
      },
      {
        question: "Who owns the code you write?",
        answer:
          "You do. Source code, infrastructure definitions and documentation are handed over in your repositories as the work progresses.",
      },
      {
        question: "Can you support the system after launch?",
        answer:
          "Yes. We offer support and improvement retainers with agreed response times, monitoring and a regular release rhythm.",
      },
    ],
    relatedCaseStudies: ["mahindra-maintenance-intelligence", "eagrocare-connected-platform"],
    industries: ["manufacturing", "agriculture", "professional-services"],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    icon: "chip",
    summary: "Applied AI, document and vision workflows with measurable accuracy.",
    description:
      "Applied AI that earns its place in production: document, vision and language workflows with evaluation, guardrails and a human who owns the outcome.",
    overview: [
      "A convincing AI demo takes an afternoon. A system that keeps working when real users, messy data and edge cases arrive takes engineering discipline. That discipline is what we sell.",
      "We start from the workflow, not the model. Every AI feature we ship has an evaluation set, a measured baseline, a fallback path and someone accountable for its decisions.",
    ],
    capabilities: [
      {
        title: "Document intelligence",
        description:
          "Extraction and classification for invoices, forms, reports and records, with confidence scores and human review queues.",
      },
      {
        title: "Computer vision",
        description:
          "Inspection, counting and safety monitoring on the plant floor or in the field, from camera to dashboard.",
      },
      {
        title: "Language assistants",
        description:
          "Retrieval-grounded assistants over your own documents and systems, with citations and access control.",
      },
      {
        title: "Process automation",
        description:
          "Automating repetitive approvals, data entry and reconciliation while keeping an audit trail of every step.",
      },
      {
        title: "Evaluation and MLOps",
        description:
          "Test sets, monitoring and retraining pipelines so accuracy is measured continuously, not assumed.",
      },
    ],
    approach: [
      {
        title: "Frame",
        description: "Pick a workflow with a measurable outcome and a realistic data supply.",
      },
      {
        title: "Baseline",
        description: "Build an evaluation set and measure how the work is done today.",
      },
      {
        title: "Prove",
        description: "Ship a working slice to real users and compare it against the baseline.",
      },
      {
        title: "Govern",
        description: "Add monitoring, guardrails and review paths before scaling up.",
      },
    ],
    faqs: [
      {
        question: "Will our data be used to train public models?",
        answer:
          "No. We design for data residency and contractual controls, and we use providers and deployment options that keep your data out of shared training sets.",
      },
      {
        question: "How do you measure accuracy?",
        answer:
          "Against an evaluation set built from your real cases, agreed with your team before we start. We report precision, recall and error categories, not just a single score.",
      },
      {
        question: "Can AI run on-premise or at the edge?",
        answer:
          "Yes. Where connectivity, latency or privacy demand it, we deploy models on your servers or on edge hardware close to the process.",
      },
    ],
    relatedCaseStudies: ["mahindra-maintenance-intelligence"],
    industries: ["manufacturing", "education", "public-sector"],
  },
  {
    slug: "hardware-iot",
    title: "Hardware & IoT",
    icon: "signal",
    summary: "Firmware, sensors and edge devices for plants and fields.",
    description:
      "Firmware, sensors, gateways and edge devices that bring plants, warehouses and fields online, with the cloud software to make the data useful.",
    overview: [
      "Connected systems fail at the seams: between sensor and gateway, gateway and cloud, data and decision. We engineer the whole chain so it works in heat, dust and patchy connectivity.",
      "From prototype boards to fleet management, we design hardware and firmware with the software team in the same room, so devices, data and dashboards are built to fit each other.",
    ],
    capabilities: [
      {
        title: "Embedded firmware",
        description:
          "Reliable firmware for ESP32, STM32 and similar microcontrollers, with secure over-the-air updates.",
      },
      {
        title: "Sensor integration",
        description:
          "Vibration, temperature, current, soil and environmental sensing, calibrated for the conditions on site.",
      },
      {
        title: "Edge gateways",
        description:
          "Local buffering, protocol translation (Modbus, MQTT, OPC UA) and edge inference when the network drops.",
      },
      {
        title: "Device fleet management",
        description:
          "Provisioning, health monitoring and remote configuration for hundreds or thousands of devices.",
      },
      {
        title: "Industrial dashboards",
        description:
          "Real-time views and alerts that maintenance, operations and management teams actually use.",
      },
    ],
    approach: [
      {
        title: "Survey",
        description: "Walk the site, understand the equipment and agree what to measure.",
      },
      {
        title: "Prototype",
        description: "Validate sensors, power and connectivity with a small pilot installation.",
      },
      {
        title: "Harden",
        description: "Design enclosures, firmware updates and security for long-term operation.",
      },
      {
        title: "Scale",
        description: "Roll out across lines or sites with fleet management and support in place.",
      },
    ],
    faqs: [
      {
        question: "Do you supply the hardware as well as the software?",
        answer:
          "We design and specify the hardware, build prototypes and work with manufacturing partners for volume. You can also use off-the-shelf devices where they fit.",
      },
      {
        question: "What happens when the network goes down?",
        answer:
          "Devices and gateways buffer data locally and continue critical logic at the edge, then synchronise once connectivity returns.",
      },
      {
        question: "Can you connect to our existing machines?",
        answer:
          "In most cases, yes. We integrate with PLCs and controllers over standard industrial protocols, or retrofit external sensors where direct access is not possible.",
      },
    ],
    relatedCaseStudies: ["mahindra-maintenance-intelligence"],
    industries: ["manufacturing", "agriculture"],
  },
  {
    slug: "enterprise-solutions",
    title: "Enterprise Solutions",
    icon: "briefcase",
    summary: "HR, operations and ERP-adjacent systems for serious workloads.",
    description:
      "HR, operations and ERP-adjacent systems for organisations that have outgrown spreadsheets but do not want a five-year ERP programme.",
    overview: [
      "Between a stack of spreadsheets and a full ERP rollout sits a large space of operational software: attendance, field operations, inventory, approvals and reporting. That is where most of the day-to-day work actually happens.",
      "We build and configure systems for that space, integrated with the finance and ERP tools you already use, and designed around how your teams work rather than how a template assumes they do.",
    ],
    capabilities: [
      {
        title: "HR and workforce operations",
        description:
          "Attendance, leave, timesheets, utilisation and people records, including geo-verified check-in for field teams.",
      },
      {
        title: "Sales and inventory",
        description:
          "Order capture, stock movement and distributor management with org-wide visibility.",
      },
      {
        title: "Workflow and approvals",
        description: "Configurable approval chains with audit logs, notifications and delegation.",
      },
      {
        title: "ERP integration",
        description:
          "Two-way integration with Tally, SAP, Zoho and other systems of record, so data is entered once.",
      },
      {
        title: "Reporting and analytics",
        description:
          "Management dashboards and scheduled reports drawn from a single, trustworthy data model.",
      },
    ],
    approach: [
      {
        title: "Map",
        description: "Document current processes, roles and the reports leadership depends on.",
      },
      {
        title: "Configure",
        description: "Start from proven modules such as Portal One and adapt them to your rules.",
      },
      {
        title: "Migrate",
        description: "Move historical data and run old and new systems in parallel until trusted.",
      },
      {
        title: "Adopt",
        description: "Train teams, measure usage and refine the workflow in the first months.",
      },
    ],
    faqs: [
      {
        question: "Is this a replacement for our ERP?",
        answer:
          "Usually not. We complement your ERP with the operational workflows it handles poorly, and integrate so financial data stays in one place.",
      },
      {
        question: "How long does a typical rollout take?",
        answer:
          "A focused module can go live in weeks. Multi-department rollouts are phased so each team gets value early rather than waiting for a big-bang launch.",
      },
      {
        question: "Can we host it ourselves?",
        answer:
          "Yes. We support managed cloud hosting, your own cloud account, or on-premise deployment where policy requires it.",
      },
    ],
    relatedCaseStudies: ["eagrocare-connected-platform"],
    industries: ["agriculture", "professional-services", "public-sector"],
  },
  {
    slug: "cloud-data-security",
    title: "Cloud, Data & Security",
    icon: "cloud-check",
    summary: "Architecture, data platforms, hardening and observability.",
    description:
      "Cloud architecture, data platforms, security hardening and observability that keep critical systems fast, safe and explainable.",
    overview: [
      "Infrastructure is where small shortcuts become large incidents: an exposed port, a shared secret, a backup nobody has tested. We design platforms where the safe path is also the easy one.",
      "Our team covers cloud architecture, data engineering and security together, because in practice they are the same conversation about who can do what, where data lives and how you know something is wrong.",
    ],
    capabilities: [
      {
        title: "Cloud architecture",
        description:
          "Right-sized deployments on AWS, Azure, GCP or self-hosted infrastructure, with infrastructure as code.",
      },
      {
        title: "Data platforms",
        description:
          "Pipelines, warehouses and operational databases that turn scattered records into reliable reporting.",
      },
      {
        title: "Security hardening",
        description:
          "Threat modelling, access reviews, secrets management and remediation of audit findings.",
      },
      {
        title: "Observability",
        description:
          "Logging, metrics, tracing and alerting so problems are found by your team before your users.",
      },
      {
        title: "Backup and resilience",
        description:
          "Tested backups, disaster recovery plans and failover designed around realistic recovery targets.",
      },
      {
        title: "Compliance readiness",
        description:
          "Controls and documentation aligned with the DPDP Act, ISO 27001 and customer security questionnaires.",
      },
    ],
    approach: [
      {
        title: "Assess",
        description:
          "Review architecture, access, data flows and incidents against a clear baseline.",
      },
      {
        title: "Prioritise",
        description:
          "Rank findings by risk and effort into a 48-hour, two-week and quarterly plan.",
      },
      {
        title: "Remediate",
        description: "Fix the highest risks first, with changes tested and documented.",
      },
      {
        title: "Sustain",
        description: "Hand over runbooks, monitoring and review cadences your team can keep.",
      },
    ],
    faqs: [
      {
        question: "Can you audit a system we did not build?",
        answer:
          "Yes. Independent reviews of third-party and in-house systems are a common starting point, and we report findings with clear severity and remediation steps.",
      },
      {
        question: "Do you help with the DPDP Act?",
        answer:
          "We help with the technical side: data mapping, access controls, retention, consent records and breach readiness. We work alongside your legal advisers for legal interpretation.",
      },
      {
        question: "Which clouds do you work with?",
        answer:
          "AWS, Microsoft Azure, Google Cloud and self-hosted Linux infrastructure. We recommend based on your team, costs and data residency needs.",
      },
    ],
    relatedCaseStudies: ["eagrocare-connected-platform", "sujal-industries-digital-seo"],
    industries: ["public-sector", "professional-services", "education"],
  },
  {
    slug: "consultancy",
    title: "Consultancy",
    icon: "chat",
    summary: "Readiness sprints, architecture reviews and technical due diligence.",
    description:
      "A senior engineering partner for teams that need a clear sequence, not vague excitement: readiness sprints, architecture reviews and technical due diligence.",
    overview: [
      "Before you commit budget to a platform, a vendor or an AI programme, you need an honest view of where you stand and what to do first. Our consultancy work is designed to make the next move obvious.",
      "Engagements follow three phases, readiness, implementation and governance, and are run by engineers who build systems for a living, so recommendations come with a realistic plan to deliver them.",
    ],
    capabilities: [
      {
        title: "Readiness sprint",
        description:
          "A short, focused diagnostic that maps goals, constraints, data and team appetite into a clear starting point.",
      },
      {
        title: "Proof-of-value build",
        description:
          "A working slice of the highest-leverage idea, shaped around your data and constraints, in a matter of weeks.",
      },
      {
        title: "Architecture review",
        description:
          "An independent review of an existing or planned system for scalability, security and cost.",
      },
      {
        title: "Technical due diligence",
        description:
          "Code, infrastructure and team assessments for investors and acquirers, with plain-language findings.",
      },
      {
        title: "Embedded engineering",
        description:
          "PRAVAHAx engineers work inside your team rhythm so capability transfers with the work.",
      },
      {
        title: "Advisory retainer",
        description:
          "Ongoing senior guidance for leadership on technology choices, vendors and hiring.",
      },
    ],
    approach: [
      {
        title: "Readiness",
        description:
          "Opportunity framing, risk mapping, architecture direction and pilot definition.",
      },
      {
        title: "Implementation",
        description: "Proof builds, workflow design, data foundations and integration planning.",
      },
      {
        title: "Governance",
        description: "Evaluation frameworks, access patterns, documentation and iteration cadence.",
      },
    ],
    faqs: [
      {
        question: "How long is a readiness sprint?",
        answer:
          "Typically two to three weeks, ending with a written assessment, a prioritised roadmap and a recommended first project.",
      },
      {
        question: "Are we obliged to use PRAVAHAx for the build?",
        answer:
          "No. Recommendations are vendor-neutral, and the roadmap is yours to execute with any team you choose.",
      },
      {
        question: "Do you sign NDAs before the first conversation?",
        answer: "Yes. We are happy to sign a mutual NDA before any detailed discussion.",
      },
    ],
    relatedCaseStudies: ["sujal-industries-digital-seo", "mahindra-maintenance-intelligence"],
    industries: ["manufacturing", "public-sector", "professional-services"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
