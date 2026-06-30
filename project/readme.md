# MSWYSL Merchandising — Design System

> Real as real can get.

The brand system for **MSWYSL Merchandising** — a storefront for rare death-metal merch. The aesthetic is deliberately **balanced**: a brutal, near-illegible death-metal logo up top, sitting on a clean, usable, hard-edged commerce system underneath. Loud where it counts (logo, hero, drops), legible everywhere it has to sell.

- **Product / surface:** ecommerce storefront (WooCommerce / WordPress).
- **Sells:** bootleg-grade death-metal merch — tees, long sleeves, hoodies, vinyl, accessories. Hand-printed, hand-numbered, strictly limited, never restocked.
- **Audience:** the metal underground. People who know.

## Sources provided
- **Brand wordmark** — brutal death-metal logotype, hot pink with black outline → `assets/wordmark-pink.png` (recolors: `-black`, `-white`).
- **Brand monogram** — spiked "MW"-style mark → `assets/monogram-pink.png` (recolors: `-black`, `-white`, `-lime`).
- **Palette reference** — `assets/palette-reference.jpg` (the four brand colors).
- **Specified display font:** *Incised 901 Nord Italic* (Bitstream). See substitution note below.
- No codebase or Figma was provided; the system is derived from the brand assets, the four-color palette, and the stated voice ("real as real can get; fuck the system").

---

## CONTENT FUNDAMENTALS

**Voice:** underground, blunt, anti-corporate, a little menacing. The shop talks like a person who runs a distro out of a basement, not a marketing team. Confident, scarce, never desperate.

**Casing**
- **UPPERCASE** for product names, section headers, CTAs, nav, labels, badges. This is the brand's default "voice" register.
- **Sentence case** for body copy and product descriptions so they stay readable.
- **lowercase** asides are fine for attitude ("no restocks", "go get something rare").

**Person:** second person to the customer ("your cart is empty", "go get something rare"), first-person-plural only when unavoidable and still terse ("we'll email you. maybe."). Never "we're thrilled to…".

**Tone rules**
- Scarcity is the whole pitch: *strictly limited · hand-numbered · no restocks · when it's gone, it's gone.*
- Dry, deadpan humor over hype. "Sold out" stamps, "fuck the resellers", "drop alerts only. no hype, no spam, no mercy."
- **No emoji.** Ever. Use the ✶ asterisk/star glyph as the only decorative separator in mono strings.
- No exclamation spam, no "🔥 SALE 🔥", no growth-hack copy.

**Specific examples**
- Hero: "Rare death metal merch. Real as real can get."
- Eyebrow: "Out now · strictly limited"
- Stock: "In stock" / "Sold out" / "Pre-order" / "Limited · 100"
- Cart empty: "Your cart is empty. Go get something rare."
- Newsletter: "Drop alerts only. No hype, no spam, no mercy."
- Reviews are measured in **skulls**, not stars.

---

## VISUAL FOUNDATIONS

**Palette** — four brand colors, used hard:
- **Hot pink `#FF009A`** — primary. Actions, the logo, accents, sale prices.
- **Toxic lime `#79FF04`** — secondary highlight. In-stock, sale stamps, focus rings, energy. Used sparingly so it stays a jolt.
- **Black `#000`** and **White `#FFF`** — structure. Most surfaces are white (paper) or true black (`--ink-950`); a neutral `ink` ramp keeps the storefront readable. One extension color, **blood `#E10600`**, is reserved for destructive/sold-out only (flagged — not part of the original four).

**Type**
- **Display:** Archivo Black, **UPPERCASE**, skewed ~`-7°` oblique (`--display-skew`) — the merch-poster voice (substitute for Incised 901 Nord Italic).
- **Body/UI:** Archivo — clean grotesque for descriptions and controls.
- **Labels / SKUs / prices:** Space Mono — utilitarian, punk-receipt energy. Eyebrows are mono, uppercase, tracked out (`0.1em`).

**Backgrounds:** flat black or flat paper-white — no gradients as decoration. The one exception is a single radial **pink glow** behind the hero. Subtle film **grain** (SVG noise at ~6% opacity) is allowed on large dark fields. No stock photography baked into the system; imagery is the merch itself on black.

**Borders & corners:** the signature is the **2px solid black rule** (`--border-strong`) and **hard, square corners**. Max rounding on any UI is 4px; default is 0. Think gig poster / screen print / sticker.

**Shadows:** the brand shadow is a **hard offset shadow with no blur** (`--shadow-hard`, and pink/lime variants) — poster/sticker depth. Soft blurred shadows (`--shadow-pop`, `--shadow-modal`) are reserved strictly for floating UI (menus, dialogs, drawers, toasts).

