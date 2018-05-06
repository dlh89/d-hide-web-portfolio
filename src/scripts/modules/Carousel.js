class Carousel {
    constructor() {
        const slides = Array.from(document.getElementsByClassName('carousel__slide'));
        const navButtons = Array.from(document.getElementsByClassName('carousel__button'));
        const sideButtons = Array.from(document.getElementsByClassName('carousel__side-buttons'));
        
        navButtons.forEach((button) => button.addEventListener('click', (e) => this.change(e, slides, navButtons)));
        sideButtons.forEach((button) => button.addEventListener('click', (e) => this.nextOrPrev(e, slides, navButtons)));
    }

    change(e, slides, navButtons) {
        let slideIndex = e.target.dataset.number - 1;
        // classes for slides
        this.removeActiveClass(slides);
        this.addActiveClass(slides[slideIndex]);
        
        // classes for navButtons
        this.removeActiveClass(navButtons);
        this.addActiveClass(e.target);
    }

    nextOrPrev(e, slides, navButtons) {
        let slideIndex = 0;
        // find the active slide
        navButtons.forEach((button) => { 
            if (button.className.includes('--active')) {
                slideIndex = button.dataset.number - 1;
            }
        });
        if (e.target.className.includes('right')) {
            if (slideIndex == 2) {
                slideIndex = 0;
            } else {
                slideIndex++; 
            }
        } else {
        if (slideIndex == 0) {
                slideIndex = 2;
        } else {
                slideIndex--;
            }
        }
          
        // classes for slides
        this.removeActiveClass(slides);
        this.addActiveClass(slides[slideIndex]);
        
        // classes for navButtons
        this.removeActiveClass(navButtons);
        this.addActiveClass(navButtons[slideIndex]);
    }

    removeActiveClass(elements) {
        elements.forEach((element) => {
            element.className = element.className.replace('--active', '');
        });
    }

    addActiveClass(element) {
        if (element.className.includes('slide')) {
            element.classList.add('carousel__slide--active');
        } else {
          element.classList.add('carousel__button--active');
        };
    }
}

export default Carousel;