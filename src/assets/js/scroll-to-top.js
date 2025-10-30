/**
 * ScrollToTop Class
 *
 * Manages the "scroll to top" button. It shows the button when the user
 * scrolls down the page and handles the smooth scroll animation on click.
 */
class ScrollToTop {
    constructor() {
        this.button = document.querySelector('#scroll-to-top-btn');
        this.scrollThreshold = 300; // Show button after 300px of scrolling
        this.init();
    }

    init() {
        if (!this.button) {
            return;
        }

        window.addEventListener('scroll', () => this.toggleVisibility(), { passive: true });
        this.button.addEventListener('click', () => this.scrollToTop());
    }

    toggleVisibility() {
        if (window.scrollY > this.scrollThreshold) {
            this.button.classList.add('opacity-100', 'translate-y-0');
            this.button.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
        } else {
            this.button.classList.remove('opacity-100', 'translate-y-0');
            this.button.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

document.addEventListener('DOMContentLoaded', () => new ScrollToTop());