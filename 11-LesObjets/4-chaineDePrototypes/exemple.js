function Person(name, age) {
    this.name = name;
    this.age = age;
    this.present = function() {
        console.log("Mon nom est " + this.name);
    }
}
let john = new Person("John", 32);
console.log(john.hasOwnProperty("name"));

Person.prototype.hasOwnProperty = function(str) {
    return str + " : " + str;
}

console.log(john.hasOwnProperty("name"));
// Person.prototype.present = function() {
//     console.log("Hello! My name is " + this.name);
// }

// john.present();


// L'ordre de la chaine des prototypes
/** john --> Person.prototype --> object.prototype --> null */
