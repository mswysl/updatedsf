import React from 'react';

const CSS = `
.ms-skulls { display: inline-flex; align-items: center; gap: 6px; }
.ms-skulls__row { display: inline-flex; gap: 2px; }
.ms-skulls__row svg { width: var(--_sz, 18px); height: var(--_sz, 18px); display: block; }
.ms-skulls__on { color: var(--pink-500); }
.ms-skulls__off { color: var(--ink-300); }
.ms-skulls__count { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-muted); }
`;
if (typeof document !== 'undefined' && !document.getElementById('ms-skulls-css')) {
  const s = document.createElement('style'); s.id = 'ms-skulls-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

const Skull = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C7 2 3 5.8 3 10.5c0 2.7 1.3 4.6 3 5.8V19a2 2 0 0 0 2 2h1v-2h2v2h2v-2h2v2h1a2 2 0 0 0 2-2v-2.7c1.7-1.2 3-3.1 3-5.8C21 5.8 17 2 12 2ZM8.5 13A2.2 2.2 0 1 1 8.5 8.6 2.2 2.2 0 0 1 8.5 13Zm7 0a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4Zm-3.5.6 1.4 3h-2.8l1.4-3Z" />
  </svg>
);

export function SkullRating({ value = 0, max = 5, count = null, size = 18, showValue = false, className = '', ...rest }) {
  const rounded = Math.round(value);
  const cls = ['ms-skulls', className].filter(Boolean).join(' ');
  return (
    <span className={cls} style={{ '--_sz': `${size}px` }} role="img" aria-label={`${value} out of ${max}`} {...rest}>
      <span className="ms-skulls__row">
        {Array.from({ length: max }).map((_, i) => (
          <span key={i} className={i < rounded ? 'ms-skulls__on' : 'ms-skulls__off'}><Skull /></span>
        ))}
      </span>
      {showValue ? <span className="ms-skulls__count">{value.toFixed(1)}</span> : null}
      {count != null ? <span className="ms-skulls__count">({count})</span> : null}
    </span>
  );
}
