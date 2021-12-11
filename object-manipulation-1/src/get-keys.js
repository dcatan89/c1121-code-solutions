/* exported getKeys */
/* Make a storage for the output
- first we need to check the property of the object
one by one until there are no more properties.
-then put the properties in the storage
-return the storage as the output */

function getKeys(object) {
  var keyskeyseys = [];
  for (var property in object) {
    keyskeyseys.push(property);
  }
  return keyskeyseys;
}
