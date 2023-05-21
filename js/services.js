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

// Custom Select & Datepicker
$(function () {
  $('#datepicker').datepicker({
    altFormat: 'yy-mm-dd',
  });

  $('#select').selectmenu();
});

// Tabs
if (document.querySelector('.prices__tabs')) {
  document.querySelectorAll('.prices__tab').forEach((tab, _, arr) => {
    tab.addEventListener('click', function () {
      [...arr, ...document.querySelectorAll('[data-tab]')].forEach(el => el.classList.remove('active'));
      [this, ...document.querySelectorAll(`[data-tab='${this.id}']`)].forEach(el => el.classList.add('active'));
    });
  });
}

window.addEventListener('load', () => {
  if (window.screen.width <= 768) {
    if (document.querySelector('.prices__tabs')) {
      // Price-list
      const swiperPriceList = new Swiper('.prices__tabs', {
        speed: 800,
        slidesPerView: 'auto',
        spaceBetween: '9%',
      });
    }
    // Tabs
    document.querySelectorAll('[data-title]').forEach((btn, _, arr) => {
      btn.addEventListener('click', function () {
        if (this.classList.contains('active')) {
          [...arr, ...document.querySelectorAll('[data-content]')].forEach(el => el.classList.remove('active'));
        } else {
          [...arr, ...document.querySelectorAll('[data-content]')].forEach(el => el.classList.remove('active'));
          [this, ...document.querySelectorAll(`[data-content='${this.dataset.title}']`)].forEach(el => el.classList.add('active'));
        }
      });
    });
  }
});

// Yandex-map
ymaps.ready(init);

function init() {
  var map = new ymaps.Map('map', {
      center: [55.751574, 37.573856],
      zoom: window.screen.width <= 768 ? 19 : 9,
    }),
    clusterer = new ymaps.Clusterer({
      clusterIconLayout: ymaps.templateLayoutFactory.createClass(
        "<div class='contacts__map-cluster' style='background: [if properties.geoObjects.length < 10]linear-gradient(180deg, #77E6FD 0%, #26A4D9 100%)[else]linear-gradient(180deg, #FF8A1E 0%, #DA5A12 100%)[endif]'>$[properties.geoObjects.length]</div>"
      ),
      clusterNumbers: [10],
      clusterIconContentLayout: null,
    }),
    points = [
      [55.831903, 37.411961],
      [55.763338, 37.565466],
      [55.744522, 37.616378],
      [55.764522, 37.636378],
      [55.780898, 37.642889],
      [55.793559, 37.435983],
      [55.800584, 37.675638],
      [55.716733, 37.589988],
      [55.775724, 37.56084],
      [55.822144, 37.433781],
    ],
    geoObjects = [];

  for (var i = 0, len = points.length; i < len; i++) {
    geoObjects[i] = new ymaps.Placemark(
      points[i],
      {},
      {
        iconLayout: 'default#image',
        iconImageHref: `data:image/svg+xml,${encodeURIComponent(
          "<svg width='45' height='45' viewBox='0 0 45 45' fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='22.5' cy='22.5' r='12.5' fill='url(#paint0_linear_453_21920)'/><circle cx='22.5' cy='22.5' r='17.5' stroke='url(#paint1_linear_453_21920)' stroke-opacity='0.3' stroke-width='10'/><defs><linearGradient id='paint0_linear_453_21920' x1='22.5' y1='10' x2='22.5' y2='35' gradientUnits='userSpaceOnUse'><stop stop-color='#FF8A1E'/><stop offset='1' stop-color='#DA5A12'/></linearGradient><linearGradient id='paint1_linear_453_21920' x1='22.5' y1='10' x2='22.5' y2='35' gradientUnits='userSpaceOnUse'><stop stop-color='#FF8A1E'/><stop offset='1' stop-color='#DA5A12'/></linearGradient></defs></svg>"
        )}`,
        iconImageSize: [25, 25],
      }
    );
  }

  clusterer.add(geoObjects);
  map.geoObjects.add(clusterer);

  map.setBounds(clusterer.getBounds(), {
    checkZoomRange: true,
  });

  // Убираем все элементы управления с карты
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  map.controls.remove('zoomControl');
  map.controls.remove('routeButtonControl');
  map.controls.remove('geolocationControl');
  map.controls.remove('routeEditor');
  map.controls.remove('routePanelControl');
  map.controls.remove('masstransit');
  map.controls.remove('rulerControl');
}
