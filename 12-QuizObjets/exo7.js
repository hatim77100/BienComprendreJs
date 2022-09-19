function Dog(name, color){
    this.name = name;
    this.color = color;
  }
   
  Dog.prototype.aboie = function() { 
    console.log("Wouaf Wouaf " + this.name);
  };
   
  const choupette = new Dog("Choupette", "white");
  const myDog = {name: "Rocky"};
   
  Object.prototype.aboie = function() { 
    console.log("Ouf Ouf " + this.name);
  };
   
  choupette.aboie();
  myDog.aboie();
  choupette.__proto__.aboie.call(myDog);
  choupette.__proto__.__proto__.aboie.call(choupette);