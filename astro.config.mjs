import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fitxstudio.com.au',
  integrations: [sitemap({ filter: (page) => !page.endsWith('fitxstudio.com.au/') })],
});
