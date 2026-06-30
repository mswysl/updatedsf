---
name: mswysl-design
description: Use this skill to generate well-branded interfaces and assets for MSWYSL Merchandising (rare death-metal merch storefront), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick start
- Link the global stylesheet: `<link rel="stylesheet" href="styles.css">` — gives you every token + webfonts.
- Components are React, bundled to `window.MSWYSLDesignSystem_d8bb48.<Name>` (load `_ds_bundle.js`). See `components/**/*.prompt.md` for each one's API and `components/**/*.card.html` for live usage.
- Full storefront recreation: `ui_kits/storefront/`.

## The brand in one breath
Rare death-metal merch store. Brutal pink logo, clean hard-edged commerce system underneath. Voice: blunt, underground, anti-corporate — "real as real can get". Scarcity is the pitch (strictly limited, no restocks). No emoji.

## Non-negotiables
- Palette: hot pink `#FF009A`, toxic lime `#79FF04`, black, white (+ neutral ink ramp). Lime is a jolt — use sparingly.
- Type: Archivo Black UPPERCASE + `-7°` skew for display (substitute for Incised 901 Nord Italic), Archivo for body, Space Mono for labels/SKUs/prices.
- Hard 2px black borders, square corners (≤4px), **hard offset shadows** (no blur). Soft shadows only for floating UI.
- Press = translate into the shadow. Focus = lime ring. Snappy motion, no bounce.
- Icons: Lucide. Reviews use skulls, not stars.

## Caveats
- Display font is a substitute (see README font note). Swap in the licensed Incised 901 Nord Italic if available.
- Product imagery in `assets/merch/` is placeholder generated from the logo — replace with real photography.
