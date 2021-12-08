/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
var description = Symbol(person).description;
return description;
