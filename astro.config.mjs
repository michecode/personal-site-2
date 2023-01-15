import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

import { threeMinifier } from '@yushijinhun/three-minifier-rollup';

// https://astro.build/config
export default defineConfig({
  // Enable Svelte to support Svelte components.
  integrations: [svelte(), tailwind()],
  vite: {
    plugins: [{ ...threeMinifier(), enforce: 'pre' }],
  },
});
