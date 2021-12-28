/* exported omit */
// Make storage for the output
// check each value of the array and see if it matches the properties of the source.
// if a property does not match an array value, omit the properties and store the remaining propeties into storage
// return the storage as output
function omit(source, key) {
  var objectOutput = {};
  for (var i = 0; i < key.length; i++) {
    for (var prop in source) {
      if (prop !== key[i] && prop !== key[i + 1] && prop !== key[0]) {
        objectOutput[prop] = source[prop];
      }
    }
  }
  return objectOutput;
}
