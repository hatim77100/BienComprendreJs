let a = 6;
const b = 7;
var c = 8;

const f1 = function(a,b,c) {
    a = 16;
    b = 17;
    c = 18;
    console.log(a);
    console.log(b);
    console.log(c);
}

f1(a,b,c);

console.log(a);
console.log(b);
console.log(c);

/* Memoire

VO Global ou scope: 
-c : au début il vaut indefined, mnt vaut (8).
-b :   7. 
-a :   6.
-f1

VO f1: on va voir son contexte d'exécution.
-a : 6                                          -a : 16
-b : 7  => Maintenant on exécute la fonction => -b : 17
-c : 8      etape par étape                     -c : 18

*/