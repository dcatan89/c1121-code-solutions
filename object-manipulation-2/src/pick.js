/* exported pick */
// make storage for the output
// check if the array values are properties in the object
//  if true store the object property and values.
//  if false ,return and do not include it in the array.
// Return the storage as output,

function pick(source, key) {
  var objectOutput ={};
for (var prop in source) {
  for (var i = 0; i < key.length; i++) {
      if (source[key[i]] === key[i]) {
        objectOutput =
          key[i] : source[property];
      } else { false; }
    }
  }

  return objectOutput;
}
