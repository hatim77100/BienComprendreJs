class Dog {
    constructor(name, color) {
      this.name = name;
      this.color = color;
    }
    aboie() { 
      console.log("Wouaf Wouaf " + this.name);
    }
  }
   
  const choupette = new Dog("Choupette", "white");
  const rocky = new Dog("Rocky", "black");
   
  console.log(choupette.__proto__=== rocky.__proto__);
  console.log(choupette.__proto__ === Dog.prototype);
  console.log(choupette.__proto__.__proto__ === Object.prototype);

//   Chaine des prototypes :

/* choupette ----> Dog.prototype ------> Objet.prototype  */ 

/* rocky ----> Dog.prototype ------> Objet.prototype  */ 