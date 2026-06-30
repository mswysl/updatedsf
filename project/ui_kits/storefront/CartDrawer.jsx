/* MSWYSL Storefront — Cart drawer */
(function () {
  const { Button, Price, QuantityStepper, IconButton, Badge } = window.MSWYSLDesignSystem_d8bb48;
  const Icon = ({ n }) => <i data-lucide={n}></i>;

  function CartDrawer({ open, items, onClose, onQty, onRemove }) {
    const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
    const freeAt = 75;
    const toFree = Math.max(0, freeAt - subtotal);

    return (
      <div style={{ ...S.overlay, ...(open ? S.overlayOn : S.overlayOff) }} onClick={onClose}>
        <aside style={{ ...S.panel, transform: open ? 'translateX(0)' : 'translateX(100%)' }}
               onClick={(e) => e.stopPropagation()}>
          <div style={S.head}>
            <h3 style={S.title}>Cart <span style={S.cnt}>{items.length}</span></h3>
            <IconButton label="Close cart" variant="ghost" onClick={onClose}><Icon n="x" /></IconButton>
          </div>

          {toFree > 0 ? (
            <div style={S.ship}><Icon n="truck" /> ${toFree.toFixed(0)} from free shipping</div>
          ) : (
            <div style={{ ...S.ship, background: 'var(--lime-500)', color: 'var(--black)' }}><Icon n="check" /> Free shipping unlocked</div>
          )}

          <div style={S.list}>
            {items.length === 0 ? (
              <div style={S.empty}>
                <img src="../../assets/monogram-black.png" alt="" style={{ width: '60px', opacity: 0.25 }} />
                <p style={S.emptyTxt}>Your cart is empty.<br/>Go get something rare.</p>
              </div>
            ) : items.map((it) => (
              <div key={it.key} style={S.row}>
                <img src={it.image} alt={it.title} style={S.thumb} />
                <div style={S.rowBody}>
                  <div style={S.rowTop}>
                    <div>
                      <p style={S.rowTitle}>{it.title}</p>
                      <p style={S.rowVar}>{it.artist}{it.size ? ` · ${it.size}` : ''}</p>
                    </div>
                    <button style={S.rm} onClick={() => onRemove(it.key)} aria-label="Remove"><Icon n="trash-2" /></button>
                  </div>
                  <div style={S.rowFoot}>
                    <QuantityStepper size="sm" value={it.qty} onChange={(q) => onQty(it.key, q)} max={10} />
                    <Price amount={it.price * it.qty} size="sm" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {items.length > 0 ? (
            <div style={S.foot}>
              <div style={S.subRow}>
                <span style={S.subLbl}>Subtotal</span>
                <Price amount={subtotal} size="md" />
              </div>
              <p style={S.tax}>Shipping &amp; taxes calculated at checkout.</p>
              <Button variant="primary" display size="lg" fullWidth trailingIcon={<Icon n="arrow-right" />}>Checkout</Button>
              <button style={S.cont} onClick={onClose}>Keep digging</button>
            </div>
          ) : null}
        </aside>
      </div>
    );
  }

  const S = {
    overlay: { position: 'fixed', inset: 0, zIndex: 1000, background: 'var(--overlay)',
               transition: 'opacity 180ms ease, visibility 180ms ease', display: 'flex', justifyContent: 'flex-end' },
    overlayOn: { opacity: 1, visibility: 'visible' },
    overlayOff: { opacity: 0, visibility: 'hidden' },
    panel: { width: 'min(420px, 100%)', height: '100%', background: 'var(--surface)',
             borderLeft: '2px solid var(--black)', display: 'flex', flexDirection: 'column',
             transition: 'transform 220ms cubic-bezier(0.2,0.8,0.2,1)' },
    head: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 20px',
            borderBottom: '2px solid var(--black)' },
    title: { margin: 0, transform: 'var(--display-skew)', fontSize: '26px', display: 'flex', alignItems: 'center', gap: '10px' },
    cnt: { fontFamily: 'var(--font-mono)', fontSize: '13px', background: 'var(--pink-500)', color: '#fff',
           border: '2px solid var(--black)', borderRadius: '999px', padding: '1px 9px', transform: 'skewX(7deg)' },
    ship: { display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: 'var(--ink-100)',
            borderBottom: '2px solid var(--black)', fontFamily: 'var(--font-mono)', fontSize: '12px',
            letterSpacing: '0.04em', textTransform: 'uppercase' },
    list: { flex: 1, overflowY: 'auto', padding: '8px 20px' },
    row: { display: 'flex', gap: '14px', padding: '16px 0', borderBottom: '2px solid var(--ink-100)' },
    thumb: { width: '76px', height: '76px', objectFit: 'cover', border: '2px solid var(--black)', flex: 'none', background: 'var(--ink-950)' },
    rowBody: { flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minWidth: 0 },
    rowTop: { display: 'flex', justifyContent: 'space-between', gap: '10px' },
    rowTitle: { margin: 0, fontWeight: 700, fontSize: '14px', lineHeight: 1.2 },
    rowVar: { margin: '4px 0 0', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ink-500)', textTransform: 'uppercase', letterSpacing: '0.06em' },
    rm: { background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink-400)', padding: '2px', flex: 'none' },
    rowFoot: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' },
    foot: { borderTop: '2px solid var(--black)', padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: '12px' },
    subRow: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
    subLbl: { fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-600)' },
    tax: { margin: 0, fontSize: '12px', color: 'var(--ink-400)' },
    cont: { background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: '11px',
            letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-500)', padding: '2px' },
    empty: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', padding: '60px 0', textAlign: 'center' },
    emptyTxt: { fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--ink-500)', lineHeight: 1.6, textTransform: 'uppercase', letterSpacing: '0.06em' },
  };

  window.CartDrawer = CartDrawer;
})();
