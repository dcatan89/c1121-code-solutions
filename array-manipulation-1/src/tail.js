/* exported tail */
/* -Make storage
First find the length of the array
-Go through the list  after the first entry in order and store the list
-Return the output of the list */

function tail(array) {
  var noZeroIndex = [];
  for (var i = 1; i < array.length; i++) {
    noZeroIndex.push(array[i]);
  }
  return noZeroIndex;

}
