# IndianSurgicals - Premium Medical Equipment Website

A premium, motion-rich multi-page website for IndianSurgicals, a medical equipment wholesaler. Built with Astro, TypeScript, Tailwind CSS, GSAP, and Lenis for smooth animations.

## Features

- **Multi-page structure**: Home, Products, Category, Product Detail, About, Contact, 404
- **Premium animations**: GSAP ScrollTrigger, Lenis smooth scroll, View Transitions
- **Shared element transitions**: Product images morph between listing and detail pages
- **Working hours logic**: Real-time open/closed status based on Asia/Kolkata timezone
- **WhatsApp integration**: Pre-filled quote request messages
- **Responsive design**: Mobile-first with premium typography
- **SEO optimized**: Meta tags, OpenGraph, semantic HTML

## Tech Stack

- **Framework**: Astro 5.x with TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: GSAP + ScrollTrigger + Lenis
- **Transitions**: Astro View Transitions with ClientRouter

## Getting Started

### Prerequisites

- Node.js 18+
- npm or bun

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

### Build

```bash
# Build for production
npm run build
```

### Preview

```bash
# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Header.astro
│   ├── Footer.astro
│   ├── ProductCard.astro
│   ├── CategoryCard.astro
│   ├── CTAButtons.astro
│   ├── MotionController.astro
│   └── ...
├── data/            # Data files
│   ├── categories.ts
│   ├── products.ts
│   ├── business.ts
│   ├── testimonials.ts
│   └── faqs.ts
├── layouts/         # Page layouts
│   └── BaseLayout.astro
├── pages/            # Route pages
│   ├── index.astro
│   ├── products/
│   ├── about.astro
│   ├── contact.astro
│   └── 404.astro
├── styles/          # Global styles
│   ├── tokens.css
│   └── globals.css
└── utils/           # Utility functions
    ├── workingHours.ts
    └── whatsapp.ts
```

## Adding Products

### 1. Add a Category

Edit `src/data/categories.ts`:

```typescript
{
  slug: 'new-category',
  name: 'New Category',
  description: 'Category description',
  heroImage: 'https://...',
  icon: '🔧',
  productCount: 10
}
```

### 2. Add Products

Edit `src/data/products.ts`:

```typescript
{
  slug: 'new-product',
  categorySlug: 'new-category',
  name: 'New Product',
  shortDesc: 'Short description',
  longDesc: 'Long description',
  specs: [
    { label: 'Spec 1', value: 'Value 1' }
  ],
  tags: ['tag1', 'tag2'],
  images: ['https://...'],
  featured: true
}
```

### 3. Update Business Info

Edit `src/data/business.ts` to update:
- Phone numbers
- WhatsApp number
- Email address
- Working hours
- Address
- Trust metrics

## WhatsApp Quote Links

The site automatically generates WhatsApp pre-filled messages:

```
https://wa.me/{number}?text={encoded message}
```

Message format:
```
Hi IndianSurgicals, I need a quote for: {Product Name}. Quantity: {quantity}. City: {city}.
```

## Deployment

### Cloudflare Pages

1. Connect your repository to Cloudflare Pages
2. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
3. Deploy!

### Netlify

1. Connect your repository to Netlify
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy!

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`

## Customization

### Colors

Edit `src/styles/tokens.css` to change:
- Primary color (teal)
- Accent color (orange)
- Background colors
- Typography

### Animations

Edit `src/components/MotionController.astro` to customize:
- Scroll reveal timing
- Counter animation speed
- Tilt effect intensity

## License

Private - All rights reserved
