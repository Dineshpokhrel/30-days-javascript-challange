// person.js
const person = {
    name: 'Dinesh Pokhrel',
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

export default person;
