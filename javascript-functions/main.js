function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
var seconds = convertMinutesToSeconds(10);
console.log('Value from mintues to seconds:', seconds);

function greet(name) {
  var greeting = 'Hey ' + name;
  return greeting;
}
var greeting = greet('DJ');
console.log('Value of greeting:', greeting);

function getArea(width, height) {
  var area = width * height;
  return area;
}
var area = getArea(11, 11);
console.log('Value of area:', area);

function getFirstName(person) {
  return person.firstName;
}

var firstName = getFirstName({ firstName: 'DJ', lastName: 'Catan' });
console.log('My first name is', firstName);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}
var lastElement = getLastElement(['fox', 'pickachu', 'samus', 'ness']);
console.log('Last value of the array:', lastElement);
