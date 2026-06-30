/* @ds-bundle: {"format":3,"namespace":"MSWYSLDesignSystem_d8bb48","components":[{"name":"Price","sourcePath":"components/commerce/Price.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"SkullRating","sourcePath":"components/commerce/SkullRating.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"AnnouncementBar","sourcePath":"components/feedback/AnnouncementBar.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"QuantityStepper","sourcePath":"components/forms/QuantityStepper.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/commerce/Price.jsx":"dfec5b8c27ec","components/commerce/ProductCard.jsx":"39809d0f645f","components/commerce/SkullRating.jsx":"9c78ffe28f97","components/core/Badge.jsx":"4ff113a8890c","components/core/Button.jsx":"ff6aebfacc4b","components/core/IconButton.jsx":"e0d789300c0f","components/core/Tag.jsx":"19e17d85b4f2","components/feedback/AnnouncementBar.jsx":"5d740c53cc75","components/feedback/Toast.jsx":"9b5747fbc601","components/forms/Checkbox.jsx":"fc8b63839482","components/forms/Input.jsx":"0cabee182edf","components/forms/QuantityStepper.jsx":"c5ae49ba54e9","components/forms/Select.jsx":"df1ad688b8d9","ui_kits/storefront/CartDrawer.jsx":"5cd123eaa164","ui_kits/storefront/Catalog.jsx":"84f0e2180b7e","ui_kits/storefront/Footer.jsx":"5d4e339eff7c","ui_kits/storefront/Header.jsx":"d4fc6f2e3bba","ui_kits/storefront/Hero.jsx":"f5e1ba367b8c","ui_kits/storefront/ProductDetail.jsx":"8687cc7d7b50","ui_kits/storefront/products.js":"7dd03c944d25"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MSWYSLDesignSystem_d8bb48 = window.MSWYSLDesignSystem_d8bb48 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/Price.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ms-price { display: inline-flex; align-items: baseline; gap: 8px; font-family: var(--font-mono); }
.ms-price__now { font-weight: 700; color: var(--text); line-height: 1; }
.ms-price--sm .ms-price__now { font-size: var(--text-base); }
.ms-price--md .ms-price__now { font-size: var(--text-xl); }
.ms-price--lg .ms-price__now { font-size: var(--text-3xl); }
.ms-price--sale .ms-price__now { color: var(--pink-600); }
.ms-price__was { color: var(--ink-400); text-decoration: line-through; font-size: 0.7em; }
.ms-price__save {
  font-size: 11px; font-weight: 700; color: var(--black); background: var(--lime-500);
  border: var(--border-w-1) solid var(--black); border-radius: var(--radius-sm);
  padding: 2px 5px; letter-spacing: 0.04em; align-self: center;
}
`;
if (typeof document !== 'undefined' && !document.getElementById('ms-price-css')) {
  const s = document.createElement('style');
  s.id = 'ms-price-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const fmt = (n, currency) => {
  if (typeof n !== 'number') return n;
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency
    }).format(n);
  } catch {
    return `$${n.toFixed(2)}`;
  }
};
function Price({
  amount,
  compareAt = null,
  currency = 'USD',
  size = 'md',
  showSave = true,
  className = '',
  ...rest
}) {
  const onSale = compareAt != null && typeof compareAt === 'number' && typeof amount === 'number' && compareAt > amount;
  const pct = onSale ? Math.round((1 - amount / compareAt) * 100) : 0;
  const cls = ['ms-price', `ms-price--${size}`, onSale ? 'ms-price--sale' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ms-price__now"
  }, fmt(amount, currency)), onSale ? /*#__PURE__*/React.createElement("span", {
    className: "ms-price__was"
  }, fmt(compareAt, currency)) : null, onSale && showSave ? /*#__PURE__*/React.createElement("span", {
    className: "ms-price__save"
  }, "-", pct, "%") : null);
}
Object.assign(__ds_scope, { Price });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/Price.jsx", error: String((e && e.message) || e) }); }

