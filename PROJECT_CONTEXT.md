# PROJECT_CONTEXT.md

## Current implementation decisions (2026-09-25)

- Real photos supplied: 75 reviewed, 21 selected for 18 gallery entries. The live site now uses only supplied photography; earlier AI concepts are retired. Selection and source mapping: `docs/photo-selection.md`.
- Services now distinguish interior/exterior closures, stairs, railings and furniture; structural work includes canopies and reinforcement. Gallery includes category filters and full-image viewing.

These updates supersede conflicting initial recommendations below:
- Hosting is now GitHub Pages, repository `jonlo/TalleresIbarrondoWeb`, with automatic deployment from `main`.
- The user explicitly approved temporary AI-generated concept images. Label these as illustrative AI concepts, never as real completed company work. Replace with verified photography when supplied.
- Keep the existing logo placeholder until the original logo is available.


## Project
**Talleres Ibarrondo — Website Renewal**

This project replaces the existing WordPress website for Talleres Ibarrondo with a modern, fast, maintainable static site.

Current domain:

- `http://talleresibarrondo.com/`
- The current site appears to redirect to HTTPS, but the HTTPS endpoint is currently failing externally.
- The old WordPress site should be treated primarily as a source of branding/content/assets when those become available, not as an architectural reference.

The new site should keep the useful concepts from the old website, especially:
- Existing logo
- Services
- Work/projects gallery
- Real company/project photography

But the visual design, UX, typography, layout, performance and codebase should be rebuilt from scratch.

---

# Primary Goal

Create a polished, contemporary website for a metalworking company in Arrigorriaga, Bizkaia.

The site should clearly communicate in a few seconds:

1. What Talleres Ibarrondo does.
2. That it produces custom metalwork.
3. That it works with both individuals and businesses/professionals.
4. That users can see examples of real completed work.
5. How to request a quote or contact the workshop.

The visual identity should feel like a modern fabrication / engineering / architecture studio rather than an old-fashioned industrial WordPress template.

---

# Business

Company name:

**Talleres Ibarrondo**

Location context:

**Arrigorriaga, Bizkaia**

Known phone number:

**946 710 059**

Public business descriptions indicate activities around:
- Herrería
- Calderería
- Metalistería
- Soldadura
- Estructuras metálicas
- Barandillas
- Escaleras
- Cerramientos
- Mobiliario / piezas metálicas
- Fabricación a medida
- Industrial and custom metal fabrication

Some public descriptions mention that the workshop has operated since around 1950, but this MUST NOT be presented as verified fact until confirmed by the owner.

Likewise, the exact postal address should be treated as pending verification because public business directories contain inconsistent versions.

Use placeholders or configuration values where needed for:
- Exact street address
- Email address
- WhatsApp
- Opening hours
- Verified founding year

Do not invent these values.

---

# Product Direction

This should NOT feel like a generic “industrial company template”.

Avoid:
- Generic stock welder imagery
- Excessive icon cards
- Counters such as “2500 projects completed”
- Testimonial carousels without real content
- Fake statistics
- Generic corporate sections
- Excessive gradients
- Heavy animation
- Over-engineered navigation
- Marketing fluff

Prefer:
- Strong typography
- Real photography
- Large imagery
- Clear hierarchy
- Short copy
- Industrial/editorial layout
- Lots of whitespace
- High contrast
- Simple navigation
- Strong quote/contact CTA

The actual work produced by Talleres Ibarrondo should eventually become the main visual identity of the website.

---

# Recommended Stack

Use:

- Astro
- TypeScript
- React only where interactivity provides clear value
- Plain CSS, CSS modules, or a lightweight styling strategy
- Astro image optimization where applicable

React is appropriate for:
- Gallery filters
- Lightbox
- Mobile interactive gallery
- Complex form interactions if needed later

Do NOT turn the whole site into a client-side React SPA.

The default architecture should be mostly static/server-rendered Astro.

---

# Engineering Principles

Keep the first version intentionally simple.

Do NOT add:
- CMS
- Database
- Authentication
- Complex backend
- Global state management
- Heavy component libraries
- Large animation libraries unless truly justified

For v1:
- Content can live in TypeScript data files.
- Project images can live under `/public/images/projects/`.
- Service content can live under `/src/data/services.ts`.
- Project metadata can live under `/src/data/projects.ts`.

