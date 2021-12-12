/* exported swapChars */
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
