function f1() {
    return function(number) {
      for(let i = 0 ; i < number; i++){
        console.log(i);
      }
    }
  }
   
  const f2 = function(func) {
    func();
  }
   
  const t = f2(f1); // tant que f2 ne retourne pas la fonction t il reçois rien, il est vide
  t(3);