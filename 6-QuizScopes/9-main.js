const c = 3;
function f1(a) {
  if(a > 5) {
    let b = c;
    c++;
  }
  else {
    let b = a;
    a++;
  }
  console.log(a);
  console.log(b);
  console.log(c);
} 
f1(c);

/*MEMOIRE
VO GLOBAL:
-f1
-c : 3

VO f1:
-a : 3++ c-à-d 4 on rentre pas dans ce bloc car a < 5

bloc else
-b : 3

resultat:
4
b is not defined


*/