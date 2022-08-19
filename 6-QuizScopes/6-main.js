const a = 1;
if (a > 0) {
  const b = 2;
  console.log(a + b);
  if (b > 1) {
    const c = 3;
    console.log(a + b + c);
  }
}

/* MEMOIRE DE JS
VO GLOBAL:
-a : 1

Bloc if(a>0):
-b : 2

Bloc if(b>1):
-c : 3

3
6

*/