**Interaction**
- **Hover:** buttons darken to the `-600` ramp step; cards **lift** (`translate(-2px,-4px)`) into a hard shadow and the product image scales `1.04`; nav links get a pink underline.
- **Press:** controls **press into their shadow** — `translate(3px,3px)` with the offset shadow collapsing to `0`. Tactile, no bounce.
- **Focus:** always-visible **toxic-lime ring** (`--focus-ring`), often doubled with a black ring for contrast.
- **Motion:** snappy, short (`70–280ms`), `ease-out`. No wobble, no spring, no infinite decorative loops except the optional announcement marquee. Respects `prefers-reduced-motion`.

**Transparency & blur:** used minimally — only the cart/modal scrim (`--overlay`, ~72% black). No frosted glass.

**Cards:** white surface, 2px black border, square corners, no shadow at rest → lifts into a hard shadow on hover. Product images sit in a **dark well** (`--ink-950`) so pink/lime merch pops. Sold-out cards grayscale the image and get a rotated blood "SOLD OUT" stamp.

**Layout:** max content width `1200px`; 8px spacing grid; sticky dark header; generous section padding (`96px`). Hard 2px black rules divide major sections.

---

## ICONOGRAPHY

- **Icon set:** **Lucide** (https://lucide.dev), loaded from CDN (`lucide@0.456.0`). Chosen as a **substitution** — the brand had no icon set of its own, and Lucide's clean, consistent 2px line work is the right counterweight to the brutal logo (the "clean usable system" half of the balance). *Flag: confirm or swap if you have a preferred set.*
  - Usage: `<i data-lucide="shopping-bag"></i>` then `lucide.createIcons()`. Default 18px, `stroke-width` 2; primitives size their own icons.
  - Common glyphs: `search`, `shopping-bag`, `heart`, `menu`, `x`, `truck`, `package`, `rotate-ccw`, `arrow-right`, `arrow-left`, `trash-2`, `check`, `instagram`, `youtube`, `disc-3`, `mail`.
- **Custom brand glyph:** the **skull** — drawn inline in `SkullRating` as the review unit (skulls, not stars). This is the one bespoke icon and it's intentional.
- **Logo as icon:** the spiked monogram (`assets/monogram-*.png`) is the favicon / app-icon / stamp / hangtag mark.
- **No emoji.** The only non-icon glyph in use is the ✶ star/asterisk as a separator in mono ticker/marquee strings.

---

## VISUAL FONT SUBSTITUTION — ACTION NEEDED

The specified display face **Incised 901 Nord Italic** (Bitstream's clone of Antique Olive Nord — extremely heavy, wide, oblique) is a **licensed/paid font not available on Google Fonts**. It is substituted with **Archivo Black**, skewed for the oblique, as the closest free match. Body uses **Archivo**; labels use **Space Mono** (both Google Fonts).

➡️ **If you have the licensed Incised 901 Nord Italic web files, drop the WOFF2 into `assets/fonts/` and replace the `@import` in `tokens/fonts.css` with a local `@font-face`.** Until then, headings approximate — not match — the real logotype.

---

## INDEX / MANIFEST

**Root**
- `styles.css` — global entry point (consumers link this). `@import` list only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills-compatible entry.

**Tokens** (`tokens/`, all reachable from `styles.css`)
- `fonts.css` — webfont `@import` + substitution note.
- `colors.css` — brand core, pink/lime/ink ramps, semantic aliases, `.on-dark` scope.
- `typography.css` — families, scale, weights, tracking, semantic type roles.
- `spacing.css` — spacing grid, radii (hard), containers, control sizes, z-index.
- `effects.css` — border widths, hard + soft shadows, focus, motion.
- `base.css` — element defaults so bare HTML is on-brand.

**Components** (`components/`) — 13 primitives, `window.MSWYSLDesignSystem_d8bb48.<Name>`
- `core/` — `Button`, `IconButton`, `Badge`, `Tag`
- `forms/` — `Input`, `Select`, `Checkbox`, `QuantityStepper`
- `commerce/` — `Price`, `SkullRating`, `ProductCard`
- `feedback/` — `AnnouncementBar`, `Toast`
- Each has `.jsx` + `.d.ts` + `.prompt.md`; each directory has a `*.card.html` showcase.

**UI kit** (`ui_kits/storefront/`)
- Interactive home / catalog / product / cart recreation. See its `README.md`.

**Foundation cards** (`guidelines/cards/`) — specimen cards for the Design System tab (Colors, Type, Spacing, Brand).

**Assets** (`assets/`)
- `wordmark-*.png`, `monogram-*.png` — logo variants (pink / black / white / lime).
- `palette-reference.jpg` — source palette.
- `merch/*.jpg` — **placeholder** product comps generated from the monogram. Replace with real photography.
