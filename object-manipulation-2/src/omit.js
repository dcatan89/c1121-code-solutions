/* exported omit */
// Make storage for the output
// check each value of the array and see if it matches the properties of the source.
// if a property matches an array value, omit the properties and store the remain propeties into storage
// check for edge cases such as null, undefined, or empty object literals.
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
