/* exported tail */
/* -Make storage
First find the length of the array
-Go through the list  after the first entry in order and store the list
-Return the output of the list */

function tail(array) {
  var noNum1 = [];
  for (var i = 1; i < array.length; i++) {
    noNum1.push(array[i]);
  }
  return noNum1;

}
