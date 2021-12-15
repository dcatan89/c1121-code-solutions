/* exported capitalizeWords */

function capitalizeWords(string) {
  var yesCapitalize = '';

  for (var i = 1; i < string.length; i++) {
    if (string[i - 1] === ' ') {
      yesCapitalize += string[i].toUpperCase();
    } else if (string[i - 1] !== ' ') {
      yesCapitalize += string[i].toLowerCase();
    } else { yesCapitalize += string[i]; }
  }
  return string[0].toUpperCase() + yesCapitalize;
}
