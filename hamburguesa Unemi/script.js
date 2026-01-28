
var swiper1 = new Swiper(".mySwiper-1", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper2 = new Swiper("#swiper1", {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: "#swiper1 .swiper-button-next",
    prevEl: "#swiper1 .swiper-button-prev",
  },
});

var swiper3 = new Swiper("#swiper2", {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: "#swiper2 .swiper-button-next",
    prevEl: "#swiper2 .swiper-button-prev",
  },
});

var swiper4 = new Swiper("#swiper3", {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: "#swiper3 .swiper-button-next",
    prevEl: "#swiper3 .swiper-button-prev",
  },
});
