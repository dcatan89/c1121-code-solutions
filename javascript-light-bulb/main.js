var lightBulbClicker = document.querySelector('.light-bulb-on');
var background = document.querySelector('.light-background');
var i = 0;
function onOff(event) {
  i++;
  if (i % 2 === 0) {
    lightBulbClicker.className = 'light-bulb-on';
    background.className = 'light-background';
  } else {
    lightBulbClicker.className = 'light-bulb-off';
    background.className = 'black-background';
  }

}

lightBulbClicker.addEventListener('click', onOff);
