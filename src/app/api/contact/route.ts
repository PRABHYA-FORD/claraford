import { NextResponse } from 'next/server';
import { HONEYPOT_FIELD, validateContact, type ContactInput } from '@/lib/contact';

type Body = Partial<ContactInput> & { [HONEYPOT_FIELD]?: string };

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const LEAD_NOTIFY_EMAIL = process.env.LEAD_NOTIFY_EMAIL;
const RESEND_FROM = process.env.RESEND_FROM ?? 'ClaraFord <onboarding@resend.dev>';

/** Emails the lead to the team via Resend's REST API. */
async function sendLeadEmail(lead: ContactInput) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: RESEND_FROM,
      to: [LEAD_NOTIFY_EMAIL],
      reply_to: lead.email,
      subject: `Early access request: ${lead.company} (${lead.teamSize})`,
      text: [
        `Name:      ${lead.name}`,
        `Email:     ${lead.email}`,
        `Company:   ${lead.company}`,
        `Team size: ${lead.teamSize}`,
        '',
        lead.message || '(no message)',
      ].join('\n'),
    }),
  });
  if (!res.ok) throw new Error(`Resend responded ${res.status}: ${await res.text()}`);
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  // Bots fill every field; pretend success so they don't retry.
  if (body[HONEYPOT_FIELD]) return NextResponse.json({ ok: true }, { status: 201 });

  const errors = validateContact(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: 'Validation failed.', errors }, { status: 422 });
  }

  const lead: ContactInput = {
    name: body.name!.trim(),
    email: body.email!.trim(),
    company: body.company!.trim(),
    teamSize: body.teamSize!.trim(),
    message: (body.message ?? '').trim(),
  };

  if (!RESEND_API_KEY || !LEAD_NOTIFY_EMAIL) {
    // In production a lead must never be silently dropped, so fail loudly until email is configured.
    if (process.env.NODE_ENV === 'production') {
      console.error('[contact] RESEND_API_KEY / LEAD_NOTIFY_EMAIL not set; lead not delivered');
      return NextResponse.json({ error: 'Lead delivery is not configured.' }, { status: 503 });
    }
    console.info('[contact] dev mode, lead not emailed:', lead);
    return NextResponse.json({ ok: true }, { status: 201 });
  }

  try {
    await sendLeadEmail(lead);
  } catch (err) {
    console.error('[contact] failed to email lead', err);
    return NextResponse.json({ error: 'Could not deliver your request.' }, { status: 502 });
  }
  return NextResponse.json({ ok: true }, { status: 201 });
}
