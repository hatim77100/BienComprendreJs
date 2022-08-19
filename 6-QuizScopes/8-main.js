var a = 1;
let b = 2;
{
    a = 3;
    b = 4;
    var c = 5;
    let d = 6;
}
console.log(a);
console.log(b);
console.log(c);
console.log(d);

/*MEMOIRE
VO global:
-a : 3
-c : 5
-b : 4

Bloc
-d : 6

3
4
5
d is not defined

*/