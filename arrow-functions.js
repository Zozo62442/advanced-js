/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a, b) {
//     // Code block
//     // This function takes two numbers and returns their sum
//     return a + b;
// }
// let sum = addTwoNumbers(5, 10);
// console.log(sum); // Output: 15

// Arrow Function With Parameters
const addTwoNumbers = (a, b) =>{
    // Code block
    // This function takes two numbers and returns their sum
    return a + b;
}
let sum = addTwoNumbers(5, 10);
console.log(sum); // Output: 15

// Single Line Arrow Function With Parameters
// const addTwoNumbers2 = (a, b) => (a + b); also Valid
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(5, 10);
console.log(sum2); // Output: 15

// Implicit Returns
const saySomething = message => console.log(message); // Single parameter, no parentheses needed
saySomething("Hello, World!"); // Output: Hello, World!

const sayHello = () => console.log("Hello, World!"); // No parameters, empty parentheses needed
sayHello(); // Output: Hello, World!

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
        This is a multiline string.
        It can span multiple lines.
    </p>`
);
console.log(returnMultipleLines()); // Must use parentheses for multiline strings