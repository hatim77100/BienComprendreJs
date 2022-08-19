const a = 5;
function f1() {
    const b = 6;
    console.log(a + b);
    f2();

    function f2() {
        const c = 7;
        console.log(a + b + c);
        f3();
    }
}
function f3() {
    const d = 8;
    console.log(a + b + c + d);
}
f1();

/*MEMOIRE
VO GLOBAL:                                              11
-f1:                                                    18
f3:                                             b is not defined      
-a : 5

VO f1 :
-f2
-b : 6

VO f2:
-f3:
-c : 7

VO f3:
-d : 8;

*/
