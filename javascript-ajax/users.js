var $userList = document.querySelector('#user-list');

function userData(name) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    for (var i = 0; i < xhr.response; i++) {
      var $li = document.createElement('li');
      $li[i].textContent = name;
      $userList.appendchild($li[i]);
    }
  });
  xhr.send();
}
