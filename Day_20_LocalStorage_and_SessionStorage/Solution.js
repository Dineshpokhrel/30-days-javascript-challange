// Day 20: LocalStorage and SessionStorage

// Activity 1: Understanding LocalStorage

// Task 1: Write a script to save a string value to `localStorage` and retrieve it. Log the retrieved value.
function saveStringToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getStringFromLocalStorage(key) {
    return localStorage.getItem(key);
}

saveStringToLocalStorage('greeting', 'Hello, World!');
console.log(getStringFromLocalStorage('greeting')); // Logs "Hello, World!"

// Task 2: Write a script to save an object to `localStorage` by converting it to a JSON string. Retrieve and parse the object, then log it.
function saveObjectToLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
}

function getObjectFromLocalStorage(key) {
    const objStr = localStorage.getItem(key);
    return objStr ? JSON.parse(objStr) : null;
}

saveObjectToLocalStorage('user', { name: 'Alice', age: 25 });
console.log(getObjectFromLocalStorage('user')); // Logs { name: 'Alice', age: 25 }

// Activity 2: Using LocalStorage

// Task 3: Create a simple form that saves user input (e.g., name and email) to `localStorage` when submitted. Retrieve and display the saved data on page load.
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#userForm');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const userData = getObjectFromLocalStorage('userData');

    if (userData) {
        nameInput.value = userData.name;
        emailInput.value = userData.email;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const user = {
            name: nameInput.value,
            email: emailInput.value
        };
        saveObjectToLocalStorage('userData', user);
        alert('Data saved to localStorage.');
    });
});

// Task 4: Write a script to remove an item from `localStorage`. Log the `localStorage` content before and after removal.
function removeItemFromLocalStorage(key) {
    console.log('Before removal:', localStorage);
    localStorage.removeItem(key);
    console.log('After removal:', localStorage);
}

removeItemFromLocalStorage('greeting');

// Activity 3: Understanding SessionStorage

// Task 5: Write a script to save a string value to `sessionStorage` and retrieve it. Log the retrieved value.
function saveStringToSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
}

function getStringFromSessionStorage(key) {
    return sessionStorage.getItem(key);
}

saveStringToSessionStorage('sessionGreeting', 'Hello, Session!');
console.log(getStringFromSessionStorage('sessionGreeting')); // Logs "Hello, Session!"

// Task 6: Write a script to save an object to `sessionStorage` by converting it to a JSON string. Retrieve and parse the object, then log it.
function saveObjectToSessionStorage(key, obj) {
    sessionStorage.setItem(key, JSON.stringify(obj));
}

function getObjectFromSessionStorage(key) {
    const objStr = sessionStorage.getItem(key);
    return objStr ? JSON.parse(objStr) : null;
}

saveObjectToSessionStorage('sessionUser', { name: 'Bob', age: 30 });
console.log(getObjectFromSessionStorage('sessionUser')); // Logs { name: 'Bob', age: 30 }

// Activity 4: Using SessionStorage

// Task 7: Create a simple form that saves user input (e.g., name and email) to `sessionStorage` when submitted. Retrieve and display the saved data on page load.
document.addEventListener('DOMContentLoaded', () => {
    const sessionForm = document.querySelector('#sessionForm');
    const sessionNameInput = document.querySelector('#sessionName');
    const sessionEmailInput = document.querySelector('#sessionEmail');
    const sessionUserData = getObjectFromSessionStorage('sessionUserData');

    if (sessionUserData) {
        sessionNameInput.value = sessionUserData.name;
        sessionEmailInput.value = sessionUserData.email;
    }

    sessionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const sessionUser = {
            name: sessionNameInput.value,
            email: sessionEmailInput.value
        };
        saveObjectToSessionStorage('sessionUserData', sessionUser);
        alert('Data saved to sessionStorage.');
    });
});

// Task 8: Write a script to remove an item from `sessionStorage`. Log the `sessionStorage` content before and after removal.
function removeItemFromSessionStorage(key) {
    console.log('Before removal:', sessionStorage);
    sessionStorage.removeItem(key);
    console.log('After removal:', sessionStorage);
}

removeItemFromSessionStorage('sessionGreeting');

// Activity 5: Comparing LocalStorage and SessionStorage

// Task 9: Write a function that accepts a key and a value, and saves the value to both `localStorage` and `sessionStorage`. Retrieve and log the values from both storage mechanisms.
function saveToBothStorages(key, value) {
    saveStringToLocalStorage(key, value);
    saveStringToSessionStorage(key, value);
    console.log('From localStorage:', getStringFromLocalStorage(key));
    console.log('From sessionStorage:', getStringFromSessionStorage(key));
}

saveToBothStorages('dualStorageKey', 'Dual Storage Value');

// Task 10: Write a function that clears all data from both `localStorage` and `sessionStorage`. Verify that both storages are empty.
function clearBothStorages() {
    localStorage.clear();
    sessionStorage.clear();
    console.log('localStorage after clear:', localStorage);
    console.log('sessionStorage after clear:', sessionStorage);
}

clearBothStorages();
