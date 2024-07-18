// Activity 1: Function Declaration
// Task 1: Write a function to check if a number is even or odd and log the result to the console.

function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even.`);
    } else {
        console.log(`${number} is odd.`);
    }
}

// Example usage:
checkEvenOrOdd(5);
checkEvenOrOdd(8);

// Task 2: Write a function to calculate the square of a number and return the result.

function square(number) {
    return number * number;
}

// Example usage:
console.log(`The square of 4 is ${square(4)}`);
console.log(`The square of 7 is ${square(7)}`);

// Activity 2: Function Expression
// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const findMax = function(a, b) {
    return a > b ? a : b;
}

// Example usage:
console.log(`The maximum of 5 and 10 is ${findMax(5, 10)}`);
console.log(`The maximum of 20 and 15 is ${findMax(20, 15)}`);

//Task 4: Write a function expression to concatenate two strings and return the result.
const concatenateStrings = function(str1, str2) {
    return str1 + str2;
}

// Example usage:
console.log(concatenateStrings("Hello, ", "World!"));
console.log(concatenateStrings("Good ", "Morning!"));


// Activity 3: Arrow Functions
// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const sum = (a, b) => a + b;

// Example usage:
console.log(`The sum of 3 and 4 is ${sum(3, 4)}`);
console.log(`The sum of 7 and 8 is ${sum(7, 8)}`);

//Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const containsCharacter = (str, char) => str.includes(char);

// Example usage:
console.log(containsCharacter("Hello", "e")); // true
console.log(containsCharacter("World", "a")); // false

// Activity 4: Function Parameters and Default Values
// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function multiply(a, b = 1) {
    return a * b;
}

// Example usage:
console.log(multiply(5, 2)); // 10
console.log(multiply(7));    // 7


// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greet(name, age = 'unknown') {
    return `Hello, ${name}! Your age is ${age}.`;
}

// Example usage:
console.log(greet("Alice", 25));  // Hello, Alice! Your age is 25.
console.log(greet("Bob"));        // Hello, Bob! Your age is unknown.


// Activity 5: Higher-Order Functions
// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function repeatFunction(func, times) {
    for (let i = 0; i < times; i++) {
        func();
    }
}

// Example usage:
const sayHello = () => console.log("Hello!");

repeatFunction(sayHello, 3);  // Prints "Hello!" three times

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function applyFunctions(func1, func2, value) {
    return func2(func1(value));
}

// Example usage:
const addTwo = x => x + 2;
const multiplyByThree = x => x * 3;

console.log(applyFunctions(addTwo, multiplyByThree, 5));  // (5 + 2) * 3 = 21




// Feature Requests
// 5. Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times.
function repeatFunction1(func, times) {
    for (let i = 0; i < times; i++) {
        func();
    }
}

// Example usage:
const sayHello1 = () => console.log("Hello!");

repeatFunction1(sayHello1, 3);  // Prints "Hello!" three times


