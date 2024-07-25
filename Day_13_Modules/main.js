// main.js

// Task 1: Importing add function from add.js
import { add } from './add.js';
console.log('Add:', add(2, 3));

// Task 2: Importing person object from person.js
import person from './person.js';
person.greet();

// Task 3: Importing named exports from utilities.js
import { multiply, divide } from './utilities.js';
console.log('Multiply:', multiply(2, 3));
try {
    console.log('Divide:', divide(6, 2));
    console.log('Divide by zero:', divide(6, 0));
} catch (error) {
    console.error(error.message);
}

// Task 4: Importing default export from defaultExport.js
import subtract from './defaultExport.js';
console.log('Subtract:', subtract(5, 3));

// Task 5: Importing entire module as an object from constants.js
import * as constants from './constants.js';
console.log('PI:', constants.PI);
console.log('E:', constants.E);
console.log('Square of 3:', constants.square(3));
console.log('Cube of 3:', constants.cube(3));

// Task 6 & 7: Using Third-Party Modules (Lodash and Axios)
import _ from 'lodash';
import axios from 'axios';

console.log('Lodash chunk:', _.chunk([1, 2, 3, 4, 5], 2));

axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => console.log('Axios response:', response.data))
    .catch(error => console.error('Axios error:', error));

// Task 8: Module Bundling (Optional, see Webpack configuration)
