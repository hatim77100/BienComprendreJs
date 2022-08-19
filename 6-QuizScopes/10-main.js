const a = 5;
if(a > 2) {
    var b = 10 + a;
    let c = 20 + a;
}
console.log(a + b);
console.log(a + c);

/* MEMOIRE
VO GLOBAL correspond au scope de fonction
-b : 15
-a : 5

bloc if(a>2)
-c : 25

20
c is not defined
*/