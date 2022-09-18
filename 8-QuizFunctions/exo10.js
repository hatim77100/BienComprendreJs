var name = "John";
 
(function() {
    console.log("My name is " + name);
    var name = "Kevin";
})();

/* MEMOIRE
VO global: 
 -name: John

VO IIFI:
 -name : undefined
 - 

*/