// components/commerce/SkullRating.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ms-skulls { display: inline-flex; align-items: center; gap: 6px; }
.ms-skulls__row { display: inline-flex; gap: 2px; }
.ms-skulls__row svg { width: var(--_sz, 18px); height: var(--_sz, 18px); display: block; }
.ms-skulls__on { color: var(--pink-500); }
.ms-skulls__off { color: var(--ink-300); }
.ms-skulls__count { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-muted); }
`;
if (typeof document !== 'undefined' && !document.getElementById('ms-skulls-css')) {
  const s = document.createElement('style');
  s.id = 'ms-skulls-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const Skull = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 2C7 2 3 5.8 3 10.5c0 2.7 1.3 4.6 3 5.8V19a2 2 0 0 0 2 2h1v-2h2v2h2v-2h2v2h1a2 2 0 0 0 2-2v-2.7c1.7-1.2 3-3.1 3-5.8C21 5.8 17 2 12 2ZM8.5 13A2.2 2.2 0 1 1 8.5 8.6 2.2 2.2 0 0 1 8.5 13Zm7 0a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4Zm-3.5.6 1.4 3h-2.8l1.4-3Z"
}));
function SkullRating({
  value = 0,
  max = 5,
  count = null,
  size = 18,
  showValue = false,
  className = '',
  ...rest
}) {
  const rounded = Math.round(value);
  const cls = ['ms-skulls', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    style: {
      '--_sz': `${size}px`
    },
    role: "img",
    "aria-label": `${value} out of ${max}`
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ms-skulls__row"
  }, Array.from({
    length: max
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: i < rounded ? 'ms-skulls__on' : 'ms-skulls__off'
  }, /*#__PURE__*/React.createElement(Skull, null)))), showValue ? /*#__PURE__*/React.createElement("span", {
    className: "ms-skulls__count"
  }, value.toFixed(1)) : null, count != null ? /*#__PURE__*/React.createElement("span", {
    className: "ms-skulls__count"
  }, "(", count, ")") : null);
}
Object.assign(__ds_scope, { SkullRating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/SkullRating.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ms-badge {
  display: inline-flex; align-items: center; gap: 5px;
  font-family: var(--font-mono); font-weight: 700;
  text-transform: uppercase; letter-spacing: var(--tracking-wide);
  font-size: var(--text-2xs); line-height: 1;
  padding: 4px 7px;
  border: var(--border-w-2) solid var(--black);
  border-radius: var(--radius-sm);
  white-space: nowrap;
}
.ms-badge--new      { background: var(--lime-500); color: var(--black); }
.ms-badge--limited  { background: var(--pink-500); color: var(--white); }
.ms-badge--sale     { background: var(--lime-500); color: var(--black); }
.ms-badge--soldout  { background: var(--ink-950); color: var(--white); }
.ms-badge--preorder { background: var(--white); color: var(--ink-950); }
.ms-badge--blood    { background: var(--blood-500); color: var(--white); }

.ms-badge__dot { width: 7px; height: 7px; border-radius: var(--radius-pill); background: currentColor; }
`;
if (typeof document !== 'undefined' && !document.getElementById('ms-badge-css')) {
  const s = document.createElement('style');
  s.id = 'ms-badge-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Badge({
  variant = 'new',
  dot = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['ms-badge', `ms-badge--${variant}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    className: "ms-badge__dot"
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'ms-pcard-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const Heart = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2"
}, /*#__PURE__*/React.createElement("path", {
  d: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"
}));
const Bag = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.4",
  strokeLinecap: "square"
}, /*#__PURE__*/React.createElement("path", {
  d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 6h18"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 10a4 4 0 0 1-8 0"
}));
function ProductCard({
  image,
  title,
  artist,
  price,
  compareAt = null,
  currency = 'USD',
  badges = [],
  rating = null,
  reviews = null,
  soldOut = false,
  href = '#',
  onAddToCart = null,
  onWishlist = null,
  className = '',
  ...rest
}) {
  const cls = ['ms-pcard', soldOut ? 'ms-pcard--soldout' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ms-pcard__media"
  }, badges.length ? /*#__PURE__*/React.createElement("div", {
    className: "ms-pcard__badges"
  }, badges.map((b, i) => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: i,
    variant: b.variant || 'new'
  }, b.label))) : null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ms-pcard__wish",
    "aria-label": "Add to wishlist",
    onClick: e => {
      e.preventDefault();
      onWishlist && onWishlist();
    }
  }, /*#__PURE__*/React.createElement(Heart, null)), image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title
  }) : null, soldOut ? /*#__PURE__*/React.createElement("div", {
    className: "ms-pcard__stamp"
  }, /*#__PURE__*/React.createElement("span", null, "Sold out")) : null), /*#__PURE__*/React.createElement("div", {
    className: "ms-pcard__body"
  }, artist ? /*#__PURE__*/React.createElement("span", {
    className: "ms-pcard__artist"
  }, artist) : null, /*#__PURE__*/React.createElement("h3", {
    className: "ms-pcard__title"
  }, title), rating != null ? /*#__PURE__*/React.createElement(__ds_scope.SkullRating, {
    value: rating,
    count: reviews,
    size: 15
  }) : null, /*#__PURE__*/React.createElement("div", {
    className: "ms-pcard__foot"
  }, /*#__PURE__*/React.createElement(__ds_scope.Price, {
    amount: price,
    compareAt: compareAt,
    currency: currency,
    size: "md"
  }), !soldOut ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ms-pcard__cta",
    onClick: e => {
      e.preventDefault();
      onAddToCart && onAddToCart();
    }
  }, /*#__PURE__*/React.createElement(Bag, null), " Add") : null)));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'ms-btn-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Button({
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
  const cls = ['ms-btn', `ms-btn--${variant}`, `ms-btn--${size}`, display ? 'ms-btn--display' : '', fullWidth ? 'ms-btn--block' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    disabled: Tag === 'button' ? disabled : undefined
  }, rest), leadingIcon ? /*#__PURE__*/React.createElement("span", {
    className: "ms-btn__icon"
  }, leadingIcon) : null, /*#__PURE__*/React.createElement("span", null, children), trailingIcon ? /*#__PURE__*/React.createElement("span", {
    className: "ms-btn__icon"
  }, trailingIcon) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'ms-iconbtn-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function IconButton({
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
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "aria-label": label,
    disabled: disabled
  }, rest), children, count != null && count !== 0 ? /*#__PURE__*/React.createElement("span", {
    className: "ms-iconbtn__count"
  }, count) : null);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'ms-tag-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tag({
  selected = false,
  onRemove = null,
  onClick = null,
  className = '',
  children,
  ...rest
}) {
  const clickable = !!onClick;
  const cls = ['ms-tag', clickable ? 'ms-tag--clickable' : '', selected ? 'ms-tag--selected' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    onClick: onClick
  }, rest), children, onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ms-tag__x",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, "\xD7") : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/AnnouncementBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'ms-annbar-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function AnnouncementBar({
  variant = 'pink',
  marquee = false,
  speed = 22,
  items = null,
  className = '',
  children,
  ...rest
}) {
  const cls = ['ms-annbar', `ms-annbar--${variant}`, className].filter(Boolean).join(' ');
  if (marquee) {
    const list = items || [children];
    const Seg = () => /*#__PURE__*/React.createElement("span", {
      className: "ms-annbar__seg"
    }, list.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("span", {
      className: "ms-annbar__item"
    }, it), /*#__PURE__*/React.createElement("span", {
      className: "ms-annbar__star"
    }, "\u2736"))));
    return /*#__PURE__*/React.createElement("div", _extends({
      className: cls
    }, rest), /*#__PURE__*/React.createElement("div", {
      className: "ms-annbar__track",
      style: {
        '--_dur': `${speed}s`
      }
    }, /*#__PURE__*/React.createElement(Seg, null), /*#__PURE__*/React.createElement(Seg, null)));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ms-annbar__static"
  }, children));
}
Object.assign(__ds_scope, { AnnouncementBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/AnnouncementBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'ms-toast-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const ICONS = {
  success: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.5",
    strokeLinecap: "square"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 12l5 5L20 6"
  })),
  error: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.5",
    strokeLinecap: "square"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6 6 18"
  })),
  info: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "square"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 8v8M12 5v.5"
  }))
};
function Toast({
  variant = 'success',
  title,
  message,
  onClose = null,
  className = '',
  children,
  ...rest
}) {
  const cls = ['ms-toast', `ms-toast--${variant}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ms-toast__icon"
  }, ICONS[variant]), /*#__PURE__*/React.createElement("div", {
    className: "ms-toast__body"
  }, title ? /*#__PURE__*/React.createElement("div", {
    className: "ms-toast__title"
  }, title) : null, message || children ? /*#__PURE__*/React.createElement("div", {
    className: "ms-toast__msg"
  }, message || children) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ms-toast__x",
    "aria-label": "Dismiss",
    onClick: onClose
  }, "\xD7") : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'ms-check-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const Tick = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "4",
  strokeLinecap: "square",
  strokeLinejoin: "miter"
}, /*#__PURE__*/React.createElement("path", {
  d: "M4 12l5 5L20 6"
}));
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['ms-check', disabled ? 'ms-check--disabled' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", {
    className: cls
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ms-check__box"
  }, /*#__PURE__*/React.createElement(Tick, null)), label || children ? /*#__PURE__*/React.createElement("span", {
    className: "ms-check__label"
  }, label || children) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'ms-input-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
