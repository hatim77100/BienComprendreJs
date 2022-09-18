const f1 = a => b => a(b);
 
const f2 = c => c * 2;
 
console.log(f1(f2)(3));