import type { Metadata } from 'next';
import InvestorHero from '@/components/InvestorHero';
import InvestorTicker from '@/components/InvestorTicker';
import InvestorNewsGrid from '@/components/InvestorNewsGrid';
import InvestorRecentNews from '@/components/InvestorRecentNews';
import InvestorToolkit from '@/components/InvestorToolkit';
import InvestorInfoGrid from '@/components/InvestorInfoGrid';
import InvestorDocumentBrowser from '@/components/InvestorDocumentBrowser';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import { investorsCms } from '@/lib/investors-cms';
import { investorCategories, investorStandalone } from '@/lib/investors';
import { committees } from '@/lib/investors-committees';

export const metadata: Metadata = {
  title: investorsCms.meta.title,
  description: investorsCms.meta.description,
};

export default function InvestorsPage() {
  const cms = investorsCms;

  return (
    <>
      <InvestorHero
        eyebrow={cms.hero.eyebrow}
        headline={cms.hero.headline}
        subheadline={cms.hero.subheadline}
        ctaPrimary={cms.hero.ctaPrimary}
        ctaSecondary={cms.hero.ctaSecondary}
      />

      <InvestorTicker items={cms.ticker.items} />

      <section id="governance" className="band">
        <div className="wrap">
          <Reveal className="flagship">
            <div className="glow" aria-hidden />
            <div className="flagship-inner">
              <div className="flagship-left">
                <span className="flag-tag">
                  <i aria-hidden />
                  {cms.governanceQuote.tag}
                </span>
                <h3>Our governance philosophy</h3>
                <p className="tag mono">Ethics · Compliance · Accountability</p>
                <p className="body">{cms.governanceQuote.quote}</p>
              </div>
              <div className="rail-caps">
                {investorStandalone.map((s) => (
                  <a key={s.href} href={s.href} target="_blank" rel="noreferrer" className="rail-cap">
                    <span className="n">↓</span>
                    <span className="t">{s.label}</span>
                  </a>
                ))}
                <a href="#committees" className="rail-cap">
                  <span className="n">→</span>
                  <span className="t">Board Committees</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <InvestorNewsGrid
        eyebrow={cms.latestNews.eyebrow}
        title={cms.latestNews.title}
        viewAllHref={cms.latestNews.viewAllHref}
        items={cms.latestNews.items}
      />

      <InvestorRecentNews
        eyebrow={cms.recentNews.eyebrow}
        title={cms.recentNews.title}
        items={cms.recentNews.items}
      />

      <InvestorToolkit
        eyebrow={cms.toolkit.eyebrow}
        title={cms.toolkit.title}
        lead={cms.toolkit.lead}
        items={cms.toolkit.items}
      />

      <InvestorInfoGrid
        eyebrow={cms.investorInfo.eyebrow}
        title={cms.investorInfo.title}
        links={cms.investorInfo.links}
      />

      <section id="documents" className="band">
        <div className="wrap">
          <Reveal as="div" className="sec-num">
            {cms.documentBrowser.eyebrow}
          </Reveal>
          <Reveal as="h2" className="sec-title">
            {cms.documentBrowser.title}
          </Reveal>
          <Reveal as="p" className="sec-lead">
            {cms.documentBrowser.lead}
          </Reveal>
          <InvestorDocumentBrowser categories={investorCategories} />
        </div>
      </section>

      <section id="committees" className="band light">
        <div className="wrap">
          <Reveal as="div" className="sec-num">
            {cms.committees.eyebrow}
          </Reveal>
          <Reveal as="h2" className="sec-title">
            {cms.committees.title}
          </Reveal>
          <div className="card-grid" style={{ marginTop: 40 }}>
            {committees.map((c, i) => (
              <Reveal key={c.name} delay={i * 60}>
                <div className="why">
                  <h5>{c.name}</h5>
                  <table className="committee-table">
                    <tbody>
                      {c.members.map((m) => (
                        <tr key={m.name}>
                          <td>{m.name}</td>
                          <td className="mono" style={{ color: 'var(--muted-2)', fontSize: 12 }}>
                            {m.designation}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={cms.contactCta.title}
        text={cms.contactCta.text}
        primaryLabel={cms.contactCta.primaryLabel}
        primaryHref={cms.contactCta.primaryHref}
        secondaryLabel={cms.contactCta.secondaryLabel}
        secondaryHref={cms.contactCta.secondaryHref}
      />
    </>
  );
}
