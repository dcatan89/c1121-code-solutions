/* exported getWords */
/* - Make Storage for the words
 -Check one by one to see if the word has a space
    -if the word does not have a space then put the words in the storage

    -if there is no word, store an empty storage

    -return the output of the storage */

function getWords(words) {
  if (words !== '') {
    return words.split(' ');
  }
}
