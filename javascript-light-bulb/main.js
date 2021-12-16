var lightBulbClicker = document.querySelector('.light-bulb-on');
var background = document.querySelector('.light-background');
var i = true;
function onOff(event) {
  if (i === true) {
    lightBulbClicker.className = 'light-bulb-on';
    background.className = 'light-background';
    i = false;
  } else {
    lightBulbClicker.className = 'light-bulb-off';
    background.className = 'black-background';
    i = true;
  }

}

lightBulbClicker.addEventListener('click', onOff);
