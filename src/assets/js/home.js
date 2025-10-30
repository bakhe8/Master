import "lite-youtube-embed";
import Lightbox from "fslightbox";
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

window.fslightbox = Lightbox;

class Home {
    constructor() {
        this.initiateHeroSlider();
        this.initTestimonialsSlider();
        this.initBrandsSlider();
        this.initFeaturedTabs();
    }

    initiateHeroSlider() {
        new Swiper('.hero-slider', {
            modules: [Navigation, Pagination, Autoplay],
            loop: true,
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    initTestimonialsSlider() {
        new Swiper('.testimonials-slider', {
            modules: [Pagination, Autoplay],
            loop: true,
            autoplay: {
                delay: 8000,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            slidesPerView: 1,
            spaceBetween: 20,
            breakpoints: {
                768: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 40 },
            },
        });
    }

    initBrandsSlider() {
        new Swiper('.brands-slider', {
            modules: [Autoplay],
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            slidesPerView: 2,
            spaceBetween: 15,
            breakpoints: {
                640: { slidesPerView: 3, spaceBetween: 20 },
                768: { slidesPerView: 4, spaceBetween: 30 },
                1024: { slidesPerView: 6, spaceBetween: 40 },
            },
        });
    }

    /**
     * used in views/components/home/featured-products-style*.twig
     */
    initFeaturedTabs() {
        app.all('.tab-trigger', el => {
            el.addEventListener('click', ({ currentTarget: btn }) => {
                let id = btn.dataset.componentId;
                // btn.setAttribute('fill', 'solid');
                app.toggleClassIf(`#${id} .tabs-wrapper>div`, 'is-active opacity-0 translate-y-3', 'inactive', tab => tab.id == btn.dataset.target)
                    .toggleClassIf(`#${id} .tab-trigger`, 'is-active', 'inactive', tabBtn => tabBtn == btn);

                // fadeIn active tabe
                setTimeout(() => app.toggleClassIf(`#${id} .tabs-wrapper>div`, 'opacity-100 translate-y-0', 'opacity-0 translate-y-3', tab => tab.id == btn.dataset.target), 100);
            })
        });
        document.querySelectorAll('.s-block-tabs').forEach(block => block.classList.add('tabs-initialized'));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Only initialize homepage scripts if a homepage-specific element exists.
    if (document.querySelector('.hero-slider, .testimonials-slider, .brands-slider')) {
        new Home();
    }
});