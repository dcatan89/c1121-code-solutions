/* exported ransomCase */

/* - Make Storage
-Check each letter starting from the first to see if it is an even or odd
  -if even add the lowercase value into the storage
  -if odd, add the uppercase value into the storage one after the other
  -Return the output of the storage. */

function ransomCase(string) {
  var giveMeUr$ = '';
  for (var i = 0; i < string.length; i++) {

    if ((i % 2) === 0) {
      giveMeUr$ += string[i].toLowerCase();

    } else {
      giveMeUr$ += string[i].toUpperCase();
    }
  }
  return giveMeUr$;
}
