var $span = document.querySelectorAll('span');
var i = 0;

function keydownHandle(event) {

  if ($span[i].className === 'space span-neutral') {
    $span[i].className = 'span-correct ';
    i++;
  }
  if (event.key !== $span[i].textContent) {
    $span[i].classList.add('span-wrong');
    return i;
  }
  $span[i].className = 'span-correct';
  $span[i + 1].classList.add('span-neutral');
  i++;

}
document.addEventListener('keydown', keydownHandle);
