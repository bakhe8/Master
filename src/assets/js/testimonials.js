/**
 * TestimonialsSlider Class
 *
 * Initializes a Swiper.js carousel for the testimonials component.
 * It's responsive and includes pagination.
 */
class TestimonialsSlider {
    constructor() {
        this.slider = document.querySelector('.testimonials-slider');
        this.init();
    }

    init() {
        if (!this.slider) {
            return;
        }

        // salla.helpers.swiper is a built-in utility that lazy-loads Swiper.js
        salla.helpers.swiper(this.slider, {
            // Optional parameters
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
            },
        });
    }
}

document.addEventListener('DOMContentLoaded', () => new TestimonialsSlider());