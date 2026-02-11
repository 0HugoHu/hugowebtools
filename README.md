# HugoTools

A collection of handy online tools for developers. Forked from [IT Tools](https://github.com/CorentinTh/it-tools) by Corentin Thomasset.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.18.2-brightgreen)](https://nodejs.org/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.3.4-4FC08D?logo=vue.js)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4.0-blue?logo=typescript)](https://www.typescriptlang.org/)

## Overview

HugoTools is a Vue.js-based web application providing 80+ developer tools with a focus on privacy (all processing is client-side) and great UX.

### Key Features

- **80+ Developer Tools** - Text processing, cryptography, converters, generators, and more
- **Modern Tech Stack** - Vue 3, TypeScript, Vite, UnoCSS, Naive UI
- **Offline-First** - PWA support with service worker
- **Privacy-First** - All processing happens client-side, no data uploads
- **Responsive Design** - Desktop, tablet, and mobile
- **Dark/Light Mode** - Full theme support

## Quick Start

### Prerequisites

- **Node.js** >= 18.18.2
- **pnpm** package manager

### Installation

```bash
git clone https://github.com/0HugoHu/hugowebtools.git
cd hugowebtools
pnpm install
```

### Development

```bash
pnpm dev
```

Available at `http://localhost:5173`

### Production Build

```bash
pnpm build
pnpm preview  # Preview at http://localhost:5050
```

## Docker

**Build and run:**
```bash
docker build -t hugowebtools .
docker run -d --name hugowebtools --restart unless-stopped -p 8080:80 hugowebtools
```

## Tech Stack

- **Framework**: Vue 3 (Composition API)
- **Language**: TypeScript 5.4
- **Build**: Vite 6.3
- **Styling**: UnoCSS
- **UI Library**: Naive UI
- **State**: Pinia
- **Testing**: Vitest + Playwright

## Project Structure

```
src/
├── components/    # Reusable Vue components
├── composable/    # Vue composables
├── layouts/       # Page layouts
├── pages/         # Application pages
├── tools/         # Individual tool implementations
├── stores/        # Pinia stores
├── ui/            # Custom UI component library
└── utils/         # Utility functions
```

## License

[GNU General Public License v3.0](LICENSE)

## Credits

Originally created by [Corentin Thomasset](https://corentin.tech). Now maintained by [Hugo Hu](https://github.com/0HugoHu).
