function f1() {
    return function(number) {
      for(let i = 0 ; i < number; i++){
        console.log(i);
      }
    }
  }
   
  const f2 = function(func) {
    return func();
  }
   
  const t = f2(f1); // t exécute f2 sur f1 => t = f1
  t(3);
  
  
  
  
  
  