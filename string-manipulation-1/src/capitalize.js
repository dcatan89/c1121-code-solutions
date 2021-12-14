/* exported capitalize */
/* -Identify what the string is
  -Store the first character
  -Make storage for an empty container
  -Check characters one by one after starting from the second character to see if it caplitalized
    -if true, change all characters that are not the first into lowercase
    then store the  value of the word

    -return value of the storaged word back with only the first charcater capitalized to the rest of the lowercased characters */

function capitalize(word) {
  var words = word[0];
  var rest = '';
  for (var i = 1; i < word.length; i++) {

    rest += word[i];
  }
  return words.toUpperCase() + rest.toLowerCase();
}
