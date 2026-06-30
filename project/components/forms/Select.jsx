import React from 'react';

const CSS = `
.ms-selectwrap { position: relative; display: inline-flex; width: 100%; }
.ms-select {
  appearance: none; -webkit-appearance: none;
  width: 100%; font-family: var(--font-body); font-size: var(--text-base); color: var(--text);
  background: var(--surface);
  border: var(--border-w-2) solid var(--border-strong);
  border-radius: var(--radius-control);
  height: var(--control-h-md); padding: 0 40px 0 var(--space-3);
  cursor: pointer;
  transition: box-shadow var(--dur-fast) var(--ease-out);
}
.ms-select:focus { outline: none; box-shadow: var(--focus-ring); }
.ms-select:disabled { background: var(--ink-100); color: var(--ink-400); cursor: not-allowed; }
.ms-select--sm { height: var(--control-h-sm); font-size: var(--text-sm); }
.ms-select--lg { height: var(--control-h-lg); font-size: var(--text-lg); }
.ms-selectwrap__caret {
  position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
  pointer-events: none; color: var(--ink-700); display: inline-flex;
}
.ms-selectwrap__caret svg { width: 18px; height: 18px; display: block; }
`;
if (typeof document !== 'undefined' && !document.getElementById('ms-select-css')) {
  const s = document.createElement('style'); s.id = 'ms-select-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

const Caret = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export function Select({ size = 'md', options = null, placeholder = null, className = '', children, ...rest }) {
  const cls = ['ms-select', size !== 'md' ? `ms-select--${size}` : '', className].filter(Boolean).join(' ');
  return (
    <span className="ms-selectwrap">
      <select className={cls} {...rest}>
        {placeholder ? <option value="" disabled hidden>{placeholder}</option> : null}
        {options
          ? options.map((o) => {
              const opt = typeof o === 'string' ? { value: o, label: o } : o;
              return <option key={opt.value} value={opt.value}>{opt.label}</option>;
            })
          : children}
      </select>
      <span className="ms-selectwrap__caret"><Caret /></span>
    </span>
  );
}
