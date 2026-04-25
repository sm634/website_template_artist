import { useEffect } from 'react';
import { themes, activeTheme } from './content/theme';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function applyTheme() {
  const theme = themes[activeTheme];
  const root = document.documentElement;
  const { colors } = theme;

  root.style.setProperty('--bg', colors.bg);
  root.style.setProperty('--surface', colors.surface);
  root.style.setProperty('--surface-alt', colors.surfaceAlt);
  root.style.setProperty('--text', colors.text);
  root.style.setProperty('--text-muted', colors.textMuted);
  root.style.setProperty('--accent', colors.accent);
  root.style.setProperty('--accent-soft', colors.accentSoft);
  root.style.setProperty('--border', colors.border);
  root.style.setProperty('--mandala-color', colors.mandala);
}

export default function App() {
  useEffect(() => {
    applyTheme();
  }, []);

  return (
    <>
      <a href="#main-content" className="visually-hidden" style={{ position: 'absolute' }}>
        Skip to main content
      </a>
      <Header />
      <Home />
      <Footer />
    </>
  );
}
