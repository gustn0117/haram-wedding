# HARAM Wedding Event Website Clone

A complete Next.js 14 clone of the HARAM wedding event website (haramevent.kr), featuring luxury wedding services including concierge, photobooth, and professional hosting.

## Features

### 5 Main Pages
- **Home (/)** - Landing page with hero section and service cards
- **Concierge (/concierge)** - Wedding concierge and ceremony assistance services
- **Photobooth (/photobooth)** - Custom photobooth packages and templates
- **Host (/host)** - Professional ceremony host services
- **Contact (/contact)** - Contact form and inquiries

### Design System
- Primary Gold: `#C5A55A`
- Navy Footer: `#1B2340`
- Professional, luxury aesthetic
- Responsive design
- Smooth scroll animations with Framer Motion

### Components
- **Navbar** - Sticky navigation with scroll detection
- **Footer** - Dark navy footer with company information
- **ScrollAnimation** - Reusable Framer Motion wrapper for fade-in-up animations

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Images**: Next.js Image optimization with remote URL support
- **Fonts**: Google Fonts (Noto Sans KR, Montserrat)
- **Language**: TypeScript

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Navigate to http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
haram-clone/
├── app/
│   ├── layout.tsx           # Root layout with navbar & footer
│   ├── globals.css          # Global styles and fonts
│   ├── page.tsx             # Home page
│   ├── concierge/
│   │   └── page.tsx         # Concierge services page
│   ├── photobooth/
│   │   └── page.tsx         # Photobooth services page
│   ├── host/
│   │   └── page.tsx         # Host services page
│   └── contact/
│       └── page.tsx         # Contact form page
├── components/
│   ├── Navbar.tsx           # Navigation component
│   ├── Footer.tsx           # Footer component
│   └── ScrollAnimation.tsx   # Scroll animation wrapper
├── public/                   # Static assets
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies
```

## Key Features

### Responsive Design
All pages are fully responsive and work seamlessly on mobile, tablet, and desktop devices.

### Scroll Animations
Smooth fade-in-up animations on scroll using Framer Motion for enhanced user experience.

### Image Optimization
Uses Next.js Image component with remote image support from framerusercontent.com.

### Korean Content
Complete Korean text and proper font support with Noto Sans KR and Montserrat.

### Form Handling
Contact form with client-side validation and submission handling.

## Customization

### Colors
Edit colors in `tailwind.config.js`:
```js
colors: {
  'haram-gold': '#C5A55A',
  'haram-navy': '#1B2340',
}
```

### Fonts
Google Fonts are imported in `app/globals.css`. You can add more fonts there.

### Content
Edit page content directly in the respective page files in `app/` directory.

## Contact Information

- **Phone**: 010-7930-1332
- **Address**: Suwon, Gyeonggi-do, South Korea
- **Business Hours**: Mon-Fri 10:00 AM - 6:00 PM

## Copyright

Copyright 2025 @ HARAM MANAGEMENT All Rights Reserved

## License

This is a clone project for educational purposes.
