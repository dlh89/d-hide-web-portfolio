class Carousel {
  constructor() {
    const slides = Array.from(document.getElementsByClassName('carousel__slide'));
    const navButtons = Array.from(document.getElementsByClassName('carousel__button'));
    const sideButtons = Array.from(document.getElementsByClassName('carousel__side-buttons'));

    navButtons.forEach(button =>
      button.addEventListener('click', e => Carousel.change(e, slides, navButtons)));
    sideButtons.forEach(button =>
      button.addEventListener('click', e => Carousel.nextOrPrev(e, slides, navButtons)));
  }

  static change(e, slides, navButtons) {
    const slideIndex = e.target.dataset.number - 1;
    // classes for slides
    Carousel.removeActiveClass(slides);
    Carousel.addActiveClass(slides[slideIndex]);

    // classes for navButtons
    Carousel.removeActiveClass(navButtons);
    Carousel.addActiveClass(e.target);
  }

  static nextOrPrev(e, slides, navButtons) {
    let slideIndex = 0;
    // find the active slide
    navButtons.forEach((button) => {
      if (button.className.includes('--active')) {
        slideIndex = button.dataset.number - 1;
      }
    });
    if (e.target.className.includes('right')) {
      if (slideIndex === 3) {
        slideIndex = 0;
      } else {
        slideIndex += 1;
      }
    } else if (slideIndex === 0) {
      slideIndex = 3;
    } else {
      slideIndex -= 1;
    }

    // classes for slides
    Carousel.removeActiveClass(slides);
    Carousel.addActiveClass(slides[slideIndex]);

    // classes for navButtons
    Carousel.removeActiveClass(navButtons);
    Carousel.addActiveClass(navButtons[slideIndex]);
  }

  static removeActiveClass(elements) {
    elements.forEach((element) => {
      element.className = element.className.replace('--active', '');
    });
  }

  static addActiveClass(element) {
    if (element.className.includes('slide')) {
      element.classList.add('carousel__slide--active');
    } else {
      element.classList.add('carousel__button--active');
    }
  }
}

export default Carousel;
