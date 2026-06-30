/* MSWYSL Storefront — Footer */
(function () {
  const { Button, Input } = window.MSWYSLDesignSystem_d8bb48;
  const Icon = ({ n }) => <i data-lucide={n}></i>;

  const COLS = [
    { h: 'Shop', items: ['New drops', 'Apparel', 'Vinyl', 'Accessories', 'Sale'] },
    { h: 'Help', items: ['Shipping', 'Returns', 'Size guide', 'Track order', 'Contact'] },
    { h: 'The Crypt', items: ['About', 'Stockists', 'Bootleg policy', 'Wholesale'] },
  ];

  function Footer() {
    return (
      <footer style={S.root}>
        <div style={S.top}>
          <div style={S.signup}>
            <h3 style={S.h3}>Join the mailing list</h3>
            <p style={S.sub}>Drop alerts only. No hype, no spam, no mercy.</p>
            <div style={S.form}>
              <div style={{ flex: 1 }}><Input placeholder="you@domain.com" /></div>
              <Button variant="secondary">Sign up</Button>
            </div>
          </div>
          <div style={S.cols}>
            {COLS.map((c) => (
              <div key={c.h} style={S.col}>
                <p style={S.colH}>{c.h}</p>
                {c.items.map((it) => <a key={it} href="#" style={S.link}>{it}</a>)}
              </div>
            ))}
          </div>
        </div>

        <div style={S.wordWrap}>
          <img src="../../assets/wordmark-pink.png" alt="MSWYSL" style={S.word} />
        </div>

        <div style={S.bottom}>
          <span style={S.copy}>© 2026 MSWYSL Merchandising · Real as real can get</span>
          <div style={S.social}>
            <a href="#" style={S.soc} aria-label="Instagram"><Icon n="instagram" /></a>
            <a href="#" style={S.soc} aria-label="YouTube"><Icon n="youtube" /></a>
            <a href="#" style={S.soc} aria-label="Bandcamp"><Icon n="disc-3" /></a>
            <a href="#" style={S.soc} aria-label="Email"><Icon n="mail" /></a>
          </div>
        </div>
      </footer>
    );
  }

  const S = {
    root: { background: 'var(--ink-950)', color: 'var(--white)', borderTop: '2px solid var(--white)', overflow: 'hidden' },
    top: { maxWidth: '1200px', margin: '0 auto', padding: '48px 28px 32px', display: 'grid',
           gridTemplateColumns: '1.1fr 1.4fr', gap: '48px' },
    signup: {},
    h3: { color: 'var(--white)', transform: 'var(--display-skew)', margin: '0 0 8px', fontSize: '26px' },
    sub: { color: 'var(--ink-400)', fontSize: '14px', margin: '0 0 18px' },
    form: { display: 'flex', gap: '10px', alignItems: 'stretch', maxWidth: '440px' },
    cols: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' },
    col: { display: 'flex', flexDirection: 'column', gap: '10px' },
    colH: { fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--lime-500)', margin: '0 0 4px' },
    link: { color: 'var(--ink-300)', textDecoration: 'none', fontSize: '14px' },
    wordWrap: { padding: '0 28px', display: 'flex', justifyContent: 'center' },
    word: { width: 'min(1100px, 100%)', opacity: 0.9 },
    bottom: { maxWidth: '1200px', margin: '0 auto', padding: '20px 28px 36px', display: 'flex',
              justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' },
    copy: { fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.06em',
            textTransform: 'uppercase', color: 'var(--ink-500)' },
    social: { display: 'flex', gap: '10px' },
    soc: { width: '38px', height: '38px', border: '2px solid var(--ink-700)', borderRadius: '2px',
           display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--white)' },
  };

  window.Footer = Footer;
})();
