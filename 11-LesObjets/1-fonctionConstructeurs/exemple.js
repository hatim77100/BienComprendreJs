function Person(name, age) {
    this.name = name;
    this.age = age;
    this.present = () => {console.log("Hello! My name is " + this.name);}
}

let john = new Person("John", 32);
let franck = new Person("Franck", 33);

console.log(john);
console.log(franck);
console.log(john.present === franck.present);
john.present();
franck.present();

