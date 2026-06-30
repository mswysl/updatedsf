**Tag** — genre/category/filter chip (Death Metal, Vinyl, XL). Mono uppercase with a hard border. Static by default; pass `onClick` to make it a filter pill, `onRemove` to make it a removable active-filter chip.

```jsx
<Tag>Death Metal</Tag>
<Tag onClick={() => filter('vinyl')} selected>Vinyl</Tag>
<Tag onRemove={() => clear('xl')}>Size: XL</Tag>
```
