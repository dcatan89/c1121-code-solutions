var $span = document.querySelectorAll('span');
var $h1 = document.querySelector('.h1-box');
var i = 0;

function keydownHandle(event) {
  if (event.key !== $span[i]) {
    $span[i].className = 'span-wrong';
    return;
  }

  $span[i].className = 'span-correct';
  i++;
  console.log(i);

}
document.addEventListener('keydown', keydownHandle);
