import React from 'react';

const CSS = `
.ms-toast {
  display: flex; align-items: center; gap: 12px;
  background: var(--surface); color: var(--text);
  border: var(--border-w-2) solid var(--black); border-radius: var(--radius-sm);
  box-shadow: var(--shadow-hard-sm);
  padding: 12px 14px; max-width: 380px; font-family: var(--font-body);
}
.ms-toast__icon { flex: none; width: 34px; height: 34px; border-radius: var(--radius-sm);
  display: inline-flex; align-items: center; justify-content: center; border: var(--border-w-2) solid var(--black); }
.ms-toast__icon svg { width: 18px; height: 18px; }
.ms-toast--success .ms-toast__icon { background: var(--lime-500); color: var(--black); }
.ms-toast--error   .ms-toast__icon { background: var(--blood-500); color: var(--white); }
.ms-toast--info    .ms-toast__icon { background: var(--pink-500); color: var(--white); }
.ms-toast__body { flex: 1; min-width: 0; }
.ms-toast__title { font-weight: var(--weight-bold); font-size: var(--text-sm); line-height: 1.2; }
.ms-toast__msg { font-size: var(--text-xs); color: var(--text-muted); margin-top: 2px; }
.ms-toast__x { flex: none; border: none; background: transparent; cursor: pointer; color: var(--ink-500);
  width: 26px; height: 26px; display: inline-flex; align-items: center; justify-content: center; font-size: 18px; }
.ms-toast__x:hover { color: var(--ink-950); }
`;
if (typeof document !== 'undefined' && !document.getElementById('ms-toast-css')) {
  const s = document.createElement('style'); s.id = 'ms-toast-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

const ICONS = {
  success: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square"><path d="M4 12l5 5L20 6"/></svg>,
  error: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square"><path d="M6 6l12 12M18 6 6 18"/></svg>,
  info: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square"><path d="M12 8v8M12 5v.5"/></svg>,
};

export function Toast({ variant = 'success', title, message, onClose = null, className = '', children, ...rest }) {
  const cls = ['ms-toast', `ms-toast--${variant}`, className].filter(Boolean).join(' ');
  return (
    <div className={cls} role="status" {...rest}>
      <span className="ms-toast__icon">{ICONS[variant]}</span>
      <div className="ms-toast__body">
        {title ? <div className="ms-toast__title">{title}</div> : null}
        {(message || children) ? <div className="ms-toast__msg">{message || children}</div> : null}
      </div>
      {onClose ? <button type="button" className="ms-toast__x" aria-label="Dismiss" onClick={onClose}>&times;</button> : null}
    </div>
  );
}
