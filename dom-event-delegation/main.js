var singleClick = document.querySelector('.task-list');

function taskListClick(event) {
  console.log('Event Target:', event.target);
  console.log('Event Tag Name', event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    var closestEventTarget = event.target.closest('.task-list-item');
    console.log('closestEvent:', closestEventTarget);
    closestEventTarget.remove();
  }

}

singleClick.addEventListener('click', taskListClick);
