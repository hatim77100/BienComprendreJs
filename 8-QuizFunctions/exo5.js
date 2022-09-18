const arrayFunc = [];
 
for(var i = 0 ; i < 3 ; i++){
  arrayFunc.push(function() {
    console.log(i);
  });
}
for(var j = 0 ; j < arrayFunc.length ; j++){
  arrayFunc[j]();
}