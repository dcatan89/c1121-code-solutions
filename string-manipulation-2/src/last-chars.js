/* exported lastChars */
function lastChars(length, string) {
  var lastSkyChar = '';
  for (var i = string.length - length; i < string.length; i++) {

    if (length > string.length) {
      return string;
    } else {
      lastSkyChar += string[i];
    }
  }
  return lastSkyChar;
}
