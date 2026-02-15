// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { siteConfig } from './src/config/site.config';

// https://astro.build/config
export default defineConfig({
  base: siteConfig.basePath || '/',
  vite: {
    plugins: [tailwindcss()]
  }
});