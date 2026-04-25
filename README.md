# Artist Portfolio Template

A static artist portfolio website built with React and TypeScript (Vite). Clean, elegant, mandala-inspired aesthetic. Fully editable content through configuration files — no code changes needed for personalisation.

---

## Quick Start

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build static site

```bash
npm run build
```

The production-ready files are output to the `dist/` folder.

### Preview the build

```bash
npm run preview
```

---

## Editing Content

All content is stored in `src/content/`. Edit these files to personalise the site — no component code needs to change.

| File | What it controls |
|------|-----------------|
| `src/content/site.ts` | Site title, tagline, navigation links, footer |
| `src/content/artist.ts` | Artist bio, statement, process steps, exhibitions, commissions, contact |
| `src/content/artworks.ts` | All artwork entries (title, year, medium, size, description, image, status) |
| `src/content/theme.ts` | Colour theme (four presets available, or customise) |

### Changing the colour theme

Open `src/content/theme.ts` and change the `activeTheme` export at the bottom of the file:

```ts
// Options: 'warmEarth' | 'softSpiritual' | 'minimalMonochrome' | 'naturalCalm'
export const activeTheme: ThemePreset = 'warmEarth';
```

To create a custom theme, add a new entry to the `themes` object following the same structure.

---

## Adding Artwork

1. Place your image file in `public/assets/artworks/` (JPG, PNG, or WebP recommended).
2. Open `src/content/artworks.ts` and add a new entry to the `artworks` array:

```ts
{
  id: 'unique-id',
  title: 'My New Painting',
  year: 2024,
  medium: 'Watercolour on cold-pressed paper',
  size: 'A4 (21 × 29.7 cm)',
  description: 'A short description of the work.',
  imagePath: './assets/artworks/my-new-painting.jpg',
  altText: 'Descriptive alt text for accessibility',
  collection: 'Botanica',        // must match an entry in `collections`
  status: 'available',           // 'available' | 'sold' | 'personal collection' | 'not for sale'
},
```

3. If you are adding a new collection, add it to the `collections` array at the top of the same file — this controls the order of filter buttons in the gallery.

---

## Adding Artist Profile Photo

Place your photo at:

```
public/assets/artworks/artist-profile.jpg
```

Or update the `profileImagePath` in `src/content/artist.ts` to point to your preferred path.

---

## Deployment

### GitHub Pages

1. In `vite.config.ts`, set `base` to your repository name:

```ts
base: '/your-repo-name/',
```

2. Build the site:

```bash
npm run build
```

3. Deploy the `dist/` folder. Using the [gh-pages](https://github.com/tschaub/gh-pages) package:

```bash
npx gh-pages -d dist
```

Or configure GitHub Actions to deploy automatically on push.

### Netlify

1. Connect your repository to Netlify.
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Netlify detects Vite projects automatically. No additional configuration needed.

### Vercel

1. Import your repository in Vercel.
2. Vercel detects Vite/React automatically and configures everything.
3. Deploy.

---

## Project Structure

```
src/
  components/
    Header.tsx          # Fixed navigation with mobile hamburger menu
    Footer.tsx          # Footer with nav links and social links
    Section.tsx         # Reusable section wrapper
    ArtworkCard.tsx     # Individual artwork card (clickable)
    GalleryGrid.tsx     # Gallery with collection filter + artwork modal
    MandalaPattern.tsx  # SVG mandala decorative element
    Button.tsx          # Reusable button / link component
  content/
    site.ts             # Site-wide config (title, nav, footer)
    artist.ts           # Artist bio, statement, process, milestones, commissions, contact
    artworks.ts         # Artwork data and collections
    theme.ts            # Colour theme presets and active theme
  pages/
    Home.tsx            # Single-page layout combining all sections
  styles/
    global.css          # Global styles with CSS custom properties
  App.tsx               # Theme application + layout shell
  main.tsx              # React entry point

public/
  assets/
    artworks/           # Place artwork images here
  favicon.svg
```

---

## Sections

| Section | Anchor | Description |
|---------|--------|-------------|
| Hero | `#top` | Full-height intro with artist name and CTA |
| About | `#about` | Artist photo and biography |
| Gallery | `#gallery` | Filterable artwork grid with modal detail view |
| Statement | `#statement` | Artist statement / quote |
| Process | `#process` | Step-by-step creative process |
| Milestones | `#milestones` | Exhibitions and achievements timeline |
| Commissions | `#commissions` | Commission tiers and status |
| Contact | `#contact` | Contact form (mailto) and social links |

---

## Contact Form

The contact form opens the visitor's mail client with a pre-filled message (no backend required). To integrate a proper form service (e.g. Formspree, Netlify Forms), update the `handleSubmit` function in `src/pages/Home.tsx`.
