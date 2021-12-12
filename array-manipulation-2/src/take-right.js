/* exported takeRight */
function takeRight(array, count) {
  var newArr = [];
  for (var i = array.length - count; i < array.length; i++) {
    if (count > array.length || array === 'undefined') {
      return array;
    } else { newArr.push(array[i]); }
  }
  return newArr;
}
