/* exported swapChars */
// Make storage for the output
// Check to see where the firstIndex is then replace with the second index and store it
// add the rest of the string before and after the secondIndex and store it
// Return the storage as the output
function swapChars(firstIndex, secondIndex, string) {
  var revengeOfSith = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      revengeOfSith += string[secondIndex];
    } else if (i !== secondIndex) {
      revengeOfSith += string[i];
    } else { revengeOfSith += string[firstIndex]; }
  }
  return revengeOfSith;
}
