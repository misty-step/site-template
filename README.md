# Astro + Tailwind Site Template

A production-quality Astro 5 + Tailwind CSS 4 starter template for business websites. This is the foundation for demo sites in the Misty Step outreach pipeline.

## Quick Start

```bash
# Clone the template
git clone https://github.com/misty-step/site-template.git your-site-name
cd your-site-name

# Install dependencies
npm install

# Start development server
npm run dev
```

## Customization

### 1. Edit Configuration

Open `src/config/site.config.ts` and customize:

- **Business info**: name, tagline, description, url
- **Colors**: primary, secondary, accent, background, text (hex codes)
- **Fonts**: heading and body font families (Google Fonts)
- **Content**: hero, about, testimonials, menu, gallery, hours, CTA
- **Footer**: social links, navigation links
- **demoMode**: set to `true` to show "Demo redesign by Misty Step" badge

### 2. Add Images

Drop your images into `public/images/`. The template uses:

- `hero.jpg` - Hero section background (recommended: 1920x1080)
- `about.jpg` - About section image (recommended: 800x600)
- `gallery-*.jpg` - Gallery images (recommended: 400x400)
- `og-image.jpg` - Open Graph image for social sharing (recommended: 1200x630)

### 3. Build for Production

```bash
npm run build
```

This generates a static site in the `dist/` folder.

## Project Structure

```
├── src/
│   ├── components/     # Astro components
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Testimonials.astro
│   │   ├── Menu.astro
│   │   ├── Gallery.astro
│   │   ├── Hours.astro
│   │   ├── CTA.astro
│   │   └── Footer.astro
│   ├── config/
│   │   └── site.config.ts    # Site configuration
│   ├── layouts/
│   │   └── Layout.astro      # Main layout with SEO
│   ├── pages/
│   │   └── index.astro       # Main page
│   └── styles/
│       └── global.css        # Tailwind + custom styles
├── public/
│   └── images/               # Site images
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Features

- **Astro 5** with static output (`output: 'static'`)
- **Tailwind CSS 4** with CSS-first configuration
- **TypeScript** for config and component props
- **Zero client-side JavaScript** — builds to static HTML
- **Lazy loading** on all images
- **SEO optimized** — meta tags, Open Graph, JSON-LD structured data
- **Accessible** — semantic HTML, skip-to-content link, keyboard navigation
- **Mobile-first** — responsive design from the ground up

## Components

| Component | Description |
|-----------|-------------|
| `<Nav>` | Responsive navigation with hamburger menu |
| `<Hero>` | Full-width hero with background image |
| `<About>` | Side-by-side image and text |
| `<Testimonials>` | Grid of quote cards |
| `<Menu>` | Restaurant menu with sections |
| `<Gallery>` | Responsive image grid |
| `<Hours>` | Business hours with JSON-LD |
| `<CTA>` | Call-to-action section |
| `<Footer>` | Multi-column footer |

## Quality Requirements

This template is designed to score 90+ on Lighthouse:

- Semantic HTML with proper heading hierarchy
- Color contrast meets WCAG AA
- All images have alt text
- Skip-to-content link for accessibility
- Proper focus management in navigation

## License

MIT
