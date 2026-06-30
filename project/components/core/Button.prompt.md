**Button** — the primary action control. Hard black border + offset shadow that presses in on click; uppercase and tracked-out. Reach for `display` when you want the loud, skewed poster CTA.

```jsx
<Button variant="primary" size="lg">Add to cart</Button>
<Button variant="secondary" leadingIcon={<ShoppingBag/>}>Checkout</Button>
<Button variant="outline">Size guide</Button>
<Button variant="ghost" size="sm">Cancel</Button>
<Button variant="primary" display size="lg">Shop the drop</Button>
```

Variants: `primary` (pink), `secondary` (lime), `outline`, `ghost`, `danger` (blood red). Sizes: `sm` 36 · `md` 44 · `lg` 56. Props: `display`, `fullWidth`, `leadingIcon`, `trailingIcon`, `as` (e.g. `'a'`).
