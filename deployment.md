# NeedsBoxes Theme Deployment Guide

This document provides a step-by-step guide for deploying the NeedsBoxes Theme to the Salla Marketplace. Following these steps ensures that the theme is production-ready and meets Salla's quality standards.

## Step 1: Pre-Deployment Checklist

Before submitting the theme, perform a final audit to ensure everything is in order.

### ✅ Code & Functionality
- **No Errors**: Open the browser's developer console and ensure there are no JavaScript errors on any page.
- **Feature Complete**: All features listed in the `README.md` and `changelog.md` are implemented and working correctly.
- **Responsiveness**: Test the theme thoroughly on various screen sizes (mobile, tablet, desktop) to confirm all elements are displayed correctly.
- **Cross-Browser Compatibility**: Test the theme on major browsers (Chrome, Firefox, Safari).

### ✅ Branding & Assets
- **Branding**: Double-check that all references to the old "Raed" theme have been replaced with "NeedsBoxes".
- **Asset Optimization**: Ensure that all CSS and JavaScript files are optimized and bundled into `theme.css` and `theme.js`. Unused assets from the original "Raed" theme should be removed.
- **Images**: All placeholder images have been replaced with NeedsBoxes' official assets.

### ✅ Configuration & Content
- **`twilight.json`**: Validate that the `twilight.json` file is well-formed and all theme settings, options, and homepage components are correctly defined.
- **Localization**: Confirm that `src/locales/ar.json` and `src/locales/en.json` are complete and contain all necessary translation strings for the theme's interface.
- **Accessibility (WCAG)**: Perform a final check for accessibility best practices, including sufficient color contrast, proper use of `alt` attributes for images, and keyboard navigation.

### ✅ Documentation & Meta
- **`README.md`**: The README is up-to-date with the latest features and instructions.
- **`changelog.md`**: The changelog is updated with the correct version number and release date.
- **`preview.png`**: A high-quality preview image (1280x960px) exists in the root directory and accurately represents the theme's homepage. This is a crucial file for the Salla marketplace.

## Step 2: Versioning with Git

Once the pre-deployment checklist is complete, you must commit your final changes and create a version tag. This tag is what you will select when submitting to the Salla Partners Portal.

1.  **Stage and Commit Your Changes:**
    ```bash
    git add .
    git commit -m "Finalize: Prepare for v1.0.0 release"
    ```

2.  **Create an Annotated Git Tag:**
    It's crucial to use an annotated tag (`-a`) as it includes metadata like the tagger, email, and date.
    ```bash
    git tag -a v1.0.0 -m "Release v1.0.0"
    ```

3.  **Push Commits and Tags to GitHub:**
    ```bash
    git push origin <your-branch-name>
    git push origin v1.0.0
    ```

## Step 3: Submitting to Salla Partners Portal

With your code pushed and tagged on GitHub, you are ready to submit the theme.

1.  Log in to the Salla Partners Portal.
2.  Navigate to the **Themes** section from the sidebar.
3.  Either create a new theme or select the existing NeedsBoxes Theme to update it.
4.  Ensure the theme is connected to the correct GitHub repository (`bakhe8/Master`).
5.  From the "Versions" or "Releases" tab, create a new version and select the tag you just pushed (e.g., `v1.0.0`).
6.  Fill in all required information, such as the theme's price, description, and support URL.
7.  Submit the theme for review.

The Salla team will then review your theme. If any issues are found, they will provide feedback for you to address. Once approved, the NeedsBoxes Theme will be published on the Salla Theme Marketplace.