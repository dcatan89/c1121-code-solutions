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

var focusEvent = document.querySelector('input');
var blurEvent = document.querySelector('input');
var inputEvent = document.querySelector('input');

focusEvent.addEventListener('focus', handleFocus);
blurEvent.addEventListener('blur', handleBlur);
inputEvent.addEventListener('input', handleInput);
