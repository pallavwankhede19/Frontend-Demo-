"use client";

import Link from "next/link";
import { useId, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { Icon } from "@/components/ui/Icon";
import {
  contactSchema,
  toFieldErrors,
  type ContactFieldErrors,
  type ContactTopic,
} from "@/lib/contact-schema";

interface TopicConfig {
  id: ContactTopic;
  label: string;
  intro: string;
  interestLabel?: string;
  interestOptions?: string[];
  messageLabel: string;
}

const topicConfig: Record<ContactTopic, TopicConfig> = {
  general: {
    id: "general",
    label: "General",
    intro: "Questions about PRAVAHAx, partnerships or anything else.",
    messageLabel: "How can we help?",
  },
  services: {
    id: "services",
    label: "Services",
    intro: "Tell us about the system you want to build, modernise or support.",
    interestLabel: "Service of interest",
    interestOptions: [
      "Software Engineering",
      "AI & Automation",
      "Hardware & IoT",
      "Enterprise Solutions",
      "Cloud, Data & Security",
      "Not sure yet",
    ],
    messageLabel: "What are you building?",
  },
  consultancy: {
    id: "consultancy",
    label: "Consultancy",
    intro: "Readiness sprints, architecture reviews and technical due diligence.",
    interestLabel: "Engagement format",
    interestOptions: [
      "Readiness sprint",
      "Proof-of-value build",
      "Architecture review",
      "Technical due diligence",
      "Embedded engineering",
      "Advisory retainer",
    ],
    messageLabel: "What decision are you facing?",
  },
  research: {
    id: "research",
    label: "Research",
    intro: "Collaborations with universities, labs and industry research teams.",
    interestLabel: "Research area",
    interestOptions: [
      "Applied AI and evaluation",
      "Edge AI and IoT",
      "Multi-tenant systems",
      "Education and training",
      "Other",
    ],
    messageLabel: "Describe the research thread",
  },
  careers: {
    id: "careers",
    label: "Careers",
    intro: "Tell us what you build and the kind of work you want next.",
    interestLabel: "Area of interest",
    interestOptions: [
      "Applied AI engineering",
      "Product engineering",
      "Research & education",
      "Internship",
    ],
    messageLabel: "What do you want to work on?",
  },
  demo: {
    id: "demo",
    label: "Portal One demo",
    intro: "See Portal One with your own team structure and policies.",
    interestLabel: "Company size",
    interestOptions: [
      "1–50 employees",
      "51–200 employees",
      "201–1,000 employees",
      "1,000+ employees",
    ],
    messageLabel: "What would you like to see in the demo?",
  },
};

interface ContactFormProps {
  /** Topics shown as tabs. A single topic hides the tab list. */
  topics?: ContactTopic[];
  defaultTopic?: ContactTopic;
  submitLabel?: string;
}

type Status =
  { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; message: string };

/** Tabbed enquiry form with client-side validation, posting JSON to /api/contact. */
export function ContactForm({
  topics = ["general", "services", "consultancy", "research", "careers"],
  defaultTopic,
  submitLabel = "Send message",
}: ContactFormProps) {
  const [topic, setTopic] = useState<ContactTopic>(defaultTopic ?? topics[0] ?? "general");
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const formRef = useRef<HTMLFormElement>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const uid = useId();
  const config = topicConfig[topic];
  const showTabs = topics.length > 1;
  const fid = (name: string) => `${uid}-${name}`;

  function selectTab(index: number) {
    const next = topics[index];
    if (!next) return;
    setTopic(next);
    setErrors({});
    setStatus({ kind: "idle" });
    tabRefs.current[index]?.focus();
  }

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = topics.length - 1;
    const map: Record<string, number> = {
      ArrowRight: index === last ? 0 : index + 1,
      ArrowLeft: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    };
    const target = map[event.key];
    if (target !== undefined) {
      event.preventDefault();
      selectTab(target);
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      topic,
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      company: String(data.get("company") ?? ""),
      phone: String(data.get("phone") ?? ""),
      interest: String(data.get("interest") ?? ""),
      message: String(data.get("message") ?? ""),
      consent: data.get("consent") === "on",
      website: String(data.get("website") ?? ""),
    };

    const parsed = contactSchema.safeParse(payload);
    const fieldErrors: ContactFieldErrors = parsed.success ? {} : toFieldErrors(parsed.error);
    if (config.interestOptions && !payload.interest) {
      fieldErrors.interest = "Please choose an option.";
    }
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      setStatus({ kind: "idle" });
      const firstKey = Object.keys(fieldErrors)[0];
      if (firstKey) {
        (form.elements.namedItem(firstKey) as HTMLElement | null)?.focus();
      }
      return;
    }

    setErrors({});
    setStatus({ kind: "sending" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { ok: boolean; error?: string };
      if (!response.ok || !result.ok) {
        throw new Error(result.error ?? "Something went wrong.");
      }
      setStatus({ kind: "sent" });
      formRef.current?.reset();
    } catch {
      setStatus({
        kind: "error",
        message: "We could not send your message. Please try again, or email hello@pravahax.com.",
      });
    }
  }

  const describedBy = (name: keyof ContactFieldErrors) =>
    errors[name] ? `${fid(name)}-err` : undefined;

  function fieldError(name: keyof ContactFieldErrors) {
    return errors[name] ? (
      <p className="x-field__err" id={`${fid(name)}-err`}>
        {errors[name]}
      </p>
    ) : null;
  }

  return (
    <div>
      {showTabs ? (
        <div className="x-tabs" role="tablist" aria-label="Enquiry type">
          {topics.map((t, index) => (
            <button
              key={t}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              className="x-tab"
              type="button"
              role="tab"
              id={fid(`tab-${t}`)}
              aria-selected={topic === t}
              aria-controls={fid("panel")}
              tabIndex={topic === t ? 0 : -1}
              onClick={() => selectTab(index)}
              onKeyDown={(e) => onTabKeyDown(e, index)}
            >
              {topicConfig[t].label}
            </button>
          ))}
        </div>
      ) : null}
      <div
        id={fid("panel")}
        role={showTabs ? "tabpanel" : undefined}
        aria-labelledby={showTabs ? fid(`tab-${topic}`) : undefined}
      >
        <p className="text-ink mb-8 text-lg">{config.intro}</p>
        <form
          ref={formRef}
          className="x-form"
          noValidate
          onSubmit={onSubmit}
          aria-describedby={fid("req")}
        >
          <p id={fid("req")} className="text-muted text-sm">
            All fields are required unless marked optional.
          </p>
          <div className="x-form__grid">
            <div className="x-field">
              <label htmlFor={fid("name")}>Full name</label>
              <input
                id={fid("name")}
                name="name"
                autoComplete="name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={describedBy("name")}
              />
              {fieldError("name")}
            </div>
            <div className="x-field">
              <label htmlFor={fid("email")}>Work email</label>
              <input
                id={fid("email")}
                name="email"
                type="email"
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={describedBy("email")}
              />
              {fieldError("email")}
            </div>
            <div className="x-field">
              <label htmlFor={fid("company")}>
                {topic === "careers" ? "College or current company" : "Organisation"}{" "}
                <span className="x-opt">(optional)</span>
              </label>
              <input
                id={fid("company")}
                name="company"
                autoComplete="organization"
                aria-invalid={Boolean(errors.company)}
                aria-describedby={describedBy("company")}
              />
              {fieldError("company")}
            </div>
            <div className="x-field">
              <label htmlFor={fid("phone")}>
                Phone <span className="x-opt">(optional)</span>
              </label>
              <input
                id={fid("phone")}
                name="phone"
                type="tel"
                autoComplete="tel"
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={describedBy("phone")}
              />
              {fieldError("phone")}
            </div>
          </div>
          {config.interestOptions ? (
            <div className="x-field">
              <label htmlFor={fid("interest")}>{config.interestLabel}</label>
              <select
                key={topic}
                id={fid("interest")}
                name="interest"
                defaultValue=""
                aria-invalid={Boolean(errors.interest)}
                aria-describedby={describedBy("interest")}
              >
                <option value="" disabled>
                  Select an option
                </option>
                {config.interestOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {fieldError("interest")}
            </div>
          ) : null}
          <div className="x-field">
            <label htmlFor={fid("message")}>{config.messageLabel}</label>
            <textarea
              id={fid("message")}
              name="message"
              rows={6}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={describedBy("message")}
            />
            {fieldError("message")}
          </div>
          <div className="x-sr" aria-hidden="true">
            <label htmlFor={fid("website")}>Leave this field empty</label>
            <input id={fid("website")} name="website" tabIndex={-1} autoComplete="off" />
          </div>
          <div className="x-field">
            <label className="x-check" htmlFor={fid("consent")}>
              <input
                id={fid("consent")}
                name="consent"
                type="checkbox"
                aria-invalid={Boolean(errors.consent)}
                aria-describedby={describedBy("consent")}
              />
              <span>
                I agree that PRAVAHAx may use these details to respond to my enquiry, as described
                in the <Link href="/privacy-policy">Privacy Statement</Link>.
              </span>
            </label>
            {fieldError("consent")}
          </div>
          <div aria-live="polite" role="status">
            {status.kind === "sent" ? (
              <p className="x-alert x-alert--ok">
                Thank you. Your message has been received.{" "}
                {"Our team responds within one business day."}
              </p>
            ) : null}
            {status.kind === "error" ? (
              <p className="x-alert x-alert--err">{status.message}</p>
            ) : null}
          </div>
          <div>
            <button
              className="x-btn x-btn--primary"
              type="submit"
              disabled={status.kind === "sending"}
            >
              {status.kind === "sending" ? "Sending…" : submitLabel} <Icon name="arrow" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
