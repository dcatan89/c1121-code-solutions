/* exported student */
var student = {
  firstName: 'DeeJay',
  lastName: 'Catan',
  subject: 'JavaScript',
  getFullName: function () {
    var fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  },
  getIntroduction: function () {
    return 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
  }
};
