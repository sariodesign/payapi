// Handler open menu mobile
const menuMobile = document.querySelector('.menu-mobile');

const btnMenuMobile = document.querySelector('.btn-menu-mobile');
const btnCloseMenu = document.querySelector('.btn-close-menu');

btnMenuMobile?.addEventListener('click', () => {
  if(!menuMobile?.classList.contains('is-visible')){
    menuMobile?.classList.add('is-visible')
  }
});

btnCloseMenu?.addEventListener('click', () => {
  if(menuMobile?.classList.contains('is-visible')){
    menuMobile?.classList.remove('is-visible')
  }
});

