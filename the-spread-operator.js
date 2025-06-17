/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let array1 = [1, 2, 3];
let array2 = array1; // array2 is a reference to array1
array2.push(4); // Modifying array2 also modifies array1
console.log(array1); // Output: [1, 2, 3, 4]
console.log(array2); // Output: [1, 2, 3, 4]

// Copying an array
let array3 = [4, 5, 6];
let array4 = [...array3]; // Using the spread operator to create a shallow copy --> array4 is a new array and not impact array3

array4.push(7); // Modifying array4 does not affect array3
console.log(array3); // Output: [4, 5, 6]
console.log(array4); // Output: [4, 5, 6, 7]

// Copying an object
let object1 = { a: 1, b: 2, c: 3 };
let object2 = { ...object1, d: 4 }; // Using the spread operator to create a shallow copy and add a new property 'd'
let object3 = { ...object1, b: 5 }; // Overriding property 'b' with a new value
console.log(object1); // Output: { a: 1, b: 2, c: 3 }
console.log(object2); // Output: { a: 1, b: 2, c: 3, d: 4 }
console.log(object3); // Output: { a: 1, b: 5, c: 3 }

// Copying only part of an array/object
let array5 = [...array1, {...object1}], ...array3, "x", "y", "z"]; // Using the spread operator to combine arrays and objects
console.log(array5); // Output: [1, 2, 3, { a: 1, b: 2, c: 3 }, 4, 5, 6, "x", "y", "z"]