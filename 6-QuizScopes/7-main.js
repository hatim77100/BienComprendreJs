const a = 1;
if (a > 0) {
  const b = 2;
  console.log(a + b);
}
if (b > 1) {
  const c = 3;
  console.log(a + b + c);
}

/*MEMOIRE
VO GLOBAL:
-a : 1

bloc if (a>0):
-b : 2

bloc if (b>1)
- ce bloc il s'arrète là car le b n'est pas définit

resultat:
3
b is not defined

*/ 
