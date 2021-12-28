/* exported Student */
function Student(firstName, lastName, subject) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.subject = subject;
}

function getFullName() {
  this.getFullName = function () {
    var fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  };
}

var $student = new Student('DJ', 'Catan', 'JavaScript');
$student.getFullName();
console.log($student);

Object.setPrototypeOf(Student, getFullName());
