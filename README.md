# Winstore E-Commerce Web Application

A modern, pixel-perfect e-commerce web application built with Next.js 15+ App Router, featuring Server Actions for all API interactions and a fully responsive UI.

## 🚀 Live Demo

- **Live URL**: https://shop-app-red-ten.vercel.app/
- **GitHub Repository**: https://github.com/mohammed-ahsan/shop-app.git

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Architecture](#architecture)
- [API Integration](#api-integration)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Assumptions](#assumptions)

## ✨ Features

- ✅ **Server-Side Rendering (SSR)** with Next.js 15+ App Router
- ✅ **Server Actions** for all API calls (no client-side fetch)
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS 4** for styling
- ✅ **Responsive Design** - Mobile, Tablet, Desktop
- ✅ **Dynamic Routing** for products and categories
- ✅ **Static Site Generation (SSG)** for product pages
- ✅ **Error Handling** with custom error boundaries
- ✅ **Loading States** with Next.js loading UI
- ✅ **SEO Optimized** with dynamic metadata
- ✅ **Performance Optimized** with Next.js caching

## 🛠 Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Custom components with Lucide React icons
- **API Integration**: Server Actions with Next.js `unstable_cache`
- **Fonts**: Roboto (Google Fonts)

## 📁 Project Structure

```
ecommerce-app/
├── src/
│   ├── actions/              # Server Actions for API calls
│   │   └── products.ts       # Product-related server actions
│   ├── app/                  # Next.js App Router pages
│   │   ├── category/         # Category pages
│   │   │   └── [slug]/       # Dynamic category routes
│   │   ├── product/          # Product pages
│   │   │   └── [id]/         # Dynamic product routes
│   │   ├── error.tsx         # Global error boundary
│   │   ├── layout.tsx        # Root layout
│   │   ├── loading.tsx       # Global loading state
│   │   ├── not-found.tsx     # 404 page
│   │   ├── page.tsx          # Homepage
│   │   └── globals.css       # Global styles
│   ├── components/           # Reusable React components
│   │   ├── CategoryCard.tsx  # Category display card
│   │   ├── Footer.tsx        # Footer component
│   │   ├── Header.tsx        # Header/Navigation
│   │   ├── HomeClient.tsx    # Client component for homepage tabs
│   │   └── ProductCard.tsx   # Product display card
│   └── types/                # TypeScript type definitions
│       └── product.ts        # Product and API types
├── .env.example              # Environment variables template
├── .env.local                # Local environment variables (git-ignored)
├── next.config.ts            # Next.js configuration
├── package.json              # Dependencies and scripts
├── postcss.config.mjs        # PostCSS configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## 🏃 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ecommerce-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## 🏗 Architecture

### Server Components & Server Actions

This application follows Next.js best practices by using:

1. **Server Components by Default**: All pages and components are Server Components unless explicitly marked with `"use client"`
2. **Server Actions for API Calls**: All API interactions are handled through Server Actions in `src/actions/products.ts`
3. **Client Components**: Only used when absolutely necessary (e.g., interactive tabs, state management)

### Data Flow

```
API Server → Server Actions → Server Components → Client Components (when needed)
```

### Caching Strategy

- **Product Lists**: Cached for 1 hour with revalidation
- **Categories**: Cached for 2 hours
- **Single Products**: Cached for 1 hour
- Uses Next.js `unstable_cache` with custom cache tags for granular control

### Routing

- **Homepage**: `/` - Displays featured products and categories
- **Category Pages**: `/category/[slug]` - Dynamic routes for each category
- **Product Pages**: `/product/[id]` - Dynamic routes for each product
- **Static Generation**: Product pages are statically generated at build time

## 🔌 API Integration

The application integrates with the following APIs:

| Endpoint | Purpose | Server Action |
|----------|---------|---------------|
| `/api/v1/products` | Get all products | `getProducts()` |
| `/api/v1/products/categories` | Get all categories | `getCategories()` |
| `/api/v1/products/category/{category}` | Get products by category | `getProductsByCategory(category)` |
| `/api/v1/products/{id}` | Get single product | `getProductById(id)` |

**Base URL**: `https://mm-assesment-server.vercel.app/api/v1`

### Server Actions

All API calls are made through Server Actions located in `src/actions/products.ts`:

```typescript
// Example usage in a Server Component
import { getProducts } from '@/actions/products';

export default async function Page() {
  const products = await getProducts();
  return <div>{/* Render products */}</div>;
}
```

## 🌍 Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_BASE_URL=https://mm-assesment-server.vercel.app/api/v1
```

See `.env.example` for reference.

## 📜 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📝 Assumptions

1. **Product Images**: The API provides product images that are assumed to be hosted externally
2. **Categories**: Category images are not provided by the API, so placeholder images are used
3. **Pricing**: Original prices are calculated as 20% more than the sale price to show discounts
4. **Inventory**: All products are assumed to be in stock
5. **Authentication**: Not implemented as it's not required by the assessment
6. **Cart Functionality**: Add to cart button is UI-only (no backend integration)
7. **Static Generation**: First 20 products are statically generated; others are rendered on-demand
8. **Browser Support**: Modern browsers with ES6+ support
9. **Responsive Breakpoints**: 
   - Mobile: < 640px
   - Tablet: 640px - 1024px
   - Desktop: > 1024px

## 🎨 Design Implementation

The UI has been implemented to match the Figma design with:
- Exact color palette from brand guidelines
- Typography using Roboto and Century Gothic fonts
- Responsive layouts for all screen sizes
- Consistent spacing and component sizing
- Hover states and transitions

## 🔧 Key Technical Decisions

1. **Server Actions over Client Fetch**: Ensures better performance and SEO
2. **TypeScript**: Provides type safety and better developer experience
3. **Tailwind CSS 4**: Enables rapid UI development with utility classes
4. **Next.js Caching**: Optimizes API calls and improves performance
5. **Error Boundaries**: Graceful error handling at different levels
6. **Dynamic Imports**: Used for client components to reduce initial bundle size

## 📄 License

This project is created for assessment purposes.

## 👨‍💻 Author

[Your Name]

---

Built with ❤️ using Next.js
