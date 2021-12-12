/* exported lastChars */
function lastChars(length, string) {
  var lastSkywalker = '';
  for (var i = string.length - length; i < string.length; i++) {

    if (length > string.length) {
      return string;
    } else {
      lastSkywalker += string[i];
    }
  }
  return lastSkywalker;
}