let _id = 0;
function Input({
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
  return /*#__PURE__*/React.createElement("div", {
    className: fieldCls
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "ms-field__label",
    htmlFor: inputId
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "ms-field__req"
  }, " *") : null) : null, /*#__PURE__*/React.createElement("div", {
    className: wrapCls
  }, leadingIcon ? /*#__PURE__*/React.createElement("span", {
    className: "ms-inputwrap__icon"
  }, leadingIcon) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: inputCls
  }, rest))), hint ? /*#__PURE__*/React.createElement("span", {
    className: "ms-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/QuantityStepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'ms-qty-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function QuantityStepper({
  value,
  defaultValue = 1,
  min = 1,
  max = 99,
  size = 'md',
  onChange = null,
  className = '',
  ...rest
}) {
  const controlled = value != null;
  const [internal, setInternal] = React.useState(defaultValue);
  const v = controlled ? value : internal;
  const set = next => {
    const clamped = Math.max(min, Math.min(max, next));
    if (!controlled) setInternal(clamped);
    if (onChange) onChange(clamped);
  };
  const cls = ['ms-qty', size !== 'md' ? `ms-qty--${size}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ms-qty__btn",
    "aria-label": "Decrease",
    onClick: () => set(v - 1),
    disabled: v <= min
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    className: "ms-qty__val",
    "aria-live": "polite"
  }, v), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ms-qty__btn",
    "aria-label": "Increase",
    onClick: () => set(v + 1),
    disabled: v >= max
  }, "+"));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'ms-select-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const Caret = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "3",
  strokeLinecap: "square"
}, /*#__PURE__*/React.createElement("path", {
  d: "M6 9l6 6 6-6"
}));
function Select({
  size = 'md',
  options = null,
  placeholder = null,
  className = '',
  children,
  ...rest
}) {
  const cls = ['ms-select', size !== 'md' ? `ms-select--${size}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", {
    className: "ms-selectwrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: cls
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true,
    hidden: true
  }, placeholder) : null, options ? options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  }) : children), /*#__PURE__*/React.createElement("span", {
    className: "ms-selectwrap__caret"
  }, /*#__PURE__*/React.createElement(Caret, null)));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/CartDrawer.jsx
