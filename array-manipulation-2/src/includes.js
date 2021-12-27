/* exported includes */
// First we define a variable and set it as a false value
// check one by one through the array to see if it matches the value given
// if the value is null or if the value is not in the array, then the output is false
// if the value given is in the array, then return true as the output.
// if return the value of the variable if none of the array values are matched with the value given.

function includes(array, value) {
  var numberWaste = false;
  for (var i = 0; i < array.length; i++) {
    if (value === null) {
      numberWaste = false;
    } else if (array[i] !== value) {
      numberWaste = false;
    } else { return true; }
  }
  return numberWaste;
}
