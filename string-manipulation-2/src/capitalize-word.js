/* exported capitalizeWord */
/* Make storage  to include characters after the first
-make storage to only include the first character
-check if the word is javascript
  -if true return the output as Javascript
-check if the word has any capital letters one by one, this will start after the first letter
  if true add the letter to the storage and repeat the process
  if false add the letter to the storage and repeat the process
-once all letters have been looked at return the output capitalizing the first letter
then lowercasing the rest of the letters
*/
function capitalizeWord(word) {
  var capitalizedWord = '';
  var firstOne = word[0];
  if (word.toUpperCase(word) === 'JAVASCRIPT') {
    return 'JavaScript';
  }

  for (var i = 1; i < word.length; i++) {
    capitalizedWord += word[i];
  }
  return firstOne.toUpperCase() + capitalizedWord.toLowerCase();
}
