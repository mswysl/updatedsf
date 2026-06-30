import React from 'react';

const CSS = `
.ms-field { display: flex; flex-direction: column; gap: 6px; font-family: var(--font-body); }
.ms-field__label {
  font-family: var(--font-mono); font-size: var(--text-xs);
  letter-spacing: var(--tracking-wide); text-transform: uppercase; color: var(--text);
}
.ms-field__req { color: var(--pink-500); }
.ms-inputwrap { position: relative; display: flex; align-items: center; }
.ms-inputwrap__icon {
  position: absolute; left: 12px; display: inline-flex; color: var(--ink-500); pointer-events: none;
}
.ms-inputwrap__icon svg { width: var(--icon-md); height: var(--icon-md); display: block; }
.ms-input {
  width: 100%; font-family: var(--font-body); font-size: var(--text-base); color: var(--text);
  background: var(--surface);
  border: var(--border-w-2) solid var(--border-strong);
  border-radius: var(--radius-control);
  height: var(--control-h-md); padding: 0 var(--space-3);
  transition: box-shadow var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out);
}
.ms-inputwrap--icon .ms-input { padding-left: 40px; }
.ms-input::placeholder { color: var(--ink-400); }
.ms-input:focus { outline: none; box-shadow: var(--focus-ring); }
.ms-input:disabled { background: var(--ink-100); color: var(--ink-400); cursor: not-allowed; }
.ms-input--sm { height: var(--control-h-sm); font-size: var(--text-sm); }
.ms-input--lg { height: var(--control-h-lg); font-size: var(--text-lg); }
.ms-field--error .ms-input { border-color: var(--danger); }
.ms-field--error .ms-input:focus { box-shadow: 0 0 0 3px var(--blood-500); }
.ms-field__hint { font-size: var(--text-xs); color: var(--text-muted); font-family: var(--font-body); }
.ms-field--error .ms-field__hint { color: var(--danger); }
`;
if (typeof document !== 'undefined' && !document.getElementById('ms-input-css')) {
  const s = document.createElement('style'); s.id = 'ms-input-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

let _id = 0;
export function Input({
  label,
  hint,
  error = false,
  required = false,
  size = 'md',
  leadingIcon = null,
  id,
  className = '',
  ...rest
}) {
  const inputId = id || `ms-input-${++_id}`;
  const fieldCls = ['ms-field', error ? 'ms-field--error' : '', className].filter(Boolean).join(' ');
  const wrapCls = ['ms-inputwrap', leadingIcon ? 'ms-inputwrap--icon' : ''].filter(Boolean).join(' ');
  const inputCls = ['ms-input', size !== 'md' ? `ms-input--${size}` : ''].filter(Boolean).join(' ');
  return (
    <div className={fieldCls}>
      {label ? (
        <label className="ms-field__label" htmlFor={inputId}>
          {label}{required ? <span className="ms-field__req"> *</span> : null}
        </label>
      ) : null}
      <div className={wrapCls}>
        {leadingIcon ? <span className="ms-inputwrap__icon">{leadingIcon}</span> : null}
        <input id={inputId} className={inputCls} {...rest} />
      </div>
      {hint ? <span className="ms-field__hint">{hint}</span> : null}
    </div>
  );
}
