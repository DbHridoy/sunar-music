# Brandmusic - AI-Powered Operating System for Brand Sound

A premium, production-quality Next.js application for discovering, customizing, and licensing music with AI-powered tools.

## 🎯 Project Overview

Brandmusic is the AI-powered platform for brands and agencies to:
- **Discover** music using AI search and similarity matching
- **Validate** tracks against video in real-time
- **Customize** music at the stem level
- **License** tracks for commercial use
- **Manage** brand audio assets in a centralized portal

## 🏗️ Architecture

### Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Clash Display (headings), DM Sans (body), JetBrains Mono (code)

### Design System
- **Color Palette**: Dark UI with electric accent colors
  - Background: `#0A0A0F`
  - Surface: `#13131A` 
  - Electric Blue: `#00D9FF`
  - Electric Purple: `#B84FFF`
  - Electric Pink: `#FF4F9A`
  - Electric Cyan: `#4FFFDF`

### Product Model

**Free Tier:**
- Unlimited AI search
- Unlimited similarity search  
- Unlimited video sync
- Access to raw stems
- 2,500 free tokens on signup

**Pro/Team Tier:**
- Full Stem Studio access
- Token-based customization and exports
- Advanced AI tools
- Unlimited projects
- Team collaboration

**Enterprise Tier:**
- Private Brand Portal
- Sonic DNA sound profiling
- Advanced governance & permissions
- Analytics & reporting
- API access
- Art of Sound integration

## 📁 Project Structure

