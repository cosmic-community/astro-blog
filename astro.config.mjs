import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  // Changed: Added site configuration to fix Invalid URL error during build
  site: 'https://example.com' // Replace with your actual domain when deploying
});