try { (() => {
/* MSWYSL Storefront — Cart drawer */
(function () {
  const {
    Button,
    Price,
    QuantityStepper,
    IconButton,
    Badge
  } = window.MSWYSLDesignSystem_d8bb48;
  const Icon = ({
    n
  }) => /*#__PURE__*/React.createElement("i", {
    "data-lucide": n
  });
  function CartDrawer({
    open,
    items,
    onClose,
    onQty,
    onRemove
  }) {
    const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
    const freeAt = 75;
    const toFree = Math.max(0, freeAt - subtotal);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        ...S.overlay,
        ...(open ? S.overlayOn : S.overlayOff)
      },
      onClick: onClose
    }, /*#__PURE__*/React.createElement("aside", {
      style: {
        ...S.panel,
        transform: open ? 'translateX(0)' : 'translateX(100%)'
      },
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement("div", {
      style: S.head
    }, /*#__PURE__*/React.createElement("h3", {
      style: S.title
    }, "Cart ", /*#__PURE__*/React.createElement("span", {
      style: S.cnt
    }, items.length)), /*#__PURE__*/React.createElement(IconButton, {
      label: "Close cart",
      variant: "ghost",
      onClick: onClose
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "x"
    }))), toFree > 0 ? /*#__PURE__*/React.createElement("div", {
      style: S.ship
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "truck"
    }), " $", toFree.toFixed(0), " from free shipping") : /*#__PURE__*/React.createElement("div", {
      style: {
        ...S.ship,
        background: 'var(--lime-500)',
        color: 'var(--black)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "check"
    }), " Free shipping unlocked"), /*#__PURE__*/React.createElement("div", {
      style: S.list
    }, items.length === 0 ? /*#__PURE__*/React.createElement("div", {
      style: S.empty
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/monogram-black.png",
      alt: "",
      style: {
        width: '60px',
        opacity: 0.25
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: S.emptyTxt
    }, "Your cart is empty.", /*#__PURE__*/React.createElement("br", null), "Go get something rare.")) : items.map(it => /*#__PURE__*/React.createElement("div", {
      key: it.key,
      style: S.row
    }, /*#__PURE__*/React.createElement("img", {
      src: it.image,
      alt: it.title,
      style: S.thumb
    }), /*#__PURE__*/React.createElement("div", {
      style: S.rowBody
    }, /*#__PURE__*/React.createElement("div", {
      style: S.rowTop
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: S.rowTitle
    }, it.title), /*#__PURE__*/React.createElement("p", {
      style: S.rowVar
    }, it.artist, it.size ? ` · ${it.size}` : '')), /*#__PURE__*/React.createElement("button", {
      style: S.rm,
      onClick: () => onRemove(it.key),
      "aria-label": "Remove"
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "trash-2"
    }))), /*#__PURE__*/React.createElement("div", {
      style: S.rowFoot
    }, /*#__PURE__*/React.createElement(QuantityStepper, {
      size: "sm",
      value: it.qty,
      onChange: q => onQty(it.key, q),
      max: 10
    }), /*#__PURE__*/React.createElement(Price, {
      amount: it.price * it.qty,
      size: "sm"
    })))))), items.length > 0 ? /*#__PURE__*/React.createElement("div", {
      style: S.foot
    }, /*#__PURE__*/React.createElement("div", {
      style: S.subRow
    }, /*#__PURE__*/React.createElement("span", {
      style: S.subLbl
    }, "Subtotal"), /*#__PURE__*/React.createElement(Price, {
      amount: subtotal,
      size: "md"
    })), /*#__PURE__*/React.createElement("p", {
      style: S.tax
    }, "Shipping & taxes calculated at checkout."), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      display: true,
      size: "lg",
      fullWidth: true,
      trailingIcon: /*#__PURE__*/React.createElement(Icon, {
        n: "arrow-right"
      })
    }, "Checkout"), /*#__PURE__*/React.createElement("button", {
      style: S.cont,
      onClick: onClose
    }, "Keep digging")) : null));
  }
  const S = {
    overlay: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'var(--overlay)',
      transition: 'opacity 180ms ease, visibility 180ms ease',
      display: 'flex',
      justifyContent: 'flex-end'
    },
    overlayOn: {
      opacity: 1,
      visibility: 'visible'
    },
    overlayOff: {
      opacity: 0,
      visibility: 'hidden'
    },
    panel: {
      width: 'min(420px, 100%)',
      height: '100%',
      background: 'var(--surface)',
      borderLeft: '2px solid var(--black)',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 220ms cubic-bezier(0.2,0.8,0.2,1)'
    },
    head: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 20px',
      borderBottom: '2px solid var(--black)'
    },
    title: {
      margin: 0,
      transform: 'var(--display-skew)',
      fontSize: '26px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    cnt: {
      fontFamily: 'var(--font-mono)',
      fontSize: '13px',
      background: 'var(--pink-500)',
      color: '#fff',
      border: '2px solid var(--black)',
      borderRadius: '999px',
      padding: '1px 9px',
      transform: 'skewX(7deg)'
    },
    ship: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px 20px',
      background: 'var(--ink-100)',
      borderBottom: '2px solid var(--black)',
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      letterSpacing: '0.04em',
      textTransform: 'uppercase'
    },
    list: {
      flex: 1,
      overflowY: 'auto',
      padding: '8px 20px'
    },
    row: {
      display: 'flex',
      gap: '14px',
      padding: '16px 0',
      borderBottom: '2px solid var(--ink-100)'
    },
    thumb: {
      width: '76px',
      height: '76px',
      objectFit: 'cover',
      border: '2px solid var(--black)',
      flex: 'none',
      background: 'var(--ink-950)'
    },
    rowBody: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minWidth: 0
    },
    rowTop: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '10px'
    },
    rowTitle: {
      margin: 0,
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: 1.2
    },
    rowVar: {
      margin: '4px 0 0',
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      color: 'var(--ink-500)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    },
    rm: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--ink-400)',
      padding: '2px',
      flex: 'none'
    },
    rowFoot: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '10px'
    },
    foot: {
      borderTop: '2px solid var(--black)',
      padding: '18px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    subRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    subLbl: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-600)'
    },
    tax: {
      margin: 0,
      fontSize: '12px',
      color: 'var(--ink-400)'
    },
    cont: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--ink-500)',
      padding: '2px'
    },
    empty: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '14px',
      padding: '60px 0',
      textAlign: 'center'
    },
    emptyTxt: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      color: 'var(--ink-500)',
      lineHeight: 1.6,
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    }
  };
  window.CartDrawer = CartDrawer;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/CartDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Catalog.jsx
