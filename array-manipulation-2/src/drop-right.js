/* exported dropRight */
function dropRight(array, count) {
  var dripRight = [];
  for (var i = 0; i < array.length - count; i++) {
    if (count > array.length) {
      return array;
    } else { dripRight.push(array[i]); }
  }
  return dripRight;
}
