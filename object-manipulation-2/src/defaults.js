/* exported defaults */
// -Check to see one by to see if there are any matching properties between target object and source object
//  -If there are any, replace the properties that match from source to be the same as the target object
//  -replace and combine the two objects by keeping the values of target and then adding new ones from source
// console log the new object literal of target
function defaults(target, source) {
  var newObj = {};

  for (var prop in source) {
    if (source[prop] === target[prop] || target[prop] === null) {
      source[prop] = target[prop];

    } else if (!target[prop]) { target[prop] = source[prop]; }
  }
  return target;
}
