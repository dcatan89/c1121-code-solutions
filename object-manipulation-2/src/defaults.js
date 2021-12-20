/* exported defaults */
// -Check to see one by to see if there are any matching properties between target object and source object
//  -If there are any, replace the properties that match from source to be the same as the target object
//  -replace and combine the two objects by keeping the values of target and then adding new ones from source
// console log the new object literal of target
function defaults(target, source) {
  var newObj = {};

  for (var prop in source) {
    if (source[prop]) {
      newObj[prop] = source[prop];
    }
  }

  for (prop in target) {
    if (target[prop]) {
      newObj[prop] = target[prop];
    }
  }

  console.log(newObj);
}
