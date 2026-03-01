# IndianSurgicals - Premium Medical Equipment Website Specification

## Project Overview

**Project Name:** IndianSurgicals
**Type:** Multi-page brochure/catalog website (static hosting)
**Core Functionality:** Medical equipment wholesaler website with product catalog, quote requests via WhatsApp/Call/Email
**Target Users:** Hospital administrators, clinic owners, medical equipment procurement teams in India

---

## 1. Technical Architecture

### Tech Stack
- **Framework:** Astro 5.x with TypeScript
- **Styling:** Tailwind CSS with CSS variables for design tokens
- **Routing:** Astro file-based routing (multi-page)
- **Transitions:** Astro View Transitions with `<ClientRouter />`
- **Motion:** GSAP + ScrollTrigger for animations
- **Smooth Scroll:** Lenis (integrated with ScrollTrigger)
- **Build Output:** Static (SSG)

### Directory Structure
```
/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── CTAButtons.astro
│   │   ├── ProductCard.astro
│   │   ├── CategoryCard.astro
│   │   ├── SpecsTable.astro
│   │   ├── Breadcrumbs.astro
│   │   ├── SectionTitle.astro
│   │   ├── Marquee.astro
│   │   ├── AnimatedCounter.ts
│   │   ├── MotionController.ts
│   │   ├── Lightbox.astro
│   │   └── WorkingHoursBadge.astro
│   ├── data/
│   │   ├── categories.ts
│   │   ├── products.ts
│   │   └── business.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── products/
│   │   │   ├── index.astro
│   │   │   └── [category]/
│   │   │       ├── index.astro
│   │   │       └── [product].astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   └── 404.astro
│   ├── styles/
│   │   ├── tokens.css
│   │   └── globals.css
│   └── utils/
│       ├── workingHours.ts
│       └── whatsapp.ts
├── public/
│   └── images/
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## 2. Visual Design

### Color Palette (CSS Variables)
```css
:root {
  /* Primary - Medical Teal */
  --color-primary: #0D9488;
  --color-primary-light: #14B8A6;
  --color-primary-dark: #0F766E;

  /* Secondary - Warm Neutral */
  --color-secondary: #F5F5F4;
  --color-secondary-dark: #E7E5E4;

  /* Accent - Coral for CTAs */
  --color-accent: #F97316;
  --color-accent-light: #FB923C;

  /* Neutrals */
  --color-bg: #FAFAF9;
  --color-bg-alt: #F5F5F4;
  --color-surface: #FFFFFF;
  --color-text: #1C1917;
  --color-text-muted: #57534E;
  --color-text-light: #A8A29E;
  --color-border: #E7E5E4;

  /* Semantic */
  --color-success: #22C55E;
  --color-warning: #F59E0B;
  --color-error: #EF4444;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1);
  --shadow-glow: 0 0 30px rgba(13, 148, 136, 0.15);

  /* Border Radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
  --radius-full: 9999px;

  /* Easing */
  --ease-out-expo: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-out-back: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Typography
- **Headings:** "Playfair Display" (editorial serif) - Google Fonts
- **Body:** "DM Sans" (modern sans) - Google Fonts
- **Sizes:**
  - H1: 4rem (64px) / line-height 1.1
  - H2: 2.5rem (40px) / line-height 1.2
  - H3: 1.75rem (28px) / line-height 1.3
  - H4: 1.25rem (20px) / line-height 1.4
  - Body: 1rem (16px) / line-height 1.6
  - Small: 0.875rem (14px)

### Spacing System
- Base unit: 4px
- Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128

---

## 3. Page Specifications

### 3.1 Home Page (/)

**Hero Section:**
- Left content:
  - H1: "Medical Equipment Supply, Made Simple."
  - Subtext: "Wholesale supply for clinics & hospitals. Fast quotes, quality assured."
  - CTAs: "Browse Products" (primary) + "WhatsApp Quote" (secondary)
- Right side: 4 floating product cards (featured)
- Background: Subtle animated gradient mesh (slow shift)

**Trust/Numbers Section:**
- 4 metric cards in a row:
  - "10,000+" Products
  - "500+" Hospitals Served
  - "24hr" Quote Response
  - "15+" Years Experience
- Animated counters on scroll into view

**Categories Grid:**
- 6 category cards (2x3 grid on desktop)
- Each: image, name, "View Products" link
- Hover: image zoom, shadow lift, arrow animation

**Featured Products:**
- 8 product cards
- "WhatsApp Quote" pill on each
- 3D tilt hover effect

**How It Works:**
- 3 steps with connecting line
- Step icons animate on scroll

### 3.2 Products Index (/products/)

- Category filter pills (horizontal scroll on mobile)
- Quick search input (client-side filter)
- Product cards in responsive grid (4 cols desktop, 2 tablet, 1 mobile)
- Stagger reveal animation on load

### 3.3 Category Page (/products/[category]/)

- Category hero with parallax background
- Breadcrumb navigation
- Products grid (same as index)
- Shared element: category image morphs from listing

### 3.4 Product Detail (/products/[category]/[product]/)

- Hero:
  - Shared element image (morphs from listing)
  - Product title (shared element)
  - Tags
  - Short description
  - CTA block (Call / WhatsApp / Email)
- Image gallery with lightbox
- Specifications table (animated rows on scroll)
- Related products section
- Sticky mobile bar: Call | WhatsApp | Products

### 3.5 About Page (/about/)

- Company story section
- Timeline with animated line draw
- Key features cards (stagger reveal)
- Trust badges

### 3.6 Contact Page (/contact/)

- Contact cards (Phone, WhatsApp, Email, Address)
- Working hours with "Open/Closed" badge
- Minimal inquiry form (mailto fallback)
- Embedded map placeholder

### 3.7 404 Page (/404/)

- Friendly error message
- Back to home CTA
- Animated illustration

---

## 4. Motion Specifications

### Page Transitions

**Default Transition (450ms):**
```css
/* Outgoing */
::view-transition-old(root) {
  animation: fadeOut 450ms var(--ease-out-expo) forwards,
             scaleDown 450ms var(--ease-out-expo) forwards;
}

/* Incoming */
::view-transition-new(root) {
  animation: fadeIn 450ms var(--ease-out-expo) forwards,
             scaleUp 450ms var(--ease-out-expo) forwards;
}
```

**Directional:**
- Forward: slide from right
- Back: slide from left

### Shared Element Transitions

**Product Image:**
```css
view-transition-name: product-image-{slug};
```

**Product Title:**
```css
view-transition-name: product-title-{slug};
```

### Scroll Animations (GSAP)

**Reveal Animations:**
- Elements fade up on scroll
- Stagger delay: 0.1s between items
- Duration: 0.8s
- Ease: power3.out

**Counter Animation:**
- Duration: 2s
- Ease: power2.out
- Triggers when 80% in viewport

**Parallax:**
- Hero background: 0.3 speed
- Category hero: 0.5 speed

### Micro-interactions

**3D Tilt Card:**
```javascript
// On mousemove over card
rotateX: (mouseY - cardCenterY) * 0.05
rotateY: (cardCenterX - mouseX) * 0.05
```

**Magnetic Button:**
```javascript
// On mousemove near button
x: (mouseX - buttonCenterX) * 0.3
y: (mouseY - buttonCenterY) * 0.3
```

**Hover States:**
- Card lift: translateY(-4px), shadow-lg
- Image zoom: scale(1.04)
- Shine overlay: translateX(-100% → 100%)

### Reduced Motion
- Disable Lenis smooth scroll
- Reduce animation durations by 50%
- Disable parallax
- Fallback to simple fade transitions

---

## 5. Component Specifications

### Header
- Fixed position, z-index 50
- Height: 72px (desktop), 64px (mobile)
- Logo left, nav center, CTAs right
- Active nav underline: liquid pill animation
- Scroll behavior: compress to 56px

### Footer
- 4-column layout (desktop)
- Company info, Quick links, Categories, Contact
- Social links
- Copyright

### ProductCard
- Image container: 4:3 aspect ratio
- Badge for featured items
- Title, short description
- Price: "Ask for quote"
- WhatsApp button
- Hover: tilt effect, shadow lift

### CTAButtons
- Primary: filled teal, white text
- Secondary: outlined teal
- Accent: orange (WhatsApp)
- Icon + text layout
- Magnetic hover effect

### Breadcrumbs
- Separator: "/"
- Current page: muted color
- Hover: underline

### SpecsTable
- Two-column: label | value
- Alternating row backgrounds
- Animate in on scroll

### Lightbox
- Full screen overlay
- Image centered with max dimensions
- Close button top-right
- Click outside to close
- Keyboard: ESC to close, arrows for prev/next

### WorkingHoursBadge
- Green dot + "Open" when within hours
- Red dot + "Closed" when outside
- Hours text below

---

## 6. Data Models

### categories.ts
```typescript
interface Category {
  slug: string;
  name: string;
  description: string;
  heroImage: string;
  icon: string;
}
```

### products.ts
```typescript
interface Product {
  slug: string;
  categorySlug: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  specs: { label: string; value: string }[];
  tags: string[];
  images: string[];
  featured: boolean;
}
```

### business.ts
```typescript
interface Business {
  name: string;
  tagline: string;
  phones: string[];
  whatsappNumber: string;
  email: string;
  address: string;
  workingHours: {
    days: string[];
    open: string;
    close: string;
    timezone: string;
  };
  servicedRegions: string[];
  trustMetrics: { label: string; value: string }[];
}
```

---

## 7. WhatsApp Integration

### Quote Link Format
```
https://wa.me/{number}?text={encoded message}
```

### Message Template
```
Hi IndianSurgicals, I need a quote for: {productName}. Quantity: {quantity}. City: {city}.
```

### URL Encoding
- Replace spaces with %20
- Replace newlines with %0A

---

## 8. Working Hours Logic

### Hours
- Days: Monday - Saturday
- Time: 10:00 - 19:00 IST (Asia/Kolkata)

### Behavior
- Open: Show green badge, emphasize "Call Now"
- Closed: Show red badge, emphasize "WhatsApp" (since it's async)

### Implementation
- Client-side JavaScript
- Check on page load and every minute
- Update badge text and CTA emphasis

---

## 9. SEO Requirements

### Meta Tags
- Title: "{Page Title} | IndianSurgicals"
- Description: Unique per page
- Canonical URL

### OpenGraph
- Image: /og-image.png
- Type: website

### Schema
- LocalBusiness: Contact page
- Product: Product detail pages
- BreadcrumbList: Category and product pages

### Sitemap & Robots
- Generate sitemap.xml
- Create robots.txt

---

## 10. Accessibility

### Requirements
- WCAG 2.1 AA
- Keyboard navigation
- Focus indicators
- ARIA labels where needed
- Alt text for images

### Reduced Motion
- Check `prefers-reduced-motion`
- Disable smooth scroll
- Simplify animations
- Provide static fallbacks

---

## 11. Performance

### Targets
- Lighthouse Performance: 90+
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s

### Optimizations
- Lazy load below-fold images
- Use Astro's image optimization
- Minimize JavaScript
- Use CSS transforms for animations
- will-change on animated elements (sparingly)

---

## 12. Sample Content

### Categories
1. Surgical Instruments - Scalpels, forceps, scissors
2. Hospital Furniture - Beds, trolleys, cabinets
3. Diagnostic Equipment - Stethoscopes, BP monitors, thermometers
4. OT Equipment - Operating tables, surgical lights, monitors
5. ICU Equipment - Ventilators, monitors, infusion pumps
6. Physiotherapy - Exercise equipment, therapy devices

### Sample Products (per category)
- 3-5 products each with full details
- Placeholder images from picsum.photos or similar
- Realistic specifications
