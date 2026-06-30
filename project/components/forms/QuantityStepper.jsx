import React from 'react';

const CSS = `
.ms-qty { display: inline-flex; align-items: stretch; border: var(--border-w-2) solid var(--border-strong);
  border-radius: var(--radius-control); background: var(--surface); overflow: hidden; height: var(--control-h-md); }
.ms-qty--sm { height: var(--control-h-sm); }
.ms-qty__btn {
  width: 40px; border: none; background: var(--surface); color: var(--text);
  font-family: var(--font-display); font-size: 20px; line-height: 1; cursor: pointer;
  display: inline-flex; align-items: center; justify-content: center;
  transition: background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out);
}
.ms-qty--sm .ms-qty__btn { width: 32px; font-size: 16px; }
.ms-qty__btn:hover:not(:disabled) { background: var(--ink-950); color: var(--lime-500); }
.ms-qty__btn:focus-visible { outline: none; box-shadow: var(--focus-ring); z-index: 1; }
.ms-qty__btn:disabled { color: var(--ink-300); cursor: not-allowed; }
.ms-qty__val {
  min-width: 44px; padding: 0 8px; border-left: var(--border-w-2) solid var(--border-strong);
  border-right: var(--border-w-2) solid var(--border-strong);
  display: inline-flex; align-items: center; justify-content: center;
  font-family: var(--font-mono); font-weight: 700; font-size: var(--text-base);
}
.ms-qty--sm .ms-qty__val { min-width: 36px; font-size: var(--text-sm); }
`;
if (typeof document !== 'undefined' && !document.getElementById('ms-qty-css')) {
  const s = document.createElement('style'); s.id = 'ms-qty-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

export function QuantityStepper({
  value, defaultValue = 1, min = 1, max = 99, size = 'md',
  onChange = null, className = '', ...rest
}) {
  const controlled = value != null;
  const [internal, setInternal] = React.useState(defaultValue);
  const v = controlled ? value : internal;
  const set = (next) => {
    const clamped = Math.max(min, Math.min(max, next));
    if (!controlled) setInternal(clamped);
    if (onChange) onChange(clamped);
  };
  const cls = ['ms-qty', size !== 'md' ? `ms-qty--${size}` : '', className].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      <button type="button" className="ms-qty__btn" aria-label="Decrease" onClick={() => set(v - 1)} disabled={v <= min}>&minus;</button>
      <span className="ms-qty__val" aria-live="polite">{v}</span>
      <button type="button" className="ms-qty__btn" aria-label="Increase" onClick={() => set(v + 1)} disabled={v >= max}>+</button>
    </div>
  );
}
