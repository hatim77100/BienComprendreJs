/* Les closures ce sont des fonctions qui ont enfermés avec elle des variables qui lui sont externe, 
elles enferment avec elles des variables qui provient des scopes parents*/

// Exemple:

function multiplyBy(number) {
    const closedVariable = number;
    return function(anotherNumber){
        return closedVariable * anotherNumber; 
    }
}

const multiplyByFive = multiplyBy(5);

console.log(multiplyBy);
console.log(multiplyByFive);
console.log(multiplyByFive(2));
console.log(multiplyByFive(3));
