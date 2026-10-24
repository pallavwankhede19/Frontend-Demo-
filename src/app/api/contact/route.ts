import { NextResponse } from "next/server";
import { contactSchema, toFieldErrors } from "@/lib/contact-schema";

/**
 * Contact form endpoint (stub). Validates the payload with zod and returns { ok: true }.
 * TODO: forward valid submissions to the CRM or an email provider (e.g. Resend, SES).
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed.", fieldErrors: toFieldErrors(result.error) },
      { status: 422 },
    );
  }

  // Honeypot filled: accept silently so bots get no signal, but do not process.
  if (result.data.website) {
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ ok: true });
}

export function GET() {
  return NextResponse.json(
    { ok: false, error: "Method not allowed." },
    { status: 405, headers: { Allow: "POST" } },
  );
}
