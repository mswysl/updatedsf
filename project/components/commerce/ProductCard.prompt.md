**ProductCard** — the catalog tile. Composes Badge + Price + SkullRating over a dark media well; lifts into a hard shadow on hover. Pass `soldOut` for the grayscale + blood stamp treatment.

```jsx
<ProductCard
  image="/merch/cadaver-tee.jpg"
  artist="Cadaverous Bloom"
  title="Exhumed Rites Long Sleeve"
  price={38} compareAt={52}
  badges={[{label:'Limited · 100', variant:'limited'}]}
  rating={4.5} reviews={128}
  onAddToCart={() => add(sku)}
/>
<ProductCard image="…" artist="Goregrind" title="Split 7&quot;" price={18} soldOut />
```
