import React from 'react';

const CSS = `
.ms-check { display: inline-flex; align-items: flex-start; gap: 10px; cursor: pointer; font-family: var(--font-body); font-size: var(--text-sm); color: var(--text); user-select: none; }
.ms-check input { position: absolute; opacity: 0; width: 0; height: 0; }
.ms-check__box {
  flex: none; width: 22px; height: 22px; margin-top: 1px;
  border: var(--border-w-2) solid var(--border-strong);
  border-radius: var(--radius-sm);
  background: var(--surface);
  display: inline-flex; align-items: center; justify-content: center;
  transition: background var(--dur-fast) var(--ease-out);
}
.ms-check__box svg { width: 16px; height: 16px; color: var(--black); opacity: 0; transform: scale(0.6);
  transition: opacity var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out); }
.ms-check input:checked + .ms-check__box { background: var(--lime-500); }
.ms-check input:checked + .ms-check__box svg { opacity: 1; transform: scale(1); }
.ms-check input:focus-visible + .ms-check__box { box-shadow: var(--focus-ring); }
.ms-check input:disabled ~ * { opacity: 0.45; }
.ms-check--disabled { cursor: not-allowed; }
.ms-check__label b { font-weight: var(--weight-bold); }
`;
if (typeof document !== 'undefined' && !document.getElementById('ms-check-css')) {
  const s = document.createElement('style'); s.id = 'ms-check-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

const Tick = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter">
    <path d="M4 12l5 5L20 6" />
  </svg>
);

export function Checkbox({ label, checked, defaultChecked, disabled = false, className = '', children, ...rest }) {
  const cls = ['ms-check', disabled ? 'ms-check--disabled' : '', className].filter(Boolean).join(' ');
  return (
    <label className={cls}>
      <input type="checkbox" checked={checked} defaultChecked={defaultChecked} disabled={disabled} {...rest} />
      <span className="ms-check__box"><Tick /></span>
      {(label || children) ? <span className="ms-check__label">{label || children}</span> : null}
    </label>
  );
}
