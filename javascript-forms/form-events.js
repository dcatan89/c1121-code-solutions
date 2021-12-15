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

var focusEvent = document.querySelector('form');
var blurEvent = document.querySelector('form');
var inputEvent = document.querySelector('form');

focusEvent.addEventListener('focus', handleFocus);
blurEvent.addEventListener('blur', handleBlur);
inputEvent.addEventListener('input', handleInput);
