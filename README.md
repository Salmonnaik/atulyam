# 🌸 ATULYAM – Haru no Stars 2026

A dynamic and immersive web experience for ATULYAM 2026, the cultural festival celebrating Japanese culture at NIT Arunachal Pradesh. Built with Next.js, TypeScript, and Tailwind CSS.

**Event Dates:** 9-11 April 2026

## Features

- 🎨 Dynamic theme system with 6 color schemes
- 📱 Fully responsive design (mobile, tablet, desktop)
- ✨ Smooth animations with Framer Motion
- 🖱️ Custom cursor with theme-aware styling
- 🎭 Interactive event categories and schedule
- 👥 Complete team directory with photos

## Pages

| Route                 | Description                                                 |
| --------------------- | ----------------------------------------------------------- |
| `/`                   | Landing – Galaxy Hero + About + Sponsors Carousel + CTA     |
| `/events`             | Unified event poster gallery with direct registration links |
| `/roadmap`            | 3-Day interactive timeline with schedule                    |
| `/merch`              | Merchandise store with cart + modals                        |
| `/sponsors`           | Full sponsor tiers: Title, Platinum, Gold, Associate        |
| `/gallery`            | Festival moments gallery                                    |
| `/hall-of-attraction` | Featured artists showcase                                   |
| `/team`               | Faculty + student committee directory                       |

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

## Team Committee

The ATULYAM 2026 organizing committee consists of:

- **Chairman:** Dr. Koji Sambyo
- **Faculty Committee:** Dance Club, Theatre Club, Media & Photography, Art Club, Literary Club
- **Head Coordinator:** Rahul Mengnia
- **Student Team Leads:** Web, Events, Sponsorship, PR, Media & Graphics, Design, Volunteer, Management

Full team directory available at [/team](/team)

## Deploy

```bash
npx vercel --prod
```

## Docker

Run the app in Docker with one command:

```bash
docker compose up -d --build
```

Open: `http://localhost:3000`

Useful commands:

```bash
docker compose logs -f
docker compose down
```

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Custom CSS
- **Animation:** Framer Motion
- **Components:** React (Client & Server Components)
- **Deployment:** Vercel

## Project Structure

```
atulyam/
├── app/
│   ├── components/        # Reusable UI components
│   ├── context/          # React contexts (Theme, Loading)
│   ├── events/           # Events page & components
│   ├── team/             # Team page
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── public/
│   ├── factuly/          # Faculty photos
│   ├── team/             # Team member photos
│   └── images/           # Other assets
└── types/                # TypeScript definitions
```

## Contributing

This is the official ATULYAM 2026 website. For contributions or bugs:

1. Create an issue on GitHub
2. Submit a PR with detailed description
3. Ensure code follows project conventions

## Contact

- **Festival Coordinator:** Rahul Mengnia
- **Web Development Lead:** Banoth Charan
- **Event:** ATULYAM 2026 | NIT Arunachal Pradesh

---

Built with 💜 for **ATULYAM 2026** | © NIT Arunachal Pradesh
