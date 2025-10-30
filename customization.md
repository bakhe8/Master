# Beto Theme Customization Guide

This guide provides instructions on how to customize the Beto Theme, from simple configuration changes in the theme editor to advanced code modifications.

## 1. Theme Editor (No-Code)

The easiest way to customize the Beto Theme is through the Salla Theme Editor. Most of the theme's features and components can be configured directly from this interface. These settings are defined in `twilight.json`.

### Key Configurable Areas:
- **Homepage Layout**: Add, remove, and reorder homepage components such as the Hero Slider, Testimonials, Featured Products, and Brand Logos.
- **Colors & Fonts**: Adjust the primary and secondary colors, and select from the available theme fonts.
- **Header & Footer**: Toggle the sticky header, switch between dark/light modes for the top-nav and footer, and manage menu links.
- **Optional Enhancements**: Enable or disable features like the Page Preloader, Dark Mode Toggle, Promo Bar, and Cookie Consent banner.

## 2. Basic Code Customization

For developers who need to go beyond the theme editor, Beto is structured for easy extension.

### Colors & Tailwind CSS
The theme's color palette is defined in `tailwind.config.js`. You can extend or modify this palette to match a specific brand identity.

```javascript
// tailwind.config.js
...
    colors: {
        // Beto Palette
        'primary' : '#11224E',
        'secondary': '#0046FF',
        ...
    },
...
```

Most of the theme's styling is done using Tailwind's utility classes directly in the Twig files. This makes it fast and easy to adjust spacing, colors, and responsive behavior.

### Custom CSS
For custom styles that cannot be achieved with Tailwind, you can add your own CSS to `src/assets/css/theme.css`. This file is the main entry point for all non-utility CSS.

## 3. Advanced Customization

### Twig Partials
The theme is built with a modular structure. All pages, components, and layouts are located in `src/views/`. To modify a specific part of the theme, find the corresponding `.twig` file and edit it.

- **Components**: Reusable parts like the header, footer, and product card are in `src/views/components/`.
- **Pages**: Main page templates like `product.twig` and `category.twig` are in `src/views/pages/`.
- **Layouts**: The master page skeletons are in `src/views/layouts/`.

### JavaScript Modules
All custom JavaScript functionality is modularized and imported into the main `src/assets/js/theme.js` file.

- To add a new feature, create a new JS file (e.g., `src/assets/js/my-feature.js`).
- Write your logic within a class or function.
- Import your new file into `theme.js`:

```javascript
// src/assets/js/theme.js
import './my-feature.js';
...
```

This structure ensures that all scripts are bundled and optimized correctly during the build process.