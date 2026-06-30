/* MSWYSL Storefront — Product detail */
(function () {
  const { Button, Badge, Price, SkullRating, QuantityStepper, Tag, IconButton } = window.MSWYSLDesignSystem_d8bb48;
  const Icon = ({ n }) => <i data-lucide={n}></i>;

  function ProductDetail({ product, onBack, onAdd }) {
    const p = product;
    const [size, setSize] = React.useState(p.sizes && p.sizes.length ? p.sizes[0] : null);
    const [qty, setQty] = React.useState(1);

    return (
      <section style={S.root}>
        <button onClick={onBack} style={S.back}><Icon n="arrow-left" /> Back to catalog</button>
        <div style={S.grid}>
          <div style={S.media}>
            <img src={p.image} alt={p.title} style={S.img} />
            {p.badges && p.badges.length ? (
              <div style={S.badges}>{p.badges.map((b, i) => <Badge key={i} variant={b.variant}>{b.label}</Badge>)}</div>
            ) : null}
          </div>

          <div style={S.info}>
            <span style={S.artist}>{p.artist}</span>
            <h1 style={S.title}>{p.title}</h1>
            <div style={S.ratingRow}>
              <SkullRating value={p.rating} count={p.reviews} showValue />
              <span style={S.sku}>SKU-{p.id.toUpperCase()}</span>
            </div>
            <div style={S.priceRow}>
              <Price amount={p.price} compareAt={p.compareAt} size="lg" />
              {p.soldOut ? <Badge variant="soldout">Sold out</Badge> : <Badge variant="new" dot>In stock</Badge>}
            </div>
            <p style={S.desc}>Heavyweight 240gsm cotton, hand screen-printed in a back room that smells like
              solvent and victory. Hand-numbered. When this run is gone, it's gone — no restocks, no exceptions.</p>

            {p.sizes && p.sizes.length ? (
              <div style={S.block}>
                <p style={S.label}>Size</p>
                <div style={S.sizes}>
                  {p.sizes.map((s) => (
                    <Tag key={s} onClick={() => setSize(s)} selected={size === s}>{s}</Tag>
                  ))}
                </div>
              </div>
            ) : null}

            <div style={S.buyRow}>
              <QuantityStepper value={qty} onChange={setQty} max={10} />
              <Button variant="primary" display size="lg" fullWidth disabled={p.soldOut}
                onClick={() => onAdd(p, size, qty)}>
                {p.soldOut ? 'Sold out' : `Add to cart · $${(p.price * qty).toFixed(0)}`}
              </Button>
              <IconButton size="lg" label="Wishlist"><Icon n="heart" /></IconButton>
            </div>

            <ul style={S.meta}>
              <li style={S.metaItem}><Icon n="truck" /> Ships worldwide in 3–5 days</li>
              <li style={S.metaItem}><Icon n="package" /> Hand-numbered · limited run</li>
              <li style={S.metaItem}><Icon n="rotate-ccw" /> Exchanges within 14 days</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }

  const S = {
    root: { maxWidth: '1100px', margin: '0 auto', padding: '24px 28px 64px' },
    back: { display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none',
            cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.08em',
            textTransform: 'uppercase', color: 'var(--ink-600)', padding: '4px 0', marginBottom: '18px' },
    grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' },
    media: { position: 'relative', border: '2px solid var(--black)', background: 'var(--ink-950)' },
    img: { width: '100%', display: 'block', aspectRatio: '1/1', objectFit: 'cover' },
    badges: { position: 'absolute', top: '14px', left: '14px', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' },
    info: { display: 'flex', flexDirection: 'column' },
    artist: { fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'var(--pink-600)' },
    title: { margin: '8px 0 12px', transform: 'var(--display-skew)', fontSize: '40px' },
    ratingRow: { display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' },
    sku: { fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ink-400)' },
    priceRow: { display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' },
    desc: { fontSize: '15px', lineHeight: 1.6, color: 'var(--ink-700)', margin: '0 0 22px',
            borderTop: '2px solid var(--ink-200)', paddingTop: '18px' },
    block: { marginBottom: '22px' },
    label: { fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em',
             textTransform: 'uppercase', color: 'var(--ink-950)', margin: '0 0 10px' },
    sizes: { display: 'flex', flexWrap: 'wrap', gap: '8px' },
    buyRow: { display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '24px' },
    meta: { listStyle: 'none', padding: '18px 0 0', margin: 0, borderTop: '2px solid var(--ink-200)',
            display: 'flex', flexDirection: 'column', gap: '10px', fontFamily: 'var(--font-mono)',
            fontSize: '12px', color: 'var(--ink-600)' },
    metaItem: { display: 'flex', alignItems: 'center', gap: '10px' },
  };

  window.ProductDetail = ProductDetail;
})();
