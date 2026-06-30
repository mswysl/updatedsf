import React from 'react';

const CSS = `
.ms-badge {
  display: inline-flex; align-items: center; gap: 5px;
  font-family: var(--font-mono); font-weight: 700;
  text-transform: uppercase; letter-spacing: var(--tracking-wide);
  font-size: var(--text-2xs); line-height: 1;
  padding: 4px 7px;
  border: var(--border-w-2) solid var(--black);
  border-radius: var(--radius-sm);
  white-space: nowrap;
}
.ms-badge--new      { background: var(--lime-500); color: var(--black); }
.ms-badge--limited  { background: var(--pink-500); color: var(--white); }
.ms-badge--sale     { background: var(--lime-500); color: var(--black); }
.ms-badge--soldout  { background: var(--ink-950); color: var(--white); }
.ms-badge--preorder { background: var(--white); color: var(--ink-950); }
.ms-badge--blood    { background: var(--blood-500); color: var(--white); }

.ms-badge__dot { width: 7px; height: 7px; border-radius: var(--radius-pill); background: currentColor; }
`;
if (typeof document !== 'undefined' && !document.getElementById('ms-badge-css')) {
  const s = document.createElement('style'); s.id = 'ms-badge-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

export function Badge({ variant = 'new', dot = false, className = '', children, ...rest }) {
  const cls = ['ms-badge', `ms-badge--${variant}`, className].filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {dot ? <span className="ms-badge__dot" /> : null}
      {children}
    </span>
  );
}
