// Day 9: DOM Manipulation

// Activity 1: Selecting and Manipulating Elements

// Task 1: Select an HTML element by its ID and change its text content.
const myParagraph = document.getElementById('myParagraph');
if (myParagraph) {
    myParagraph.textContent = 'Changed Text';
}

// Task 2: Select an HTML element by its class and change its background color.
const myDiv = document.querySelector('.myDiv');
if (myDiv) {
    myDiv.style.backgroundColor = 'lightblue';
}

// Activity 2: Creating and Appending Elements

// Task 3: Create a new `div` element with some text content and append it to the body.
const newDiv = document.createElement('div');
newDiv.textContent = 'This is a new div';
document.body.appendChild(newDiv);

// Task 4: Create a new `li` element and add it to an existing `ul` list.
const newLi = document.createElement('li');
newLi.textContent = 'Item 3';
const myList = document.getElementById('myList');
if (myList) {
    myList.appendChild(newLi);
}

// Activity 3: Removing Elements

// Task 5: Select an HTML element and remove it from the DOM.
const elementToRemove = document.getElementById('removeMe');
if (elementToRemove) {
    elementToRemove.parentNode.removeChild(elementToRemove);
}

// Task 6: Remove the last child of a specific HTML element.
const list = document.getElementById('myList');
if (list) {
    list.removeChild(list.lastElementChild);
}

// Activity 4: Modifying Attributes and Classes

// Task 7: Select an HTML element and change one of its attributes (e.g., `src` of an `img` tag).
const myImage = document.getElementById('myImage');
if (myImage) {
    myImage.src = '../public/image/jsChallange.png';
}

// Task 8: Add and remove a CSS class to/from an HTML element.
const paragraph = document.getElementById('myParagraph');
if (paragraph) {
    paragraph.classList.add('highlight');
    setTimeout(() => {
        paragraph.classList.remove('highlight');
    }, 2000);
}

// Activity 5: Event Handling

// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
const myButton = document.getElementById('myButton');
if (myButton) {
    myButton.addEventListener('click', () => {
        const myParagraph = document.getElementById('myParagraph');
        if (myParagraph) {
            myParagraph.textContent = 'Text Changed!';
        }
    });
}

// Task 10: Add a mouseover event listener to an element that changes its border color.
const hoverDiv = document.getElementById('hoverDiv');
if (hoverDiv) {
    hoverDiv.addEventListener('mouseover', () => {
        hoverDiv.style.borderColor = 'red';
    });

    hoverDiv.addEventListener('mouseout', () => {
        hoverDiv.style.borderColor = 'black';
    });
}

// Feature Requests

// 1. Element Creation Script: Create a script that demonstrates creating a new `div` element and appending it to the body.
const createdDiv = document.createElement('div');
createdDiv.textContent = 'This is a new div element';
document.body.appendChild(createdDiv);

// 2. Element Removal Script: Write a script that selects an HTML element and removes it from the DOM.
const elementToRemove2 = document.getElementById('removeMe2');
if (elementToRemove2) {
    elementToRemove2.parentNode.removeChild(elementToRemove2);
}

// 3. Attribute Modification Script: Create a script that changes the attributes of an HTML element.
const myImage2 = document.getElementById('myImage2');
if (myImage2) {
    myImage2.src = '../public/image/js2.png';
}

// 4. Event Handling Script: Write a script that adds event listeners to HTML elements to change their content or style based on user interactions.
const changeTextButton = document.getElementById('changeTextButton');
if (changeTextButton) {
    changeTextButton.addEventListener('click', () => {
        const textParagraph = document.getElementById('textParagraph');
        if (textParagraph) {
            textParagraph.textContent = 'Text Changed!';
        }
    });
}

const hoverDiv2 = document.getElementById('hoverDiv2');
if (hoverDiv2) {
    hoverDiv2.addEventListener('mouseover', () => {
        hoverDiv2.style.borderColor = 'blue';
    });

    hoverDiv2.addEventListener('mouseout', () => {
        hoverDiv2.style.borderColor = 'black';
    });
}
