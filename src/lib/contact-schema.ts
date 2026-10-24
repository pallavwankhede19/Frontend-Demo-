import { z } from "zod";

export const contactTopics = [
  "general",
  "services",
  "consultancy",
  "research",
  "careers",
  "demo",
] as const;

export type ContactTopic = (typeof contactTopics)[number];

/** Shared by the browser form and the /api/contact route handler. */
export const contactSchema = z.object({
  topic: z.enum(contactTopics),
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Please keep your name under 100 characters."),
  email: z.string().trim().email("Please enter a valid email address."),
  company: z
    .string()
    .trim()
    .max(120, "Please keep this under 120 characters.")
    .optional()
    .default(""),
  phone: z
    .string()
    .trim()
    .regex(/^$|^[+0-9 ()-]{7,20}$/, "Please enter a valid phone number, or leave it blank.")
    .optional()
    .default(""),
  interest: z.string().trim().max(120).optional().default(""),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more (at least 10 characters).")
    .max(2000, "Please keep your message under 2,000 characters."),
  consent: z.literal(true, { error: "Please agree to the privacy policy so we can reply." }),
  /** Honeypot. Real visitors never see or fill this field. */
  website: z.string().max(200).optional().default(""),
});

export type ContactInput = z.input<typeof contactSchema>;
export type ContactPayload = z.output<typeof contactSchema>;

export type ContactFieldErrors = Partial<Record<keyof ContactInput, string>>;

/** Flattens zod issues into one message per field. */
export function toFieldErrors(error: z.ZodError): ContactFieldErrors {
  const errors: ContactFieldErrors = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (typeof key === "string" && !(key in errors)) {
      errors[key as keyof ContactInput] = issue.message;
    }
  }
  return errors;
}
