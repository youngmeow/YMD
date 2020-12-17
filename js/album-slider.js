const albumSwiper = new Swiper('.gallery-top', {
    spaceBetween: 10,
    thumbs: {
      swiper: {
        el: '.gallery-thumbs',
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});