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
   
  choupette.aboie();
  rocky.aboie();