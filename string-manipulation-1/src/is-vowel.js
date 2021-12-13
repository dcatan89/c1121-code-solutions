/* exported isVowel */
/* -Check to see if the input is a vowel
  -if not, return false */

function isVowel(char) {
  var upperCased = char.toUpperCase();
  if ((upperCased === 'A') || (upperCased === 'E') || (upperCased === 'I') || (upperCased === 'O') ||
    (upperCased === 'U')) {
    return true;
  } else return false;
}
