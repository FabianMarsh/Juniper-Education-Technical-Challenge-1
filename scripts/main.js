const swiperIcons = new Swiper('.swiper__icons', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 50,
    breakpoints: {
        480: { slidesPerView: 2, spaceBetween: 15 },
        768: { slidesPerView: 3, spaceBetween: 20 },
        1024: { slidesPerView: 5, spaceBetween: 30 },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


const swiperCards = new Swiper('.swiper__cards', {
    slidesPerView: 1,
    spaceBetween: 100,
});

// Sync both Swipers
swiperIcons.controller.control = swiperCards;
swiperCards.controller.control = swiperIcons;

