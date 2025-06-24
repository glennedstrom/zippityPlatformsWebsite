# zippity

A React project created with Vite and Tailwind CSS v4.

## Features

- ⚡ Vite for fast development and building
- ⚛️ React 18 with hooks
- 🎨 Tailwind CSS v4 with automatic content detection
- 🔥 Hot Module Replacement (HMR)
- 📦 Optimized for production builds

## Getting Started

### Development

Start the development server:

```bash
npm run dev
```

### Build

Create a production build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
zippity/
├── src/
│   ├── App.jsx          # Main application component
│   ├── index.css        # Tailwind CSS imports and global styles
│   └── main.jsx         # Application entry point
├── vite.config.js       # Vite configuration with Tailwind plugin
└── package.json         # Project dependencies and scripts
```

## Tailwind CSS v4

This project uses Tailwind CSS v4, which includes:

- Automatic content detection (no need to configure content paths)
- Built-in CSS import system
- Simplified setup (no separate config files required)
- All the utility classes you know and love

## Customization

You can customize your Tailwind setup by creating a `tailwind.config.js` file if needed, but it's optional in v4.

Happy coding! 🚀
