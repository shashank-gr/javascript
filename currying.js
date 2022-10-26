function add(a, b) {
  return a + b;
}

//currying using bind
const add2 = add.bind(this, 2);
// console.log(add2(5));

//curring using colsure
const multiply = function (a) {
  return function (b) {
    // console.log(a, b);
    return a * b;
  };
};
const multiplyByTwo = multiply(2); //it has the inner function stored;
console.log(multiplyByTwo(10)); //10 is being passed to the inner function;

console.log(multiply(2)(30)); //2 is sent to first function argument & 30 is sent to second function argument
