
function Student(firstName, lastName, subject) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.subject = subject;
}

var $student = new Student('DJ', 'Catan', 'JavaScript');

Student.prototype.getFullName = function () {
  var fullName = this.firstName + ' ' + this.lastName;
  return fullName;
};

Student.prototype.getIntroduction = function () {
  var description = 'Hello, my name is ' + this.getFullName() + ' and I am studying ' +
      this.subject + '.';
  return description;
};
