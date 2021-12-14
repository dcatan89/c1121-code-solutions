var clickedStorage;

var supaHotButton = document.querySelector('.hot-button');

var clickCount = document.querySelector('.click-count');

function clickedAmount(event) {
  var i = 0;
  clickCount.textContent = i++;
}

supaHotButton.addEventListener('click', clickedAmount);

if (clickCount < 4) {
  supaHotButton.className;
}
