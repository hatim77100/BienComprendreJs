const a = 5;
function f1() {
  const b = 6;
  console.log(a + b);
  f2();

  function f2() {
    const c = 7;
    console.log(a + b + c);
    f3();
    function f3() {
      const d = 8;
      console.log(a + b + c + d);
    }
  }
}
f1();

/*MEMOIRE DE JS
VO GLOBAL : contexte d'exécution global
-f1:
-a : 5

VO f1: un nouveau contexte d'exécution 
-f2:
-b : 6

vo f2: un nouveau contexte d'exécution
-f3:
-c : 7

vo f3: un nouveau contexte d'exécution
-d : 8

11
18
26
*/
