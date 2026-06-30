**IconButton** — square, icon-only control for headers and toolbars (search, cart, wishlist, menu). Pass one icon as children and an accessible `label`. `count` adds a lime cart badge.

```jsx
<IconButton label="Search"><Search/></IconButton>
<IconButton label="Cart" count={3}><ShoppingBag/></IconButton>
<IconButton variant="primary" label="Add to wishlist"><Heart/></IconButton>
```

Variants: `outline` (default), `primary`, `ghost`. Sizes: `sm` · `md` · `lg`.
