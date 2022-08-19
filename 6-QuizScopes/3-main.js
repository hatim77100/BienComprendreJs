let a = 6;
const b = 7;
var c = 8;

const f1 = function(b,c) {
    a = 16;
    b = 17;
    c = 18;
    console.log(a);
    console.log(b);
    console.log(c);
}
f1(b,c);
console.log(a);
console.log(b);
console.log(c);

/*
VO Global:
-c : 8
-a : 16
-b : 7
-f1

Vo f1: (son contexte d'exécution)
 -b : 17
 -c : 18
    

*/