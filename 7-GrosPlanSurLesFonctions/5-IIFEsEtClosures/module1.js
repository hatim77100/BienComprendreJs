// const getPassword = (function(){

//     var myPassword ="12345";
    
//     (function setPassword(newPassword) {
//         myPassword = newPassword;
        
//     })
//     return function(){
//         return myPassword
//     }
// })();

//rendre une partie public de la fonction: on ajoute un objet pour cela

const module1 = (function(){

    var myPassword ="12345";
    
    (function setPassword(newPassword) {
        myPassword = newPassword;
        
    })
   function getPassword(){
        return myPassword;
    }
    return {
        getPassword : getPassword
    }

})();



