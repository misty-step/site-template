# Blank Canvas Scaffold

Minimal Astro + Tailwind CSS 4 scaffold for AI-agent-built business sites.

## What this is

- Blank canvas, not a finished template
- Agent can build any page structure, component tree, and layout
- `src/pages/index.astro` is only a placeholder

## How to use

1. Set brand tokens in `src/styles/tokens.css` first.
2. Delete `src/pages/index.astro`.
3. Build the real pages/components your project needs.
4. Put static assets in `public/`.

## Build and deploy

```bash
npm run build
vercel deploy dist/ --prod --yes
```
