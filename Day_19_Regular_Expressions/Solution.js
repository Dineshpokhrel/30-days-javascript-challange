// Day 19: Regular Expressions

// Activity 1: Basic Regular Expressions

// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.
function matchJavaScript(str) {
    let regex = /JavaScript/g;
    return str.match(regex);
}

console.log(matchJavaScript("I love JavaScript. JavaScript is awesome.")); // Logs ["JavaScript", "JavaScript"]

// Task 2: Write a regular expression to match all digits in a string. Log the matches.
function matchDigits(str) {
    let regex = /\d/g;
    return str.match(regex);
}

console.log(matchDigits("My phone number is 123-456-7890.")); // Logs ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

// Activity 2: Character Classes and Quantifiers

// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
function matchCapitalWords(str) {
    let regex = /\b[A-Z][a-z]*\b/g;
    return str.match(regex);
}

console.log(matchCapitalWords("Alice and Bob are going to the Zoo.")); // Logs ["Alice", "Bob", "Zoo"]

// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
function matchDigitSequences(str) {
    let regex = /\d+/g;
    return str.match(regex);
}

console.log(matchDigitSequences("The numbers are 42, 123, and 4567.")); // Logs ["42", "123", "4567"]

// Activity 3: Grouping and Capturing

// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.
function capturePhoneNumber(str) {
    let regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
    let match = str.match(regex);
    return match ? match.slice(1) : null;
}

console.log(capturePhoneNumber("(123) 456-7890")); // Logs ["123", "456", "7890"]

// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.
function captureEmail(str) {
    let regex = /(\w+)@(\w+\.\w+)/;
    let match = str.match(regex);
    return match ? match.slice(1) : null;
}

console.log(captureEmail("test@example.com")); // Logs ["test", "example.com"]

// Activity 4: Assertions and Boundaries

// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
function matchWordAtStart(str) {
    let regex = /^\w+/;
    return str.match(regex);
}

console.log(matchWordAtStart("Hello world!")); // Logs ["Hello"]

// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
function matchWordAtEnd(str) {
    let regex = /\w+$/;
    return str.match(regex);
}

console.log(matchWordAtEnd("Hello world!")); // Logs ["world"]

// Activity 5: Practical Applications

// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
function validatePassword(password) {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

console.log(validatePassword("Passw0rd!")); // Logs true

// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.
function validateURL(url) {
    let regex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w- ;,./?%&=]*)?$/;
    return regex.test(url);
}

console.log(validateURL("https://www.example.com")); // Logs true
