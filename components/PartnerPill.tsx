'use client';
import { useState } from 'react';

/** Partner pill with the company's icon (Google favicon service), graceful text fallback. */
export default function PartnerPill({ name, domain }: { name: string; domain: string }) {
  const [showLogo, setShowLogo] = useState(true);
  return (
    <span className="p">
      {showLogo && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
          alt={`${name} logo`}
          width={24}
          height={24}
          loading="lazy"
          onError={() => setShowLogo(false)}
        />
      )}
      {name}
    </span>
  );
}
