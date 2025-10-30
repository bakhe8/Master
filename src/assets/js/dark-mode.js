/**
 * DarkMode Class
 *
 * Handles toggling the dark theme based on user preference or system settings.
 * It adds/removes the 'dark' class to the <html> element and persists the
 * choice in localStorage. The icon switching is handled by Tailwind's `dark:` variants.
 */
class DarkMode {
    constructor() {
        // Select all toggles, as it might appear in both header and mobile nav
        this.toggles = document.querySelectorAll('#dark-mode-toggle');
        this.html = document.documentElement;
        this.init();
    }

    init() {
        if (this.toggles.length === 0) {
            return;
        }

        // 1. Set initial theme on page load
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            this.html.classList.add('dark');
        } else {
            this.html.classList.remove('dark');
        }

        // 2. Add click listener to all toggle buttons
        this.toggles.forEach(toggle => toggle.addEventListener('click', () => this.toggleTheme()));
    }

    toggleTheme() {
        this.html.classList.toggle('dark');
        localStorage.theme = this.html.classList.contains('dark') ? 'dark' : 'light';
    }
}

document.addEventListener('DOMContentLoaded', () => new DarkMode());