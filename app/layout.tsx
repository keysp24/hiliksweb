import type { Metadata } from 'next';
import './globals.css';
import LenisProvider from '@/components/LenisProvider';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';
import ScrollProgress from '@/components/ScrollProgress';
import ScrollVelocitySkew from '@/components/ScrollVelocitySkew';
import SectionIndicator from '@/components/SectionIndicator';
import PageLoader from '@/components/PageLoader';
import { company } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hiliks.com'),
  title: {
    default: `${company.name} — ${company.tagline}`,
    template: `%s · ${company.name}`,
  },
  description:
    'Hiliks Technologies — a niche, engineering-led enterprise technology company for critical industries, with a flagship Railways practice. Serving railways, telecom, BFSI and public sector across India and the GCC.',
  keywords: [
    'Hiliks', 'railway signaling', 'Kavach', 'TCAS', 'enterprise technology',
    'digital engineering', 'GCC', 'telecom OSS BSS', 'predictive maintenance',
  ],
  openGraph: {
    title: `${company.name} — ${company.tagline}`,
    description: company.corporateLine,
    type: 'website',
    locale: 'en_IN',
    siteName: company.name,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* The pre-loader overlay is server-rendered so it covers the page from
            the first paint; JS fades it out once loading completes. If JS is
            disabled it would never fade, so hide it for no-JS users.
            dangerouslySetInnerHTML avoids React trying to hydrate <noscript>
            children (which browsers parse as text when JS is on → mismatch). */}
        <noscript dangerouslySetInnerHTML={{ __html: '<style>#page-loader{display:none!important}</style>' }} />
      </head>
      <body>
        <LenisProvider>
          <PageLoader />
          <ScrollVelocitySkew />
          <div className="scan" aria-hidden />
          <ScrollProgress />
          <Cursor />
          <Nav />
          <SectionIndicator />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
