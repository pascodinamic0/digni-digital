# Digni Digital LLC

Growth Infrastructure Agency - We Build Growth Infrastructures That Turn Chaos Into Clients.

## Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Type-check the app
npm run typecheck

# Build for production
npm run build

# Run the core verification flow
npm run verify

# Smoke-test public localized routes while dev server is running
npm run smoke:routes

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Development Plan

See [`docs/APP-DEVELOPMENT-PLAN.md`](docs/APP-DEVELOPMENT-PLAN.md) for the current roadmap, QA checklist, validation commands, and recommended next build priorities.

## Stripe

Stripe Checkout and webhook setup is documented in [`docs/STRIPE_SETUP.md`](docs/STRIPE_SETUP.md). After adding local or Netlify environment variables, run:

```bash
npm run check-stripe
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main landing page
│   └── globals.css     # Global styles & design system
├── public/             # Static assets
├── tailwind.config.ts  # Tailwind configuration
└── next.config.js      # Next.js configuration
```

## Design System

- **Colors**: Dark theme with gold/amber accent (#D4A853)
- **Typography**: Outfit (display) + DM Sans (body)
- **Effects**: Grain overlay, gradient meshes, glow effects

## Deployment

This Next.js app can deploy on Netlify. Netlify detects Next.js automatically and turns App Router API routes, including Stripe routes, into functions during build.
