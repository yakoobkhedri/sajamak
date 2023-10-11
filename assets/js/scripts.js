
// mobile menu

let hamIcon=document.getElementById('hamIcon');

hamIcon.addEventListener('click',function () {
  hamIcon.nextElementSibling.querySelector('nav').classList.add('active');
  document.getElementById('overlay').classList.add('active');
  document.getElementById('overlay').addEventListener('click',function () {
    this.classList.remove('active');
    this.nextElementSibling.querySelector('nav').classList.remove('active');
  })
})
// filter

let filterBtn=Array.from(document.getElementsByClassName('filterBtn'));
let filterContent=Array.from(document.getElementsByClassName('filterContent'));

filterBtn.forEach((item)=>{
  item.addEventListener('click',function () {
    item.nextElementSibling.classList.toggle('active');
    item.querySelector('svg').classList.toggle('active');
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
// fancybox

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
