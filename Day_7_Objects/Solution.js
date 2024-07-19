// Activity 1: Object Creation and Access
// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};
console.log(book);


// Task 2: Access and log the title and author properties of the book object.
console.log(book.title);  // "To Kill a Mockingbird"
console.log(book.author);  // "Harper Lee"

// Activity 2: Object Methods
// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.getDetails = function() {
    return `${this.title} by ${this.author}`;
};
console.log(book.getDetails());  // "To Kill a Mockingbird by Harper Lee"

//Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.updateYear = function(newYear) {
    this.year = newYear;
};
book.updateYear(2005);
console.log(book);  // {title: "To Kill a Mockingbird", author: "Harper Lee", year: 2005, getDetails: ƒ, updateYear: ƒ}


// Activity 3: Nested Objects
// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const library = {
    name: "City Library",
    books: [
        { title: "1984", author: "George Orwell", year: 1949 },
        { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
        { title: "Fahrenheit 451", author: "Ray Bradbury", year: 1953 }
    ]
};
console.log(library);

// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(library.name);  // "City Library"
library.books.forEach(book => {
    console.log(book.title);
});
// "1984"
// "Brave New World"
// "Fahrenheit 451"



// Activity 4: The this Keyword
// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
book.getTitleAndYear = function() {
    return `${this.title} (${this.year})`;
};
console.log(book.getTitleAndYear());  // "To Kill a Mockingbird (2005)"

// Activity 5: Object Iteration
// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for (let key in book) {
    if (book.hasOwnProperty(key)) {
        console.log(`${key}: ${book[key]}`);
    }
}
// title: To Kill a Mockingbird
// author: Harper Lee
// year: 2005
// getDetails: function
// updateYear: function
// getTitleAndYear: function

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

console.log(Object.keys(book));  // ["title", "author", "year", "getDetails", "updateYear", "getTitleAndYear"]
console.log(Object.values(book));  // ["To Kill a Mockingbird", "Harper Lee", 2005, ƒ, ƒ, ƒ]



// Feature Requests
// 1. Book Object Script: Write a script that creates a book object, adds methods to it, and logs its properties and method results.
const bookScript = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    getDetails: function() {
        return `${this.title} by ${this.author}`;
    },
    updateYear: function(newYear) {
        this.year = newYear;
    },
    getTitleAndYear: function() {
        return `${this.title} (${this.year})`;
    }
};
console.log(bookScript.getDetails());
bookScript.updateYear(2023);
console.log(bookScript);
console.log(bookScript.getTitleAndYear());


// 2. Library Object Script: Create a script that defines a library object containing an array of book objects and logs the library's details.
const libraryScript = {
    name: "Community Library",
    books: [
        { title: "Moby Dick", author: "Herman Melville", year: 1851 },
        { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
        { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 }
    ]
};
console.log(libraryScript.name);
libraryScript.books.forEach(book => {
    console.log(`${book.title} by ${book.author}`);
});


// 3. Object Iteration Script: Write a script that demonstrates iterating over an object's properties using for...in loop and Object.keys / Object.values.
const bookIterationScript = {
    title: "War and Peace",
    author: "Leo Tolstoy",
    year: 1869
};

for (let key in bookIterationScript) {
    if (bookIterationScript.hasOwnProperty(key)) {
        console.log(`${key}: ${bookIterationScript[key]}`);
    }
}

console.log(Object.keys(bookIterationScript));  // ["title", "author", "year"]
console.log(Object.values(bookIterationScript));  // ["War and Peace", "Leo Tolstoy", 1869]


