// Day 15: Closures

// Activity 1: Understanding Closures

// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope.
function outerFunction() {
    const outerVariable = 'Outer';

    return function innerFunction() {
        console.log(outerVariable);
    };
}

const inner = outerFunction();
inner(); // Logs 'Outer'

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function createCounter() {
    let counter = 0;

    return {
        increment() {
            counter++;
        },
        getCount() {
            return counter;
        }
    };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCount()); // Logs 2

// Activity 2: Practical Closures

// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function createIDGenerator() {
    let lastID = 0;

    return function generateID() {
        lastID++;
        return lastID;
    };
}

const generateID = createIDGenerator();
console.log(generateID()); // Logs 1
console.log(generateID()); // Logs 2

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
function createGreeting(name) {
    return function greet() {
        console.log(`Hello, ${name}!`);
    };
}

const greetJohn = createGreeting('DP');
greetJohn(); // Logs 'Hello, DP!'

// Activity 3: Closures in Loops

// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
function createFunctionArray() {
    const functions = [];

    for (let i = 0; i < 5; i++) {
        functions.push(function() {
            console.log(i);
        });
    }

    return functions;
}

const functionsArray = createFunctionArray();
functionsArray[0](); // Logs 0
functionsArray[1](); // Logs 1
functionsArray[2](); // Logs 2

// Activity 4: Module Pattern

// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
const itemManager = (function() {
    const items = [];

    return {
        addItem(item) {
            items.push(item);
        },
        removeItem(item) {
            const index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
            }
        },
        listItems() {
            return items;
        }
    };
})();

itemManager.addItem('Item1');
itemManager.addItem('Item2');
console.log(itemManager.listItems()); // Logs ['Item1', 'Item2']
itemManager.removeItem('Item1');
console.log(itemManager.listItems()); // Logs ['Item2']

// Activity 5: Memoization

// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);
        if (!cache[key]) {
            cache[key] = fn(...args);
        }
        return cache[key];
    };
}

// Task 8: Create a memoized version of a function that calculates the factorial of a number.
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5)); // Logs 120
console.log(memoizedFactorial(5)); // Logs 120 from cache

// Scripts for Feature Requests:

// Basic Closure Script (Task 1)
const basicClosure = outerFunction();
basicClosure(); // Logs 'Outer'

// Counter Closure Script (Task 2)
const counterClosure = createCounter();
counterClosure.increment();
counterClosure.increment();
console.log(counterClosure.getCount()); // Logs 2

// Unique ID Generator Script (Task 3)
const uniqueIDGenerator = createIDGenerator();
console.log(uniqueIDGenerator()); // Logs 1
console.log(uniqueIDGenerator()); // Logs 2

// Loop Closure Script (Task 5)
const loopClosureFunctions = createFunctionArray();
loopClosureFunctions[0](); // Logs 0
loopClosureFunctions[1](); // Logs 1

// Memoization Script (Task 7 and 8)
const memoFactorial = memoize(factorial);
console.log(memoFactorial(6)); // Logs 720
console.log(memoFactorial(6)); // Logs 720 from cache
