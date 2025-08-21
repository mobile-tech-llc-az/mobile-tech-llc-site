# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Mobile-Tech, LLC** business website built with Astro 5.0 and Tailwind CSS. It's a professional service website focused on tech support services in Tucson, Arizona. The site targets elderly customers and families who need patient, friendly computer help.

## Business Information

- **Company**: Mobile-Tech, LLC (comma is legally required)
- **Location**: Tucson, Arizona area
- **Phone**: 520-314-7152 (standardized format across all pages)
- **Email**: mobiletechllcaz@gmail.com
- **Services**: Two-tier service model - Residential tech support AND Enterprise L3/4+ solutions
- **Target Audience**: 
  - **Residential**: Elderly customers and families (but welcoming to all ages)
  - **Commercial**: Businesses requiring enterprise-grade infrastructure
- **Logo**: Located at `src/assets/images/Mobile-Tech-LLC.png`

## Service Categories

Mobile-Tech LLC operates a **two-tier service model**:

### RESIDENTIAL SERVICES (Consumer/Family Focus)
- Computer speed issues, virus removal, hard drive cleanup
- Password management and security (Bitwarden setup)
- Email problems (Gmail, Yahoo, Outlook)
- WiFi router and internet troubleshooting
- Software training and general support
- Cloud storage setup (Google Drive, Dropbox, OneDrive)
- RAM/SSD upgrades and computer replacement
- System reimaging and deep cleaning
- Printer setup (preferring laser printers)
- PC to Mac migration assistance
- iPhone, iPad, Android setup and support
- Apple TV integration
- TV mounting, streaming service setup
- Remote control programming
- Basic security camera installation (Reolink)
- **Technology purchasing consultation**: Research and help customers choose new computers, TVs, A/V equipment, and streaming devices

### COMMERCIAL SERVICES (Enterprise L3/4+ Solutions)
- **Enterprise File Servers**: 100TB+ custom builds, 24/7/365 uptime (10+ years proven)
- **Large-Scale Networking**: 8,000+ sqft installations, 10G infrastructure, Cat6a runs
- **Security Camera Systems**: Enterprise surveillance with offsite recording
- **Professional A/V**: Conference room design, projector/TV installations
- **Virtualization & Self-Hosting**: Kubernetes, open source software deployment
- **Business Process Automation**: IaC/GitOps, AI implementation, digital transformation
- **Office Integration**: Active Directory/LDAP, O365/Google Workspace, email migration
- **Disaster Recovery**: Enterprise backup solutions, comprehensive data protection
- **Network Architecture**: Complete design, infrastructure planning, security implementation
- **POS Systems**: Toast POS and other modern retail solutions
- **Cloud Service Management**: Multi-cloud architecture, cost optimization

## Website Navigation Structure

### Main Menu
- **Services** (NEW dropdown menu positioned first)
  - **Residential**: `/services/residential` - Family/consumer tech support
  - **Commercial**: `/services/commercial` - Enterprise L3/4+ solutions
- **Homes**: Template showcase pages (legacy)
- **Pages**: Standard pages (About, Contact, Pricing, etc.)
- **Landing**: Marketing landing pages
- **Blog**: Content management system

## Website Messaging Strategy

### RESIDENTIAL Messaging
- **Mobile Service**: "We Come to You" - no need to transport equipment
- **Patient Approach**: "No judgment, no confusing tech talk"
- **Local Business**: Tucson community focus
- **Honest Pricing**: Clear, upfront costs
- **Same-day service** availability
- **Technology Guidance**: "Help choosing new technology" - research and unbiased recommendations
- **Language**: Simple, non-technical, reassuring ("You're Not Alone")

### COMMERCIAL Messaging
- **Enterprise Expertise**: L3/4+ solutions with proven track record
- **Cost-Effective**: Example: $17.5k for 400TB server vs. higher competitor pricing
- **Proven Reliability**: 10+ years of 24/7/365 uptime on critical systems
- **Advanced Technology**: Kubernetes, virtualization, automation capabilities
- **Real Project Examples**: Specific technical implementations and results

### Additional Messaging Guidelines
- **Technology Purchasing Consultation**: Position as trusted advisor vs. sales pressure from big box stores
- **Unbiased Recommendations**: Emphasize research-based advice tailored to customer's actual needs and budget
- **Value Proposition**: "We help you choose the right technology" not "we sell you technology"
- **Target Common Pain Points**: "Overwhelmed by too many choices?" and "Not sure what you actually need?"

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
- `vendor/`: Custom Mobile-Tech, LLC integration

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

## Brand Colors & Theming

This project has been customized for **Mobile-Tech LLC** brand colors. The brand palette includes:

### Brand Color Palette
- **Primary**: #816bb1 (Purple accent from logo)
- **Secondary**: #d7ab87 (Warm tan from logo)
- **Dark**: #1e1a2e (Main dark purple from logo)
- **Medium**: #2a2336 (Medium purple shade)
- **Light**: #342a48 (Light purple shade)

### Color Implementation
- **CSS Variables**: Brand colors defined in `src/components/CustomStyles.astro`
- **Tailwind Classes**: Available as `brand-dark`, `brand-medium`, `brand-light`, `brand-text`, `brand-accent`
- **Light Mode**: Uses dark purple text on white backgrounds for contrast
- **Dark Mode**: Uses warm tan text on dark purple backgrounds

### Important Color Guidelines
- **Always use Tabler icons** instead of flat-color-icons for consistent brand coloring
- **Icon styling**: Use `text-[#816bb1]` for explicit brand purple on icons
- **Panel backgrounds**: Use `bg-white dark:bg-brand-medium` for card components
- **Borders**: Use `border-brand-light/20` for subtle branded borders

### Common Brand Color Patterns
```astro
<!-- Icon with brand color -->
icon: 'w-12 h-12 mb-6 text-[#816bb1]'

<!-- Panel with brand backgrounds -->
panel: 'bg-white dark:bg-brand-medium border border-brand-light/20'

<!-- Text with brand colors -->
class="text-primary dark:text-secondary"
```

## Development Notes

- The blog system requires `prerender = true` for full compatibility
- Path alias `~/*` maps to `src/*` for imports
- SEO and Open Graph metadata managed through config.yaml
- Custom integrations loaded from vendor/ directory
- ESLint and Prettier configured for Astro-specific parsing
- **Brand consistency**: Always check that new components use brand colors instead of default blues