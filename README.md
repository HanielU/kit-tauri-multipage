# SvelteKit + Tauri Multi-page Demo

This project demonstrates how to create a multi-page desktop application using SvelteKit and Tauri.

## Features

- Multi-page routing with SvelteKit
- Desktop application with Tauri
- Responsive design with UnoCSS
- TypeScript support

## Pages

- **Home**: Welcome page with app information
- **About**: Information about the app and technologies used
- **Contact**: Contact form demonstration

## Development

### Prerequisites

- Node.js (v18+)
- Rust (latest stable)
- pnpm

### Setup

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

### Running in Development Mode

```bash
# Run the SvelteKit app in development mode
pnpm dev

# Run the Tauri app in development mode
pnpm tauri dev
```

### Building for Production

```bash
pnpm tauri build
```

This will create platform-specific binaries in the `src-tauri/target/release` directory.

## How It Works

SvelteKit provides the routing capabilities through its file-based routing system. Each page is represented by a `+page.svelte` file in the routes directory. The navigation between pages is handled by SvelteKit's client-side router.

Tauri wraps the SvelteKit application into a native desktop application, providing access to native APIs and features.

## License

MIT
