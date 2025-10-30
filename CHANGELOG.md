# Beto Theme Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-02-16

### Added
- **Initial Release of Beto Theme.**
- **Core Layouts**: `master.twig`, `checkout.twig`, and `blank.twig`.
- **Core Pages**: Full e-commerce flow including `index`, `product`, `category`, `cart`, `checkout`, `account`, and `search`.
- **Blog Functionality**: Added `blog.twig` (index) and `post.twig` (single) pages.
- **Core Components**:
  - `header.twig`: Sticky header with top-nav, search, and cart summary.
  - `footer.twig`: Multi-column footer with newsletter and social links.
  - `mobile-nav.twig`: Drawer-based navigation for mobile devices.
  - `product-grid.twig`: Reusable product card for listings.
- **Homepage Components**:
  - `enhanced-slider.twig`: Dynamic hero slider.
  - `custom-testimonials.twig`: Customer testimonials carousel.
  - `brands.twig`: Partner brand logos carousel.
  - `featured-blog.twig`: Section for recent blog posts.
  - `store-features.twig`: Highlights key store benefits.
- **Optional Enhancements (Configurable)**:
  - `loader.twig`: Page preloader.
  - `dark-mode-toggle.twig`: Dark/light mode switcher.
  - `promo-bar.twig`: Announcement bar.
  - `cookie-consent.twig`: GDPR compliance banner.
  - `scroll-to-top.twig`: Smooth scroll-to-top button.
- **Configuration**: Full set of theme options added to `twilight.json`.
- **Localization**: Full `ar` and `en` translations for all components and pages.
- **Documentation**: Added `README.md`, `customization.md`, and `changelog.md`.

### Changed
- **Rebranding**: Fully updated all styles, colors, fonts, and spacing from the original "Raed" theme to match the "Beto" brand identity.
- **Asset Optimization**: Refactored all CSS and JS into a modular, bundler-ready structure with `theme.css` and `theme.js` as main entry points.