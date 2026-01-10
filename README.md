# Max Motion Website

Conversion-focused marketing website for Max Motion, built with Next.js 14, TypeScript, and Tailwind CSS. Inspired by PromptGorillas: simple language, trust badges, clear value props, and prominent CTAs.

## Features

- **Modern stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Conversion-optimized**: PromptGorillas-inspired design with prominent "Plan een meeting" CTAs
- **Accessible components**: Radix UI primitives (Accordion, Dialog) with keyboard navigation and ARIA labels
- **Booking CTA integration**: Microsoft Outlook/Bookings links throughout the site + sticky mobile CTA
- **Contact form**: React Hook Form + Zod validation with API endpoint
- **MDX support**: Case studies and resources with frontmatter
- **SEO optimized**: Metadata API, sitemap, robots.txt, Open Graph tags
- **Responsive design**: Mobile-first with dark mode support
- **Performance**: Optimized images, prefetching, lazy loading
- **3-phase approach**: Clear customer journey from kennis → blauwdruk → implementatie

## Tech Stack

- **Framework**: Next.js 14.2 (App Router)
- **Language**: TypeScript 5.3
- **Styling**: Tailwind CSS 3.4 + CSS variables for theming
- **UI Components**: Radix UI (accessible, headless)
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Content**: MDX for case studies and articles
- **SEO**: next-sitemap for sitemap generation

## Getting Started

### Prerequisites

- Node.js 20.x or later
- npm 10.x or later

### Installation

1. Clone the repository and navigate to the project:

```bash
cd max-motion
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
# Copy the example file
cp .env.example .env.local

# Edit .env.local and add your values
```

Required environment variables:

```env
# Booking URL (Microsoft Outlook/Bookings link)
NEXT_PUBLIC_BOOKING_URL=https://outlook.office.com/bookwithme/your-link

# Site URL (for metadata and sitemap)
NEXT_PUBLIC_SITE_URL=https://www.maxmotion.ai

# Contact form recipient (currently logs to console)
CONTACT_TO_ADDRESS=hello@maxmotion.ai
```

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
max-motion/
├── app/
│   ├── (site)/              # Main site routes
│   │   ├── page.tsx         # Home page (hero, 3-phase approach, value props)
│   │   ├── diensten/        # Service pages (/diensten/ai-producten, etc.)
│   │   ├── cases/           # Case study index + [slug]
│   │   ├── over-ons/        # About page
│   │   ├── resources/       # Resources page
│   │   ├── contact/         # Contact form
│   │   └── legal/           # Privacy & Terms
│   ├── api/
│   │   └── contact/         # Contact form API endpoint
│   ├── book/                # Booking redirect route (307 to booking URL or /contact)
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles + CSS variables
├── components/
│   ├── ui/                  # Reusable UI components (button, badge, accordion)
│   ├── navbar.tsx           # Sticky navigation
│   ├── footer.tsx           # Site footer
│   ├── container.tsx        # Layout container
│   ├── cta-button.tsx       # "Plan een meeting" CTA button
│   └── sticky-mobile-cta.tsx # Sticky mobile CTA bar
├── content/
│   └── cases/               # MDX case studies
├── lib/
│   ├── utils.ts             # Utility functions (cn)
│   ├── env.ts               # Environment variable helpers
│   └── analytics.ts         # Analytics tracking stub
├── public/                  # Static assets
└── tailwind.config.ts       # Tailwind configuration
```

## Editing Content

### Text Content

Most text is in the page components under `app/(site)/`. You can edit:

- **Home page**: `app/(site)/page.tsx` (hero, 3-phase approach, value props)
- **Service pages**: `app/(site)/diensten/**/*.tsx` (ai-producten, coaching-training, copilot-chatgpt-gemini)
- **About page**: `app/(site)/over-ons/page.tsx`
- **Cases**: `app/(site)/cases/page.tsx`
- **Contact info**: `app/(site)/contact/page.tsx`

### Case Studies

Case studies are in `content/cases/*.mdx`. To add a new case study:

1. Create a new `.mdx` file in `content/cases/`
2. Add the slug to `app/(site)/cases/[slug]/page.tsx`
3. Add the case study to the index at `app/(site)/cases/page.tsx`

### Booking CTA

The **"Plan een meeting"** button appears throughout the site (hero, service pages, sticky mobile bar, final CTA sections). To configure:

1. Set `NEXT_PUBLIC_BOOKING_URL` in `.env.local` (e.g., Microsoft Outlook/Bookings link)
2. If the URL is not set, the button shows "Neem contact op" and links to `/contact`
3. The `/book` route redirects (307) to the booking URL or falls back to `/contact`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Set environment variables in Vercel dashboard
4. Deploy

### Azure Static Web Apps

1. Create a Static Web App resource in Azure
2. Connect your GitHub repository
3. Set build configuration:
   - Build command: `npm run build`
   - Output directory: `.next`
4. Add environment variables in Azure portal

### Other Platforms

The site can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Cloudflare Pages
- Self-hosted with Node.js

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript compiler check
```

## SEO & Analytics

### Sitemap

Generate sitemap after deployment:

```bash
npm run build
npx next-sitemap
```

The sitemap will be available at `/sitemap.xml`.

### Analytics

Analytics tracking is stubbed in `lib/analytics.ts`. To add real analytics:

1. Install your analytics provider (e.g., `@vercel/analytics`, `@microsoft/clarity`)
2. Update `lib/analytics.ts` with the provider's tracking code
3. Add tracking IDs to `.env.local`

## Accessibility

- WCAG 2.2 AA compliant
- Keyboard navigable
- Screen reader friendly
- Focus-visible states
- Semantic HTML
- ARIA labels where needed

Test with:
- Lighthouse (built into Chrome DevTools)
- axe DevTools browser extension
- Keyboard navigation (Tab, Enter, Escape)

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## License

Proprietary - Max Motion

## Support

For questions or issues, contact the development team or open an issue in the repository.
