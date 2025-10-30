<div id="top"></div>
<br />
<div align="center">
  <a href="https://needsboxes.com">
    <img src="https://salla.dev/wp-content/uploads/2023/03/1-Light.png" alt="Logo">
  </a>
  <h1 align="center">NeedsBoxes Theme</h1>
  <p align="center">
    A tailored storefront experience for NEEDSBOXES.COM, built on the Salla platform.
    <br />
    <a href="https://salla.dev/"><strong>Explore our blogs »</strong></a>
    <br />
    <a href="https://github.com/bakhe8/Master/issues/new">Report Bug</a> ·
    <a href="https://github.com/bakhe8/Master/discussions/new">Request Feature</a> · <a href="https://t.me/salladev">&lt;/Salla Developers&gt;</a> · <a href="https://docs.salla.dev/?nav=01HNFTD5Y5ESFQS3P9MJ0721VM">Official Documentation</a>
  </p>
</div>

<details open>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#overview">Overview</a></li>
    <li><a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisite">Prerequisite</a></li>
        <li><a href="#install">Install</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a>
      <ul>
        <li><a href="#directory-structure">Directory Structure</a></li>
        <li><a href="#theme-preview">Theme Preview</a></li>
      </ul>
    </li>
    <li><a href="#main-features">Main Features</a>
      <ul>
        <li><a href="#core-components--pages">Core Components & Pages</a></li>
        <li><a href="#dynamic-homepage">Dynamic Homepage</a></li>
        <li><a href="#optional-ux-enhancements">Optional UX Enhancements</a></li>
      </ul>
    </li>
    <li><a href="#support">Support</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#credits">Credits</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<br>

## Overview
This theme is the official storefront for NEEDSBOXES.COM. Built on top of Twilight, the Salla themes engine, it provides a flexible and immersive customer journey on the [Salla Platform](https://salla.sa/site/).

## Getting Started
This theme is built to be developed and customized using the Salla CLI. It includes custom UI components and interactions wired with Twilight events and hooks.

<p align="right">(<a href="#top">back to top</a>)</p>

### Prerequisite
- Familiarity with HTML, CSS, JavaScript, and the [Twig Template Engine](https://twig.symfony.com/).
- Partner account at the [Salla Partners Portal](https://salla.partners/) to publish and test your theme.
- A [GitHub](https://github.com) account to host your theme.
- [Salla CLI](https://www.npmjs.com/package/@salla.sa/cli) installed locally.

### Install
The theme is built upon the Twilight engine. Twilight can be installed in two ways:

- Through the [Salla Partners Portal](https://docs.salla.dev/doc-421877/?nav=01HNFTD5Y5ESFQS3P9MJ0721VM#creating-theme-via-salla-partners-portal)
- Through the [Salla CLI](https://docs.salla.dev/doc-422775/?nav=01HNA8QHCPJTCY5VSEZ616JCAK)

Refer to the full [installation guide](https://docs.salla.dev/doc-421877/?nav=01HNFTD5Y5ESFQS3P9MJ0721VM) for more detail on creating and installing themes.

<p align="right">(<a href="#top">back to top</a>)</p>

## Usage
The sections below outline the directory structure and how to preview the theme while you iterate.

### Directory Structure
The theme files live under the `src/` directory:

```shell
src
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
├── locales
│   ├── ar.json
│   └── en.json
└── views/
    ├── components/
    ├── layouts/
    └── pages/
```

### Theme Preview
With [Salla CLI](https://github.com/SallaApp/Salla-CLI) you can preview Beto Theme while developing. Run the following from the theme root:

```shell title="Terminal"
salla theme preview

# Alias command
salla theme p
```

You can also trigger previews from the Partners Portal by selecting a demo store and installing the theme there.

<p align="right">(<a href="#top">back to top</a>)</p>

## Main Features
Beto Theme comes packed with a rich set of features and components, all configurable via the `twilight.json` manifest to provide a highly customizable storefront experience.

### Core Components & Pages
- **Full E-commerce Flow**: Includes all essential pages: Product, Category, Cart, Checkout, and a full Customer Account dashboard.
- **Blog Integration**: Features a blog index (`blog.twig`) and single post pages (`post.twig`) to engage with customers.
- **Responsive Layouts**: A robust `master.twig` layout with `blank.twig` and `checkout.twig` variations for focused user experiences.
- **Modular Components**: Reusable components like `header.twig`, `footer.twig`, `mobile-nav.twig`, and `product-grid.twig` for consistency and maintainability.

### Dynamic Homepage
Build a unique homepage by adding, removing, and reordering a variety of components directly from the theme editor:
- **Enhanced Hero Slider**: A full-width, modern image slider.
- **Featured Blog Posts**: Showcase your latest articles.
- **Custom Testimonials**: A carousel for customer reviews.
- **Brand Logos**: A carousel to display partner or manufacturer logos.
- **Store Features**: Highlight key benefits like shipping, support, and payment options.

### Optional UX Enhancements
The theme includes several user experience improvements that can be toggled on or off:
- **Page Preloader**: A loading indicator for a smooth page transition.
- **Dark Mode Toggle**: A user-controlled switch for light and dark themes.
- **Promo Bar**: A dismissible announcement bar at the top of the site.
- **Cookie Consent Banner**: A GDPR-compliant banner for cookie consent.
- **Scroll-to-Top Button**: A convenient button for easy navigation on long pages.

<p align="right">(<a href="#top">back to top</a>)</p>

## Support
Need help? Open an [issue](https://github.com/bakhe8/Master/issues/new) or join the [Salla Developers community](https://t.me/salladev) for quick assistance.

## Contributing
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

<p align="right">(<a href="#top">back to top</a>)</p>

## Credits
Beto Theme is maintained by Bakheet A. Al-Zahrani and contributors from the Salla developer ecosystem. Twilight is developed and supported by the Salla team.

## License
Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>
