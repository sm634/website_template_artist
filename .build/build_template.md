Build a static artist portfolio website for an amateur artist.

Use TypeScript and React, preferably with Vite. Use Python only if helpful for asset processing, image resizing, or static content generation. The website should be clean, reusable, easy to personalise for different artists, and suitable for hosting on GitHub Pages, Netlify, or Vercel.

Core pages/sections:
1. Home – Intro and visual style
2. About – Artist background and influences
3. Gallery – Showcase of artwork collections
4. Artist Statement – Themes and artistic intention
5. Process – Creation steps and workflow
6. Displays / Milestones – Exhibitions and key achievements
7. Commissions – Custom work and requests
8. Contact – Get in touch details
9. Footer – Links, credits, copyright

Design direction:
Create a simple, elegant mandala-inspired aesthetic. Use symmetry, circular motifs, subtle geometric patterns, soft borders, and balanced spacing. The design should feel artistic and contemplative, but not overly colourful or busy. Background patterns should be subtle and should not distract from the artwork, text, or calls to action.

Use a calm colour palette with optional theme presets, such as:
- Warm earth: cream, terracotta, muted gold, charcoal
- Soft spiritual: ivory, lavender, sage, dusty rose
- Minimal monochrome: off-white, grey, black, muted accent
- Natural calm: sand, olive, clay, soft blue

Avoid neon colours, heavy gradients, cluttered layouts, or overly decorative typography. The artwork should remain the main focus.

Technical requirements:
- Use React with TypeScript.
- Use component-based architecture.
- Use responsive design for desktop, tablet, and mobile.
- Use reusable components for sections, artwork cards, navigation, buttons, and layout.
- Use CSS Modules, Tailwind, or a clean global CSS structure.
- Keep performance lightweight.
- Optimise images where possible.
- Ensure accessibility: semantic HTML, alt text, readable contrast, keyboard-friendly navigation.
- Include smooth but subtle animations only where appropriate.

Editable content requirement:
The structure of the site should remain fixed, but the content should be easy for a non-technical website editor to change.

Implement content through editable configuration files, preferably:
- `src/content/site.ts`
- `src/content/artworks.ts`
- `src/content/artist.ts`
- `src/content/theme.ts`

All text, page headings, artist details, artwork titles, descriptions, image paths, social links, commission status, and contact details should be editable from these files without changing component code.

Artwork data model:
Each artwork should support:
- title
- year
- medium
- size
- description
- image path
- alt text
- collection/category
- status: personal collection, available, sold, not for sale

Suggested file structure:
src/
  components/
    Header.tsx
    Footer.tsx
    Section.tsx
    ArtworkCard.tsx
    GalleryGrid.tsx
    MandalaPattern.tsx
    Button.tsx
  content/
    site.ts
    artist.ts
    artworks.ts
    theme.ts
  pages/
    Home.tsx
  styles/
    global.css
  assets/
    artworks/
    patterns/
  App.tsx
  main.tsx

Website behaviour:
- Single-page layout with anchor navigation is preferred.
- Navigation should scroll smoothly to each section.
- Gallery should support filtering by collection/category.
- Artwork cards should open a simple modal or expanded view with details.
- Contact section can use mailto links or a static form-ready layout.
- Do not require a backend or database.

Mandala aesthetic implementation:
Create subtle reusable mandala elements using CSS or SVG. These can appear as:
- faint background watermark behind the hero section
- circular divider between sections
- symmetrical border accents around cards
- small geometric icons for section headers

Keep opacity low and ensure foreground content remains clear.

Deliverables:
- Complete React + TypeScript static website.
- Clean reusable components.
- Editable content/config files.
- Example placeholder content for one amateur artist.
- Example artwork entries with placeholder image paths.
- README with setup instructions:
  - install dependencies
  - run locally
  - build static site
  - edit artist content
  - add new artwork
  - deploy to GitHub Pages, Netlify, or Vercel

Tone of the website:
Personal, warm, calm, artistic, and authentic. It should help an amateur artist present their work beautifully without making the site feel overly commercial or corporate.
