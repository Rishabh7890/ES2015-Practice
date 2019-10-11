// jshint esversion: 6

// replace the keyword function with =>

// old way
var add = function(a, b) {
  return a + b;
};

// new way
const addES6 = (a, b) => {
  return a + b;
};

// to simpilfy even further to only one line
// we must omit return keyword as well as curly braces
const addSingleLine = (a, b) => a + b;

// common for short functions and higher order functions

// example using map
[1, 2, 3].map(num => num * 2);

// another example using map and filter
const doubleAndFilter = arr =>
  arr.map(num => num * 2).filter(num => num % 3 === 0);

// one MAJOR difference btwn arrow functions and reg functions is that arrow functions dont get their own 'this' keyword
// Inside an arrow function, this has a new, original meaning
// the keyword 'this' refers to its enclosing context in arrow functions
const instructor = {
  firstName: "Rishabh",
  sayHi: function() {
    // we don't use arrow above because if we did sayHi will not have its own keyword 'this'. It wont refer to instructor obj anymore but rather global scope
    setTimeout(() => {
      console.log(`Hello ${this.firstName}`);
    }, 1000);
  }
};

instructor.sayHi(); // "Hello Rishabh", whereas in a reg function we would get "Hello undefined" unless using bind

// another difference is that arrow functions dont get their own keyword 'arguments' either, so you can't just return arguments
// if we want to use arguments keyword we need t enclose arrow function within a regular function and it will inherit the outer function's arguments
function outer() {
  return (inner = () => {
    return arguments;
  });
}

console.log(outer(3)(5)); // will only print out 3

// Cases when arrow functions should NEVER be used are:
// - As methods in objects since we will get incorrect value of keyword this. A solution is rest keyword in es6
