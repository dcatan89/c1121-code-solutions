var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

function tabContainHandle(event) {

  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if (event.target === $tab[i]) {
        $tab[i].classList.add('active');
      } else {
        $tab[i].classList.remove('active');
      }
    }
    var $dataValue = event.target.getAttribute('data-view');
    for (i = 0; i < $view.length; i++) {
      if ($dataValue === $view[i].getAttribute('data-view')) {
        $view[i].classList.remove('hidden');
        $view[i].classList.add('active');

      } else {
        $view[i].classList.add('hidden');
      }

    }
  }

}

$tabContainer.addEventListener('click', tabContainHandle);
