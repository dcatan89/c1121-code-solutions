/* exported firstChars */
function firstChars(length, string) {
  var newSing = '';
  for (var i = 0; i < length; i++) {
    if (string.length <= length) {
      return string;
    } else {
      newSing += string[i];
    }
  }
  return newSing;
}
