function Dog(name, color){
    this.name = name;
    this.color = color;
  }
   
  Dog.prototype.aboie = function() { 
    console.log("Wouaf Wouaf " + this.name);
  };
   
  const choupette = new Dog("Choupette", "white");
  choupette.aboie();
   
  Object.prototype.aboie = function() { 
    console.log("Ouf Ouf " + this.name);
  };
  choupette.aboie();
   
  choupette.aboie = function() {
    console.log("Af Af " + this.name);
  };
  choupette.aboie();
  
  
  
  