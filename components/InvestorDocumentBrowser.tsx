'use client';

import { useMemo, useState } from 'react';
import type { InvestorCategory } from '@/lib/investors';

const ALL = 'All';

export default function InvestorDocumentBrowser({ categories }: { categories: InvestorCategory[] }) {
  const [activeCat, setActiveCat] = useState<string>(categories[0]?.id || '');
  const [year, setYear] = useState<string>(ALL);
  const [quarter, setQuarter] = useState<string>(ALL);

  const category = useMemo(
    () => categories.find((c) => c.id === activeCat) || categories[0],
    [activeCat, categories]
  );

  const years = useMemo(() => {
    const set = new Set<number>();
    category?.files.forEach((f) => f.year && set.add(f.year));
    return Array.from(set).sort((a, b) => b - a);
  }, [category]);

  const hasQuarters = useMemo(
    () => category?.files.some((f) => f.quarter) ?? false,
    [category]
  );

  const filtered = useMemo(() => {
    if (!category) return [];
    return category.files.filter((f) => {
      const yMatch = year === ALL || String(f.year) === year;
      const qMatch = quarter === ALL || f.quarter === quarter;
      return yMatch && qMatch;
    });
  }, [category, year, quarter]);

  if (!category) return null;

  return (
    <div className="inv-browser">
      <div className="inv-sidebar">
        <div className="inv-search-hint mono">Select category</div>
        <div className="inv-cats" role="tablist" aria-label="Investor document categories">
          {categories.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={activeCat === c.id}
              className={`inv-cat ${activeCat === c.id ? 'active' : ''}`}
              onClick={() => {
                setActiveCat(c.id);
                setYear(ALL);
                setQuarter(ALL);
              }}
            >
              {c.title}
              <span className="inv-count">{c.files.length}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="inv-main">
        <div className="inv-head">
          <h3>{category.title}</h3>
          <div className="inv-filters">
            {years.length > 0 && (
              <div className="inv-filter">
                <label className="mono">Year</label>
                <select value={year} onChange={(e) => setYear(e.target.value)}>
                  <option value={ALL}>All years</option>
                  {years.map((y) => (
                    <option key={y} value={String(y)}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {hasQuarters && (
              <div className="inv-filter">
                <label className="mono">Quarter</label>
                <select value={quarter} onChange={(e) => setQuarter(e.target.value)}>
                  <option value={ALL}>All quarters</option>
                  {['Q1', 'Q2', 'Q3', 'Q4'].map((q) => (
                    <option key={q} value={q}>
                      {q}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="inv-empty">No documents match the selected filters.</p>
        ) : (
          <ul className="inv-list">
            {filtered.map((f) => (
              <li key={f.href}>
                <a href={f.href} target="_blank" rel="noreferrer" className="inv-file">
                  <span className="inv-file-icon" aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <path d="M12 18v-6M9 15l3 3 3-3" />
                    </svg>
                  </span>
                  <span className="inv-file-meta">
                    <span className="inv-file-label">{f.label}</span>
                    <span className="inv-file-tags">
                      {f.year && <span className="inv-tag">{f.year}</span>}
                      {f.quarter && <span className="inv-tag">{f.quarter}</span>}
                      <span className="inv-tag mono">PDF</span>
                    </span>
                  </span>
                  <span className="inv-file-action">Download</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
