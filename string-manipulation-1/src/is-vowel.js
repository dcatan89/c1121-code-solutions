/* exported isVowel */
/* -Check to see if the input is a vowel
  -if not, return false */

function isVowel(char) {
  if ((char.toUpperCase(char) === 'A') || (char.toUpperCase(char) === 'E') || (char.toUpperCase(char) === 'I') || (char.toUpperCase(char) === 'O') ||
    (char.toUpperCase(char) === 'U')) {
    return true;
  } else return false;
}
