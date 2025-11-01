# Product Manager Portfolio - Design Guidelines

## Design Approach
Reference-Based Approach drawing from professional portfolio best practices and modern SaaS aesthetics. Primary inspiration: Linear (typography/polish), Notion (clarity/structure), and leading PM portfolio sites. The design should feel sophisticated, data-driven, and results-oriented - reflecting PM thinking.

## Typography System
Primary Font: Inter or Manrope (Google Fonts) - modern, professional, excellent at multiple weights
Secondary Font: Crimson Pro or Lora for pull quotes and testimonials (optional accent)

Hierarchy:
- Hero headline: text-5xl md:text-7xl, font-bold, tracking-tight
- Section headers: text-3xl md:text-4xl, font-bold
- Project titles: text-2xl md:text-3xl, font-semibold
- Metric numbers: text-4xl md:text-6xl, font-bold
- Body text: text-base md:text-lg, leading-relaxed
- Captions/metadata: text-sm, font-medium, uppercase tracking-wide

## Layout System
Spacing Units: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 md:py-24
- Component spacing: gap-8 md:gap-12
- Container max-width: max-w-7xl
- Content max-width: max-w-4xl (for text-heavy sections)

## Component Library

### Hero Section
Full-width with asymmetric two-column layout:
- Left column (60%): Headline positioning statement, 2-3 sentence value prop, dual CTA buttons (primary: "View Projects", secondary: "Download Resume"), trust indicators (e.g., "8+ years PM experience | Led 15+ product launches")
- Right column (40%): Professional headshot or workspace photo with subtle border treatment
- Background: Subtle gradient or pattern texture, very minimal
- Buttons on images: Use backdrop-blur-md with semi-transparent backgrounds

### Featured Projects Grid
3-column grid (lg:grid-cols-3 md:grid-cols-2 grid-cols-1) with project cards:
- Large product screenshot/mockup image (aspect-ratio-[4/3])
- Company logo or badge overlay
- Project title and one-line description
- Key metric callouts (3 metrics max): "+40% conversion" badges
- "View Case Study" link with arrow
- Hover: Subtle lift effect (transform scale)

### Case Study Showcase
Alternating left/right layout pattern for multiple projects:
- Large product image (alternates sides)
- Content side includes: Project title, company/timeframe, problem statement (2-3 lines), your role, key outcomes with metric cards, "Read Full Case Study" CTA
- Metric cards: Small boxes with number (large), label (small), displayed as grid-cols-3
- Background alternates: white/very subtle tinted background per row

### Skills & Tools Section
Multi-column grid showcasing PM competencies:
- Grid layout: 4-6 skill categories (grid-cols-2 md:grid-cols-3 lg:grid-cols-4)
- Each category: Icon (via Heroicons), category label, list of 3-5 specific tools/skills
- Categories: Product Strategy, Analytics & Metrics, Design & UX, Technical Skills, Methodologies, Collaboration Tools

### Experience Timeline
Horizontal or vertical timeline component:
- Company logo + role title + dates
- 2-3 bullet points of key achievements with metrics
- Visual connector line between entries
- Responsive: Vertical on mobile, horizontal on desktop

### Testimonials Section
2-column grid (md:grid-cols-2):
- Quote text (text-lg, italic)
- Attribution: Name, title, company, optional headshot (small circular)
- Company logo watermark (subtle, large background element)

### Contact Section
Split layout:
- Left (60%): Simple contact form (Name, Email, Message, Submit button)
- Right (40%): Direct contact options (Email with copy button, LinkedIn profile link, Calendar scheduling link), availability status

### Navigation Header
Sticky header with:
- Left: Name/logo text (text-xl font-bold)
- Right: Navigation links (Projects, About, Experience, Contact), "Download Resume" button
- Mobile: Hamburger menu, full-screen overlay navigation

### Footer
Comprehensive footer with:
- Top row: Brief bio or tagline (max-w-md)
- Middle row: Quick links grid (grid-cols-2 md:grid-cols-4) - Navigation, Social links, Contact info, Newsletter signup
- Bottom row: Copyright, "Built with [tech stack]" credit
- Social icons: LinkedIn (required), Medium/Blog, Twitter, GitHub (if relevant)

## Images

Hero Section: Professional headshot or workspace photo showing you in a professional PM context (meeting room, whiteboard session, or studio portrait). High-quality, well-lit, neutral background. Aspect ratio 3:4 or 4:5 portrait orientation.

Project Showcases: Product screenshots, app interfaces, dashboards, user flows, or prototype mockups. Each project needs 1 main hero image plus 2-3 supporting images for case studies. Images should show actual product work - favor real screenshots over generic stock photos.

Company Logos: Include authentic company/brand logos for credibility (make sure you have rights to use them).

Background Elements: Optional subtle pattern overlays or gradient meshes in hero section - keep very understated.

## Animation Strategy
Minimal, purposeful animations:
- Scroll-triggered fade-in for project cards (stagger by 100ms)
- Metric counter animations on viewport entry
- Smooth hover states on cards (subtle scale/shadow)
- Page transition fade (300ms)
- No parallax, no complex scroll animations

## Accessibility
- All images have descriptive alt text describing the project/product
- Form inputs with proper labels and ARIA attributes
- Keyboard navigation for all interactive elements
- Focus states clearly visible with ring-2 ring-offset-2
- Color contrast meets WCAG AA standards minimum
- Semantic HTML structure (header, main, section, footer)

## Key Principles
1. Metrics-Driven: Quantify impact wherever possible - numbers build credibility
2. Visual Proof: Show actual product work, not just descriptions
3. Scannable: Recruiters skim - make key info jump out
4. Professional Polish: Pixel-perfect spacing, consistent patterns, refined details
5. Story Arc: Guide visitors from introduction → projects → credibility → action

This portfolio should feel like a product itself - well-designed, user-centric, and results-oriented.