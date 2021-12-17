/* exported pick */
// make storage for the output
// check if the array values are properties in the object
// Check ove3r each value one by one to see if key is a property
// if true store the source.key[key[i]]
//  if true store the object property and values.
//  if false ,return and do not include it in the array.
// Return the storage as output,

function pick(source, key) {
  var objectOutput = {};
  for (var i = 0; i < key.length; i++) {
    if (!source[key[i]]) {
      key[i] = false;
    } else {
      objectOutput += source.key[i];
      source.key[i] = i + 1;
    }
  }

  return objectOutput;
}
