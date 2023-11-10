// mobile menu

let hamIcon = document.getElementById('hamIcon');

hamIcon.addEventListener('click', function () {
  hamIcon.nextElementSibling.nextElementSibling.classList.add('active');
  document.getElementById('overlay').classList.add('active');
  document.getElementById('overlay').addEventListener('click', function () {
    this.classList.remove('active');
    this.nextElementSibling.querySelector('nav').classList.remove('active');
  })
})

// banner slider

let smallImgs = Array.from(document.getElementsByClassName('smallImgs'));
let bigImg = Array.from(document.getElementsByClassName('bigImg'));

smallImgs.forEach((tab) => {
  tab.addEventListener('click', function () {
    let tabId = tab.dataset.id;
    bigImg.forEach((content) => {
      let contentId = content.dataset.id;
      if (tabId === contentId) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    })
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

// sweet alert

let submitForm = document.getElementById('submit');

submitForm.addEventListener('click', function (e) {
  e.preventDefault();
  Swal.fire({
    position: 'top-center',
    showConfirmButton: false,
    timer: 3000,
    html: `
    <div class="modal-dialog modal-dialog-centered border-0">
    <div class="modal-content text-center border-0">
      <div class="modal-body">
        <img alt="success" src="assets/img/Ok.png" class="w-72">
        <h5 class="text-success font-bold mt-3">درخواست موفق </h5>
        <p class="text-gray">درخواست شما با موفقیت ثبت شد</p>
        <p class="fs-14 text-gray">شماره پیگیری:2369894 </p>
      </div>
      <div class="modal-footer border-0">
        <button type="button" class="btn btn-info py-2 text-white font-bold w-100">نمایش درخواست</button>
      </div>
    </div>
  </div>
    `
  })
});

