import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Override both values when connecting the final company domain.
export default defineConfig({
  site: process.env.SITE_URL || 'https://jonlo.github.io',
  base: process.env.BASE_PATH || '/TalleresIbarrondoWeb',
  trailingSlash: 'always',
  integrations: [sitemap()],
  output: 'static',
});