try { (() => {
/* MSWYSL Storefront — Catalog (facets + product grid) */
(function () {
  const {
    ProductCard,
    Select,
    Checkbox,
    Tag,
    Badge
  } = window.MSWYSLDesignSystem_d8bb48;
  const TYPES = ['Apparel', 'Vinyl', 'Accessories'];
  function Catalog({
    products,
    title,
    onAdd,
    onOpen,
    showFacets = true,
    columns = 3
  }) {
    const [types, setTypes] = React.useState([]);
    const [inStock, setInStock] = React.useState(false);
    const [sort, setSort] = React.useState('new');
    let list = products.filter(p => types.length ? types.includes(p.type) : true);
    if (inStock) list = list.filter(p => !p.soldOut);
    if (sort === 'price') list = [...list].sort((a, b) => a.price - b.price);
    if (sort === 'price-d') list = [...list].sort((a, b) => b.price - a.price);
    const toggleType = t => setTypes(cur => cur.includes(t) ? cur.filter(x => x !== t) : [...cur, t]);
    return /*#__PURE__*/React.createElement("section", {
      style: S.root
    }, /*#__PURE__*/React.createElement("div", {
      style: S.head
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: S.crumb
    }, "Shop / ", /*#__PURE__*/React.createElement("b", {
      style: {
        color: 'var(--ink-950)'
      }
    }, title)), /*#__PURE__*/React.createElement("h2", {
      style: S.h2
    }, title)), /*#__PURE__*/React.createElement("div", {
      style: S.sortRow
    }, /*#__PURE__*/React.createElement("span", {
      style: S.count
    }, list.length, " items"), /*#__PURE__*/React.createElement("div", {
      style: {
        width: '200px'
      }
    }, /*#__PURE__*/React.createElement(Select, {
      value: sort,
      onChange: e => setSort(e.target.value),
      options: [{
        value: 'new',
        label: 'Sort: Newest'
      }, {
        value: 'price',
        label: 'Sort: Price ↑'
      }, {
        value: 'price-d',
        label: 'Sort: Price ↓'
      }]
    })))), /*#__PURE__*/React.createElement("div", {
      style: showFacets ? S.body : S.bodyFull
    }, showFacets ? /*#__PURE__*/React.createElement("aside", {
      style: S.facets
    }, /*#__PURE__*/React.createElement("div", {
      style: S.facetGroup
    }, /*#__PURE__*/React.createElement("p", {
      style: S.facetTitle
    }, "Category"), /*#__PURE__*/React.createElement("div", {
      style: S.checks
    }, TYPES.map(t => /*#__PURE__*/React.createElement(Checkbox, {
      key: t,
      label: t,
      checked: types.includes(t),
      onChange: () => toggleType(t)
    })))), /*#__PURE__*/React.createElement("div", {
      style: S.facetGroup
    }, /*#__PURE__*/React.createElement("p", {
      style: S.facetTitle
    }, "Availability"), /*#__PURE__*/React.createElement(Checkbox, {
      label: "In stock only",
      checked: inStock,
      onChange: e => setInStock(e.target.checked)
    })), /*#__PURE__*/React.createElement("div", {
      style: S.facetGroup
    }, /*#__PURE__*/React.createElement("p", {
      style: S.facetTitle
    }, "Genre"), /*#__PURE__*/React.createElement("div", {
      style: S.tags
    }, /*#__PURE__*/React.createElement(Tag, {
      onClick: () => {}
    }, "Death Metal"), /*#__PURE__*/React.createElement(Tag, {
      onClick: () => {}
    }, "Grindcore"), /*#__PURE__*/React.createElement(Tag, {
      onClick: () => {}
    }, "Doom"), /*#__PURE__*/React.createElement(Tag, {
      onClick: () => {}
    }, "Black Metal")))) : null, /*#__PURE__*/React.createElement("div", {
      style: {
        ...S.grid,
        gridTemplateColumns: `repeat(${columns}, 1fr)`
      }
    }, list.map(p => /*#__PURE__*/React.createElement(ProductCard, {
      key: p.id,
      image: p.image,
      artist: p.artist,
      title: p.title,
      price: p.price,
      compareAt: p.compareAt,
      badges: p.badges,
      rating: p.rating,
      reviews: p.reviews,
      soldOut: p.soldOut,
      onAddToCart: () => onAdd(p),
      onClick: () => onOpen(p)
    })))));
  }
  const S = {
    root: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '32px 28px 64px'
    },
    head: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: '20px',
      flexWrap: 'wrap',
      borderBottom: '2px solid var(--black)',
      paddingBottom: '16px',
      marginBottom: '24px'
    },
    crumb: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--ink-400)',
      margin: '0 0 6px'
    },
    h2: {
      margin: 0,
      transform: 'var(--display-skew)'
    },
    sortRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px'
    },
    count: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      color: 'var(--ink-500)'
    },
    body: {
      display: 'grid',
      gridTemplateColumns: '210px 1fr',
      gap: '28px',
      alignItems: 'start'
    },
    bodyFull: {
      display: 'block'
    },
    facets: {
      display: 'flex',
      flexDirection: 'column',
      gap: '22px',
      position: 'sticky',
      top: '92px'
    },
    facetGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    facetTitle: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-950)',
      margin: 0,
      borderBottom: '2px solid var(--ink-200)',
      paddingBottom: '8px'
    },
    checks: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    },
    tags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px'
    }
  };
  window.Catalog = Catalog;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Catalog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Footer.jsx
try { (() => {
/* MSWYSL Storefront — Footer */
(function () {
  const {
    Button,
    Input
  } = window.MSWYSLDesignSystem_d8bb48;
  const Icon = ({
    n
  }) => /*#__PURE__*/React.createElement("i", {
    "data-lucide": n
  });
  const COLS = [{
    h: 'Shop',
    items: ['New drops', 'Apparel', 'Vinyl', 'Accessories', 'Sale']
  }, {
    h: 'Help',
    items: ['Shipping', 'Returns', 'Size guide', 'Track order', 'Contact']
  }, {
    h: 'The Crypt',
    items: ['About', 'Stockists', 'Bootleg policy', 'Wholesale']
  }];
  function Footer() {
    return /*#__PURE__*/React.createElement("footer", {
      style: S.root
    }, /*#__PURE__*/React.createElement("div", {
      style: S.top
    }, /*#__PURE__*/React.createElement("div", {
      style: S.signup
    }, /*#__PURE__*/React.createElement("h3", {
      style: S.h3
    }, "Join the mailing list"), /*#__PURE__*/React.createElement("p", {
      style: S.sub
    }, "Drop alerts only. No hype, no spam, no mercy."), /*#__PURE__*/React.createElement("div", {
      style: S.form
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(Input, {
      placeholder: "you@domain.com"
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary"
    }, "Sign up"))), /*#__PURE__*/React.createElement("div", {
      style: S.cols
    }, COLS.map(c => /*#__PURE__*/React.createElement("div", {
      key: c.h,
      style: S.col
    }, /*#__PURE__*/React.createElement("p", {
      style: S.colH
    }, c.h), c.items.map(it => /*#__PURE__*/React.createElement("a", {
      key: it,
      href: "#",
      style: S.link
    }, it)))))), /*#__PURE__*/React.createElement("div", {
      style: S.wordWrap
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/wordmark-pink.png",
      alt: "MSWYSL",
      style: S.word
    })), /*#__PURE__*/React.createElement("div", {
      style: S.bottom
    }, /*#__PURE__*/React.createElement("span", {
      style: S.copy
    }, "\xA9 2026 MSWYSL Merchandising \xB7 Real as real can get"), /*#__PURE__*/React.createElement("div", {
      style: S.social
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: S.soc,
      "aria-label": "Instagram"
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "instagram"
    })), /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: S.soc,
      "aria-label": "YouTube"
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "youtube"
    })), /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: S.soc,
      "aria-label": "Bandcamp"
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "disc-3"
    })), /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: S.soc,
      "aria-label": "Email"
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "mail"
    })))));
  }
  const S = {
    root: {
      background: 'var(--ink-950)',
      color: 'var(--white)',
      borderTop: '2px solid var(--white)',
      overflow: 'hidden'
    },
    top: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '48px 28px 32px',
      display: 'grid',
      gridTemplateColumns: '1.1fr 1.4fr',
      gap: '48px'
    },
    signup: {},
    h3: {
      color: 'var(--white)',
      transform: 'var(--display-skew)',
      margin: '0 0 8px',
      fontSize: '26px'
    },
    sub: {
      color: 'var(--ink-400)',
      fontSize: '14px',
      margin: '0 0 18px'
    },
    form: {
      display: 'flex',
      gap: '10px',
      alignItems: 'stretch',
      maxWidth: '440px'
    },
    cols: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '24px'
    },
    col: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    },
    colH: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--lime-500)',
      margin: '0 0 4px'
    },
    link: {
      color: 'var(--ink-300)',
      textDecoration: 'none',
      fontSize: '14px'
    },
    wordWrap: {
      padding: '0 28px',
      display: 'flex',
      justifyContent: 'center'
    },
    word: {
      width: 'min(1100px, 100%)',
      opacity: 0.9
    },
    bottom: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px 28px 36px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '16px',
      flexWrap: 'wrap'
    },
    copy: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--ink-500)'
    },
    social: {
      display: 'flex',
      gap: '10px'
    },
    soc: {
      width: '38px',
      height: '38px',
      border: '2px solid var(--ink-700)',
      borderRadius: '2px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--white)'
    }
  };
  window.Footer = Footer;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Header.jsx
