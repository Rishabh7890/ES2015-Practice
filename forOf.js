// jshint esversion: 6

// for of is very useful for iterating over values in an array

const arr = [1, 2, 3, 4, 5];

for (let num of arr) {
  console.log(num);
}

// important to note for of loops can't access an index
// can only be used on data structures with a Symbol.iterator method implemented (no objects)
