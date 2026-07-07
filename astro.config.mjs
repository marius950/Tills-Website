// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Vor dem Livegang auf die echte Domain ändern (wichtig für Canonical-URLs & Sitemap)
  site: 'https://osteopathie-till-schneider.de',
  redirects: {
    '/blog': '/wissen',
  },
});
