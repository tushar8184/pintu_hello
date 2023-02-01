/* eslint-disable @typescript-eslint/no-unused-vars */
Drupal.behaviors.navbar = {
  attach: function (context, settings) {
    const hamburger = document.querySelector('.menu-bar') as HTMLElement;
    const navMenu = document.querySelector('.navbar-menu') as HTMLElement;

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  },
};
