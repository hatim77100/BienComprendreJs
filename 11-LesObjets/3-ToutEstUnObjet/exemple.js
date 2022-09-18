function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.present = function() {
    console.log("Hello! My name is " + this.name);
}

let john = new Person("John", 32);
let franck = new Person("Franck", 33);

// console.log(john.hasOwnProperty("name"));
// console.log(john.hasOwnProperty("color"));
// console.log(john);

const myObjet = {};

console.log(john.__proto__.__proto__ === myObjet.__proto__); 