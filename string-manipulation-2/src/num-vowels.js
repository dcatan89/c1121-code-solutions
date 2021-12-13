/* exported numVowels */
function numVowels(string) {
  var numberStore = '';
  var numberWaste = '';
  if (string.length === 0) {
    return 0;
  }
  for (var i = 0; i < string.length; i++) {
    if (((string[i].toUpperCase()) === 'A' || (string[i].toUpperCase()) === 'E' ||
      (string[i].toUpperCase()) === 'I' || (string[i].toUpperCase()) === 'O' ||
      (string[i].toUpperCase()) === 'U') && (string.length > 1)) {
      numberStore++;
    } else { numberWaste = false; }
  }
  return numberStore;
  return numberWaste;
}
