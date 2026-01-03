# ADAS Landing - Next.js Application

![ADAS Logo](https://img.shields.io/badge/ADAS-Autonomous%20Drone%20AI%20System-blue)
![Next.js](https://img.shields.io/badge/Next.js-16.1.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 🚀 Overview

ADAS Landing is a comprehensive Next.js application for the Autonomous Drone AI System platform. It features a modern landing page, product showcases, SaaS subscription management, drone configurator, investor relations pages, and full e-commerce capabilities.

### ✨ Key Features

- **🎨 Modern UI/UX**: Glass-morphism design, gradient accents, smooth animations with Framer Motion
- **🛒 E-commerce**: Hardware ordering (drone configurator) + SaaS subscription management
- **💳 Payment Processing**: Stripe integration for payments and subscriptions
- **📊 Analytics**: Google Analytics 4 integration
- **🔐 Authentication**: NextAuth.js for secure user authentication
- **📝 CMS**: Admin dashboard for content management (blog posts, pages, orders)
- **📱 Responsive**: Fully responsive design for all device sizes
- **🎯 SEO Optimized**: Meta tags, Open Graph, structured data
- **🗃️ Database**: Prisma ORM with SQLite (dev) / PostgreSQL (production)

---

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Development](#development)
- [Production Build](#production-build)
- [Project Structure](#project-structure)
- [Key Pages](#key-pages)
- [API Routes](#api-routes)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## 🔧 Prerequisites

- **Node.js**: v18.0.0 or higher (v20.x recommended)
- **npm**: v9.0.0 or higher (or yarn/pnpm)
- **Git**: For version control
- **Database**: SQLite (dev) or PostgreSQL (production)

---

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/dark-developer-lord/adas-landing.git
cd adas-landing/my-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.local.example .env.local
# Edit .env.local with your actual values
```

4. **Initialize database**
```bash
npx prisma generate
npx prisma db push
npm run seed  # Optional: seed with sample data
```

5. **Run development server**
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory. See `.env.local.example` for all required variables.

### Required Variables

```env
DATABASE_URL="file:./prisma/dev.db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
STRIPE_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
```

---

## 🗄️ Database Setup

### Development (SQLite)

```bash
npx prisma generate
npx prisma db push
npx prisma studio  # Open database GUI
npm run seed       # Seed with sample data
```

### Production (PostgreSQL)

1. Update `DATABASE_URL` to PostgreSQL connection string
2. Run migrations: `npx prisma migrate deploy`

---

## 🛠️ Development

```bash
npm run dev     # Start dev server
npm run build   # Build for production
npm start       # Start production server
npm run lint    # Lint code
```

---

## 📁 Project Structure

```
my-app/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── story/             # Company story (NEW)
│   ├── investors/         # Investor relations
│   ├── product/drone/     # Product pages
│   │   └── order/         # Drone configurator
│   ├── order/             # SaaS subscriptions
│   ├── checkout/          # Checkout page
│   ├── admin/             # Admin dashboard
│   └── api/               # API routes
├── components/            # React components
│   ├── ui/               # UI components
│   └── admin/            # Admin components
├── lib/                  # Utilities
├── prisma/               # Database
└── public/               # Static files
```

---

## 🌐 Key Pages

### Public Pages
- `/` - Home landing page
- `/about` - About company
- `/story` - Company origin story (NEW)
- `/investors` - Investor pitch
- `/product/drone` - Drone showcase
- `/product/drone/order` - Drone configurator
- `/order` - SaaS subscriptions
- `/pricing` - Pricing page
- `/blog` - Blog listing
- `/careers` - Job listings

### Protected Pages
- `/admin` - Admin dashboard (admin only)
- `/portal` - Customer portal (auth required)

---

## 🔌 API Routes

- `POST /api/orders` - Create order
- `POST /api/subscriptions/create` - Create subscription
- `POST /api/webhooks/stripe` - Stripe webhook
- `POST /api/contact` - Contact form
- Admin APIs under `/api/admin/*`

---

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project to Vercel
3. Set environment variables
4. Deploy

### Database
- Use Vercel Postgres, Supabase, or Neon
- Update `DATABASE_URL`
- Run migrations: `npx prisma migrate deploy`

---

## 🎨 Tech Stack

- Next.js 16.1.0 (App Router)
- TypeScript 5.0
- Tailwind CSS v4
- shadcn/ui + Radix UI
- Framer Motion
- Prisma ORM
- NextAuth.js
- Stripe
- Google Analytics 4

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature/name`
5. Open Pull Request

---

## 📄 License

MIT License - see LICENSE file for details

---

## 📞 Support

- Email: support@adas.ai
- Issues: [GitHub Issues](https://github.com/dark-developer-lord/adas-landing/issues)

---

Made with ❤️ by the ADAS Team
