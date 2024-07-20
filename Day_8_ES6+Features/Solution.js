// Activity 1: Template Literals
// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
const name = "Dinesh";
const age = 30;
const introduction = `My name is ${name} and I am ${age} years old.`;
console.log(introduction);  // "My name is Dinesh and I am 30 years old."

// Task 2: Create a multi-line string using template literals and log it to the console.
const multiLineString = `This is a multi-line string.
It spans across multiple lines.
And this is the third line.`;
console.log(multiLineString);
/*
This is a multi-line string.
It spans across multiple lines.
And this is the third line.
*/

// Activity 2: Destructuring
// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const numbers = [10, 20, 30, 40];
const [first, second] = numbers;
console.log(first);  // 10
console.log(second);  // 20


// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
    title: "1984",
    author: "George Orwell",
    year: 1949
};
const { title, author } = book;
console.log(title);  // "1984"
console.log(author);  // "George Orwell"


// Activity 3: Spread and Rest Operators
// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4, 5, 6];
console.log(newArray);  // [1, 2, 3, 4, 5, 6]

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3));  // 6
console.log(sum(10, 20, 30, 40));  // 100


// Activity 4: Default Parameters
// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5));  // 5
console.log(multiply(5, 2));  // 10

// Activity 5: Enhanced Object Literals
// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const name1 = "Dinesh";
const age1 = 25;

const person = {
    name1,
    age1,
    greet() {
        return `Hello, my name is ${this.name1} and I am ${this.age1} years old.`;
    }
};
console.log(person);
console.log(person.greet());  // "Hello, my name is Dinesh and I am 25 years old."

// Task 9: Create an object with computed property names based on variables and log the object to the console.
const propName = "dynamicProperty";

const obj = {
    [propName]: "This is a dynamic property"
};
console.log(obj);  // { dynamicProperty: "This is a dynamic property" }



// Feature Requests
// 1. Template Literals Script: Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings.
const userName = "Charlie";
const userAge = 35;

const userIntroduction = `Hello, my name is ${userName} and I am ${userAge} years old.`;
console.log(userIntroduction);

const multiLineTemplateString = `This is an example of a multi-line string.
It can span across multiple lines.
Each new line starts from here.`;
console.log(multiLineTemplateString);

// 2. Destructuring Script: Create a script that uses array and object destructuring to extract values and log them.
const fruits = ["Apple", "Banana", "Cherry"];
const [firstFruit, secondFruit] = fruits;
console.log(firstFruit);  // "Apple"
console.log(secondFruit);  // "Banana"

const movie = {
    name3: "Inception",
    director: "Christopher Nolan",
    year: 2010
};
const { name3, director } = movie;
console.log(name3);  // "Inception"
console.log(director);  // "Christopher Nolan"


// 3. Spread and Rest Operators Script: Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray);  // [1, 2, 3, 4, 5, 6]

function average(...nums) {
    const total = nums.reduce((sum, num) => sum + num, 0);
    return total / nums.length;
}
console.log(average(1, 2, 3));  // 2
console.log(average(4, 5, 6, 7, 8));  // 6

//4. Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling it with different arguments.
function divide(a, b = 1) {
    return a / b;
}
console.log(divide(10));  // 10
console.log(divide(10, 2));  // 5


// 5. Enhanced Object Literals Script: Write a script that uses enhanced object literals to create and log an object with methods and computed property names.
const firstName = "Dinesh";
const lastName = "Pokhrel";

const student = {
    firstName,
    lastName,
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

const dynamicKey = "grade";
const studentDetails = {
    ...student,
    [dynamicKey]: "A+"
};

console.log(student);
console.log(student.getFullName());  // "Dinesh Pokhrel"
console.log(studentDetails);  // { firstName: "Dinesh", lastName: "Pokhrel", getFullName: ƒ, grade: "A+" }
