console.log('Hello, World!');

var $h1 = document.querySelector('h1');

console.log('Heading:', $h1);

console.dir($h1);

var $explanation = document.querySelector('#explanation');

console.log('Class:', $explanation);

console.dir($explanation);

var $class = document.querySelector('.hint');
console.log('Class name:', $class);

console.dir($class);

var peel = document.querySelectorAll('p');
console.log('All p Elements:', peel);

var examplesLink = document.querySelectorAll('.example-link');
console.log('All examples:', examplesLink);
