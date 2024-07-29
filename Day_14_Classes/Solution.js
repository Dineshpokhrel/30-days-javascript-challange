// Day 14: Classes

// Activity 1: Class Definition

// Task 1: Define a class `Person` with properties `name` and `age`, and a method to return a greeting message.
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greeting() {
        return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }

    // Task 7: Add a getter method to return the full name
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // Task 8: Add a setter method to update the name properties
    set fullName(name) {
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Task 5: Add a static method to return a generic greeting message
    static genericGreeting() {
        return 'Hello! This is a generic greeting message.';
    }
}

// Creating an instance of Person and logging the greeting message
const person1 = new Person('Dinesh', 'Pokhrel', 26);
console.log(person1.greeting());

// Updating age and logging the updated age
person1.updateAge(27);

// Using getter to log the full name
console.log(person1.fullName);

// Using setter to update the name and log the updated full name
person1.fullName = 'Dinesh DP';
console.log(person1.fullName);

// Calling the static method without creating an instance
console.log(Person.genericGreeting());

// Activity 2: Class Inheritance

// Task 3: Define a class `Student` that extends the `Person` class
class Student extends Person {
    constructor(firstName, lastName, age, studentId) {
        super(firstName, lastName, age);
        this.studentId = studentId;

        // Task 6: Incrementing static property for each student instance
        Student.studentCount = (Student.studentCount || 0) + 1;
    }

    getStudentId() {
        return `Student ID: ${this.studentId}`;
    }

    // Task 4: Override the greeting method to include the student ID
    greeting() {
        return `${super.greeting()} My student ID is ${this.studentId}.`;
    }

    // Task 6: Static property to track the number of students
    static getStudentCount() {
        return `Total number of students: ${Student.studentCount}`;
    }
}

// Creating an instance of Student and logging the student ID
const student1 = new Student('Krishna', 'Bhagwan', 22, 'S12345');
console.log(student1.getStudentId());

// Logging the overridden greeting message
console.log(student1.greeting());

// Logging the total number of students
console.log(Student.getStudentCount());

// Creating another instance of Student to test the static property
const student2 = new Student('Shiva', 'Bhagawan', 23, 'S12346');
console.log(Student.getStudentCount());

// Activity 5: Private Fields (Optional)

// Task 9: Define a class `Account` with private fields for balance
class Account {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            console.log('Insufficient balance');
        } else {
            this.#balance -= amount;
            console.log(`Withdrew: ${amount}. New balance: ${this.#balance}`);
        }
    }

    getBalance() {
        return this.#balance;
    }
}

// Creating an instance of Account and testing deposit and withdraw methods
const account1 = new Account(100);
account1.deposit(50);
account1.withdraw(30);
account1.withdraw(150);
console.log(`Final balance: ${account1.getBalance()}`);
