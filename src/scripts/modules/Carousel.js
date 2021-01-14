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
    slides[slideIndex].classList.add('carousel__slide--active');

    // classes for navButtons
    Carousel.removeActiveClass(navButtons);
    e.target.classList.add('carousel__button--active');
  }

  static nextOrPrev(e, slides, navButtons) {
    const slideCount = slides.length;
    let slideIndex = 0;
    // find the active slide
    navButtons.forEach((button) => {
      if (button.className.includes('--active')) {
        slideIndex = button.dataset.number - 1;
      }
    });
    if (e.target.className.includes('right')) {
      if (slideIndex === slideCount - 1) {
        slideIndex = 0;
      } else {
        slideIndex += 1;
      }
    } else {
      if (slideIndex === 0) {
        slideIndex = slideCount - 1;
      } else {
        slideIndex -= 1;
      }
    }

    // classes for slides
    Carousel.removeActiveClass(slides);
    slides[slideIndex].classList.add('carousel__slide--active');

    // classes for navButtons
    Carousel.removeActiveClass(navButtons);
    navButtons[slideIndex].classList.add('carousel__button--active');
  }

  static removeActiveClass(elements) {
    elements.forEach((element) => {
      element.className = element.className.replace('--active', '');
    });
  }
}

export default Carousel;
