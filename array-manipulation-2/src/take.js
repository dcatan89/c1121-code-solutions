/* exported take */
// Create storage for a new array
// Check to each value one by one to see if the the amount count is larger than the array size
//  if true return the array value
//  Otherwise count how many values of the array is compared to the given count then store it
// return the storage as output
function take(array, count) {
  var newArr = [];
  for (var i = 0; i < count; i++) {
    if (count > array.length) {
      return array;
    } else { newArr.push(array[i]); }
  }
  return newArr;
}
