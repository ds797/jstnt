let array = [1, 2, 3];

console.log(array); // [1, 2, 3]

array = [...array, 4];

console.log(array); // [1, 2, 3, 4]

[first, ...array] = array;

console.log(array); // [2, 3, 4]