The architecture should make adding a CMS later possible without forcing one now.

---

# Proposed Project Structure

```text
talleres-ibarrondo/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── logo/
│       ├── hero/
│       ├── projects/
│       └── workshop/
│
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── ProjectGallery.astro
│   │   ├── About.astro
│   │   ├── ContactCTA.astro
│   │   └── Footer.astro
│   │
│   ├── data/
│   │   ├── services.ts
│   │   └── projects.ts
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── servicios.astro
│   │   ├── trabajos.astro
│   │   ├── empresa.astro
│   │   └── contacto.astro
│   │
│   └── styles/
│       └── global.css
│
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

This can be adjusted if a simpler structure is better.

---

# Navigation

Keep navigation compact.

Preferred top-level navigation:

- Servicios
- Trabajos
- Empresa
- Contacto

Primary CTA:

**Solicitar presupuesto**

Header should be sticky but subtle.

Desktop example:

```text
[ LOGO ]

Servicios
Trabajos
Empresa
Contacto

[ Solicitar presupuesto ]
```

Mobile:

```text
LOGO                     ☰
```

Do not build a large mega-menu.

---

# Homepage Structure

Preferred order:

1. Header
2. Hero
3. Services overview
4. Selected work / gallery preview
5. About / workshop positioning
6. Strong contact CTA
7. Footer

The homepage should carry most of the selling burden.

---

# Hero

Preferred positioning:

**Metal trabajado para durar.**

Supporting copy:

> Fabricación, soldadura y soluciones metálicas a medida para particulares, profesionales y empresas.

Primary CTA:

**Solicitar presupuesto**

Secondary CTA:

**Ver trabajos**

Location/industry eyebrow can use something like:

**Herrería · Calderería · Fabricación**

or:

**Talleres Ibarrondo · Arrigorriaga**

Avoid a classic generic hero with centered white text over a random stock image.

Preferred layout:
- Strong typography on left
- Large image area on right
- Real project image when assets are available
- Temporary intentional placeholder until then

---

# Visual Direction

Aim for:
- Contemporary
- Industrial
- Architectural
- Editorial
- Premium but practical
- Clean rather than luxurious

Use a mostly neutral palette.

Suggested baseline:

```css
:root {
  --background: #f1f0eb;
  --surface: #fafaf7;

  --text: #17191a;
  --muted: #747777;

  --dark: #17191a;
  --dark-soft: #232627;

  --border: rgba(23, 25, 26, 0.15);

  --accent: #c7552e;

  --container: 1280px;
}
```

The accent color is provisional.

Once the real logo is available:
- extract/adapt the existing brand color
- preserve the logo
- modernize everything around it

---

# Typography

Preferred direction:
- Manrope, Geist, Sora, or similar modern grotesk/sans for headings
- Inter, Geist, or system sans for body text

Use strong responsive typography.

Example:

```css
h1 {
  font-size: clamp(4rem, 9vw, 9rem);
  line-height: 0.88;
  letter-spacing: -0.04em;
}
```

Typography should do a significant amount of the visual work.

Avoid tiny conservative headings.

---

# Services

Initial service list:

1. Estructuras metálicas
2. Herrería
3. Calderería
4. Barandillas y escaleras
5. Cerramientos
6. Trabajos especiales / fabricación a medida

Possible supporting capabilities:
- Soldadura
- TIG
- MIG
- Electrodo
- Corte
- Plegado
- Taladrado
- Montaje

Only expose capabilities publicly if appropriate and verified.

Preferred service presentation:
- editorial horizontal rows
- numbering
- clear service name
- short description
- minimal decorative iconography

Example visual pattern:

```text
01  Estructuras metálicas  ──────────────────→
02  Herrería               ──────────────────→
03  Calderería             ──────────────────→
04  Barandillas            ──────────────────→
05  Cerramientos           ──────────────────→
06  Trabajos especiales    ──────────────────→
```

Avoid six interchangeable icon cards unless there is a compelling reason.

Suggested data model:

```ts
export const services = [
  {
    number: "01",
    title: "Estructuras metálicas",
    slug: "estructuras-metalicas",
    description:
      "Fabricación y montaje de estructuras adaptadas a cada proyecto.",
  },
  {
    number: "02",
    title: "Herrería",
    slug: "herreria",
    description:
      "Soluciones de herrería para particulares, comunidades y profesionales.",
  },
  {
    number: "03",
    title: "Calderería",
    slug: "caldereria",
    description:
      "Fabricación de piezas y conjuntos metálicos a medida.",
  },
  {
    number: "04",
    title: "Barandillas y escaleras",
    slug: "barandillas-escaleras",
    description:
      "Diseño, fabricación y montaje de elementos metálicos funcionales.",
  },
  {
    number: "05",
    title: "Cerramientos",
    slug: "cerramientos",
    description:
      "Puertas, cierres, protecciones y soluciones personalizadas.",
  },
  {
    number: "06",
    title: "Trabajos especiales",
    slug: "trabajos-especiales",
    description:
      "Proyectos y piezas que requieren soluciones específicas de fabricación.",
  },
] as const;
```

---

# Gallery / Work

The work gallery is one of the most important parts of the site.

The current WordPress site had a gallery concept that should be preserved but dramatically improved.

Goals:
- Large images
- Excellent mobile experience
- Responsive layouts
- Optional masonry/editorial grid
- Lightbox
- Keyboard navigation
- Swipe support
- Fast loading
- Responsive images
- Clean captions
- Filters by type if useful

Potential categories:

- Todos
- Estructuras
- Barandillas
- Escaleras
- Cerramientos
- Industrial
- Otros

Initial data model:

```ts
export type ProjectCategory =
  | "estructuras"
  | "barandillas"
  | "escaleras"
  | "cerramientos"
  | "industrial"
  | "otros";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  image?: string;
  images?: string[];
  featured?: boolean;
  description?: string;
}

