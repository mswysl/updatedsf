import React from 'react';
import { Badge } from '../core/Badge.jsx';
import { Price } from './Price.jsx';
import { SkullRating } from './SkullRating.jsx';

const CSS = `
.ms-pcard {
  display: flex; flex-direction: column; position: relative;
  background: var(--surface);
  border: var(--border-w-2) solid var(--border-strong);
  border-radius: var(--radius-card);
  text-decoration: none; color: inherit;
  transition: transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
}
.ms-pcard:hover { transform: translate(-2px, -4px); box-shadow: var(--shadow-hard); }
.ms-pcard:hover { text-decoration: none; }
.ms-pcard__media {
  position: relative; aspect-ratio: 1 / 1; overflow: hidden;
  background: var(--ink-950);
  border-bottom: var(--border-w-2) solid var(--border-strong);
}
.ms-pcard__media img { width: 100%; height: 100%; object-fit: cover; display: block;
  transition: transform var(--dur-slow) var(--ease-out); }
.ms-pcard:hover .ms-pcard__media img { transform: scale(1.04); }
.ms-pcard__badges { position: absolute; top: 10px; left: 10px; display: flex; flex-direction: column; gap: 6px; align-items: flex-start; z-index: 2; }
.ms-pcard__wish { position: absolute; top: 10px; right: 10px; z-index: 2;
  width: 34px; height: 34px; border: var(--border-w-2) solid var(--black); background: var(--white);
  border-radius: var(--radius-sm); display: inline-flex; align-items: center; justify-content: center;
  cursor: pointer; color: var(--ink-950); }
.ms-pcard__wish:hover { background: var(--pink-500); color: var(--white); }
.ms-pcard__wish svg { width: 16px; height: 16px; }
.ms-pcard__body { display: flex; flex-direction: column; gap: 6px; padding: var(--space-4); flex: 1; }
.ms-pcard__artist { font-family: var(--font-mono); font-size: var(--text-2xs); letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--text-muted); }
.ms-pcard__title { font-family: var(--font-body); font-weight: var(--weight-bold); font-size: var(--text-base);
  line-height: 1.2; margin: 0; color: var(--text); }
.ms-pcard__foot { margin-top: auto; padding-top: var(--space-2); display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.ms-pcard__cta {
  height: 40px; padding: 0 16px; border: var(--border-w-2) solid var(--black);
  background: var(--accent); color: var(--white); border-radius: var(--radius-control);
  font-family: var(--font-body); font-weight: 700; text-transform: uppercase; font-size: var(--text-xs);
  letter-spacing: var(--tracking-wide); cursor: pointer; display: inline-flex; align-items: center; gap: 6px;
  transition: background var(--dur-fast) var(--ease-out);
}
.ms-pcard__cta:hover { background: var(--accent-hover); }
.ms-pcard__cta svg { width: 15px; height: 15px; }

/* sold out */
.ms-pcard--soldout .ms-pcard__media img { filter: grayscale(1) contrast(0.9) brightness(0.7); }
.ms-pcard__stamp {
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; z-index: 3;
}
.ms-pcard__stamp span {
  font-family: var(--font-display); text-transform: uppercase; transform: var(--display-skew) rotate(-8deg);
  font-size: 26px; color: var(--white); background: var(--blood-500);
  border: var(--border-w-3) solid var(--black); padding: 4px 16px; letter-spacing: 0.02em;
}
`;
if (typeof document !== 'undefined' && !document.getElementById('ms-pcard-css')) {
  const s = document.createElement('style'); s.id = 'ms-pcard-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

const Heart = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>);
const Bag = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>);

export function ProductCard({
  image, title, artist, price, compareAt = null, currency = 'USD',
  badges = [], rating = null, reviews = null,
  soldOut = false, href = '#', onAddToCart = null, onWishlist = null,
  className = '', ...rest
}) {
  const cls = ['ms-pcard', soldOut ? 'ms-pcard--soldout' : '', className].filter(Boolean).join(' ');
  return (
    <a className={cls} href={href} {...rest}>
      <div className="ms-pcard__media">
        {badges.length ? (
          <div className="ms-pcard__badges">
            {badges.map((b, i) => <Badge key={i} variant={b.variant || 'new'}>{b.label}</Badge>)}
          </div>
        ) : null}
        <button type="button" className="ms-pcard__wish" aria-label="Add to wishlist"
          onClick={(e) => { e.preventDefault(); onWishlist && onWishlist(); }}><Heart /></button>
        {image ? <img src={image} alt={title} /> : null}
        {soldOut ? <div className="ms-pcard__stamp"><span>Sold out</span></div> : null}
      </div>
      <div className="ms-pcard__body">
        {artist ? <span className="ms-pcard__artist">{artist}</span> : null}
        <h3 className="ms-pcard__title">{title}</h3>
        {rating != null ? <SkullRating value={rating} count={reviews} size={15} /> : null}
        <div className="ms-pcard__foot">
          <Price amount={price} compareAt={compareAt} currency={currency} size="md" />
          {!soldOut ? (
            <button type="button" className="ms-pcard__cta"
              onClick={(e) => { e.preventDefault(); onAddToCart && onAddToCart(); }}>
              <Bag /> Add
            </button>
          ) : null}
        </div>
      </div>
    </a>
  );
}
