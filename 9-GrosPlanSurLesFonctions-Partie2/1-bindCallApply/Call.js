function multiply(number1, number2) {
    console.log(this);
    console.log(number1 * number2); 
}

const moi = {
    name : "John"
};

multiply(2, 3);

// multiply.bind(moi, 3, 5)();

/* call exécute multiply en lui fixant le premier argument la valeur de this
 qui est moi ici et après on lui a fixé les arguments 2 et 3 */

multiply.call(moi, 3, 5);

//  La methode Apply;
multiply.apply(moi,[3, 5]);