try { (() => {
/* MSWYSL Storefront — Header (announcement bar + nav) */
(function () {
  const {
    AnnouncementBar,
    IconButton,
    Input
  } = window.MSWYSLDesignSystem_d8bb48;
  const Icon = ({
    n
  }) => /*#__PURE__*/React.createElement("i", {
    "data-lucide": n
  });
  const NAV = ['Apparel', 'Vinyl', 'Accessories', 'Drops'];
  function Header({
    cartCount,
    activeNav,
    onNav,
    onCart,
    onSearch
  }) {
    return /*#__PURE__*/React.createElement("header", {
      style: S.root
    }, /*#__PURE__*/React.createElement(AnnouncementBar, {
      variant: "lime",
      marquee: true,
      speed: 26,
      items: ['New drop — Friday 6pm', 'Strictly limited', 'No restocks', 'Free shipping over $75']
    }), /*#__PURE__*/React.createElement("div", {
      style: S.bar
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNav('home');
      },
      style: S.brand,
      "aria-label": "MSWYSL home"
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/monogram-white.png",
      alt: "",
      style: S.mark
    }), /*#__PURE__*/React.createElement("span", {
      style: S.word
    }, "MSWYSL")), /*#__PURE__*/React.createElement("nav", {
      style: S.nav
    }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
      key: n,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNav('catalog', n);
      },
      style: {
        ...S.navlink,
        ...(activeNav === n ? S.navlinkOn : null)
      }
    }, n))), /*#__PURE__*/React.createElement("div", {
      style: S.search
    }, /*#__PURE__*/React.createElement(Input, {
      leadingIcon: /*#__PURE__*/React.createElement(Icon, {
        n: "search"
      }),
      placeholder: "Search the catalog",
      size: "sm",
      onKeyDown: e => {
        if (e.key === 'Enter') onSearch(e.target.value);
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: S.actions
    }, /*#__PURE__*/React.createElement(IconButton, {
      label: "Wishlist"
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "heart"
    })), /*#__PURE__*/React.createElement(IconButton, {
      label: "Cart",
      count: cartCount,
      onClick: onCart
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "shopping-bag"
    })))));
  }
  const S = {
    root: {
      position: 'sticky',
      top: 0,
      zIndex: 200,
      background: 'var(--ink-950)'
    },
    bar: {
      display: 'flex',
      alignItems: 'center',
      gap: '24px',
      padding: '14px 28px',
      borderBottom: '2px solid var(--white)'
    },
    brand: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      textDecoration: 'none',
      flex: 'none'
    },
    mark: {
      width: '34px',
      height: '34px',
      objectFit: 'contain'
    },
    word: {
      fontFamily: 'var(--font-display)',
      color: 'var(--white)',
      textTransform: 'uppercase',
      transform: 'var(--display-skew)',
      fontSize: '22px',
      letterSpacing: '-0.01em'
    },
    nav: {
      display: 'flex',
      gap: '22px',
      flex: 'none'
    },
    navlink: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-300)',
      textDecoration: 'none',
      paddingBottom: '2px',
      borderBottom: '2px solid transparent'
    },
    navlinkOn: {
      color: 'var(--white)',
      borderBottom: '2px solid var(--pink-500)'
    },
    search: {
      flex: 1,
      maxWidth: '320px',
      marginLeft: 'auto'
    },
    actions: {
      display: 'flex',
      gap: '10px',
      flex: 'none'
    }
  };
  window.Header = Header;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Hero.jsx
