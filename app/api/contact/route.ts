import { NextResponse } from 'next/server';
import { company, inquiryRouting, inquiryFallbackEmail } from '@/lib/site';

/**
 * Contact form handler.
 *
 * Receives an inquiry, routes it to the right per-vertical inbox, and sends it
 * via Brevo's transactional email API (https://app.brevo.com). No SDK needed —
 * it calls the REST endpoint directly. Designed to degrade gracefully: if email
 * isn't configured yet (no BREVO_API_KEY), it returns 503 with a clear code so
 * the client can fall back to a mailto: draft — nothing is lost.
 *
 * Required env vars (set later in Vercel → Settings → Environment Variables):
 *   BREVO_API_KEY       — your Brevo API key (Brevo → SMTP & API → API Keys).
 *   CONTACT_FROM_EMAIL  — verified Brevo sender. Either a bare address
 *                         ("inquiries@hiliks.com") or "Name <address>". The
 *                         sender MUST be a verified sender/domain in Brevo.
 *                         Defaults to the company inbox if unset.
 */

type Payload = {
  route?: string;
  name?: string;
  company?: string;
  email?: string;
  message?: string;
  // Honeypot: real users never fill this hidden field; bots often do.
  website?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Parse "Name <email>" or a bare "email" into Brevo's sender shape. */
function parseSender(raw: string | undefined, fallbackEmail: string, fallbackName: string) {
  if (!raw) return { email: fallbackEmail, name: fallbackName };
  const m = raw.match(/^\s*(.*?)\s*<\s*([^>]+)\s*>\s*$/);
  if (m) return { name: m[1] || fallbackName, email: m[2].trim() };
  return { email: raw.trim(), name: fallbackName };
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid-json' }, { status: 400 });
  }

  const route = (body.route ?? '').trim();
  const name = (body.name ?? '').trim();
  const org = (body.company ?? '').trim();
  const email = (body.email ?? '').trim();
  const message = (body.message ?? '').trim();

  // Honeypot tripped → pretend success, send nothing.
  if (body.website && body.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: 'missing-fields' }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: 'invalid-email' }, { status: 400 });
  }

  const to = inquiryRouting[route] ?? inquiryFallbackEmail;
  const routeLabel = route || 'General';
  const subject = `[${routeLabel}] Inquiry — ${name}`;
  const text =
    `Inquiry routing: ${routeLabel}\n` +
    `Name: ${name}\n` +
    `Company: ${org || '—'}\n` +
    `Email: ${email}\n\n` +
    `${message}\n`;

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    // Not configured yet — tell the client to use its mailto fallback.
    return NextResponse.json(
      { ok: false, error: 'email-not-configured' },
      { status: 503 },
    );
  }

  const sender = parseSender(process.env.CONTACT_FROM_EMAIL, company.email, company.name);

  try {
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'accept': 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender,
        to: [{ email: to }],
        replyTo: { email, name },
        subject,
        textContent: text,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => '');
      console.error('Brevo send failed', res.status, detail);
      return NextResponse.json({ ok: false, error: 'send-failed' }, { status: 502 });
    }

    return NextResponse.json({ ok: true, routedTo: to });
  } catch (err) {
    console.error('Contact handler error', err);
    return NextResponse.json({ ok: false, error: 'send-failed' }, { status: 502 });
  }
}
