# 🌸 ATULYAM – Haru no Stars 2026

A dynamic and immersive web experience for ATULYAM 2026, the cultural festival celebrating Japanese culture at NIT Arunachal Pradesh. Built with Next.js, TypeScript, and Tailwind CSS.

**Event Dates:** 16-18 April 2026

## Features
- 🎨 Dynamic theme system with 6 color schemes
- 📱 Fully responsive design (mobile, tablet, desktop)
- ✨ Smooth animations with Framer Motion
- 🖱️ Custom cursor with theme-aware styling
- 🎭 Interactive event categories and schedule
- 👥 Complete team directory with photos

## Pages
| Route | Description |
|-------|-------------|
| `/` | Landing – Galaxy Hero + About + Sponsors Carousel + CTA |
| `/events` | 6 event categories with Day 1/2/3 filter |
| `/roadmap` | 3-Day interactive timeline with schedule |
| `/merch` | Merchandise store with cart + modals |
| `/sponsors` | Full sponsor tiers: Title, Platinum, Gold, Associate |

## Theme Switcher
Click the ☀️ button in the navbar → 6 themes:
Dark Mode · Light Mode · Ocean · Sunset · Forest · Neon
Each theme changes accent colors, backgrounds, borders, cursor glow. Persisted in localStorage.

## Quick Start
```bash
npm install
npm run dev        # → http://localhost:3000
npm run build      # production build
```

## Deploy
```bash
npx vercel --prod
```