export const projects: Project[] = [
  {
    slug: "estructura-metalica",
    title: "Estructura metálica",
    category: "estructuras",
    featured: true,
  },
  {
    slug: "barandilla-acero",
    title: "Barandilla a medida",
    category: "barandillas",
    featured: true,
  },
  {
    slug: "escalera-metalica",
    title: "Escalera metálica",
    category: "escaleras",
    featured: true,
  },
  {
    slug: "cerramiento",
    title: "Cerramiento",
    category: "cerramientos",
  },
  {
    slug: "trabajo-industrial",
    title: "Trabajo industrial",
    category: "industrial",
  },
  {
    slug: "fabricacion-medida",
    title: "Fabricación a medida",
    category: "otros",
  },
];
```

For now, there are no real images.

Use intentional visual placeholders rather than stock images.

The user will add/recover the existing images later.

---

# Existing Images

The long-term goal is to reuse the old real project photography.

Do not rely on stock imagery unless explicitly requested.

When the old assets are recovered:
- copy original images
- optimize to WebP/AVIF where appropriate
- preserve originals separately if practical
- generate responsive variants
- give meaningful alt text
- assign project metadata/categories

Preferred folders:

```text
/public/images/
  logo/
  hero/
  projects/
  workshop/
```

Example project record after images exist:

```ts
{
  slug: "barandilla-acero",
  title: "Barandilla de acero",
  category: "barandillas",
  image: "/images/projects/barandilla-acero-01.webp",
  images: [
    "/images/projects/barandilla-acero-01.webp",
    "/images/projects/barandilla-acero-02.webp",
  ],
}
```

---

# Logo

The user wants to retain the existing logo.

For now:
- create a clear logo placeholder
- make replacing it trivial
- do NOT redesign the logo unless explicitly asked later

Once available, put it somewhere like:

```text
/public/images/logo/logo.svg
```

or appropriate raster equivalent.

Use the existing logo with newer typography and layouts around it.

---

# About / Company Section

Keep copy concise and grounded.

Suggested positioning:

### Oficio, experiencia y soluciones a medida

Suggested copy:

> En Talleres Ibarrondo trabajamos el metal para resolver necesidades reales: desde piezas únicas hasta estructuras completas.

> Trabajamos tanto para particulares como para profesionales y empresas, combinando fabricación, soldadura y montaje desde nuestro taller en Arrigorriaga.

This wording can be refined once the owner provides more accurate company history and specialties.

A strong typographic treatment could include:

```text
DISEÑAMOS
FABRICAMOS
SOLDAMOS
MONTAMOS
```

Only use “DISEÑAMOS” if design/engineering is genuinely part of the service. Otherwise replace with something verified, e.g.:
- MEDIMOS
- FABRICAMOS
- SOLDAMOS
- MONTAMOS

---

# Contact CTA

End the homepage strongly.

Suggested:

## ¿Tienes un proyecto?

> Cuéntanos qué necesitas y estudiaremos la mejor forma de hacerlo.

Primary CTA:

**Solicitar presupuesto**

Phone:

**946 710 059**

Mobile should make calling especially easy.

Potential future form:
- Name
- Phone/email
- Short project description
- Optional image/photo upload
- Optional drawing/PDF upload

Do not implement upload/backend complexity unless explicitly requested.

---

# Contact Page

Should eventually include:
- Phone
- Email
- Verified address
- Location/map
- Opening hours
- Quote/contact form

For now:
- use known verified phone
- placeholder unknown fields
- avoid invented details

---

# Company Page

Should eventually include:
- Workshop description
- Business history
- Capabilities
- Types of clients
- Workshop/project photos
- Possibly verified founding year

Keep it short and visual.

Do not fabricate a long corporate story.

---

# Services Page

Can initially list all services in detail on one page.

Later, service-specific URLs can be introduced if useful for local SEO:

```text
/servicios/estructuras-metalicas
/servicios/herreria
/servicios/caldereria
/servicios/barandillas-escaleras
/servicios/cerramientos
```

Do not create thin SEO pages purely for keywords.

Only create dedicated pages if there is enough useful real content.

---

# SEO

SEO matters because this is an existing business/domain.

Implement basics from the beginning:

- Semantic HTML
- Unique titles
- Meta descriptions
- Canonical URLs
- OpenGraph
- Sitemap
- robots.txt
- sensible heading hierarchy
- image alt text
- fast loading
- structured data
- local business schema
- accessible navigation

Potential local/service search themes:
- Herrería Arrigorriaga
- Herrería Bizkaia
- Calderería Bizkaia
- Estructuras metálicas Bizkaia
- Soldadura Arrigorriaga
- Fabricación metálica Bizkaia

Do NOT keyword-stuff.

If migrating existing URLs:
- inspect the old WordPress URL structure
- preserve valuable URLs where sensible
- otherwise create 301 redirects

Do not throw away existing domain authority.

---

# Structured Data

Add a LocalBusiness schema foundation.

Unknown fields must remain configurable/placeholders until verified.

Example concept:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Talleres Ibarrondo",
  "telephone": "+34946710059",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Arrigorriaga",
    "addressRegion": "Bizkaia",
    "addressCountry": "ES"
  }
}
```

