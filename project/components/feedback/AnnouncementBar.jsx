import React from 'react';

const CSS = `
.ms-annbar {
  width: 100%; overflow: hidden;
  font-family: var(--font-mono); font-size: var(--text-xs);
  letter-spacing: var(--tracking-wide); text-transform: uppercase; font-weight: 700;
  border-top: var(--border-w-2) solid var(--black); border-bottom: var(--border-w-2) solid var(--black);
}
.ms-annbar--pink  { background: var(--pink-500); color: var(--white); }
.ms-annbar--lime  { background: var(--lime-500); color: var(--black); }
.ms-annbar--ink   { background: var(--ink-950); color: var(--white); }
.ms-annbar__static { padding: 9px 16px; text-align: center; }
.ms-annbar__track { display: inline-flex; white-space: nowrap; padding: 9px 0; will-change: transform;
  animation: ms-marquee var(--_dur, 22s) linear infinite; }
.ms-annbar__track:hover { animation-play-state: paused; }
.ms-annbar__seg { padding: 0 0; display: inline-flex; align-items: center; }
.ms-annbar__item { padding: 0 28px; }
.ms-annbar__star { opacity: 0.7; }
@keyframes ms-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@media (prefers-reduced-motion: reduce) { .ms-annbar__track { animation: none; } }
`;
if (typeof document !== 'undefined' && !document.getElementById('ms-annbar-css')) {
  const s = document.createElement('style'); s.id = 'ms-annbar-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

export function AnnouncementBar({ variant = 'pink', marquee = false, speed = 22, items = null, className = '', children, ...rest }) {
  const cls = ['ms-annbar', `ms-annbar--${variant}`, className].filter(Boolean).join(' ');
  if (marquee) {
    const list = items || [children];
    const Seg = () => (
      <span className="ms-annbar__seg">
        {list.map((it, i) => (
          <React.Fragment key={i}>
            <span className="ms-annbar__item">{it}</span>
            <span className="ms-annbar__star">✶</span>
          </React.Fragment>
        ))}
      </span>
    );
    return (
      <div className={cls} {...rest}>
        <div className="ms-annbar__track" style={{ '--_dur': `${speed}s` }}>
          <Seg /><Seg />
        </div>
      </div>
    );
  }
  return <div className={cls} {...rest}><div className="ms-annbar__static">{children}</div></div>;
}