try { (() => {
/* MSWYSL Storefront — Hero */
(function () {
  const {
    Button,
    Badge
  } = window.MSWYSLDesignSystem_d8bb48;
  function Hero({
    onShop
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: S.root
    }, /*#__PURE__*/React.createElement("div", {
      style: S.grain
    }), /*#__PURE__*/React.createElement("div", {
      style: S.glow
    }), /*#__PURE__*/React.createElement("div", {
      style: S.inner
    }, /*#__PURE__*/React.createElement("div", {
      style: S.eyebrowRow
    }, /*#__PURE__*/React.createElement(Badge, {
      variant: "limited"
    }, "Drop 014"), /*#__PURE__*/React.createElement("span", {
      style: S.eyebrow
    }, "Out now \xB7 strictly limited")), /*#__PURE__*/React.createElement("img", {
      src: "../../assets/wordmark-pink.png",
      alt: "MSWYSL",
      style: S.word
    }), /*#__PURE__*/React.createElement("h1", {
      style: S.head
    }, "Rare death metal merch.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: S.lime
    }, "Real as real can get.")), /*#__PURE__*/React.createElement("p", {
      style: S.sub
    }, "Bootleg-grade tees, hoodies and wax for the underground. Hand-printed, hand-numbered, never restocked."), /*#__PURE__*/React.createElement("div", {
      style: S.ctas
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      display: true,
      size: "lg",
      onClick: onShop
    }, "Shop the drop"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "lg",
      onClick: onShop
    }, "Browse catalog")), /*#__PURE__*/React.createElement("div", {
      style: S.ticker
    }, /*#__PURE__*/React.createElement("span", null, "100% heavyweight cotton"), /*#__PURE__*/React.createElement("span", {
      style: S.dot
    }, "\u2736"), /*#__PURE__*/React.createElement("span", null, "Ships worldwide"), /*#__PURE__*/React.createElement("span", {
      style: S.dot
    }, "\u2736"), /*#__PURE__*/React.createElement("span", null, "No restocks"))));
  }
  const S = {
    root: {
      position: 'relative',
      background: 'var(--ink-950)',
      color: 'var(--white)',
      overflow: 'hidden',
      borderBottom: '2px solid var(--white)'
    },
    grain: {
      position: 'absolute',
      inset: 0,
      opacity: 0.06,
      pointerEvents: 'none',
      backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22/%3E%3C/svg%3E")'
    },
    glow: {
      position: 'absolute',
      top: '-30%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '780px',
      height: '780px',
      background: 'radial-gradient(circle, rgba(255,0,154,0.34), transparent 62%)',
      pointerEvents: 'none'
    },
    inner: {
      position: 'relative',
      maxWidth: '900px',
      margin: '0 auto',
      padding: '64px 28px 56px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    eyebrowRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '22px'
    },
    eyebrow: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-400)'
    },
    word: {
      width: 'min(620px, 86%)',
      height: 'auto',
      marginBottom: '26px'
    },
    head: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      transform: 'var(--display-skew)',
      fontSize: 'clamp(30px, 5vw, 52px)',
      lineHeight: 0.98,
      letterSpacing: '-0.02em',
      margin: '0 0 18px'
    },
    lime: {
      color: 'var(--lime-500)'
    },
    sub: {
      maxWidth: '560px',
      fontSize: '17px',
      lineHeight: 1.5,
      color: 'var(--ink-300)',
      margin: '0 0 28px'
    },
    ctas: {
      display: 'flex',
      gap: '14px',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: '34px'
    },
    ticker: {
      display: 'flex',
      gap: '14px',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-400)'
    },
    dot: {
      color: 'var(--pink-500)'
    }
  };
  window.Hero = Hero;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/ProductDetail.jsx
try { (() => {
/* MSWYSL Storefront — Product detail */
(function () {
  const {
    Button,
    Badge,
    Price,
    SkullRating,
    QuantityStepper,
    Tag,
    IconButton
  } = window.MSWYSLDesignSystem_d8bb48;
  const Icon = ({
    n
  }) => /*#__PURE__*/React.createElement("i", {
    "data-lucide": n
  });
  function ProductDetail({
    product,
    onBack,
    onAdd
  }) {
    const p = product;
    const [size, setSize] = React.useState(p.sizes && p.sizes.length ? p.sizes[0] : null);
    const [qty, setQty] = React.useState(1);
    return /*#__PURE__*/React.createElement("section", {
      style: S.root
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onBack,
      style: S.back
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "arrow-left"
    }), " Back to catalog"), /*#__PURE__*/React.createElement("div", {
      style: S.grid
    }, /*#__PURE__*/React.createElement("div", {
      style: S.media
    }, /*#__PURE__*/React.createElement("img", {
      src: p.image,
      alt: p.title,
      style: S.img
    }), p.badges && p.badges.length ? /*#__PURE__*/React.createElement("div", {
      style: S.badges
    }, p.badges.map((b, i) => /*#__PURE__*/React.createElement(Badge, {
      key: i,
      variant: b.variant
    }, b.label))) : null), /*#__PURE__*/React.createElement("div", {
      style: S.info
    }, /*#__PURE__*/React.createElement("span", {
      style: S.artist
    }, p.artist), /*#__PURE__*/React.createElement("h1", {
      style: S.title
    }, p.title), /*#__PURE__*/React.createElement("div", {
      style: S.ratingRow
    }, /*#__PURE__*/React.createElement(SkullRating, {
      value: p.rating,
      count: p.reviews,
      showValue: true
    }), /*#__PURE__*/React.createElement("span", {
      style: S.sku
    }, "SKU-", p.id.toUpperCase())), /*#__PURE__*/React.createElement("div", {
      style: S.priceRow
    }, /*#__PURE__*/React.createElement(Price, {
      amount: p.price,
      compareAt: p.compareAt,
      size: "lg"
    }), p.soldOut ? /*#__PURE__*/React.createElement(Badge, {
      variant: "soldout"
    }, "Sold out") : /*#__PURE__*/React.createElement(Badge, {
      variant: "new",
      dot: true
    }, "In stock")), /*#__PURE__*/React.createElement("p", {
      style: S.desc
    }, "Heavyweight 240gsm cotton, hand screen-printed in a back room that smells like solvent and victory. Hand-numbered. When this run is gone, it's gone \u2014 no restocks, no exceptions."), p.sizes && p.sizes.length ? /*#__PURE__*/React.createElement("div", {
      style: S.block
    }, /*#__PURE__*/React.createElement("p", {
      style: S.label
    }, "Size"), /*#__PURE__*/React.createElement("div", {
      style: S.sizes
    }, p.sizes.map(s => /*#__PURE__*/React.createElement(Tag, {
      key: s,
      onClick: () => setSize(s),
      selected: size === s
    }, s)))) : null, /*#__PURE__*/React.createElement("div", {
      style: S.buyRow
    }, /*#__PURE__*/React.createElement(QuantityStepper, {
      value: qty,
      onChange: setQty,
      max: 10
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      display: true,
      size: "lg",
      fullWidth: true,
      disabled: p.soldOut,
      onClick: () => onAdd(p, size, qty)
    }, p.soldOut ? 'Sold out' : `Add to cart · $${(p.price * qty).toFixed(0)}`), /*#__PURE__*/React.createElement(IconButton, {
      size: "lg",
      label: "Wishlist"
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "heart"
    }))), /*#__PURE__*/React.createElement("ul", {
      style: S.meta
    }, /*#__PURE__*/React.createElement("li", {
      style: S.metaItem
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "truck"
    }), " Ships worldwide in 3\u20135 days"), /*#__PURE__*/React.createElement("li", {
      style: S.metaItem
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "package"
    }), " Hand-numbered \xB7 limited run"), /*#__PURE__*/React.createElement("li", {
      style: S.metaItem
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "rotate-ccw"
    }), " Exchanges within 14 days")))));
  }
  const S = {
    root: {
      maxWidth: '1100px',
      margin: '0 auto',
      padding: '24px 28px 64px'
    },
    back: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--ink-600)',
      padding: '4px 0',
      marginBottom: '18px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '40px',
      alignItems: 'start'
    },
    media: {
      position: 'relative',
      border: '2px solid var(--black)',
      background: 'var(--ink-950)'
    },
    img: {
      width: '100%',
      display: 'block',
      aspectRatio: '1/1',
      objectFit: 'cover'
    },
    badges: {
      position: 'absolute',
      top: '14px',
      left: '14px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      alignItems: 'flex-start'
    },
    info: {
      display: 'flex',
      flexDirection: 'column'
    },
    artist: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--pink-600)'
    },
    title: {
      margin: '8px 0 12px',
      transform: 'var(--display-skew)',
      fontSize: '40px'
    },
    ratingRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '16px'
    },
    sku: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      color: 'var(--ink-400)'
    },
    priceRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      marginBottom: '18px'
    },
    desc: {
      fontSize: '15px',
      lineHeight: 1.6,
      color: 'var(--ink-700)',
      margin: '0 0 22px',
      borderTop: '2px solid var(--ink-200)',
      paddingTop: '18px'
    },
    block: {
      marginBottom: '22px'
    },
    label: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-950)',
      margin: '0 0 10px'
    },
    sizes: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px'
    },
    buyRow: {
      display: 'flex',
      gap: '12px',
      alignItems: 'center',
      marginBottom: '24px'
    },
    meta: {
      listStyle: 'none',
      padding: '18px 0 0',
      margin: 0,
      borderTop: '2px solid var(--ink-200)',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      color: 'var(--ink-600)'
    },
    metaItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  };
  window.ProductDetail = ProductDetail;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/ProductDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/products.js
