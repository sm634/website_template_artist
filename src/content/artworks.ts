// ============================================================
// artworks.ts — Edit this file to add, remove, or change artworks
// ============================================================
// Image paths are relative to the public directory.
// Place artwork images in: public/assets/artworks/
//
// Artwork status options: 'available' | 'sold' | 'personal collection' | 'not for sale'
// Collection options: any string — new collections appear automatically in the gallery filter

export type ArtworkStatus = 'available' | 'sold' | 'personal collection' | 'not for sale';

export interface Artwork {
  id: string;
  title: string;
  year: number;
  medium: string;
  size: string;
  description: string;
  imagePath: string;
  altText: string;
  collection: string;
  status: ArtworkStatus;
}

// ---- All collections (controls filter order in gallery) ----
export const collections: string[] = ['Botanica', 'Geometric Meditations', 'Urban Quiet'];

// ---- Artworks ----
export const artworks: Artwork[] = [
  {
    id: 'b-001',
    title: 'Fern Study No. 3',
    year: 2024,
    medium: 'Watercolour on cold-pressed paper',
    size: 'A4 (21 × 29.7 cm)',
    description:
      'A close observation of a single bracken fern, painted in overlapping transparent washes. The spiral unfurl at the tip became the starting point for an entire series.',
    imagePath: './assets/artworks/fern-study-3.svg',
    altText: 'A detailed watercolour of an unfurling fern frond in soft greens and ochres',
    collection: 'Botanica',
    status: 'available',
  },
  {
    id: 'b-002',
    title: 'Dried Honesty',
    year: 2023,
    medium: 'Watercolour and ink on cold-pressed paper',
    size: 'A5 (14.8 × 21 cm)',
    description:
      'Lunaria annua — the seed pods rendered in soft silver-grey washes with fine ink outlines, each translucent disc catching imaginary light.',
    imagePath: './assets/artworks/dried-honesty.svg',
    altText: 'Watercolour of honesty plant seed pods in soft silver and grey tones',
    collection: 'Botanica',
    status: 'sold',
  },
  {
    id: 'b-003',
    title: 'Garden Notes — Autumn',
    year: 2024,
    medium: 'Watercolour on cold-pressed paper',
    size: 'A4 (21 × 29.7 cm)',
    description:
      'A loose, joyful study of autumn garden findings — rosehips, a sprig of holly, dried seed heads — arranged as if pressed in a letter.',
    imagePath: './assets/artworks/garden-notes-autumn.svg',
    altText: 'A loose watercolour arrangement of autumn botanical specimens',
    collection: 'Botanica',
    status: 'available',
  },
  {
    id: 'gm-001',
    title: 'Mandala Study I',
    year: 2023,
    medium: 'Watercolour and fine liner on 300gsm paper',
    size: 'A4 (21 × 29.7 cm)',
    description:
      'The first in a series of mandala studies — eight-fold symmetry built up in layers of warm gold and terracotta washes, finished with precise ink linework.',
    imagePath: './assets/artworks/mandala-study-1.svg',
    altText: 'An eight-fold mandala in gold and terracotta watercolour with ink detail',
    collection: 'Geometric Meditations',
    status: 'personal collection',
  },
  {
    id: 'gm-002',
    title: 'Sixfold: Sage',
    year: 2024,
    medium: 'Watercolour on cold-pressed paper',
    size: 'A3 (29.7 × 42 cm)',
    description:
      'A large-format geometric study with sixfold rotational symmetry. Painted in sage green, dusty rose, and warm ivory — calm, balanced, still.',
    imagePath: './assets/artworks/sixfold-sage.svg',
    altText: 'A large geometric watercolour with sixfold symmetry in sage and rose tones',
    collection: 'Geometric Meditations',
    status: 'available',
  },
  {
    id: 'gm-003',
    title: 'Grid and Circle No. 2',
    year: 2024,
    medium: 'Watercolour and ink on cartridge paper',
    size: 'A5 (14.8 × 21 cm)',
    description:
      'Exploring the tension between the grid and the circle — a small, precise study in charcoal grey and warm white.',
    imagePath: './assets/artworks/grid-circle-2.svg',
    altText: 'A small geometric study in grey and white exploring grid and circular forms',
    collection: 'Geometric Meditations',
    status: 'available',
  },
  {
    id: 'uq-001',
    title: 'Bristol Dockside, Evening',
    year: 2022,
    medium: 'Watercolour on cold-pressed paper',
    size: 'A4 (21 × 29.7 cm)',
    description:
      'A loose urban landscape — the Bristol waterfront at dusk, soft reflections, the geometry of warehouses meeting the curve of the harbour.',
    imagePath: './assets/artworks/bristol-dockside.svg',
    altText: 'A loose watercolour of Bristol dockside in muted evening colours',
    collection: 'Urban Quiet',
    status: 'sold',
  },
  {
    id: 'uq-002',
    title: 'Corner Window',
    year: 2023,
    medium: 'Watercolour and ink on cold-pressed paper',
    size: 'A5 (14.8 × 21 cm)',
    description:
      'A quiet domestic interior — the angle of a corner window, morning light, the shadow of a plant on a white wall. Still and ordinary and enough.',
    imagePath: './assets/artworks/corner-window.svg',
    altText: 'A quiet watercolour interior showing a corner window with morning light',
    collection: 'Urban Quiet',
    status: 'available',
  },
];
