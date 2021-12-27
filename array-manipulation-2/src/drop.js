/* exported drop */
// make a new array storage for the output
// check each value of the array and stop once the number of values checked reaches the count
// check to see if the count is greater than the values within the array
// if true return the array values as ouput
//  otherwise put the values into the new array and stop at the count
function drop(array, count) {
  var numberDrop = [];
  for (var i = 0; i < array.length - count; i++) {
    if (count > array.length) {
      return array;
    } else { numberDrop.push(array[i + count]); }
  }
  return numberDrop;
}
