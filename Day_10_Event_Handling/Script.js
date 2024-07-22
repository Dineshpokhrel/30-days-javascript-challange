// Day 10: Event Handling

// Activity 1: Basic Event Handling

// Task 1: Add a click event listener to a button that changes the text content of a paragraph.
const changeTextButton = document.getElementById('changeTextButton');
const textParagraph = document.getElementById('textParagraph');
if (changeTextButton) {
    changeTextButton.addEventListener('click', () => {
        if (textParagraph) {
            textParagraph.textContent = 'Text Changed!';
        }
    });
}

// Task 2: Add a double-click event listener to an image that toggles its visibility.
const toggleImage = document.getElementById('toggleImage');
if (toggleImage) {
    toggleImage.addEventListener('dblclick', () => {
        toggleImage.style.display = toggleImage.style.display === 'none' ? 'block' : 'none';
    });
}

// Activity 2: Mouse Events

// Task 3: Add a mouseover event listener to an element that changes its background color.
const hoverElement = document.getElementById('hoverElement');
if (hoverElement) {
    hoverElement.addEventListener('mouseover', () => {
        hoverElement.style.backgroundColor = 'lightblue';
    });
}

// Task 4: Add a mouseout event listener to an element that resets its background color.
if (hoverElement) {
    hoverElement.addEventListener('mouseout', () => {
        hoverElement.style.backgroundColor = '';
    });
}

// Activity 3: Keyboard Events

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
const inputField = document.getElementById('inputField');
if (inputField) {
    inputField.addEventListener('keydown', (event) => {
        console.log(`Key pressed: ${event.key}`);
    });
}

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
const inputValueParagraph = document.getElementById('inputValueParagraph');
if (inputField) {
    inputField.addEventListener('keyup', () => {
        if (inputValueParagraph) {
            inputValueParagraph.textContent = inputField.value;
        }
    });
}

// Activity 4: Form Events

// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const myForm = document.getElementById('myForm');
if (myForm) {
    myForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(myForm);
        formData.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });
    });
}

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
const mySelect = document.getElementById('mySelect');
const selectedValueParagraph = document.getElementById('selectedValueParagraph');
if (mySelect) {
    mySelect.addEventListener('change', () => {
        if (selectedValueParagraph) {
            selectedValueParagraph.textContent = `Selected: ${mySelect.value}`;
        }
    });
}

// Activity 5: Event Delegation

// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
const myList = document.getElementById('myList');
if (myList) {
    myList.addEventListener('click', (event) => {
        if (event.target && event.target.nodeName === 'LI') {
            console.log(`List item clicked: ${event.target.textContent}`);
        }
    });
}

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
const parentElement = document.getElementById('parentElement');
if (parentElement) {
    parentElement.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('childElement')) {
            console.log(`Dynamically added child element clicked: ${event.target.textContent}`);
        }
    });
}

// Feature Requests

// 1. Click Event Script: Write a script that adds a click event listener to a button to change the text content of a paragraph.
const clickButton = document.getElementById('clickButton');
const clickParagraph = document.getElementById('clickParagraph');
if (clickButton) {
    clickButton.addEventListener('click', () => {
        if (clickParagraph) {
            clickParagraph.textContent = 'Button Clicked!';
        }
    });
}

// 2. Mouse Events Script: Create a script that handles mouseover and mouseout events to change the background color of an element.
const mouseElement = document.getElementById('mouseElement');
if (mouseElement) {
    mouseElement.addEventListener('mouseover', () => {
        mouseElement.style.backgroundColor = 'yellow';
    });
    mouseElement.addEventListener('mouseout', () => {
        mouseElement.style.backgroundColor = '';
    });
}

// 3. Keyboard Events Script: Write a script that logs key presses and displays input field values using keydown and keyup event listeners.
const keyInput = document.getElementById('keyInput');
const keyOutput = document.getElementById('keyOutput');
if (keyInput) {
    keyInput.addEventListener('keydown', (event) => {
        console.log(`Key pressed: ${event.key}`);
    });
    keyInput.addEventListener('keyup', () => {
        if (keyOutput) {
            keyOutput.textContent = keyInput.value;
        }
    });
}

// 4. Form Events Script: Create a script that handles form submission and change events on a select dropdown.
const form = document.getElementById('form');
const dropdown = document.getElementById('dropdown');
const dropdownOutput = document.getElementById('dropdownOutput');
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        formData.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });
    });
}
if (dropdown) {
    dropdown.addEventListener('change', () => {
        if (dropdownOutput) {
            dropdownOutput.textContent = `Selected: ${dropdown.value}`;
        }
    });
}

// 5. Event Delegation Script: Write a script that demonstrates event delegation by handling events on dynamically added child elements.
const parent = document.getElementById('parent');
if (parent) {
    parent.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('child')) {
            console.log(`Child element clicked: ${event.target.textContent}`);
        }
    });
}

// Function to dynamically add a child element for demonstration
function addChild() {
    const newChild = document.createElement('div');
    newChild.className = 'child';
    newChild.textContent = 'Dynamically added child';
    parent.appendChild(newChild);
}

// Adding a child element for demonstration
addChild();
