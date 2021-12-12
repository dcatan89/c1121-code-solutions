/* exported capitalizeWords */
function capitalizeWords(string) {
  var yesMam = '';

  for (var i = 1; i < string.length; i++) {
    if (string[i - 1] === ' ') {
      yesMam += string[i].toUpperCase();
    } else if (string[i - 1] !== ' ') {
      yesMam += string[i].toLowerCase();
    } else { yesMam += string[i]; }
  }
  return string[0].toUpperCase() + yesMam;
}
