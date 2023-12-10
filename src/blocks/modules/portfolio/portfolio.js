const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.portfolio__slider-next',
      prevEl: '.portfolio__slider-prev',
    },
  });
  swiper();