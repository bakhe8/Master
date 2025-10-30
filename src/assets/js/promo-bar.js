/**
 * PromoBar Class
 *
 * Manages the dismissible promotion bar at the top of the site.
 * It uses sessionStorage to remember if the bar was closed, so it
 * stays hidden during the user's current browsing session.
 */
class PromoBar {
    constructor() {
        this.bar = document.querySelector('#promo-bar');
        this.storageKey = 'promoBarClosed';
        if (this.bar) {
            // Correctly select the button by its class name from the Twig component
            this.closeButton = this.bar.querySelector('.js-close-promo-bar');
        }
        this.init();
    }

    init() {
        // Don't run if the bar or its close button don't exist
        if (!this.bar || !this.closeButton) {
            return;
        }

        // If the bar was already closed in this session, hide it immediately
        if (sessionStorage.getItem(this.storageKey) === 'true') {
            this.bar.classList.add('hidden');
            return;
        }

        this.closeButton.addEventListener('click', () => this.close());
    }

    close() {
        this.bar.classList.add('hidden');
        sessionStorage.setItem(this.storageKey, 'true');
    }
}

document.addEventListener('DOMContentLoaded', () => new PromoBar());