/* Fonction argument dans une autre fonction*/

function addTwo(number){
    return number + 2;
}

function myFunction(argFunction, number2) {
    var x = argFunction(number2);
    console.log(x);
}

myFunction(addTwo, 5);

/* une fonction qui retourne une autre fonction*/

function myFunction() {
   return function(number){
    return number*2;
   }
}
console.log(myFunction);
console.log(myFunction());
console.log(myFunction()(3));

