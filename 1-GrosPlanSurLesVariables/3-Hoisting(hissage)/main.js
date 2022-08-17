// ### Le hoisting des fonctions:

/*  javascript il prend les déclarations des fonctions et il les mets
 en haut et après il exécute le code*/

 // js il hisse que les déclarations de fonctions

addition(5,7);

function addition(a,b){
    console.log(a+b);
}

// 1er cas: ça ne fonction pas
// additions(5,7);
// var additions = function(a,b) {
//     console.log(a+b);    
// }

// 2ème cas: ça fonction
// var addition2 = function(a,b) {
//     console.log(a+b);    
// }
// addition2(5,7);

// ### Le hoisting des variables:

console.log(x);
var x = 5;