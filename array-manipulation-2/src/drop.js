/* exported drop */
function drop(array, count) {
  var micDrop = [];
  for (var i = 0; i < array.length - count; i++) {
    if (count > array.length) {
      return array;
    } else { micDrop.push(array[i + count]); }
  }
  return micDrop;
}
