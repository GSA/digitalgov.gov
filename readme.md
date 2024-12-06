# Digital.gov

## Prerequisites

### Install Hugo Extended Version

Hugo extended version is required for SASS/SCSS support. Install version 0.139.2:

```bash
# Install Go if not already installed
# On Ubuntu/Debian:
sudo apt-get install golang-go

# On macOS with Homebrew:
brew install go

# Install Hugo Extended
CGO_ENABLED=1 go install -tags extended github.com/gohugoio/hugo@v0.139.2

# Verify installation
hugo version
# Should show: Hugo Static Site Generator v0.139.2-xxxxx+extended
```

### Install Node.js Dependencies

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

This will:
1. Build USWDS assets and SVG sprites
2. Start Hugo server with live reload

## Build

Build for production:

```bash
npm run build
```

This will:
1. Build USWDS assets and SVG sprites
2. Build Hugo site with minification

## File Upload

Upload files to S3:

```bash
npm run upload
```

## Individual Tasks

- Build USWDS assets only: `npm run build:assets`
- Build SVG sprites only: `npm run build:sprites`

## Asset Pipeline

The site uses Hugo's built-in asset pipeline for:
- SASS/SCSS compilation (requires Hugo Extended)
- JavaScript bundling and minification
- PostCSS processing (autoprefixer, csso)

USWDS assets are handled by dedicated Node.js scripts in the `scripts` directory.
