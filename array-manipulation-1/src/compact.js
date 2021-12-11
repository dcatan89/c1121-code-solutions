/* exported compact */
/* Make storage space
- Go through each value of the array
-if the value holds false, delete the output into the storage

*/
function compact(array) {
  var hipHipArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!!array[i] === false) {
      delete array[i];
    } else { hipHipArray.push(array[i]); }
  }
  return hipHipArray;
}
