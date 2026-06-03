import Link from 'next/link';
import Image from 'next/image';
import { company } from '@/lib/site';

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
        </div>

        <div className="foot-cols">
          <div className="foot-col">
            <h6>Industries</h6>
            <Link href="/industries/railways" data-c>Railways</Link>
            <Link href="/industries/telecom" data-c>Telecom</Link>
            <Link href="/industries/bfsi" data-c>BFSI</Link>
            <Link href="/industries/public-sector" data-c>Public Sector</Link>
            <Link href="/industries/energy-utilities" data-c>Energy &amp; Utilities</Link>
          </div>
          <div className="foot-col">
            <h6>Solutions</h6>
            <Link href="/solutions/digital-engineering" data-c>Digital Engineering</Link>
            <Link href="/solutions/ai-analytics" data-c>AI &amp; Analytics</Link>
            <Link href="/solutions/intelligent-automation" data-c>Automation</Link>
            <Link href="/solutions/managed-services" data-c>Managed Services</Link>
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
