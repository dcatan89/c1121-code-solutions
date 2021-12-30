var data = {
  view: 1
};

var $arrowLeft = document.querySelector('.arrows-left');
var $arrowRight = document.querySelector('.arrows-right');
var $span = document.querySelector('.span-section');
var $circles = document.querySelectorAll('.circles');
var $imgs = document.querySelectorAll('.imgs');

function handleArrowSwap(event) {
  viewSwap(data.view);
  if (data.view < 1) {
    data.view = 5;
  }
  if (data.view > 5) {
    data.view = 1;
  }
  if (event.target === $arrowLeft) {
    viewSwap(data.view);
    data.view--;
  }
  if (event.target === $arrowRight) {
    viewSwap(data.view);
    data.view++;

  }
  console.log(data.view);
}

function viewSwap(string) {
  data.view = string;
  for (var i = 0; i < $circles.length; i++) {
    if ($circles[i].getAttribute('data-view') === string) {
      $circles[i].className = 'circles fas fa-circle view';
      $imgs[i].classList.remove('hidden');
    } else {
      $circles[i].className = 'circles far fa-circle view';
      $imgs[i].classList.add('hidden');
    }
  }
}

function handleSpan(event) {
  if (!event.target) {
    return;
  }
  var $dataViewValue = event.target.getAttribute('data-view');
  data.view = $dataViewValue;
  for (var i = 0; i < $circles.length; i++) {
    if ($circles[i].getAttribute('data-view') === $dataViewValue) {
      $circles[i].className = 'circles fas fa-circle view';
      $imgs[i].classList.remove('hidden');
    } else {
      $circles[i].className = 'circles far fa-circle view';
      $imgs[i].classList.add('hidden');
    }
  }
}

$arrowLeft.addEventListener('click', handleArrowSwap);
$arrowRight.addEventListener('click', handleArrowSwap);
$span.addEventListener('click', handleSpan);
