'use client';
import { useState } from 'react';
import { verticals, company } from '@/lib/site';

const routes = [...verticals.map((v) => v.name), 'Partnerships'];

type Status = 'idle' | 'sending' | 'sent' | 'mailto' | 'error';

type Payload = {
  route: string;
  name: string;
  company: string;
  email: string;
  message: string;
  website: string;
};

export default function ContactForm() {
  const [route, setRoute] = useState(routes[0]);
  const [status, setStatus] = useState<Status>('idle');

  function openMailto(p: Payload) {
    const subject = encodeURIComponent(`[${p.route}] Inquiry — ${p.name}`);
    const body = encodeURIComponent(
      `Inquiry routing: ${p.route}\nName: ${p.name}\nCompany: ${p.company}\nEmail: ${p.email}\n\n${p.message}`,
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setStatus('mailto');
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload: Payload = {
      route,
      name: String(data.get('name') ?? ''),
      company: String(data.get('company') ?? ''),
      email: String(data.get('email') ?? ''),
      message: String(data.get('message') ?? ''),
      website: String(data.get('website') ?? ''), // honeypot
    };

    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus('sent');
        form.reset();
        return;
      }
      // 400 = validation problem we can show; anything else (email not yet
      // configured, send failure, network) → fall back to a mailto draft.
      if (res.status === 400) {
        setStatus('error');
        return;
      }
      openMailto(payload);
    } catch {
      openMailto(payload);
    }
  }

  const field: React.CSSProperties = {
    width: '100%', padding: '13px 15px', background: 'var(--ink-2)', border: '1px solid var(--line)',
    borderRadius: 'var(--r-sm)', color: 'var(--text)', font: 'inherit', fontSize: 14,
  };
  const label: React.CSSProperties = {
    fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase',
    color: 'var(--muted)', display: 'block', marginBottom: 8,
  };

  const sending = status === 'sending';

  return (
    <form onSubmit={onSubmit} style={{ display: 'grid', gap: 20, maxWidth: 560 }}>
      <div>
        <span style={label}>Inquiry routing</span>
        <div role="group" aria-label="Inquiry routing" style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {routes.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRoute(r)}
              data-c
              style={{
                padding: '11px 20px',
                borderRadius: 'var(--r-pill)',
                border: '1px solid',
                borderColor: route === r ? 'var(--orange)' : 'var(--line-2)',
                background: route === r ? 'rgba(242,104,14,.14)' : 'var(--ink-2)',
                color: 'var(--text)',
                fontFamily: 'var(--font-mono)',
                fontSize: 15,
                letterSpacing: '.04em',
                cursor: 'pointer',
                transition: '.25s',
              }}
            >
              {r}
            </button>
          ))}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div>
          <label style={label} htmlFor="name">Name</label>
          <input id="name" name="name" required style={field} />
        </div>
        <div>
          <label style={label} htmlFor="company">Company</label>
          <input id="company" name="company" style={field} />
        </div>
      </div>
      <div>
        <label style={label} htmlFor="email">Work email</label>
        <input id="email" name="email" type="email" required style={field} />
      </div>
      <div>
        <label style={label} htmlFor="message">How can we help?</label>
        <textarea id="message" name="message" rows={4} required style={{ ...field, resize: 'vertical' }} />
      </div>

      {/* Honeypot — hidden from users; bots that fill it are silently dropped. */}
      <div aria-hidden style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <button type="submit" className="btn btn-primary" data-c disabled={sending} style={{ justifySelf: 'start', opacity: sending ? 0.6 : 1 }}>
        {sending ? 'Sending…' : 'Send Inquiry →'}
      </button>

      {status === 'sent' && (
        <p className="mono" style={{ color: 'var(--orange)', fontSize: 13 }}>
          Thanks — your inquiry has been sent. We&apos;ll be in touch shortly.
        </p>
      )}
      {status === 'mailto' && (
        <p className="mono" style={{ color: 'var(--orange)', fontSize: 13 }}>
          Opening your email client…
        </p>
      )}
      {status === 'error' && (
        <p className="mono" style={{ color: 'var(--orange)', fontSize: 13 }}>
          Please add your name, a valid work email, and a message.
        </p>
      )}
    </form>
  );
}
