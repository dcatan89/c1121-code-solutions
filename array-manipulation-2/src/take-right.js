/* exported takeRight */
// Make new storage for the output
// check the array one by one starting from  the array length minus the count given
// check until the end
// If the count is undefined or greater than the length return the values of the array as output
// Otherwise store the values checked from the starting point to the end
// return the storage as output
function takeRight(array, count) {
  var newArr = [];
  for (var i = array.length - count; i < array.length; i++) {
    if (count > array.length || array === 'undefined') {
      return array;
    } else { newArr.push(array[i]); }
  }
  return newArr;
}
