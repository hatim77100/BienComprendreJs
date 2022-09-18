//  Les methodes Bind Call et Apply permettent de controller la valeur de this:

// Bind permet de créer une nouvelle fonction à laquelle on va pouvoir fixer la valeur de this

function first() {
  console.log(this);
}
// first();

const me = {
  name: "Hatim",
  present: function () {
    console.log(this);
  },
};

const second = first.bind(me);
// second();

const third = me.present.bind(window);
// third();

function multiply(number1, number2) {
    return number1 * number2;
}

const multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(9));
