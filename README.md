# POS SaaS Marketing and Documentation Website

A production-ready Next.js App Router website for a retail-focused POS SaaS product.  
It combines marketing pages, product documentation, sales enablement, pricing structure, and source document access in one client-shareable site.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS
- `next-themes` for light/dark mode
- `motion` for UI animation
- shadcn/ui-style local primitives built on Radix UI
- `lucide-react` for icons

## Pages

- `/`  
  Landing page with hero, problem, solution, value, audience, and CTA
- `/product`  
  Detailed capability page with sticky sidebar, workflows, feature-benefit table, positioning, and validation notes
- `/solutions`  
  Personas, problems solved, ideal customer fit, and real business use cases
- `/sales`  
  Selling points, conversation hooks, demo guide, objections, positioning, and closing lines
- `/pricing`  
  Tier structure and “why customers buy” messaging
- `/documents`  
  Links to the original markdown source files in `public/docs`

## Getting Started

### Requirements

- Node.js 20+
- npm

### Install

```bash
npm install
```

### Run in development

```bash
npm run dev
```

### Production build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Project Structure

```text
src/
  app/
    page.tsx
    product/page.tsx
    solutions/page.tsx
    sales/page.tsx
    pricing/page.tsx
    documents/page.tsx
    layout.tsx
    globals.css
  components/
    layout/
    providers/
    shared/
    sections/
    ui/
  data/
    home.ts
    product.ts
    solutions.ts
    sales.ts
    pricing.ts
    documents.ts
    site.ts
  hooks/
    use-scrollspy.ts
  lib/
    icons.ts
    utils.ts
public/
  docs/
    MARKETING_PRODUCT_BUSINESS_OVERVIEW.md
    POS_SAAS_PITCH_DECK_10_SLIDES.md
    POS_SAAS_SALES_READY_PACK.md
    pos_website_master_plan.md
```

## Content Workflow

This project does **not** render raw markdown at runtime for the main pages.

The workflow is:

1. The original source documents live in `public/docs/` for viewing/downloading.
2. The site content is manually structured into typed data objects inside `src/data/`.
3. Page sections consume those data objects and render polished UI components.

### If you want to update content

- Update the relevant file in `src/data/` for the website content.
- Update the matching file in `public/docs/` if the downloadable source document also changed.
- Do not point the main pages directly at raw markdown unless you intentionally want runtime markdown rendering.

## Design System Notes

- Global color tokens, spacing, typography, and theme variables live in `src/app/globals.css`.
- Theme switching is handled by `next-themes`.
- Reusable UI primitives live in `src/components/ui`.
- Shared layout and motion helpers live in `src/components/shared`.

## Motion Usage

Motion is used for:

- hero reveals
- section reveals
- hover lift interactions
- sticky nav polish
- tab transitions
- quote rotation
- scroll progress

Motion is intentionally subtle and should stay secondary to readability.

## Key Files

- `src/app/layout.tsx`  
  Root layout, fonts, theme provider, header, footer
- `src/components/layout/site-header.tsx`  
  Sticky navbar, desktop nav, mobile sheet, theme toggle
- `src/components/shared/page-hero.tsx`  
  Shared interior-page hero
- `src/components/sections/sales/sales-tabs.tsx`  
  Tabbed sales module
- `src/data/*.ts`  
  Structured content source for all routes

## Assets

Current visual assets are stored in `public/`, including:

- `tafuri_pos_logo.png`
- `tafuri_pos_logo_transparent.png`
- `Dashboard.png`

## Troubleshooting

### Dev server loads broken `_next/static/chunks/...` files

If you move/delete files while `next dev` is running and the browser starts showing errors like:

- `Unexpected end of input`
- `Invalid or unexpected token`

reset the dev cache:

```bash
# stop dev server first
rm -rf .next
npm run dev
```

On Windows PowerShell:

```powershell
Remove-Item .\.next -Recurse -Force
npm run dev
```

### Hydration warning with `cz-shortcut-listen`

That attribute is usually injected by a browser extension, not by the app itself.

## Notes

- The website is static and content-driven.
- No pricing numbers are hardcoded because the source material defines packaging strategy, not final commercial pricing.
- Business meaning should stay aligned with the source markdown and master plan.
