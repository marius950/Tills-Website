// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.osteopathie-hamburg-till.de',
  redirects: {
    '/blog': '/wissen',
  },
  integrations: [sitemap()],
});
