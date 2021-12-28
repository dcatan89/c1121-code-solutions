/* exported invert */
// create a storage for the output as an empty object literal
//  loop through all the properties from the given source
//  take the properties and assign them to values by switching them and put them into
// the new storage
// return the storage as output
function invert(source) {
  var inverted = {};
  for (var prop in source) {
    inverted[source[prop]] = prop;
  }
  return inverted;
}
