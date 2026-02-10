<picture>
    <source srcset="./.github/logo-dark.png" media="(prefers-color-scheme: light)">
    <source srcset="./.github/logo-white.png" media="(prefers-color-scheme: dark)">
    <img src="./.github/logo-dark.png" alt="IT Tools Logo">
</picture>

# IT Tools

A comprehensive collection of handy online tools for developers, with great UX. [**Visit IT Tools →**](https://it-tools.tech)

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.18.2-brightgreen)](https://nodejs.org/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.3.4-4FC08D?logo=vue.js)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4.0-blue?logo=typescript)](https://www.typescriptlang.org/)

## 🎯 Overview

IT Tools is a modern, Vue.js-based web application that provides a comprehensive suite of developer tools. Built with performance and user experience in mind, it offers 80+ tools covering everything from text conversion and cryptography to network utilities and code formatting.

### ✨ Key Features

- **80+ Developer Tools** - Text processing, cryptography, converters, generators, and more
- **Modern Tech Stack** - Vue 3, TypeScript, Vite, UnoCSS, Naive UI
- **Offline-First** - PWA support with service worker for offline functionality
- **Multi-language** - Internationalization support (i18n)
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **No Registration Required** - All tools work immediately without signup
- **Privacy-First** - All processing happens client-side

## 🛠️ Available Tools

The project includes tools in these categories:

- **Text & String Processing**: Case converter, Lorem ipsum generator, Text statistics, String obfuscator
- **Cryptography & Security**: Hash generators, Encryption tools, JWT parser, Password analyzer, OTP generator
- **Converters**: Base64, JSON/YAML/TOML/XML converters, Number base converter, Date converter
- **Generators**: UUID/ULID, QR codes, Passwords, RSA keys, MAC addresses
- **Network & Web**: IP calculators, URL tools, HTTP status codes, User agent parser
- **Development**: Regex tester, SQL prettifier, Docker converter, Git memo, Crontab generator
- **Math & Calculations**: Percentage calculator, ETA calculator, Benchmark builder

## 🚀 Quick Start

### Prerequisites

- **Node.js** ≥ 18.18.2 (check with `node --version`)
- **pnpm** package manager (recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/0HugoHu/hugowebtools.git
   cd hugowebtools
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

### Development

**Start the development server:**
```bash
pnpm dev
```
The application will be available at `http://localhost:5173`

**Other development commands:**
```bash
# Type checking
pnpm typecheck

# Linting
pnpm lint

# Run unit tests
pnpm test

# Run end-to-end tests
pnpm test:e2e

# Test coverage
pnpm coverage
```

### Production Build

**Build for production:**
```bash
pnpm build
```
The built files will be in the `dist/` directory.

**Preview production build:**
```bash
pnpm preview
```
Available at `http://localhost:5050`

## 🐳 Deployment

### Docker

**Using Docker Hub:**
```bash
docker run -d --name it-tools --restart unless-stopped -p 8080:80 corentinth/it-tools:latest
```

**Using GitHub Container Registry:**
```bash
docker run -d --name it-tools --restart unless-stopped -p 8080:80 ghcr.io/corentinth/it-tools:latest
```

**Build your own image:**
```bash
docker build -t it-tools .
docker run -d --name it-tools --restart unless-stopped -p 8080:80 it-tools
```

### Platform Deployments

The project is configured for multiple deployment platforms:

- **Vercel** - Configured via `vercel.json`
- **Netlify** - Configured via `netlify.toml`
- **Cloudron** - Available in the app store
- **Tipi** - Self-hosted app platform
- **Unraid** - Community applications

### Self-Hosting Solutions

- [Cloudron](https://www.cloudron.io/store/tech.ittools.cloudron.html)
- [Tipi](https://www.runtipi.io/docs/apps-available)
- [Unraid](https://unraid.net/community/apps?q=it-tools)

## 🧪 Testing

The project uses a comprehensive testing setup:

### Unit Tests (Vitest)
```bash
# Run unit tests
pnpm test

# Run with coverage
pnpm coverage

# Watch mode
pnpm test --watch
```

### End-to-End Tests (Playwright)
```bash
# Run E2E tests
pnpm test:e2e

# Run E2E tests in development
pnpm test:e2e:dev
```

Tests run on multiple browsers: Chromium, Firefox, and WebKit.

## 🛠️ Architecture

### Tech Stack

- **Frontend Framework**: Vue 3 with Composition API
- **Language**: TypeScript 5.2
- **Build Tool**: Vite 6.3
- **Styling**: UnoCSS (Atomic CSS)
- **UI Library**: Naive UI
- **State Management**: Pinia
- **Routing**: Vue Router 4
- **Testing**: Vitest + Playwright
- **PWA**: Vite PWA Plugin

### Project Structure

```
src/
├── components/         # Reusable Vue components
├── composable/         # Vue composables
├── layouts/           # Page layouts
├── pages/             # Application pages
├── tools/             # Individual tool implementations
│   ├── [tool-name]/   # Each tool has its own directory
│   │   ├── index.ts   # Tool definition and metadata
│   │   ├── [tool-name].vue  # Tool component
│   │   └── locales/   # Tool-specific translations
│   └── index.ts       # Tools registry
├── stores/            # Pinia stores
├── ui/                # UI components
└── utils/             # Utility functions
```

### Key Configuration Files

- `vite.config.ts` - Vite build configuration
- `unocss.config.ts` - UnoCSS styling configuration  
- `playwright.config.ts` - E2E test configuration
- `tsconfig.*.json` - TypeScript configuration files
- `package.json` - Dependencies and scripts

## 🔧 Development

### Creating a New Tool

Use the built-in generator to create a new tool:

```bash
pnpm run script:create:tool my-tool-name
```

This will:
1. Create a new directory in `src/tools/`
2. Generate the tool boilerplate files
3. Add the import to `src/tools/index.ts`

You'll then need to:
1. Add the tool to the appropriate category
2. Implement the tool functionality
3. Add translations if needed

### Development Environment

#### Recommended IDE Setup

- **VSCode** with extensions:
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) 
  - [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally)

#### VSCode Settings

```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "i18n-ally.localesPaths": ["locales", "src/tools/*/locales"],
  "i18n-ally.keystyle": "nested"
}
```

### TypeScript Support

The project uses `vue-tsc` instead of `tsc` for type checking Vue files. TypeScript is configured with multiple project references:

- `tsconfig.app.json` - Main application code
- `tsconfig.vitest.json` - Test configuration  
- `tsconfig.vite-config.json` - Vite config files

### Code Quality

The project enforces code quality through:

- **ESLint** - Code linting with Vue and TypeScript rules
- **Prettier** - Code formatting
- **TypeScript** - Static type checking
- **Vitest** - Unit testing
- **Playwright** - E2E testing

## 🌐 Internationalization

The project supports multiple languages through Vue I18n:

- Locale files are in `locales/` directory
- Tool-specific translations are in `src/tools/[tool-name]/locales/`
- Uses composition API with `useI18n()`
- Runtime-only compilation for better performance

## 🔒 Security

All tools process data client-side for maximum privacy and security:

- No data is sent to external servers
- Cryptographic operations use well-established libraries
- HTTPS enforced in production
- Content Security Policy implemented
- Dependencies regularly updated via Renovate

## 📊 Analytics

The project includes optional analytics:
- AWS RUM (Real User Monitoring) for performance tracking
- Plausible Analytics for privacy-friendly usage statistics
- All analytics are privacy-focused and GDPR compliant

## 🤝 Contributing

Contributions are welcome! Please see our contributing guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests (`pnpm test`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Feature Requests

Have an idea for a tool? [Submit a feature request](https://github.com/CorentinTh/it-tools/issues/new/choose)!

Check existing [issues](https://github.com/CorentinTh/it-tools/issues) to see what's planned.

## 📄 License

This project is licensed under the [GNU General Public License v3.0](LICENSE) - see the LICENSE file for details.

## 🙏 Sponsors

[![Renderize banner](./.github/sponsor-banner.svg)](https://renderize.tech?utm_source=it-tools&utm_medium=readme)

## 👥 Contributors

Big thanks to all the people who have already contributed!

[![contributors](https://contrib.rocks/image?repo=corentinth/it-tools&refresh=1)](https://github.com/corentinth/it-tools/graphs/contributors)

## 🏆 Recognition

<a href="https://www.producthunt.com/posts/it-tools?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-it&#0045;tools" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=345793&theme=light" alt="IT&#0032;Tools - Collection&#0032;of&#0032;handy&#0032;online&#0032;tools&#0032;for&#0032;devs&#0044;&#0032;with&#0032;great&#0032;UX | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>
<a href="https://www.producthunt.com/posts/it-tools?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-it&#0045;tools" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=345793&theme=light&period=daily" alt="IT&#0032;Tools - Collection&#0032;of&#0032;handy&#0032;online&#0032;tools&#0032;for&#0032;devs&#0044;&#0032;with&#0032;great&#0032;UX | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

## 💝 Credits

Coded with ❤️ by [Corentin Thomasset](https://corentin.tech?utm_source=it-tools&utm_medium=readme).

- Continuously deployed using [Vercel](https://vercel.com)
- Contributor graph generated using [contrib.rocks](https://contrib.rocks)
- Logo and design by the IT Tools community

---

**[🌟 Star this project on GitHub](https://github.com/CorentinTh/it-tools)** if you find it useful!