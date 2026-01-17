# Shawn Legend - Professional Hair Stylist Website

A modern, secure, and responsive website for professional hair stylist Shawn Legend with over 20 years of experience in cutting, styling, coloring, and more.

## 🎯 Features

- **Modern Tech Stack**: Next.js 16.1.3 (CVE-patched), TypeScript, TailwindCSS v4
- **Security-First**: ArcJet protection, rate limiting, bot detection, CSP headers
- **Contact System**: Protected form with Resend email integration
- **Gallery**: Image/video portfolio with filtering capabilities
- **Admin Panel**: Portfolio management interface
- **Responsive Design**: Mobile-first approach with beautiful UI
- **Background Processing**: Inngest for email workflows
- **SEO Optimized**: Sitemap, robots.txt, meta tags, structured data

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 16.1.3 (latest security patches)
- **UI**: TailwindCSS v4 + shadcn/ui + Base UI components
- **Forms**: Tanstack Form + Zod validation
- **Data Fetching**: Tanstack Query

### Backend & Database
- **Database**: DrizzleORM with SQLite (easily upgradeable to PostgreSQL)
- **Security**: ArcJet for protection against attacks
- **Email**: Resend for transactional emails
- **Background Jobs**: Inngest for async workflows

### Development
- **Language**: TypeScript
- **Linting**: ESLint with Next.js config
- **Styling**: TailwindCSS v4 with custom purple theme
- **Version Control**: Git with semantic commits

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── (pages)/           # Main pages
│   │   ├── page.tsx       # Home page
│   │   ├── gallery/       # Gallery page
│   │   ├── contact/       # Contact page
│   │   └── admin/        # Admin panel
│   ├── api/              # API routes
│   │   ├── contact/       # Contact form endpoint
│   │   └── inngest/      # Inngest webhook
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── sitemap.ts         # SEO sitemap
│   └── robots.ts          # SEO robots.txt
├── components/           # Reusable components
│   ├── ui/              # shadcn/ui components
│   ├── Header.tsx        # Site navigation
│   └── Footer.tsx        # Site footer
├── lib/                 # Utility libraries
│   ├── db.ts            # Database connection
│   ├── schema.ts         # Database schema
│   ├── email.ts         # Email functions
│   ├── arcjet.ts        # Security configuration
│   ├── inngest.ts       # Background jobs
│   ├── validations.ts    # Zod schemas
│   └── utils.ts         # Helper functions
├── inngest/             # Inngest functions
└── public/              # Static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js 20.9+
- pnpm (recommended), npm, or yarn

### Installation

1. **Clone repository**
   ```bash
   git clone git@github.com:dlitorja/shawn-shin-website.git
   cd shawn-shin-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or npm install
   # or yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Update `.env.local` with your actual values:
   ```env
   DATABASE_URL="./shawn-legend.db"
   RESEND_API_KEY="your_resend_api_key"
   FROM_EMAIL="hello@shawn-legend.com"
   TO_EMAIL="contact@shawn-legend.com"
   ARCJET_KEY="your_arcjet_key"
   INNGEST_EVENT_KEY="your_inngest_event_key"
   INNGEST_SIGNING_KEY="your_inngest_signing_key"
   NEXT_PUBLIC_SITE_URL="https://your-domain.com"
   ```

4. **Initialize database**
   ```bash
   npm run db:push
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🛡️ Security Features

### ArcJet Protection
- **Rate Limiting**: 2 contact form submissions per 5 minutes
- **Bot Detection**: Blocks automated bots and scrapers
- **DDoS Protection**: Shield against common attack vectors
- **IP-based tracking**: Per-user rate limiting

### Security Headers
- **Content Security Policy**: Prevents XSS and data injection
- **X-Frame-Options**: Prevents clickjacking
- **X-Content-Type-Options**: Prevents MIME sniffing
- **Strict-Transport-Security**: Enforces HTTPS in production
- **Referrer-Policy**: Controls referrer information

### Input Validation
- **Zod Schemas**: Type-safe validation for all inputs
- **SQL Injection Protection**: DrizzleORM parameterized queries
- **XSS Prevention**: React automatically escapes JSX content
- **Email Validation**: RFC-compliant email validation

## 📧 Email System

### Contact Form Workflow
1. **Submission**: User fills contact form
2. **Validation**: Client and server-side validation
3. **Security**: ArcJet protection checks
4. **Storage**: Message saved to database
5. **Background**: Inngest processes email sending
6. **Notifications**: 
   - Email sent to Shawn with client details
   - Confirmation email sent to client
7. **Retry Logic**: Failed emails are retried automatically

### Email Templates
- **Professional Design**: HTML templates with branding
- **Responsive Design**: Mobile-friendly layouts
- **Personalization**: Dynamic content insertion
- **Formatting**: Proper typography and spacing

## 🎨 UI/UX Features

### Design System
- **Color Palette**: Purple theme for hair salon branding
- **Typography**: Inter font family for readability
- **Spacing**: Consistent spacing scale
- **Components**: Reusable shadcn/ui components

### Responsive Design
- **Mobile-First**: Progressive enhancement approach
- **Breakpoints**: Tailwind's responsive breakpoints
- **Navigation**: Mobile hamburger menu
- **Images**: Optimized for different screen sizes

### Accessibility
- **Semantic HTML**: Proper heading hierarchy
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliance

## 📈 SEO Optimization

### Meta Tags
- **Title Tags**: Descriptive page titles
- **Meta Descriptions**: Compelling search snippets
- **Open Graph**: Social media previews
- **Structured Data**: Schema.org markup

### Technical SEO
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine instructions
- **Canonical URLs**: Duplicate content prevention
- **Page Speed**: Optimized for Core Web Vitals

## 🔧 Development Scripts

```bash
# Development
pnpm run dev          # Start development server

# Building
pnpm run build        # Build for production
pnpm run start        # Start production server

# Database
pnpm run db:generate  # Generate database migrations
pnpm run db:push      # Push schema to database
pnpm run db:studio    # Open Drizzle Studio

# Code Quality
pnpm run lint         # Run ESLint
pnpm run lint:fix     # Fix linting issues
```

## 📦 Dependencies

### Core Dependencies
- **next**: React framework with security patches
- **react**: UI library
- **tailwindcss**: Utility-first CSS framework
- **@tanstack/react-form**: Form management
- **@tanstack/react-query**: Data fetching
- **zod**: Runtime type validation
- **drizzle-orm**: Type-safe database queries

### Security & Services
- **@arcjet/next**: Security protection
- **resend**: Email service
- **inngest**: Background job processing

### UI Components
- **@radix-ui/react-\***: Unstyled component primitives
- **lucide-react**: Icon library
- **class-variance-authority**: Component variants
- **clsx/tailwind-merge**: Utility functions

## 🚀 Deployment

### Environment Setup
1. **Database**: Configure production database
2. **Environment**: Set production environment variables
3. **Domain**: Configure custom domain
4. **DNS**: Set up proper DNS records

### Security Checklist
- [ ] Update all environment variables
- [ ] Enable HTTPS
- [ ] Configure security headers
- [ ] Set up monitoring
- [ ] Test contact form functionality
- [ ] Verify email delivery

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a pull request

## 📝 License

This project is private property of Shawn Legend. All rights reserved.

## 📞 Support

For any questions or support:
- **Email**: hello@shawn-legend.com
- **Phone**: (555) 123-4567
- **Location**: 123 Main St, Novi, MI 48167

---

Built with ❤️ using modern web technologies and security best practices.