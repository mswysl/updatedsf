import React from 'react';

const CSS = `
.ms-tag {
  display: inline-flex; align-items: center; gap: 6px;
  font-family: var(--font-mono); font-size: var(--text-xs);
  letter-spacing: var(--tracking-wide); text-transform: uppercase;
  color: var(--text);
  background: var(--surface);
  border: var(--border-w-2) solid var(--border-strong);
  border-radius: var(--radius-sm);
  padding: 5px 10px; line-height: 1;
  cursor: default; white-space: nowrap;
  transition: background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out);
}
.ms-tag--clickable { cursor: pointer; }
.ms-tag--clickable:hover { background: var(--ink-950); color: var(--white); }
.ms-tag--selected { background: var(--pink-500); color: var(--white); border-color: var(--black); }
.ms-tag--selected:hover { background: var(--pink-600); color: var(--white); }
.ms-tag__x {
  display: inline-flex; align-items: center; justify-content: center;
  width: 14px; height: 14px; margin-right: -2px;
  border: none; background: transparent; color: inherit; cursor: pointer; padding: 0;
  font-family: var(--font-body); font-size: 14px; line-height: 1;
}
.ms-tag__x:hover { color: var(--lime-500); }
`;
if (typeof document !== 'undefined' && !document.getElementById('ms-tag-css')) {
  const s = document.createElement('style'); s.id = 'ms-tag-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

export function Tag({ selected = false, onRemove = null, onClick = null, className = '', children, ...rest }) {
  const clickable = !!onClick;
  const cls = [
    'ms-tag',
    clickable ? 'ms-tag--clickable' : '',
    selected ? 'ms-tag--selected' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <span className={cls} onClick={onClick} {...rest}>
      {children}
      {onRemove ? (
        <button type="button" className="ms-tag__x" aria-label="Remove" onClick={(e) => { e.stopPropagation(); onRemove(e); }}>&times;</button>
      ) : null}
    </span>
  );
}