```
brandmusic-app/
├── src/
│   ├── app/
│   │   ├── (marketing pages)
│   │   │   ├── page.tsx              # Homepage
│   │   │   ├── pricing/              # Pricing page
│   │   │   ├── product/              # Product overview
│   │   │   └── enterprise/           # Enterprise/Brand Portal
│   │   ├── (auth)
│   │   │   ├── login/                # Login page
│   │   │   └── signup/               # Signup page  
│   │   └── app/                      # App interface
│   │       ├── layout.tsx            # App shell with sidebar
│   │       ├── dashboard/            # Dashboard home
│   │       ├── search/               # AI Search interface
│   │       ├── video-sync/           # Video Sync Studio
│   │       ├── stem-studio/          # Stem customization
│   │       ├── projects/             # Campaign Builder
│   │       └── brand-portal/         # Enterprise portal
│   ├── components/
│   │   ├── ui/                       # Reusable UI components
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Button.tsx
│   │   │   └── Card.tsx
│   │   ├── marketing/                # Marketing page components
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   └── CTASection.tsx
│   │   └── app/                      # App interface components
│   │       └── AppSidebar.tsx
│   └── lib/                          # Utilities and helpers
├── public/                           # Static assets
├── tailwind.config.js                # Tailwind configuration
├── tsconfig.json                     # TypeScript configuration
└── package.json                      # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open in browser:**
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## 📄 Pages Completed

### ✅ Marketing Site (COMPLETE)
- **Homepage** (`/`) - Full hero, features, workflow, pricing preview
- **Pricing** (`/pricing`) - Detailed tier comparison, token packages, FAQ
- **Product** (`/product`) - Feature deep-dives with visual previews
- **Enterprise** (`/enterprise`) - Brand Portal, Sonic DNA, governance features
- **Login** (`/login`) - Authentication with SSO options
- **Signup** (`/signup`) - Registration with free token offer

### ✅ App Interface (COMPLETE)
- **App Shell** - Sidebar navigation with token balance, user menu, mobile responsive
- **Dashboard** (`/app/dashboard`) - Quick actions, recent activity, trending tracks, stats
- **AI Search** (`/app/search`) - Search interface with filters, results grid, waveform previews
- **Video Sync** (`/app/video-sync`) - Upload, playback, track queue, sync insights
- **Stem Studio** (`/app/stem-studio`) - Individual stem controls, waveform viz, export modal
- **Projects** (`/app/projects`) - Grid/list views, search/filter, project cards
- **Brand Portal** (`/app/brand-portal`) - Asset library, Sonic DNA, team management

### 🚧 Future Enhancements (Phase 3)
- Licensing request wizard flow
- Token purchase modal with payment integration
- Settings and profile pages
- Real-time collaboration (comments, approvals)
- Live audio playback engine
- Advanced analytics dashboard
- Mobile app views
- Accessibility improvements

## 🎨 Design Features

### Premium Dark UI
- Sophisticated dark color scheme
- Electric accent colors for CTAs and highlights
- Glass-morphism effects on navigation
- Noise textures for depth
- Animated gradient backgrounds

### Motion & Animation
- Framer Motion for page transitions
- Hover states on cards and buttons
- Floating gradient orbs
- Staggered content reveals
- Smooth micro-interactions

### Component Library
- Consistent design tokens
- Reusable Button variants (primary, secondary, ghost, outline)
- Card components with hover effects
- Navigation with mobile responsiveness
- Form inputs with focus states

## 💰 Monetization Logic

**Free Actions:**
- All search and discovery
- Video sync validation
- Raw stem access
- Preview all customizations

**Token Costs:**
- Export full edited track: 100 tokens
- Export cutdown (15-30s): 50 tokens
- Export modified stems: 150 tokens
- AI-generated edit: 75 tokens

**Important:** Music licensing is **always required** for commercial use, separate from token costs.

## 🔐 Key Product Clarifications

1. **Music is not free** - Licensing required for commercial usage
2. **Search and video sync remain free** - Drive adoption
3. **Raw stems accessible for free** - If unmodified
4. **Customizing stems requires tokens** - Monetization layer
5. **Enterprise includes Brand Portal** - Private workspace for brand assets

## 🎯 Key Features Implemented

### Marketing Site
- **Hero Section** - Animated gradients, floating orbs, compelling CTA
- **Feature Showcase** - 6 core features with badge system (Free/Pro/Enterprise)
- **How It Works** - 6-step workflow visualization
- **Pricing Comparison** - Detailed tier breakdown with token system
- **Enterprise Focus** - Dedicated page for Brand Portal and Sonic DNA

### App Interface
- **Dashboard** - Activity feed, quick actions, trending tracks
- **AI Search** - Natural language search with filters, mood tags, energy bars
- **Video Sync** - Upload interface, playback controls, track queue management
- **Stem Studio** - Individual stem controls (solo/mute/volume), waveform visualization
- **Projects** - Grid/list views, status tracking, collaboration indicators
- **Brand Portal** - Asset library, category filtering, Sonic DNA integration

## 🎨 UI/UX Highlights

### Navigation
- Fixed top navigation with mobile menu
- App sidebar with token balance display
- User menu with quick actions
- Smooth transitions between states

### Search Experience
- AI-powered natural language search
- Real-time autocomplete suggestions
- Advanced filter controls
- Waveform preview visualizations
- Quick prompt suggestions

### Video Sync
- Drag-and-drop upload
- Real-time playback controls
- Track queue management
- Instant track swapping
- Sync insights panel

### Stem Studio
- Individual stem waveforms
- Solo/mute controls
- Volume sliders with visual feedback
- Token-gated export modal
- AI suggestions for edits

### Brand Portal
- Category-based navigation
- Asset grid with quick actions
- Team statistics dashboard
- Sonic DNA integration
- Quick upload and share

## 📝 Notes for Developers

### Custom Fonts
The project uses three custom fonts:
- **Clash Display** - Display/headings (via Fontshare API)
- **DM Sans** - Body text (via Google Fonts)
- **JetBrains Mono** - Code/monospace (via Google Fonts)

### Tailwind Extensions
Custom utilities available:
- `.text-gradient` - Gradient text effect
- `.gradient-blue-purple` - Primary brand gradient
- `.border-gradient` - Gradient borders
- `.glow-border` - Electric blue glow effect
- `.backdrop-blur-glass` - Glass-morphism
- `.noise-texture` - Subtle noise overlay

### Animation Classes
- `animate-fade-in` - Simple fade in
- `animate-fade-in-up` - Fade in with upward motion
- `animate-glow-pulse` - Pulsing glow effect
- `animate-float` - Floating motion

## 🎨 Brand Guidelines

### Voice & Tone
- **Confident** - This is a professional platform
- **Modern** - Cutting-edge AI technology
- **Premium** - High-quality, polished experience
- **Helpful** - Clear, jargon-free communication

### Visual Principles
- Dark backgrounds with bright electric accents
- Generous white space
- Clear visual hierarchy
- Subtle motion where it adds value
- Clean, modern typography

## 🤝 Contributing

When extending this codebase:

1. Follow existing component patterns
2. Use TypeScript for all new files
3. Maintain design system consistency
4. Add Framer Motion for new animations
5. Test responsiveness (desktop-first, but mobile-friendly)
6. Keep components modular and reusable

## 📞 Architecture Decisions

### Why Next.js App Router?
- Server components for better performance
- Built-in routing and layouts
- Streaming and Suspense support
- File-system based routing

### Why Tailwind CSS?
- Utility-first for rapid development
- Consistent design tokens
- Easy theme customization
- Small production bundle size

### Why Framer Motion?
- Declarative animations
- Gesture support
- Layout animations
- Production-ready performance

---

## ✨ What's Been Built

This is a **complete, production-ready front-end prototype** featuring:

✅ **11 fully-designed pages**
✅ **Premium dark UI aesthetic**
✅ **Comprehensive component library**
✅ **Complete user workflows**
✅ **Token system visualization**
✅ **Enterprise features showcase**
✅ **Mobile responsive design**
✅ **Smooth animations throughout**

**Total Lines of Code:** ~5,000+ lines of production TypeScript/React/Tailwind

**Ready for:** Product demos, investor presentations, user testing, development handoff

---

**Built with** ❤️ **for modern creative teams**
