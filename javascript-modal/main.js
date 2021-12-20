var openModal = document.querySelector('.modal-button');
var closeModal = document.querySelector('.modal-box');
var $overlay = document.querySelector('.overlay');
var $noButton = document.querySelector('.no-button');

function openOverlay(event) {
  $overlay.classList.remove('hidden');
  closeModal.classList.remove('hidden');

}

openModal.addEventListener('click', openOverlay);

function closeAll(event) {
  $overlay.classList.add('hidden');
  closeModal.classList.add('hidden');
}

$noButton.addEventListener('click', closeAll);
