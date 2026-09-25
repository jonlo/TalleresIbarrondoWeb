# Talleres Ibarrondo

Static Astro + TypeScript website. Spanish content, self-hosted Manrope fonts, plain CSS and no hydrated React or third-party tracking.

## Development

Node.js 22.12+ is required (use a current supported Node release).

```bash
npm install
npm run dev
npm run build
npm run preview
```

`npm run build` runs Astro's TypeScript checks and creates the static site in `dist/`. Deploy that directory to any static host. `npm run check` runs checks alone.

## Content and assets

- **Logo:** put the existing logo in `public/images/logo/`, then set `logo` in `src/data/business.ts` to `/images/logo/logo.svg` (or the actual filename). The temporary text label is not a redesigned logo.
- **Photography:** put genuine project photos in `public/images/projects/`. Keep original high-resolution files separately. Prefer optimized WebP/AVIF assets, and set meaningful `alt` text. No stock or AI project photos are used.
- **Projects:** edit `src/data/projects.ts`. Records currently represent gallery slots, not completed-project claims. Replace these with verified projects and set `image`, `alt`, `title`, `category`, and optional `featured`. Example:

```ts
{ slug: 'barandilla-acero', title: 'Barandilla de acero', category: 'barandillas',
  image: '/images/projects/barandilla-acero-01.webp',
  alt: 'Barandilla de acero instalada en una escalera exterior', featured: true }
```

- **Services:** edit `src/data/services.ts`.
- **Business details:** edit `src/data/business.ts`. Street address, email, opening hours, WhatsApp and founding year remain unknown and must be verified before publication. Unknown fields are omitted from the interface. The known phone is `+34946710059`.
- **Styles:** shared responsive styles are in `src/styles/global.css`; components are in `src/components/`.

## Before launching on the company domain

Replace the logo and photographic placeholders, confirm service descriptions with the owner, and review legal business details and any required legal/privacy notices. Once photos are supplied, add responsive image variants and the planned gallery lightbox/filtering as useful. No nonfunctional form is included; quote requests use the contact page and click-to-call.

Production canonical URLs, sitemap and robots.txt target `https://talleresibarrondo.com`. Update `astro.config.mjs` and `public/robots.txt` if the final domain changes. Review the old WordPress URL inventory and configure verified 301 redirects at the chosen host before replacing the old site. No existing URL mappings have been guessed.