try { (() => {
/* Fake catalog for the MSWYSL storefront UI kit. Window global, not a module. */
window.MS_PRODUCTS = [{
  id: 'exhumed-rites-ls',
  artist: 'Cadaverous Bloom',
  title: 'Exhumed Rites Long Sleeve',
  price: 38,
  compareAt: 52,
  image: '../../assets/merch/tee-black-pink.jpg',
  badges: [{
    label: 'Limited · 100',
    variant: 'limited'
  }],
  rating: 4.5,
  reviews: 128,
  type: 'Apparel',
  sizes: ['S', 'M', 'L', 'XL'],
  soldOut: false
}, {
  id: 'toxic-doom-hoodie',
  artist: 'Sunn Abyss',
  title: 'Toxic Doom Hoodie',
  price: 64,
  compareAt: null,
  image: '../../assets/merch/hood-ink-lime.jpg',
  badges: [{
    label: 'New',
    variant: 'new'
  }],
  rating: 5,
  reviews: 37,
  type: 'Apparel',
  sizes: ['M', 'L', 'XL'],
  soldOut: false
}, {
  id: 'necrotic-split-7',
  artist: 'Goregrind Split',
  title: 'Necrotic Split 7" Vinyl',
  price: 18,
  compareAt: null,
  image: '../../assets/merch/vinyl-ink-white.jpg',
  badges: [],
  rating: 4,
  reviews: 88,
  type: 'Vinyl',
  sizes: [],
  soldOut: true
}, {
  id: 'bootleg-tee-pink',
  artist: 'Morbid Effigy',
  title: 'Bootleg Logo Tee',
  price: 30,
  compareAt: null,
  image: '../../assets/merch/tee-pink-black.jpg',
  badges: [{
    label: 'New',
    variant: 'new'
  }],
  rating: 4.5,
  reviews: 54,
  type: 'Apparel',
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  soldOut: false
}, {
  id: 'cavern-longsleeve',
  artist: 'Cavernous Throne',
  title: 'Cavern Doom Long Sleeve',
  price: 42,
  compareAt: 56,
  image: '../../assets/merch/longsleeve-black-pink.jpg',
  badges: [{
    label: 'Limited · 50',
    variant: 'limited'
  }],
  rating: 5,
  reviews: 19,
  type: 'Apparel',
  sizes: ['S', 'M', 'L'],
  soldOut: false
}, {
  id: 'death-cap',
  artist: 'MSWYSL',
  title: 'Spiked Logo Cap',
  price: 28,
  compareAt: null,
  image: '../../assets/merch/cap-ink-pink.jpg',
  badges: [],
  rating: 4,
  reviews: 41,
  type: 'Accessories',
  sizes: ['OS'],
  soldOut: false
}, {
  id: 'woven-patch',
  artist: 'MSWYSL',
  title: 'Woven Logo Patch',
  price: 9,
  compareAt: null,
  image: '../../assets/merch/patch-pink-white.jpg',
  badges: [{
    label: 'Pre-order',
    variant: 'preorder'
  }],
  rating: 5,
  reviews: 210,
  type: 'Accessories',
  sizes: [],
  soldOut: false
}, {
  id: 'black-white-tee',
  artist: 'Funeral Pyre',
  title: 'Funeral Pyre Tee',
  price: 32,
  compareAt: null,
  image: '../../assets/merch/tee-black-white.jpg',
  badges: [],
  rating: 4.5,
  reviews: 73,
  type: 'Apparel',
  sizes: ['S', 'M', 'L', 'XL'],
  soldOut: false
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/products.js", error: String((e && e.message) || e) }); }

__ds_ns.Price = __ds_scope.Price;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.SkullRating = __ds_scope.SkullRating;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.AnnouncementBar = __ds_scope.AnnouncementBar;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.Select = __ds_scope.Select;

})();
