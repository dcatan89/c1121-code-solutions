var clearedTimeOut = setTimeout(function () {
  var $h1 = document.querySelector('h1');
  $h1.textContent = 'Hello There';
}, 2000);

clearTimeout(clearedTimeOut);
