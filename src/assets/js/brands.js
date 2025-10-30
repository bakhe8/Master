/**
 * BrandsSlider Class
 *
 * Initializes a Swiper.js carousel for the brands component.
 * It's responsive and includes autoplay functionality.
 */
class BrandsSlider {
    constructor() {
        this.slider = document.querySelector('.brands-slider');
        this.init();
    }

    init() {
        if (!this.slider) {
            return;
        }

        // salla.helpers.swiper is a built-in utility that lazy-loads Swiper.js
        salla.helpers.swiper(this.slider, {
            loop: true,
            slidesPerView: 2,
            spaceBetween: 20,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            breakpoints: {
                640: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 6,
                    spaceBetween: 50,
                },
            },
        });
    }
}

document.addEventListener('DOMContentLoaded', () => new BrandsSlider());