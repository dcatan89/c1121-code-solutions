var contactForm = document.querySelector('#contact-form');

function handleSubmit(event) {
  var inputs = contactForm.elements;
  var nameValue = inputs.name.value;
  var emailValue = inputs.email.value;
  var messageValue = inputs.message.value;
  console.log({ nameValue, emailValue, messageValue });
  contactForm.reset();
  event.preventDefault();
}

contactForm.addEventListener('submit', handleSubmit);
