# Vite Module Federation Monorepo with TypeScript

This monorepo demonstrates a microfrontend architecture using Vite, Module Federation, and TypeScript. It includes hot module replacement (HMR) for a smooth development experience.

## Structure

```
my-monorepo/
├── apps/
│   ├── host/           # Host application that consumes remote components
│   └── remote/         # Remote application that exposes components
└── packages/
    └── ui-library/     # Shared UI components library
```

## Requirements

- Node.js 16+ 
- pnpm 8+

## Setup

1. Install dependencies:

```bash
pnpm install
```

2. Build the shared UI library:

```bash
pnpm build --filter=ui-library
```

3. Start development servers:

```bash
pnpm dev
```

This will start:
- Host app: http://localhost:5000
- Remote app: http://localhost:5001

## Features

- ⚡ **Fast Development**: Vite provides near-instant HMR during development
- 🧩 **Module Federation**: Components can be dynamically loaded from other applications
- 📦 **Shared Dependencies**: React and ReactDOM are shared to avoid duplication
- 🔄 **Hot Reloading**: Changes in any app or shared library update in real-time
- 📘 **TypeScript Support**: Full type checking across the monorepo

## Commands

- `pnpm dev`: Start all applications in development mode
- `pnpm build`: Build all applications and packages
- `pnpm serve`: Preview the built applications
- `pnpm type-check`: Run TypeScript type checking across the monorepo
- `pnpm lint`: Run ESLint checks across the monorepo

## How It Works

1. The host application is configured to consume the Button component from the remote app
2. Both apps share a common UI library that provides the Card component
3. Module Federation enables the host to load the remote component at runtime
4. Hot Module Replacement allows for real-time updates during development

## Extending

- To add more remote components, update the `exposes` object in the remote app's vite.config.ts
- To add more shared dependencies, update the `shared` array in both vite.config.ts files
- To add new packages, create a new directory in the packages folder and update the pnpm-workspace.yaml

## Troubleshooting

- If you encounter type-checking errors with remote components, ensure the type definitions in the host's `vite-env.d.ts` file are correct
- If hot-reloading isn't working, ensure that the `server.hmr` is enabled in the vite.config.ts files