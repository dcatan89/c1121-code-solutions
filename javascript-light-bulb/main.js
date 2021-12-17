var lightOn = document.querySelector('.light-bulb-on');
var background = document.querySelector('.light-background');
var i = true;
function onOff(event) {
  if (i === true) {
    lightOn.className = 'light-bulb-on';
    background.className = 'light-background';
    i = false;
  } else {
    lightOn.className = 'light-bulb-off';
    background.className = 'black-background';
    i = true;
  }

}

lightOn.addEventListener('click', onOff);
