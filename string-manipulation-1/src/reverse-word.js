/* exported reverseWord */
/* -make an empty storage space
- You want to start from the last character of the word and look at each one
    - add that chracater going from the end of the word back to the first character
    store and add the letters in the order they are looked at
    then return the result. */

function reverseWord(word) {
  var reversed = '';
  for (var i = word.length - 1; i >= 0; i--) {

    reversed += word[i];
  }
  return reversed;
}
