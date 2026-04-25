// ============================================================
// theme.ts — Edit this file to change the colour theme
// ============================================================
// Set `activeTheme` to one of: 'warmEarth' | 'softSpiritual' | 'minimalMonochrome' | 'naturalCalm'

export type ThemePreset = 'warmEarth' | 'softSpiritual' | 'minimalMonochrome' | 'naturalCalm';

export interface Theme {
  name: ThemePreset;
  label: string;
  colors: {
    bg: string;
    surface: string;
    surfaceAlt: string;
    text: string;
    textMuted: string;
    accent: string;
    accentSoft: string;
    border: string;
    mandala: string;
  };
}

export const themes: Record<ThemePreset, Theme> = {
  warmEarth: {
    name: 'warmEarth',
    label: 'Warm Earth',
    colors: {
      bg: '#f5f0e8',
      surface: '#fffdf7',
      surfaceAlt: '#ede5d8',
      text: '#2c2416',
      textMuted: '#6b5a43',
      accent: '#c17d4a',
      accentSoft: '#e8c49a',
      border: '#d4c4a8',
      mandala: 'rgba(139, 90, 43, 0.10)',
    },
  },
  softSpiritual: {
    name: 'softSpiritual',
    label: 'Soft Spiritual',
    colors: {
      bg: '#faf8f5',
      surface: '#ffffff',
      surfaceAlt: '#f0eaf5',
      text: '#2a2030',
      textMuted: '#7a6880',
      accent: '#9b7eb0',
      accentSoft: '#d4bfe8',
      border: '#ddd4e8',
      mandala: 'rgba(130, 80, 160, 0.08)',
    },
  },
  minimalMonochrome: {
    name: 'minimalMonochrome',
    label: 'Minimal Monochrome',
    colors: {
      bg: '#f7f7f5',
      surface: '#ffffff',
      surfaceAlt: '#eeeeec',
      text: '#1a1a1a',
      textMuted: '#6b6b6b',
      accent: '#4a4a4a',
      accentSoft: '#c0c0bc',
      border: '#d8d8d4',
      mandala: 'rgba(60, 60, 60, 0.08)',
    },
  },
  naturalCalm: {
    name: 'naturalCalm',
    label: 'Natural Calm',
    colors: {
      bg: '#f4f0e8',
      surface: '#fdfbf6',
      surfaceAlt: '#e8ede0',
      text: '#23281a',
      textMuted: '#586045',
      accent: '#7a9e6b',
      accentSoft: '#b8d4a8',
      border: '#c8d8b8',
      mandala: 'rgba(80, 120, 60, 0.08)',
    },
  },
};

// ---- Change this to switch the active theme ----
export const activeTheme: ThemePreset = 'warmEarth';
