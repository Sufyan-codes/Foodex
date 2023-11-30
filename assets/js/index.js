
const navMenu = document.getElementById('nav-menu')
const navClose = document.getElementById('nav-close')
const navToggle = document.getElementById('nav-toggle')
const cartIcon = document.getElementById('cart-icon')
const cartContainer = document.getElementById('cart-container')
const navCloseEl = document.getElementById('navClose')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show__menu')
    })
    // cart
    if (cartIcon) {
        cartIcon.addEventListener('click', () => {
            cartContainer.classList.add('show__cart')
        })
    }
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show__menu')

    })

    if (navCloseEl) {
        navCloseEl.addEventListener('click', () => {
            cartContainer.classList.remove('show__cart')
        })
    }
}






/*===========SWIPER==========*/
const swiperWatches = new Swiper('.home__swiper', {
    loop: true,
    spceBetween: 32,
    grabCursor: true,
    effect: 'creative',
    creativeEffect: {
        prev: {
            translate: [-100, 0, -500],
            rotate: [0, 0, 15],
            opacity: 0
        },
        next: {
            translate: [100, 0, 500],
            rotate: [0, 0, -15],
            opacity: 0
        },
    },

    pagination: {
        el: '.swiper-pagination'
    }
})

// rated swiper
const newsWrap = new Swiper('.news__wrap', {
    loop: true,
    spaceBetween: 34,
   
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: "swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    //Responsive breakpoints for how many slides to show at that view
    breakpoints: {
        // 700px and up shoes 2 slides
        300: {
            slidesPerView: 1
        },
        576: {
            slidesPerView: 2
        },
        700: {
            slidesPerView: 3
        },
        // 1200px and up shoes 3 slides
        1000: {
            slidesPerView: 4
        }
    },
})

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__swiper,
            .menu__title, .menu__bg,
            .about__img, .about__data,
            .testimonial__title, .news__wrap,
            .deals__data, .news__title,
            .footer__content`, {
    interval: 200
})