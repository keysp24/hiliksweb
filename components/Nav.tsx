'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { primaryNav, company } from '@/lib/site';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // A nav item matches when the path equals its href or is nested under it
  // (with a real "/" boundary, so "/industries" doesn't match "/industries-x").
  const matches = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/');

  // Only the MOST SPECIFIC match should be active. Railways (/industries/railways)
  // is nested under Industries (/industries) but is its own nav item, so on a
  // Railways route both prefixes match — pick the longest href so only Railways
  // (not Industries) lights up.
  const activeHref = primaryNav
    .map((n) => n.href)
    .filter(matches)
    .sort((a, b) => b.length - a.length)[0];

  const isActive = (href: string) => href === activeHref;

  return (
    <>
      <header className={scrolled ? 'scrolled' : ''} id="hdr">
        <div className="wrap nav">
          <Link href="/" className="brand" data-c>
            <Image
              src="/images/hiliks-logo.png"
              alt="Hiliks Technologies"
              width={1532}
              height={523}
              className="logo-img"
              style={{ height: 40, width: 'auto' }}
              priority
            />
          </Link>
          <nav>
            <ul>
              {primaryNav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className={isActive(n.href) ? 'active' : ''} data-c>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link href="/contact" className="nav-cta" data-c>Talk to Experts</Link>
          <button
            className={`burger ${open ? 'open' : ''}`}
            id="burger"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`mmenu ${open ? 'open' : ''}`} id="mmenu">
        <div className="mmenu-top">
          <Link href="/" className="brand" data-c onClick={() => setOpen(false)} aria-label="Hiliks home">
            <Image
              src="/images/hiliks-logo.png"
              alt="Hiliks Technologies"
              width={1532}
              height={523}
              className="logo-img"
              style={{ height: 34, width: 'auto' }}
            />
          </Link>
          <button className="mmenu-close" aria-label="Close menu" onClick={() => setOpen(false)} data-c>
            <span /><span />
          </button>
        </div>
        <div className="mmenu-links">
          <Link href="/industries/railways">Railways<span className="mono">01</span></Link>
          <Link href="/industries">Industries<span className="mono">02</span></Link>
          <Link href="/solutions">Solutions<span className="mono">03</span></Link>
          <Link href="/about">Why Hiliks<span className="mono">04</span></Link>
          <Link href="/ecosystem">Ecosystem<span className="mono">05</span></Link>
          <Link href="/contact" className="mcta" onClick={() => setOpen(false)}>Talk to Experts &rarr;</Link>
        </div>
      </div>
    </>
  );
}