Do not include a fabricated street address.

---

# UX Priorities

Priority order:

1. Fast understanding of what the company does
2. Seeing real work
3. Contact/request quote
4. Services detail
5. Company background

Mobile is critical.

Requirements:
- responsive from the beginning
- large tap targets
- phone number easy to call
- gallery comfortable on touch
- no layout overflow
- no tiny text
- no intrusive animation

---

# Accessibility

Implement sensible accessibility:
- semantic regions
- proper links/buttons
- visible focus states
- keyboard support
- alt text
- sufficient color contrast
- reduced motion support if animations exist
- accessible menu
- accessible gallery/lightbox

---

# Performance

The site should be very fast.

Targets:
- mostly static output
- minimal JS
- lazy-load non-critical imagery
- responsive image sizes
- optimize assets
- avoid unnecessary third-party scripts
- avoid loading huge font families
- preload only truly critical assets

No React hydration unless needed.

---

# Design Details

Preferred large section spacing:

```css
.section {
  padding-block: clamp(96px, 10vw, 180px);
}
```

Preferred container:

```css
.container {
  width: min(calc(100% - 48px), 1280px);
  margin-inline: auto;
}
```

Strong heading treatment:

```css
h1,
h2,
h3 {
  font-family: "Manrope", sans-serif;
  letter-spacing: -0.04em;
}
```

Buttons:
- rectangular / architectural
- minimal rounding or none
- good hover/focus treatment
- strong contrast

Avoid over-rounded SaaS-style UI.

---

# Homepage Suggested Copy

## Hero eyebrow
`Herrería · Calderería · Fabricación`

