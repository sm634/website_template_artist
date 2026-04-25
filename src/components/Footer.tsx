import { site } from '../content/site';
import { artist } from '../content/artist';
import MandalaPattern from './MandalaPattern';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__brand">
          <div>{site.title}</div>
          <div className="footer__tagline">{site.tagline}</div>
        </div>

        <MandalaPattern size={72} className="footer__mandala" />

        <div className="footer__right">
          <nav className="footer__nav" aria-label="Footer navigation">
            {site.nav.map((item) => (
              <a key={item.href} href={item.href} className="footer__nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="footer__social" style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            {artist.contact.social.map((s) => (
              <a
                key={s.platform}
                href={s.href}
                className="footer__nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.platform}
              </a>
            ))}
          </div>

          <p className="footer__credit">{site.footer.credit}</p>
        </div>
      </div>
    </footer>
  );
}
