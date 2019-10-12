// jshint esversion: 6

// Object shorthand notation
// if keys and values have same name then we do not have to repeat decleration

const firstName = "Rishabh";
const lastName = "Goel";

// Old way
const person = {
  firstName: firstName,
  lastName: lastName
};

// New way
const shorthandPerson = {
  firstName,
  lastName
};

// Writing succinct object methods
// No need to seperate key and value of method
// careful not to use arrow functions or function keyword
// Old way
const oldMethodOnObj = {
  sayHi: function() {
    console.log("Hi!");
  }
};

// New way
const newMethodOnObj = {
  sayHi() {
    console.log("Hi!");
  }
};

// Computed Property Names

// Old way
const fName = "Rishabh";
const guy = {};
guy[fName] = "That's Me";

console.log(guy.Rishabh); // That's Me

// New Way... no need to create empty obj first. Just add brackets around name of key
const dude = {
  [fName]: "That's also me!"
};

console.log(dude.Rishabh); // That's also me!
