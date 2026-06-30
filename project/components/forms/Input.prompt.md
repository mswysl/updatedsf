**Input** — text field with mono uppercase label, hard border, lime focus ring. Supports `leadingIcon`, `hint`, and `error`.

```jsx
<Input label="Email" placeholder="you@domain.com" required />
<Input leadingIcon={<Search/>} placeholder="Search the catalog" />
<Input label="Discount code" error hint="Code expired" defaultValue="DOOM" />
```

Sizes: `sm` · `md` · `lg`.
