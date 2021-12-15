var lightBulbClicker = document.querySelector('.light-bulb-on');
var background = document.querySelector('.light-background');

function onOff(event) {
  lightBulbClicker.className = 'light-bulb-off';
  background.className = 'black-background';

}

lightBulbClicker.addEventListener('click', onOff);
