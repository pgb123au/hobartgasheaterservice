// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hobartgasheaterservice.com.au',
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [sitemap({
      customPages: [
  "https://hobartgasheaterservice.com.au/",
  "https://hobartgasheaterservice.com.au/about/",
  "https://hobartgasheaterservice.com.au/battery-point/",
  "https://hobartgasheaterservice.com.au/bellerive/",
  "https://hobartgasheaterservice.com.au/glenorchy/",
  "https://hobartgasheaterservice.com.au/greater-hobart/",
  "https://hobartgasheaterservice.com.au/kingston/",
  "https://hobartgasheaterservice.com.au/local-trades/",
  "https://hobartgasheaterservice.com.au/privacy/",
  "https://hobartgasheaterservice.com.au/quote/",
  "https://hobartgasheaterservice.com.au/sandy-bay/",
  "https://hobartgasheaterservice.com.au/services/annual-service/",
  "https://hobartgasheaterservice.com.au/services/co-leak-check/",
  "https://hobartgasheaterservice.com.au/services/flue-inspection/",
  "https://hobartgasheaterservice.com.au/services/heater-installation/",
  "https://hobartgasheaterservice.com.au/services/heater-replacement/",
  "https://hobartgasheaterservice.com.au/pricing/"
],
      filter: (page) => !page.includes('/thanks/') && !page.includes('/404'),
    })],
});
