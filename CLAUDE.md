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

### Current Main Menu (Updated)

- **Contact**: `/contact` - Primary contact page with online scheduling
- **About Us**: `/about` - Company history and values
- **Residential**: `/services/residential` - Family/consumer tech support
- **Commercial**: `/services/commercial` - Enterprise L3/4+ solutions

### Commented Out (Available for Future Use)

- **Services Dropdown**: Originally contained Residential/Commercial
- **Homes**: Template showcase pages (legacy)
- **Pages**: Standard pages (Pricing, etc.)
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

| Command                  | Purpose                                    |
| ------------------------ | ------------------------------------------ |
| `npm run dev`            | Start development server at localhost:4321 |
| `npm run build`          | Build production site to ./dist/           |
| `npm run preview`        | Preview production build locally           |
| `npm run check`          | Run all checks (Astro, ESLint, Prettier)   |
| `npm run check:astro`    | Run Astro type checking                    |
| `npm run check:eslint`   | Run ESLint checks                          |
| `npm run check:prettier` | Check Prettier formatting                  |
| `npm run fix`            | Auto-fix ESLint and Prettier issues        |
| `npm run fix:eslint`     | Auto-fix ESLint issues                     |
| `npm run fix:prettier`   | Auto-format with Prettier                  |

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
<!-- Icon with brand color -->icon: 'w-12 h-12 mb-6 text-[#816bb1]'

<!-- Panel with brand backgrounds -->
panel: 'bg-white dark:bg-brand-medium border border-brand-light/20'

<!-- Text with brand colors -->
class="text-primary dark:text-secondary"
```

## Recent Updates & Implementation Notes

### Pages Completely Updated (August 2025)

#### About Us Page (`/about`)

- **Hero Section**: Updated with "Serving Tucson Since 2005" messaging and company logo
- **Statistics**: Shows 20+ years, founding date (2005), service areas, core values
- **Service Model**: Two-tier approach (Residential + Commercial) with detailed feature descriptions
- **Company Values**: Education over dependency, simplicity/repeatability, honest service
- **Company History**: Nearly two decades of service, enterprise reliability, data recovery excellence
- **Contact Info**: Updated with correct Tucson area info, phone (520-314-7152), email
- **Image Fix**: Applied proper image styling (w-64 h-auto mx-auto object-contain, width: undefined, height: undefined)

#### Contact Page (`/contact`)

- **Email Form**: Removed and replaced with online scheduling system
- **Calendar Integration**: Google Calendar booking link: `https://calendar.app.google/7RcPw78n1ixTajYK6`
- **Hero Section**: "Schedule Your On-Site Visit" with prominent call-to-action
- **Contact Methods**: Phone (520-314-7152), email (mobiletechllcaz@gmail.com), mobile service area
- **Service Descriptions**: Residential, commercial, and technology consultation options
- **Dual Button Layout**: Schedule appointment button with email button below it (both purple styling)
- **Email Button**: 📧 Email button with mailto: link to mobiletechllcaz@gmail.com

#### Terms of Service (`/terms`)

- **LLC Liability Protection**: Clear disclaimers about no assumption of liabilities/damages
- **No Warranties Clause**: Explicit statement - no implicit/explicit warranties provided
- **Best Efforts Commitment**: Professional service standards while limiting liability
- **Arizona Law**: Proper jurisdiction and dispute resolution
- **Service-Specific**: Technology support focus (not website templates)

#### Privacy Policy (`/privacy`)

- **Service-Focused**: Covers on-site tech support and website interactions
- **Client Data Protection**: Clear policies about device access during service
- **Professional Discretion**: Privacy handling during support visits
- **Data Retention**: 3-7 year business record retention policy
- **Client Rights**: Clear information about data control and privacy options

#### Home Page (`/index`)

- **Button Updates**: Removed "Send Email", kept "Call for Help" and "Book a Visit"
- **Book a Visit**: New button linking to `/contact` page with calendar icon
- **RSS Feed**: Commented out from header (`showRssFeed` removed from PageLayout.astro)
- **Services Grid**: Added 8th tile "Printer Setup & Troubleshooting" for balanced layout (8 tiles total)
- **Final CTA**: Changed "Call Now: 520-314-7152" to "Contact Us Today" button linking to /contact
- **CTA Styling**: Updated button icon to calendar and simplified subtitle to "Same-day service available!"

### Navigation Structure Updates (`/src/navigation.ts`)

#### Header Navigation

- **Streamlined Menu**: Contact, About Us, Residential, Commercial (flat structure)
- **Commented Out**: Services dropdown, Homes, Pages, Landing, Blog sections
- **Future Ready**: All unused navigation preserved as comments

#### Footer Navigation

- **Active Sections**: Services (Residential/Commercial), Company (About/Contact)
- **Social Links**: Only Google business link active: `https://share.google/JDPDAvLEeRYEsJGKX`
- **Secondary Links**: Terms and Privacy Policy maintained
- **Commented Out**: Product, Platform, Support sections; X, Instagram, Facebook, RSS, GitHub

### Visual & Branding Updates

#### Favicon (`/src/assets/favicons/favicon.svg`)

- **Updated Icon**: Changed from abstract logo to laptop icon (💻 representation)
- **Professional Design**: Clean laptop with blue screen and dark gray body
- **Tech Industry Appropriate**: Clearly represents computer/technology services

#### Contact Information Standardization

- **Phone**: 520-314-7152 (standardized format across all pages)
- **Email**: mobiletechllcaz@gmail.com
- **Service Area**: Tucson, Arizona and surrounding areas
- **Business Model**: Mobile service - "We Come to You"

### Online Scheduling Integration

- **Primary CTA**: Book appointments through Google Calendar
- **Calendar Link**: `https://calendar.app.google/7RcPw78n1ixTajYK6`
- **Contact Page**: Prominent scheduling section with clear instructions
- **Home Page**: Direct "Book a Visit" button for immediate scheduling

### Legal Compliance Updates

- **LLC Protection**: Proper liability disclaimers for service business
- **No Warranties**: Clear service limitations while maintaining quality commitment
- **Arizona Jurisdiction**: Proper legal framework for local business
- **Privacy Compliance**: Service-appropriate data handling policies

## Development Notes

- The blog system requires `prerender = true` for full compatibility
- Path alias `~/*` maps to `src/*` for imports
- SEO and Open Graph metadata managed through config.yaml
- Custom integrations loaded from vendor/ directory
- ESLint and Prettier configured for Astro-specific parsing
- **Brand consistency**: Always check that new components use brand colors instead of default blues
- **RSS Feed**: Currently commented out in PageLayout.astro (can be re-enabled)
- **Navigation**: Extensive commented sections available for future feature additions
- Update the artifact to reflect the changes we've made
