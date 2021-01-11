import svgxuse from 'svgxuse'; // polyfill to load svgs from external URI (unsupported by IE)

import Accordion from './modules/Accordion';
import Carousel from './modules/Carousel';
import Navigation from './modules/Navigation';
import ContactForm from './modules/ContactForm';

const accordion = new Accordion;
const navigation = new Navigation;
const carousel = new Carousel;
const contactForm = new ContactForm;