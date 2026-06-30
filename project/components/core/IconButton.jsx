import React from 'react';

const CSS = `
.ms-iconbtn {
  display: inline-flex; align-items: center; justify-content: center;
  border: var(--border-w-2) solid var(--black);
  border-radius: var(--radius-control);
  background: var(--surface); color: var(--text);
  cursor: pointer;
  box-shadow: var(--shadow-hard-xs);
  transition: transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out);
}
.ms-iconbtn:hover:not([disabled]) { background: var(--ink-100); }
.ms-iconbtn:focus-visible { outline: none; box-shadow: var(--shadow-hard-xs), var(--focus-ring); }
.ms-iconbtn:active:not([disabled]) { transform: var(--press-translate); box-shadow: 0 0 0 0 var(--black); }
.ms-iconbtn[disabled] { opacity: 0.45; cursor: not-allowed; box-shadow: none; }
.ms-iconbtn svg { display: block; }

.ms-iconbtn--sm { width: var(--control-h-sm); height: var(--control-h-sm); }
.ms-iconbtn--sm svg { width: var(--icon-sm); height: var(--icon-sm); }
.ms-iconbtn--md { width: var(--control-h-md); height: var(--control-h-md); }
.ms-iconbtn--md svg { width: var(--icon-md); height: var(--icon-md); }
.ms-iconbtn--lg { width: var(--control-h-lg); height: var(--control-h-lg); }
.ms-iconbtn--lg svg { width: var(--icon-lg); height: var(--icon-lg); }

.ms-iconbtn--primary { background: var(--accent); color: var(--text-on-accent); }
.ms-iconbtn--primary:hover:not([disabled]) { background: var(--accent-hover); }
.ms-iconbtn--ghost { border-color: transparent; box-shadow: none; background: transparent; }
.ms-iconbtn--ghost:hover:not([disabled]) { background: var(--ink-100); }
.ms-iconbtn--ghost:active { transform: none; box-shadow: none; }

/* notification dot (e.g. cart count) */
.ms-iconbtn { position: relative; }
.ms-iconbtn__count {
  position: absolute; top: -8px; right: -8px;
  min-width: 18px; height: 18px; padding: 0 4px;
  display: inline-flex; align-items: center; justify-content: center;
  background: var(--lime-500); color: var(--black);
  border: var(--border-w-2) solid var(--black); border-radius: var(--radius-pill);
  font-family: var(--font-mono); font-size: 10px; font-weight: 700; line-height: 1;
}
`;
if (typeof document !== 'undefined' && !document.getElementById('ms-iconbtn-css')) {
  const s = document.createElement('style'); s.id = 'ms-iconbtn-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

export function IconButton({
  variant = 'outline',
  size = 'md',
  count = null,
  label,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['ms-iconbtn', `ms-iconbtn--${variant}`, `ms-iconbtn--${size}`, className].filter(Boolean).join(' ');
  return (
    <button type="button" className={cls} aria-label={label} disabled={disabled} {...rest}>
      {children}
      {count != null && count !== 0 ? <span className="ms-iconbtn__count">{count}</span> : null}
    </button>
  );
}
