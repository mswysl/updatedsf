# Storefront UI Kit

An interactive, WooCommerce-style recreation of the **MSWYSL Merchandising** death-metal merch store. It composes the design-system primitives (`Button`, `IconButton`, `Badge`, `Tag`, `Input`, `Select`, `Checkbox`, `QuantityStepper`, `Price`, `SkullRating`, `ProductCard`, `AnnouncementBar`, `Toast`) — nothing is re-implemented here.

## Run
Open `index.html`. It loads `../../styles.css` and the generated `../../_ds_bundle.js`, plus React/Babel and Lucide from CDN.

## Flow (all fake, client-side)
- **Home** — announcement marquee, hero, "New Drops" grid, footer.
- **Catalog** — facet sidebar (category / availability / genre), sort, product grid. Reached via the nav (Apparel / Vinyl / Accessories / Drops).
- **Product** — gallery, skull rating, size pills, quantity, add-to-cart.
- **Cart drawer** — slide-in, line items with quantity steppers, free-shipping meter, checkout.
- **Toasts** — "Added to cart" confirmations.

## Files
- `index.html` — app shell + router state (also tagged as a Starting Point).
- `products.js` — fake catalog (`window.MS_PRODUCTS`).
- `Header.jsx` · `Hero.jsx` · `Catalog.jsx` · `ProductDetail.jsx` · `CartDrawer.jsx` · `Footer.jsx` — each registers a `window.<Name>` component.

## Notes
- Product imagery is **placeholder** — on-brand monogram comp shots generated from the logo, not real merch photography. Swap in real product photos in `assets/merch/`.
- Icons are **Lucide** (CDN), the system's chosen icon set.
