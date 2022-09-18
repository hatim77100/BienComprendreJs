function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.present = function() {
    console.log("Hello! My name is " + this.name);
}

let john = new Person("John", 32);
let franck = new Person("Franck", 33);

console.log(john.__proto__ === Person.prototype);
john.present();
franck.present();


console.log(john);
// console.log(franck);
// console.log(john.present === franck.present);