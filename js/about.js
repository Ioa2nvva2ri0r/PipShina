/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// Header
const menu = document.getElementById('menu');
const openMenu = document.getElementById('menu-open');
const closeMenu = document.getElementById('menu-close');
const links = document.querySelectorAll('.header__nav-link');

openMenu.addEventListener('click', () => menu.classList.add('active'));
closeMenu.addEventListener('click', () => menu.classList.remove('active'));
links.forEach(el => el.addEventListener('click', () => menu.classList.remove('active')));
document.body.addEventListener('click', e => {
  if (!openMenu.contains(e.target) && !menu.contains(e.target) && menu.classList.contains('active')) menu.classList.remove('active');
});

// About
const swiperAbout = new Swiper('.about__slider', {
  loop: true,
  speed: 800,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.about__slider-btn-next',
    prevEl: '.about__slider-btn-prev',
  },
  a11y: {
    prevSlideMessage: 'Назад',
    nextSlideMessage: 'Вперёд',
  },
  pagination: {
    el: '.about__slider-pagination',
    clickable: true,
  },
});

window.addEventListener('load', () => {
  if (window.screen.width <= 768) {
    // Advantages
    const swiperAdvantages = new Swiper('.advantages__list', {
      loop: true,
      speed: 800,
      autoplay: {
        delay: 3000,
      },
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: '5%',
      pagination: {
        el: '.advantages__slider-pagination',
        clickable: true,
      },
    });
    // Partners
    const swiperPartners = new Swiper('.partners__slider', {
      loop: true,
      speed: 800,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: '.partners__slider-pagination',
        clickable: true,
      },
    });
  }
});
