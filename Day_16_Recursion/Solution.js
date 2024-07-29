// Day 16: Recursion

// Activity 1: Basic Recursion

// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Logs 120
console.log(factorial(0)); // Logs 1

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); // Logs 5
console.log(fibonacci(10)); // Logs 55

// Activity 2: Recursion with Arrays

// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4, 5])); // Logs 15
console.log(sumArray([10, 20, 30])); // Logs 60

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
function maxArray(arr) {
    if (arr.length === 1) return arr[0];
    const restMax = maxArray(arr.slice(1));
    return arr[0] > restMax ? arr[0] : restMax;
}

console.log(maxArray([1, 2, 3, 4, 5])); // Logs 5
console.log(maxArray([10, 20, 30, 5])); // Logs 30

// Activity 3: String Manipulation with Recursion

// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
function reverseString(str) {
    if (str === '') return '';
    return str[str.length - 1] + reverseString(str.slice(0, -1));
}

console.log(reverseString('hello')); // Logs 'olleh'
console.log(reverseString('recursion')); // Logs 'noisrucer'

// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome('madam')); // Logs true
console.log(isPalindrome('hello')); // Logs false

// Activity 4: Recursive Search

// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) return -1;
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1);
    return binarySearch(arr, target, mid + 1, end);
}

console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Logs 2
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // Logs -1

// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
function countOccurrences(arr, target) {
    if (arr.length === 0) return 0;
    const count = arr[0] === target ? 1 : 0;
    return count + countOccurrences(arr.slice(1), target);
}

console.log(countOccurrences([1, 2, 3, 4, 3, 3, 5], 3)); // Logs 3
console.log(countOccurrences([1, 2, 3, 4, 5], 6)); // Logs 0

// Activity 5: Tree Traversal (Optional)

// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraversal(node) {
    if (node === null) return;
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

inOrderTraversal(root); // Logs 4, 2, 5, 1, 3

// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
function treeDepth(node) {
    if (node === null) return 0;
    const leftDepth = treeDepth(node.left);
    const rightDepth = treeDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
}

console.log(treeDepth(root)); // Logs 3

// Scripts for Feature Requests:

// Factorial and Fibonacci Script (Task 1 and 2)
console.log(factorial(6)); // Logs 720
console.log(fibonacci(7)); // Logs 13

// Array Recursion Script (Task 3 and 4)
console.log(sumArray([1, 2, 3, 4])); // Logs 10
console.log(maxArray([3, 5, 1, 2, 4])); // Logs 5

// String Recursion Script (Task 5 and 6)
console.log(reverseString('javascript')); // Logs 'tpircsavaj'
console.log(isPalindrome('racecar')); // Logs true

// Recursive Search Script (Task 7 and 8)
console.log(binarySearch([1, 2, 3, 4, 5], 4)); // Logs 3
console.log(countOccurrences([2, 2, 2, 3, 3], 2)); // Logs 3

// Tree Traversal Script (Task 9 and 10)
const newRoot = new TreeNode(10);
newRoot.left = new TreeNode(5);
newRoot.right = new TreeNode(15);
newRoot.left.left = new TreeNode(2);
newRoot.left.right = new TreeNode(7);

inOrderTraversal(newRoot); // Logs 2, 5, 7, 10, 15
console.log(treeDepth(newRoot)); // Logs 3
