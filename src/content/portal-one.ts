import type { Capability, Step } from "@/types";
import type { IconName } from "@/components/ui/Icon";

export const portalOneHighlights = [
  "Multi-tenant with SSO",
  "Timesheets and utilisation",
  "Leave and attendance with geo-check",
  "Role-based access and audit logs",
] as const;

export const portalOneFeatures: (Capability & { icon: IconName })[] = [
  {
    title: "One workspace",
    icon: "layers",
    description:
      "Attendance, leave, timesheets, projects and people in one place, with one login for every employee.",
  },
  {
    title: "Built for services firms",
    icon: "professional-services",
    description:
      "Utilisation, bench and project budget health designed around how IT and services companies run.",
  },
  {
    title: "Enterprise-grade security",
    icon: "shield",
    description:
      "Tenant isolation, single sign-on, role-based access and audit logs that stand up to client questionnaires.",
  },
  {
    title: "Fast on any device",
    icon: "signal",
    description:
      "Responsive web app for desktop and mobile, so field and office teams use the same system.",
  },
];

export const portalOneModules: (Capability & { icon: IconName })[] = [
  {
    title: "Attendance and geo-check",
    icon: "pin",
    description:
      "Check-in and check-out with optional location verification for field, hybrid and on-site teams.",
  },
  {
    title: "Leave",
    icon: "calendar",
    description:
      "Leave policies, balances, approvals and holiday calendars configured per entity and location.",
  },
  {
    title: "Timesheets and utilisation",
    icon: "clock",
    description:
      "Time capture against projects and tasks, with billable utilisation and bench reports for leadership.",
  },
  {
    title: "Projects",
    icon: "briefcase",
    description:
      "Project setup, allocations and budget health, linked directly to the time your teams record.",
  },
  {
    title: "People",
    icon: "users",
    description:
      "Employee records, reporting lines and documents with privacy controls on personal data.",
  },
  {
    title: "SSO and multi-tenant",
    icon: "layers",
    description:
      "Sign in with your identity provider. Each customer runs in its own isolated tenant database.",
  },
  {
    title: "RBAC and audit logs",
    icon: "lock",
    description:
      "Granular roles and permissions, with an audit trail of who viewed or changed what, and when.",
  },
];

export const portalOneSteps: Step[] = [
  {
    title: "Set up your tenant",
    description: "We provision an isolated workspace and connect your identity provider for SSO.",
  },
  {
    title: "Configure policies",
    description: "Import people, define roles, leave policies, holiday calendars and projects.",
  },
  {
    title: "Roll out to teams",
    description:
      "Employees sign in with existing credentials and start recording time and attendance.",
  },
  {
    title: "Run on insight",
    description: "Leaders track utilisation, bench and project health from live dashboards.",
  },
];

export const portalOneSecurity: Capability[] = [
  {
    title: "Database-per-tenant isolation",
    description:
      "Each customer's data lives in its own Postgres database with its own credentials.",
  },
  {
    title: "Single sign-on",
    description:
      "Sign in through your existing identity provider, so access follows your joiner and leaver process.",
  },
  {
    title: "Least-privilege access",
    description:
      "Role-based permissions down to module and action, reviewed with your administrators.",
  },
  {
    title: "Audit logging",
    description:
      "Records of sign-ins, data access and configuration changes, available to your administrators.",
  },
  {
    title: "Encryption",
    description:
      "Data encrypted in transit with TLS, with encrypted storage on supported hosting options.",
  },
  {
    title: "DPDP-aware by design",
    description:
      "Data minimisation, purpose limitation and access to personal data restricted to those who need it.",
  },
];
