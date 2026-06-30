import React from 'react';

const CSS = `
.ms-price { display: inline-flex; align-items: baseline; gap: 8px; font-family: var(--font-mono); }
.ms-price__now { font-weight: 700; color: var(--text); line-height: 1; }
.ms-price--sm .ms-price__now { font-size: var(--text-base); }
.ms-price--md .ms-price__now { font-size: var(--text-xl); }
.ms-price--lg .ms-price__now { font-size: var(--text-3xl); }
.ms-price--sale .ms-price__now { color: var(--pink-600); }
.ms-price__was { color: var(--ink-400); text-decoration: line-through; font-size: 0.7em; }
.ms-price__save {
  font-size: 11px; font-weight: 700; color: var(--black); background: var(--lime-500);
  border: var(--border-w-1) solid var(--black); border-radius: var(--radius-sm);
  padding: 2px 5px; letter-spacing: 0.04em; align-self: center;
}
`;
if (typeof document !== 'undefined' && !document.getElementById('ms-price-css')) {
  const s = document.createElement('style'); s.id = 'ms-price-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

const fmt = (n, currency) => {
  if (typeof n !== 'number') return n;
  try { return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(n); }
  catch { return `$${n.toFixed(2)}`; }
};

export function Price({ amount, compareAt = null, currency = 'USD', size = 'md', showSave = true, className = '', ...rest }) {
  const onSale = compareAt != null && typeof compareAt === 'number' && typeof amount === 'number' && compareAt > amount;
  const pct = onSale ? Math.round((1 - amount / compareAt) * 100) : 0;
  const cls = ['ms-price', `ms-price--${size}`, onSale ? 'ms-price--sale' : '', className].filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      <span className="ms-price__now">{fmt(amount, currency)}</span>
      {onSale ? <span className="ms-price__was">{fmt(compareAt, currency)}</span> : null}
      {onSale && showSave ? <span className="ms-price__save">-{pct}%</span> : null}
    </span>
  );
}
