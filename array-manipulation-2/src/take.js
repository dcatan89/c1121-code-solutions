/* exported take */
function take(array, count) {
  var newArr = [];
  for (var i = 0; i < count; i++) {
    if (count > array.length) {
      return array;
    } else { newArr.push(array[i]); }
  }
  return newArr;
}
