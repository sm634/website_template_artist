// ============================================================
// artist.ts — Edit this file to change artist content
// ============================================================

export const artist = {
  name: 'Amara Linden',

  shortBio:
    'Bristol-based watercolour and mixed media artist exploring the quiet intersections of botany, geometry, and contemplative mark-making.',

  // Each string is rendered as a separate paragraph
  bio: [
    'Amara Linden is a self-taught artist based in Bristol, UK. Her work began as a way to slow down — to sit with a single leaf, a pattern in stone, or the memory of a mandala, and translate it into something tactile and still.',
    'Drawing on a background in botany and a lifelong fascination with symmetry and sacred geometry, Amara creates intimate, meditative works that invite the viewer to pause. Her influences include Indian miniature painting, mid-century botanical illustration, and the geometric traditions of Islamic art.',
    'She works primarily in watercolour on cold-pressed paper, often finishing pieces with fine ink detail or pressed botanical elements.',
  ],

  // Path relative to the public directory, or an absolute URL
  profileImagePath: './assets/artworks/artist-profile.jpg',
  profileImageAlt: 'Amara Linden in her studio',

  statement: {
    heading: 'Artist Statement',
    body: [
      'I am drawn to the places where pattern and stillness meet — where a fern frond unfurls in a perfect spiral, where a mandala holds the eye at its centre, where a single mark repeated becomes something whole.',
      'My work is an attempt to pay attention. To look closely at natural forms, geometric structures, and the slow accumulation of detail, and to find in that looking a kind of quiet.',
      'I paint to remember that beauty does not require noise. A leaf. A circle. A line drawn with care. These are enough.',
    ],
  },

  process: {
    heading: 'My Process',
    steps: [
      {
        number: '01',
        title: 'Observation & Sketching',
        description:
          'Every piece begins with looking. I sketch from life — plants, textures, architectural details — filling small notebooks with gestural observations before any colour is considered.',
      },
      {
        number: '02',
        title: 'Colour Studies',
        description:
          'I work through colour studies on scraps of paper, testing pigment combinations until the palette feels right. Colour should feel inevitable, not chosen.',
      },
      {
        number: '03',
        title: 'Layered Watercolour',
        description:
          'The main work builds in transparent washes — light to dark, wet into wet, then dry brushwork for texture. I let the water lead.',
      },
      {
        number: '04',
        title: 'Ink Detail & Finishing',
        description:
          'Fine ink lines bring structure and definition. Some pieces receive pressed botanical elements or gold leaf accents. The work is finished when nothing more is needed.',
      },
    ],
  },

  milestones: {
    heading: 'Exhibitions & Milestones',
    items: [
      {
        year: '2024',
        title: 'Quiet Symmetry — Solo Exhibition',
        description:
          'A 12-piece solo show at Grain Gallery, Bristol, exploring the intersection of botanical form and sacred geometry.',
        type: 'exhibition' as const,
      },
      {
        year: '2023',
        title: 'Botanica Online Exhibition',
        description:
          'Featured artist in the annual online group exhibition by The Watercolour Collective, reaching over 8,000 viewers.',
        type: 'exhibition' as const,
      },
      {
        year: '2023',
        title: 'Bristol Open Studios',
        description:
          'Participated in the city-wide open studios event, welcoming visitors to my studio and selling 6 original works.',
        type: 'event' as const,
      },
      {
        year: '2022',
        title: 'First Commission',
        description:
          'Completed first commissioned piece — a botanical triptych for a private client in Edinburgh.',
        type: 'milestone' as const,
      },
      {
        year: '2021',
        title: 'Began Sharing Work Online',
        description:
          'Started posting work on Instagram; grew a following of fellow quiet-art enthusiasts and received the first print sales.',
        type: 'milestone' as const,
      },
    ],
  },

  commissions: {
    heading: 'Commissions',
    intro:
      'I take on a small number of commissions each year to ensure each piece receives the time and attention it deserves.',
    // Change to 'open', 'closed', or 'waitlist'
    status: 'open' as 'open' | 'closed' | 'waitlist',
    statusNote: 'Currently accepting commissions — estimated 6–8 week turnaround.',
    tiers: [
      {
        title: 'Small Original',
        size: 'A5 (14.8 × 21 cm)',
        price: 'From £120',
        description:
          'A single botanical or geometric study. Ideal as a personal gift or small wall piece.',
        includes: [
          'Original watercolour on 300gsm paper',
          'Certificate of authenticity',
          'Unframed, posted flat',
        ],
      },
      {
        title: 'Medium Original',
        size: 'A4 (21 × 29.7 cm)',
        price: 'From £220',
        description:
          'A more detailed composition — a botanical portrait, mandala study, or mixed-element piece.',
        includes: [
          'Original watercolour on 300gsm paper',
          'Ink detail work',
          'Certificate of authenticity',
          'Unframed, posted flat',
        ],
      },
      {
        title: 'Large / Bespoke',
        size: 'A3+ (42 × 60 cm or custom)',
        price: 'From £450',
        description:
          'A significant, bespoke work. Includes full consultation, reference gathering, and revision stages.',
        includes: [
          'Original watercolour with ink & mixed media',
          'Full consultation process',
          'Progress photographs',
          'Certificate of authenticity',
          'Unframed or framed (discuss)',
        ],
      },
    ],
    note: 'To enquire about a commission, please use the contact form below or email directly.',
  },

  contact: {
    heading: 'Get in Touch',
    intro:
      "Whether you're interested in a commission, an original work, or simply want to say hello — I'd love to hear from you.",
    email: 'hello@amaralinden.art',
    location: 'Bristol, United Kingdom',
    social: [
      {
        platform: 'Instagram',
        handle: '@amaralinden.art',
        href: 'https://instagram.com/amaralinden.art',
      },
      {
        platform: 'Etsy',
        handle: 'AmaraLindenArt',
        href: 'https://etsy.com/shop/AmaraLindenArt',
      },
    ],
    formNote: "Fill in the form below and I'll get back to you within 2–3 working days.",
  },
};
