
var a = 5;
f1(18);
console.log(a);

function f1(x) {
    x = a;
    a = 9;
    console.log(x);
    console.log(a);
}

/* MEMOIRE

VO global:
- f1
- a: 9

VO f1:
-x: 5

*/