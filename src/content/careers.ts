import type { Capability, Step } from "@/types";
import type { IconName } from "@/components/ui/Icon";

export const hiringFlow: Step[] = [
  {
    title: "Signal your interest",
    description:
      "Tell us what you build, what you have learned from and what kind of work you want next.",
  },
  {
    title: "Meet the team",
    description: "A practical conversation with the people you would work alongside.",
  },
  {
    title: "Work through a problem",
    description: "A focused exercise based on real work so both sides can judge the fit clearly.",
  },
  {
    title: "Decide together",
    description:
      "You get an honest offer or an honest answer. Either way, you know where you stand.",
  },
];

export const openAreas: (Capability & { icon: IconName })[] = [
  {
    title: "Applied AI engineering",
    icon: "chip",
    description:
      "Systems that put intelligence to work with strong evaluation and delivery discipline.",
  },
  {
    title: "Product engineering",
    icon: "code",
    description: "Builders who can own outcomes from the first brief through operations.",
  },
  {
    title: "Research & education",
    icon: "education",
    description: "People who can push technical threads forward and teach what they learn.",
  },
];

export const internshipTracks: (Capability & { icon: IconName; label: string })[] = [
  {
    label: "AI / ML",
    title: "AI & Machine Learning",
    icon: "chip",
    description:
      "Build, fine-tune and evaluate models, agents and retrieval pipelines against real evaluation sets.",
  },
  {
    label: "Software & Systems",
    title: "Software & Systems Engineering",
    icon: "code",
    description:
      "Work on production web platforms, APIs and integrations with code review from senior engineers.",
  },
  {
    label: "Hardware / Embedded / IoT",
    title: "Hardware, Embedded & IoT",
    icon: "signal",
    description:
      "Firmware, sensors and edge devices for plants and fields, from prototype boards to field pilots.",
  },
  {
    label: "Cloud / Data / DevOps",
    title: "Cloud, Data & DevOps",
    icon: "cloud-check",
    description:
      "Infrastructure as code, data pipelines, CI/CD and observability for systems in production.",
  },
  {
    label: "Cybersecurity",
    title: "Cybersecurity",
    icon: "shield",
    description:
      "Threat modelling, security reviews and hardening under the guidance of practitioners.",
  },
  {
    label: "Enterprise Solutions",
    title: "Enterprise Solutions",
    icon: "briefcase",
    description:
      "HR, operations and ERP-adjacent workflows, including modules of our product Portal One.",
  },
];

export const internshipDurations: Capability[] = [
  {
    title: "2 months",
    description: "Summer internship. A focused project with a clear deliverable and demo.",
  },
  {
    title: "3 months",
    description: "Semester programme. Contribute to a live client system or research thread.",
  },
  {
    title: "6 months",
    description: "Full-time immersion. Own a feature or module from design through release.",
  },
];

export const internshipBenefits: Capability[] = [
  {
    title: "Real production ownership",
    description:
      "You work directly on client solutions and active R&D threads. No dummy projects or slide-deck exercises.",
  },
  {
    title: "1-on-1 senior mentorship",
    description:
      "Pair with experienced software, AI and systems engineers who guide your architecture and code reviews.",
  },
  {
    title: "Certificate & placement path",
    description:
      "Receive a formal certificate, project recommendations and direct consideration for full-time engineering roles.",
  },
];

export const lifeAtPravahax: Capability[] = [
  {
    title: "Ownership from day one",
    description:
      "Small teams mean real responsibility. You see your work reach users and you are trusted to improve it.",
  },
  {
    title: "Learning built into the work",
    description:
      "Teach as we build: code reviews, internal talks and research threads keep everyone growing.",
  },
  {
    title: "Honest feedback",
    description:
      "Clear expectations, regular one-to-ones and feedback given early, kindly and directly.",
  },
  {
    title: "Range of problems",
    description:
      "Move between software, AI, IoT and cloud work across manufacturing, agriculture, education and more.",
  },
  {
    title: "Sustainable pace",
    description:
      "We plan for steady delivery rather than heroics, because dependable systems need rested engineers.",
  },
  {
    title: "Built in India, for the world",
    description:
      "A Maharashtra-based team working with clients and technology that matter well beyond the region.",
  },
];
