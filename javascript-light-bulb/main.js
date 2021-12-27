var lightBulbClicker = document.querySelector('.light-bulb-on');
var background = document.querySelector('.light-background');
var lightOn = true;
function onOff(event) {
  if (lightOn === true) {
    lightBulbClicker.className = 'light-bulb-on';
    background.className = 'light-background';
    lightOn = false;
  } else {
    lightBulbClicker.className = 'light-bulb-off';
    background.className = 'black-background';
    lightOn = true;
  }

}

lightBulbClicker.addEventListener('click', onOff);
