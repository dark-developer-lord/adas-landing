# ADAS Landing (my-app)

This repository contains the ADAS landing Next.js application (App Router, TypeScript). It includes UI, API routes, Prisma schema, Stripe integration, GA4, and Tailwind CSS v4 inline theme configuration.

**Quick summary**
- Framework: Next.js 16 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS v4 (inline `@theme` in `app/globals.css`)
- Database: Prisma (SQLite for local dev, Postgres recommended for production)

---

## Prerequisites
- Node.js 18+ (20 recommended)
- npm (or yarn)
- Git

## Install
Run from the `my-app` folder:

```bash
cd my-app
npm install
```

## Environment variables
Create a `.env.local` at the project root (do NOT commit secrets). Example keys used by the app:

- `DATABASE_URL` — Prisma connection (sqlite: `file:./prisma/dev.db` for local)
- `NEXTAUTH_URL` — e.g. `http://localhost:3000`
- `NEXTAUTH_SECRET` — secret for NextAuth
- `STRIPE_SECRET_KEY` — Stripe secret key
- `STRIPE_WEBHOOK_SECRET` — Stripe webhook signing secret
- `RESEND_API_KEY` — Resend email API key
- `SENTRY_DSN` — Sentry DSN (optional)
- `GA_MEASUREMENT_ID` / `NEXT_PUBLIC_GA_MEASUREMENT_ID` — GA4 measurement ID (optional)

There is an `.env.local.example` included to guide required values.

## Database (Prisma)
Local dev uses SQLite by default. To create/update schema and generate client:

```bash
npx prisma migrate dev --name init  # creates migrations and dev DB
npx prisma db push                 # apply schema without migration (alternative)
npx prisma generate                # regenerate Prisma client
```

If you use a production DB (Postgres), set `DATABASE_URL` accordingly and run migrations with `prisma migrate deploy`.

NOTE: local DB files (e.g. `prisma/dev.db`) are ignored from commits in `.gitignore`.

## Development
Start the dev server (Turbopack):

```bash
npm run dev
# open http://localhost:3000
```

If styles look like plain HTML (unstyled) in the browser:
- Hard-refresh the page (Cmd+Shift+R or Cmd+Option+R in Safari)
- Clear browser cache or open in a private window
- Ensure the Next dev server is running so PostCSS/Tailwind can rebuild

## Build & Production
To build and run in production mode:

```bash
npm run build
npm start
```

Deploy to Vercel or your preferred platform. Ensure environment variables are set on the host.

## Tailwind CSS v4 (inline theme)
This project uses Tailwind v4 with inline theme configuration inside `app/globals.css` using `@theme inline { ... }`. There is no required `tailwind.config.js` file — theme tokens live in the CSS. If your editor or linter flags unknown at-rules (`@theme`, `@custom-variant`) those are valid for Tailwind v4 and can be ignored or configured to your linter.

Styles live in:

- `app/globals.css` — main Tailwind imports and theme

## Common tasks
- Lint: `npm run lint`
- Format: use your formatter (Prettier) configured in the repo
- Prisma introspect/generate: `npx prisma generate`

## Security & Git
- Do NOT commit `.env` files or other secrets. `.gitignore` already includes `.env*` and local DB files.
- If you accidentally committed secrets, rotate them immediately and consider rewriting history.

## Troubleshooting
- Dev server not running: ensure no other process uses port 3000 and that you ran `npm install`.
- Tailwind not rebuilding: restart the dev server and clear `.next` cache (`rm -rf .next`).
- Type errors: run `npm run dev` to see TypeScript diagnostics; edit the offending files.

## Optional: PDF invoices
The repo includes an API route for invoices. It currently returns JSON for local testing. If you need downloadable PDF invoices, enable the React-PDF code in `lib/pdf-invoice.tsx` and return a streamed PDF response from the invoice route.

---

If you want, I can also:
- Add a `CONTRIBUTING.md` with commit conventions
- Create a `release/v1.0.0` tag/branch for deploy
- Remove the local DB from the repository history (destructive rewrite)

If you want this README committed, I will add and commit it now.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# adas-landing
