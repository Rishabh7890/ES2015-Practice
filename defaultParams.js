// jshint esversion: 6

// another cool feature of es6 is that we can set def params to functions in case their is no input

function add(a = 2, b = 4) {
  return a + b;
}

console.log(add()); // 6 since nothing was inputted
console.log(add(8, 9)); // default values were changed since we inputted
