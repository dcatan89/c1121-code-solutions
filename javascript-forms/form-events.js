function handleFocus(event) {
  console.log('focus fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur fired');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log('eventName:', event.target.name, 'eventValue:', event.target.value);
}

var focusEvent = document.querySelector('#user-name');
var blurEvent = document.querySelector('#user-email');
var inputEvent = document.querySelector('#user-message');

focusEvent.addEventListener('focus', handleFocus);
focusEvent.addEventListener('blur', handleBlur);
focusEvent.addEventListener('input', handleInput);
blurEvent.addEventListener('blur', handleBlur);
blurEvent.addEventListener('focus', handleFocus);
blurEvent.addEventListener('input', handleInput);

inputEvent.addEventListener('input', handleInput);
inputEvent.addEventListener('blur', handleBlur);
inputEvent.addEventListener('focus', handleFocus);
