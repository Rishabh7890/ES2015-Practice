// jshint esversion: 6

// destructuring means extracting values from data stored in objects and arrays

const person = {
  firstName: "Rishabh",
  lastName: "Goel"
};

// destructuring obj for values
const { firstName, lastName } = person;

console.log(firstName); // Rishabh
console.log(lastName); // Goel

// if we want to have different names than those of keys in object
const { firstName: first, lastName: last } = person;

console.log(first); // Rishabh
console.log(last); // Goel

// a more complex example with objects
// passing in a destructured object as a default parameter
// we assign as a default value an empty object so ES2015 knows we are destructuring
// if nothing is passed in, we default to the destructured object as the param
function createPerson({
  name = { first: "Rishabh", last: "Goel" },
  isAlive = true
} = {}) {
  return [name.first, name.last, isAlive];
}

// Destructuring Arrays

// Old way
const arr = [1, 2, 3];

const a = arr[0];
const b = arr[1];
const c = arr[2];

// New way
const [d, e, f] = arr;

// Swapping values
function swap(a, b) {
  return ([a, b] = [b, a]);
}

console.log(swap(3, 4)); // [4,3]
