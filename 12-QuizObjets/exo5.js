function Dog(name, color){
    this.name = name;
    this.color = color;
  }
   
  Dog.prototype.aboie = function() { 
    console.log("Wouaf Wouaf " + this.name);
  };
   
  const choupette = new Dog("Choupette", "white");
  const rocky = new Dog("Rocky", "black");
   
  console.log(choupette.__proto__ === rocky.__proto__);
  console.log(choupette.__proto__ === Dog.prototype);