/* exported numVowels */
/* We need to make storage for the vowels as well as the non vowels.
-Make sure we can check the edge check the edge cases
-We will need to check each character and store every vowel in one storage
-We also check every non vowel into a separate storage.
-Return the storage with the strings */
function numVowels(string) {
  var numberStore = 0;
  var capitalized = string.toUpperCase();

  if (string.length === 0) {
    return 0;
  }
  for (var i = 0; i < string.length; i++) {
    if (capitalized[i] === 'A' || capitalized[i] === 'E' ||
      (capitalized[i]) === 'I' || capitalized[i] === 'O' ||
      capitalized[i] === 'U') {
      numberStore++;
    } else { numberStore += 0; }
  }
  return numberStore;
}
