import React from 'react';

/* MSWYSL Button — inject styles once on import (self-contained, tokens via CSS vars) */
const CSS = `
.ms-btn {
  --_shadow: var(--shadow-hard-sm);
  display: inline-flex; align-items: center; justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-body);
  font-weight: var(--weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
  line-height: 1;
  border: var(--border-w-2) solid var(--black);
  border-radius: var(--radius-control);
  box-shadow: var(--_shadow);
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
  transition: transform var(--dur-fast) var(--ease-out),
              box-shadow var(--dur-fast) var(--ease-out),
              background var(--dur-fast) var(--ease-out);
}
.ms-btn:focus-visible { outline: none; box-shadow: var(--_shadow), var(--focus-ring); }
.ms-btn:active { transform: var(--press-translate); box-shadow: 0 0 0 0 var(--black); }
.ms-btn[disabled] { opacity: 0.45; cursor: not-allowed; box-shadow: none; transform: none; }

/* sizes */
.ms-btn--sm { height: var(--control-h-sm); padding: 0 var(--space-4); font-size: var(--text-xs); }
.ms-btn--md { height: var(--control-h-md); padding: 0 var(--space-6); font-size: var(--text-sm); }
.ms-btn--lg { height: var(--control-h-lg); padding: 0 var(--space-8); font-size: var(--text-base); }
.ms-btn--block { width: 100%; }

/* the loud poster CTA — skewed display face */
.ms-btn--display { font-family: var(--font-display); font-weight: var(--weight-black);
  letter-spacing: var(--tracking-tight); transform: var(--display-skew); }
.ms-btn--display:active { transform: var(--display-skew) var(--press-translate); }

/* variants */
.ms-btn--primary   { background: var(--accent); color: var(--text-on-accent); }
.ms-btn--primary:hover:not([disabled])   { background: var(--accent-hover); }
.ms-btn--secondary { background: var(--accent-2); color: var(--text-on-lime); }
.ms-btn--secondary:hover:not([disabled]) { background: var(--accent-2-hover); }
.ms-btn--outline   { background: var(--surface); color: var(--text); }
.ms-btn--outline:hover:not([disabled])   { background: var(--ink-100); }
.ms-btn--ghost     { background: transparent; color: var(--text); border-color: transparent; box-shadow: none; }
.ms-btn--ghost:hover:not([disabled])     { background: var(--ink-100); }
.ms-btn--ghost:active { transform: none; box-shadow: none; }
.ms-btn--danger    { background: var(--danger); color: var(--white); }
.ms-btn--danger:hover:not([disabled])    { background: var(--danger-hover); }

.ms-btn__icon { display: inline-flex; }
.ms-btn__icon svg { width: var(--icon-md); height: var(--icon-md); display: block; }
`;
if (typeof document !== 'undefined' && !document.getElementById('ms-btn-css')) {
  const s = document.createElement('style'); s.id = 'ms-btn-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

export function Button({
  variant = 'primary',
  size = 'md',
  display = false,
  fullWidth = false,
  leadingIcon = null,
  trailingIcon = null,
  as = 'button',
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  const Tag = as;
  const cls = [
    'ms-btn',
    `ms-btn--${variant}`,
    `ms-btn--${size}`,
    display ? 'ms-btn--display' : '',
    fullWidth ? 'ms-btn--block' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <Tag className={cls} disabled={Tag === 'button' ? disabled : undefined} {...rest}>
      {leadingIcon ? <span className="ms-btn__icon">{leadingIcon}</span> : null}
      <span>{children}</span>
      {trailingIcon ? <span className="ms-btn__icon">{trailingIcon}</span> : null}
    </Tag>
  );
}
