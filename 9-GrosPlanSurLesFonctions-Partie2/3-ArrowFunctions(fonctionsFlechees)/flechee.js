/*syntax

arg => arg * 5 

*/

const myFunction = (arg, arg2 ) => arg * arg2;

console.log(myFunction(2, 10));

const me = {
    name : "Hatim",
    presentFreind : function (freind) {
        return "tu connais " + freind + " ?";
    }
}
console.log(me.presentFreind("kevin"));

const me2 = {
    name : "Hatim",
    presentFreind : freind => 
         "tu connais " + freind + " ?"
    
}
console.log(me2.presentFreind("kevin"));