/**
 * NewsletterModal Class
 *
 * Manages the newsletter subscription popup. It shows the modal once per
 * session after a delay and saves the user's interaction to prevent it
 * from showing again.
 */
class NewsletterModal {
    constructor() {
        this.modal = document.querySelector('#newsletter-modal');
        this.storageKey = 'newsletterModalShown';
        this.showDelay = 5000; // Show after 5 seconds

        if (this.modal) {
            this.closeButton = this.modal.querySelector('.js-close-newsletter-modal');
        }
        this.init();
    }

    init() {
        if (!this.modal || !this.closeButton) {
            return;
        }

        // If the modal has already been shown in this session, do nothing.
        if (sessionStorage.getItem(this.storageKey) === 'true') {
            return;
        }

        setTimeout(() => this.show(), this.showDelay);

        this.closeButton.addEventListener('click', () => this.hide());
    }

    show() {
        this.modal.classList.remove('hidden', 'opacity-0', 'pointer-events-none');
        this.modal.querySelector('div').classList.remove('scale-95');
    }

    hide() {
        this.modal.classList.add('opacity-0', 'pointer-events-none');
        sessionStorage.setItem(this.storageKey, 'true');
    }
}

document.addEventListener('DOMContentLoaded', () => new NewsletterModal());