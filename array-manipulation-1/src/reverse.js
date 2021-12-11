/* exported reverse */
/* Make storage space
-Then go through each value of the list and storing it in reverse order
-Stop once there is no more values
-Return output */

function reverse(array) {
  var reverseOfTheSith = [];

  for (var i = array.length - 1; i >= 0; i--) {
    reverseOfTheSith.push(array[i]);
  }
  return reverseOfTheSith;
}
