<div id="top"></div>
<br />
<div align="center">
  <a href="https://salla.dev">
    <img src="https://salla.dev/wp-content/uploads/2023/03/1-Light.png" alt="Logo">
  </a>
  <h1 align="center">Beto Theme</h1>
  <p align="center">
    Beto Theme is a tailored storefront experience for Salla merchants who want a polished, customizable presentation layer.
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
        <li><a href="#install">Installation</a></li>
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
        <li><a href="#theme-features">Theme Features</a></li>
        <li><a href="#theme-components">Theme Components</a></li>
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
Beto Theme is the starting point for developers to design Salla storefronts that reflect the uniqueness of each brand. Built on top of Twilight, the Salla themes engine, it provides a flexible foundation for crafting immersive customer journeys on the [Salla Platform](https://salla.sa/site/).

## Getting Started
Use Beto Theme to launch fully customized themes, extend UI components, and wire bespoke interactions with Twilight events and hooks.

<p align="right">(<a href="#top">back to top</a>)</p>

### Prerequisite
- Familiarity with HTML, CSS, JavaScript, and the [Twig Template Engine](https://twig.symfony.com/).
- Partner account at the [Salla Partners Portal](https://salla.partners/) to publish and test your theme.
- A [GitHub](https://github.com) account to host your theme.
- [Salla CLI](https://www.npmjs.com/package/@salla.sa/cli) installed locally.

### Install
Beto Theme ships by default with the Twilight engine. Twilight can be installed in two ways:

- Through the [Salla Partners Portal](https://docs.salla.dev/doc-421877/?nav=01HNFTD5Y5ESFQS3P9MJ0721VM#creating-theme-via-salla-partners-portal)
- Through the [Salla CLI](https://docs.salla.dev/doc-422775/?nav=01HNA8QHCPJTCY5VSEZ616JCAK)

Either approach installs the Twilight engine together with Beto Theme. Refer to the full [installation guide](https://docs.salla.dev/doc-421877/?nav=01HNFTD5Y5ESFQS3P9MJ0721VM) for more detail.

<p align="right">(<a href="#top">back to top</a>)</p>

## Usage
Beto Theme is installed as the default Twilight theme. The sections below outline the directory structure and how to preview the theme while you iterate.

### Directory Structure
The theme files live under the `src/` directory:

```shell
src
├── assets
│   ├── images
│   ├── js
│   └── styles
├── locales
│   ├── ar.json
│   └── en.json
└── views
    ├── components
    ├── layouts
    ├── pages
    ├── partials
    └── product
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
Beto Theme provides a curation of pre-defined and customizable widgets, all configurable via the [`twilight.json`](twilight.json) manifest.

### Theme Features
Key features include:

| Component | Description |
|-----------|-------------|
| Fixed hero banners | Highlight promotions with static or animated hero sections. |
| Product sliders | Showcase curated product collections with smooth transitions. |
| Testimonials | Build trust by highlighting customer stories. |
| Multimedia sections | Embed rich video, gallery, and parallax experiences. |
| Mega menu | Offer multi-level navigation with optional imagery. |

### Theme Components
Reusable Twig components power the storefront. Explore `src/views/components` to discover header, footer, home-page, product, and modal components that can be extended or overridden per project requirements.

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
Beto Theme is maintained by Bakheet and contributors from the Salla developer ecosystem. Twilight is developed and supported by the Salla team.

## License
Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>
