import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://indiansurgicals.vercel.app',
  integrations: [tailwind()],
  output: 'static',
  prefetch: {
    defaultStrategy: 'hover',
    prefetchAll: true
  },
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    ssr: {
      noExternal: ['gsap']
    }
  }
});
