class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    present() {
        console.log("Mon nom est " + this.name);
    }
}

let john = new Person("John", 32);
let hatim = new Person("hatim", 40);

hatim.present();
john.present();
console.log(hatim);
console.log(john.present === hatim.present);




// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.present = function() {
//         console.log("Mon nom est " + this.name);
//     }
// }
