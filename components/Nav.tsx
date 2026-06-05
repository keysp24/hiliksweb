'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';
import { primaryNav, company, verticals, capabilities } from '@/lib/site';
import IndustryGlyph from './IndustryGlyph';
import MegaMenu, { type MegaItem } from './MegaMenu';

// Which top-nav labels open a mega panel, and where each panel's data comes from.
type MegaKey = 'industries' | 'solutions';
const MEGA_LABELS: Record<string, MegaKey> = { Industries: 'industries', Solutions: 'solutions' };

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // Which mega panel is open (desktop), or null. Only one at a time.
  const [openMega, setOpenMega] = useState<MegaKey | null>(null);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const openTimer = useRef<number | undefined>(undefined);
  const closeTimer = useRef<number | undefined>(undefined);

  // Build the two panels' items from the existing site data.
  const megaItems = useMemo<Record<MegaKey, MegaItem[]>>(
    () => ({
      industries: verticals.map((v) => ({
        name: v.name,
        href: `/industries/${v.slug}`,
        blurb: v.tagline,
        accentVar: v.accentVar,
        icon: <IndustryGlyph slug={v.slug} />,
      })),
      solutions: capabilities.map((c) => ({
        name: c.name,
        href: `/solutions/${c.slug}`,
        blurb: c.blurb,
        accentVar: '--orange',
        icon: (
          <svg className="mcap" viewBox="0 0 24 24" aria-hidden>
            <path d={c.icon} />
          </svg>
        ),
      })),
    }),
    [],
  );

  const megaMeta: Record<MegaKey, { href: string; viewAll: string }> = {
    industries: { href: '/industries', viewAll: 'View all Industries' },
    solutions: { href: '/solutions', viewAll: 'View all Solutions' },
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close both menus on route change.
  useEffect(() => {
    setOpen(false);
    setOpenMega(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // While a mega panel is open: close on Escape or any click/tap outside the header.
  useEffect(() => {
    if (!openMega) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenMega(null);
    };
    const onDown = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpenMega(null);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onDown);
    };
  }, [openMega]);

  const clearTimers = () => {
    if (openTimer.current) window.clearTimeout(openTimer.current);
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  };
  // Hover open/close with small delays (mouse only — touch uses the click toggle).
  const hoverOpen = (key: MegaKey) => {
    if (window.matchMedia('(hover: none)').matches) return;
    clearTimers();
    openTimer.current = window.setTimeout(() => setOpenMega(key), 80);
  };
  const hoverClose = () => {
    if (window.matchMedia('(hover: none)').matches) return;
    clearTimers();
    closeTimer.current = window.setTimeout(() => setOpenMega(null), 150);
  };
  const toggleMega = (key: MegaKey) => {
    clearTimers();
    setOpenMega((cur) => (cur === key ? null : key));
  };

  useEffect(() => clearTimers, []);

  const matches = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/');

  const activeHref = primaryNav
    .map((n) => n.href)
    .filter(matches)
    .sort((a, b) => b.length - a.length)[0];

  const isActive = (href: string) => href === activeHref;

  return (
    <>
      <header className={scrolled ? 'scrolled' : ''} id="hdr" ref={headerRef}>
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
              {primaryNav.map((n) => {
                const key = MEGA_LABELS[n.label];
                if (!key) {
                  return (
                    <li key={n.href}>
                      <Link href={n.href} className={isActive(n.href) ? 'active' : ''} data-c>
                        {n.label}
                      </Link>
                    </li>
                  );
                }
                const isOpen = openMega === key;
                return (
                  <li
                    key={n.href}
                    className={`has-mega${isOpen ? ' open' : ''}`}
                    onMouseEnter={() => hoverOpen(key)}
                    onMouseLeave={hoverClose}
                  >
                    <button
                      type="button"
                      className={`mega-trigger${isActive(n.href) ? ' active' : ''}`}
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                      aria-controls={`mega-${key}`}
                      data-c
                      onClick={() => toggleMega(key)}
                    >
                      {n.label}
                      <svg className="mega-caret" viewBox="0 0 24 24" aria-hidden>
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    <MegaMenu
                      panelId={`mega-${key}`}
                      items={megaItems[key]}
                      viewAllHref={megaMeta[key].href}
                      viewAllLabel={megaMeta[key].viewAll}
                      onItem={() => setOpenMega(null)}
                    />
                  </li>
                );
              })}
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
