# Project Plan - E-commerce Conversion

## Goal
Transform the existing website into an e-commerce platform while preserving the current design and branding.

## Current Architecture
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS + custom Neumorphic/Glassmorphic CSS
- **Localization:** Custom route-based system (`/de`, `/en`) using `app/lib/translations.ts`
- **Animations:** GSAP, Three.js, Lenis (Smooth Scroll)

## Existing Pages
- Home (`/de`, `/en`) - Single page with sections: Hero, Challenges, Services, Process, Requirements, FAQ.
- Datenschutz (`/datenschutz`)
- Impressum (`/impressum`)

## Reusable Components & Design Patterns
- `neu-card`: Neumorphic card style for product listings.
- `neu-navbar`: Navigation bar to be updated.
- `neu-btn-link`: Consistent button styling.
- `translations.ts`: Centralized localization.

## New Pages Required
- `/[locale]/shop`: Product catalog with search, filtering, and pagination.
- `/[locale]/shop/[id]`: Product detail page.
- `/[locale]/cart`: Shopping cart summary and checkout (dummy).

## Required API Integrations (Dummy)
- `fetchProducts(page, query, category)`: Mock API to retrieve product list.
- `fetchProductById(id)`: Mock API to retrieve single product details.

## Pagination Strategy
- Server-side pagination using Next.js URL parameters (`?page=1`).
- Limit of 8-12 products per page.

## Shopping Cart Strategy
- Client-side state (React Context or Zustand) for cart persistence.
- LocalStorage for session persistence.

## Implementation Steps
1. **Setup Mock Data:** Create `app/lib/mockData.ts` with product information.
2. **Update Translations:** Add e-commerce related strings to `translations.ts`.
3. **Product Catalog:**
   - Implement `ProductCard` component.
   - Create `/[locale]/shop/page.tsx`.
   - Add search and category filtering.
4. **Product Details:**
   - Create `/[locale]/shop/[id]/page.tsx`.
   - Preserve Neumorphic design for product info.
5. **Shopping Cart:**
   - Create `CartContext`.
   - Add floating Cart icon or Navbar integration.
   - Create `/[locale]/cart/page.tsx`.
6. **Navigation:**
   - Update `Navbar.tsx` with "Shop" link and Cart status.

## Risks and Dependencies
- **Design Consistency:** Ensuring new e-commerce components match the unique Neumorphic/Glassmorphic style.
- **Localization:** Syncing product data with the existing two-language system.
- **Animations:** Ensuring GSAP/Lenis transitions work smoothly with new page navigation.

## Rules for AI Agents
- Read this file before making changes.
- Update this file when major decisions are made.
- Do not redesign existing pages unless requested.
- Make small, reviewable commits.

