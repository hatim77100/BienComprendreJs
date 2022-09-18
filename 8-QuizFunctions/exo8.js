const module1 = (function () {
 
    let myAge = 32;
  
    function setAge(newAge) {
       myAge = newAge;
    }
  
    function getAge() {
       return myAge;
    }
  
    return {
       getAge: getAge,
       setAge: setAge
    }
  
 })();
  
 console.log(module1.getAge());
 module1.setAge(42);
 console.log(module1.getAge());