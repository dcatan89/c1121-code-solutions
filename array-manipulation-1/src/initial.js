/* exported initial */
/* -Make storage
First find the length of the array
-Go through the list  each entry in order and store the output of each into the storage
-Stop before the last value of the list.
-Return the output of the list */

function initial(array) {
  var noNum2 = [];
  for (var i = 0; i < array.length - 1; i++) {
    noNum2.push(array[i]);
  }
  return noNum2;

}
