function f1() {
  return function (number) {
    return number * (number - 1);
  };
}

const f2 = function (func) {
  func();
};

f2(function() {
  console.log("Hello");
});
console.log(f1()(3));
