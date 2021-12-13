
var $clickButton = document.querySelector('.click-button');

function handleClick(event) {
  console.log('button clicked');
  console.log('click');
  console.log('event.target', event.target);
}

$clickButton.addEventListener('click', handleClick);

function handleMouseOver(event) {
  console.log('button hovered');
  console.log('mouseover');
  console.log('event.target', event.target);
}

var $mouseOver = document.querySelector('.hover-button');

$mouseOver.addEventListener('mouseover', handleMouseOver);

function handleDoubleCLick(event) {
  console.log('button double-clicked');
  console.log('dblclick');
  console.log('event.target', event.target);
}

var $dblclick = document.querySelector('.double-click-button');

$dblclick.addEventListener('dblclick', handleDoubleCLick);
