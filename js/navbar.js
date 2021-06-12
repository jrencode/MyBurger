const navMenu = document.querySelector('.nav__menu');
const navlinks = document.querySelector('.nav__links');
const header = document.querySelector('.header');

const open = () => {
  const line1 = document.querySelector('.line1');
  const line2 = document.querySelector('.line2');
  const line3 = document.querySelector('.line3');

  console.log('open');
  navlinks.classList.toggle('active');

  navMenu.classList.toggle('rotate');

}

navMenu.addEventListener('click', open);


const scrollActive = () => {
  const scrollY = window.pageYOffset;
  

  if(scrollY >= 300) {
    header.style.position = 'fixed';
    header.style.backgroundColor = "#fff";
  } else {
    header.style.position = 'relative';
  }
}
window.addEventListener('scroll', scrollActive);