## Hero heading
`Metal trabajado para durar.`

## Hero body
`Fabricación, soldadura y soluciones metálicas a medida para particulares, profesionales y empresas.`

## Primary CTA
`Solicitar presupuesto`

## Secondary CTA
`Ver trabajos`

## Services heading
`Del plano al metal.`

Alternative if “plano” overstates design work:
`Soluciones hechas en metal.`

## Work heading
`Hecho aquí. Hecho a medida.`

## About heading
`Oficio, experiencia y soluciones.`

## Contact heading
`¿Tienes un proyecto?`

## Contact body
`Cuéntanos qué necesitas y estudiaremos la mejor forma de hacerlo.`

Copy is provisional and can be refined after owner review.

---

# Footer

Keep simple.

Suggested content:

- Talleres Ibarrondo
- Herrería, calderería y fabricación metálica
- Services
- Work
- Company
- Contact
- Phone
- Arrigorriaga · Bizkaia
- Legal/privacy links when required

---

# Initial Milestone

Build a complete polished homepage first:

1. Header
2. Hero
3. Services
4. Selected project gallery
5. About
6. Contact CTA
7. Footer

Use placeholders for unavailable images.

The homepage should already look production-quality without real photos.

Then implement:
- `/servicios`
- `/trabajos`
- `/empresa`
- `/contacto`

---

# Gallery Milestone

Once real images are supplied:

1. Replace placeholders.
2. Create image metadata.
3. Optimize images.
4. Add categories.
5. Add filtering if it improves UX.
6. Add lightbox.
7. Ensure keyboard and mobile swipe navigation.
8. Feature strongest projects on homepage.

Do not build the gallery interaction before the static gallery architecture is clean.

---

# Content Management

For now, use local data files.

No CMS.

If later the business wants to add projects frequently without code changes, evaluate a lightweight CMS at that point.

The site architecture should not make that migration difficult.

---

# Deployment

The site should be easy to deploy to:
- Cloudflare Pages
- Vercel
- Netlify
- GitHub Pages where practical

Keep deployment-provider coupling low.

Ensure:
- `npm install`
- `npm run dev`
- `npm run build`

work cleanly.

---

# README Requirements

Add a concise README explaining:

1. How to install:
   ```bash
   npm install
   ```

2. How to run:
   ```bash
   npm run dev
   ```

3. How to build:
   ```bash
   npm run build
   ```

4. Where to add the logo.

5. Where to add project images.

6. How to register a new project in `projects.ts`.

7. How to edit services.

8. Which business details are still placeholders awaiting verification.

---

# Coding Style

Prefer:
- simple components
- readable TypeScript
- low abstraction
- few dependencies
- semantic markup
- explicit CSS
- reusable patterns only where reuse exists

Avoid:
- premature design systems
- generic wrappers everywhere
- dependency-heavy UI frameworks
- unnecessary state
- unnecessary client-side JS
- abstractions that hide straightforward layout code

---

# Important Constraints

1. Keep the existing logo when supplied.
2. User will add/recover images later.
3. Do not wait for images before building the design.
4. Do not use fake project photography.
5. Do not invent business facts.
6. Keep a contemporary industrial aesthetic.
7. Preserve the gallery concept.
8. Improve mobile UX significantly compared with the old WordPress site.
9. Prefer Astro over a full React SPA.
10. No CMS for v1.
11. SEO and performance should be built in from day one.
12. Contact/quote conversion is one of the primary goals.

---

# Recommended First Codex Task

Start by initializing the Astro + TypeScript project and implement the complete responsive homepage using placeholders for unavailable photography.

Acceptance criteria:

- Project installs and runs locally.
- Homepage is responsive on desktop/tablet/mobile.
- Header/navigation works.
- Hero follows the design direction above.
- Services are sourced from a data file.
- Gallery cards are sourced from a data file.
- Missing images use intentional placeholders.
- About and contact CTA are present.
- Phone link uses `tel:+34946710059`.
- Basic SEO metadata is present.
- LocalBusiness structured data foundation is present without inventing unknown fields.
- CSS is clean and maintainable.
- No unnecessary React hydration.
- `npm run build` passes.
- README explains how to replace placeholders with real logo/project assets.

After the homepage is stable, continue with the services, gallery, company and contact pages.
