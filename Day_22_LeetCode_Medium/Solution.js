// Day 22: LeetCode Medium

// Activity 1: Add Two Numbers

// Task 1: Solve the "Add Two Numbers" problem on LeetCode.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2) {
    const dummy = new ListNode();
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        const x = (l1 !== null) ? l1.val : 0;
        const y = (l2 !== null) ? l2.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummy.next;
}

// Test cases for Add Two Numbers
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

const l1 = createList([2, 4, 3]);
const l2 = createList([5, 6, 4]);
printList(addTwoNumbers(l1, l2));  // 7 -> 0 -> 8

// Activity 2: Longest Substring Without Repeating Characters

// Task 2: Solve the "Longest Substring Without Repeating Characters" problem on LeetCode.
function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    const seenChars = new Map();

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];
        if (seenChars.has(currentChar)) {
            start = Math.max(seenChars.get(currentChar) + 1, start);
        }
        seenChars.set(currentChar, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Test cases for Longest Substring Without Repeating Characters
console.log(lengthOfLongestSubstring("abcabcbb"));  // 3
console.log(lengthOfLongestSubstring("bbbbb"));     // 1
console.log(lengthOfLongestSubstring("pwwkew"));    // 3
console.log(lengthOfLongestSubstring(""));          // 0

// Activity 3: Container With Most Water

// Task 3: Solve the "Container With Most Water" problem on LeetCode.
function maxArea(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const width = right - left;
        const currentHeight = Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, width * currentHeight);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

// Test cases for Container With Most Water
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));  // 49
console.log(maxArea([1, 1]));                       // 1

// Activity 4: 3Sum

// Task 4: Solve the "3Sum" problem on LeetCode.
function threeSum(nums) {
    const results = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                results.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return results;
}

// Test cases for 3Sum
console.log(threeSum([-1, 0, 1, 2, -1, -4]));  // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([]));                    // []
console.log(threeSum([0]));                   // []

// Activity 5: Group Anagrams

// Task 5: Solve the "Group Anagrams" problem on LeetCode.
function groupAnagrams(strs) {
    const anagrams = new Map();

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!anagrams.has(sortedStr)) {
            anagrams.set(sortedStr, []);
        }
        anagrams.get(sortedStr).push(str);
    }

    return Array.from(anagrams.values());
}

// Test cases for Group Anagrams
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));  // [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
console.log(groupAnagrams([""]));                                       // [[""]]
console.log(groupAnagrams(["a"]));                                      // [["a"]]
