/* exported numVowels */
function numVowels(string) {
  var numberStore = '';
  var numberWaste = '';
  for (var i = 0; i < string.length; i++) {
    if ((string[i].toUpperCase()) === 'A' || (string[i].toUpperCase()) === 'E' ||
      (string[i].toUpperCase()) === 'I' || (string[i].toUpperCase()) === 'O' ||
      (string[i].toUpperCase()) === 'U') {
      numberStore++;
    } else if ((string[i].toUpperCase()) !== 'A' || (string[i].toUpperCase()) !== 'E' ||
      (string[i].toUpperCase()) !== 'I' || (string[i].toUpperCase()) !== 'O' ||
      (string[i].toUpperCase()) !== 'U' || string[i] === ' ') {
      numberWaste++;
    } else { return string.length - 1; }
  }
  return numberStore;
}
