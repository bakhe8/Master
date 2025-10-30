/**
 * PageLoader Class
 *
 * Manages the preloader animation that shows while the page is loading.
 * It fades out and removes the loader once the window's 'load' event fires,
 * which signifies that all page resources are ready.
 */
class PageLoader {
    constructor() {
        this.loader = document.querySelector('#page-loader');
        this.init();
    }

    init() {
        if (!this.loader) {
            return;
        }

        window.addEventListener('load', () => this.hide());
    }

    hide() {
        // Start the fade-out transition by adding the opacity-0 class.
        this.loader.classList.add('opacity-0');

        // After the 500ms transition ends, add the 'hidden' class to set
        // display:none and remove the element from the accessibility tree.
        setTimeout(() => {
            this.loader.classList.add('hidden');
        }, 500); // This duration should match the transition duration in the Twig file.
    }
}

document.addEventListener('DOMContentLoaded', () => new PageLoader());