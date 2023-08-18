import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll > lastScroll && !header.classList.contains("header--scroll-down") && currentScroll > headerHeight) {
    header.classList.add("header--scroll-down");
  } else if (
    currentScroll < lastScroll &&
    header.classList.contains("header--scroll-down")
  ) {
    header.classList.remove("header--scroll-down");
  }
  lastScroll = currentScroll;
});

const navLinks = document.querySelectorAll(".nav__link");
const nav = document.querySelector(".header__nav")
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("header__nav--active");
  })
})

const programSwipers = document.querySelectorAll(".program__swiper");
programSwipers.forEach((swiper) => {
  swiper = new Swiper(swiper, {
    allowTouchMove: true,
    slidesPerView: 1,
    breakpoints: {
      1024: {
        slidesPerView: 2,
      }
    },
    pagination: {
      el: '.swiper-pagination',
      bulletClass: 'bullet-custom',
      bulletActiveClass: 'bullet-custom--active',
      clickable: true,
      dynamicBullets: true,
    },
    spaceBetween: 32,
    keyboard: {
      enabled: true,
    },
  });
})


const lectors = new Swiper('.lectors__swiper', {
  observer: true,
  slidesPerView: 1.3,
  slidesPerGroup: 1,
  spaceBetween: 32,
  slidesOffsetAfter: 16,
  longSwipes: false,
  pagination: {
    el: '.swiper-pagination',
    bulletClass: 'bullet-custom',
    bulletActiveClass: 'bullet-custom--active',
    clickable: true,
    dynamicBullets: true,
  },
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    375: {
      slidesOffsetAfter: 20,
      slidesPerView: 1.3,
      slidesPerGroup: 1,
      pagination: {
        dynamicBullets: true,
      }
    },
    480: {
      slidesOffsetAfter: 28,
      slidesPerView: 1.3,
      slidesPerGroup: 1,
      pagination: {
        dynamicBullets: true,
      }
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      pagination: {
        dynamicBullets: false,
      },
      slidesOffsetAfter: 0,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      pagination: {
        dynamicBullets: false,
      },
      slidesOffsetAfter: 0,
    }
  },
})

document.addEventListener("DOMContentLoaded", function() {
  const burger = document.querySelector(".burger");
  const headerNav = document.querySelector(".header__nav");

  burger.addEventListener("click", function() {
    if (!headerNav.classList.contains("header__nav--active")) {
      headerNav.classList.add("header__nav--active");
      burger.classList.add("is-active");
    } else {
      headerNav.classList.remove("header__nav--active");
      burger.classList.remove("is-active");
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const languages = document.querySelectorAll(".header__language");
  console.log(languages);
  languages.forEach(lang => {
    lang.addEventListener('click', () => {
      if(!lang.classList.contains("header__language--active")) {
        languages.forEach(otherLang => {
          otherLang.classList.contains("header__language--active") ?
          otherLang.classList.remove("header__language--active") : otherLang;
        })
        lang.classList.add("header__language--active");
      }
    })
  })
});