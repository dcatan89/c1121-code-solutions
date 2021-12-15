/* exported capitalizeWords */
// make storage for the first Character of the string
// if true add the letter to the storage and repeat the process
// if false add the lowercased letter to the storage and repeat the process
// Return the storage of the first character added to the storage of the rest of the letters as output

function capitalizeWords(string) {
  var yesCapitalize = '';

  for (var i = 1; i < string.length; i++) {
    if (string[i - 1] === ' ') {
      yesCapitalize += string[i].toUpperCase();
    } else {
      yesCapitalize += string[i].toLowerCase();
    }
  }
  return string[0].toUpperCase() + yesCapitalize;

}
