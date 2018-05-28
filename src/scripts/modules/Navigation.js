import smoothscroll from 'smoothscroll-polyfill';

class Navigation {
  constructor() {
    // kick off the polyfill
    smoothscroll.polyfill();

    const navItems = Array.from(document.getElementsByClassName('nav__link'));
    navItems.forEach((element) => {
      element.addEventListener('click', Navigation.scroll);
    });
  }

  static scroll(e) {
    e.preventDefault();
    console.log(document.querySelector(e.target.hash));
    // scroll to the target hash (id) if it exists
    if (e.target.hash) {
      document.querySelector(e.target.hash).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

export default Navigation;
