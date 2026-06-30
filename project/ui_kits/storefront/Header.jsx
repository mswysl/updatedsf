/* MSWYSL Storefront — Header (announcement bar + nav) */
(function () {
  const { AnnouncementBar, IconButton, Input } = window.MSWYSLDesignSystem_d8bb48;
  const Icon = ({ n }) => <i data-lucide={n}></i>;

  const NAV = ['Apparel', 'Vinyl', 'Accessories', 'Drops'];

  function Header({ cartCount, activeNav, onNav, onCart, onSearch }) {
    return (
      <header style={S.root}>
        <AnnouncementBar variant="lime" marquee speed={26}
          items={['New drop — Friday 6pm', 'Strictly limited', 'No restocks', 'Free shipping over $75']} />
        <div style={S.bar}>
          <a href="#" onClick={(e) => { e.preventDefault(); onNav('home'); }} style={S.brand} aria-label="MSWYSL home">
            <img src="../../assets/monogram-white.png" alt="" style={S.mark} />
            <span style={S.word}>MSWYSL</span>
          </a>
          <nav style={S.nav}>
            {NAV.map((n) => (
              <a key={n} href="#" onClick={(e) => { e.preventDefault(); onNav('catalog', n); }}
                 style={{ ...S.navlink, ...(activeNav === n ? S.navlinkOn : null) }}>{n}</a>
            ))}
          </nav>
          <div style={S.search}>
            <Input leadingIcon={<Icon n="search" />} placeholder="Search the catalog"
                   size="sm" onKeyDown={(e) => { if (e.key === 'Enter') onSearch(e.target.value); }} />
          </div>
          <div style={S.actions}>
            <IconButton label="Wishlist"><Icon n="heart" /></IconButton>
            <IconButton label="Cart" count={cartCount} onClick={onCart}><Icon n="shopping-bag" /></IconButton>
          </div>
        </div>
      </header>
    );
  }

  const S = {
    root: { position: 'sticky', top: 0, zIndex: 200, background: 'var(--ink-950)' },
    bar: { display: 'flex', alignItems: 'center', gap: '24px', padding: '14px 28px',
           borderBottom: '2px solid var(--white)' },
    brand: { display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flex: 'none' },
    mark: { width: '34px', height: '34px', objectFit: 'contain' },
    word: { fontFamily: 'var(--font-display)', color: 'var(--white)', textTransform: 'uppercase',
            transform: 'var(--display-skew)', fontSize: '22px', letterSpacing: '-0.01em' },
    nav: { display: 'flex', gap: '22px', flex: 'none' },
    navlink: { fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.1em',
               textTransform: 'uppercase', color: 'var(--ink-300)', textDecoration: 'none',
               paddingBottom: '2px', borderBottom: '2px solid transparent' },
    navlinkOn: { color: 'var(--white)', borderBottom: '2px solid var(--pink-500)' },
    search: { flex: 1, maxWidth: '320px', marginLeft: 'auto' },
    actions: { display: 'flex', gap: '10px', flex: 'none' },
  };

  window.Header = Header;
})();
