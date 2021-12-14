/* exported getWords */
/* -
 -Check if there is spaces in the word
    -if there is a space, split the words by its name and store them in order
    -if the word does not have a space then put the words in the storage

    -if there is no word, store an empty array
    -return the output of the storage */

function getWords(words) {
  var wordBox = words.split(' ');
  if (words === '') {
    return [];
  }

  return wordBox;
}
