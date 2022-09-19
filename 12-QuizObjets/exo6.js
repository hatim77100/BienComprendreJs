function Dog(name, color){
    this.name = name;
    this.color = color;
  }
   
  Dog.prototype.aboie = function() { 
    console.log("Wouaf Wouaf " + this.name);
  };
   
  const choupette = new Dog("Choupette", "white");
  const myDog = {name: "Rocky"};
   
  console.log(choupette.__proto__ === myDog.__proto__);
  console.log(choupette.__proto__.__proto__ === myDog.__proto__);