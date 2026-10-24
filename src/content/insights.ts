import type { Insight } from "@/types";

export const insights: Insight[] = [
  {
    slug: "shipping-ai-features-that-survive-real-users",
    title: "Shipping AI features that survive real users",
    type: "Article",
    icon: "document",
    date: "2026-10",
    dateLabel: "Oct 2026",
    author: "PRAVAHAx Engineering",
    readingTime: "3 min read",
    summary:
      "A demo proves that something is possible. Production proves that it is useful. Here is the checklist we use before an AI feature meets real users.",
    body: [
      {
        paragraphs: [
          "Almost every AI feature looks good in a demo. The prompt is tuned for the examples in the room, the data is clean and the person driving knows which questions to avoid. Then the feature meets real users, and the gap between possible and dependable becomes very visible, very quickly.",
          "Over the last year we have shipped AI into maintenance logs, document workflows and internal tools. The features that survived had less to do with model choice than with the engineering around the model. These are the habits we now treat as non-negotiable.",
        ],
      },
      {
        heading: "Start with the workflow, not the model",
        paragraphs: [
          "The first question is not which model to use but which decision or task the feature changes, who does it today and how we will know it is better. If nobody can describe the current baseline, there is nothing to improve on, and no way to defend the feature when it is challenged.",
        ],
      },
      {
        heading: "Build the evaluation set before the feature",
        paragraphs: [
          "We collect a set of real cases, including the awkward ones, and agree the expected outcomes with the people who do the work. Every change to a prompt, model or retrieval step is run against that set. It turns arguments about whether the system feels better into a number that either moved or did not.",
          "The set grows every time a user reports a problem. A failure that is captured once should never reach a user twice.",
        ],
      },
      {
        heading: "Design for being wrong",
        paragraphs: [
          "Every model is sometimes wrong, so the product has to be designed for that. We show confidence where it helps, route uncertain cases to a person, and make it cheap to correct a result. A user who can fix an error in two clicks trusts the system more than one who never sees how it decides.",
        ],
      },
      {
        heading: "Keep a human accountable",
        paragraphs: [
          "AI can amplify judgment, but responsibility still needs a person who owns the outcome. For every feature we name an owner, log what the system suggested and what was finally decided, and review a sample of decisions on a regular cadence.",
        ],
      },
      {
        heading: "Measure in production",
        paragraphs: [
          "Offline accuracy is a starting point, not a verdict. We track how often suggestions are accepted, edited or rejected, how long tasks take, and where users abandon the flow. Those signals tell us whether the feature is actually useful, which is the only test that matters.",
          "None of this is glamorous. It is the difference between an AI feature people talk about at launch and one they still rely on a year later.",
        ],
      },
    ],
  },
  {
    slug: "multi-tenant-saas-on-postgres-database-per-tenant",
    title: "Multi-tenant SaaS on Postgres: database-per-tenant in practice",
    type: "Whitepaper",
    icon: "database",
    date: "2026-09",
    dateLabel: "Sep 2026",
    author: "PRAVAHAx Engineering",
    readingTime: "3 min read",
    summary:
      "Why we chose a database per tenant for Portal One, what it costs operationally, and the guardrails that make it work.",
    body: [
      {
        paragraphs: [
          "Every multi-tenant product has to decide where one customer's data ends and the next begins. The three common answers are a shared schema with a tenant column, a schema per tenant, or a database per tenant. For Portal One, our operations workspace for IT and services companies, we chose a separate Postgres database for each tenant. This paper explains why, and what we learned running it.",
        ],
      },
      {
        heading: "Why isolation won",
        paragraphs: [
          "Our customers hold attendance, leave and people records. Many of them answer security questionnaires from their own clients. A physical boundary between tenants is easy to explain, easy to audit and limits the impact of a bug in a query filter. It also lets us offer per-tenant backups, restores and data residency without special cases.",
          "A shared schema is cheaper at small scale, but a single missing WHERE clause can expose every customer. We preferred to pay for isolation in operations rather than risk it in application code.",
        ],
      },
      {
        heading: "What it costs",
        paragraphs: [
          "Database-per-tenant moves complexity into provisioning, migrations and connection management. Creating a tenant means creating a database, applying migrations and registering credentials. Schema changes must roll out across every tenant, and connection pools must be bounded so hundreds of databases do not exhaust the server.",
        ],
      },
      {
        heading: "Guardrails that make it work",
        paragraphs: [
          "First, a control plane owns the tenant registry, credentials and migration state, and application services never choose a database by name from user input. Second, migrations are backwards-compatible and applied in waves, with automatic halt on failure. Third, each tenant has its own least-privilege role, so a service connected to one tenant cannot read another.",
          "We also run a shared pooler with per-tenant limits, monitor slow queries per tenant, and test restores regularly rather than assuming backups work.",
        ],
      },
      {
        heading: "When we would choose differently",
        paragraphs: [
          "For products with thousands of very small tenants and little sensitive data, a shared schema with row-level security is often the better trade. Database-per-tenant fits best when tenants are businesses, data is sensitive, and customers value a clear, auditable boundary. For Portal One, that is exactly the situation.",
        ],
      },
    ],
  },
  {
    slug: "edge-inference-on-esp32-class-hardware",
    title: "Edge inference on ESP32-class hardware",
    type: "Research",
    icon: "chip-plain",
    date: "2026-08",
    dateLabel: "Aug 2026",
    author: "PRAVAHAx Research",
    readingTime: "3 min read",
    summary:
      "What small machine learning models can realistically do on low-cost microcontrollers, and how we evaluate them for plant and field deployments.",
    body: [
      {
        paragraphs: [
          "Many of the sites we work with, from plant floors to farms, have unreliable connectivity and tight budgets. Sending every sensor reading to the cloud is expensive, slow and fragile. Running small models directly on low-cost microcontrollers such as the ESP32 family offers a practical alternative. This note summarises our current research and the evaluation method we use.",
        ],
      },
      {
        heading: "What fits on the device",
        paragraphs: [
          "ESP32-class chips have limited RAM and flash and no dedicated accelerator on most variants. That rules out large models but leaves room for compact ones: anomaly detection on vibration signals, simple audio event classification, and small image classifiers on low-resolution frames. Quantising weights to 8-bit integers is usually essential, and careful feature extraction often matters more than model size.",
        ],
      },
      {
        heading: "Why edge inference helps",
        paragraphs: [
          "Processing data where it is produced means devices send events rather than raw streams, which cuts bandwidth and cloud costs. Decisions such as raising a local alarm continue to work when the network is down. Raw data that never leaves the device is also easier to protect.",
        ],
      },
      {
        heading: "How we evaluate",
        paragraphs: [
          "We test every candidate model on three axes: accuracy against a labelled set collected on site, latency and memory on the target hardware, and energy use per inference for battery-powered devices. A model that is slightly less accurate but runs reliably within its memory budget is usually the better choice.",
          "We also evaluate behaviour over time. Sensors drift, machines are serviced and seasons change, so we log model outputs alongside periodic raw samples to detect when retraining is needed.",
        ],
      },
      {
        heading: "Open questions",
        paragraphs: [
          "Our current work focuses on safe over-the-air model updates for device fleets, on-device calibration to reduce per-site training effort, and combining edge models with cloud analytics so each does what it is best at.",
          "Edge inference will not replace cloud AI, but for many industrial and agricultural problems it is the most practical place to start. We publish results as the research matures.",
        ],
      },
    ],
  },
];

export function getInsight(slug: string): Insight | undefined {
  return insights.find((insight) => insight.slug === slug);
}
