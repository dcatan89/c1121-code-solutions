var num1 = 1;
var num2 = 2;
var num3 = 3;

var maximumValue = Math.max(num1, num2, num3);

console.log('Value of maximumValue:', maximumValue);

var heroes = ['superman', 'batman', 'flash', 'ash-ketchum'];

var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('Value of randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('Hero of the Day:', randomHero);

var library = [{ title: 'My Head Hurts', author: 'DJ Catan' }, { title: 'Make the Pain Stop', author: 'DJ' }, { title: 'Hello, WorlDarkness My Old Friend', author: 'DJ' }];

var lastBook = library.pop();

console.log('Value of lastBook:', lastBook);

var firstBook = library.shift();

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

console.log('Value of firstbook:', firstBook);

library.push(js);

library.unshift(css);

library.splice(1, 1);

console.log('This is the Library Array:', library);

var fullName = 'Dj Catan';

var firstAndLastName = fullName.split(' ');

console.log('Value of firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('Yell my name:', sayMyName);
