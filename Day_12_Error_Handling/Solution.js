// Day 12: Error Handling

// Activity 1: Basic Error Handling with Try-Catch

// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function throwError() {
    throw new Error("This is an intentional error");
}

try {
    throwError();
} catch (error) {
    console.error("Caught an error:", error.message);
}

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
    console.log(divide(10, 2));  // Valid case
    console.log(divide(10, 0));  // Invalid case, will throw an error
} catch (error) {
    console.error("Error:", error.message);
}

// Activity 2: Finally Block

// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
function exampleFunction() {
    try {
        console.log("In try block");
        throw new Error("An error occurred");
    } catch (error) {
        console.error("Caught an error:", error.message);
    } finally {
        console.log("In finally block");
    }
}

exampleFunction();

// Activity 3: Custom Error Objects

// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function throwCustomError() {
    throw new CustomError("This is a custom error");
}

try {
    throwCustomError();
} catch (error) {
    if (error instanceof CustomError) {
        console.error("Caught a custom error:", error.message);
    } else {
        console.error("Caught an unknown error:", error.message);
    }
}

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateInput(input) {
    if (!input) {
        throw new ValidationError("Input cannot be empty");
    }
    return input;
}

try {
    console.log(validateInput("Valid input"));  // Valid case
    console.log(validateInput(""));  // Invalid case, will throw an error
} catch (error) {
    if (error instanceof ValidationError) {
        console.error("Validation error:", error.message);
    } else {
        console.error("Unknown error:", error.message);
    }
}

// Activity 4: Error Handling in Promises

// Task 6: Create a promise that randomly resolves or rejects. Use `.catch()` to handle the rejection and log an appropriate message to the console.
const randomPromise = new Promise((resolve, reject) => {
    const random = Math.random();
    if (random > 0.5) {
        resolve("Promise resolved");
    } else {
        reject(new Error("Promise rejected"));
    }
});

randomPromise
    .then(message => console.log(message))
    .catch(error => console.error("Caught an error:", error.message));

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
async function handleRandomPromise() {
    try {
        const message = await randomPromise;
        console.log(message);
    } catch (error) {
        console.error("Caught an error:", error.message);
    }
}

handleRandomPromise();

// Activity 5: Graceful Error Handling in Fetch

// Task 8: Use the `fetch` API to request data from an invalid URL and handle the error using `.catch()`. Log an appropriate error message to the console.
fetch('https://invalid-url.com')
    .then(response => response.json())
    .catch(error => console.error("Fetch error:", error.message));

// Task 9: Use the `fetch` API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
async function fetchData() {
    try {
        const response = await fetch('https://invalid-url.com');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Fetch error:", error.message);
    }
}

fetchData();

// Feature Request Implementations

// 1. Basic Error Handling Script
function basicErrorHandling() {
    try {
        throw new Error("Basic error");
    } catch (error) {
        console.error("Caught an error:", error.message);
    } finally {
        console.log("Finally block executed");
    }
}

basicErrorHandling();

// 2. Custom Error Script
class MyCustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "MyCustomError";
    }
}

function handleCustomError() {
    try {
        throw new MyCustomError("Custom error occurred");
    } catch (error) {
        if (error instanceof MyCustomError) {
            console.error("Caught custom error:", error.message);
        } else {
            console.error("Unknown error:", error.message);
        }
    }
}

handleCustomError();

// 3. Promise Error Handling Script
const promiseWithError = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Promise error")), 1000);
});

promiseWithError
    .catch(error => console.error("Promise catch error:", error.message));

async function asyncFunctionWithError() {
    try {
        await promiseWithError;
    } catch (error) {
        console.error("Async function catch error:", error.message);
    }
}

asyncFunctionWithError();

// 4. Fetch Error Handling Script
// Using .catch()
fetch('https://invalid-url.com')
    .then(response => response.json())
    .catch(error => console.error("Fetch error:", error.message));

// Using try-catch in async function
async function fetchWithError() {
    try {
        const response = await fetch('https://invalid-url.com');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Fetch error:", error.message);
    }
}

fetchWithError();
