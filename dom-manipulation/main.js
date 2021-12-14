var clickedStorage;

var supaHotButton = document.querySelector('.hot-button');

var clickCount = document.querySelector('.click-count');
var i = 0;
clickCount.textContent = 'Clicks:';
function clickedAmount(event) {
  clickCount.textContent = i++;
  if (clickCount.textContent < 4) {
    supaHotButton.className = 'cold hot-button';
  } else if (clickCount.textContent < 7) {
    supaHotButton.className = 'cool hot-button';
  } else if (clickCount.textContent < 10) {
    supaHotButton.className = 'tepid hot-button';
  } else if (clickCount.textContent < 13) {
    supaHotButton.className = 'warm hot-button';
  } else if (clickCount.textContent < 16) {
    supaHotButton.className = 'hot hot-button';
  } else supaHotButton.className = 'nuclear hot-button';

}

supaHotButton.addEventListener('click', clickedAmount);
