// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.osteopathie-hamburg-till.de',
  redirects: {
    '/blog': '/wissen',
  },
  // Anzeigen-Landingpages unter /lp/ sind noindex und bleiben aus der Sitemap
  integrations: [sitemap({ filter: (page) => !page.includes('/lp/') })],
});
