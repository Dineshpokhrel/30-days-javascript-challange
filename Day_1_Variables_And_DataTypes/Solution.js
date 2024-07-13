// Activity 1: Variable Declaration
// Task 1: Declare a variable using var, assign it a number, and log the value to the console.

var myNumber = 10;
console.log(myNumber); // Output: 10


//Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let myString = "Hello, JavaScript! We are doing 30 days javascript challange";
console.log(myString); // Output: Hello, JavaScript! We are doing 30 days javascript challange


//Activity 2: Constant Declaration
//Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.

const myBoolean = true;
console.log(myBoolean); // Output: true

const myBoolean1 = false;
console.log(myBoolean1); // Output: false


//Activity 3: Data Types
//Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

let num = 100;
let str = "JavaScript";
let bool = true;
let obj = {
    key: "value",
    name : "Dinesh Pokhrel",
    age: 25
};
let arr = [1, 2, 3, 4, 5];

console.log("Value:", num, "Type:", typeof num); // Value: 100 Type: number
console.log("Value:", str, "Type:", typeof str); // Value: JavaScript Type: string
console.log("Value:", bool, "Type:", typeof bool); // Value: true Type: boolean
console.log("Value:", obj, "Type:", typeof obj); // Value: [object Object] Type: object
console.log("Value:", arr, "Type:", typeof arr); // Value: 1,2,3,4,5 Type: object


//Activity 4: Reassigning Variables
//Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.


let myVariable = "Initial value";
console.log(myVariable); // Output: Initial value

myVariable = "New value";
console.log(myVariable); // Output: New value


//Activity 5: Understanding const
//Task 6: Try reassigning a variable declared with const and observe the error.


const myConst = "Constant value";
console.log(myConst); // Output: Constant value

// Uncomment the next line to see the error

// myConst = "New value"; // Error: Assignment to constant variable.


