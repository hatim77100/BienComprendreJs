const arrayFunc = [];
 
for(let i = 0 ; i < 3 ; i++){
  arrayFunc.push(function() {
    console.log(i);
  });
}
for(let j = 0 ; j < arrayFunc.length ; j++){
  arrayFunc[j]();
}