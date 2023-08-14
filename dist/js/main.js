import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper-event-1', {
  allowTouchMove: true,
  slidesPerView: 2,
  slidesPerGroup: 2,
  grid: {
    rows: 2,
    fill: 'row',
  },
  pagination: {
    el: '.swiper-pagination',
    bulletClass: 'bullet-custom',
    bulletActiveClass: 'bullet-custom--active',
    clickable: true,
  },
  spaceBetween: 32,
});

const swiper2 = new Swiper('.swiper-event-2', {
  allowTouchMove: true,
  slidesPerView: 2,
  slidesPerGroup: 2,
  grid: {
    rows: 2,
    fill: 'row',
  },
  pagination: {
    el: '.swiper-pagination',
    bulletClass: 'bullet-custom',
    bulletActiveClass: 'bullet-custom--active',
    clickable: true,
  },
  spaceBetween: 32,
});

const swiper3 = new Swiper('.swiper-event-3', {
  allowTouchMove: true,
  slidesPerView: 2,
  slidesPerGroup: 2,
  grid: {
    rows: 2,
    fill: 'row',
  },
  pagination: {
    el: '.swiper-pagination',
    bulletClass: 'bullet-custom',
    bulletActiveClass: 'bullet-custom--active',
    clickable: true,
  },
  spaceBetween: 32,
});

const swiper4 = new Swiper('.swiper-event-4', {
  allowTouchMove: true,
  slidesPerView: 2,
  slidesPerGroup: 2,
  grid: {
    rows: 2,
    fill: 'row',
  },
  pagination: {
    el: '.swiper-pagination',
    bulletClass: 'bullet-custom',
    bulletActiveClass: 'bullet-custom--active',
    clickable: true,
  },
  spaceBetween: 32,
});

const lectors = new Swiper('.lectors__swiper', {
  slidesPerView: 3,
  spaceBetween: 32,
  slidesPerGroup: 3,
  pagination: {
    el: '.swiper-pagination',
    bulletClass: 'bullet-custom',
    bulletActiveClass: 'bullet-custom--active',
    clickable: true,
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