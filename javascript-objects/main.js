var student = {
  firstName: 'DJ',
  lastName: 'Catan',
  age: 27
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'lab technician';

console.log('value of student.livesInIrvine:', student.liveInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Toyota',
  model: 'Camry',
  year: 2021
};

vehicle['color'] = 'silver';
vehicle['isConvertible'] = false;
console.log('value of vehicle[color]:', vehicle['color']);
console.log('value of vehincle[isConvertible]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Peaches',
  type: 'Pitbull'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
