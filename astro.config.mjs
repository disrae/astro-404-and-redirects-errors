// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  redirects: {
    '/en': '/en-ca/',
    '/fr': '/fr-ca/',
    '/us': '/en-us',
  },

  output: 'hybrid',
  adapter: vercel()
});