# Black Friday 2025 - Panda Express Restaurant #2475 Readiness Dashboard

A comprehensive web application to demonstrate and manage Panda Express restaurant #2475's readiness for Black Friday 2025. This dashboard provides visual tools for store layout management, associate positioning, shelf organization, pre-Black Friday inventory preparation, and cleaning checklist tracking.

## Overview

This Next.js 14 application serves as a readiness dashboard for Panda Express restaurant #2475, designed to help managers and staff prepare for the Black Friday 2025 shopping event. The application provides:

- **Store Layout Visualization** - Floor plan showing associate positions and assignments
- **Associate Management** - Display team members assigned to specific positions and stations
- **Shelf Organization** - Visual representation of shelf layouts and product organization
- **Pre-Black Friday Checklist** - Track required items and supplies needed before the event
- **Cleaning Checklist** - Monitor cleaning tasks and maintenance requirements
- **Readiness Status** - Monitor overall preparation progress

**Note**: This is a presentation/demonstration dashboard. All data is hardcoded and there is no user interaction - it displays the current state of readiness.

## Features

- 🏪 **Store Layout Display** - Visual floor plan showing associate positions and assignments
- 👥 **Associate Assignment** - Display team members assigned to specific stations and positions
- 📦 **Shelf Organization** - Visualize shelf layouts and product placement
- ✅ **Pre-Event Checklist** - Display required items and supplies to obtain prior to Black Friday
- 🧹 **Cleaning Checklist** - Track cleaning tasks and maintenance requirements
- 📊 **Readiness Dashboard** - Monitor overall preparation status and completion metrics
- 📺 **Presentation Mode** - All data is hardcoded for demonstration purposes (no user interaction)
- 🌓 **Dark/Light Theme Toggle** - Seamless theme switching with system preference detection
- 🎨 **Panda Express Branding** - Custom color scheme featuring Panda Express Red (#D51C1F)
- ⚡ **Modern Stack** - Built with Next.js 14 App Router and React 18
- 🎯 **shadcn/ui Components** - High-quality, accessible UI components
- 📱 **100% Mobile Ready** - Mobile-first design, fully optimized for all mobile devices

## Restaurant Information

- **Restaurant Number**: #2475
- **Event**: Black Friday 2025
- **Purpose**: Readiness demonstration and preparation management

## Application Type

This is a **presentation/demonstration dashboard** that displays the current state of restaurant readiness. 

- ✅ **All data is hardcoded** - No database or API connections
- 📺 **Read-only display** - No user interaction or editing capabilities
- 🎯 **Purpose**: Visual demonstration of restaurant #2475's Black Friday 2025 readiness status

## Mobile-First Design

This application is built with a **mobile-first approach** and is **100% ready for mobile devices**.

### Mobile Optimization Features

- 📱 **Mobile-First CSS** - All styles designed for mobile screens first, then enhanced for larger screens
- 👆 **Touch-Friendly** - All interactive elements sized for touch (minimum 44x44px)
- 📐 **Responsive Layouts** - Flexible grid systems that adapt to any screen size
- 🔄 **Optimized Navigation** - Mobile-friendly navigation patterns (tabs, accordions, collapsible sections)
- 📊 **Readable Typography** - Font sizes and line heights optimized for mobile reading
- 🎨 **Efficient Spacing** - Compact but comfortable spacing for mobile screens
- ⚡ **Performance** - Optimized for fast loading on mobile networks
- 🔍 **Viewport Optimization** - Proper viewport meta tags and responsive images

### Supported Devices

- ✅ **Smartphones** - iPhone, Android phones (all sizes)
- ✅ **Tablets** - iPad, Android tablets
- ✅ **Small Screens** - 320px and up
- ✅ **Landscape & Portrait** - All orientations supported

### Design Principles

1. **Mobile-First CSS** - Base styles target mobile, then use `md:`, `lg:`, `xl:` breakpoints for larger screens
2. **Progressive Enhancement** - Start with mobile experience, enhance for desktop
3. **Touch Targets** - All clickable elements are at least 44x44px
4. **Vertical Scrolling** - Content flows vertically, optimized for thumb scrolling
5. **Single Column Layout** - Primary layout is single column, expanding to multi-column on larger screens

## Color Palette

The project uses a custom color palette with the following key colors:

- **Red** - Primary accent color (Panda Express Red: #D51C1F)
- **Blue** - Secondary accent
- **White** - Light theme background
- **Black** - Dark theme background
- **Grey** - Neutral tones for borders and muted elements

The accent color is defined as HSL: `359 77% 47%` (light mode) and `359 77% 55%` (dark mode).

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd blackfriday
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

5. **Test on Mobile**: 
   - Use browser DevTools device emulation
   - Or access from your mobile device on the same network (use your computer's IP address)
   - Or use a tool like ngrok to expose the local server

## Key Functionality

### Store Layout with Associates (Combined Component)
- **Component**: `StoreLayoutWithAssociates`
- Floor plan visualization of restaurant #2475
- Visual representation of key areas: kitchen, serving line, dining area, storage
- Associate positions displayed directly on the layout
- Station assignments (cashier, food prep, drive-thru, etc.)
- **Mobile-optimized**: Scrollable, zoomable layout for mobile viewing
- **Note**: Store layout and associates are combined into a single component

### Shelf Organization (Separate Component)
- **Component**: `ShelfOrganization`
- Visual shelf layout diagrams
- Product placement mapping
- Inventory organization by category
- Stock level indicators
- **Mobile-optimized**: Horizontal scrolling shelves, touch-friendly navigation
- **Note**: Independent component, separate from other features

### Pre-Black Friday Items Checklist (Separate Component)
- **Component**: `ItemsChecklist`
- Required items and supplies list
- Procurement status tracking (hardcoded)
- Priority levels for items
- Completion progress indicators
- Notes and reminders
- **Mobile-optimized**: Collapsible sections, easy-to-tap checkboxes
- **Note**: Independent component, separate from cleaning checklist

### Cleaning Checklist (Separate Component)
- **Component**: `CleaningChecklist`
- Cleaning tasks and maintenance requirements
- Task categories (front of house, back of house, equipment, etc.)
- Completion status for each task
- Priority levels and assigned areas
- Progress tracking
- **Mobile-optimized**: Accordion-style categories, touch-friendly task items
- **Note**: Independent component, separate from items checklist

## Component Architecture

The application is built with **separate, independent components** for each major feature:

### Main Components

1. **StoreLayoutWithAssociates** (`components/store-layout-with-associates/`)
   - Combined component that displays the store floor plan
   - Shows associate positions and assignments on the layout
   - Single self-contained component handling both layout and associate visualization

2. **CleaningChecklist** (`components/cleaning-checklist/`)
   - Standalone component for cleaning tasks and maintenance
   - Displays cleaning checklist with categories and completion status
   - Independent from other checklist components

3. **ItemsChecklist** (`components/items-checklist/`)
   - Separate component for pre-Black Friday required items
   - Tracks procurement status and supplies needed
   - Independent from cleaning checklist

4. **ShelfOrganization** (`components/shelf-organization/`)
   - Standalone component for shelf layouts and product organization
   - Visual representation of inventory placement
   - Independent component

### Component Principles

- ✅ **Separation of Concerns** - Each component handles one specific feature
- ✅ **Independence** - Components can be developed and maintained separately
- ✅ **Reusability** - Components are self-contained and reusable
- ✅ **Single Responsibility** - Each component has one clear purpose

## Project Structure

```
blackfriday/
├── app/
│   ├── globals.css          # Global styles and theme CSS variables
│   ├── layout.js            # Root layout with ThemeProvider
│   └── page.js              # Main dashboard page (composes all components)
├── components/
│   ├── theme-provider.js    # Theme context provider wrapper
│   ├── theme-toggle.js      # Dark/light theme toggle button
│   ├── store-layout-with-associates/  # Combined store layout + associates component
│   │   └── index.js         # Main component file
│   ├── cleaning-checklist/ # Cleaning checklist component
│   │   └── index.js         # Main component file
│   ├── items-checklist/     # Pre-Black Friday items checklist component
│   │   └── index.js         # Main component file
│   ├── shelf-organization/  # Shelf organization component
│   │   └── index.js         # Main component file
│   └── ui/                  # shadcn/ui components
├── lib/
│   └── utils.js             # Utility functions (cn helper)
├── data/                    # Hardcoded data for all components
│   ├── store-layout-data.js
│   ├── associates-data.js
│   ├── cleaning-checklist-data.js
│   ├── items-checklist-data.js
│   └── shelf-organization-data.js
├── components.json          # shadcn/ui configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── next.config.js           # Next.js configuration
```

## Adding shadcn/ui Components

This project is configured to use shadcn/ui components. To add new components:

```bash
npx shadcn@latest add [component-name]
```

Examples:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

Components will be automatically added to `components/ui/` and configured according to your `components.json` settings.

## Theme System

The project uses CSS variables for theming, defined in `app/globals.css`. The theme system supports:

- **Light Mode** - White background with black text
- **Dark Mode** - Black background with white text
- **System Preference** - Automatically detects user's OS theme preference

The theme toggle button is available in the top-right corner of the application.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technology Stack

- **Framework**: Next.js 14.2.0
- **React**: 18.3.1
- **Styling**: Tailwind CSS 3.4.6
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Theme Management**: next-themes 0.3.0
- **Language**: JavaScript (JSX)

## Configuration

### shadcn/ui

The project is configured for shadcn/ui with:
- Style: `default`
- Base color: `slate`
- CSS variables: enabled
- TypeScript: disabled (using JavaScript)

### Tailwind CSS

Custom theme extensions include:
- CSS variable-based color system
- Custom border radius values
- Chart color palette
- Animation support via `tailwindcss-animate`
- **Mobile-first breakpoints**: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- **Responsive utilities**: All spacing, typography, and layout utilities are mobile-first

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [next-themes Documentation](https://github.com/pacocoursey/next-themes)

## License

This project is private.
