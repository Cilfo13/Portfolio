import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

const site = process.env.SITE_URL?.trim() || process.env.PUBLIC_SITE_URL?.trim();

export default defineConfig({
  site: site || undefined,
  output: 'static',
  adapter: vercel(),
  trailingSlash: 'never',
});
