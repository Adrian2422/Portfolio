// smooth scroll do sekcji
const links = $('a[href^="#"]');
const copy = $('.copytight__text span');
const skillsLink = $('.skills__link a');
const sideHeader = $('.sideHeader');
const sideNavBtn = $('.sideHeader__button');
const linkImgArray = [
  './src/img/SVG/about_me.svg',
  './src/img/SVG/why_me.svg',
  './src/img/SVG/skills.svg',
  './src/img/SVG/contact.svg'];

const navLinks = $('.sideNav__menu li a');
$(document).ready(() => {
  [...links].forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  [...navLinks].forEach((item, index) => {
    item.style.backgroundImage = 'url(' + linkImgArray[index] + ')';
  })

  sideHeader.hover(
    function() {
      sideHeader.toggleClass('sideHeader--visible');
      sideNavBtn.toggleClass('sideHeader__button--visible');
    }, function() {
      sideHeader.toggleClass('sideHeader--visible');
      sideNavBtn.toggleClass('sideHeader__button--visible');
    });

  copy.text(' - ' + new Date().getFullYear().toString());
});

