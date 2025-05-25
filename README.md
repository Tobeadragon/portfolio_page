# Web Developer Portfolio

A multilingual portfolio website built with Nuxt 3 and TypeScript, featuring German, English, and Japanese language support.

## Features

- 🌐 Multilingual support (German, English, Japanese)
- 💅 Modern UI with Tailwind CSS
- 🎨 Responsive design
- 🔄 Dynamic language switching
- 📱 Mobile-friendly
- 🚀 Fast and optimized

## Tech Stack

- Nuxt 3
- TypeScript
- Tailwind CSS
- Vue 3 Composition API

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/portfolio-page.git
cd portfolio-page
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:3000`

### Building for Production

```bash
npm run build
# or
yarn build
```

## Project Structure

```
├── app.vue              # Main app component
├── components/          # Vue components
├── composables/         # Vue composables
├── pages/              # Application pages
│   ├── index.vue       # Home page
│   ├── about.vue       # About page
│   ├── projects.vue    # Projects page
│   └── contact.vue     # Contact page
└── public/             # Static assets
```

## Customization

1. Update the content in `pages/` directory
2. Modify translations in `composables/useLanguage.ts`
3. Customize styles in the component files using Tailwind CSS

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
