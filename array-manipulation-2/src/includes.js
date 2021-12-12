/* exported includes */
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
