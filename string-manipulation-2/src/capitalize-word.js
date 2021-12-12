/* exported capitalizeWord */
/* Make storage  to include characters after the first
-make storage to only include the first character
-check if the word is javascript
  -if true return the output as Javascript
-check if the word has any capital letters one by one, this will start after the first letter
  if true add the letter to the storage and repeat the process
  if false add the letter to the storage and repeat the process
-
*/
function capitalizeWord(word) {
  var yesSir = '';
  var firstOne = word[0];
  for (var i = 1; i < word.length; i++) {

    if (word.toUpperCase(word) === 'JAVASCRIPT') {
      return 'JavaScript';
    } else if (word[i] === word.toUpperCase(i)) {
      yesSir += word[i];
    } else { yesSir += word[i]; }
  }
  return firstOne.toUpperCase() + yesSir.toLowerCase();
}
