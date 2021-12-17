var booksArray = [
  {
    title: 'Blue Fish',
    author: 'Dr.Seuss',
    isbn: '9780375833878'
  },

  {
    title: 'Curious George',
    author: 'Rey, Margret',
    isbn: '9780544763487'
  },

  {
    title: 'Clifford the Big Red Dog',
    author: 'Norman Bridwell',
    isbn: '0545215781'
  }

];

console.log('BooksArray:', booksArray);
console.log('typeof booksArray:', typeof booksArray);

JSON.stringify(booksArray);
console.log('JSON BooksArray:', JSON.stringify(booksArray));
console.log('typeof JSON:', typeof JSON.stringify(booksArray));

var student = '{"id": 1738, "name": "Dj Catan"}';

console.log('student:', student);
console.log('typeof student:', typeof student);

JSON.parse(student);
console.log(JSON.parse(student));
