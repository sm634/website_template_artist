import { useState, useEffect } from 'react';
import { site } from '../content/site';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 640) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  function handleNavClick() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className={`header${scrolled ? ' header--scrolled' : ''}`} role="banner">
        <div className="header__inner">
          <a href="#top" className="header__logo" aria-label={`${site.title} — home`}>
            {site.title}
          </a>

          {/* Desktop nav */}
          <nav className="header__nav" aria-label="Main navigation">
            {site.nav.map((item) => (
              <a key={item.href} href={item.href} className="header__nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="header__menu-btn"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <nav id="mobile-nav" className="header__mobile-nav" aria-label="Mobile navigation">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="header__mobile-nav-link"
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </>
  );
}
