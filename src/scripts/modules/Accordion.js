class Accordion {
  constructor() {
    const expandableItems = Array.from(document.querySelectorAll('.accordion__heading'));
    expandableItems.forEach(item => item.addEventListener('click', e => Accordion.toggleExpand(e)));
  }

  static toggleExpand(e) {
    // add active class to heading
    const heading = e.target;
    heading.classList.toggle('accordion__heading--active');

    // rotate the plus icon by adding active class to vertical line
    const iconVertical = heading.querySelector('.accordion__icon-vertical');
    iconVertical.classList.toggle('accordion__icon-vertical--active');

    // adjust the panel height
    const panel = e.target.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.setAttribute('aria-hidden', 'true');
    } else {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
      panel.setAttribute('aria-hidden', 'false');
    }
  }
}

export default Accordion;
