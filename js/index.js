
//section 2 slider
$('.product-feature-slider').slick({
    centerMode: true,
    centerPadding: '30px',
    slidesToShow: 3,
    arrows:true,
    autoplay:false,
    speed:500,
    responsive: [
        {
        breakpoint: 768,
        settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 3
        }
        },
        {
        breakpoint: 480,
        settings: {
            arrows: true,
            autoplay:true,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
        }
        }
    ]
});

//main-section slider
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    // effect: 'fade',
    // autoplay: {
    //   delay: 30000,
    //   disableOnInteraction: false,
    // },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//product slider
var swiperProduct = new Swiper('.product-swiper-container', {
    slidesPerView: 5,
    centeredSlides: false,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.product-swiper-button-next',
      prevEl: '.product-swiper-button-prev',
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }
  });

//counter
$('.counter').countUp({
    'time': 800,
    'delay': 8,
});



