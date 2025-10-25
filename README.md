# Marketplace App

A modern React application built with TypeScript, Vite, TailwindCSS, and shadcn/ui components.

## Features

- ✅ **MarketplaceFeatures Component** - Custom dark-themed marketplace section
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile
- ✅ **Google Fonts** - Albert Sans and Hind typography
- ✅ **Modern UI** - Built with shadcn/ui component library
- ✅ **Type Safety** - Full TypeScript support
- ✅ **Fast Development** - Vite for instant HMR

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone/download this project
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run typecheck` - Run TypeScript checks
- `npm test` - Run tests
- `npm run format.fix` - Format code with Prettier

## Tech Stack

- **React 18** - UI Library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful component library
- **React Router** - Client-side routing
- **TanStack Query** - Server state management
- **Lucide React** - Icon library

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── ui/           # shadcn/ui components
│   │   └── MarketplaceFeatures.tsx  # Custom component
│   ├── pages/
│   │   ├── Index.tsx     # Home page
│   │   └── NotFound.tsx  # 404 page
│   ├── lib/
│   │   └── utils.ts      # Utility functions
│   └── hooks/            # Custom React hooks
├── public/               # Static assets
└── ...config files
```

## Customization

The MarketplaceFeatures component can be found in `src/components/MarketplaceFeatures.tsx`. You can:

- Modify the feature content and icons
- Adjust the color scheme
- Add more sections
- Update the responsive breakpoints

## License

MIT License - feel free to use this project as a starting point for your own applications!
