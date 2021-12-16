/* exported truncate */
/* Make storage for output
  - Check each value one step at a time
  to see where to stop the input.
    if the length of the value is longer than the number of characters,
    return the output as is from the input.
    -If not then, stop at the last character of the length then add an elypis
    at the end and storage the output.
    -Return the storage as the output of the function. */
function truncate(length, string) {
  var newString = '';
  for (var i = 0; i < length; i++) {
    if (string.length <= length) {
      return string + '...';
    } else {
      newString += string[i];
    }
  }
  return newString + '...';
}
