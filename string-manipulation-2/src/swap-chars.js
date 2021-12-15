/* exported swapChars */
// Make storage for the output
// Check to see where the firstIndex is then replace with the second index and store it
// add the rest of the string before and after the secondIndex and store it
// Return the storage as the output
function swapChars(firstIndex, secondIndex, string) {
  var swappedChars = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      swappedChars += string[secondIndex];
    } else if (i !== secondIndex) {
      swappedChars += string[i];
    } else { swappedChars += string[firstIndex]; }
  }
  return swappedChars;
}
