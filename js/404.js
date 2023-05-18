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
