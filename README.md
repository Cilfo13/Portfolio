# Portfolio

Astro wrapper for a standalone portfolio experience, deployed to Vercel.

## Vercel

- Linked Vercel project: `portfolio` in team `angcils-projects`
- Deploy command: `npm run build`
- Output mode: static Astro build via `@astrojs/vercel`
- Current production alias: `portfolio-angcils-projects.vercel.app`

## Custom domain

When the real domain is ready:

1. Set `SITE_URL=https://your-domain.com` in the Vercel Production environment.
2. Add the apex domain: `vercel domains add your-domain.com portfolio`
3. Add `www` if desired: `vercel domains add www.your-domain.com portfolio`
4. Follow the DNS records Vercel returns for verification and routing.
