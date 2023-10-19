
// mobile menu

let hamIcon = document.getElementById('hamIcon');

hamIcon.addEventListener('click', function () {
  hamIcon.nextElementSibling.querySelector('nav').classList.add('active');
  document.getElementById('overlay').classList.add('active');
  document.getElementById('overlay').addEventListener('click', function () {
    this.classList.remove('active');
    this.nextElementSibling.querySelector('nav').classList.remove('active');
  })
})

// filter

let filterBtn = Array.from(document.getElementsByClassName('filterBtn'));
let filterContent = Array.from(document.getElementsByClassName('filterContent'));

filterBtn.forEach((item) => {
  item.addEventListener('click', function () {
    filterBtn.forEach((items) => {
      items.nextElementSibling.classList.remove('active');
      items.querySelector('svg').classList.remove('active');
    })
    item.nextElementSibling.classList.add('active');
    item.querySelector('svg').classList.add('active');
  })
})

// swiper

var menuSwiper = new Swiper(".banner", {
  loop: true,
  autoplay: true,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

var menuSwiper = new Swiper(".machines", {
  loop: true,
  autoplay: true,
  slidesPerView: 1,
  spaceBetween: 40,
  breakpoints: {
    1200: {
      slidesPerView: 4
    },
    992: {
      slidesPerView: 3
    },
    576: {
      slidesPerView: 2
    },
  }
});
var menuSwiper = new Swiper(".brands", {
  loop: true,
  autoplay: true,
  slidesPerView: 2,
  spaceBetween: 40,
  breakpoints: {
    1200: {
      slidesPerView: 6
    },
    992: {
      slidesPerView: 4
    },
    576: {
      slidesPerView: 3
    },
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
var smallImgs = new Swiper(".smallImgs", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var gallery = new Swiper(".gallery", {
  spaceBetween: 10,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  thumbs: {
      Swiper
  },
});
// fancybox

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
