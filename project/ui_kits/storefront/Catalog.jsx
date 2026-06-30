/* MSWYSL Storefront — Catalog (facets + product grid) */
(function () {
  const { ProductCard, Select, Checkbox, Tag, Badge } = window.MSWYSLDesignSystem_d8bb48;

  const TYPES = ['Apparel', 'Vinyl', 'Accessories'];

  function Catalog({ products, title, onAdd, onOpen, showFacets = true, columns = 3 }) {
    const [types, setTypes] = React.useState([]);
    const [inStock, setInStock] = React.useState(false);
    const [sort, setSort] = React.useState('new');

    let list = products.filter((p) => (types.length ? types.includes(p.type) : true));
    if (inStock) list = list.filter((p) => !p.soldOut);
    if (sort === 'price') list = [...list].sort((a, b) => a.price - b.price);
    if (sort === 'price-d') list = [...list].sort((a, b) => b.price - a.price);

    const toggleType = (t) => setTypes((cur) => cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]);

    return (
      <section style={S.root}>
        <div style={S.head}>
          <div>
            <p style={S.crumb}>Shop / <b style={{color:'var(--ink-950)'}}>{title}</b></p>
            <h2 style={S.h2}>{title}</h2>
          </div>
          <div style={S.sortRow}>
            <span style={S.count}>{list.length} items</span>
            <div style={{width:'200px'}}>
              <Select value={sort} onChange={(e) => setSort(e.target.value)} options={[
                { value: 'new', label: 'Sort: Newest' },
                { value: 'price', label: 'Sort: Price ↑' },
                { value: 'price-d', label: 'Sort: Price ↓' },
              ]} />
            </div>
          </div>
        </div>

        <div style={showFacets ? S.body : S.bodyFull}>
          {showFacets ? (
          <aside style={S.facets}>
            <div style={S.facetGroup}>
              <p style={S.facetTitle}>Category</p>
              <div style={S.checks}>
                {TYPES.map((t) => (
                  <Checkbox key={t} label={t} checked={types.includes(t)} onChange={() => toggleType(t)} />
                ))}
              </div>
            </div>
            <div style={S.facetGroup}>
              <p style={S.facetTitle}>Availability</p>
              <Checkbox label="In stock only" checked={inStock} onChange={(e) => setInStock(e.target.checked)} />
            </div>
            <div style={S.facetGroup}>
              <p style={S.facetTitle}>Genre</p>
              <div style={S.tags}>
                <Tag onClick={() => {}}>Death Metal</Tag>
                <Tag onClick={() => {}}>Grindcore</Tag>
                <Tag onClick={() => {}}>Doom</Tag>
                <Tag onClick={() => {}}>Black Metal</Tag>
              </div>
            </div>
          </aside>
          ) : null}

          <div style={{ ...S.grid, gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
            {list.map((p) => (
              <ProductCard key={p.id} image={p.image} artist={p.artist} title={p.title}
                price={p.price} compareAt={p.compareAt} badges={p.badges} rating={p.rating}
                reviews={p.reviews} soldOut={p.soldOut}
                onAddToCart={() => onAdd(p)} onClick={() => onOpen(p)} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  const S = {
    root: { maxWidth: '1200px', margin: '0 auto', padding: '32px 28px 64px' },
    head: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '20px',
            flexWrap: 'wrap', borderBottom: '2px solid var(--black)', paddingBottom: '16px', marginBottom: '24px' },
    crumb: { fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em',
             textTransform: 'uppercase', color: 'var(--ink-400)', margin: '0 0 6px' },
    h2: { margin: 0, transform: 'var(--display-skew)' },
    sortRow: { display: 'flex', alignItems: 'center', gap: '14px' },
    count: { fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--ink-500)' },
    body: { display: 'grid', gridTemplateColumns: '210px 1fr', gap: '28px', alignItems: 'start' },
    bodyFull: { display: 'block' },
    facets: { display: 'flex', flexDirection: 'column', gap: '22px', position: 'sticky', top: '92px' },
    facetGroup: { display: 'flex', flexDirection: 'column', gap: '12px' },
    facetTitle: { fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: 'var(--ink-950)', margin: 0,
                  borderBottom: '2px solid var(--ink-200)', paddingBottom: '8px' },
    checks: { display: 'flex', flexDirection: 'column', gap: '10px' },
    tags: { display: 'flex', flexWrap: 'wrap', gap: '8px' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' },
  };

  window.Catalog = Catalog;
})();
