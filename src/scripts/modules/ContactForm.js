class ContactForm {
    constructor() {
      const contactForm = document.querySelector('.js-contact-form');
      contactForm.addEventListener('submit', ContactForm.handleSubmit);
    }
  
    static handleSubmit(e) {
        e.preventDefault();
        const azureEndpoint = 'https://prod-17.uksouth.logic.azure.com:443/workflows/92cd33d5f8de4bafbb098ec17d889d23/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=rGRP0xnNBGP-brCTh4D5faRs6ukr9Cz-XJZN5f75CHM';
        const formData = Object.values(e.target).reduce((obj,field) => { obj[field.name] = field.value; return obj }, {})

        // Make a POST request
        fetch(azureEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        }).then(function (response) {
            if (response.ok) {
                ContactForm.contactFormSuccess(formData.name);
                return response.json();
            }
            return Promise.reject(response);
        }).then(function (data) {
            console.log(data);
        }).catch(function (error) {
            console.warn('Something went wrong.', error);
        });
    }

    static contactFormSuccess(name) {
        const contactForm = document.querySelector('.js-contact-form');
        contactForm.classList.add('contact-form--hidden');
        const contactFormSuccess = document.querySelector('.contact-form__success');
        contactFormSuccess.innerHTML += `<p>Thanks, ${name}! Your message has been sent to David.<p>`;
        contactFormSuccess.classList.add('contact-form__success--active');
    }
  }
  
  export default ContactForm;
  