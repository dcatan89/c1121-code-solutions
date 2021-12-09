/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var propertyNames = Object.getOwnPropertyNames(person);
  return person[propertyNames[0]] + ' ' + 'is a ' + person[propertyNames[1]] + ' ' + 'from ' + person[propertyNames[2]] + '.';
}
// still confused about this one, I had looked over multiple documentation but,
// I think I might be over thinking this one as I could not find how.
