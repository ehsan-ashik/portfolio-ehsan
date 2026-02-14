# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server**: `npm run dev` (localhost:3000)
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Format**: `npm run format` (Prettier on all .ts/.tsx files)

No test framework is configured.

## Architecture

Next.js 15 portfolio app using the App Router, TypeScript (strict mode), Tailwind CSS, shadcn/ui (Radix UI), and Framer Motion.

### Path alias

`@/*` maps to the project root.

### Content/data layer

All portfolio content lives in `data/` files (`userdata.ts`, `navdata.ts`, `contactdata.ts`). Content is decoupled from UI — modifying portfolio data should only require editing these files.

### Theme engine (v1.2.0)

A multi-theme system lives in `themes/`:

- **`themes/core/`** — ThemeRegistry provider, `useTheme` hook, type definitions
- **`themes/default/`** — Clean shadcn styling with its own component overrides
- **`themes/glass-refraction/`** — Glassmorphism theme with mesh gradients and backdrop blur

Smart wrapper components in `components/ui/` (e.g., `button.tsx`, `card.tsx`) detect the active visual theme via `useVisualTheme()` and delegate rendering to the appropriate theme's component. The active visual theme and color mode are set in `app/layout.tsx` via the `<ThemeRegistry>` wrapper.

Theme colors use CSS custom properties in HSL format, injected dynamically by ThemeRegistry. See `themes/README.md` for full architecture docs.

### Page structure

- `app/page.tsx` — Homepage: Hero → ProjectOverview → ResearchOverview → Contact
- `app/about/page.tsx`, `app/projects/page.tsx`, `app/research/page.tsx` — Content pages
- `app/layout.tsx` — Root layout wrapping everything in ThemeRegistry
- `app/globals.css` — Tailwind base + theme CSS variables

### Key patterns

- `ProjectOverviewCard` is shared between project and research overview sections
- Homepage showcases 3 randomly selected items (Fisher-Yates shuffle) from projects and research
- Forms use React Hook Form + Zod for validation
- Dark mode is class-based (Tailwind `darkMode: "class"`, managed by next-themes)

## Code style

- Prettier: single quotes, no trailing commas, semicolons, 80 char width
- ESLint: next/core-web-vitals + next/typescript, `react/no-unescaped-entities` disabled
