# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an AstroWind-based website built with Astro 5.0 and Tailwind CSS. It's a static site generator template focused on high performance and SEO optimization. The project includes a blog system, multiple page layouts, and extensive widget components for creating modern websites.

## Key Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server at localhost:4321 |
| `npm run build` | Build production site to ./dist/ |
| `npm run preview` | Preview production build locally |
| `npm run check` | Run all checks (Astro, ESLint, Prettier) |
| `npm run check:astro` | Run Astro type checking |
| `npm run check:eslint` | Run ESLint checks |
| `npm run check:prettier` | Check Prettier formatting |
| `npm run fix` | Auto-fix ESLint and Prettier issues |
| `npm run fix:eslint` | Auto-fix ESLint issues |
| `npm run fix:prettier` | Auto-format with Prettier |

## Architecture

### Core Structure
- **Framework**: Astro 5.0 with TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Content**: MDX support for blog posts with frontmatter
- **Images**: Astro Assets with Unpic for optimization
- **Icons**: Astro Icon with Tabler and Flat Color Icons

### Key Directories
- `src/components/`: Reusable components organized by category
  - `widgets/`: Major page sections (Header, Hero, Features, etc.)
  - `ui/`: Base UI components (Button, Form, Timeline, etc.)
  - `blog/`: Blog-specific components
  - `common/`: Shared utilities (Analytics, SEO, etc.)
- `src/layouts/`: Page templates for different content types
- `src/pages/`: File-based routing with dynamic blog routes
- `src/utils/`: Helper functions for permalinks, images, blog logic
- `src/data/post/`: Blog posts in MD/MDX format
- `vendor/`: Custom AstroWind integration

### Configuration
- `src/config.yaml`: Site metadata, SEO, blog settings, analytics
- `src/navigation.ts`: Header and footer navigation structure
- `astro.config.ts`: Astro configuration with integrations
- `tailwind.config.js`: Tailwind customization with design tokens

### Content Management
- Blog posts use frontmatter for metadata
- Dynamic routing handles categories, tags, and pagination
- Content collections configured in `src/content/config.ts`
- Images optimized through Astro's asset pipeline

### Styling System
- Custom CSS variables in `src/assets/styles/tailwind.css`
- Design tokens for colors, fonts defined in Tailwind config
- Dark mode support via class strategy
- Custom animations and fade effects

### Performance Features
- Static site generation with optional hybrid/server modes
- Image optimization with Sharp
- CSS/JS/HTML compression via astro-compress
- Automatic sitemap and RSS feed generation

## Development Notes

- The blog system requires `prerender = true` for full compatibility
- Path alias `~/*` maps to `src/*` for imports
- SEO and Open Graph metadata managed through config.yaml
- Custom integrations loaded from vendor/ directory
- ESLint and Prettier configured for Astro-specific parsing