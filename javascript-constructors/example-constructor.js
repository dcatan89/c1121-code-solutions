function ExampleConstructor() {

}

console.log('value of ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var exConstructor = new ExampleConstructor();

console.log('exConstructor value:', exConstructor);

var instanceOfExConstructor = exConstructor instanceof ExampleConstructor;
console.log('exConstructor instanceof ExampleCOnstructor:', instanceOfExConstructor);
