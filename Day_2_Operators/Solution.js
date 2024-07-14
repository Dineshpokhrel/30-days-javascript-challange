// Activity 1: Arithmetic Operations

// Task 1: Write a program to add two numbers and log the result to the console.
let num1 = 5;
let num2 = 3;
let sum = num1 + num2;
console.log("Sum:", sum); // Output: Sum: 8

// Task 2: Write a program to subtract two numbers and log the result to the console.
let difference = num1 - num2;
console.log("Difference:", difference); // Output: Difference: 2

// Task 3: Write a program to multiply two numbers and log the result to the console.
let product = num1 * num2;
console.log("Product:", product); // Output: Product: 15

// Task 4: Write a program to divide two numbers and log the result to the console.
let quotient = num1 / num2;
console.log("Quotient:", quotient); // Output: Quotient: 1.6666666666666667

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
let remainder = num1 % num2;
console.log("Remainder:", remainder); // Output: Remainder: 2

// Activity 2: Assignment Operator

// Task 6: Use the += operator to add a number to a variable and log the result to the console.
let value = 10;
value += 5;
console.log("Value after += 5:", value); // Output: Value after += 5: 15

// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
value -= 3;
console.log("Value after -= 3:", value); // Output: Value after -= 3: 12

// Activity 3: Comparison Operator

//Task 8: Write a program to compare two numbers using > and < and log the result to the console.
let a = 7;
let b = 5;
console.log("a > b:", a > b); // Output: a > b: true
console.log("a < b:", a < b); // Output: a < b: false

//Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
console.log("a >= b:", a >= b); // Output: a >= b: true
console.log("a <= b:", a <= b); // Output: a <= b: false

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
let c = '7';
console.log("a == c:", a == c); // Output: a == c: true (only compares values)
console.log("a === c:", a === c); // Output: a === c: false (compares values and types)


// Activity 4: Logical Operators
// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.

let condition1 = a > b;
let condition2 = b < a;
console.log("condition1 && condition2:", condition1 && condition2); // Output: condition1 && condition2: true

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
let condition3 = a < b;
console.log("condition1 || condition3:", condition1 || condition3); // Output: condition1 || condition3: true

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
console.log("!condition3:", !condition3); // Output: !condition3: true

// Activity 5: Ternary Operator
//Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let number = -10;
let result = number >= 0 ? "Positive" : "Negative";
console.log("The number is:", result); // Output: The number is: Negative


//Feature Request
// 1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.

let numA = 8;
let numB = 2;

console.log("Addition:", numA + numB); // Output: Addition: 10
console.log("Subtraction:", numA - numB); // Output: Subtraction: 6
console.log("Multiplication:", numA * numB); // Output: Multiplication: 16
console.log("Division:", numA / numB); // Output: Division: 4
console.log("Remainder:", numA % numB); // Output: Remainder: 0


// 2. Comparison and Logical Operation Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
let x = 4;
let y = 10;

console.log("x > y:", x > y); // Output: x > y: false
console.log("x < y:", x < y); // Output: x < y: true
console.log("x >= y:", x >= y); // Output: x >= y: false
console.log("x <= y:", x <= y); // Output: x <= y: true
console.log("x == y:", x == y); // Output: x == y: false
console.log("x === y:", x === y); // Output: x === y: false

let cond1 = x < y;
let cond2 = x > 2;
console.log("cond1 && cond2:", cond1 && cond2); // Output: cond1 && cond2: true
console.log("cond1 || cond2:", cond1 || cond2); // Output: cond1 || cond2: true
console.log("!cond1:", !cond1); // Output: !cond1: false


// 3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.

let valueToCheck = 5;
let checkResult = valueToCheck >= 0 ? "Positive" : "Negative";
console.log("The number is:", checkResult); // Output: The number is: Positive
