/* exported getValues */
/* Make storage
Go through each property name of the object to see if there is a value
-for every property with a value store it in the storage one by one
return the output of the storage
*/

function getValues(object) {
  var greatFreakinValue = [];
  for (var property in object) {
    greatFreakinValue.push(object[property]);
  }
  return greatFreakinValue;
}
