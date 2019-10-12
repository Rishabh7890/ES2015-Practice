// jshint esversion: 6

// rest always returns an array
// is called rest only when it is a parameter to a function
// is accessed with "..." in a function
// better alternative to using the arguments array-like-object

function printRest(a, b, ...c) {
  console.log(a); // 1
  console.log(b); // 2
  console.log(c); // [3,4,5]
}

printRest(1, 2, 3, 4, 5);

// an example replacing arguments array-like-object
const sumArgs = (...args) => args.reduce((acc, next) => acc + next);

// when '...' is used outside of a function not as params, it is called spread operator
// used on arrays to spread each value out (as a comma seperated value)
// useful when you have an array, but what you are working with expects comma seperated values

// example below has 3 seperate arrays we want to put together
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const combined = [...arr1, ...arr2, ...arr3];
console.log(combined); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// Using spread instead of apply
// when you have an arr of values but are trying to invoke a function which accepts each value individually

// example below is of Math.max() which does not take in arrays
// we can fix by using spread
console.log(Math.max(...arr3)); // 9

// an example with a function that accepts 3 seperate values
const sumValues = (a, b, c) => a + b + c;
console.log(sumValues(...arr3)); // 24
