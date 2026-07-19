import Link from 'next/link';
import Image from 'next/image';
import { company, capabilities } from '@/lib/site';

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <div className="meta">
          <div className="brand" style={{ marginBottom: 18 }}>
            <Image
              src="/images/hiliks-logo.png"
              alt="Hiliks Technologies"
              width={1532}
              height={523}
              className="logo-img"
              style={{ height: 40, width: 'auto' }}
            />
          </div>
          <div>
            <b>{company.address}</b><br />
            {company.city}<br />
            {company.email}&nbsp;&middot;&nbsp;{company.phone}<br />
            Offices: {company.offices}
          </div>
          {/* NOTE: update these URLs to Hiliks' real social profiles */}
          <div className="socials">
            <a href="https://www.linkedin.com/company/hiliks-technologies/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" data-c>
              <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21h-4z"/></svg>
            </a>
            <a href="https://x.com/hiliks" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" data-c>
              <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.instagram.com/hiliks/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-c>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="https://www.youtube.com/@hiliks" target="_blank" rel="noopener noreferrer" aria-label="YouTube" data-c>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden><rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10 9.4l5 2.6-5 2.6z" fill="currentColor" stroke="none"/></svg>
            </a>
          </div>
        </div>

        <div className="foot-cols">
          <div className="foot-col">
            <h6>Industries</h6>
            <Link href="/industries/railways" data-c>Railways</Link>
            <Link href="/industries/telecom" data-c>Telecom</Link>
            <Link href="/industries/bfsi" data-c>BFSI</Link>
            <Link href="/industries/public-sector" data-c>Public Sector</Link>
          </div>
          <div className="foot-col">
            <h6>Solutions</h6>
            {capabilities.map((cap) => (
              <Link key={cap.slug} href={`/solutions/${cap.slug}`} data-c>
                {cap.name}
              </Link>
            ))}
          </div>
          <div className="foot-col">
            <h6>Company</h6>
            <Link href="/about" data-c>About</Link>
            <Link href="/case-studies" data-c>Case Studies</Link>
            <Link href="/insights" data-c>Insights</Link>
            <Link href="/careers" data-c>Careers</Link>
          </div>
        </div>
      </div>
      <div className="wrap copy">
        &copy; 2025 {company.legal} &middot; {company.corporateLine}
      </div>
    </footer>
  );
}
