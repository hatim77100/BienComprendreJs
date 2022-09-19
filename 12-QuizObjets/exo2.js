function Dog(name, color){
    this.name = name;
    this.color = color;
    this.aboie = function() { 
      console.log("Wouaf Wouaf " + this.name);
    };
  }
   
  const choupette = new Dog("Choupette", "white");
  const rocky = new Dog("Rocky", "black");
  const aboie = choupette.aboie.bind(rocky);
   
  rocky.aboie.call(choupette);
  aboie();