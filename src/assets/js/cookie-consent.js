/**
 * CookieConsent Class
 *
 * Manages the GDPR cookie consent banner. It checks localStorage to see if
 * the user has already accepted the policy. If not, it displays the banner.
 * Once accepted, it hides the banner and saves the preference.
 */
class CookieConsent {
    constructor() {
        this.banner = document.querySelector('#cookie-consent-banner');
        this.storageKey = 'cookieConsentAccepted';
        if (this.banner) {
            this.acceptButton = this.banner.querySelector('.js-accept-cookies');
        }
        this.init();
    }

    init() {
        if (!this.banner || !this.acceptButton) {
            return;
        }

        // If consent has already been given, do nothing.
        if (localStorage.getItem(this.storageKey) === 'true') {
            return;
        }

        // Show the banner after a short delay
        setTimeout(() => {
            this.banner.classList.remove('hidden', 'translate-y-full');
            this.banner.dataset.status = 'visible';
        }, 1500);

        this.acceptButton.addEventListener('click', () => this.accept());
    }

    accept() {
        this.banner.classList.add('translate-y-full');
        localStorage.setItem(this.storageKey, 'true');
    }
}

document.addEventListener('DOMContentLoaded', () => new CookieConsent());