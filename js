// Idiomatic Array Operations

// Array
let array = [1, 2, 3];
console.log(array); // [1, 2, 3]

// Push
array = [...array, 4];
console.log(array); // [1, 2, 3, 4]

// Pop is currently impossible :(
// [...array, last] = array;
// console.log(array); // [1, 2, 3]
array.pop();

// Unshift
array = [0, ...array];
console.log(array); // [0, 1, 2, 3]

// Shift
[first, ...array] = array;
console.log(array); // [1, 2, 3]
