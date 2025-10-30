# Contributing to NeedsBoxes Theme

First off, thank you for considering contributing to the NeedsBoxes Theme! It's people like you that make the open-source community such an amazing place.

This document provides a set of guidelines for contributing to the theme. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Table of Contents
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Your First Code Contribution](#your-first-code-contribution)
- [Styleguides](#styleguides)
  - [Git Commit Messages](#git-commit-messages)
  - [Twig Styleguide](#twig-styleguide)
  - [JavaScript Styleguide](#javascript-styleguide)
  - [CSS/SCSS Styleguide](#cssscss-styleguide)
- [Pull Request Process](#pull-request-process)

## How Can I Contribute?

### Reporting Bugs
If you find a bug, please ensure the bug was not already reported by searching on GitHub under [Issues](https://github.com/bakhe8/Master/issues). If you're unable to find an open issue addressing the problem, [open a new one](https://github.com/bakhe8/Master/issues/new). Be sure to include a **title and clear description**, as much relevant information as possible, and a **code sample** or an **executable test case** demonstrating the expected behavior that is not occurring.

### Suggesting Enhancements
If you have an idea for an enhancement, please open an issue to discuss it. This allows us to coordinate our efforts and prevent duplication of work.

### Your First Code Contribution
Unsure where to begin contributing? You can start by looking through `good-first-issue` and `help-wanted` issues.

1.  **Fork** the repository.
2.  **Clone** your fork to your local machine.
3.  Create a new **branch** for your changes (`git checkout -b feature/amazing-feature`).
4.  Make your changes, adhering to the styleguides.
5.  **Commit** your changes with a descriptive commit message.
6.  **Push** your branch to your fork on GitHub (`git push origin feature/amazing-feature`).
7.  Open a **Pull Request** to the `main` branch of the original repository.

## Styleguides

### Git Commit Messages
- Use the present tense ("Add feature" not "Added feature").
- Use the imperative mood ("Move file to..." not "Moves file to...").
- Limit the first line to 72 characters or less.
- Reference issues and pull requests liberally after the first line.

### Twig Styleguide
- Follow the official Twig Coding Standards.
- Use 4 spaces for indentation.
- Keep logic in Twig to a minimum. Complex logic should be handled in JavaScript or by Salla's data objects.

### JavaScript Styleguide
- Use modern ES6+ syntax.
- All JavaScript should be modular and imported into `src/assets/js/theme.js`.
- Use classes for organizing component-specific logic.

### CSS/SCSS Styleguide
- Prefer using Tailwind CSS utility classes directly in Twig files.
- For complex or custom styles that cannot be achieved with utilities, add them to a new file in `src/assets/css/components/` and import it into `src/assets/css/theme.css`.

## Pull Request Process
1.  Ensure any install or build dependencies are removed before the end of the layer when doing a build.
2.  Update the `README.md` and other relevant documentation with details of changes to the interface.
3.  Update the version number in `changelog.md` according to the Semantic Versioning guidelines.
4.  Your PR will be reviewed, and you may be asked to make changes before it can be merged.