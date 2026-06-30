**Select** — native dropdown with hard border + heavy caret. Size / sort / variant pickers. Pass `options` or `<option>` children.

```jsx
<Select placeholder="Select size" options={['S','M','L','XL']} />
<Select options={[{value:'new',label:'Newest'},{value:'price',label:'Price'}]} />
```

Sizes: `sm` · `md` · `lg`.
