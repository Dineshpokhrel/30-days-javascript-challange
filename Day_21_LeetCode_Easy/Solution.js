// Day 21: LeetCode Easy

// Activity 1: Two Sum

// Task 1: Solve the "Two Sum" problem on LeetCode.
function twoSum(nums, target) {
    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
    }
    return null;
}

// Test cases for Two Sum
console.log(twoSum([2, 7, 11, 15], 9));  // [0, 1]
console.log(twoSum([3, 2, 4], 6));       // [1, 2]
console.log(twoSum([3, 3], 6));          // [0, 1]

// Activity 2: Reverse Integer

// Task 2: Solve the "Reverse Integer" problem on LeetCode.
function reverseInteger(x) {
    const isNegative = x < 0;
    let reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''), 10);
    if (reversed > 0x7FFFFFFF) {
        return 0;
    }
    return isNegative ? -reversed : reversed;
}

// Test cases for Reverse Integer
console.log(reverseInteger(123));   // 321
console.log(reverseInteger(-123));  // -321
console.log(reverseInteger(120));   // 21

// Activity 3: Palindrome Number

// Task 3: Solve the "Palindrome Number" problem on LeetCode.
function isPalindrome(x) {
    if (x < 0) return false;
    const str = x.toString();
    return str === str.split('').reverse().join('');
}

// Test cases for Palindrome Number
console.log(isPalindrome(121));   // true
console.log(isPalindrome(-121));  // false
console.log(isPalindrome(10));    // false

// Activity 4: Merge Two Sorted Lists

// Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    const dummy = new ListNode();
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    current.next = l1 !== null ? l1 : l2;

    return dummy.next;
}

// Test cases for Merge Two Sorted Lists
function createList(arr) {
    const dummy = new ListNode();
    let current = dummy;
    arr.forEach(val => {
        current.next = new ListNode(val);
        current = current.next;
    });
    return dummy.next;
}

function printList(node) {
    const result = [];
    while (node !== null) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result.join(' -> '));
}

const l1 = createList([1, 2, 4]);
const l2 = createList([1, 3, 4]);
printList(mergeTwoLists(l1, l2));  // 1 -> 1 -> 2 -> 3 -> 4 -> 4

// Activity 5: Valid Parentheses

// Task 5: Solve the "Valid Parentheses" problem on LeetCode.
function isValid(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (Object.values(map).includes(char)) {
            stack.push(char);
        } else if (Object.keys(map).includes(char)) {
            if (stack.pop() !== map[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// Test cases for Valid Parentheses
console.log(isValid("()"));     // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]"));     // false
console.log(isValid("([)]"));   // false
console.log(isValid("{[]}"));   // true
