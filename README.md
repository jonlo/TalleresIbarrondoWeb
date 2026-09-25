# Talleres Ibarrondo

Static Astro + TypeScript website with Spanish content, self-hosted Manrope fonts, plain CSS and no hydrated React or third-party tracking.

- Website: https://jonlo.github.io/TalleresIbarrondoWeb/
- Repository: https://github.com/jonlo/TalleresIbarrondoWeb

## Development

Use Node.js 24 (minimum 22.12).

```bash
npm install
npm run dev
npm run build
npm run preview
```

Open the URL printed by Astro, including `/TalleresIbarrondoWeb/`. `npm run build` runs TypeScript checks and generates the static website in `dist/`. `npm run check` runs checks alone.

## Deployment

GitHub Actions builds and deploys every push to `main`. The workflow is `.github/workflows/deploy.yml`; Pages uses **GitHub Actions** as its publishing source. Deployment uses GitHub's built-in token, with no manually managed secret.

`astro.config.mjs` defaults to `https://jonlo.github.io` and the base path `/TalleresIbarrondoWeb`. All local links and public image URLs pass through `src/utils/paths.ts`. Canonical metadata, structured data, sitemap, and robots output use the configured URL.

When the company domain is ready, configure it in GitHub Pages and update the defaults in `astro.config.mjs`. The workflow supplies `SITE_URL` and `BASE_PATH` from Pages, so it also supports a custom domain. No DNS or existing company website changes have been made. The earlier private Sites preview is retained separately but no longer receives deployments from this repository.

Deployment reference: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

## Content and assets

- **Logo:** put the existing logo in `public/images/logo/`, then set `logo` in `src/data/business.ts` to `/images/logo/logo.svg` (or the actual filename). The temporary text label is not a redesigned logo.
- **Temporary images:** `src/assets/concepts/` contains user-authorized AI-generated illustrations of metalwork, not photographs of the company or completed projects. The interface labels them as concepts. Astro creates optimized responsive WebP versions at build time. Exact generation prompts and provenance are documented in `docs/concept-images.md`.
- **Real photography:** put genuine optimized project photos in `public/images/projects/`. Keep original high-resolution files separately. Register the image path and descriptive alt text in `src/data/projects.ts`; real `image` values take priority over `conceptImage`. Remove the corresponding concept reference when replacing it. For automatic image optimization, import real photos from `src/assets/` and extend the existing Astro `Image` pattern.
- **Projects:** edit `src/data/projects.ts`. Current records are gallery slots, not completed-project claims. Replace with verified projects and set `image`, `alt`, `title`, `category`, and optional `featured`.
- **Services:** edit `src/data/services.ts`.
- **Business details:** edit `src/data/business.ts`. Street address, email, opening hours, WhatsApp and founding year remain unknown and must be verified before publication. Unknown fields are omitted from the interface. The known phone is `+34946710059`.
- **Styles:** shared responsive styles are in `src/styles/global.css`; components are in `src/components/`.

Example real project record:

```ts
{ slug: 'barandilla-acero', title: 'Barandilla de acero', category: 'barandillas',
  image: '/images/projects/barandilla-acero-01.webp',
  alt: 'Barandilla de acero instalada en una escalera exterior', featured: true }
```

## Before launching on the company domain

Replace the logo and temporary concepts with verified photography. Confirm service descriptions with the owner and review legal business details and any required legal/privacy notices. Once real photos are supplied, add the planned gallery lightbox/filtering if useful. Quote requests currently use the contact page and click-to-call.

Review the old WordPress URL inventory and configure verified redirects before replacing the old site. GitHub Pages does not provide arbitrary server-side 301 rules, so assess redirect requirements at the domain/hosting layer before the final migration. No existing URL mappings have been guessed.
