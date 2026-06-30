/* MSWYSL Storefront — Hero */
(function () {
  const { Button, Badge } = window.MSWYSLDesignSystem_d8bb48;

  function Hero({ onShop }) {
    return (
      <section style={S.root}>
        <div style={S.grain} />
        <div style={S.glow} />
        <div style={S.inner}>
          <div style={S.eyebrowRow}>
            <Badge variant="limited">Drop 014</Badge>
            <span style={S.eyebrow}>Out now · strictly limited</span>
          </div>
          <img src="../../assets/wordmark-pink.png" alt="MSWYSL" style={S.word} />
          <h1 style={S.head}>Rare death metal merch.<br/><span style={S.lime}>Real as real can get.</span></h1>
          <p style={S.sub}>Bootleg-grade tees, hoodies and wax for the underground. Hand-printed, hand-numbered, never restocked.</p>
          <div style={S.ctas}>
            <Button variant="primary" display size="lg" onClick={onShop}>Shop the drop</Button>
            <Button variant="outline" size="lg" onClick={onShop}>Browse catalog</Button>
          </div>
          <div style={S.ticker}>
            <span>100% heavyweight cotton</span><span style={S.dot}>✶</span>
            <span>Ships worldwide</span><span style={S.dot}>✶</span>
            <span>No restocks</span>
          </div>
        </div>
      </section>
    );
  }

  const S = {
    root: { position: 'relative', background: 'var(--ink-950)', color: 'var(--white)',
            overflow: 'hidden', borderBottom: '2px solid var(--white)' },
    grain: { position: 'absolute', inset: 0, opacity: 0.06, pointerEvents: 'none',
             backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22/%3E%3C/svg%3E")' },
    glow: { position: 'absolute', top: '-30%', left: '50%', transform: 'translateX(-50%)',
            width: '780px', height: '780px', background: 'radial-gradient(circle, rgba(255,0,154,0.34), transparent 62%)',
            pointerEvents: 'none' },
    inner: { position: 'relative', maxWidth: '900px', margin: '0 auto', padding: '64px 28px 56px',
             textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' },
    eyebrowRow: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '22px' },
    eyebrow: { fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.12em',
               textTransform: 'uppercase', color: 'var(--ink-400)' },
    word: { width: 'min(620px, 86%)', height: 'auto', marginBottom: '26px' },
    head: { fontFamily: 'var(--font-display)', textTransform: 'uppercase', transform: 'var(--display-skew)',
            fontSize: 'clamp(30px, 5vw, 52px)', lineHeight: 0.98, letterSpacing: '-0.02em', margin: '0 0 18px' },
    lime: { color: 'var(--lime-500)' },
    sub: { maxWidth: '560px', fontSize: '17px', lineHeight: 1.5, color: 'var(--ink-300)', margin: '0 0 28px' },
    ctas: { display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '34px' },
    ticker: { display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center',
              fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--ink-400)' },
    dot: { color: 'var(--pink-500)' },
  };

  window.Hero = Hero;
})();
