// le contexte d'exécution là c'est l'objet global(window côté navigateur)
// console.log(this);

// function first() {
//   function second() {
//     console.log(this);
//   }
//   second();
// }
// first();

function first() {
  console.log(this);
}

// const me = {
//     name: "Hatim",
//     present: first
// };
// me.present();

const me = {
  name: "Hatim",
  present: function () {
    console.log(this);
    function insideFunction() {
      console.log(this);
    }
    insideFunction();
  },
};
me.present();
