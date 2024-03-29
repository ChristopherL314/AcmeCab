const menu = document.querySelector('mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu //
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// Show Active Menu When Scrolling //
const highlightMenu = () => {
  const element = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  let scrollPosition = window.scrollY;
  // console.log(scrollPosition);

  // adss the highlight class to my menu items //
  if(window.innerWidth > 960 && scrollPosition < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPosition < 1400) {
    aboutMenu.classList.add('hihglight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPosition < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('hihglight');
    return;
  }

  if ((element && window.innerWidth < 960 && scrollPosition < 600) || element) {
    element.classList.remove('highlight');
  }
}

window.addEventListener('scroll', 'highlightMenu');
window.addEventListener('click', 'highlightMenu');

// Close Mobile Menu When Clicking on a Menu Item //
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active')
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active')
    menuLinks.classList.remove('active')
  }
}

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)